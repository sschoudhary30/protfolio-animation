"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { experiences } from "@/constants/experience";

import { Container } from "@/components/container";
import { SubHeading } from "./subheading";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-10">
    <Container>
      <SubHeading className="text-primary py-5 text-xl font-bold md:text-2xl">
        Internship&nbsp;&amp;&nbsp;Job Experience 🧑🏻‍💻
      </SubHeading>

      <div className="flex flex-col gap-1">
        {experiences.map((exp, idx) => {
          const start = new Date(exp.start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          });
          const end = exp.end
            ? new Date(exp.end).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })
            : "Present";

          return (
            <motion.article
              key={exp.company + exp.role}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group bg-muted/10 hover:bg-muted/20 relative overflow-hidden rounded-md p-6 transition"
            >
              {/* right-side logo */}
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={80}
                height={80}
                className="absolute top-6 right-6 h-15 w-auto opacity-80 dark:opacity-90"
              />

              {/* content */}
              <header className="pr-24">
                <h3 className="text-lg font-semibold tracking-tight">
                  {exp.role}{" "}
                  <span className="text-primary/70 font-normal">
                    @ {exp.company}
                  </span>
                </h3>
                <p className="text-secondary text-sm">
                  {start} – {end}
                </p>
              </header>

              <p className="text-secondary mt-3 max-w-xl text-sm">
                {exp.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2 -space-x-4 pr-40 rtl:space-x-reverse">
                {exp.tech.map((name) => (
                  <li
                    key={name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition duration-200 hover:w-15 dark:border-neutral-700"
                  >
                    <StackIcon name={name} className="h-5 w-5" />
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Container>
  </section>
);
