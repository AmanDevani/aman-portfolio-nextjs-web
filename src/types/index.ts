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

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
  featured: boolean;
  year: number;
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
