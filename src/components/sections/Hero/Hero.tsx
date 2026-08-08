"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";

import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";

import { trackHeroCTAClick, trackSectionView } from "@/lib/analytics";

import { ArrowDown, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("hero");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  function handleViewWorkClick() {
    trackHeroCTAClick("View My Work");
  }

  function handleGetInTouchClick() {
    trackHeroCTAClick("Get in Touch");
  }

  const firstName = personalInfo.name.split(" ")[0];
  const lastName = personalInfo.name.split(" ").slice(1).join(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 right-1/3 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "var(--hero-glow)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[360px] h-[360px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--hero-glow-accent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full pt-20 pb-24">
        <motion.div
          className="flex flex-col gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Availability badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground px-3.5 py-1.5 bg-card border border-border rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{personalInfo.location}</span>
              <span className="text-muted-foreground/50" aria-hidden="true">&middot;</span>
              <span>Open to opportunities</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h1 className="font-mono font-extrabold leading-[0.95] tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
                {firstName}
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text">
                {lastName}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground mt-1">
              {personalInfo.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-140"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
            {projects.length > 0 && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  asChild
                  onClick={handleViewWorkClick}
                  className="gap-2 rounded-full font-semibold px-7 shadow-md shadow-primary/25"
                >
                  <a href="#projects">
                    View My Work
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                onClick={handleGetInTouchClick}
                className="gap-2 rounded-full font-semibold px-7 border-border bg-transparent hover:bg-secondary"
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-4 border-t border-border">
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-bold font-display text-foreground">2+</span>
              <span className="text-sm text-muted-foreground font-medium">Years experience</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-bold font-display text-foreground">7</span>
              <span className="text-sm text-muted-foreground font-medium">Projects Delivered</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-bold font-display text-foreground">5</span>
              <span className="text-sm text-muted-foreground font-medium">Technologies</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
