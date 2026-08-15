"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const COMMANDS: Record<string, string> = {
  whoami: "/",
  projects: "/projects",
  resume: "/about",
  contact: "/contact",
};

const TYPED_COMMAND = "whoami";

export default function Terminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [typed, setTyped] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTyped(TYPED_COMMAND);
      setIntroDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(TYPED_COMMAND.slice(0, i));
      if (i >= TYPED_COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setIntroDone(true), 200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd in COMMANDS) {
      router.push(COMMANDS[cmd]);
    }
    setInput("");
  }

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        border: "0.5px solid var(--text-muted)",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "640px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 14px",
          borderBottom: "0.5px solid var(--text-muted)",
        }}
      >
        <span className="mono" style={{ fontSize: "12px", color: "#8A8D92" }}>
          jalen@portfolio
        </span>
      </div>
      <div style={{ padding: "28px 20px 24px" }}>
        <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", margin: "0 0 6px" }}>
          jalen@portfolio:~$ {typed}
          <span
            aria-hidden
            className="cursor"
            style={{
              display: introDone ? "none" : "inline-block",
              width: "7px",
              height: "13px",
              marginLeft: "2px",
              background: "var(--accent-teal)",
              verticalAlign: "text-bottom",
            }}
          />
        </p>
        <div
          style={{
            opacity: introDone ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <h1 style={{ fontSize: "26px", fontWeight: 500, margin: "0 0 6px" }}>
            Jalen — Full-stack engineer
          </h1>
          <p style={{ fontSize: "14px", color: "#9A9D9F", margin: "0 0 20px" }}>
            Next.js, cloud infra, and things that shouldn&apos;t be as fun to build as they are.
          </p>
          <nav style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {Object.keys(COMMANDS).map((cmd) => (
              <a
                key={cmd}
                href={COMMANDS[cmd]}
                className="mono"
                style={{
                  fontSize: "12px",
                  color: cmd === "whoami" ? "var(--bg-base)" : "var(--text-primary)",
                  background: cmd === "whoami" ? "var(--accent-amber)" : "transparent",
                  border: cmd === "whoami" ? "none" : "0.5px solid var(--text-muted)",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                {cmd}
              </a>
            ))}
          </nav>
        </div>
        <form onSubmit={handleSubmit} className="mono" style={{ display: "flex", gap: "6px", fontSize: "13px" }}>
          <span style={{ color: "var(--accent-teal)" }}>$</span>
          <input
            aria-label="Terminal command input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a command..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontFamily: "inherit",
              fontSize: "inherit",
              flex: 1,
            }}
          />
        </form>
      </div>
    </div>
  );
}
