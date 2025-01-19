import React, { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/animations";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Improved scroll spy logic
      const sections = ['home', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
          
          // Special case for home section when at the very top
          if (window.scrollY < 100) {
            setActiveSection('home');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-6">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-[#0B1121]/40 backdrop-blur-md border border-gray-800/50' : 'bg-[#0B1121]/40 backdrop-blur-sm'
        }`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              {...slideIn}
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold text-yellow-500"
            >
              Portfolio.
            </motion.a>

            {/* Center Navigation */}
            <div className="flex items-center justify-center flex-grow gap-8">
              {['Home', 'Skills', 'Projects', 'Services'].map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`text-sm transition-colors ${
                      activeSection === sectionId 
                        ? "text-yellow-500" 
                        : "text-gray-400 hover:text-yellow-500"
                    }`}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="p-2 text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Sun size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;