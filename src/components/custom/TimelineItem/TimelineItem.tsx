"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SpotlightCard from "@/components/custom/SpotlightCard/SpotlightCard";

import { ExperienceItem } from "@/types";
import { trackExperienceCompanyClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import { ArrowUpRight } from "lucide-react";

interface TimelineItemProps {
  experienceItem: ExperienceItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ experienceItem, index, isLast }: TimelineItemProps) {
  function handleCompanyClick() {
    trackExperienceCompanyClick(experienceItem.company, experienceItem.companyUrl);
  }

  const isCurrent = experienceItem.endDate.toLowerCase() === "present";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative grid grid-cols-[20px_1fr] sm:grid-cols-[28px_1fr] gap-3 sm:gap-5"
    >
      {/* Spine: node + line */}
      <div className="flex flex-col items-center">
        <span className="relative mt-6 flex h-3 w-3 shrink-0 items-center justify-center">
          {isCurrent && (
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" aria-hidden="true" />
          )}
          <span
            className={cn(
              "relative h-3 w-3 rounded-full ring-4 ring-background",
              experienceItem.internship ? "bg-accent" : "bg-primary"
            )}
          />
        </span>
        {!isLast && (
          <motion.span
            className="mt-2 w-px flex-1 origin-top gradient-border"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: index * 0.1 + 0.2, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}
      </div>

      <SpotlightCard className={cn("mb-8 gap-4", isLast && "mb-0")}>
        <CardHeader className="gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="font-mono text-base sm:text-lg font-semibold">
                  {experienceItem.role}
                </CardTitle>
                {experienceItem.internship && (
                  <Badge variant="outline" className="font-mono text-accent border-accent/40">
                    Internship
                  </Badge>
                )}
              </div>
              <a
                href={experienceItem.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCompanyClick}
                className="relative z-10 inline-flex w-fit items-center gap-1 text-sm sm:text-base font-medium text-primary hover:underline underline-offset-4"
              >
                {experienceItem.company}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <Badge variant="secondary" className="w-fit h-6 font-mono text-xs whitespace-nowrap">
              {experienceItem.startDate} — {experienceItem.endDate}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {experienceItem.description}
          </p>

          {experienceItem.highlights.length > 0 && (
            <Accordion
              type="single"
              collapsible
              defaultValue={index === 0 ? "highlights" : undefined}
              className="rounded-lg border border-border bg-background/40 px-3"
            >
              <AccordionItem value="highlights" className="border-b-0">
                <AccordionTrigger className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:no-underline">
                  Key highlights ({experienceItem.highlights.length})
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2.5">
                    {experienceItem.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {experienceItem.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
              {experienceItem.technologies.map((technology) => (
                <Badge key={technology} variant="outline" className="font-mono text-muted-foreground">
                  {technology}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </SpotlightCard>
    </motion.div>
  );
}
