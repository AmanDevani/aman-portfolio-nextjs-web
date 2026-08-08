"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Project } from "@/types";
import {
  trackProjectCardClick,
  trackProjectLiveLinkClick,
  trackProjectRepoLinkClick,
} from "@/lib/analytics";

import { ExternalLink, GitFork, ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  function handleCardClick() {
    trackProjectCardClick(project.title, project.slug);
  }

  function handleLiveLinkClick(event: React.MouseEvent) {
    event.stopPropagation();
    trackProjectLiveLinkClick(project.title, project.liveUrl);
  }

  function handleRepoLinkClick(event: React.MouseEvent) {
    event.stopPropagation();
    trackProjectRepoLinkClick(project.title, project.repoUrl);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full gap-4 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-[box-shadow,border-color] duration-300 ease-out"
    >
      <Link
        href={`/projects/${project.slug}`}
        onClick={handleCardClick}
        className="absolute inset-0 z-0 rounded-xl"
        aria-label={`View ${project.title} project details`}
      />

      <div className="relative z-10 flex flex-col h-full gap-4 pointer-events-none">
        <div className="flex items-start justify-between gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <FolderGit2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center gap-3 pt-1.5">
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              {project.year}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-150">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-mono px-2 py-0.5 border border-border/60">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs font-mono px-2 py-0.5 text-muted-foreground">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex gap-1.5 pt-2 border-t border-border pointer-events-auto">
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-7 px-2.5 text-sm gap-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveLinkClick}
                >
                  <ExternalLink className="h-3 w-3" />
                  Live
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-7 px-2.5 text-sm gap-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleRepoLinkClick}
                >
                  <GitFork className="h-3 w-3" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
