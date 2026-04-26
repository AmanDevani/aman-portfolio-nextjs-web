import React from "react";
import { skill } from "./pages/home/skills";

const SkillsCard = ({ title, skills }: skill) => {
  return (
    <div className="my-4">
      <p className="text-xl font-semibold">{title}</p>
      <div className="flex items-center flex-wrap gap-4 py-3 text-center">
        {skills?.map((skill) => (
          <div key={skill.id}>
            <div className="w-14 h-14 flex items-center justify-center bg-muted rounded-full text-xl">
              {skill.icon}
            </div>
            <p className="text-muted-foreground py-3  text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
