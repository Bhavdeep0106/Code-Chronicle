export interface BlogCategory {
  slug: string
  title: string
  description: string
  summary: string
  icon: string
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "ai-tools-office",
    title: "AI Tools for Office",
    description:
      "AI tools for research, productivity, documents, communication, meetings, and everyday office work.",
    summary:
      "Explore AI tools that can improve everyday office and knowledge work. This category covers research, document analysis, writing, productivity, information discovery, and AI assistants for practical workflows.",
    icon: "💼",
  },
  {
    slug: "ai-tools-content-creation",
    title: "AI Tools for Content Creation",
    description:
      "AI tools for writing, images, video, audio, design, and creative workflows.",
    summary:
      "Explore AI tools for creating and improving digital content, including writing, image generation, video, audio, design, and creative workflows.",
    icon: "🎨",
  },
  {
    slug: "ai-tools-developing",
    title: "AI Tools for Developing",
    description:
      "AI tools for coding, debugging, development workflows, and building software.",
    summary:
      "Explore AI tools that support developers throughout the software development process, including coding, debugging, research, APIs, testing, and AI-assisted development.",
    icon: "💻",
  },
  {
    slug: "gaming",
    title: "Gaming",
    description:
      "Games, gaming technology, tools, experiments, and the intersection of AI and gaming.",
    summary:
      "Explore gaming-related articles covering games, gaming technology, tools, experiments, and the growing intersection between artificial intelligence and gaming.",
    icon: "🎮",
  },
  {
    slug: "anime-manga",
    title: "Anime/Manga",
    description:
      "Anime, manga, recommendations, tools, technology, and the wider anime and manga ecosystem.",
    summary:
      "Explore anime and manga articles covering recommendations, discoveries, tools, technology, and the wider anime and manga ecosystem.",
    icon: "🌸",
  },
]

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug)
}