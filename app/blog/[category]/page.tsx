import { notFound } from "next/navigation";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getCategoryBySlug, blogCategories } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/blog";

import CategorySummary from "@/components/CategorySummary";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <main>
      <MaxWidthWrapper className="py-12">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Back to Blog
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="text-5xl">{category.icon}</div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {category.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {category.description}
          </p>
        </div>

        <CategorySummary summary={category.summary} />

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Articles</h2>

          {posts.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed p-8 text-center">
              <p className="text-muted-foreground">
                No articles have been added to this category yet.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogpost/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {post.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:underline">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {post.description}
                      </p>
                    )}

                    <div className="mt-5 font-medium">
                      Read article <span className="ml-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
