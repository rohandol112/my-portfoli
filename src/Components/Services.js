import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Services = () => {
    const testimonials = [
      {
        text: "Your design skills brought our vision to life, seamlessly blending aesthetics with functionality. The professionalism and dedication you exhibited throughout the project are truly appreciated. Looking forward to future collaborations with your exceptional talent!",
        type: "dark"
      },
      {
        text: "Your UI design work is exceptional—your creativity, attention to detail, and timely delivery exceeded expectations. The visually stunning and user-friendly interface you created will undoubtedly elevate the overall user experience. Thank you for your outstanding contribution to the project!",
        type: "light"
      },
      {
        text: "Your design skills brought our vision to life, seamlessly blending aesthetics with functionality. The professionalism and dedication you exhibited throughout the project are truly appreciated. Looking forward to future collaborations with your exceptional talent!",
        type: "dark"
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const showPrevious = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
      );
    };
  
    const showNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <motion.div
        id="services"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative min-h-screen bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header with Navigation */}
          <div className="mb-12 sm:mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#ccd6f6] mb-2"
            >
              <span className="text-[#64ffda] font-mono text-xl sm:text-2xl">05.</span> Testimonials
            </motion.h2>
            <div className="w-16 h-1 bg-[#64ffda] mt-4"></div>
          </div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <motion.div 
                key={currentIndex + index}
                variants={fadeInUp}
                className="bg-[#112240] border border-[#8892b0]/10 rounded-lg p-6 sm:p-8 relative transition-all duration-300"
              >
                <div className="absolute -top-4 -left-2 text-6xl font-serif text-[#64ffda]/20">
                  "
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="w-12 h-12 bg-[#64ffda]/10 rounded-full flex-shrink-0" />
                  <p className="text-[#8892b0] text-sm leading-relaxed relative">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
          >
            <div className="text-center bg-[#112240] border border-[#8892b0]/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-[#64ffda] mb-2 font-mono">10+</div>
              <div className="text-[#8892b0]">
                Clients
              </div>
            </div>
            <div className="text-center bg-[#112240] border border-[#8892b0]/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-[#64ffda] mb-2 font-mono">50+</div>
              <div className="text-[#8892b0]">
                Designs
              </div>
            </div>
            <div className="text-center bg-[#112240] border border-[#8892b0]/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-[#64ffda] mb-2 font-mono">2yrs+</div>
              <div className="text-[#8892b0]">
                Experience
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  export default Services;

const GetInTouch = () => {
  return (
    <div className="py-16 px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Get In</h2>
          <h3 className="text-4xl font-bold text-yellow-500 mb-8">Touch!!</h3>
          
          <p className="text-gray-300 mb-8 text-lg">
            Ready to collaborate on your digital journey? Reach out for a discussion on
            how we can bring your web projects to life.
          </p>
          
          <div className="flex gap-6 mb-8">
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
          </div>
          
          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-2">Email: contact@example.com</p>
            <p className="flex items-center gap-2">Location: San Francisco, CA</p>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl">
          <form className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
              />
            </div>
            
            <textarea
              placeholder="Which information are you requesting?"
              rows={5}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
            />
            
            <button className="w-full py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Services, GetInTouch };