"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Reveal from "@/components/custom/Reveal/Reveal";
import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import SkillBadge from "@/components/custom/SkillBadge/SkillBadge";
import SpotlightCard from "@/components/custom/SpotlightCard/SpotlightCard";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { experienceItems } from "@/data/experience";
import { useSectionView } from "@/hooks/useSectionView";

import { Briefcase, Code2, GraduationCap, MapPin, Quote } from "lucide-react";

export default function About() {
  const sectionRef = useSectionView<HTMLElement>("about");

  if (skillCategories.length === 0) return null;

  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const currentRole = experienceItems.find((experienceItem) => experienceItem.endDate.toLowerCase() === "present");

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="aurora-b pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="01. About"
          title="Who I Am"
          subtitle="A bit about my background, what I build, and the tools I reach for."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* Bio — spans two columns */}
          <Reveal className="lg:col-span-2">
            <SpotlightCard className="h-full gap-6 p-0">
              <div className="h-1.5 gradient-border" aria-hidden="true" />
              <CardHeader className="px-6 pt-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 shrink-0 ring-2 ring-primary/50 ring-offset-4 ring-offset-card sm:h-20 sm:w-20">
                    <AvatarImage src={personalInfo.avatar} alt={`${personalInfo.name} profile photo`} />
                    <AvatarFallback className="bg-secondary font-mono text-xl font-bold text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-1">
                    <CardTitle className="font-mono text-lg sm:text-xl">{personalInfo.name}</CardTitle>
                    <span className="text-sm font-medium text-primary sm:text-base">{personalInfo.role}</span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground sm:text-sm">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative px-6 pb-6">
                <Quote className="absolute -top-1 right-6 h-10 w-10 text-primary/10" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-loose">
                  {personalInfo.bio}
                </p>
              </CardContent>
            </SpotlightCard>
          </Reveal>

          {/* Right column: currently + education */}
          <div className="flex flex-col gap-5">
            {currentRole && (
              <Reveal delay={0.1}>
                <SpotlightCard className="gap-4">
                  <CardHeader>
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" aria-hidden="true" />
                        <span className="relative h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Currently working
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <CardTitle className="font-mono text-base">{currentRole.role}</CardTitle>
                      <a
                        href={currentRole.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {currentRole.company}
                      </a>
                      <CardDescription className="font-mono text-xs">
                        {currentRole.startDate} – Present
                      </CardDescription>
                    </div>
                  </CardContent>
                </SpotlightCard>
              </Reveal>
            )}

            {education.length > 0 && (
              <Reveal delay={0.15}>
                <SpotlightCard className="gap-4">
                  <CardHeader>
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <GraduationCap className="h-4 w-4 shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-widest">Education</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    {education.map((educationItem) => (
                      <div key={educationItem.id} className="flex flex-col gap-1">
                        <CardTitle className="font-mono text-base">{educationItem.degree}</CardTitle>
                        <CardDescription>{educationItem.institution}</CardDescription>
                        <CardDescription className="font-mono text-xs">
                          {educationItem.startYear} – {educationItem.endYear}
                        </CardDescription>
                      </div>
                    ))}
                  </CardContent>
                </SpotlightCard>
              </Reveal>
            )}
          </div>

          {/* Tech stack — full width */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <SpotlightCard className="gap-5">
              <CardHeader>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Code2 className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-widest">Tech stack</span>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {skillCategories.map((skillCategory) => (
                  <div key={skillCategory.category} className="flex flex-col gap-3">
                    <span className="font-mono text-sm font-semibold text-primary">
                      {skillCategory.category}
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill, index) => (
                        <SkillBadge
                          key={skill.name}
                          skill={skill}
                          category={skillCategory.category}
                          index={index}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
