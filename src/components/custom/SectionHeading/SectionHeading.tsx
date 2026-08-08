"use client";

import Reveal from "@/components/custom/Reveal/Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col gap-2 mb-12">
      {label && (
        <span className="text-sm font-mono font-medium text-primary tracking-[0.18em] uppercase">
          {label}
        </span>
      )}
      <h2 className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-1">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
