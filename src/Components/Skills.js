import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" }
      ]
    },
    {
      title: "Technical",
      skills: [
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
        { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
        { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
        { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
        { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" }
      ]
    }
  ];

  return (
    <motion.div
      id="skills"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`relative min-h-screen overflow-hidden w-full transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-white'
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
              <span className="text-[#64ffda] font-mono text-xl sm:text-2xl">02.</span> Skills
            </h2>
            <div className="w-16 h-1 bg-[#64ffda] mt-4"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="space-y-6 sm:space-y-8"
              >
                {/* Category Title */}
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold text-center ${
                  isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
                }`}>
                  {category.title}
                </h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4,
                        delay: skillIndex * 0.05
                      }}
                      className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-xs sm:text-sm text-[#8892b0] text-center font-medium group-hover:text-[#64ffda] transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;