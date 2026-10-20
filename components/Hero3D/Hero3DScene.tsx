"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { portfolioData } from "@/data/portfolio";

function NeonWireframeCubes({ reducedMotion }: { reducedMotion: boolean }) {
  const outerCubeRef = useRef<THREE.Mesh>(null!);
  const innerCubeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x += delta * 0.25;
      outerCubeRef.current.rotation.y += delta * 0.35;
    }
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x -= delta * 0.2;
      innerCubeRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group position={[1.8, 0.2, -1.8]}>
      {/* Outer Neon Lime Wireframe Cube */}
      <mesh ref={outerCubeRef}>
        <boxGeometry args={[3.4, 3.4, 3.4]} />
        <meshBasicMaterial color="#C6FF3D" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Inner Neon Blue-Violet Wireframe Cube */}
      <mesh ref={innerCubeRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshBasicMaterial color="#5A6EFF" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function CodeWindowPanel({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (reducedMotion) return;

    // Mouse parallax (subtle, damped)
    const mouseX = state.pointer.x; // -1 to 1
    const mouseY = state.pointer.y; // -1 to 1

    targetRotation.current.y = mouseX * 0.2;
    targetRotation.current.x = -mouseY * 0.15;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.06
      );
    }
  });

  const { terminalSnippet, promptPrefix } = portfolioData.terminalConfig;

  return (
    <group ref={groupRef}>
      <Float
        speed={reducedMotion ? 0 : 2}
        rotationIntensity={reducedMotion ? 0 : 0.15}
        floatIntensity={reducedMotion ? 0 : 0.4}
      >
        {/* Floating status badge in front */}
        <Html
          position={[1.1, 2.0, 0.8]}
          transform
          distanceFactor={9.2}
          zIndexRange={[100, 0]}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1018]/95 border border-[#C6FF3D] text-[11px] font-mono text-[#E6EAF0] shadow-[0_0_15px_rgba(198,255,61,0.3)] backdrop-blur-md whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF3D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF3D]" />
            </span>
            <span className="text-[#C6FF3D]">status:</span>
            <span>open_to_work</span>
          </div>
        </Html>

        {/* Tilted Floating Code Window */}
        <Html
          transform
          distanceFactor={9}
          position={[-0.1, 0, 0]}
          rotation={[-0.06, 0.1, 0.01]}
          style={{ width: "440px" }}
        >
          <div className="w-[440px] rounded-xl bg-[#0D1018]/95 border border-[#232938] hover:border-[#C6FF3D]/60 transition-colors shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_25px_rgba(198,255,61,0.08)] overflow-hidden backdrop-blur-md select-none text-left">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#232938] bg-[#05060A]/85">
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
                <span>R3F_3D</span>
              </div>
            </div>

            {/* Code */}
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed text-[#E6EAF0]">
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
                <span className="text-[#A3ACBD]">
                  &quot;Bold code, better systems.&quot;
                </span>
              </div>
              <div>
                <span className="text-[#E6EAF0]">&#125;;</span>
              </div>

              <div className="mt-3 pt-3 border-t border-[#232938] flex items-center justify-between text-[11px] text-[#60687A]">
                <span>{promptPrefix}</span>
                <span className="text-[#C6FF3D] flex items-center gap-1">
                  <span>● 3d_parallax_active</span>
                </span>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function Hero3DScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[520px] md:h-[560px]">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#C6FF3D" />
        <pointLight position={[-5, -5, -3]} intensity={0.4} color="#5A6EFF" />

        <NeonWireframeCubes reducedMotion={reducedMotion} />
        <CodeWindowPanel reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
