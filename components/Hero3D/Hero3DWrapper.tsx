"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero3DFallback from "./Hero3DFallback";
import { Box, Layers } from "lucide-react";

// Dynamic import for the 3D scene with ssr: false and fallback
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <Hero3DFallback interactive={false} />,
});

export default function Hero3DWrapper() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  // User toggle override for testing 3D / 2D
  const [forceMode, setForceMode] = useState<"auto" | "3d" | "2d">("auto");

  useEffect(() => {
    setMounted(true);

    // Detect screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    // Check reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine if 3D should be active
  const show3D =
    forceMode === "3d"
      ? true
      : forceMode === "2d"
        ? false
        : !isMobile && hasWebGL && !reducedMotion;

  return (
    <div className="relative w-full">
      {/* 3D Scene or CSS Fallback */}
      <div className="relative min-h-[460px] sm:min-h-[500px] flex items-center justify-center">
        {!mounted ? (
          <Hero3DFallback interactive={false} />
        ) : show3D ? (
          <Hero3DScene />
        ) : (
          <Hero3DFallback interactive={true} />
        )}
      </div>

      {/* Terminal Mode Switcher / Badge */}
      <div className="flex items-center justify-between mt-2 px-2 text-[11px] font-mono text-[#60687A]">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              show3D ? "bg-[#C6FF3D]" : "bg-[#5A6EFF]"
            }`}
          />
          <span>
            {show3D ? "render: webgl_r3f_active" : "render: css_static_fallback"}
          </span>
        </div>

        {/* Interactive toggle switch for testing */}
        <div className="flex items-center gap-1 bg-[#0D1018] border border-[#232938] rounded-md p-0.5">
          <button
            type="button"
            onClick={() => setForceMode("3d")}
            className={`px-2 py-0.5 rounded text-[10px] flex items-center gap-1 transition-colors ${
              show3D
                ? "bg-[#C6FF3D] text-[#05060A] font-bold"
                : "text-[#A3ACBD] hover:text-[#E6EAF0]"
            }`}
            title="Enable 3D WebGL Canvas"
            aria-label="Enable 3D WebGL scene"
          >
            <Box className="w-3 h-3" />
            <span>3D</span>
          </button>
          <button
            type="button"
            onClick={() => setForceMode("2d")}
            className={`px-2 py-0.5 rounded text-[10px] flex items-center gap-1 transition-colors ${
              !show3D
                ? "bg-[#5A6EFF] text-white font-bold"
                : "text-[#A3ACBD] hover:text-[#E6EAF0]"
            }`}
            title="Enable 2D CSS Fallback"
            aria-label="Enable 2D static fallback"
          >
            <Layers className="w-3 h-3" />
            <span>2D</span>
          </button>
        </div>
      </div>
    </div>
  );
}
