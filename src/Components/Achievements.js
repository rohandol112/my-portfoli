import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';

const Achievements = () => {
  const { isDark } = useTheme();
  const achievements = [
    "CodeChef 4★ | Codeforces Pupil | 500+ Problems Solved",
    "Winner - Techtrove 2.0 Inter-college Competition",
    "3x National-level Hackathon Finalist",
    "Hacktoberfest 2023 Contributor"
  ];

  return (
    <motion.div
      id="achievements"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`relative min-h-screen overflow-hidden w-full py-16 transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 ${
              isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
            }`}>
              <span className="text-[#64ffda] font-mono text-xl sm:text-2xl">06.</span> Achievements
            </h2>
            <div className="w-16 h-1 bg-[#64ffda] mt-4"></div>
          </motion.div>

          {/* Simple List */}
          <motion.div 
            variants={fadeInUp}
            className="max-w-3xl space-y-4 sm:space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <span className="text-[#64ffda] mt-1 text-lg">▹</span>
                <p className={`text-sm sm:text-base lg:text-lg transition-colors ${
                  isDark ? 'text-[#8892b0] group-hover:text-[#ccd6f6]' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {achievement}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;