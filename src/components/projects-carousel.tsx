"use client";

import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLinkIcon, ArrowLeft, ArrowRight } from "lucide-react";
import StackIcon from "tech-stack-icons";
import type { Project } from "@/constants/projects";

type Props = { projects: Project[] };

// helper to truncate strings
const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n) + "…" : s;

export const ProjectsCarousel: React.FC<Props> = ({ projects }) => {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [lastToggled, setLastToggled] = useState<number | null>(null);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
    setLastToggled(idx);
  };

  return (
    <section className="pt-10 pb-20">
      <h2 className="pb-4 text-2xl font-semibold">Featured work</h2>

      <div className="relative pb-5">
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex gap-6">
            {projects.map((p, idx) => {
              const fullText = p.description;
              const previewText = truncate(fullText, 100);
              const isTruncated = fullText.length > 100;
              const isExpanded = !!expanded[idx];
              const isToggled = lastToggled === idx;

              const hasLiveDemo =
                p.href && p.href.trim() !== "#" && p.href.trim() !== "";
              const hasRepo = Boolean(p.repo && p.repo.trim() !== "");

              return (
                <li
                  key={p.title + idx}
                  className="flex-shrink-0"
                  style={{ width: "clamp(260px, 32vw, 320px)" }}
                >
                  <article className="flex h-full flex-col space-y-2 rounded-2xl border p-2">
                    {/* animate only toggled card */}
                    <Link href={p.href} className="group block">
                      {isToggled ? (
                        <motion.div
                          initial={{ height: isExpanded ? 160 : 240 }}
                          animate={{ height: isExpanded ? 160 : 240 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="relative w-full overflow-hidden rounded-xl"
                        >
                          <Image
                            src={p.src}
                            alt={p.title}
                            fill
                            sizes="(min-width:768px) 32vw, 90vw"
                            className="object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div
                          style={{ height: isExpanded ? 160 : 240 }}
                          className="shadow-aceternity border-1.5 relative w-full overflow-hidden rounded-xl border-neutral-200"
                        >
                          <Image
                            src={p.src}
                            alt={p.title}
                            fill
                            sizes="(min-width:768px) 32vw, 90vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h3 className="pt-3 text-lg font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
                        {p.title}
                      </h3>
                    </Link>

                    {/* description snaps immediately */}
                    <div className="flex-1">
                      <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
                        {isExpanded ? fullText : previewText}
                      </p>
                      {isTruncated && (
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="text-primary mt-1 text-sm font-medium hover:underline"
                        >
                          {isExpanded ? "See less" : "See more"}
                        </button>
                      )}
                    </div>

                    {/* tech-stack + buttons */}
                    <div className="mt-auto flex items-center gap-2 -space-x-4 pt-2 rtl:space-x-reverse">
                      {p.tech.map((name) => (
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

                      {hasRepo && (
                        <Link
                          href={p.repo!}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} source code on GitHub`}
                          className="ml-auto inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <StackIcon name="github" className="h-5 w-5" />
                        </Link>
                      )}

                      {hasLiveDemo && (
                        <Link
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${p.title}`}
                          className="inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <ExternalLinkIcon className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* navigation arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="border-primary/50 absolute right-16 -bottom-12 flex h-9 w-9 items-center justify-center rounded-full border bg-white/90 backdrop-blur hover:scale-105"
        >
          <ArrowLeft size={20} className="stroke-2" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="border-primary/50 absolute right-4 -bottom-12 flex h-9 w-9 items-center justify-center rounded-full border bg-white/90 backdrop-blur hover:scale-105"
        >
          <ArrowRight size={20} className="stroke-2" />
        </button>
      </div>
    </section>
  );
};
