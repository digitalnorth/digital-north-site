"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Typed scroll event
interface LenisScrollEvent {
  velocity: number;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      // ❌ smoothTouch removed (not supported in your version)
    });

    // RAF Sync
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // IGLOO SKEW — safe wrapper transform
    lenis.on("scroll", ({ velocity }: LenisScrollEvent) => {
      const skew = velocity * 0.03;

      const wrapper = document.querySelector(".lenis-wrapper") as HTMLElement;
      if (wrapper) wrapper.style.transform = `skewY(${skew}deg)`;
    });

    return () => {
      const wrapper = document.querySelector(".lenis-wrapper") as HTMLElement;
      if (wrapper) wrapper.style.transform = "skewY(0deg)";
    };
  }, []);

  return <div className="lenis-wrapper">{children}</div>;
}
