import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StickyCTABar: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Buttons (Hidden on mobile) */}
      <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-50">
        <a 
          href="tel:+916309365673"
          className="bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="absolute right-full mr-4 bg-accent text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Us
          </span>
        </a>
        <a 
          href="https://wa.me/916309365673"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-success text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="absolute right-full mr-4 bg-success text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
        </a>
        <Link 
          to="/booking"
          className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Book Service"
        >
          <FaCalendarCheck className="text-xl" />
          <span className="absolute right-full mr-4 bg-primary text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Book Service
          </span>
        </Link>
      </div>

      {/* Mobile Bottom Bar (Hidden on desktop) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center justify-between z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:+916309365673"
          className="flex-1 py-3 flex flex-col items-center justify-center text-accent hover:bg-gray-50 border-r border-gray-200"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-lg mb-1" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a 
          href="https://wa.me/916309365673"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 flex flex-col items-center justify-center text-success hover:bg-gray-50 border-r border-gray-200"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp className="text-xl mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link 
          to="/booking"
          className="flex-1 py-3 flex flex-col items-center justify-center bg-primary text-white hover:bg-red-700"
          aria-label="Book Service"
        >
          <FaCalendarCheck className="text-lg mb-1" />
          <span className="text-xs font-medium">Book Now</span>
        </Link>
      </div>
    </>
  );
};

export default StickyCTABar;
