"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../providers/ReducedMotionProvider";

type Direction = "left" | "right" | "up" | "center";

type RevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

const directionOffsets = {
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up: { x: 0, y: 48 },
  center: { x: 0, y: 32 },
};

export default function Reveal({
  children,
  direction = "center",
  delay = 0,
  duration = 0.6,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = directionOffsets[direction];

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    >
      {children}
    </motion.div>
  );
}
