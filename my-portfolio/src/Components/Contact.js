import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Contact = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gray-900 py-16 px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <motion.div 
          variants={fadeInUp}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl font-bold text-white">Get In</h2>
            <h2 className="text-5xl font-bold text-yellow-400 mt-2">Touch!!</h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-md">
            Ready to collaborate on your digital journey! Reach out for a discussion on 
            how we can bring your web projects to life.
          </p>

          <div className="flex gap-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Twitter className="w-6 h-6 text-gray-900" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-900" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Instagram className="w-6 h-6 text-gray-900" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          variants={fadeInUp}
          className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Contact</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-400 mb-2">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-400 mb-2">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                placeholder="myname@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Which information are you requesting?
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                placeholder="Please be as precise as possible to help us locate the correct piece of information. If possible include specific details....."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
