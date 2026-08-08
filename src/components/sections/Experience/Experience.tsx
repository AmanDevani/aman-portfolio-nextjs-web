"use client";

import { useEffect, useRef } from "react";

import SectionHeading from "@/components/custom/SectionHeading/SectionHeading";
import TimelineItem from "@/components/custom/TimelineItem/TimelineItem";

import { experienceItems } from "@/data/experience";
import { trackSectionView } from "@/lib/analytics";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("experience");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (experienceItems.length === 0) return null;

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-secondary/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
