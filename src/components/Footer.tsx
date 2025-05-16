import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-primary mr-2">
                <i className="ri-lightbulb-line text-xl sm:ri-xl"></i>
              </div>
              <div className="text-base sm:text-lg font-bold">POWER & LIGHTING<br/>SOLUTIONS</div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6">Professional electrical and lighting solutions for residential, commercial, and industrial clients since 2000.</p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-primary transition-colors">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
          
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Residential Electrical</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Commercial Electrical</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Lighting Design</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Energy Efficiency</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Electrical Maintenance</Link></li>
            </ul>
          </div>
          
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link to="/about" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link to="/testimonials" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-sm sm:text-base text-gray-400">Cape Town, South Africa</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-sm sm:text-base text-gray-400">021-531-0913</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-sm sm:text-base text-gray-400">info@powerandlighting.co.za</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                  <i className="ri-time-line"></i>
                </div>
                <span className="text-sm sm:text-base text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <p className="text-xs sm:text-sm text-gray-400 mb-2 md:mb-0 md:mr-4">© 2025 Power & Lighting Solutions. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-gray-400">
              Created by <a href="https://kingtroystudio.framer.website" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">KingTroy.Studio</a>
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
