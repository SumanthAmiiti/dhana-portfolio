"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Copy, Check, ArrowUpRight, Terminal, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ClosingCTA() {
  const { personal, social } = portfolioData;
  const [copied, setCopied] = useState(false);

  const mailtoLink = `mailto:${social.email}`;

  const copyToClipboard = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactCards = [
    {
      id: "email",
      label: "Email",
      value: social.email,
      href: `mailto:${social.email}`,
      target: undefined,
      rel: undefined,
      icon: Mail,
      command: "send_email()",
      accent: "neon",
      description: "Direct inquiries & recruiting",
      external: false,
    },
    {
      id: "github",
      label: "GitHub",
      value: "DhanasriRongali",
      href: social.github,
      target: "_blank",
      rel: "noopener noreferrer",
      icon: GithubIcon,
      command: "view_repositories()",
      accent: "neon",
      description: "Source code & cloud architectures",
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "dhana-sri-rongali",
      href: social.linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      icon: LinkedinIcon,
      command: "connect()",
      accent: "blue",
      description: "Professional network & experience",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="relative rounded-3xl bg-[#0D1018]/90 border-2 border-dashed border-[#C6FF3D]/80 p-6 sm:p-10 md:p-14 text-center overflow-hidden shadow-[0_0_50px_rgba(198,255,61,0.12)] backdrop-blur-md"
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C6FF3D]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05060A] border border-[#232938] font-mono text-xs text-[#A3ACBD] mb-6">
          <Terminal className="w-3.5 h-3.5 text-[#C6FF3D]" />
          <span>{"// NEXT_PHASE > initiate_collaboration()"}</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-extrabold text-[#E6EAF0] tracking-tight mb-4">
          Ready for the next step?
        </h2>

        {/* Subtitle / Intro */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#A3ACBD] font-sans leading-relaxed mb-10">
          I am currently open to full-time Software Engineering roles, contract
          engagements, and master&apos;s internships in Paris, across Europe, and remote.
          Let&apos;s build resilient systems together.
        </p>

        {/* 3 Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10 max-w-4xl mx-auto text-left">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isNeon = card.accent === "neon";

            return (
              <a
                key={card.id}
                href={card.href}
                target={card.target}
                rel={card.rel}
                className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#05060A]/90 border border-[#232938] ${
                  isNeon
                    ? "hover:border-[#C6FF3D]/70 hover:shadow-[0_8px_30px_rgba(198,255,61,0.14)]"
                    : "hover:border-[#5A6EFF]/70 hover:shadow-[0_8px_30px_rgba(90,110,255,0.14)]"
                } transition-all duration-300 ease-out hover:-translate-y-1 active:scale-[0.98] focus:outline-none focus:ring-2 ${
                  isNeon ? "focus:ring-[#C6FF3D]" : "focus:ring-[#5A6EFF]"
                }`}
                aria-label={
                  card.id === "email"
                    ? `Send email to ${card.value}`
                    : card.id === "github"
                      ? `Open GitHub profile of ${card.value} in a new tab`
                      : `Open LinkedIn profile of ${card.value} in a new tab`
                }
              >
                {/* Top: Icon + Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl bg-[#0D1018] border border-[#232938] ${
                      isNeon
                        ? "text-[#C6FF3D] group-hover:border-[#C6FF3D]/50 group-hover:bg-[#C6FF3D]/10"
                        : "text-[#5A6EFF] group-hover:border-[#5A6EFF]/50 group-hover:bg-[#5A6EFF]/10"
                    } transition-all duration-300 group-hover:scale-105`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 font-mono text-[11px] ${
                      isNeon
                        ? "text-[#60687A] group-hover:text-[#C6FF3D]"
                        : "text-[#60687A] group-hover:text-[#5A6EFF]"
                    } transition-colors`}
                  >
                    <span>/{card.label.toLowerCase()}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Middle: Details */}
                <div className="mb-4">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#60687A] mb-1">
                    {card.label}
                  </span>
                  <p
                    className={`font-mono text-sm sm:text-base font-bold text-[#E6EAF0] ${
                      isNeon ? "group-hover:text-[#C6FF3D]" : "group-hover:text-[#5A6EFF]"
                    } transition-colors break-all`}
                  >
                    {card.value}
                  </p>
                  <p className="font-sans text-xs text-[#A3ACBD] mt-1.5 line-clamp-1">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Prompt / Command Indicator */}
                <div className="pt-3 border-t border-[#232938]/80 flex items-center justify-between text-xs font-mono">
                  <span
                    className={`${
                      isNeon
                        ? "text-[#C6FF3D] group-hover:underline"
                        : "text-[#5A6EFF] group-hover:underline"
                    } flex items-center gap-1`}
                  >
                    <span>&gt;</span>
                    <span>{card.command}</span>
                  </span>

                  {card.id === "email" ? (
                    <span
                      onClick={copyToClipboard}
                      title="Copy email to clipboard"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          copyToClipboard();
                        }
                      }}
                      className="p-1 rounded text-[#A3ACBD] hover:text-[#C6FF3D] hover:bg-[#0D1018] transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-[#C6FF3D]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </span>
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5 text-[#60687A] group-hover:text-[#E6EAF0] transition-colors" />
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Secondary Action Bar: Quick Send + Copy + Status */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-[#C6FF3D] text-[#05060A] font-mono text-sm sm:text-base font-bold transition-all duration-200 hover:bg-[#b0f224] hover:shadow-[0_0_30px_rgba(198,255,61,0.4)] hover:-translate-y-0.5 active:scale-95"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>send_message()</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={(e) => copyToClipboard(e)}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#05060A] border border-[#232938] hover:border-[#C6FF3D]/60 text-[#E6EAF0] hover:text-[#C6FF3D] font-mono text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#C6FF3D]" />
                <span className="text-[#C6FF3D]">copied_to_clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#A3ACBD]" />
                <span>copy_email()</span>
              </>
            )}
          </button>
        </div>

        {/* Metadata Footer Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#232938] text-xs sm:text-sm font-mono text-[#A3ACBD]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
            <span>loc: {personal.location}</span>
          </div>
          <span className="text-[#232938]">•</span>
          <div className="flex items-center gap-1.5 text-[#E6EAF0]">
            <span className="text-[#C6FF3D]">status:</span>
            <span>{personal.status.text}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
