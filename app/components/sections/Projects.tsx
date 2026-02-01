"use client";

import { useState, useRef } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";
import { projects, type Project } from "../../data/portfolio";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "game", label: "Games" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
];

export default function Projects() {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="left">
          <div className="mb-12">
            <span className="text-sm font-medium text-[#323b4c]/60 dark:text-gray-400 uppercase tracking-widest">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              <GradientTitle sectionRef={sectionRef}>Projects</GradientTitle>
            </h2>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat.id
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-black/5 dark:border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, index) => {
            const isOpen = expandedTitle === project.title;
            const direction: "left" | "right" | "center" =
              index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "center";

            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isOpen={isOpen}
                setExpandedTitle={setExpandedTitle}
                direction={direction}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isOpen,
  setExpandedTitle,
  direction,
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  setExpandedTitle: (title: string | null) => void;
  direction: "left" | "right" | "center";
}) {
  return (
    <Reveal direction={direction} delay={index * 0.05}>
      <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 hover:-translate-y-2 flex flex-col h-full">
        <div className="h-44 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="opacity-60">{project.title}</span>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-[#323b4c] dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
            {project.term}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-medium text-[#323b4c] dark:text-white">
              Role:
            </span>{" "}
            {project.role}
          </p>

          <p
            className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow ${
              isOpen ? "" : "line-clamp-4"
            }`}
          >
            {project.description}
          </p>

          <button
            onClick={() => setExpandedTitle(isOpen ? null : project.title)}
            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 w-fit mb-4"
          >
            {isOpen ? "View less" : "View more"}
          </button>

          <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-black/5 dark:border-white/5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#323b4c]/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 font-medium"
              >
                {t}
              </span>
            ))}
            <div className="ml-auto flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-500/20 transition-colors"
                >
                  Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg bg-gray-500/10 text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-500/20 transition-colors"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
