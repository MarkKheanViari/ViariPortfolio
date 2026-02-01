"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider";

type GradientTitleProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
};

export default function GradientTitle({ sectionRef, children }: GradientTitleProps) {
  const progress = useMotionValue(0);
  const { theme } = useTheme();

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when section top enters viewport bottom, 1 when section top reaches 30% from top
      const startPoint = windowHeight; // section top at bottom of viewport
      const endPoint = windowHeight * 0.3; // section top at 30% from viewport top

      const currentPosition = rect.top;
      const p = 1 - (currentPosition - endPoint) / (startPoint - endPoint);
      const clampedProgress = Math.max(0, Math.min(1, p));

      progress.set(clampedProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [sectionRef, progress]);

  const backgroundImage = useTransform(progress, (v) => {
    const start = theme === "dark" ? "#94a3b8" : "#323b4c";
    return `linear-gradient(90deg, ${start} 0%, ${start} ${v * 100}%, #6366f1 ${v * 100}%, #8b5cf6 100%)`;
  });

  return (
    <motion.span
      className="inline-block bg-clip-text text-transparent"
      style={{ backgroundImage }}
    >
      {children}
    </motion.span>
  );
}
