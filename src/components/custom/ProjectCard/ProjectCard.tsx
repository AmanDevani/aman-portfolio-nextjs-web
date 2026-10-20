"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import SpotlightCard from "@/components/custom/SpotlightCard/SpotlightCard";
import DeskScene from "@/components/custom/DeskScene/DeskScene";

import { Project } from "@/types";
import {
  trackProjectCardClick,
  trackProjectLiveLinkClick,
  trackProjectRepoLinkClick,
} from "@/lib/analytics";
import { cn } from "@/lib/utils";

import { ExternalLink, GitFork, ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
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

  const visibleTags = featured ? project.tags : project.tags.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <SpotlightCard className={cn("group h-full gap-5 p-0", featured && "md:flex-row md:gap-0")}>
        <Link
          href={`/projects/${project.slug}`}
          onClick={handleCardClick}
          className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-ring"
          aria-label={`View ${project.title} project details`}
        />

        {/* Visual */}
        {project.image ? (
          <DeskScene
            src={project.image}
            alt={`${project.title} website screenshot`}
            sizes={featured ? "(min-width: 768px) 400px, 70vw" : "(min-width: 1024px) 210px, (min-width: 640px) 28vw, 60vw"}
            className={cn("border-b border-border", featured && "md:w-3/5 md:shrink-0 md:border-b-0 md:border-r")}
          />
        ) : (
          <div
            className={cn(
              "relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-secondary/40",
              featured && "md:w-1/2 md:border-b-0 md:border-r"
            )}
          >
            <div className="aurora-a absolute -top-10 -left-10 h-48 w-48 rounded-full" aria-hidden="true" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-card text-primary shadow-lg">
              <FolderGit2 className="h-7 w-7" />
            </div>
          </div>
        )}

        <div className={cn("relative z-0 flex flex-1 flex-col gap-4 pb-5", featured && "md:py-6")}>
          <CardHeader className="gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                {project.year}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <CardTitle className="font-mono text-lg font-semibold transition-colors group-hover:text-primary">
              {project.title}
            </CardTitle>
            <CardDescription className={cn("leading-relaxed", !featured && "line-clamp-2")}>
              {featured ? project.description : project.tagline}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono">
                {tag}
              </Badge>
            ))}
            {project.tags.length > visibleTags.length && (
              <Badge variant="outline" className="font-mono text-muted-foreground">
                +{project.tags.length - visibleTags.length}
              </Badge>
            )}
          </CardContent>

          {(project.liveUrl || project.repoUrl) && (
            <CardFooter className="relative z-20 mt-auto gap-2 border-t border-border bg-transparent">
              {project.liveUrl && (
                <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLiveLinkClick}
                  >
                    <ExternalLink />
                    Live
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRepoLinkClick}
                  >
                    <GitFork />
                    Code
                  </a>
                </Button>
              )}
            </CardFooter>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
