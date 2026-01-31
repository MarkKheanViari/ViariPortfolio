"use client";

import Reveal from "../layout/Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          BSIT student specializing in Systems Development with hands-on experience
          in project management, backend systems, frontend interfaces, and game
          development.
        </p>
      </Reveal>
    </section>
  );
}
