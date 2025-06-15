"use client";
import React, { useRef } from "react";

import { useInView, motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const TimeLine = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "2021",
      content: [
        {
          title: "Completed 12th Grade – Maharashtra State Board",
          description:
            "Graduated with 85% and laid the foundation for my engineering and tech journey.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "First Freelance Projects",
          description:
            "Designed websites and logos, including a sports team logo for my college department.",
        },
        {
          title: "Joined ACES Club",
          description:
            "Became a technical member of ACES, the Computer Department Club at DYPCOE.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Freelance Expansion",
          description:
            "Took on unique freelance projects, including working with an international client for logo design.",
        },
        {
          title: "Hackathon Win",
          description:
            "Won my first UI design hackathon with an innovative concept.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Internship at Atomic House",
          description:
            "Worked as a Frontend Developer Intern, contributing to UI/UX improvements and user research.",
        },
        {
          title: "Vice Chair – Pradnyan ACM DYPCOE",
          description:
            "Led technical teams, conducted workshops, and enhanced club operations.",
        },
        {
          title: "Creative Lead – Advait Tech Fest",
          description:
            "Designed branding and a standout logo for the annual college fest.",
        },
      ],
    },
    {
      title: "2025",
      content: [
        {
          title: "2nd Place – National Level Competition (PGMT)",
          description:
            "Secured second place for an innovative product design at a national competition.",
        },
        {
          title: "15+ Freelance Projects Completed",
          description:
            "Delivered over 15 major freelance design projects, including 4 one-of-a-kind brand identities.",
        },
      ],
    },
  ];
  return (
    <div>
      <div ref={ref} className="py-10">
        {data.map((year, index) => (
          <div content="px-4 py-1" key={year.title} className="mb-4">
            <motion.h2
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: isInView ? "blur(0px)" : "blur(10px)",
                opacity: isInView ? 1 : 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1 * index,
              }}
              className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
            >
              {year.title}
            </motion.h2>
            <div className="flex flex-col gap-4">
              {year.content.map((item, idx) => (
                <div key={item.title} className="pl-4">
                  <Step isInView={isInView} idx={idx}>
                    <motion.h3
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.2 * idx,
                      }}
                      className="text-neutral-600"
                    >
                      {item.title}
                    </motion.h3>
                  </Step>
                  {item.description && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.3 * idx,
                      }}
                      className="pt-1 pl-4 text-sm text-neutral-400"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
