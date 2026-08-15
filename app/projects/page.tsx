import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function getProjects() {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((filename) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return data as {
      title: string;
      slug: string;
      summary: string;
      stack: string[];
      featured?: boolean;
    };
  });
  return projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Nav />
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
        <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "20px" }}>
          ~/projects/
        </p>
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </main>
    </>
  );
}
