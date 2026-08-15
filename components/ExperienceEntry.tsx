export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  detail: string;
};

export default function ExperienceEntryCard({ job }: { job: ExperienceEntry }) {
  return (
    <div
      style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "0.5px solid var(--text-muted)" }}
    >
      <p className="mono" style={{ fontSize: "12px", color: "#8A8D92", margin: "0 0 4px" }}>
        {job.period}
      </p>
      <h3 style={{ fontSize: "17px", fontWeight: 500, margin: "0 0 2px" }}>{job.role}</h3>
      <p style={{ fontSize: "14px", color: "#9A9D9F", margin: "0 0 8px" }}>{job.company}</p>
      <p style={{ fontSize: "14px", lineHeight: 1.6 }}>{job.detail}</p>
    </div>
  );
}
