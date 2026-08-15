import Desktop from "@/components/Desktop";
import { getRecentActivity, GITHUB_USERNAME } from "@/lib/github";
import { getProjects } from "@/lib/projects";
import { getCowboysStatus } from "@/lib/cowboys";

export default async function Home() {
  const activity = await getRecentActivity(GITHUB_USERNAME);
  const projects = getProjects();
  const cowboys = await getCowboysStatus();

  return (
    <main>
      <Desktop activity={activity} projects={projects} cowboys={cowboys} />
    </main>
  );
}
