import Nav from "@/components/Nav";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Nav />
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
        <ProjectsPanel projects={projects} />
      </main>
    </>
  );
}
