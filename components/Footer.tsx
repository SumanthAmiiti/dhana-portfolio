"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Terminal, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal, social } = portfolioData;

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
            <span>{personal.name}</span>
            <span className="text-[#60687A]">/</span>
            <span className="text-[#A3ACBD] font-normal">{personal.title}</span>
          </div>
          <p className="font-mono text-xs text-[#60687A]">
            &copy; {currentYear} Dhana Sri Rongali. Dev Terminal Neon theme. All rights
            reserved.
          </p>
        </div>

        {/* Center: Contact Links & Tech Stack note */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
          {/* Contact quick links */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${social.email}`}
              className="p-2 rounded-lg bg-[#0D1018] border border-[#232938] text-[#A3ACBD] hover:text-[#C6FF3D] hover:border-[#C6FF3D]/50 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(198,255,61,0.2)] transition-all duration-200"
              aria-label={`Send email to ${social.email}`}
              title="Email: dhanasri0911@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1018] border border-[#232938] text-[#A3ACBD] hover:text-[#C6FF3D] hover:border-[#C6FF3D]/50 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(198,255,61,0.2)] transition-all duration-200"
              aria-label="GitHub Profile (opens in new tab)"
              title="GitHub: https://github.com/DhanasriRongali"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1018] border border-[#232938] text-[#A3ACBD] hover:text-[#5A6EFF] hover:border-[#5A6EFF]/50 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(90,110,255,0.2)] transition-all duration-200"
              aria-label="LinkedIn Profile (opens in new tab)"
              title="LinkedIn: https://www.linkedin.com/in/dhanasri-rongali-204545198/"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <span className="hidden sm:inline text-[#232938]" aria-hidden="true">
            |
          </span>

          <div className="text-xs font-mono text-[#A3ACBD]">
            <span>Engineered with </span>
            <span className="text-[#C6FF3D]">Next.js 15</span>
            <span> + </span>
            <span className="text-[#5A6EFF]">R3F 3D</span>
            <span> + </span>
            <span className="text-[#E6EAF0]">Tailwind v4</span>
          </div>
        </div>

        {/* Right: Return to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D1018] border border-[#232938] hover:border-[#C6FF3D]/50 text-xs font-mono text-[#A3ACBD] hover:text-[#C6FF3D] hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
          aria-label="Scroll back to the top of the page"
        >
          <span>return_to_top()</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
