"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Compass, Target, TrendingUp, Navigation } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const methodSteps = [
  {
    icon: Compass,
    title: "Signal Mapping",
    description:
      "We identify and analyze market signals, user behaviors, and emerging patterns to understand the landscape.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Target,
    title: "North Star Positioning",
    description:
      "Define your unique value proposition and strategic position in the market that guides all decisions.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Trajectory Design",
    description:
      "Chart the optimal path forward with clear milestones, informed by data and aligned with your vision.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Navigation,
    title: "Navigation Execution",
    description:
      "Execute with precision, adapting to real-time feedback while maintaining course toward your goals.",
    color: "from-purple-500 to-pink-500",
  },
];

export function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");

      if (!panels.length) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => "+=" + window.innerWidth * panels.length,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0a1628] to-[#0f1d35] py-20 relative">
      <div className="container mx-auto px-8 mb-12">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          The Digital North Method
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          Our proven framework for navigating digital transformation
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative flex w-fit h-screen">
        {methodSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="scroll-panel flex-shrink-0 w-screen h-screen flex items-center justify-center px-8"
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
                    <div className="flex items-center gap-6 mb-8">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-400 mb-2">
                          Step {index + 1} of {methodSteps.length}
                        </div>
                        <h3 className="text-4xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xl text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2">
                      {methodSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === index
                              ? "w-12 bg-gradient-to-r " + step.color
                              : "w-6 bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
