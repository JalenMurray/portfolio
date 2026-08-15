import ProjectCard from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectsPanel({ projects }: { projects: ProjectMeta[] }) {
  return (
    <div>
      <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "20px" }}>
        ~/projects/
      </p>
      {projects.map((p) => (
        <ProjectCard key={p.slug} {...p} />
      ))}
    </div>
  );
}
