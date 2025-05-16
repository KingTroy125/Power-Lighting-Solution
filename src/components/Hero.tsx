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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M9.973 18H14.028C14.5793 18 15.0284 17.5552 14.9925 17.0035C14.9297 16.0278 14.6957 14.9537 14.2 14C13.6686 13.0071 12.8686 12.0071 11.8686 11.0071C11.2248 10.3634 11.2248 9.63655 11.8686 8.99289C12.0751 8.78631 12.3117 8.62947 12.5547 8.5C12.8323 8.35352 13.0746 8.12604 13.2613 7.83923C13.7219 7.14137 13.4845 6.2078 12.7866 5.74723L12.5724 5.6114C11.9007 5.18004 11.0133 5.37299 10.5819 6.04374L10.4063 6.36519C10.1291 6.84253 9.87095 7.33622 9.63388 7.84556C9.21842 8.70512 9 9.61899 9 10.5C9 12.1667 9.73333 13.6667 11.2 15C12.6667 16.3333 13.6667 17.3333 14.2 18H9.973ZM16 18H17.2C17.6418 18 18 18.3582 18 18.8V20.2C18 20.6418 17.6418 21 17.2 21H6.8C6.35817 21 6 20.6418 6 20.2V18.8C6 18.3582 6.35817 18 6.8 18H8V10.5C8 9.39499 8.26741 8.31843 8.76355 7.31717C9.02548 6.76283 9.31429 6.22561 9.62891 5.70566L9.80453 5.38421C10.6678 4.04947 12.3331 3.68496 13.6668 4.55962L13.881 4.69544C15.2775 5.61656 15.7528 7.48372 14.8317 8.87664C14.5042 9.37858 14.0548 9.77688 13.5476 10.0338C13.4298 10.0898 13.3172 10.1534 13.2113 10.2235C13.0977 10.2973 13.0977 10.7027 13.2113 10.7765C14.4074 11.5879 15.4074 12.5879 16.2113 13.7765C16.7371 14.6088 17.0516 15.5539 17.1551 16.5338C17.2414 17.3403 16.6108 18 15.8 18H16Z"/>
                  </svg>
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
