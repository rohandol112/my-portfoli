import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="bg-gray-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left side - Logo and name */}
          <div className="mb-6 sm:mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2">Rohan Dol</h3>
            <p className="text-gray-400 text-sm sm:text-base">Machine Learning Intern | Full Stack Developer | UX Designer</p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">About</a>
                <a href="#skills" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">Projects</a>
                <a href="#experience" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">Experience</a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="space-y-1 sm:space-y-2">
                <a 
                  href="https://linkedin.com/in/rohan-dol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/rohandol112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:rohan45321dol@gmail.com"
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
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
          className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Rohan Dol. All rights reserved. Built with React & TailwindCSS
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
