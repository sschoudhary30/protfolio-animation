"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { SubHeading } from "./subheading";
import StackIcon from "tech-stack-icons"; // ← adjust import path if different

/* ───────────  ALL SKILL ICONS  ─────────── */

const icons = [
  "adobe",
  "ae",
  "ai",
  "analytics",
  "aws",
  "babel",
  "bash",
  "bolt",
  "bootstrap5",
  "bootstrap4",
  "canva",
  "claude",
  "cloudinary",
  "colab",
  "css3",
  "docker",
  "expressjs",
  "figma",
  "firebase",
  "framer",

  // second row
  "gemini",
  "git",
  "github",
  "gsap",
  "html5",
  "huggingface",
  "java",
  "jquery",
  "js",
  "kubernetes",
  "linux",
  "lovable",
  "mongodb",
  "nextjs",
  "nodejs",
  "npm",
  "ps",
  "react",
  "threejs",
  "typescript",
  "tailwindcss",
];

/* split list roughly in half */
const mid = Math.ceil(icons.length / 2);
const skillsRow1 = icons.slice(0, mid);
const skillsRow2 = icons.slice(mid);

export const SkillsScroller = () => (
  <section className="my-10 space-y-6">
    <SubHeading className="text-primary text-xl font-bold md:text-2xl">
      Tech I work with ⚡
    </SubHeading>

    {/* top row — left→right */}
    <MaskedMarquee direction="left" speed={20}>
      {skillsRow1.map((icon) => (
        <SkillCard key={icon} name={icon} />
      ))}
    </MaskedMarquee>

    {/* bottom row — right→left */}
    <MaskedMarquee direction="right" speed={20}>
      {skillsRow2.map((icon) => (
        <SkillCard key={icon} name={icon} />
      ))}
    </MaskedMarquee>
  </section>
);

/* —————————————————— helpers —————————————————— */

const MaskedMarquee = ({
  children,
  direction,
  speed = 20,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
  speed?: number;
}) => (
  <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <Marquee direction={direction} speed={speed} pauseOnHover>
      <div className="flex py-4">{children}</div>
    </Marquee>
  </div>
);

const SkillCard = ({ name }: { name: string }) => (
  <div className="shadow-aceternity mx-4 flex h-32 w-32 items-center justify-center rounded-xl p-4 transition duration-300 hover:translate-y-1 hover:scale-105 hover:shadow-md">
    <div className="flex flex-col items-center gap-2">
      <StackIcon name={name} className="h-12 w-12" />
      <p className="text-center text-sm font-bold text-neutral-900 capitalize dark:text-neutral-400">
        {name}
      </p>
    </div>
  </div>
);
