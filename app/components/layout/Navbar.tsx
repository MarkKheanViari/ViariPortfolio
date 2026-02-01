"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLenis } from "../providers/LenisProvider";
import { useTheme } from "../providers/ThemeProvider";
import { siteConfig } from "../../data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const widthPercent = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const lenis = useLenis();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const updateState = () => {
      const scrollY = lenis ? lenis.scroll : (window.scrollY ?? document.documentElement.scrollTop);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      const sections = ["about", "projects", "skills", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { offsetTop } = section;
          if (scrollY >= offsetTop - 120) {
            setActiveSection(sections[i]);
            break;
          }
          if (i === 0) setActiveSection("");
        }
      }

      const p = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      progress.set(p);
    };

    if (lenis) {
      lenis.on("scroll", updateState);
      updateState();
      return () => lenis.off("scroll", updateState);
    }
    window.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => window.removeEventListener("scroll", updateState);
  }, [lenis, progress]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { duration: 1.2 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-full">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
            style={{ width: widthPercent }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              lenis ? lenis.scrollTo(0, { duration: 1.2 }) : window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold text-lg tracking-tight text-[#323b4c] dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            MKV
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#323b4c] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
            >
              Resume
            </a>
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400"
              >
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 -mr-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#323b4c] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 mt-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
