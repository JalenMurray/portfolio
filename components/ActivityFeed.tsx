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
  if (activity.length === 0) {
    return (
      <p className="mono" style={{ fontSize: "12px", color: "#8A8D92", margin: 0 }}>
        no recent public activity
      </p>
    );
  }

  return (
    <div>
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
  );
}
