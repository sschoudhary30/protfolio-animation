// src/components/motion-div.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

// Infer the exact props of <motion.div> including children
export type MotionDivProps = React.ComponentProps<typeof motion.div>;

export const MotionDiv: React.FC<MotionDivProps> = (props) => {
  return <motion.div {...props} />;
};
