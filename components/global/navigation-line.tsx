"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavigationLine() {
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const len = lineRef.current.getTotalLength();

    gsap.set(lineRef.current, {
      strokeDasharray: len,
      strokeDashoffset: len,
    });

    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          ref={lineRef}
          d="
            M50 0
            C45 180 60 260 50 460
            C40 680 50 780 50 1000
          "
          stroke="#00F0FF"
          strokeWidth="0.4"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
