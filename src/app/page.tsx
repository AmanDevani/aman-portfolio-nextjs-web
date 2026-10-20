import Hero from "@/components/sections/Hero/Hero";
import Marquee from "@/components/custom/Marquee/Marquee";
import About from "@/components/sections/About/About";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Contact from "@/components/sections/Contact/Contact";

import { skillCategories } from "@/data/skills";
import { experienceItems } from "@/data/experience";

const marqueeItems = [
  ...new Set([
    ...skillCategories.flatMap((skillCategory) => skillCategory.skills.map((skill) => skill.name)),
    ...experienceItems.flatMap((experienceItem) => experienceItem.technologies),
  ]),
];

export default function Home() {
  return (
    <main id="main-content" className="flex-1 relative">
      <Hero />
      <Marquee items={marqueeItems} />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
