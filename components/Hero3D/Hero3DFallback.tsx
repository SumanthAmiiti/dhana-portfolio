import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Hero3DFallback({
  interactive = false,
}: {
  interactive?: boolean;
}) {
  const { terminalSnippet, promptPrefix } = portfolioData.terminalConfig;

  return (
    <div className="relative w-full max-w-lg mx-auto py-4 select-none">
      {/* Background Neon Wireframe Cube Simulation (CSS/SVG) */}
      <div
        className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none opacity-40 z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-[#C6FF3D] animate-[spin_30s_linear_infinite]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Isometric Cube */}
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            stroke="#5A6EFF"
            strokeDasharray="4 4"
            opacity="0.7"
          />
          <line x1="100" y1="20" x2="100" y2="100" stroke="#C6FF3D" />
          <line x1="170" y1="60" x2="100" y2="100" stroke="#C6FF3D" />
          <line x1="30" y1="60" x2="100" y2="100" stroke="#C6FF3D" />
          <line x1="100" y1="100" x2="100" y2="180" stroke="#5A6EFF" />
          <line
            x1="100"
            y1="100"
            x2="170"
            y2="140"
            stroke="#5A6EFF"
            strokeDasharray="3 3"
          />
          <line
            x1="100"
            y1="100"
            x2="30"
            y2="140"
            stroke="#5A6EFF"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      {/* Floating Status Badge */}
      <div className="relative z-20 flex justify-end mb-2 mr-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1018] border border-[#C6FF3D]/50 text-xs font-mono text-[#E6EAF0] shadow-[0_0_15px_rgba(198,255,61,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF3D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF3D]" />
          </span>
          <span className="text-[#C6FF3D]">status:</span>
          <span>open_to_work</span>
        </div>
      </div>

      {/* Tilted Floating Code-Window Panel */}
      <div
        className={`relative z-10 rounded-xl bg-[#0D1018]/95 border border-[#232938] hover:border-[#C6FF3D]/50 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(198,255,61,0.06)] overflow-hidden backdrop-blur-md ${
          interactive
            ? "transform hover:-translate-y-1 hover:rotate-0 rotate-[-1.5deg]"
            : "rotate-[-1deg]"
        }`}
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#232938] bg-[#05060A]/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-[#A3ACBD]">
              {terminalSnippet.filename}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-[#60687A]">
            <span>TS</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#E6EAF0] overflow-x-auto">
          <div className="text-[#60687A] text-[11px] mb-2">
            {"// engineer.ts — Dhana Sri Rongali profile"}
          </div>
          <div>
            <span className="text-[#5A6EFF]">const </span>
            <span className="text-[#C6FF3D]">dhanasri</span>
            <span className="text-[#A3ACBD]">: SoftwareEngineer = </span>
            <span className="text-[#E6EAF0]">&#123;</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">name: </span>
            <span className="text-[#C6FF3D]">&quot;Dhana Sri Rongali&quot;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">role: </span>
            <span className="text-[#C6FF3D]">&quot;Software Engineer&quot;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">education: </span>
            <span className="text-[#E6EAF0]">&#123;</span>
          </div>
          <div className="pl-8">
            <span className="text-[#A3ACBD]">degree: </span>
            <span className="text-[#C6FF3D]">&quot;MSc Computer Science&quot;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-8">
            <span className="text-[#A3ACBD]">institution: </span>
            <span className="text-[#C6FF3D]">&quot;EPITA Paris&quot;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-8">
            <span className="text-[#A3ACBD]">period: </span>
            <span className="text-[#C6FF3D]">&quot;2026 - Present&quot;</span>
          </div>
          <div className="pl-4">
            <span className="text-[#E6EAF0]">&#125;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">experience: </span>
            <span className="text-[#C6FF3D]">
              &quot;2+ years (Node.js &amp; React.js)&quot;
            </span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">coreStack: </span>
            <span className="text-[#E6EAF0]">[</span>
            <span className="text-[#5A6EFF]">&quot;TypeScript&quot;</span>
            <span className="text-[#A3ACBD]">, </span>
            <span className="text-[#5A6EFF]">&quot;Node.js&quot;</span>
            <span className="text-[#A3ACBD]">, </span>
            <span className="text-[#5A6EFF]">&quot;React&quot;</span>
            <span className="text-[#A3ACBD]">, </span>
            <span className="text-[#5A6EFF]">&quot;AWS&quot;</span>
            <span className="text-[#E6EAF0]">]</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">status: </span>
            <span className="text-[#C6FF3D]">&quot;open_to_work&quot;</span>
            <span className="text-[#A3ACBD]">,</span>
          </div>
          <div className="pl-4">
            <span className="text-[#A3ACBD]">motto: </span>
            <span className="text-[#A3ACBD]">&quot;Bold code, better systems.&quot;</span>
          </div>
          <div>
            <span className="text-[#E6EAF0]">&#125;;</span>
          </div>

          <div className="mt-3 pt-3 border-t border-[#232938] flex items-center justify-between text-[11px] text-[#60687A]">
            <span>{promptPrefix}</span>
            <span className="text-[#C6FF3D] flex items-center gap-1">
              <span>● ready</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
