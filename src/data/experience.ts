import { ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "1",
    company: "Logicwind",
    role: "Javascript Developer",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Building and maintaining frontend applications across a content management system, a Payload CMS-powered website, and an AI-driven chatbot platform.",
    highlights: [
      "Redesigned the complete admin panel UI/UX for the Content Management System, improving usability and workflow efficiency.",
      "Implemented multilingual support across admin and web platforms for dynamic content management.",
      "Worked with the dynamic theme mechanism and data caching in Next.js.",
      "Worked with Payload CMS for content management and customization workflows, implementing blocks and RBAC for a multi-tenant setup.",
      "Implemented chatbot functionality with custom AI workflow integration, including source references and feedback mechanisms.",
      "Developed and initialized admin panel modules for managing chatbot resources, configurations, and content workflows.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Payload CMS", "Ant Design", "Shadcn"],
    companyUrl: "https://logicwind.com",
  },
  {
    id: "2",
    company: "Logicwind",
    role: "React.Js Developer (Internship)",
    internship: true,
    startDate: "Jan 2024",
    endDate: "June 2024",
    description:
      "Learned frontend development fundamentals and contributed to a form submission application during the initial training period.",
    highlights: [
      "Learned frontend development fundamentals including React.js, JavaScript, HTML, and CSS.",
      "Designed a form submission application for handling dynamic form data and submissions with Ant Design.",
      "Collaborated with senior developers to understand project workflows, debugging, and code management practices.",
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Ant Design"],
    companyUrl: "https://logicwind.com",
  },
];
