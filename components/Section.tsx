"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  badge?: string;
  number?: string;
  title: string;
  count?: number | string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  badge,
  number,
  title,
  count,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto ${className}`}
      aria-label={title}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12 md:mb-16 border-b border-[#232938] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          {/* Badge / Number tag */}
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#A3ACBD]">
            {number && <span className="text-[#C6FF3D] font-bold">[{number}]</span>}
            {badge && (
              <span className="uppercase tracking-widest text-[11px] text-[#A3ACBD]">
                {badge}
              </span>
            )}
          </div>

          {/* Title like /projects [04] */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-[#E6EAF0] flex items-baseline gap-3">
            <span>/{title}</span>
            {count !== undefined && (
              <span className="text-xl sm:text-2xl text-[#C6FF3D] font-mono font-normal">
                ({count})
              </span>
            )}
          </h2>

          {description && (
            <p className="mt-3 text-sm sm:text-base text-[#A3ACBD] max-w-2xl font-sans">
              {description}
            </p>
          )}
        </div>

        {/* Terminal subtle indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#60687A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]/70" />
          <span>section_{id}.ready</span>
        </div>
      </motion.div>

      {/* Section Content */}
      {children}
    </section>
  );
}
