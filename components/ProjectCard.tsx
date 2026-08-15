import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

export default function ProjectCard({ slug, title, summary, stack }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      style={{
        display: "block",
        background: "var(--bg-panel)",
        border: "0.5px solid var(--text-muted)",
        borderRadius: "8px",
        padding: "16px 18px",
        marginBottom: "12px",
      }}
    >
      <p className="mono" style={{ fontSize: "12px", color: "var(--accent-teal)", margin: "0 0 6px" }}>
        ~/projects/{slug}.mdx
      </p>
      <h3 style={{ fontSize: "18px", fontWeight: 500, margin: "0 0 6px", color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "#9A9D9F", margin: "0 0 10px" }}>{summary}</p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {stack.map((s) => (
          <span
            key={s}
            className="mono"
            style={{
              fontSize: "11px",
              color: "var(--text-primary)",
              border: "0.5px solid var(--text-muted)",
              borderRadius: "4px",
              padding: "2px 6px",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
