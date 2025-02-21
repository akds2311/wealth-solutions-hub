
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-richBlack text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-inter">Shwetshila</h3>
            <p className="text-gray-400 font-readex">
              Building wealth through expert investment management since 1998.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Our Services</h4>
            <ul className="space-y-2 font-readex">
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio Management</a></li>
              <li><a href="#wealth" className="text-gray-400 hover:text-white transition-colors">Wealth Advisory</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research Services</a></li>
              <li><a href="#planning" className="text-gray-400 hover:text-white transition-colors">Financial Planning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Contact</h4>
            <ul className="space-y-2 font-readex">
              <li className="text-gray-400">info@shwetshila.com</li>
              <li className="text-gray-400">+91 (022) 6123-4567</li>
              <li className="text-gray-400">Mumbai Financial Centre, 400001</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-inter">Legal</h4>
            <ul className="space-y-2 font-readex">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEBI Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-readex">
          <p>&copy; {new Date().getFullYear()} Shwetshila Investment Advisors. SEBI Registered. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
