import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <motion.footer
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`py-8 sm:py-12 px-6 sm:px-8 lg:px-12 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a] border-[#8892b0]/10' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left side - Logo and name */}
          <div className="mb-6 sm:mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-mono text-[#64ffda] mb-1 sm:mb-2">&lt;RD /&gt;</h3>
            <p className="text-[#8892b0] text-sm sm:text-base">Machine Learning Intern | Full Stack Developer</p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-[#ccd6f6] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#about" className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base">About</a>
                <a href="#skills" className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base">Skills</a>
                <a href="#projects" className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base">Projects</a>
                <a href="#contact" className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base">Contact</a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-[#ccd6f6] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="space-y-1 sm:space-y-2">
                <a 
                  href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/rohandol112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:rohan45321dol@gmail.com"
                  className="block text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm sm:text-base"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          variants={fadeInUp}
          className="border-t border-[#8892b0]/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
        >
          <p className="text-[#8892b0] text-xs sm:text-sm font-mono">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
