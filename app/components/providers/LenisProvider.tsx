"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({
  children,
  options = {},
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    let lenisInstance: Lenis | null = null;

    const init = () => {
      const prefersReducedMotion =
        typeof window !== "undefined"
          ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
          : false;

      lenisInstance = new Lenis({
      autoRaf: true,
      duration: prefersReducedMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
      anchors: true,
      syncTouch: false,
      smoothWheel: !prefersReducedMotion,
      ...optionsRef.current,
    });

      setLenis(lenisInstance);
    };

    requestAnimationFrame(() => requestAnimationFrame(init));

    return () => {
      lenisInstance?.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  return context;
}
