"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <div>
      <h2 className={cn("max-w-lg text-sm font-normal md:text-sm", className)}>
        {children.split(" ").map((word, idx) => (
          <motion.span
            initial={{
              opacity: 0,
              y: 5,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: delay + idx * 0.05,
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={word + idx}
            viewport={{ once: true }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </h2>
    </div>
  );
};
