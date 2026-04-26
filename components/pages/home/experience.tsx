import ExperienceCard from "@/components/experience-card";
import SectionHeader from "@/components/section-header";
import { experience } from "@/data/experience";
import { SECTION_HEADER_DETAILS } from "@/lib/constant";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <SectionHeader title={SECTION_HEADER_DETAILS.EXPERIENCE_SECTION_TITLE} />
      {experience.map((item) => (
        <ExperienceCard key={item?.id} {...item} />
      ))}
    </section>
  );
};

export default Experience;
