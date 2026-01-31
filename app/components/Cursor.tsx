"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement | null;
    const ring = document.querySelector(".cursor-ring") as HTMLElement | null;

    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-[#323b4c] rounded-full pointer-events-none z-[9999]" />
      <div className="cursor-ring fixed top-0 left-0 w-8 h-8 border border-[#323b4c] rounded-full pointer-events-none z-[9998]" />
    </>
  );
}
