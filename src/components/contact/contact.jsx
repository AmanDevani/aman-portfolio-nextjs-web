'use client';

import React from 'react';
import SectionHeader from '../../common/sectionHeader';
import { SECTION_HEADER_DESCRIPTION } from '@/common';

const Contact = () => {
  return (
    <section id="#contact">
      <SectionHeader
        title={SECTION_HEADER_DESCRIPTION.CONTACT_SECTION_TITLE}
        description={SECTION_HEADER_DESCRIPTION.CONTACT_SECTION_DESCRIPTION}
      />
    </section>
  );
};

export default Contact;
