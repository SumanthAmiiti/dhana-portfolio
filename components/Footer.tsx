"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-[#232938] bg-[#05060A] py-12 px-4 sm:px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#E6EAF0]">
            <Terminal className="w-4 h-4 text-[#C6FF3D]" />
            <span>{portfolioData.personal.name}</span>
            <span className="text-[#60687A]">/</span>
            <span className="text-[#A3ACBD] font-normal">
              {portfolioData.personal.title}
            </span>
          </div>
          <p className="font-mono text-xs text-[#60687A]">
            &copy; {currentYear} Dhana Sri Rongali. Dev Terminal Neon theme. All rights
            reserved.
          </p>
        </div>

        {/* Center: Tech Stack note */}
        <div className="text-xs font-mono text-[#A3ACBD] text-center">
          <span>Engineered with </span>
          <span className="text-[#C6FF3D]">Next.js 15</span>
          <span> + </span>
          <span className="text-[#5A6EFF]">R3F 3D</span>
          <span> + </span>
          <span className="text-[#E6EAF0]">Tailwind v4</span>
        </div>

        {/* Right: Return to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D1018] border border-[#232938] hover:border-[#C6FF3D]/50 text-xs font-mono text-[#A3ACBD] hover:text-[#C6FF3D] transition-colors"
          aria-label="Scroll back to the top of the page"
        >
          <span>return_to_top()</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
