"use client";

import { motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import CodeWindow from "@/components/custom/CodeWindow/CodeWindow";
import AnimatedCounter from "@/components/custom/AnimatedCounter/AnimatedCounter";

import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { stats } from "@/data/stats";
import { useSectionView } from "@/hooks/useSectionView";
import { trackHeroCTAClick, trackSocialLinkClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import { ArrowDown, ArrowRight, Briefcase, GitFork } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GitFork,
  Linkedin: Briefcase,
};

const skillNames = skillCategories.flatMap((skillCategory) => skillCategory.skills).map((skill) => skill.name);

const floatingChips = [
  { label: skillNames[0], className: "-top-4 right-6", delay: "0s" },
  { label: skillNames[1], className: "-bottom-5 left-8", delay: "1.5s" },
  { label: skillNames[2], className: "-bottom-5 right-12", delay: "3s" },
].filter((chip) => chip.label);

export default function Hero() {
  const sectionRef = useSectionView<HTMLElement>("hero");

  const [firstName, ...lastNameParts] = personalInfo.name.split(" ");
  const lastName = lastNameParts.join(" ");
  const visibleSocials = personalInfo.socials.filter((socialLink) => socialLink.url);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        className="aurora-a pointer-events-none absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full sm:h-[44rem] sm:w-[44rem]"
        aria-hidden="true"
      />
      <div
        className="aurora-b pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full sm:h-[34rem] sm:w-[34rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">

          {/* Copy */}
          <motion.div
            className="flex min-w-0 flex-col gap-6 sm:gap-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="flex flex-col gap-3 sm:gap-4">
              <span className="font-mono text-sm sm:text-base font-medium text-muted-foreground">
                <span className="mr-2 text-primary">&gt;</span>Hi, I&apos;m
              </span>
              <span className="text-[2.75rem] min-[400px]:text-6xl md:text-7xl font-bold leading-[1.02] tracking-tight text-foreground">
                {firstName}{" "}
                <span className="gradient-text">{lastName}</span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:items-center">
              {projects.length > 0 && (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    asChild
                    onClick={() => trackHeroCTAClick("View My Work")}
                    className="h-12 w-full gap-2 px-7 text-sm font-semibold shadow-lg shadow-primary/30"
                  >
                    <a href="#projects">
                      View My Work
                      <ArrowDown />
                    </a>
                  </Button>
                </motion.div>
              )}
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  onClick={() => trackHeroCTAClick("Get in Touch")}
                  className="h-12 w-full gap-2 px-7 text-sm font-semibold"
                >
                  <a href="#contact">
                    Get in Touch
                    <ArrowRight />
                  </a>
                </Button>
              </motion.div>

              {visibleSocials.length > 0 && (
                <div className="flex items-center gap-1 min-[400px]:ml-1">
                  {visibleSocials.map((socialLink) => {
                    const Icon = socialIcons[socialLink.icon] ?? ArrowRight;
                    return (
                      <Tooltip key={socialLink.platform}>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon-lg" asChild className="size-11 text-muted-foreground hover:text-primary">
                            <a
                              href={socialLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={socialLink.platform}
                              onClick={() => trackSocialLinkClick(socialLink.platform, socialLink.url)}
                            >
                              <Icon className="h-5 w-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{socialLink.platform}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-6 pt-2">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4 sm:gap-6">
                  {index > 0 && <Separator orientation="vertical" className="h-10" />}
                  <div className="flex flex-col">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-mono text-2xl sm:text-3xl font-bold text-foreground"
                    />
                    <span className="text-xs sm:text-sm leading-snug text-muted-foreground">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual: code window + floating chips */}
          <motion.div
            className="relative min-w-0 py-6"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <CodeWindow />

            {floatingChips.map((chip) => (
              <Badge
                key={chip.label}
                variant="outline"
                className={cn(
                  "animate-float absolute z-20 hidden h-9 gap-2 bg-card/90 px-4 font-mono text-sm text-foreground shadow-lg backdrop-blur lg:flex",
                  chip.className
                )}
                style={{ animationDelay: chip.delay }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {chip.label}
              </Badge>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
