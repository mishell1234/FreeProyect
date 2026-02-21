"use client";

import { useEffect, useRef } from "react";

export default function Particulas() {
  const particlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particulas";

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${18 + Math.random() * 8}s`;

      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

    return (
    <div
      ref={particlesRef}
      className="curriculumParticulas"
    />
  );
}