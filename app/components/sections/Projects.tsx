"use client";

import { useState, useRef } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";

type Project = {
  title: string;
  term: string;
  role: string;
  tech: string[];
  description: string;
};

const projects: Project[] = [
  {
    title: "PyQuiz",
    term: "1st Year · 1st Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Python"],
    description:
      "PyQuiz is an educational platform developed to provide first-year CITE students with an engaging introduction to computer programming through interactive quizzes and structured learning modules, reinforcing foundational programming concepts in a user-friendly environment.",
  },
  {
    title: "BMI Calculator",
    term: "1st Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Python"],
    description:
      "A GUI-based application that calculates Body Mass Index (BMI) and stores user records in a text file acting as a simple database, allowing users to input, compute, save, and retrieve BMI data through an interactive interface.",
  },
  {
    title: "Arcane Conquest",
    term: "2nd Year · 1st Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Unity", "C#", "PHP"],
    description:
      "Arcane Conquest is a 2D pixel RPG game where players explore diverse worlds, battle enemies and bosses, and uncover a rich storyline, developed using Unity with backend integration for game data management.",
  },
  {
    title: "PetPal",
    term: "2nd Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Kotlin", "XML", "PHP", "MySQL", "JavaScript"],
    description:
      "PetPal is a dual-platform system designed to streamline service and product administration for vendors while enhancing pet owners' experience in pet adoption and care management through an integrated web and mobile solution.",
  },
  {
    title: "Bimby (Built-In Messaging Blocker for You)",
    term: "3rd Year · 1st Semester",
    role: "Project Manager, Cloud Engineer",
    tech: ["Python", "React", "Flutter", "Dart", "Swift", "AWS"],
    description:
      "BIMBY is an AI-powered scam detection and monitoring system focused on GCash-related datasets. It classifies chat messages as scam or non-scam using trained AI models, generates real-time alerts, and provides analytics dashboards for scam monitoring, OTP tracking, and system health monitoring.",
  },
  {
    title: "Echoes of the Lighthouse",
    term: "3rd Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Unity", "C#", "Metamask"],
    description:
      "An open-world 3D exploration and puzzle-based game that combines immersive environmental storytelling, sound-based navigation mechanics, and player-driven puzzle progression, with NFT-based digital asset integration.",
  },
  {
    title: "BioTrack (Capstone I)",
    term: "Capstone Project",
    role: "Project Manager, Backend Developer",
    tech: ["React", "Flutter", "Django", "Python", "MongoDB", "AWS"],
    description:
      "BioTrack is a smart health and biometric monitoring system designed to securely record, manage, and analyze biometric data such as vital signs, activity logs, and health records through a centralized web and mobile platform.",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="left">
          <div className="mb-16">
            <span className="text-sm font-medium text-[#323b4c]/60 uppercase tracking-widest">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              <GradientTitle sectionRef={sectionRef}>Projects</GradientTitle>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            const direction: "left" | "right" | "center" =
              index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "center";

            return (
              <Reveal key={project.title} direction={direction} delay={index * 0.05}>
                <div
                  className="
                    group bg-white rounded-2xl overflow-hidden
                    border border-black/5 shadow-sm
                    transition-all duration-300 ease-out
                    hover:shadow-xl hover:shadow-[#323b4c]/8 hover:-translate-y-2
                    flex flex-col h-full
                  "
                >
                  {/* Image Placeholder */}
                  <div className="h-44 bg-gradient-to-br from-[#323b4c]/5 to-[#323b4c]/10 flex items-center justify-center text-sm text-gray-500 transition-colors duration-300 group-hover:from-[#323b4c]/10 group-hover:to-[#323b4c]/15">
                    <span className="opacity-60">Project Preview</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-[#323b4c] group-hover:text-[#323b4c]">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 font-medium">
                      {project.term}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-medium text-[#323b4c]">Role:</span>{" "}
                      {project.role}
                    </p>

                    <p
                      className={`text-sm text-gray-600 leading-relaxed mb-4 flex-grow ${
                        isOpen ? "" : "line-clamp-4"
                      }`}
                    >
                      {project.description}
                    </p>

                    <button
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="text-sm font-medium text-[#323b4c] w-fit hover:underline mb-4"
                    >
                      {isOpen ? "View less" : "View more"}
                    </button>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#323b4c]/5 text-gray-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
