import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <img src="https://readdy.ai/api/search-image?query=professional%20electrician%20installing%20modern%20LED%20lighting%20in%20a%20contemporary%20home%2C%20showing%20detailed%20work%20with%20electrical%20wiring%2C%20energy-efficient%20solutions%2C%20clean%20and%20professional%20setting%2C%20high-quality%20image%20with%20soft%20lighting&width=600&height=500&seq=67890&orientation=landscape" 
                 alt="Professional Electrical Services" 
                 className="rounded-xl w-full h-auto object-cover shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Electrical Services?</h2>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full text-primary mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <i className="ri-shield-check-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Certified Professionals</h3>
                  <p className="text-sm sm:text-base text-gray-600">Our team consists of fully licensed and insured electricians with extensive training and experience in all aspects of electrical work.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full text-primary mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <i className="ri-time-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">25+ Years Experience</h3>
                  <p className="text-sm sm:text-base text-gray-600">With over two decades in the industry, we've built a reputation for reliability, quality workmanship, and exceptional customer service.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full text-primary mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <i className="ri-price-tag-3-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Competitive Pricing</h3>
                  <p className="text-sm sm:text-base text-gray-600">We offer transparent, fair pricing with no hidden fees. Get a detailed quote before we begin any work on your project.</p>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="mt-6 sm:mt-8 inline-block bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap text-sm sm:text-base">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 