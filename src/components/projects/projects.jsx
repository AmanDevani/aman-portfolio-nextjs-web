'use client';

import { SECTION_HEADER_DESCRIPTION } from '@/common';
import SectionHeader from '@/components/common/sectionHeader';
import React from 'react';

const Projects = () => {
  return (
    <section id="#projects">
      <SectionHeader
        title={SECTION_HEADER_DESCRIPTION.PROJECTS_SECTION_TITLE}
        description={SECTION_HEADER_DESCRIPTION.PROJECTS_SECTION_DESCRIPTION}
      />
    </section>
  );
};

export default Projects;
