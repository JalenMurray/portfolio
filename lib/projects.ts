import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  title: string;
  slug: string;
  summary: string;
  stack: string[];
  featured?: boolean;
};

export function getProjects(): ProjectMeta[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((filename) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return data as ProjectMeta;
  });
  return projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}
