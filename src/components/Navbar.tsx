
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-[95%] left-1/2 -translate-x-1/2 top-4 z-50 bg-[#1A1F2C]/80 backdrop-blur-md border border-purple-300/10 rounded-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-inter text-white">Shwetshila</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-readex">Features</a>
            <a href="#approach" className="text-gray-300 hover:text-white transition-colors duration-200 font-readex">Approach</a>
            <a href="#performance" className="text-gray-300 hover:text-white transition-colors duration-200 font-readex">Performance</a>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-200 font-inter">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
