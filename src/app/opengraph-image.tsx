import { ImageResponse } from "next/og";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { readDarkThemeTokens } from "@/lib/theme-tokens";

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
  // Colours come from src/styles/theme.css (.dark) — never hard-code them here.
  const theme = readDarkThemeTokens();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: theme["background"],
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Primary glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme["glow-primary"]} 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Accent glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme["glow-accent"]} 0%, transparent 70%)`,
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
              background: theme["primary"],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme["primary-foreground"],
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {initials}
          </div>
          <span style={{ color: theme["foreground"], fontSize: 22, fontWeight: 600 }}>
            {personalInfo.name}
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56, gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: theme["primary"],
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
            }}
          >
            {personalInfo.role}
          </div>

          <div
            style={{
              fontSize: 28,
              color: theme["muted-foreground"],
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
                  border: `1px solid ${theme["border"]}`,
                  color: theme["accent"],
                  fontSize: 18,
                  fontWeight: 500,
                  background: theme["card"],
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
            color: theme["muted-foreground"],
            fontSize: 20,
          }}
        >
          <span>{personalInfo.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
