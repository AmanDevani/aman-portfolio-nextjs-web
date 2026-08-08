import { ImageResponse } from "next/og";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";

export const runtime = "edge";
export const alt = `${personalInfo.name} — ${personalInfo.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = skillCategories
  .flatMap((skillCategory) => skillCategory.skills)
  .slice(0, 4)
  .map((skill) => skill.name);

const initials = personalInfo.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0b0d0f 0%, #14171a 60%, #0b0d0f 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Copper glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,122,58,0.28) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Mint glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(31,156,134,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#c97a3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {initials}
          </div>
          <span style={{ color: "#e3a876", fontSize: 22, fontWeight: 600 }}>
            {personalInfo.name}
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 56,
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
            }}
          >
            {personalInfo.role}
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            {personalInfo.tagline}
          </div>

          {/* Skill pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "1px solid rgba(201,122,58,0.45)",
                  color: "#e3a876",
                  fontSize: 18,
                  fontWeight: 500,
                  background: "rgba(201,122,58,0.12)",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: location */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#475569",
            fontSize: 20,
          }}
        >
          <span>📍</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
