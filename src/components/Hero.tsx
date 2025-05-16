import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section w-full min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="hero-content w-full py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Electrical & Lighting Solution</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8">We are suppliers & installers of energy efficient lighting solutions to the public - from large corporations to smaller scale residential property owners.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium hover:bg-opacity-90 transition-all text-center whitespace-nowrap">
                Request a Quote
              </Link>
              <Link to="/services" className="border border-gray-300 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-button font-medium hover:border-primary hover:text-primary transition-all flex items-center justify-center whitespace-nowrap">
                Our Services
                <div className="w-5 h-5 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="p-10 sm:p-16 flex flex-col items-center justify-center">
                <div className="w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center text-primary mb-8">
                  <img 
                    src="Power&Lighting.png" 
                    alt="Power & Lighting Solutions Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-primary text-2xl sm:text-4xl font-bold text-center">POWER & <br/>LIGHTING<br/>SOLUTIONS</div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-0 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg">
              <div className="text-xl sm:text-2xl font-bold">25+</div>
              <div className="text-xs sm:text-sm">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
