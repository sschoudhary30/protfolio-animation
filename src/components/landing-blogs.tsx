import React from "react";
import { Link } from "next-view-transitions";

import { getBlogs } from "@/utils/mdx";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";
import { SubHeading } from "./subheading";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (s: string, n: number) =>
    s.length > n ? s.slice(0, n) + "…" : s;
  return (
    <div className="my-10 space-y-6">
      <SubHeading className="text-primary py-5 text-xl font-bold md:text-2xl">
        I love writing things down 📒.
      </SubHeading>

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
