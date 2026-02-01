"use client";

import { useState, useRef } from "react";
import Reveal from "../layout/Reveal";
import GradientTitle from "../layout/GradientTitle";
import { siteConfig } from "../../data/portfolio";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto px-6">
        <Reveal direction="center">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#323b4c]/60 dark:text-gray-400 uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              <GradientTitle sectionRef={sectionRef}>Contact</GradientTitle>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up">
          {submitted ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20">
              <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                Thanks for reaching out!
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-black/5 dark:border-white/5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#323b4c] dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-[#323b4c] dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#323b4c] dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-[#323b4c] dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#323b4c] dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 text-[#323b4c] dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-70 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal direction="center">
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Or reach me directly
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-indigo-500 dark:text-indigo-400 font-medium hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
