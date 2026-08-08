"use client";

import { motion } from "motion/react";

import { Skill } from "@/types";
import { trackSkillBadgeHover } from "@/lib/analytics";

interface SkillBadgeProps {
  skill: Skill;
  category: string;
}

export default function SkillBadge({ skill, category }: SkillBadgeProps) {
  function handleMouseEnter() {
    trackSkillBadgeHover(skill.name, category);
  }

  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center px-2.5 py-1 rounded-md border border-border bg-card text-sm font-mono text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-secondary transition-colors duration-150 cursor-default select-none"
      onMouseEnter={handleMouseEnter}
    >
      {skill.name}
    </motion.span>
  );
}
