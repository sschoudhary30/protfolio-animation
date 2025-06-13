"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";

import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => (
  <section className="py-10">
    <SectionHeading delay={0.2} className="pt-4">
      A Lifetime in projects
    </SectionHeading>

    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
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
              className="h-65 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
              {project.title}
            </h2>
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </Link>

          {/* tech-stack chips + GitHub button */}
          <div className="z-10 mt-auto flex items-center gap-2 -space-x-4 pt-2 rtl:space-x-reverse">
            {project.tech.map((name) => (
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

            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="ml-auto inline-flex items-center justify-center rounded-full border-2 p-1 transition hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <StackIcon name="github" className="h-5 w-5" />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
