"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import Reveal from "@/components/custom/Reveal/Reveal";
import ProjectCard from "@/components/custom/ProjectCard/ProjectCard";

import { projects } from "@/data/projects";
import { useSectionView } from "@/hooks/useSectionView";

import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const mainRef = useSectionView<HTMLElement>("projects-page", 0.1);

  if (projects.length === 0) {
    redirect("/");
  }

  return (
    <main ref={mainRef} id="main-content" className="relative flex-1 min-h-screen overflow-hidden pt-24 pb-20">
      <div className="aurora-a absolute -top-20 right-0 h-96 w-96 sm:h-[32rem] sm:w-[32rem] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <Reveal className="mb-10 sm:mb-14">
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="mb-6 -ml-2 gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>

          <span className="mb-3 flex items-center gap-3 font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary">
            <span className="text-muted-foreground" aria-hidden="true">{"//"}</span>
            All Projects
          </span>
          <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-foreground">
            Things I&apos;ve Built
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </main>
  );
}
