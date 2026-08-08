import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Aman Devani",
  role: "Frontend Developer",
  tagline: "Building modern, responsive web experiences with React and Next.js.",
  bio: "Frontend Developer with 2+ years of experience building modern and responsive web applications. Passionate about learning new technologies and improving development skills to build better digital experiences. Experienced in working with cross-functional teams, understanding requirements, and delivering quality solutions. Comfortable adapting to fast-changing project needs and solving real-world problems through simple and effective development.",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  location: "Surat, Gujarat",
  resumeUrl: "/Aman%20Devani%20Reume.pdf",
  avatar: "",
  socials: [
    {
      platform: "GitHub",
      url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
      icon: "Linkedin",
    },
  ],
};
