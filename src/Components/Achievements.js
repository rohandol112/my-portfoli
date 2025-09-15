import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Trophy, Award, Github, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      category: "Competitive Programming",
      icon: <Trophy className="w-8 h-8" />,
      items: [
        {
          title: "CodeChef 4 Star Rating",
          description: "Achieved 4★ rating on CodeChef platform"
        },
        {
          title: "Codeforces Pupil Rank",
          description: "Pupil rank on Codeforces with consistent performance"
        },
        {
          title: "500+ Problems Solved",
          description: "Solved over 500 algorithmic problems across platforms"
        }
      ]
    },
    {
      category: "Hackathons & Competitions",
      icon: <Award className="w-8 h-8" />,
      items: [
        {
          title: "Techtrove 2.0 Winner",
          description: "Winner of inter-college technical competition"
        },
        {
          title: "3x National-level Finalist",
          description: "Finalist in multiple national-level hackathons"
        },
        {
          title: "CP Hackathon Finalist",
          description: "Competitive Programming hackathon finalist"
        }
      ]
    },
    {
      category: "Open Source & Certifications",
      icon: <Github className="w-8 h-8" />,
      items: [
        {
          title: "Hacktoberfest 2023",
          description: "Successfully completed Hacktoberfest open source challenge"
        },
        {
          title: "Google UX Designer Certification",
          description: "Google Certified Professional UX Designer"
        }
      ]
    },
    {
      category: "Leadership & Activities",
      icon: <Star className="w-8 h-8" />,
      items: [
        {
          title: "Documentation Lead",
          description: "TCET-Shastra Coding Club (2022–Present)"
        },
        {
          title: "Design Associate",
          description: "IETE TCET Student Chapter (2022–2023)"
        }
      ]
    }
  ];

  return (
    <motion.div
      id="achievements"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden w-full py-16"
    >
      {/* Background effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-5 sm:left-10 lg:left-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px]" 
      />
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4">
              My
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400">
              Achievements
            </h2>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          >
            {achievements.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-yellow-400">
                    {React.cloneElement(category.icon, { 
                      className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" 
                    })}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.items.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: (categoryIndex * 0.1) + (achievementIndex * 0.1)
                      }}
                      className="border-l-4 border-purple-500/50 pl-3 sm:pl-4 py-2"
                    >
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-yellow-300 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8"
          >
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">4★</div>
              <div className="text-gray-300 text-xs sm:text-sm">CodeChef Rating</div>
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Problems Solved</div>
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">3x</div>
              <div className="text-gray-300 text-xs sm:text-sm">National Finalist</div>
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">1</div>
              <div className="text-gray-300 text-xs sm:text-sm">Competition Winner</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;