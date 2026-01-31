"use client";

import { useRef } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal direction="center">
          <div className="text-center">
            <span className="inline-block text-sm font-medium text-[#323b4c]/60 uppercase tracking-widest mb-4">
              Who I Am
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <GradientTitle sectionRef={sectionRef}>About Me</GradientTitle>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              BSIT student specializing in Systems Development with hands-on
              experience in project management, backend systems, frontend
              interfaces, and game development.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {["Project Management", "Backend", "Frontend", "Game Dev"].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-[#323b4c]/5 text-sm font-medium text-[#323b4c] border border-[#323b4c]/10"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
