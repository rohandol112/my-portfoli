import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['All', 'UX Design', 'Web Development', 'App Development'];
  
  const projects = [
    {
      title: "Project 1",
      category: "Web Development",
      image: "/path-to-image1.jpg",
      link: "#"
    },
    {
      title: "Project 2",
      category: "UX Design",
      image: "/path-to-image2.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      category: "App Development",
      image: "/path-to-image3.jpg",
      link: "#"
    },
    // Add more projects as needed
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const showPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, filteredProjects.length - 3) : Math.max(0, prev - 1)
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) => 
      prev >= filteredProjects.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      id="projects"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gray-900 py-16 px-8"
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
        {/* Header Section with GitHub Link */}
        <div className="flex justify-between items-center mb-12">
          <motion.div variants={fadeInUp} className="space-y-2">
            <h2 className="text-4xl font-bold text-white">
              Have A Look At
            </h2>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-yellow-400">
                My Projects
              </h2>
              <motion.svg 
                initial={{ x: 0 }}
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 text-yellow-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path 
                  d="M5 12h14M12 5l7 7-7 7" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.a
            variants={fadeInUp}
            href="https://github.com/rohandol112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
          >
            See More
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center gap-4 mb-12 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full inline-block mx-auto"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {filteredProjects.slice(currentIndex, currentIndex + 3).map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group rounded-3xl overflow-hidden aspect-video bg-gray-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous projects"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next projects"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom See More Link - Updated with GitHub */}
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/rohandol112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
          >
            See More
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;