'use client';

import { SECTION_HEADER_DESCRIPTION } from '@/common';
import SectionHeader from '@/components/common/sectionHeader';
import React from 'react';

const Education = () => {
  return (
    <section id="#education">
      <SectionHeader
        title={SECTION_HEADER_DESCRIPTION.EDUCATION_SECTION_TITLE}
        description={SECTION_HEADER_DESCRIPTION.EDUCATION_SECTION_DESCRIPTION}
      />
    </section>
  );
};

export default Education;
