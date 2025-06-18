'use client';

import React from 'react';
import About from '../about/about';
import Experience from '../experience/experience';
import Contact from '../contact/contact';
import Projects from '../projects/projects';

const Home = () => {
  return (
    <div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
