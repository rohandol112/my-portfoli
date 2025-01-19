import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/rohan.jpg'; // Ensure this path is correct
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Purple gradient blur - positioned to match design */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-20 top-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" 
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left content */}
          <motion.div 
            variants={fadeInUp}
            className="flex-1 space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-7xl font-bold"
            >
              <span className="text-purple-400">Rohan</span>{" "}
              <span className="text-pink-500">Dol</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-light text-gray-300"
            >
              Developer & UX Designer
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-xl"
            >
              I'm a passionate developer and designer with a knack for creating user-friendly and visually appealing web experiences.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:rohan45321dol@gmail.com" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors"
              >
                Hire Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-medium transition-all"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Gradient background for image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Image container */}
            <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 p-1 rounded-3xl">
              <img
                src={heroImage}
                alt="Profile"
                className="w-[400px] h-[400px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;