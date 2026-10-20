"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin, Calendar, CheckCircle, Terminal } from "lucide-react";

export default function EducationSection() {
  const edu = portfolioData.education[0];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-[#0D1018] border border-[#232938] hover:border-[#C6FF3D]/50 transition-all p-6 sm:p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#232938]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#05060A] border border-[#232938] flex items-center justify-center text-[#C6FF3D]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#C6FF3D]">
                  edu_record_01.log
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6EFF]" />
                <span className="font-mono text-xs text-[#A3ACBD]">
                  active_enrollment
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#E6EAF0]">
                {edu.degree} — {edu.field}
              </h3>
            </div>
          </div>

          {/* Time & Location Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#05060A] border border-[#232938] text-[#A3ACBD]">
              <Calendar className="w-3.5 h-3.5 text-[#C6FF3D]" />
              <span>{edu.period}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#05060A] border border-[#232938] text-[#A3ACBD]">
              <MapPin className="w-3.5 h-3.5 text-[#5A6EFF]" />
              <span>{edu.location}</span>
            </span>
          </div>
        </div>

        {/* Institution Info */}
        <div className="mb-6">
          <div className="text-lg font-mono font-semibold text-[#C6FF3D] mb-2 flex items-center gap-2">
            <span>{edu.institution}</span>
          </div>
          <p className="text-sm sm:text-base text-[#A3ACBD] font-sans leading-relaxed max-w-3xl">
            {edu.description}
          </p>
        </div>

        {/* Highlights / Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-[#232938]">
          {edu.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-2.5 p-3 rounded-lg bg-[#05060A] border border-[#232938] text-xs font-mono text-[#E6EAF0]"
            >
              <CheckCircle className="w-4 h-4 text-[#C6FF3D] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Terminal Geo Coordinates */}
        <div className="mt-6 pt-4 border-t border-[#232938] flex items-center justify-between text-[11px] font-mono text-[#60687A]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>EPITA Campus Paris // 48.8153° N, 2.3630° E</span>
          </div>
          <span className="text-[#C6FF3D]">status: verified</span>
        </div>
      </motion.div>
    </div>
  );
}
