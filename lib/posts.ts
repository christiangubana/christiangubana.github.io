// Reads markdown posts from content/blog at build time.
// Each file starts with a frontmatter block:
// ---
// title: ...
// date: YYYY-MM-DD
// description: ...
// tags: a, b, c
// draft: true   (optional, hides the post)
// ---
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { Post, PostMeta } from "../types/sections";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function parse(file: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${file}`);

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const body = match[2];
  const words = body.split(/\s+/).filter(Boolean).length;

  const meta: PostMeta = {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    description: data.description || "",
    tags: data.tags ? data.tags.split(",").map(t => t.trim()) : [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { meta, body, draft: data.draft === "true" };
}

function files() {
  return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return files()
    .map(parse)
    .filter(p => !p.draft)
    .map(p => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post {
  const { meta, body } = parse(`${slug}.md`);
  return { ...meta, html: marked.parse(body, { async: false }) as string };
}
