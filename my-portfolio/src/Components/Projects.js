import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['All', 'UX Design', 'Web Development', 'App Development'];

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      category: 'Web Development',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Project 2',
      category: 'UX Design',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Project 3',
      category: 'App Development',
      image: '/api/placeholder/400/300'
    },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] py-16 px-4">
      <div className="relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d] to-[#0f1624] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-end gap-2">
              <h2 className="text-4xl font-bold">
                <span className="text-white">Have A Look At My </span>
                <span className="text-yellow-400">Projects</span>
              </h2>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                </svg>
              </motion.div>
            </div>
            <button className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2">
              See More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#0f1624]/80 backdrop-blur-sm rounded-full p-2 flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeTab === category
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-[#1a1f2e]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div className="flex transition-transform duration-300 ease-in-out"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="min-w-full h-[500px] bg-[#0f1624] rounded-3xl overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Bottom See More */}
          <div className="flex justify-center mt-12">
            <button className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2">
              See More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;