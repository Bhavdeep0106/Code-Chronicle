import Link from "next/link";
import { BlogCategory } from "@/lib/categories";

interface CategoryCardProps {
  category: BlogCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/blog/${category.slug}`}
      className="group block rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 text-4xl">{category.icon}</div>

      <h2 className="text-xl font-semibold group-hover:underline">
        {category.title}
      </h2>

      <p className="mt-3 text-sm text-muted-foreground">
        {category.description}
      </p>

      <div className="mt-6 font-medium">
        Explore category <span className="ml-1">→</span>
      </div>
    </Link>
  );
}