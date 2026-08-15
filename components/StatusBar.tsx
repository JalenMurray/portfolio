"use client";

import { useEffect, useState } from "react";

type Status = {
  online: boolean;
  uptime: string;
  lastDeployCommit: string;
  lastDeployTime: string;
};

export default function StatusBar() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) return;
        const data: Status = await res.json();
        if (!cancelled) setStatus(data);
      } catch {
        // silently ignore — status bar just shows nothing new on failure
      }
    }

    poll();
    const interval = setInterval(poll, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="mono"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "9px 14px",
        background: "var(--bg-panel)",
        borderTop: "0.5px solid var(--text-muted)",
        fontSize: "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-teal)" }}>
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: status?.online ? "var(--accent-teal)" : "var(--text-muted)",
            display: "inline-block",
          }}
        />
        {status?.online ? "vm online" : "connecting..."}
      </div>
      <div style={{ color: "#8A8D92" }}>
        {status ? `last deploy ${status.lastDeployTime}` : "—"}
      </div>
      <div style={{ color: "#8A8D92" }}>
        {status ? `commit ${status.lastDeployCommit}` : "—"}
      </div>
    </div>
  );
}
