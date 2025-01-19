import React from "react";
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/animations";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto bg-[#0B1121]/40 backdrop-blur-md rounded-full border border-gray-800/50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <motion.a 
            {...slideIn}
            href="#" 
            className="text-2xl font-bold text-yellow-500"
          >
            Portfolio.
          </motion.a>

          {/* Center Navigation */}
          <div className="flex items-center justify-center flex-grow gap-8">
            {["Home", "Skills", "Projects", "Services"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className={`text-sm transition-colors ${
                  item === "Home" ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="p-2 text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <Sun size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;