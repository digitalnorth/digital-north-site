'use client';

import { useEffect, useRef, useState } from 'react';

export function NorthStarAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const drawNorthStar = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      time += 0.005;

      ctx.save();
      ctx.globalAlpha = 0.15 + Math.sin(time) * 0.05;

      const numBeams = 8;
      for (let i = 0; i < numBeams; i++) {
        const angle = (i / numBeams) * Math.PI * 2 + time * 0.5;
        const length = Math.min(width, height) * 0.8;

        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length
        );

        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.3)');
        gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.1)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 + Math.sin(time + i) * 1;
        ctx.stroke();
      }

      const starGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 30
      );
      starGradient.addColorStop(0, 'rgba(34, 211, 238, 0.6)');
      starGradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.2)');
      starGradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fillStyle = starGradient;
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(drawNorthStar);
    };

    drawNorthStar();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
      style={{ pointerEvents: 'none' }}
    />
  );
}
