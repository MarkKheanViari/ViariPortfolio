"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../providers/ReducedMotionProvider";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundImage = useTransform(scrollYProgress, (v) => {
    const p = Math.min(1, v / 0.6);
    return `linear-gradient(90deg, #323b4c 0%, #323b4c ${p * 100}%, #6366f1 ${p * 100}%, #8b5cf6 100%)`;
  });

  const skipAnimation = prefersReducedMotion;
  const initialProps = skipAnimation ? false : { opacity: 0, x: -80 };
  const animateProps = { opacity: 1, x: 0 };
  const transitionProps = skipAnimation
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

  const viariInitial = skipAnimation ? false : { opacity: 0, x: 80 };
  const viariTransition = skipAnimation
    ? { duration: 0 }
    : { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={initialProps}
          animate={animateProps}
          transition={transitionProps}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage }}
          >
            Mark Khean{" "}
            <motion.span
              initial={viariInitial}
              animate={animateProps}
              transition={viariTransition}
              className="inline-block"
            >
              Viari
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={skipAnimation ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            skipAnimation ? { duration: 0 } : { delay: 0.4, duration: 0.6 }
          }
          className="text-lg text-gray-600"
        >
          Project Manager · Backend · Frontend · Game Developer
        </motion.p>
      </div>
    </section>
  );
}
