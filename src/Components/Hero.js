import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/rohan.jpg'; // Ensure this path is correct
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  return (
    <motion.div 
      id="home"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden w-full"
    >
      {/* Purple gradient blur - positioned to match design */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-5 sm:left-10 lg:left-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" 
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 sm:pt-32 pb-16 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-purple-400">Rohan</span>{" "}
              <span className="text-pink-500">Dol</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-300 leading-relaxed px-2 sm:px-0"
            >
              Machine Learning Intern | Full Stack Developer | UX Designer
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              Bachelor of Engineering (Electronics & Computer Science) at TCET Mumbai. Experienced in ML, full-stack web/mobile, and blockchain. 4★ CodeChef, Codeforces Pupil. Passionate about building scalable products and seamless user experiences.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start px-2 sm:px-0"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:rohan45321dol@gmail.com" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base"
              >
                Hire Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rohandol112" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base"
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Gradient background for image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Image container */}
            <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 p-1 rounded-3xl">
              <img
                src={heroImage}
                alt="Rohan Dol Profile"
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;