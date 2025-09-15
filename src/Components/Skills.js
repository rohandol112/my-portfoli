import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      subtitle: "Core Development Languages",
      skills: [
        {
          subCategory: "Languages",
          items: ["C++", "Python", "JavaScript", "TypeScript"]
        }
      ]
    },
    {
      title: "Web/Mobile Technologies",
      subtitle: "Frontend & Backend Development",
      skills: [
        {
          subCategory: "Frontend",
          items: ["React.js", "Next.js", "React Native", "TailwindCSS"]
        },
        {
          subCategory: "Backend",
          items: ["Node.js", "Express.js", "REST APIs", "FastAPI"]
        }
      ]
    },
    {
      title: "Databases & Cloud",
      subtitle: "Data Storage & Cloud Services",
      skills: [
        {
          subCategory: "Databases",
          items: ["MongoDB", "Pinecone Vector DB", "Firebase", "IPFS"]
        }
      ]
    },
    {
      title: "AI/ML & Tools",
      subtitle: "Machine Learning & Development Tools",
      skills: [
        {
          subCategory: "AI/ML",
          items: ["LangChain", "Pandas", "NumPy", "OpenCV"]
        },
        {
          subCategory: "Tools",
          items: ["Docker", "Git", "Selenium", "FastAPI"]
        }
      ]
    },
    {
      title: "Blockchain",
      subtitle: "Web3 & Smart Contracts",
      skills: [
        {
          subCategory: "Blockchain",
          items: ["Aptos Move Smart Contracts", "Web3.js"]
        }
      ]
    },
    {
      title: "Core Computer Science",
      subtitle: "Fundamentals & Problem Solving",
      skills: [
        {
          subCategory: "Concepts",
          items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
        }
      ]
    }
  ];

  return (
    <motion.div
      id="skills"
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
              My Professional
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400">
              Skillset
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 sm:mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
                  {category.subtitle}
                </p>

                {category.skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex} className="mb-4 sm:mb-6 last:mb-0">
                    <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2 sm:mb-3">
                      {skillGroup.subCategory}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.2,
                            delay: (index * 0.1) + (skillIndex * 0.05)
                          }}
                          className="px-2 sm:px-3 py-1 sm:py-2 bg-purple-900/30 text-purple-200 rounded-full text-xs sm:text-sm hover:bg-purple-900/50 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;