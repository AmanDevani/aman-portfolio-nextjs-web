"use client";

import { education } from "@/data/education";
import React from "react";

const EducationCard = ({
  name,
  degree,
  year,
  cgpa,
  icon,
  isSchool,
}: education) => {
  return (
    <div className="flex item-center gap-3 mb-5">
      <p className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-muted rounded-full text-xl">
        {icon}
      </p>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <div className="text-muted-foreground">
          <p>{degree}</p>
          <div className="flex items-center gap-3">
            <div>{year}</div>
            <p>{isSchool ? `Percentage : ${cgpa}%` : `CGPA : ${cgpa}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
