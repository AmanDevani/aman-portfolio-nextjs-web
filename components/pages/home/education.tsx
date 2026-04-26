import EducationCard from "@/components/education-card";
import SectionHeader from "@/components/section-header";
import { education } from "@/data/education";
import { SECTION_HEADER_DETAILS } from "@/lib/constant";
import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-12">
      <SectionHeader title={SECTION_HEADER_DETAILS.EDUCATION_SECTION_TITLE} />
      {education?.map((item) => (
        <EducationCard key={item?.id} {...item} />
      ))}
    </section>
  );
};

export default Education;
