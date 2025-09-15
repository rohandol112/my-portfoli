import React from 'react';
import Navbar from './Components/Navbar';

import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
