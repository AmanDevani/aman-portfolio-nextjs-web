"use client";

import Image from "next/image";
import React from "react";
import { project } from "@/data/projects";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import TechStacks from "./techStacks";

const ProjectCard = ({
  title,
  description,
  techStacks,
  githubUrl,
  demoUrl,
  imageUrl,
}: project) => {
  return (
    <div className="rounded-2xl border-1 shadow-md">
      <div className="h-64 w-full flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="text-xl font-medium line-clamp-2" title={title}>
          {title}
        </div>
        <div className="line-clamp-2 text-muted-foreground" title={description}>
          {description}
        </div>
        <div className="flex-grow">
          <p className="text-muted-foreground">Tech Stacks:</p>
          <TechStacks techStacks={techStacks} className="mt-1" />
        </div>
        <div className="flex gap-4 mt-4 justify-between">
          {demoUrl && (
            <Button variant="outline" className="cursor-pointer">
              <Link
                href={demoUrl}
                className="flex align-center gap-2"
                target="_blank"
              >
                <ExternalLink />
                View Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline">
              <Link href={githubUrl}>Github</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
