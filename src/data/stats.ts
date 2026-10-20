import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { label: "Years experience", value: 2, suffix: "+" },
  { label: "Projects shipped", value: projects.length },
  {
    label: "Core technologies",
    value: skillCategories.reduce((total, skillCategory) => total + skillCategory.skills.length, 0),
  },
];
