"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Hero3DWrapper from "./Hero3D/Hero3DWrapper";
import { ArrowDown, Send, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  const { personal, terminalConfig } = portfolioData;

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, Tag pills, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Terminal label: > hello, world */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0D1018] border border-[#232938] font-mono text-xs text-[#A3ACBD] mb-6"
          >
            <span className="text-[#C6FF3D] font-bold">&gt;</span>
            <span className="text-[#E6EAF0]">{terminalConfig.welcomeMessage}</span>
          </motion.div>

          {/* Tag Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-6"
            aria-label="Core Skill Domains"
          >
            {personal.tagPills.map((pill, idx) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#0D1018] border border-[#232938] text-[#E6EAF0] hover:border-[#C6FF3D]/40 hover:text-[#C6FF3D] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6EFF]" />
                <span>{pill}</span>
                {idx === 0 && <Sparkles className="w-3 h-3 text-[#C6FF3D] ml-0.5" />}
              </span>
            ))}
          </motion.div>

          {/* Headline with Blinking Cursor */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-mono font-extrabold tracking-tight text-[#E6EAF0] leading-[1.1] mb-6"
          >
            {personal.headline}
            <span className="blinking-cursor" aria-hidden="true" />
          </motion.h1>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-[#A3ACBD] font-sans leading-relaxed max-w-xl mb-8"
          >
            {personal.shortBio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#C6FF3D] text-[#05060A] font-mono text-sm font-bold transition-all duration-200 hover:bg-[#b5f524] hover:shadow-[0_0_25px_rgba(198,255,61,0.35)] active:scale-95"
            >
              <Terminal className="w-4 h-4" />
              <span>view_projects()</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#0D1018] border border-[#232938] hover:border-[#C6FF3D]/50 text-[#E6EAF0] hover:text-[#C6FF3D] font-mono text-sm font-semibold transition-all duration-200 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>contact()</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero 3D Scene / Fallback */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <Hero3DWrapper />
        </div>
      </div>
    </section>
  );
}
