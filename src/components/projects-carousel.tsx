"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // small icons
import type { Project } from "@/constants/projects";
import StackIcon from "tech-stack-icons";

type Props = { projects: Project[] };

export const ProjectsCarousel: React.FC<Props> = ({ projects }) => {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });

  /* navigation helpers */
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="pt-10 pb-20">
      <h2 className="pb-4 text-2xl font-semibold">Featured work</h2>

      {/* track */}

      <div className="relative pb-5">
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex gap-6">
            {projects.map((p) => (
              <li
                key={p.title}
                className="flex-shrink-0"
                /* Card width: 90 vw on mobile → 320 px on desktop */
                style={{ width: "clamp(260px, 32vw, 320px)" }}
              >
                <article className="flex h-full flex-col space-y-2 rounded-2xl border p-2">
                  <Link href={p.href} className="flex flex-1 flex-col">
                    <div className="relative h-60 w-full overflow-hidden rounded-xl">
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        sizes="(min-width:768px) 32vw, 90vw"
                        className="object-cover"
                      />
                    </div>

                    <h3 className="z-20 pt-3 text-lg font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
                      {p.title}
                    </h3>
                    <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
                      {p.description}
                    </p>
                  </Link>

                  <div className="z-10 mt-auto flex items-center gap-2 -space-x-4 pt-2 rtl:space-x-reverse">
                    {p.tech.map((name) => (
                      <span
                        key={name}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white transition duration-200 hover:w-13 dark:border-neutral-700"
                      >
                        <StackIcon
                          name={name}
                          className="h-4 w-4 hover:size-6" // scale icon
                          variant="dark" // optional: "light" | "dark" | "grayscale"
                        />
                      </span>
                    ))}

                    {p.repo && (
                      <Link
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} source code on GitHub`}
                        className="ml-auto inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        <StackIcon name="github" className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* arrows – bottom-right, like the screenshot */}
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
