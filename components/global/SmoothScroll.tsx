"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Explicit typing for the Lenis scroll event
interface LenisScrollEvent {
  velocity: number;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // IGLOO EFFECT — Velocity-based WARP (now typed)
    lenis.on("scroll", ({ velocity }: LenisScrollEvent) => {
      const skew = velocity * 0.035;
      document.body.style.transform = `skewY(${skew}deg)`;
    });

    return () => {
      document.body.style.transform = "skewY(0deg)";
    };
  }, []);

  return <>{children}</>;
}
