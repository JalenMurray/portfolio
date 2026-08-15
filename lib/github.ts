type GithubEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
};

export const GITHUB_USERNAME = "JalenMurray";

export async function getRecentActivity(username: string) {
  const token = process.env.GITHUB_READONLY_TOKEN;
  const res = await fetch(`https://api.github.com/users/${username}/events/public`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    next: { revalidate: 300 }, // cache 5 minutes — avoid hammering GitHub on every page load
  });

  if (!res.ok) {
    return [];
  }

  const events: GithubEvent[] = await res.json();
  return events.slice(0, 5).map((e) => ({
    type: e.type,
    repo: e.repo.name,
    date: e.created_at,
  }));
}
