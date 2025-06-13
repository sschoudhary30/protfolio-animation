import React from "react";
import { Link } from "next-view-transitions";

import { getBlogs } from "@/utils/mdx";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (s: string, n: number) =>
    s.length > n ? s.slice(0, n) + "…" : s;
  return (
    <div className="">
      <div className="relative mb-5 inline-block overflow-hidden rounded-full p-px">
        <span
          aria-hidden
          className="animate-spin-beam pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        />
        <span
          aria-hidden
          className="animate-spin-beam-2 pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        <div className="text-secondary relative rounded-lg bg-neutral-100 px-6 py-2 text-sm md:text-sm dark:bg-neutral-900">
          <SectionHeading delay={0.4} className="p-1">
            I love writing things down 📒.
          </SectionHeading>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {allBlogs.slice(0, 4).map((blog, idx) => (
          <MotionDiv
            key={blog.title}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
            }}
          >
            <Link key={blog.title} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                  {new Date(blog.date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
