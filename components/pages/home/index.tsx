import React from "react";
import Contact from "./contact";
import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import Hero from "@/components/hero";
import Skills from "./skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
