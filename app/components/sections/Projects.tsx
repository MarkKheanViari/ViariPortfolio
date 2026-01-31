"use client";

import { useState } from "react";
import Reveal from "../layout/Reveal";

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
    role: "Project Manager",
    tech: ["Python"],
    description:
      "PyQuiz is an educational platform developed to provide first-year CITE students with an engaging introduction to computer programming through interactive quizzes and structured learning modules, reinforcing foundational programming concepts in a user-friendly environment.",
  },
  {
    title: "BMI Calculator",
    term: "1st Year · 2nd Semester",
    role: "Project Manager",
    tech: ["Python"],
    description:
      "A GUI-based application that calculates Body Mass Index (BMI) and stores user records in a text file acting as a simple database, allowing users to input, compute, save, and retrieve BMI data through an interactive interface.",
  },
  {
    title: "Arcane Conquest",
    term: "2nd Year · 1st Semester",
    role: "Project Manager",
    tech: ["Unity", "C#", "PHP"],
    description:
      "Arcane Conquest is a 2D pixel RPG game where players explore diverse worlds, battle enemies and bosses, and uncover a rich storyline, developed using Unity with backend integration for game data management.",
  },
  {
    title: "PetPal",
    term: "2nd Year · 2nd Semester",
    role: "Project Manager",
    tech: ["Kotlin", "XML", "PHP", "MySQL", "JavaScript"],
    description:
      "PetPal is a dual-platform system designed to streamline service and product administration for vendors while enhancing pet owners’ experience in pet adoption and care management through an integrated web and mobile solution.",
  },
  {
    title: "Bimby (Built-In Messaging Blocker for You)",
    term: "3rd Year · 1st Semester",
    role: "Project Manager",
    tech: ["Python", "React", "Flutter", "Dart", "Swift", "AWS"],
    description:
      "BIMBY is an AI-powered scam detection and monitoring system focused on GCash-related datasets. It classifies chat messages as scam or non-scam using trained AI models, generates real-time alerts, and provides analytics dashboards for scam monitoring, OTP tracking, and system health monitoring.",
  },
  {
    title: "Echoes of the Lighthouse",
    term: "3rd Year · 2nd Semester",
    role: "Project Manager",
    tech: ["Unity", "C#", "Metamask"],
    description:
      "An open-world 3D exploration and puzzle-based game that combines immersive environmental storytelling, sound-based navigation mechanics, and player-driven puzzle progression, with NFT-based digital asset integration.",
  },
  {
    title: "BioTrack (Capstone I)",
    term: "Capstone Project",
    role: "Project Manager",
    tech: ["React", "Flutter", "Django", "Python", "MongoDB", "AWS"],
    description:
      "BioTrack is a smart health and biometric monitoring system designed to securely record, manage, and analyze biometric data such as vital signs, activity logs, and health records through a centralized web and mobile platform.",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {projects.map((project, index) => {
            const isOpen = expanded === index;

            return (
              <Reveal key={project.title}>
                <div
                  className="
                    bg-white border border-black/10 rounded-2xl
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl
                    h-full flex flex-col
                  "
                >
                  {/* Image Placeholder */}
                  <div className="h-40 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                    Project Preview
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-500 mb-2">
                      {project.term}
                    </p>

                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Role:</span>{" "}
                      {project.role}
                    </p>

                    {/* Description */}
                    <p
                      className={`text-sm text-gray-600 leading-relaxed mb-2 ${
                        isOpen ? "" : "line-clamp-4"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* View More */}
                    <button
                      onClick={() =>
                        setExpanded(isOpen ? null : index)
                      }
                      className="text-sm text-[#323b4c] font-medium w-fit hover:underline mb-4"
                    >
                      {isOpen ? "View less" : "View more"}
                    </button>

                    {/* Tech stack pinned bottom */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full border border-black/10 text-gray-600"
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
