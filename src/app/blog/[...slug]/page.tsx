import React from "react";
import { Metadata } from "next";
import { blogs as allBlogs } from "@/velite";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Mdx } from "@/components/blogs/mdx-component";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface BlogPageItemProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getBlogFromParams(params: BlogPageItemProps["params"]) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    return null;
  }

  return blog;
}

export async function generateMetadata({
  params,
}: BlogPageItemProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: {
      name: blog.author,
    },
  };
}

export async function generateStaticParams(): Promise<
  Awaited<BlogPageItemProps["params"]>[]
> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function BlogPageItem({ params }: BlogPageItemProps) {
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return (
    <main className="w-full relative py-6 px-2 lg:pb-10 pt-28 justify-center flex overflow-x-hidden">
      <article className="max-w-5xl mx-auto w-full">
        {blog.date && (
          <time
            dateTime={blog.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(blog.date)}
          </time>
        )}

        <h1 className="mt-2 inline-block text-3xl font-bold capitalize leading-tight text-primary lg:text-5xl">
          {blog.title}
        </h1>

        {/* {blog.author && (
          <div className="mt-4 flex space-x-4 items-center">
            <Image
              src={siteConfig.authorImage}
              alt={blog.author}
              width={42}
              height={42}
              className="rounded-full bg-white"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{blog.author}</p>
            </div>
          </div>
        )} */}

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={820}
            height={405}
            priority
            className="my-8 border bg-muted transition-colors mx-auto"
          />
        )}
        <Mdx code={blog.body} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all Blogs
          </Link>
        </div>
      </article>
    </main>
  );
}
