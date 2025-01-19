import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { HappyClients, GetInTouch } from './Components/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <HappyClients />
      <GetInTouch />
    </div>
  );
};

export default App;
