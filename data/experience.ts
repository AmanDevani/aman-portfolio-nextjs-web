export type Experience = {
  id: number;
  companyName: string;
  role: string;
  duration: string;
  type: "Internship" | "Experience";
  description: { detail: string; id: number }[];
  techStacks: { name: string; id: number }[];
};

export const experience: Experience[] = [
  {
    id: 1,
    companyName: "Logicwind",
    role: "Javascript Developer",
    duration: "Jul 2024 - Present",
    type: "Experience",
    description: [
      {
        id: 1,
        detail: "dmalsfuhhe huiefhiuhd iuhaiuu huauyfghsdfsldufsyf iusnlf.",
      },
      {
        id: 2,
        detail: "dmalsfuhhe huiefhiuhd iuhaiuu huauyfghsdfsldufsyf iusnlf.",
      },
      {
        id: 3,
        detail: "dmalsfuhhe huiefhiuhd iuhaiuu huauyfghsdfsldufsyf iusnlf.",
      },
    ],
    techStacks: [
      {
        id: 1,
        name: "React.Js",
      },
      {
        id: 2,
        name: "Next.Js",
      },
      {
        id: 3,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 2,
    companyName: "Logicwind",
    role: "React.Js Developer",
    duration: "Jan 2024 - Jun 2024",
    type: "Internship",
    description: [
      {
        id: 1,
        detail: "",
      },
    ],
    techStacks: [
      {
        id: 1,
        name: "React.Js",
      },
      {
        id: 2,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 3,
    companyName: "Cruxtab Technologies",
    role: "React.Js Developer",
    duration: "Jun 2023 - Jul 2023",
    type: "Internship",
    description: [
      {
        id: 1,
        detail: "",
      },
    ],
    techStacks: [
      {
        id: 1,
        name: "React.Js",
      },
    ],
  },
];
