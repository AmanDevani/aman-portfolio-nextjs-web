"use client";

import { useEffect, useRef } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import SkillBadge from "@/components/custom/SkillBadge/SkillBadge";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { trackSectionView } from "@/lib/analytics";

import { GraduationCap } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("about");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (skillCategories.length === 0) return null;

  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-secondary/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="01. About"
          title="Who I Am"
          subtitle="A bit about my background, what I build, and the tools I reach for."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">

          {/* Bio column */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 shrink-0 ring-2 ring-border shadow-sm">
                <AvatarImage
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} profile photo`}
                />
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold font-display border border-primary/20">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-semibold text-foreground leading-tight">
                  {personalInfo.name}
                </span>
                <span className="text-base text-primary font-medium">{personalInfo.role}</span>
                <span className="text-sm text-muted-foreground font-mono mt-0.5">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">{personalInfo.bio}</p>

            <Separator className="bg-border" />
          </div>

          {/* Skills column */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-0.5 p-3 bg-card border border-border rounded-lg">
                <span className="text-2xl font-bold font-display text-foreground">2+</span>
                <span className="text-sm text-muted-foreground">Years of experience</span>
              </div>
              {education.length > 0 && (
                <div className="flex flex-col gap-0.5 p-3 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-1.5 text-primary">
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-mono uppercase tracking-wide">
                      {education[0].startYear}–{education[0].endYear}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-snug">
                    {education[0].degree}
                  </span>
                  <span className="text-xs text-muted-foreground">{education[0].institution}</span>
                </div>
              )}
            </div>

            {skillCategories.map((skillCategory) => (
              <div key={skillCategory.category} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-semibold text-primary tracking-widest uppercase">
                    {skillCategory.category}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      category={skillCategory.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
