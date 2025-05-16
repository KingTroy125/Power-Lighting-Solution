
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-orange mb-6">About Power & Lighting Solutions</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  With over 25 years of experience in the electrical industry, Power & Lighting Solutions has been providing high-quality electrical services to both residential and commercial clients throughout South Africa.
                </p>
                <p className="mb-4">
                  Founded in 1997, our company has grown from a small team of electricians to a comprehensive electrical solutions provider with expertise in various aspects of electrical work, from installations and repairs to energy efficiency and smart home technology.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has earned us a reputation as one of the most trusted electrical service providers in the region.
                </p>
              </div>
              
              <div className="w-full md:w-1/2 bg-gray-200 h-64 md:h-80 rounded-lg">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">Company Image</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Safety</h3>
                <p>
                  Safety is our top priority. We ensure that all installations and repairs meet or exceed industry safety standards to protect you and your property.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Quality</h3>
                <p>
                  We take pride in delivering high-quality workmanship and using only the best materials and products for all our electrical projects.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Integrity</h3>
                <p>
                  We operate with transparency and honesty in all our dealings, providing fair pricing and clear communication throughout the project lifecycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Innovation</h3>
                <p>
                  We continuously stay updated with the latest technologies and practices in the electrical industry to offer innovative solutions to our clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Reliability</h3>
                <p>
                  Our clients can depend on us to be punctual, efficient, and available when they need us, especially in emergency situations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">Customer Focus</h3>
                <p>
                  We prioritize understanding and meeting our clients' unique needs, ensuring their complete satisfaction with our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
