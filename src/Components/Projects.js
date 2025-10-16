import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'AI/ML', 'Blockchain', 'Mobile App', 'Analytics'];
  
  const projects = [
    {
      title: "DocuMindAI - Document Processing SaaS",
      category: "AI/ML",
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
      className={`relative min-h-screen overflow-hidden w-full transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        {/* Header Section with GitHub Link */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
          <motion.div variants={fadeInUp}>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 ${
              isDark ? 'text-[#ccd6f6]' : 'text-slate-900'
            }`}>
              <span className="text-[#64ffda] font-mono text-xl sm:text-2xl">03.</span> Projects
            </h2>
            <div className="w-16 h-1 bg-[#64ffda] mt-4"></div>
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
          className="flex justify-start mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 text-xs sm:text-sm font-mono ${
                  activeFilter === filter
                    ? 'bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]'
                    : 'text-[#8892b0] hover:text-[#64ffda] hover:bg-[#64ffda]/5'
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
                className="bg-[#112240] border border-[#8892b0]/10 rounded-lg p-4 sm:p-6 group hover:border-[#64ffda]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Use a more reliable placeholder service
                      const colors = {
                        'AI/ML': '64ffda',
                        'Blockchain': '64ffda',
                        'Analytics': '64ffda',
                        'Mobile App': '64ffda'
                      };
                      const color = colors[project.category] || '64ffda';
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#112240"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
                                fill="#${color}" font-family="monospace" font-size="20" font-weight="bold">
                            ${project.title.split(' ')[0]}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <span className={`px-2 sm:px-3 py-1 rounded-md text-xs font-mono ${
                      project.status === 'Live' ? 'bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]' :
                      project.status === 'Development' ? 'bg-[#8892b0]/10 text-[#8892b0] border border-[#8892b0]' :
                      'bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#8892b0] text-sm sm:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack?.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-md text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 4 && (
                      <span className="px-2 py-1 bg-[#8892b0]/10 text-[#8892b0] rounded-md text-xs font-mono">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-[#8892b0]/10">
                    <span className="text-[#64ffda] text-xs sm:text-sm font-mono">
                      {project.category}
                    </span>
                    <div className="flex gap-1 sm:gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[#8892b0] hover:text-[#64ffda] transition-colors text-xs sm:text-sm font-mono flex items-center gap-1 px-2 sm:px-3 py-1 rounded-md hover:bg-[#64ffda]/5"
                      >
                        Details
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#64ffda] transition-colors text-xs sm:text-sm font-mono flex items-center gap-1 px-2 sm:px-3 py-1 rounded-md hover:bg-[#64ffda]/5"
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
              className="bg-[#112240] rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-[#8892b0]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#ccd6f6] mb-2">{selectedProject.title}</h2>
                  <span className="text-[#64ffda] bg-[#64ffda]/10 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-mono border border-[#64ffda]">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg mb-4 sm:mb-6"
                    onError={(e) => {
                      // Use a more reliable placeholder service
                      const colors = {
                        'AI/ML': '64ffda',
                        'Blockchain': '64ffda',
                        'Analytics': '64ffda',
                        'Mobile App': '64ffda'
                      };
                      const color = colors[selectedProject.category] || '64ffda';
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#112240"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
                                fill="#${color}" font-family="monospace" font-size="28" font-weight="bold">
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
                    <h3 className="text-base sm:text-lg font-semibold text-[#ccd6f6] mb-2 sm:mb-3">Description</h3>
                    <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#ccd6f6] mb-2 sm:mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 sm:py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-md text-xs sm:text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#ccd6f6] mb-2 sm:mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-[#8892b0] flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                          <span className="text-[#64ffda] mt-1">▹</span>
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