import Nav from "@/components/Nav";

const EXPERIENCE = [
  {
    role: "TODO: your title",
    company: "TODO: company",
    period: "TODO: dates",
    detail: "TODO: one or two lines on what you did there.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
        <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "20px" }}>
          ~/experience/
        </p>
        {EXPERIENCE.map((job, i) => (
          <div key={i} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "0.5px solid var(--text-muted)" }}>
            <p className="mono" style={{ fontSize: "12px", color: "#8A8D92", margin: "0 0 4px" }}>{job.period}</p>
            <h3 style={{ fontSize: "17px", fontWeight: 500, margin: "0 0 2px" }}>{job.role}</h3>
            <p style={{ fontSize: "14px", color: "#9A9D9F", margin: "0 0 8px" }}>{job.company}</p>
            <p style={{ fontSize: "14px", lineHeight: 1.6 }}>{job.detail}</p>
          </div>
        ))}
        <a href="/resume.pdf" className="mono" style={{ fontSize: "13px" }}>
          download resume →
        </a>
      </main>
    </>
  );
}
