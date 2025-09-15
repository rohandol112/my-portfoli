import React, { useState, useEffect } from "react";
import { Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "../utils/animations";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Improved scroll spy logic
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'services', 'contact'];
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
      setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements'];

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-4">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md border border-gray-800/50 shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              {...slideIn}
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Rohan.dev
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-grow gap-8">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`text-sm font-medium transition-all duration-200 relative group ${
                      activeSection === sectionId 
                        ? "text-yellow-400" 
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    {activeSection === sectionId && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg"
              >
                <Sun size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-200 shadow-lg"
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg"
              >
                <Sun size={20} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-800/50"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <motion.a
                      key={item}
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(sectionId);
                      }}
                      className={`block text-base font-medium transition-colors ${
                        activeSection === sectionId 
                          ? "text-yellow-400" 
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  );
                })}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;