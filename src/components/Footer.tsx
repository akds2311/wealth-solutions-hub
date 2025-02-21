
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-richBlack text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-inter">Shwetshila</h3>
            <p className="text-gray-400 font-readex">
              Premium wealth management solutions for discerning investors.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Quick Links</h4>
            <ul className="space-y-2 font-readex">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#approach" className="text-gray-400 hover:text-white transition-colors">Approach</a></li>
              <li><a href="#performance" className="text-gray-400 hover:text-white transition-colors">Performance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Contact</h4>
            <ul className="space-y-2 font-readex">
              <li className="text-gray-400">contact@shwetshila.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Financial District</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Legal</h4>
            <ul className="space-y-2 font-readex">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-readex">
          <p>&copy; {new Date().getFullYear()} Shwetshila. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
