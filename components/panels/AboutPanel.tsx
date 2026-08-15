import experience from "@/content/experience.json";
import ExperienceEntryCard, { type ExperienceEntry } from "@/components/ExperienceEntry";

const EXPERIENCE = experience as ExperienceEntry[];

export default function AboutPanel() {
  return (
    <div>
      <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "12px" }}>
        ~/experience/
      </p>
      <a
        href="/resume.pdf"
        download="Jalen-Murray-Resume.pdf"
        className="mono"
        style={{ fontSize: "13px", display: "inline-block", marginBottom: "20px" }}
      >
        download resume →
      </a>
      {EXPERIENCE.map((job, i) => (
        <ExperienceEntryCard key={i} job={job} />
      ))}
    </div>
  );
}
