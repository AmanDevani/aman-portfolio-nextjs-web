"use client";

import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import TimelineItem from "@/components/custom/TimelineItem/TimelineItem";

import { experienceItems } from "@/data/experience";
import { useSectionView } from "@/hooks/useSectionView";

export default function Experience() {
  const sectionRef = useSectionView<HTMLElement>("experience");

  if (experienceItems.length === 0) return null;

  return (
    <section ref={sectionRef} id="experience" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="03. Experience"
          title="Where I've Worked"
          subtitle="Roles, companies, and what I shipped along the way."
        />

        <div className="flex flex-col">
          {experienceItems.map((experienceItem, index) => (
            <TimelineItem
              key={experienceItem.id}
              experienceItem={experienceItem}
              index={index}
              isLast={index === experienceItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
