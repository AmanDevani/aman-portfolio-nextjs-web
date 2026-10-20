"use client";

import { motion } from "motion/react";

import Reveal from "@/components/custom/Reveal/Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col gap-3 mb-10 sm:mb-14">
      {label && (
        <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-medium text-primary tracking-[0.18em] uppercase">
          <span className="text-muted-foreground" aria-hidden="true">{"//"}</span>
          {label}
        </span>
      )}
      <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.05] text-balance">
        {title}
      </h2>
      <motion.div
        className="h-1 w-16 rounded-full gradient-border origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
