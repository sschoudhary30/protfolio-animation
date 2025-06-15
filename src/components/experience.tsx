"use client";

import React, { useState } from "react";
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

// helper to truncate
const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n) + "…" : s;

type ExperienceItemProps = {
  exp: (typeof experiences)[number];
  idx: number;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, idx }) => {
  const [expanded, setExpanded] = useState(false);
  const fullText = exp.description;
  const previewText = truncate(fullText, 150);
  const isTruncated = fullText.length > 150;

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
        width={100}
        height={100}
        className="absolute top-8 right-3 h-17 w-auto opacity-80 dark:opacity-90"
      />

      {/* header */}
      <header className="pr-24">
        <h3 className="text-lg font-semibold tracking-tight">
          {exp.role}{" "}
          <span className="text-primary/70 font-normal">@ {exp.company}</span>
        </h3>
        <p className="text-secondary text-sm">
          {start} – {end}
        </p>
      </header>

      {/* description with accordion */}
      <motion.div
        initial={{ height: expanded ? "auto" : "4rem" }}
        animate={{ height: expanded ? "auto" : "4rem" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden pr-7"
      >
        <p className="text-secondary mt-3 max-w-xl text-sm">
          {expanded ? fullText : previewText}
        </p>
      </motion.div>
      {isTruncated && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary mt-2 text-sm font-medium hover:scale-x-104"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}

      {/* tech stack icons */}
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
};

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-10">
    <Container>
      <SubHeading className="text-primary py-5 text-xl font-bold md:text-2xl">
        Technical&nbsp;&amp;&nbsp;Work Experience 🧑🏻‍💻
      </SubHeading>

      <div className="flex flex-col gap-1">
        {experiences.map((exp, idx) => (
          <ExperienceItem exp={exp} idx={idx} key={exp.company + exp.role} />
        ))}
      </div>
    </Container>
  </section>
);
