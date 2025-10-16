import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      id="about"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`relative min-h-screen overflow-hidden w-full transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Subtle background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]'
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
      }`} />
    
    <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
            <div>
              <motion.h2 variants={fadeInUp} className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${
                isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
              }`}>
                <span className="text-[#64ffda] font-mono">01.</span> About Me
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                isDark ? 'text-[#8892b0]' : 'text-slate-700'
              }`}>
                Hi, I'm Rohan Dol, currently pursuing a Bachelor of Engineering at Thakur College Of Engineering And Technology, Mumbai (2022–Present). I'm passionate about building scalable products, intelligent systems, and seamless user experiences. My interests span full-stack web/mobile development, machine learning, and blockchain.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 ${
                isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
              }`}>Highlights</h3>
              <ul className={`space-y-2 sm:space-y-3 ${
                isDark ? 'text-[#8892b0]' : 'text-slate-700'
              }`}>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span className="text-sm sm:text-base">Machine Learning Intern at Penguin Apps (2024–2025)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span className="text-sm sm:text-base">4★ CodeChef, Codeforces Pupil, 500+ problems solved</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span className="text-sm sm:text-base">Winner: Techtrove 2.0, 3x National-level hackathon finalist</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span className="text-sm sm:text-base">Open Source: Hacktoberfest 2023 finisher</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#64ffda] mt-1.5">▹</span>
                  <span className="text-sm sm:text-base">Google Certified Professional UX Designer</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Education Card */}
          <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
            <div className={`rounded-lg p-4 sm:p-6 lg:p-8 border ${
              isDark ? 'bg-[#112240] border-[#8892b0]/10' : 'bg-slate-50 border-slate-300'
            }`}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 ${
                isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
              }`}>Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#64ffda] pl-4 sm:pl-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
                  }`}>Thakur College Of Engineering And Technology</div>
                  <div className={`font-medium text-sm sm:text-base ${
                    isDark ? 'text-[#8892b0]' : 'text-slate-700'
                  }`}>Bachelor of Engineering</div>
                  <div className={`text-xs sm:text-sm mt-1 ${
                    isDark ? 'text-[#8892b0]' : 'text-slate-600'
                  }`}>2022 – Present | Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className={`rounded-lg p-3 sm:p-4 lg:p-6 text-center border ${
                isDark ? 'bg-[#112240] border-[#8892b0]/10' : 'bg-slate-50 border-slate-300'
              }`}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-1">4★</div>
                <div className={`text-xs sm:text-sm ${
                  isDark ? 'text-[#8892b0]' : 'text-slate-600'
                }`}>CodeChef Rating</div>
              </div>
              <div className={`rounded-lg p-3 sm:p-4 lg:p-6 text-center border ${
                isDark ? 'bg-[#112240] border-[#8892b0]/10' : 'bg-slate-50 border-slate-300'
              }`}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-1">500+</div>
                <div className={`text-xs sm:text-sm ${
                  isDark ? 'text-[#8892b0]' : 'text-slate-600'
                }`}>Problems Solved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default About;
