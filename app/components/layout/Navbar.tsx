"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLenis } from "../providers/LenisProvider";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const widthPercent = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const lenis = useLenis();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="relative">
        {/* Gradient scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden rounded-full">
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
          className="font-bold text-lg tracking-tight text-[#323b4c] hover:text-[#6366f1] transition-colors"
        >
          MKV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                px-4 py-2 text-sm font-medium rounded-lg transition-all
                ${activeSection === link.href.slice(1)
                  ? "text-[#6366f1] bg-[#6366f1]/10"
                  : "text-gray-600 hover:text-[#323b4c] hover:bg-black/5"}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-gray-600 hover:bg-black/5"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  px-4 py-3 text-sm font-medium rounded-lg transition-all
                  ${activeSection === link.href.slice(1)
                    ? "text-[#6366f1] bg-[#6366f1]/10"
                    : "text-gray-600 hover:text-[#323b4c] hover:bg-black/5"}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
