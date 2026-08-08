"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import ProjectCard from "@/components/custom/ProjectCard/ProjectCard";

import { projects } from "@/data/projects";
import { trackSectionView } from "@/lib/analytics";

import { ArrowRight } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("projects");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);

  if (projects.length === 0) return null;

  return (
    <section ref={sectionRef} id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="flex items-start justify-between gap-6 mb-12">
          <SectionHeading
            label="02. Projects"
            title="Things I've Built"
            subtitle="A selection of production apps and open-source tools."
          />
          {projects.length > featuredProjects.length && (
            <div className="shrink-0 pt-8">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-1.5 rounded-full border-border text-muted-foreground hover:text-foreground"
              >
                <Link href="/projects">
                  View all projects
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
