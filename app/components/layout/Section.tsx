"use client";

import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  variant?: "default" | "muted";
};

export default function Section({
  id,
  children,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-28 ${
        variant === "muted" ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
