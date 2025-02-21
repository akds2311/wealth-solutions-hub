
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-warmGray flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-warmGray opacity-90"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl fade-in">
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium font-inter mb-6">
            Premium Wealth Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-richBlack mb-6 font-inter leading-tight">
            Smart Investment Solutions for High Net Worth Individuals
          </h1>
          <p className="text-lg md:text-xl text-richBlack/70 mb-8 font-readex">
            Expert wealth management strategies tailored for sophisticated investors seeking sustainable growth and capital preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-all duration-200 font-inter text-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 bg-white text-richBlack rounded-lg hover:bg-warmGray transition-all duration-200 font-inter text-lg border border-richBlack/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
