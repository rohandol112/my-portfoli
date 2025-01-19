import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      subtitle: "Frontend & Backend Technologies",
      skills: [
        {
          subCategory: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "React.JS", "Next.js", "Tailwind CSS"]
        },
        {
          subCategory: "Backend",
          items: ["Node.JS", "Express.js", "MongoDB", "Firebase"]
        }
      ]
    },
    {
      title: "Programming",
      subtitle: "Core Languages & Tools",
      skills: [
        {
          subCategory: "Languages",
          items: ["Python", "C++", "Java", "TypeScript"]
        },
        {
          subCategory: "Tools",
          items: ["Git", "GitHub", "VS Code", "Postman"]
        }
      ]
    },
    {
      title: "Design",
      subtitle: "UI/UX & Design Tools",
      skills: [
        {
          subCategory: "Design Tools",
          items: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"]
        },
        {
          subCategory: "Concepts",
          items: ["UI Design", "UX Design", "Wireframing", "Prototyping"]
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
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-20 top-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" 
      />
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Professional
          </h2>
          <h2 className="text-4xl font-bold text-yellow-400">
            Skillset
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {category.subtitle}
              </p>

              {category.skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="mb-6 last:mb-0">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">
                    {skillGroup.subCategory}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.2,
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        className="px-4 py-2 bg-purple-900/30 text-purple-200 rounded-full text-sm hover:bg-purple-900/50 transition-colors"
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
    </motion.div>
  );
};

export default Skills;