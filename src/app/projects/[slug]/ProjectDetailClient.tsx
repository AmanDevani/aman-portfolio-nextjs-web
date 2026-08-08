"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Project } from "@/types";
import {
  trackProjectDetailPageView,
  trackProjectDetailLiveLinkClick,
  trackProjectDetailRepoLinkClick,
  trackBackToProjectsClick,
} from "@/lib/analytics";

import { ArrowLeft, ExternalLink, GitFork, FolderGit2, Calendar, Tag } from "lucide-react";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { title, slug, year, tagline, tags, liveUrl, repoUrl, description } = project;

  useEffect(() => {
    trackProjectDetailPageView(title, slug);
  }, [title, slug]);

  function handleLiveLinkClick() {
    trackProjectDetailLiveLinkClick(title, liveUrl);
  }

  function handleRepoLinkClick() {
    trackProjectDetailRepoLinkClick(title, repoUrl);
  }

  return (
    <main id="main-content" className="flex-1 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Back */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="gap-2 text-muted-foreground hover:text-foreground mb-10 -ml-2"
          onClick={trackBackToProjectsClick}
        >
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <FolderGit2 className="h-7 w-7 text-primary" />
          </div>
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              {slug}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[0.95] mt-2 mb-3">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{tagline}</p>
          </div>
        </div>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 p-4 rounded-xl border border-border bg-secondary/40">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {year}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            {tags.length} technologies
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs border border-border/60">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {liveUrl && (
            <Button asChild onClick={handleLiveLinkClick} className="gap-2 shadow-sm shadow-primary/20">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" asChild onClick={handleRepoLinkClick} className="gap-2 border-border">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <GitFork className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>

        <Separator className="mb-8 bg-border" />

        {/* Description */}
        <p className="text-base text-muted-foreground leading-loose">{description}</p>

      </div>
    </main>
  );
}
