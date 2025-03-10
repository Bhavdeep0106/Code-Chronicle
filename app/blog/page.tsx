/* eslint-disable @next/next/no-img-element */
import SampleBlogs from "@/config/sampleBlogs";
import React from "react";
import {  buttonVariants } from "@/components/ui/button";

interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SampleBlogs.map((blog: BlogType, index: number) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl ? blog.imageUrl : "/blogImg.jpg"}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <a href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant:"default"})}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
