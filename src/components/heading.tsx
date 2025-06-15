"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = "h1",
  children,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut", // Motion One also supports an "ease" shorthand
    }}
    viewport={{ once: true }}
  >
    <Tag
      className={cn(
        "text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
        className,
      )}
    >
      {children}
    </Tag>
  </motion.div>
);
