"use client";

import { Experience } from "@/data/experience";
import React from "react";
import TechStacks from "./techStacks";

const ExperienceCard = ({
  companyName,
  role,
  duration,
  techStacks,
  type,
  description,
}: Experience) => {
  const isIntern = type === "Internship";
  return (
    <div className="my-4">
      <div className="md:flex justify-between items-center">
        <div>
          <div className="text-xl font-semibold">
            {role} {isIntern && "Intern"}
          </div>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground text-sm">{duration}</div>
      </div>
      <ul className="list-disc pl-8 pt-2 text-sm">
        {description?.map((item) => (
          <div key={item?.id}>
            <li>{item?.detail}</li>
          </div>
        ))}
      </ul>
      <TechStacks techStacks={techStacks} variant="outline" className="mt-2" />
    </div>
  );
};

export default ExperienceCard;
