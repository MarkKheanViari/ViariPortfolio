"use client";

import { useRef } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Leadership & Management",
    skills: [
      "Project Management",
      "Leadership",
      "Teamwork",
      "Public Relations",
      "Time Management",
    ],
  },
  {
    title: "Communication & Thinking",
    skills: [
      "Effective Communication",
      "Critical Thinking",
      "Problem Solving",
      "Decision Making",
    ],
  },
  {
    title: "Software & Web Development",
    skills: [
      "Software Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Game Development",
    ],
  },
  {
    title: "Database & Systems",
    skills: [
      "Database Management",
      "System Design",
      "Application Architecture",
      "Data Handling",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Flutter",
      "Django",
      "Unity",
      "MongoDB",
      "MySQL",
      "AWS",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="right">
          <div className="mb-16">
            <span className="text-sm font-medium text-[#323b4c]/60 uppercase tracking-widest">
              What I Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              <GradientTitle sectionRef={sectionRef}>Skills</GradientTitle>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {skillGroups.map((group, index) => {
            const direction: "left" | "right" | "center" =
              index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "center";
            const isLastInOddRow = index === 4;

            return (
              <Reveal key={group.title} direction={direction} delay={index * 0.05}>
                <div
                  className={`
                    group relative bg-white rounded-2xl p-8 h-full flex flex-col
                    border border-black/5 shadow-sm
                    transition-all duration-300 ease-out
                    hover:shadow-xl hover:shadow-[#323b4c]/8 hover:-translate-y-2
                    hover:border-[#323b4c]/10
                    ${isLastInOddRow ? "lg:col-start-2" : ""}
                  `}
                >
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-[#323b4c]/5 group-hover:bg-[#323b4c]/10 transition-colors" />
                  <h3 className="text-lg font-semibold mb-5 text-[#323b4c] relative z-10">
                    {group.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600 relative z-10 flex-1">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#323b4c] flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
