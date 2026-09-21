import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Onthispage from "@/components/Onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypePrettyCode } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex">
        <div className="px-16">
          <h1>{data.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          />
        </div>

        <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Article Not Found - CODE-CHRONICLE",
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContent);

  return {
    title: `${data.title} - CODE-CHRONICLE`,
    description: data.description,
  };
}
