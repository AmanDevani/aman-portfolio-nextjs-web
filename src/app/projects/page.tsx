"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import ProjectCard from "@/components/custom/ProjectCard/ProjectCard";

import { projects } from "@/data/projects";
import { trackSectionView } from "@/lib/analytics";

import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const mainRef = useRef<HTMLElement>(null);

  if (projects.length === 0) {
    redirect("/");
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("projects-page");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} id="main-content" className="flex-1 min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-2 text-muted-foreground hover:text-foreground mb-6 -ml-2"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <span className="block text-sm font-mono font-medium text-primary tracking-[0.18em] uppercase mb-3">
            All Projects
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[0.95] mb-2">
            Things I&apos;ve Built
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </main>
  );
}
