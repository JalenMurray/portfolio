import Terminal from "@/components/Terminal";
import ActivityFeed from "@/components/ActivityFeed";
import { getRecentActivity, GITHUB_USERNAME } from "@/lib/github";

export default async function Home() {
  const activity = await getRecentActivity(GITHUB_USERNAME);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
      }}
    >
      <Terminal />
      <ActivityFeed activity={activity} />
    </main>
  );
}
