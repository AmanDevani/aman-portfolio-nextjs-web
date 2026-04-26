import app from "../package.json";
import env from "../env";

export const APP_VERSION = app.version;

export const WEBSITE_DETAILS = {
  TITLE: "Aman Devani | Software Developer",
  DESCRIPTION:
    "Personal portfolio website of Aman Devani, a Software Developer.",
  AUTHOR_NAME: "Aman Devani",
  SITE_URL: env.NEXT_PUBLIC_WEB_URL,
  SITE_NAME: "Aman Devani Portfolio",
  KEYWORDS: [],
};

export const SECTION_HEADER_DETAILS = {
  CONTACT_SECTION_TITLE: "Contact Me",
  PROJECT_SECTION_TITLE: "Projects",
  EXPERIENCE_SECTION_TITLE: "Experience",
  EDUCATION_SECTION_TITLE: "Education",
  SKILLS_SECTION_TITLE: "Skills",
  SKILLS_SECTION_DESCRIPTION:
    "Technologies and tools I've worked with throughout my projects and experience",
};

export const CONTACT_DETAILS = {
  LINKEDIN_URL: env.NEXT_PUBLIC_LINKEDIN_URL,
  GITHUB_URL: env.NEXT_PUBLIC_GITHUB_URL,
  CONTACT_NUMBER: env.NEXT_PUBLIC_CONTACT_NUMBER,
  CONTACT_EMAIL: env.NEXT_PUBLIC_CONTACT_EMAIL,
};

export const PERSONAL_DETAILS = {
  name: "Aman Devani",
  role: "Software Developer",
  description:
    "A goal-oriented software developer with experience in building web applications using modern technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.",
  location: "Gujrat, India",
};
