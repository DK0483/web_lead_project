import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-8 md:flex-row">
        <p className="text-gray-400">
          &copy; {currentYear} YourSaaS Inc. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;