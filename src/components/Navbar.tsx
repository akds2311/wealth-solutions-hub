
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-richBlack/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-inter text-white">Shwetshila</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200 font-readex">Features</a>
            <a href="#approach" className="text-gray-400 hover:text-white transition-colors duration-200 font-readex">Approach</a>
            <a href="#performance" className="text-gray-400 hover:text-white transition-colors duration-200 font-readex">Performance</a>
            <button className="px-6 py-2 bg-gold text-white rounded-md hover:bg-gold/90 transition-all duration-200 font-inter">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
