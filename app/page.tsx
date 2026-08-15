import Desktop from "@/components/Desktop";
import { getRecentActivity, GITHUB_USERNAME } from "@/lib/github";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const activity = await getRecentActivity(GITHUB_USERNAME);
  const projects = getProjects();

  return (
    <main>
      <Desktop activity={activity} projects={projects} />
    </main>
  );
}
