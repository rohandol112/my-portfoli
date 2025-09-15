import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Contact = () => {
  return (
    <motion.div
      id="contact"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Get In</h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mt-1 sm:mt-2">Touch!!</h2>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
              Ready to collaborate on your next project! I'm passionate about building scalable products, ML solutions, and seamless user experiences. Let's connect and discuss how we can bring your ideas to life.
            </p>

            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/rohan-dol-44b62a214/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/rohandol112"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:rohan45321dol@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-6 sm:mb-8">Contact</h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm sm:text-base"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm sm:text-base"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm sm:text-base"
                  placeholder="myname@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                  Which information are you requesting?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none text-sm sm:text-base"
                  placeholder="Please be as precise as possible to help us locate the correct piece of information. If possible include specific details....."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-300 transition-colors text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
