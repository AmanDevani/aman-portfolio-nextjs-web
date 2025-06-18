'use client';

import React from 'react';
import About from '../../about/about';
import Experience from '../experience/experience';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import Education from '../education/education';

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
