import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'SaaS', 'Blockchain', 'Mobile App', 'Analytics'];
  
  const projects = [
    {
      title: "DocuMindAI - Document Processing SaaS",
      category: "SaaS",
      description: "Full-stack SaaS platform for intelligent document processing with OCR, AI-powered Q&A, and semantic search. Features dashboard analytics with real-time processing metrics.",
      techStack: ["Next.js 15", "FastAPI", "MongoDB", "Pinecone", "LangChain", "Gemini API"],
      image: "/images/projects/documind-dashboard.png",
      link: "https://github.com/rohandol112",
      liveLink: "#",
      features: ["OCR Document Processing", "AI Q&A System", "Semantic Search", "OAuth 2.0 Authentication", "Analytics Dashboard"],
      status: "Live"
    },
    {
      title: "Heirloom - Digital Inheritance Platform",
      category: "Blockchain",
      description: "Blockchain-based inheritance platform with smart contract automation and heartbeat monitoring on Aptos blockchain for secure digital asset transfer.",
      techStack: ["Aptos Move", "Next.js 15", "IPFS", "Smart Contracts", "Web3"],
      image: "/images/projects/heirloom-blockchain.png",
      link: "https://github.com/rohandol112",
      liveLink: "#",
      features: ["Smart Contract Automation", "Heartbeat Monitoring", "IPFS Storage", "Wallet Integration", "Asset Management"],
      status: "Development"
    },
    {
      title: "Shastra Result Processing System",
      category: "Analytics",
      description: "Automated solution for processing and cleaning HackerRank leaderboard data for Shastra competitive programming results with comprehensive analytics.",
      techStack: ["React.js", "FastAPI", "Pandas", "Selenium", "Jupyter"],
      image: "/images/projects/shastra-processing.png",
      link: "https://github.com/rohandol112",
      liveLink: "#",
      features: ["Automated Data Processing", "HackerRank Integration", "Jupyter Notebooks", "Result Analytics", "Data Visualization"],
      status: "Live"
    },
    {
      title: "Water Filter Monitoring App",
      category: "Mobile App",
      description: "Cross-platform mobile application for tracking water filter performance and maintenance scheduling with real-time IoT monitoring capabilities.",
      techStack: ["React Native", "Firebase", "IoT Integration"],
      image: "/images/projects/water-filter-app.png",
      link: "https://github.com/rohandol112",
      liveLink: "#",
      features: ["Real-time Monitoring", "Maintenance Alerts", "Performance Tracking", "Push Notifications", "IoT Integration"],
      status: "Completed"
    }
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
      className="relative min-h-screen bg-gray-900 overflow-hidden w-full"
    >
      {/* Background effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-5 sm:right-10 lg:right-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" 
      />
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section with GitHub Link */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
          <motion.div variants={fadeInUp} className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Have A Look At
            </h2>
            <div className="flex items-center gap-2 sm:gap-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400">
                My Projects
              </h2>
              <motion.svg 
                initial={{ x: 0 }}
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-yellow-400"
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
            className="btn-outline flex items-center gap-2 text-sm sm:text-base"
          >
            See More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-gray-800/50 backdrop-blur-sm p-1.5 sm:p-2 rounded-2xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium ${
                  activeFilter === filter
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="relative">
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card group hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Use a more reliable placeholder service
                      const colors = {
                        'SaaS': '6366f1',
                        'Blockchain': '8b5cf6',
                        'Analytics': '06b6d4',
                        'Mobile App': '10b981'
                      };
                      const color = colors[project.category] || '6366f1';
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#${color}"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
                                fill="white" font-family="Arial" font-size="24" font-weight="bold">
                            ${project.title.split(' ')[0]}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                      project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack?.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-900/30 text-purple-200 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700/50">
                    <span className="text-yellow-400 text-xs sm:text-sm font-medium bg-yellow-400/10 px-2 sm:px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-1 sm:gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg hover:bg-gray-700/50"
                      >
                        Details
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg hover:bg-gray-700/50"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom See More Link */}
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <a
            href="https://github.com/rohandol112"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-sm sm:text-base"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <span className="text-yellow-400 bg-yellow-400/10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl mb-4 sm:mb-6"
                    onError={(e) => {
                      // Use a more reliable placeholder service
                      const colors = {
                        'SaaS': '6366f1',
                        'Blockchain': '8b5cf6',
                        'Analytics': '06b6d4',
                        'Mobile App': '10b981'
                      };
                      const color = colors[selectedProject.category] || '6366f1';
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#${color}"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
                                fill="white" font-family="Arial" font-size="32" font-weight="bold">
                            ${selectedProject.title.split(' ')[0]}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 justify-center flex-1 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {selectedProject.liveLink !== '#' && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 justify-center flex-1 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Description</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 sm:py-2 bg-purple-900/30 text-purple-200 rounded-lg text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;