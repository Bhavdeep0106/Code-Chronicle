import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"



const htmlContent=`
<div>I am html</div>
`
export default function BlogPage({ params }: { params: { slug: string}}) {
  return (
   <MaxWidthWrapper className=''>
        <h1 className='text-2xl font-bold'>Title here</h1>
        <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
            {params.slug}
   </MaxWidthWrapper>
  )
}