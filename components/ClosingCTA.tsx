"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Copy, Check, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ClosingCTA() {
  const { personal, social } = portfolioData;
  const [copied, setCopied] = useState(false);

  const cleanEmail = social.email.includes("[PLACEHOLDER")
    ? "contact@dhanasri.dev"
    : social.email;

  const mailtoLink = `mailto:${cleanEmail}?subject=Software%20Engineering%20Opportunity%20-%20Dhana%20Sri%20Rongali&body=Hi%20Dhana,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding...`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
        className="relative rounded-3xl bg-[#0D1018]/90 border-2 border-dashed border-[#C6FF3D]/80 p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-[0_0_50px_rgba(198,255,61,0.12)] backdrop-blur-md"
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
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-mono font-extrabold text-[#E6EAF0] tracking-tight mb-6">
          Ready for the next step?
        </h2>

        {/* Subtitle / Intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#A3ACBD] font-sans leading-relaxed mb-10">
          I am currently open to full-time Software Engineering roles, contract
          engagements, and master&apos;s internships in Paris, across Europe, and remote.
          Let&apos;s build resilient systems together.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {/* Primary send_message() button */}
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C6FF3D] text-[#05060A] font-mono text-base font-bold transition-all duration-200 hover:bg-[#b0f224] hover:shadow-[0_0_30px_rgba(198,255,61,0.4)] active:scale-95"
          >
            <Mail className="w-5 h-5" />
            <span>send_message()</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-[#05060A] border border-[#232938] hover:border-[#C6FF3D]/60 text-[#E6EAF0] hover:text-[#C6FF3D] font-mono text-sm font-semibold transition-all active:scale-95"
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

        {/* Social / Profile Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-[#232938] text-sm font-mono">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#A3ACBD] hover:text-[#C6FF3D] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#5A6EFF]" />
            <span>linkedin/dhanasri</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#A3ACBD] hover:text-[#C6FF3D] transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-[#C6FF3D]" />
            <span>github/dhanasri</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="hidden sm:inline-flex items-center gap-2 text-[#60687A]">
            <span>loc: {personal.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
