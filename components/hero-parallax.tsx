'use client';

import { useEffect, useRef } from 'react';

export function HeroParallax() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        if (gradientRef.current) {
          gradientRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        }

        if (starsRef.current) {
          starsRef.current.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
        }
      });
    };

    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;
        const scrollPercent = Math.min(scrollY / maxScroll, 1);

        if (gradientRef.current) {
          gradientRef.current.style.transform = `translateY(${scrollPercent * 100}px)`;
        }

        if (starsRef.current) {
          starsRef.current.style.transform = `translateY(${scrollPercent * 150}px)`;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translateY(${scrollPercent * -80}px)`;
        }
      }
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20 transition-transform duration-300 ease-out"
      />
      <div
        ref={starsRef}
        className="absolute inset-0 opacity-30 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent)`,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
      />
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] transition-transform duration-700 ease-out"
      />
    </>
  );
}
