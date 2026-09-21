import HomeClient from "./home/HomeClient";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default function Home() {
  const posts = getAllPosts();

  const randomPosts = [...posts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return <HomeClient randomPosts={randomPosts} />;
}