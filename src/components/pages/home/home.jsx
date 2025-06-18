'use client';

import React from 'react';
import Experience from '@/components/experience/experience';
import Education from '@/components/education/education';
import About from '@/components/about/about';
import Skills from '@/components/skills/skills';
import Contact from '@/components/contact/contact';
import Projects from '@/components/projects/projects';

const Home = () => {
  return (
    <div>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
