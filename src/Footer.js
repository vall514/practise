import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">© {new Date().getFullYear()} MyCompany</h2>
          <p className="text-sm">All rights reserved.</p>
        </div>

        <div className="flex space-x-4">
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
          <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
