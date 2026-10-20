export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  avatar: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProjectHighlight {
  /** Short, outcome-oriented heading */
  title: string;
  /** Problem, what I built and the engineering decision behind it */
  description: string;
  /** Skills this contribution demonstrates */
  skills: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** Screenshot under /public (e.g. "/projects/my-project.png"); empty string = no image */
  image: string;
  /** Leave empty when the site is client-only and must not be linked */
  liveUrl: string;
  repoUrl: string;
  tags: string[];
  featured: boolean;
  year: number;
  /** My role / scope on the project */
  role?: string;
  /** Delivery period, e.g. "2024 – 2026" */
  period?: string;
  /** One-line summary of the problem the product solves */
  challenge?: string;
  /** Key engineering contributions shown on the detail page */
  highlights?: ProjectHighlight[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  companyUrl: string;
  internship?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}
