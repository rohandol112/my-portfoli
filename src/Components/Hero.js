import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import heroImage from '../assets/rohan.png'; // Ensure this path is correct
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  
  const titles = [
    "Machine Learning Intern",
    "Full Stack Developer", 
    "UX Designer"
  ];

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let i = 0;
    const timer = setInterval(() => {
      setText(currentTitle.slice(0, i));
      i++;
      if (i > currentTitle.length) {
        setTimeout(() => {
          const nextIndex = (currentIndex + 1) % titles.length;
          setCurrentIndex(nextIndex);
          setText("");
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.6)",
        "0 0 20px rgba(147, 51, 234, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      id="home"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden w-full"
    >
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-5 sm:left-10 lg:left-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" 
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-pink-500/30"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-yellow-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="text-purple-400"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(147, 51, 234, 0.8)",
                    "0 0 10px rgba(147, 51, 234, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Rohan
              </motion.span>{" "}
              <motion.span 
                className="text-pink-500"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(236, 72, 153, 0.5)",
                    "0 0 20px rgba(236, 72, 153, 0.8)",
                    "0 0 10px rgba(236, 72, 153, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Dol
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-300 leading-relaxed px-2 sm:px-0 min-h-[2.5rem]"
            >
              <span className="text-yellow-400">{text}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-yellow-400"
              >
                |
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              Bachelor of Engineering (Electronics & Computer Science) at TCET Mumbai. Experienced in ML, full-stack web/mobile, and blockchain. 4★ CodeChef, Codeforces Pupil. Passionate about building scalable products and seamless user experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start px-2 sm:px-0"
            >
              <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(147, 51, 234, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(147, 51, 234, 0.2)",
                    "0 6px 20px rgba(147, 51, 234, 0.4)",
                    "0 4px 15px rgba(147, 51, 234, 0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                href="mailto:rohan45321dol@gmail.com" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                Hire Me
              </motion.a>
              <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(75, 85, 99, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rohandol112" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-200 text-center shadow-lg text-sm sm:text-base relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative group flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Animated Gradient Ring */}
            <motion.div 
              className="absolute -inset-4 rounded-full opacity-75 blur-xl"
              animate={{
                background: [
                  "linear-gradient(45deg, #8b5cf6, #ec4899)",
                  "linear-gradient(45deg, #ec4899, #f59e0b)",
                  "linear-gradient(45deg, #f59e0b, #8b5cf6)",
                  "linear-gradient(45deg, #8b5cf6, #ec4899)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Floating Ring */}
            <motion.div
              className="absolute -inset-2 border-2 border-purple-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image container */}
            <motion.div 
              className="relative bg-gradient-to-r from-purple-900 to-pink-900 p-1 rounded-3xl"
              variants={glowVariants}
              animate="animate"
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={heroImage}
                alt="Rohan Dol Profile"
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-2xl"
                whileHover={{
                  filter: "brightness(1.1) contrast(1.1)"
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Sparkle Effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    right: `${10 + i * 15}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Floating Code Symbols */}
            <motion.div
              className="absolute -top-4 -left-4 text-2xl"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 text-2xl"
              animate={{
                y: [5, -5, 5],
                rotate: [0, -10, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;