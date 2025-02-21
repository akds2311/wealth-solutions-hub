
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-richBlack flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-richBlack to-black opacity-90"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl fade-in">
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium font-inter mb-6">
            Your Trusted Investment Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-inter leading-tight">
            Building Global Investment Solutions Since 1998
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-readex">
            Join thousands of investors who trust Shwetshila to manage over $2.5 billion in assets. Experience our proven track record of delivering consistent returns through market cycles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-all duration-200 font-inter text-lg">
              Start Investing
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-inter text-lg border border-white/20">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
