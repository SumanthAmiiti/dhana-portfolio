"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/portfolio";
import { ExternalLink, ShieldAlert } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface TiltCardProps {
  project: Project;
  index: number;
}

export default function TiltCard({ project, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for cursor-driven tilt
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Rotate transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  // Spotlight gradient coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalized coordinate (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    setSpotlightPos({
      x: Math.round((mouseX / width) * 100),
      y: Math.round((mouseY / height) * 100),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isPlaceholder =
    project.title.includes("[PLACEHOLDER") || project.summary.includes("[PLACEHOLDER");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full rounded-2xl bg-[#0D1018] border transition-colors duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 ${
          isHovered
            ? "border-[#C6FF3D]/70 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(198,255,61,0.12)]"
            : "border-[#232938] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        }`}
      >
        {/* Dynamic Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(198, 255, 61, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Top Header: Number, Placeholder Badge, Status */}
        <div className="relative z-10">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232938]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#C6FF3D]">
                {"// "}
                {project.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A6EFF]" />
              <span className="font-mono text-xs text-[#A3ACBD]">project.ts</span>
            </div>

            {isPlaceholder ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <ShieldAlert className="w-3 h-3" />
                <span>PLACEHOLDER</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#C6FF3D]/10 text-[#C6FF3D] border border-[#C6FF3D]/30">
                <span>{project.status}</span>
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#E6EAF0] group-hover:text-[#C6FF3D] transition-colors tracking-tight mb-3">
            {project.title}
          </h3>

          {/* One-Line Summary */}
          <p className="text-sm text-[#A3ACBD] font-sans leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* Detailed Problem / Role / Result Breakdown */}
          <div className="space-y-2 mb-6 bg-[#05060A]/60 rounded-lg p-3.5 border border-[#232938]/80 font-mono text-xs">
            <div className="flex items-start gap-2">
              <span className="text-[#C6FF3D] font-bold">req:</span>
              <span className="text-[#A3ACBD] font-sans">{project.problem}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#5A6EFF] font-bold">role:</span>
              <span className="text-[#A3ACBD] font-sans">{project.role}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#27C93F] font-bold">out:</span>
              <span className="text-[#E6EAF0] font-sans">{project.result}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tech Stack Chips & Links */}
        <div className="relative z-10 pt-4 border-t border-[#232938]">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#05060A] border border-[#232938] text-[#A3ACBD] group-hover:border-[#C6FF3D]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#05060A] border border-[#232938] hover:border-[#C6FF3D]/60 text-xs font-mono text-[#E6EAF0] hover:text-[#C6FF3D] transition-all"
              aria-label={`View source code for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>source_code()</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C6FF3D] text-[#05060A] hover:bg-[#b0f224] text-xs font-mono font-bold transition-all hover:shadow-[0_0_15px_rgba(198,255,61,0.3)]"
                aria-label={`Visit live demo for ${project.title}`}
              >
                <span>live_demo()</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
