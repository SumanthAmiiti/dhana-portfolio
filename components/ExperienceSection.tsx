"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, ChevronRight, Terminal } from "lucide-react";

const typeBadge: Record<string, { label: string; color: string; dot: string }> = {
  "full-time": {
    label: "full_time",
    color: "text-[#C6FF3D] border-[#C6FF3D]/40 bg-[#C6FF3D]/8",
    dot: "bg-[#C6FF3D]",
  },
  internship: {
    label: "internship",
    color: "text-[#5A6EFF] border-[#5A6EFF]/40 bg-[#5A6EFF]/8",
    dot: "bg-[#5A6EFF]",
  },
  contract: {
    label: "contract",
    color: "text-[#A3ACBD] border-[#232938] bg-transparent",
    dot: "bg-[#A3ACBD]",
  },
  "part-time": {
    label: "part_time",
    color: "text-[#A3ACBD] border-[#232938] bg-transparent",
    dot: "bg-[#A3ACBD]",
  },
};

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div
        className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#C6FF3D]/40 via-[#232938] to-transparent pointer-events-none hidden sm:block"
        aria-hidden="true"
      />

      <ol className="relative flex flex-col gap-8" aria-label="Work experience timeline">
        {experience.map((item, idx) => {
          const badge = typeBadge[item.type] ?? typeBadge["full-time"];
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.48, delay: idx * 0.1 }}
              className="relative sm:pl-14"
            >
              {/* Timeline dot */}
              <span
                className="absolute left-3.5 top-6 -translate-x-1/2 hidden sm:flex w-3 h-3 rounded-full border-2 border-[#05060A] ring-2 ring-[#232938] items-center justify-center"
                aria-hidden="true"
              >
                <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
              </span>

              {/* Card */}
              <article className="rounded-2xl bg-[#0D1018] border border-[#232938] hover:border-[#C6FF3D]/40 transition-all duration-300 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[#05060A] border border-[#232938] group-hover:border-[#C6FF3D]/40 transition-colors flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-[#C6FF3D]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-mono font-bold text-[#E6EAF0] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-mono text-[#C6FF3D] mt-0.5">{item.company}</p>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs border ${badge.color} shrink-0`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} aria-hidden="true" />
                    {badge.label}
                  </span>
                </div>

                {/* Meta row: dates + location */}
                <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono text-[#A3ACBD]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C6FF3D]" aria-hidden="true" />
                    {item.dates}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#5A6EFF]" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>

                {/* Plain summary */}
                <p className="text-sm sm:text-base text-[#A3ACBD] font-sans leading-relaxed mb-5">
                  {item.plainSummary}
                </p>

                {/* Tech detail bullets */}
                <ul className="flex flex-col gap-2 mb-5" aria-label="Role responsibilities">
                  {item.techDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm font-sans text-[#E6EAF0]">
                      <ChevronRight
                        className="w-4 h-4 text-[#C6FF3D] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack pills */}
                {item.stack.length > 0 && (
                  <div
                    className="flex flex-wrap gap-2 pt-4 border-t border-[#232938]"
                    aria-label="Technologies used"
                  >
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#05060A] border border-[#232938] font-mono text-xs text-[#A3ACBD] hover:border-[#C6FF3D]/40 hover:text-[#C6FF3D] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          );
        })}
      </ol>

      {/* Timeline end marker */}
      <div className="hidden sm:flex items-center gap-3 pl-14 mt-6 text-[11px] font-mono text-[#60687A]">
        <Terminal className="w-3.5 h-3.5 text-[#C6FF3D]" aria-hidden="true" />
        <span>{`// timeline complete — ${experience.length} entries loaded`}</span>
      </div>
    </div>
  );
}
