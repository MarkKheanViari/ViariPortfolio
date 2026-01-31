"use client";

import Reveal from "../layout/Reveal";

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
  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-16">Skills</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div
                className="
                  border border-black/10 rounded-2xl p-6
                  bg-white
                  transition-all duration-300
                  hover:shadow-lg
                "
              >
                <h3 className="text-lg font-semibold mb-4">
                  {group.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#323b4c]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
