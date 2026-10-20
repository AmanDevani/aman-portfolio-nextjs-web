"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import Reveal from "@/components/custom/Reveal/Reveal";
import DeskScene from "@/components/custom/DeskScene/DeskScene";

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
  const { title, slug, year, tagline, tags, image, liveUrl, repoUrl, description, role, period, challenge, highlights } = project;

  useEffect(() => {
    trackProjectDetailPageView(title, slug);
  }, [title, slug]);

  return (
    <main id="main-content" className="relative flex-1 min-h-screen overflow-hidden pt-24 pb-20">
      <div className="aurora-a absolute -top-20 right-0 h-96 w-96 sm:h-[32rem] sm:w-[32rem] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        <Button
          variant="ghost"
          size="lg"
          asChild
          className="mb-8 -ml-2 gap-2 text-muted-foreground hover:text-foreground"
          onClick={trackBackToProjectsClick}
        >
          <Link href="/projects">
            <ArrowLeft />
            Back to Projects
          </Link>
        </Button>

        <Reveal>
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <FolderGit2 className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {slug}
              </span>
              <h1 className="mt-2 mb-3 font-mono text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-foreground text-balance">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{tagline}</p>
            </div>
          </div>
        </Reveal>

        {image && (
          <Reveal delay={0.05}>
            <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-xl">
              <DeskScene
                src={image}
                alt={`${title} website screenshot`}
                priority
                sizes="(min-width: 768px) 460px, 70vw"
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <Card size="sm" className="mb-6 bg-card/60">
            <CardContent className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                {period ?? year}
              </span>
              {role && (
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <FolderGit2 className="h-4 w-4 text-primary" />
                  {role}
                </span>
              )}
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Tag className="h-4 w-4 text-primary" />
                {tags.length} technologies
              </span>
            </CardContent>
          </Card>

          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mb-10 flex flex-col gap-3 min-[400px]:flex-row">
            {liveUrl && (
              <Button
                asChild
                size="lg"
                onClick={() => trackProjectDetailLiveLinkClick(title, liveUrl)}
                className="h-11 gap-2 px-6 shadow-lg shadow-primary/25"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Live Demo
                </a>
              </Button>
            )}
            {repoUrl && (
              <Button
                variant="outline"
                asChild
                size="lg"
                onClick={() => trackProjectDetailRepoLinkClick(title, repoUrl)}
                className="h-11 gap-2 px-6"
              >
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <GitFork />
                  Source Code
                </a>
              </Button>
            )}
          </div>

          <Separator className="mb-8" />

          <p className="text-base text-muted-foreground leading-loose">{description}</p>
        </Reveal>

        {challenge && (
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-5">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                The challenge
              </span>
              <p className="mt-2 text-base text-foreground leading-relaxed">{challenge}</p>
            </div>
          </Reveal>
        )}

        {highlights && highlights.length > 0 && (
          <Reveal delay={0.1}>
            <h2 className="mt-12 mb-6 font-mono text-2xl font-bold text-foreground">
              Key contributions
            </h2>
            <div className="flex flex-col gap-4">
              {highlights.map((highlight) => (
                <Card key={highlight.title} size="sm" className="bg-card/60">
                  <CardContent>
                    <h3 className="mb-2 font-mono text-base font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {highlight.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        )}

      </div>
    </main>
  );
}
