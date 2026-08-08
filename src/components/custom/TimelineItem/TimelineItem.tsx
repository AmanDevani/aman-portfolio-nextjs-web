"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

import { ExperienceItem } from "@/types";
import { trackExperienceCompanyClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  experienceItem: ExperienceItem;
  index: number;
}

export default function TimelineItem({ experienceItem, index }: TimelineItemProps) {
  function handleCompanyClick() {
    trackExperienceCompanyClick(experienceItem.company, experienceItem.companyUrl);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative grid grid-cols-[28px_1fr] gap-5 pb-10 last:pb-0"
    >

      {/* Timeline spine: dot + vertical line */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-3 h-3 rounded-full border-2 border-background ring-2 mt-1.5 shrink-0 z-10",
            experienceItem.internship
              ? "bg-accent ring-accent/30"
              : "bg-primary ring-primary/30"
          )}
        />
        {index !== undefined && (
          <div className="w-px flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Content card */}
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-foreground leading-snug">
                {experienceItem.role}
              </h3>
              {experienceItem.internship && (
                <Badge
                  variant="outline"
                  className="text-xs font-mono px-1.5 py-0 h-4 border-accent/50 text-accent bg-accent/10"
                >
                  Internship
                </Badge>
              )}
            </div>
            <a
              href={experienceItem.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCompanyClick}
              className="text-base font-medium text-primary hover:text-primary/70 transition-colors w-fit"
            >
              {experienceItem.company}
            </a>
          </div>
          <span className="text-xs font-mono text-muted-foreground whitespace-nowrap bg-secondary border border-border px-2.5 py-1 rounded-md self-start">
            {experienceItem.startDate} — {experienceItem.endDate}
          </span>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {experienceItem.description}
        </p>

        {experienceItem.highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {experienceItem.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-base text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {experienceItem.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
            {experienceItem.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="text-sm font-mono border-border text-muted-foreground px-2.5 py-0.5"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </div>

    </motion.div>
  );
}
