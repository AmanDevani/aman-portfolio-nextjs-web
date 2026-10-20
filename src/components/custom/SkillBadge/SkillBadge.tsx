"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

import { Skill } from "@/types";
import { trackSkillBadgeHover } from "@/lib/analytics";

interface SkillBadgeProps {
  skill: Skill;
  category: string;
  index?: number;
}

export default function SkillBadge({ skill, category, index = 0 }: SkillBadgeProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -2 }}
      onMouseEnter={() => trackSkillBadgeHover(skill.name, category)}
    >
      <Badge
        variant="outline"
        className="h-9 cursor-default bg-card/60 px-4 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        {skill.name}
      </Badge>
    </motion.li>
  );
}
