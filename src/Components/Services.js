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
        className="relative min-h-screen bg-gray-900 py-16 px-8"
      >
        {/* Background effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-5 sm:left-10 lg:left-20 top-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" 
        />
        
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header with Navigation */}
          <div className="flex items-center justify-between mb-16">
            <motion.button 
              variants={fadeInUp}
              className="text-4xl text-gray-400 hover:text-gray-300 transition-colors focus:outline-none" 
              onClick={showPrevious}
              aria-label="Previous testimonials"
            >
              &lt;
            </motion.button>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-white"
            >
              Happy Clients
            </motion.h2>
            <motion.button 
              variants={fadeInUp}
              className="text-4xl text-gray-400 hover:text-gray-300 transition-colors focus:outline-none" 
              onClick={showNext}
              aria-label="Next testimonials"
            >
              &gt;
            </motion.button>
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
                className={`${
                  testimonial.type === 'light' 
                    ? 'bg-white/10 backdrop-blur-sm' 
                    : 'bg-gray-800/50 backdrop-blur-sm'
                } rounded-2xl p-8 relative transition-all duration-300 shadow-xl`}
              >
                <div className={`absolute -top-4 -left-2 text-6xl font-serif ${
                  testimonial.type === 'light' ? 'text-purple-300/20' : 'text-purple-600/20'
                }`}>
                  "
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className={`w-12 h-12 ${
                    testimonial.type === 'light' ? 'bg-purple-300/20' : 'bg-purple-600/20'
                  } rounded-full flex-shrink-0`} />
                  <p className="text-gray-200 text-sm leading-relaxed relative">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-300 bg-purple-900/30 backdrop-blur-sm px-6 py-2 rounded-full">
                Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 bg-purple-900/30 backdrop-blur-sm px-6 py-2 rounded-full">
                Designs
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2yrs+</div>
              <div className="text-gray-300 bg-purple-900/30 backdrop-blur-sm px-6 py-2 rounded-full">
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