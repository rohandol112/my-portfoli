import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/rohan.png';
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <motion.div 
      id="home"
      className={`relative min-h-screen overflow-hidden w-full transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]' 
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
      }`} />
      
      {/* Main content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto pt-32 sm:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#64ffda] font-mono text-sm sm:text-base mb-4"
            >
              Hey, I'm
            </motion.p>
            
            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${
                isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
              }`}
            >
              Rohan Dol
            </motion.h1>
            
            {/* Role */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 ${
                isDark ? 'text-[#8892b0]' : 'text-slate-600'
              }`}
            >
              Machine Learning Intern
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-base sm:text-lg max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 ${
                isDark ? 'text-[#8892b0]' : 'text-slate-700'
              }`}
            >
              Final year  Engineering student from Mumbai, India 🇮🇳. 
              Passionate about building intelligent systems, scalable web applications, 
              and creating seamless user experiences.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="mailto:rohan45321dol@gmail.com"
                className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md font-mono text-sm hover:bg-[#64ffda]/10 transition-all duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-[#64ffda]/10 text-[#64ffda] rounded-md font-mono text-sm hover:bg-[#64ffda]/20 transition-all duration-200"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <a 
                href="https://github.com/rohandol112" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-[#64ffda] transition-colors ${
                  isDark ? 'text-[#8892b0]' : 'text-slate-600'
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-[#64ffda] transition-colors ${
                  isDark ? 'text-[#8892b0]' : 'text-slate-600'
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:rohan45321dol@gmail.com"
                className={`hover:text-[#64ffda] transition-colors ${
                  isDark ? 'text-[#8892b0]' : 'text-slate-600'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
                <img
                  src={heroImage}
                  alt="Rohan Dol"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Hero;