import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
