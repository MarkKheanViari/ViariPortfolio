"use client";

import { useEffect } from "react";

export default function Parallax() {
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const el = document.getElementById("parallax-bg");

      if (!el) return;
      el.style.transform = `translateY(${scrolled * 0.2}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="parallax-bg"
      className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100"
    />
  );
}
