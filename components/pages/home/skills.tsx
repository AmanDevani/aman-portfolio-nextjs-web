"use client";

import SectionHeader from "@/components/section-header";
import { SECTION_HEADER_DETAILS } from "@/lib/constant";
import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { SiMongodb, SiMysql } from "react-icons/si";
import SkillsCard from "@/components/skills-card";

export type skill = {
  title: string;
  id: number;
  skills: { id: number; name: string; icon: React.ReactNode }[];
};

export const skills: skill[] = [
  {
    id: 1,
    title: "Front End",
    skills: [
      { id: 2, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { id: 3, name: "React.js", icon: <FaReact className="text-blue-500" /> },
      {
        id: 4,
        name: "Next.js",
        icon: <RiNextjsFill className="text-black dark:text-white" />,
      },
      { id: 5, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { id: 6, name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      {
        id: 7,
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" />,
      },
      {
        id: 8,
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-cyan-400" />,
      },
    ],
  },
  {
    id: 9,
    title: "Databases",
    skills: [
      {
        id: 10,
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      { id: 11, name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    id: 12,
    title: "Tools & Platforms",
    skills: [
      { id: 13, name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      {
        id: 14,
        name: "GitHub",
        icon: <FaGithub className="text-black dark:text-white" />,
      },
      {
        id: 15,
        name: "VS Code",
        icon: <VscVscode className="text-blue-500" />,
      },
      {
        id: 16,
        name: "Figma",
        icon: <IoLogoFigma className="text-purple-600" />,
      },
      {
        id: 17,
        name: "Vercel",
        icon: <IoLogoVercel className="text-black dark:text-white" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <SectionHeader
        title={SECTION_HEADER_DETAILS.SKILLS_SECTION_TITLE}
        description={SECTION_HEADER_DETAILS.SKILLS_SECTION_DESCRIPTION}
      />
      {skills?.map((item) => (
        <SkillsCard {...item} key={item?.id} />
      ))}
    </section>
  );
};

export default Skills;
