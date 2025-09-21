"use client"; // Required for state management (useState)
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A simple arrow icon for the button
  const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const navLinks = [
    { href: "#", label: "Product" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Solutions" },
    { href: "#", label: "About Us" },
  ];

  return (
    // Reverted to dark theme with sticky positioning and backdrop blur
    <header className="w-full bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Vincenzo AI
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex">
          <Link href="/signup">
            <button className="flex items-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">
              <span>Get Started</span>
              <ArrowIcon />
            </button>
          </Link>
        </div>


        {/* Mobile & Tablet Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.label} className="block py-2 text-center text-gray-300 hover:bg-gray-800 rounded transition-colors">
                {link.label}
              </a>
            ))}
            <Link href="/signup">
              <button className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-5 py-2 hover:bg-blue-700">
                <span>Get Started</span>
                <ArrowIcon />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;