import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-white py-4 px-6 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/POWER & LIGHTING SOLUTIONS (1).png" 
              alt="Power & Lighting Solutions Logo" 
              className="h-10 md:h-14"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-primary font-medium transition-colors">Home</Link>
          <Link to="/services" className="text-gray-800 hover:text-primary font-medium transition-colors">Services</Link>
          <Link to="/about" className="text-gray-800 hover:text-primary font-medium transition-colors">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-primary font-medium transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/contact" className="flex items-center bg-primary text-white px-4 py-2 rounded-button whitespace-nowrap mr-4">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-phone-line"></i>
            </div>
            <span className="hidden sm:inline">021-531-0913</span>
          </Link>
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <i className={`ri-${menuOpen ? 'close' : 'menu'}-line ri-2x`}></i>
          </button>
        </div>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="flex items-center bg-primary text-white px-6 py-3 rounded-button whitespace-nowrap">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-phone-line"></i>
            </div>
            <span>021-531-0913</span>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 animate-fadeIn">
          <div className="flex flex-col py-4 px-6">
            <Link 
              to="/" 
              className="py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
