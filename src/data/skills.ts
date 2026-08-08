import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "React", proficiency: 4 },
      { name: "Next.js", icon: "NextJs", proficiency: 4 },
      { name: "TypeScript", icon: "TypeScript", proficiency: 4 },
    ],
  },
  {
    category: "UI Libraries",
    skills: [
      { name: "Ant Design", icon: "AntDesign", proficiency: 4 },
      { name: "Shadcn", icon: "Shadcn", proficiency: 4 },
    ],
  },
];
