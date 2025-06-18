'use client';

import React from 'react';
import SectionHeader from '../../common/sectionHeader';
import { SECTION_HEADER_DESCRIPTION } from '@/common';

const Experience = () => {
  return (
    <section id="#experience">
      <SectionHeader
        title={SECTION_HEADER_DESCRIPTION.EXPERIENCE_SECTION_TITLE}
        description={SECTION_HEADER_DESCRIPTION.EXPERIENCE_SECTION_DESCRIPTION}
      />
    </section>
  );
};

export default Experience;
