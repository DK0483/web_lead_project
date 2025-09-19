import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <a href="#" className="flex items-center">
          {/* Using text as a logo with styling */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Vincenzo AI
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-400">Features</a>
          <a href="#" className="hover:text-gray-400">Testimonials</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;