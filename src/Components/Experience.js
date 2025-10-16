import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Penguin Apps",
      location: "Mumbai, Maharashtra",
      duration: "Nov 2024 – May 2025",
      description: [
        "Developed and optimized ML models for document/image analysis, improved prediction accuracy by 15%",
        "Built data preprocessing pipelines using Python, Pandas, and NumPy to handle large datasets efficiently",
        "Collaborated with development teams to deploy ML models in production with reliable performance"
      ],
      type: "work"
    },
    {
      title: "Documentation Lead",
      company: "TCET-Shastra Coding Club",
      location: "Mumbai, Maharashtra",
      duration: "2022 – Present",
      description: [
        "Built responsive club website using React.js and managed comprehensive documentation for 200+ members",
        "Coordinated with Training & Placement Cell on technical initiatives and coding culture development"
      ],
      type: "leadership"
    },
    {
      title: "Design Associate",
      company: "IETE TCET Student Chapter",
      location: "Mumbai, Maharashtra",
      duration: "2022 – 2023",
      description: [
        "Led creative technology initiatives including branding design and digital event promotion"
      ],
      type: "leadership"
    }
  ];

  return (
    <motion.div
      id="experience"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`relative min-h-screen overflow-hidden w-full py-16 transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 ${
              isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
            }`}>
              <span className="text-[#64ffda] font-mono text-xl sm:text-2xl">04.</span> Experience
            </h2>
            <div className="w-16 h-1 bg-[#64ffda] mt-4"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-yellow-400" />
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-6 sm:space-y-8 md:space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8"
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block relative z-10 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 flex-shrink-0 mt-6" />
                  
                  {/* Experience card */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4 gap-3 sm:gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-base sm:text-lg lg:text-xl font-medium text-yellow-400 mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                          {exp.location}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-purple-900/30 text-purple-200 rounded-full text-xs sm:text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-300 flex items-start gap-2 sm:gap-3 text-sm sm:text-base leading-relaxed">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;