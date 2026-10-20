"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExpertiseItem } from "@/data/portfolio";
import { ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";

interface ExpertiseRowProps {
  item: ExpertiseItem;
  index: number;
}

export default function ExpertiseRow({ item, index }: ExpertiseRowProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="border-t border-[#232938] last:border-b"
    >
      {/* Row Header / Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center justify-between gap-4 group transition-colors hover:bg-[#0D1018]/40 px-3 sm:px-4 rounded-lg"
      >
        <div className="flex items-start sm:items-center gap-4 sm:gap-8 flex-1">
          {/* Number 01-04 */}
          <span className="font-mono text-lg sm:text-2xl font-bold text-[#C6FF3D] min-w-[2.5rem]">
            {item.number}
          </span>

          {/* Title & Tagline */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-[#E6EAF0] group-hover:text-[#C6FF3D] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3ACBD] font-sans mt-1">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Toggle Indicator */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline font-mono text-xs text-[#60687A] group-hover:text-[#A3ACBD]">
            {isOpen ? "collapse()" : "expand()"}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border border-[#232938] bg-[#0D1018] group-hover:border-[#C6FF3D]/50 transition-all ${
              isOpen ? "rotate-180 text-[#C6FF3D]" : "text-[#A3ACBD]"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Expanded Content with Details & Skill Chips */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden px-4 sm:px-16 pb-8"
          >
            <div className="pt-2 pb-4 space-y-4">
              {/* Detailed Description */}
              <p className="text-sm sm:text-base text-[#E6EAF0] font-sans leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Highlights / Bullet Proof points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {item.metricsOrHighlights.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 p-2 rounded bg-[#0D1018] border border-[#232938] text-xs font-mono text-[#A3ACBD]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skill Chips */}
              <div className="pt-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A3ACBD] mb-2.5">
                  <Sparkles className="w-3 h-3 text-[#5A6EFF]" />
                  <span>skills_and_technologies:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#0D1018] border border-[#232938] text-[#E6EAF0] hover:border-[#C6FF3D]/60 hover:text-[#C6FF3D] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
