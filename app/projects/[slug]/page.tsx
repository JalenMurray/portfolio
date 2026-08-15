import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function generateStaticParams() {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => ({ slug: filename.replace(/\.mdx$/, "") }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
    <>
      <Nav />
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
        <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "8px" }}>
          ~/projects/{slug}.mdx
        </p>
        <h1 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "6px" }}>{data.title}</h1>
        <p style={{ fontSize: "14px", color: "#9A9D9F", marginBottom: "24px" }}>
          {data.role} · {data.date}
        </p>
        <div style={{ fontSize: "15px", lineHeight: 1.7 }}>
          <MDXRemote source={content} />
        </div>
      </main>
    </>
  );
}
