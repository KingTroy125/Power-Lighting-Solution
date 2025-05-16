import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialCard = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
      <div className="flex text-primary mb-4">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3 sm:mr-4">
          <i className="ri-user-line ri-lg"></i>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm sm:text-base">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The team at Power & Lighting Solutions transformed our outdated office lighting into a modern, energy-efficient system. The difference is remarkable - better light quality and our energy bills have decreased by 30%!",
      name: "Michael Richardson",
      title: "Office Manager, Horizon Technologies"
    },
    {
      quote: "We hired Power & Lighting Solutions for our home renovation project. They were professional, punctual, and provided excellent recommendations for our lighting design. The result exceeded our expectations!",
      name: "Samantha Wilson",
      title: "Homeowner"
    },
    {
      quote: "As a property manager, I've worked with many electrical contractors. Power & Lighting Solutions stands out for their reliability, quality of work, and excellent communication. They're now our go-to for all electrical needs.",
      name: "David Thompson",
      title: "Property Manager, Cityview Apartments"
    }
  ];

  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what some of our satisfied customers have to say about our electrical and lighting solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to Upgrade Your Electrical & Lighting Systems?</h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">Contact us today for a free consultation and quote. Our team of experts is ready to help you find the perfect solution for your needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap text-sm sm:text-base">
              Request a Quote
            </Link>
            <a href="tel:021-531-0913" className="border border-gray-300 bg-white text-gray-800 px-6 sm:px-8 py-2.5 sm:py-4 rounded-button font-medium hover:border-primary hover:text-primary transition-all flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-phone-line"></i>
              </div>
              Call Us: 021-531-0913
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
