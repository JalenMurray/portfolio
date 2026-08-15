import type { CowboysStatusData } from "@/lib/cowboys";

function formatRelative(iso: string): string {
  const diffMs = new Date(iso).getTime() - Date.now();
  const future = diffMs >= 0;
  const abs = Math.abs(diffMs);
  const days = Math.floor(abs / 86_400_000);
  const hours = Math.floor(abs / 3_600_000);
  const label = days > 0 ? `${days}d` : hours > 0 ? `${hours}h` : "<1h";
  return future ? `in ${label}` : `${label} ago`;
}

export default function CowboysStatus({ status }: { status: CowboysStatusData }) {
  return (
    <div>
      <p className="mono" style={{ fontSize: "12px", margin: "0 0 10px" }}>
        <span style={{ color: "#8A8D92" }}>record </span>
        <span style={{ color: "var(--accent-teal)" }}>{status.record}</span>
      </p>

      {status.mode === "upcoming" && (
        <p className="mono" style={{ fontSize: "12px", color: "var(--text-primary)", margin: 0 }}>
          <span style={{ color: "#8A8D92" }}>next </span>
          {status.upcoming.home ? "vs" : "@"} {status.upcoming.opponent}
          <span style={{ color: "#8A8D92" }}> · {formatRelative(status.upcoming.date)}</span>
        </p>
      )}

      {status.mode === "previous" && (
        <p className="mono" style={{ fontSize: "12px", color: "var(--text-primary)", margin: 0 }}>
          <span style={{ color: status.previous.result === "W" ? "var(--accent-teal)" : "#E24B4A" }}>
            {status.previous.result}
          </span>{" "}
          {status.previous.teamScore}-{status.previous.opponentScore} {status.previous.home ? "vs" : "@"}{" "}
          {status.previous.opponent}
          <span style={{ color: "#8A8D92" }}> · {formatRelative(status.previous.date)}</span>
        </p>
      )}

      {status.mode === "none" && (
        <p className="mono" style={{ fontSize: "12px", color: "#8A8D92", margin: 0 }}>
          no schedule data available.
        </p>
      )}
    </div>
  );
}
