import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
