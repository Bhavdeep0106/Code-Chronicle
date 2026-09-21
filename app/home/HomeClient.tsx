"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import type { BlogPost } from "@/lib/blog";

interface HomeClientProps {
  randomPosts: BlogPost[];
}

export default function HomeClient({
  randomPosts,
}: HomeClientProps) {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ["<i>Tailwind</i> CSS.", "&amp; React", "Typescript"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A{" "}
            <span className="font-semibold">
              tech blog
            </span>{" "}
            for community{" "}
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source blog and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps,
            projects or landing sites!
          </p>

          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                className="flex items-center dark:bg-gray-800 justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Let's Start Reading */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Start Reading
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Discover something interesting from our collection of
              articles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {randomPosts.map((post) => (
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
                  {post.category && (
                    <p className="text-sm font-medium text-muted-foreground">
                      {post.category}
                    </p>
                  )}

                  <h3 className="mt-2 text-xl font-semibold group-hover:underline">
                    {post.title}
                  </h3>

                  {post.description && (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {post.description}
                    </p>
                  )}

                  <div className="mt-5 font-medium">
                    Read article{" "}
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}