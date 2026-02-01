"use client";

import { useRef, useState } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";
import { siteConfig } from "../../data/portfolio";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  const initials = siteConfig.name.split(" ").map((n) => n[0]).join("");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/95"
    >
      <div className="max-w-4xl mx-auto px-6">
        <Reveal direction="center">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden border-2 border-[#323b4c]/10 dark:border-gray-600/30">
                {!imgError ? (
                  <img
                    src={siteConfig.avatarUrl}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-5xl font-bold text-[#323b4c] dark:text-gray-400">
                    {initials}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-block text-sm font-medium text-[#323b4c]/60 dark:text-gray-400 uppercase tracking-widest mb-4">
                Who I Am
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientTitle sectionRef={sectionRef}>About Me</GradientTitle>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                BSIT student specializing in Systems Development with hands-on
                experience in project management, backend systems, frontend
                interfaces, and game development.
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6 italic">
                Currently learning: Cloud architecture & AI integration
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["Project Management", "Backend", "Frontend", "Game Dev"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-[#323b4c]/5 dark:bg-white/5 text-sm font-medium text-[#323b4c] dark:text-gray-300 border border-[#323b4c]/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
