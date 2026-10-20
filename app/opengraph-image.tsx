import { ImageResponse } from "next/og";

export const alt = "Dhana Sri Rongali - Software Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
        backgroundColor: "#05060A",
        fontFamily: "monospace",
        position: "relative",
        border: "4px solid #232938",
      }}
    >
      {/* Neon top-left and right ambient accents */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(198, 255, 61, 0.25) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(90, 110, 255, 0.25) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "2px solid #232938",
          paddingBottom: "24px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#C6FF3D",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <span>~/dhanasri</span>
          <span style={{ color: "#A3ACBD", fontSize: "18px", fontWeight: "normal" }}>
            {"// dev_terminal_neon"}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "999px",
            backgroundColor: "#0D1018",
            border: "1px solid #C6FF3D",
            color: "#C6FF3D",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#C6FF3D",
            }}
          />
          <span>status: open_to_work</span>
        </div>
      </div>

      {/* Main Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            color: "#5A6EFF",
            fontSize: "20px",
            letterSpacing: "2px",
          }}
        >
          &gt; FULL-STACK / CLOUD / DISTRIBUTED SYSTEMS
        </div>

        <div
          style={{
            color: "#E6EAF0",
            fontSize: "64px",
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.1,
          }}
        >
          Dhana Sri Rongali
        </div>

        <div
          style={{
            color: "#C6FF3D",
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          Bold code, better systems.
        </div>

        <div
          style={{
            color: "#A3ACBD",
            fontSize: "20px",
            maxWidth: "850px",
            marginTop: "8px",
          }}
        >
          Software Engineer // 2+ years Node.js &amp; React.js // MSc Software Engineering
          at EPITA Paris
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid #232938",
          paddingTop: "24px",
          color: "#60687A",
          fontSize: "18px",
          zIndex: 10,
        }}
      >
        <div>EPITA Paris Campus // 2026-Present</div>
        <div style={{ color: "#C6FF3D" }}>dhanasri.dev</div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
