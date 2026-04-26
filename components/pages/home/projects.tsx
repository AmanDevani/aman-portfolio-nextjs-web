import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import { projects } from "@/data/projects";
import { SECTION_HEADER_DETAILS } from "@/lib/constant";
import React from "react";

const Projects = () => {
  return (
    <section className="my-8 py-12" id="projects">
      <SectionHeader title={SECTION_HEADER_DETAILS.PROJECT_SECTION_TITLE} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
