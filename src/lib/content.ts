import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface CharacterFrontmatter {
  name: string;
  slug: string;
  type: "canon" | "fan";
  colors: string[];
  powers: string[];
  first_appearance: string;
  first_appearance_url: string;
  tagline: string;
  engagement: string;
  image?: string;
  submitter?: string;
}

export interface Character {
  frontmatter: CharacterFrontmatter;
  content: string;
}

export interface TimelinePost {
  id: string;
  date: string;
  type: "image" | "video";
  title: string;
  description: string;
  engagement: string;
  loreNote: string;
  tweetUrl: string;
  category: "Movies" | "Battles" | "Reveals" | "Variants";
}

export function getAllCharacters(): Character[] {
  const charDir = path.join(contentDir, "characters");
  if (!fs.existsSync(charDir)) return [];

  const files = fs.readdirSync(charDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(charDir, file), "utf-8");
    const { data, content } = matter(raw);
    return { frontmatter: data as CharacterFrontmatter, content };
  });
}

export function getCharacterBySlug(slug: string): Character | null {
  const filePath = path.join(contentDir, "characters", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as CharacterFrontmatter, content };
}

export function getApprovedFanCharacters(): Character[] {
  const approvedDir = path.join(contentDir, "submissions", "approved");
  if (!fs.existsSync(approvedDir)) return [];

  const files = fs.readdirSync(approvedDir).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(approvedDir, file), "utf-8");
    const data = JSON.parse(raw);
    return {
      frontmatter: {
        ...data,
        type: "fan" as const,
      },
      content: data.bio || "",
    };
  });
}

export function getTimelinePosts(): TimelinePost[] {
  const filePath = path.join(contentDir, "posts", "canon-timeline.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export interface PendingSubmission {
  id: string;
  name: string;
  slug: string;
  bio: string;
  imageUrl: string;
  submitterHandle: string;
  submittedAt: string;
  colors: string[];
  powers: string[];
}

export function getPendingSubmissions(): PendingSubmission[] {
  const pendingDir = path.join(contentDir, "submissions", "pending");
  if (!fs.existsSync(pendingDir)) return [];

  const files = fs.readdirSync(pendingDir).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(pendingDir, file), "utf-8");
    return JSON.parse(raw);
  });
}
