import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CategoryCard from "@/components/CategoryCard";
import { blogCategories } from "@/lib/categories";

export default function BlogPage() {
  return (
    <main>
      <MaxWidthWrapper className="py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lets Learn
          </h1>

          <p className="mt-4 text-muted-foreground">
            All the articles on  AI tools, tech, development, gaming,
            anime, and more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
}