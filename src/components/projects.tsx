"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";
import { ExternalLinkIcon } from "lucide-react";

import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

const FILTERS = ["All", "Web", "Mobile", "UI/UX", "Graphic Design"];

// helper to truncate strings
const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n) + "…" : s;

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  // filter projects by tag
  const filtered = projects.filter(
    (p) => filter === "All" || p.tags.includes(filter),
  );

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Split into two columns by index parity
  const cols: { project: Project; idx: number }[][] = [[], []];
  filtered.forEach((project, idx) => {
    cols[idx % 2].push({ project, idx });
  });

  return (
    <section className="py-10">
      <SectionHeading
        delay={0.2}
        className="text-primary pt-4 text-xl font-bold md:text-2xl"
      >
        A Lifetime in projects
      </SectionHeading>

      {/* filter buttons */}
      <div className="flex flex-wrap gap-2 py-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border-2 px-3 py-1 transition ${
              filter === f
                ? "bg-primary border-primary text-white"
                : "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* two independent columns */}
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-1 flex-col gap-4">
            {col.map(({ project, idx }) => {
              const hasLiveDemo =
                project.href &&
                project.href.trim() !== "#" &&
                project.href.trim() !== "";
              const hasRepo = Boolean(
                project.repo && project.repo.trim() !== "",
              );

              const fullText = project.description;
              const previewText = truncate(fullText, 100);
              const isTruncated = fullText.length > 100;
              const isExpanded = Boolean(expanded[idx]);

              return (
                <motion.div
                  key={project.title + idx}
                  layout
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.1,
                    ease: "easeInOut",
                  }}
                  className="group relative flex flex-col space-y-2 rounded-2xl border-2 p-2"
                >
                  {/* main link / cover */}
                  <Link href={project.href}>
                    <Image
                      src={project.src}
                      alt={project.title}
                      height={300}
                      width={300}
                      loading="lazy"
                      className="shadow-aceternity h-65 w-full rounded-xl border-3 border-neutral-300 object-cover transition duration-200 group-hover:scale-[1.02]"
                    />
                    <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
                      {project.title}
                    </h2>
                  </Link>

                  {/* description with truncate/accordion */}
                  <motion.div
                    className="overflow-hidden pr-2"
                    initial={{ height: isExpanded ? "auto" : "4rem" }}
                    animate={{ height: isExpanded ? "auto" : "4rem" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
                      {isExpanded ? fullText : previewText}
                    </p>
                  </motion.div>
                  {isTruncated && (
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="text-primary self-start text-sm font-medium hover:underline"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>
                  )}

                  {/* tech-stack chips + action buttons */}
                  <div className="mt-auto flex items-center gap-2 -space-x-4 pt-2 rtl:space-x-reverse">
                    {project.tech.map((name) => (
                      <span
                        key={name}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white transition duration-200 hover:w-13 dark:border-neutral-700"
                      >
                        <StackIcon
                          name={name}
                          className="h-4 w-4"
                          variant="dark"
                        />
                      </span>
                    ))}

                    <div className="ml-auto flex gap-2">
                      {hasLiveDemo && (
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <ExternalLinkIcon className="h-5 w-5" />
                        </Link>
                      )}

                      {hasRepo && (
                        <Link
                          href={project.repo!}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <StackIcon name="github" className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
