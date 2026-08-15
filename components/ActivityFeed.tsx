const EVENT_LABELS: Record<string, string> = {
  PushEvent: "pushed to",
  CreateEvent: "created",
  PullRequestEvent: "opened a PR in",
  IssuesEvent: "opened an issue in",
  WatchEvent: "starred",
  ForkEvent: "forked",
  ReleaseEvent: "published a release in",
};

function formatEvent(type: string) {
  return EVENT_LABELS[type] ?? type.replace(/Event$/, "").toLowerCase();
}

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86_400_000);
  if (days > 0) return `${days}d ago`;
  const hours = Math.floor(diffMs / 3_600_000);
  if (hours > 0) return `${hours}h ago`;
  const minutes = Math.floor(diffMs / 60_000);
  return `${Math.max(minutes, 1)}m ago`;
}

type Activity = { type: string; repo: string; date: string };

export default function ActivityFeed({ activity }: { activity: Activity[] }) {
  if (activity.length === 0) return null;

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        border: "0.5px solid var(--text-muted)",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "640px",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          padding: "10px 14px",
          borderBottom: "0.5px solid var(--text-muted)",
        }}
      >
        <span className="mono" style={{ fontSize: "12px", color: "#8A8D92" }}>
          jalen@portfolio:~$ gh activity --recent
        </span>
      </div>
      <div style={{ padding: "14px 20px" }}>
        {activity.map((event, i) => (
          <p
            key={i}
            className="mono"
            style={{ fontSize: "12px", margin: "0 0 8px", color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--accent-teal)" }}>{formatEvent(event.type)}</span>{" "}
            {event.repo}{" "}
            <span style={{ color: "#8A8D92" }}>· {timeAgo(event.date)}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
