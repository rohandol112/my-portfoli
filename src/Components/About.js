import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const About = () => (
  <motion.div
    id="about"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    className="relative min-h-screen bg-gray-900 text-white overflow-hidden w-full"
  >
    {/* Background effects */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute right-5 sm:right-10 lg:right-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px]" 
    />
    <div className="absolute inset-0 bg-black/60" />
    
    <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
                About Me
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Hi, I'm Rohan Dol, currently pursuing a Bachelor of Engineering in Electronics & Computer Science at Thakur College Of Engineering And Technology, Mumbai (2022–Present). I'm passionate about building scalable products, intelligent systems, and seamless user experiences. My interests span full-stack web/mobile development, machine learning, and blockchain.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Highlights</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2.5"></span>
                  <span className="text-sm sm:text-base">Machine Learning Intern at Penguin Apps (2024–2025)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2.5"></span>
                  <span className="text-sm sm:text-base">4★ CodeChef, Codeforces Pupil, 500+ problems solved</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2.5"></span>
                  <span className="text-sm sm:text-base">Winner: Techtrove 2.0, 3x National-level hackathon finalist</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2.5"></span>
                  <span className="text-sm sm:text-base">Open Source: Hacktoberfest 2023 finisher</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2.5"></span>
                  <span className="text-sm sm:text-base">Google Certified Professional UX Designer</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Education Card */}
          <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
                  <div className="font-bold text-yellow-300 text-base sm:text-lg">Thakur College Of Engineering And Technology</div>
                  <div className="text-gray-200 font-medium text-sm sm:text-base">Bachelor of Engineering in Electronics & Computer Science</div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">2022 – Present | Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">4★</div>
                <div className="text-gray-300 text-xs sm:text-sm">CodeChef Rating</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Problems Solved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default About;
