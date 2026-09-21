import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: data.slug ?? file.replace(/\.md$/, ""),
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        imageUrl: data.imageUrl ?? data.image,
        category: data.category,
        content,
      };
    });
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category === categorySlug
  );
}