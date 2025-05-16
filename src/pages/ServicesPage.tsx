
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-orange mb-6">Our Services</h1>
          <p className="text-lg mb-12 max-w-3xl">
            At Power & Lighting Solutions, we offer a comprehensive range of electrical services for both residential and commercial clients. Our team of certified professionals ensures that all projects are completed to the highest standards of quality and safety.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Electrical Installations</h2>
              <p className="mb-4">Complete electrical system installations for new constructions and renovations with the highest safety standards.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>New building wiring</li>
                <li>Rewiring and upgrades</li>
                <li>Circuit installations</li>
                <li>Fuse box replacements</li>
                <li>Emergency power systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Maintenance Contracts</h2>
              <p className="mb-4">Regular maintenance services to ensure your electrical systems are always running optimally and safely.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scheduled inspections</li>
                <li>Preventative maintenance</li>
                <li>24/7 emergency service</li>
                <li>System optimization</li>
                <li>Performance reporting</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Project Management</h2>
              <p className="mb-4">End-to-end management of electrical projects from planning and design to implementation and handover.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Project planning</li>
                <li>Resource coordination</li>
                <li>Timeline management</li>
                <li>Quality control</li>
                <li>Handover and documentation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Specialized Electrical Services</h2>
              <p className="mb-4">Compliance testing, energy efficiency solutions, and other specialized services to meet your specific electrical needs.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Safety certifications</li>
                <li>Energy audits</li>
                <li>Surge protection</li>
                <li>EMF testing</li>
                <li>Thermal imaging</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Repair & Maintenance</h2>
              <p className="mb-4">Fast and efficient electrical repairs and maintenance services to keep your systems running smoothly.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fault finding</li>
                <li>Emergency repairs</li>
                <li>System troubleshooting</li>
                <li>Component replacement</li>
                <li>Post-repair testing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Home Automation</h2>
              <p className="mb-4">Transform your space with smart home technology for lighting, security, and energy management.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Smart lighting systems</li>
                <li>Voice-controlled devices</li>
                <li>Security integration</li>
                <li>Energy monitoring</li>
                <li>Custom automation scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
