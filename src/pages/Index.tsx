import React from 'react';
import Navbar01Page from '@/components/navbar-01/navbar-01';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PhoneButton from '@/components/Phone-button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar01Page />
      <Hero />
      <PhoneButton />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
