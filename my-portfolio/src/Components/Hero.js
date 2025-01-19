import React from "react";
import heroImage from '../assets/rohan.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Purple gradient blur - positioned to match design */}
      <div className="absolute left-20 top-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-7xl font-bold">
              <span className="text-purple-400">Rohan</span>{" "}
              <span className="text-pink-500">Dol</span>
            </h1>
            
            <h2 className="text-2xl font-light text-gray-300">
              Developer & UX Designer
            </h2>
            
            <p className="text-lg text-gray-400 max-w-xl">
            I'm a passionate developer and designer with a knack for creating user-friendly and visually appealing web experiences.Mo
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:rohan45321dol@gmail.com" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors"
              >
                Hire Me
              </a>
              <a 
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-medium transition-all"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="relative group">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;