'use client';

import { SECTION_HEADER_DESCRIPTION } from '@/common';
import SectionHeader from '@/components/common/sectionHeader';
import React from 'react';

const Skills = () => {
  return (
    <section id="#skills">
      <SectionHeader
        title={SECTION_HEADER_DESCRIPTION.SKILLS_SECTION_TITLE}
        description={SECTION_HEADER_DESCRIPTION.SKILLS_SECTION_DESCRIPTION}
      />
    </section>
  );
};

export default Skills;
