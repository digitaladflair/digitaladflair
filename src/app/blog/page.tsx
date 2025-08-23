import PageHeader from "@/components/blogs/page-header";

import { blogPageMetadata } from "@/constants/seo.config";
import { formatDate } from "@/lib/utils";
import { blogs as allBlogs } from "@/velite";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = blogPageMetadata;

export default function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <div className="flex min-h-screen justify-center pt-24">
        <div className="container max-w-6xl py-6 px-2 lg:py-10 mx-auto">
          <PageHeader
            title="The Adflair Journal"
            description="Your source for technology trends, IT strategies, and growth-driven insights"
          />
          <hr className="my-8" />

          {blogs.length ? (
            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="group relative flex flex-col space-y-2"
                >
                  {blog.image && (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={804}
                      height={452}
                      className="border bg-muted transition-colors"
                    />
                  )}

                  <h2 className="text-2xl font-extrabold text-black/80">
                    {blog.title}
                  </h2>
                  {blog.description && (
                    <p className="text-muted-foreground line-clamp-4">
                      {blog.description}
                    </p>
                  )}

                  {blog.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(blog.date)}
                    </p>
                  )}

                  <Link href={blog.slug} className="absolute inset-0">
                    <span className="sr-only">View Article</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p>No Blogs found</p>
          )}
        </div>
      </div>
    </>
  );
}
