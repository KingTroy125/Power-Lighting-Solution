import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Wrench, Home, Settings, Shield, BarChart3 } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-md transition-all border border-gray-100 hover:border-primary group">
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full text-primary mb-5 sm:mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 text-center">{description}</p>
      <div className="flex justify-center">
        <Link to="/services" className="text-primary font-medium flex items-center hover:underline text-sm sm:text-base">
          Learn more
          <div className="w-5 h-5 flex items-center justify-center ml-1">
            <i className="ri-arrow-right-line"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building size={24} />,
      title: "Electrical Installations",
      description: "Complete electrical system installations for new constructions and renovations with the highest safety standards"
    },
    {
      icon: <Settings size={24} />,
      title: "Maintenance Contracts",
      description: "Regular maintenance services to ensure your electrical systems are always running optimally and safely"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Project Management",
      description: "End-to-end management of electrical projects from planning and design to implementation and handover"
    },
    {
      icon: <Shield size={24} />,
      title: "Specialized Electrical Services",
      description: "Compliance testing, energy efficiency solutions, and other specialized services to meet your specific electrical needs"
    },
    {
      icon: <Wrench size={24} />,
      title: "Repair & Maintenance",
      description: "Fast and efficient electrical repairs and maintenance services to keep your systems running smoothly"
    },
    {
      icon: <Home size={24} />,
      title: "Home Automation",
      description: "Transform your space with smart home technology for lighting, security, and energy management"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Our Products & Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive electrical solutions with a focus on safety, efficiency, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link 
            to="/services" 
            className="bg-primary text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            View All Services
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
