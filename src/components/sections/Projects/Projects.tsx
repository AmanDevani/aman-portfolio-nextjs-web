"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import ProjectCard from "@/components/custom/ProjectCard/ProjectCard";

import { projects } from "@/data/projects";
import { useSectionView } from "@/hooks/useSectionView";

import { ArrowRight } from "lucide-react";

export default function Projects() {
  const sectionRef = useSectionView<HTMLElement>("projects");

  if (projects.length === 0) return null;

  const featuredProjects = projects.filter((project) => project.featured);
  const isSingleProject = featuredProjects.length === 1;

  return (
    <section ref={sectionRef} id="projects" className="py-20 sm:py-28 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="02. Projects"
            title="Things I've Built"
            subtitle="A selection of production apps and open-source tools."
          />
          {projects.length > featuredProjects.length && (
            <Button variant="outline" size="lg" asChild className="mb-10 w-fit gap-2 sm:mb-14">
              <Link href="/projects">
                View all projects
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>

        <div
          className={
            isSingleProject
              ? "grid grid-cols-1"
              : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured={isSingleProject} />
          ))}
        </div>

      </div>
    </section>
  );
}
