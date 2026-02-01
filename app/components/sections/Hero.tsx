"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLenis } from "../providers/LenisProvider";
import { useReducedMotion } from "../providers/ReducedMotionProvider";
import { siteConfig } from "../../data/portfolio";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const lenis = useLenis();

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

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#projects", { duration: 1.2 });
    else document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = ["Project Manager", "Backend", "Frontend", "Game Dev"];
  const roleSections = { "Project Manager": "#about", Backend: "#skills", Frontend: "#projects", "Game Dev": "#projects" };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
        <motion.h1
          initial={initialProps}
          animate={animateProps}
          transition={transitionProps}
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <motion.span
            className="inline-block bg-clip-text text-transparent dark:from-indigo-300 dark:to-purple-400"
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
          transition={skipAnimation ? { duration: 0 } : { delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10"
        >
          {roles.map((role, i) => (
            <a
              key={role}
              href={(roleSections as Record<string, string>)[role] || "#projects"}
              onClick={(e) => {
                e.preventDefault();
                const target = (roleSections as Record<string, string>)[role] || "#projects";
                if (lenis) lenis.scrollTo(target, { duration: 1.2 });
                else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-2 py-1 rounded-md hover:bg-[#6366f1]/10 hover:text-[#6366f1] transition-colors cursor-pointer inline"
            >
              {role}{i < roles.length - 1 ? " · " : ""}
            </a>
          ))}
        </motion.p>

        <motion.div
          initial={skipAnimation ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={skipAnimation ? { duration: 0 } : { delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={handleScrollToProjects}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
          >
            View My Work
          </button>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border-2 border-[#323b4c] dark:border-gray-500 font-medium hover:bg-[#323b4c] hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={skipAnimation ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={skipAnimation ? { duration: 0 } : { delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <button
            onClick={handleScrollToProjects}
            aria-label="Scroll to projects"
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
