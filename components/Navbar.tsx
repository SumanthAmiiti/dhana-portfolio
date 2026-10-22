"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "projects", href: "#projects", code: "01" },
  { label: "expertise", href: "#expertise", code: "02" },
  { label: "experience", href: "#experience", code: "03" },
  { label: "education", href: "#education", code: "04" },
  { label: "contact", href: "#contact", code: "05" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* A11y Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#C6FF3D] text-[#05060A] font-mono text-sm font-semibold rounded shadow-lg border border-[#05060A]"
      >
        &gt; skip_to_content()
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#05060A]/85 backdrop-blur-md border-b border-[#232938] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Handle */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-tight text-[#E6EAF0] hover:text-[#C6FF3D] transition-colors"
            aria-label="Home - Dhana Sri Rongali portfolio"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded bg-[#0D1018] border border-[#232938] text-[#C6FF3D] group-hover:border-[#C6FF3D]/50 transition-colors">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span>
              <span className="text-[#A3ACBD] font-normal">~</span>/
              <span className="text-[#E6EAF0] group-hover:text-[#C6FF3D] transition-colors">
                dhanasri
              </span>
            </span>
            <span className="w-2 h-4 bg-[#C6FF3D] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse inline-block" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#0D1018]/80 border border-[#232938] rounded-full px-3 py-1.5 backdrop-blur-sm"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-3 py-1 text-xs font-mono text-[#A3ACBD] hover:text-[#E6EAF0] transition-colors flex items-center gap-1.5"
              >
                <span className="text-[#60687A] text-[10px] group-hover:text-[#C6FF3D] transition-colors">
                  /{link.code}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action / Status badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0D1018] border border-[#232938] text-[11px] font-mono text-[#A3ACBD]"
              title={portfolioData.personal.status.label}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF3D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF3D]" />
              </span>
              <span className="text-[#C6FF3D]">status:</span>
              <span>{portfolioData.personal.status.text}</span>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#C6FF3D] text-[#05060A] hover:bg-[#b0f224] font-mono text-xs font-bold transition-all hover:shadow-[0_0_15px_rgba(198,255,61,0.3)] active:scale-95"
            >
              <span>contact()</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#0D1018] border border-[#232938] text-[#E6EAF0] hover:text-[#C6FF3D] hover:border-[#C6FF3D]/50 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#232938] bg-[#05060A]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded bg-[#0D1018] border border-[#232938] text-sm font-mono text-[#E6EAF0] hover:text-[#C6FF3D] hover:border-[#C6FF3D]/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#C6FF3D]">/{link.code}</span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A3ACBD]" />
                </a>
              ))}

              <div className="mt-2 pt-2 border-t border-[#232938] flex flex-col gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-[#0D1018] border border-[#232938] text-xs font-mono text-[#A3ACBD]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF3D] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF3D]" />
                  </span>
                  <span className="text-[#C6FF3D]">status:</span>
                  <span>{portfolioData.personal.status.text}</span>
                </div>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded bg-[#C6FF3D] text-[#05060A] font-mono text-xs font-bold transition-all hover:bg-[#b0f224]"
                >
                  contact()
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
