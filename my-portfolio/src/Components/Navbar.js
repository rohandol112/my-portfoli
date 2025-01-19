import React from "react";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-[#0B1121]/40 backdrop-blur-md rounded-full border border-gray-800/50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-yellow-500">
            Portfolio.
          </a>

          {/* Center Navigation */}
          <div className="flex items-center justify-center flex-grow gap-8">
            <a href="#home" className="text-yellow-500 text-sm">Home</a>
            <a href="#skills" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Projects</a>
            <a href="#services" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Services</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-yellow-500 transition-colors">
              <Sun size={20} />
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;