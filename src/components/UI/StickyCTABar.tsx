import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StickyCTABar: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-center">
      {/* Phone FAB */}
      <a 
        href="tel:+916309365673"
        className="bg-white text-[#D71920] border border-red-100 w-14 h-14 rounded-full flex items-center justify-center shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group relative animate-fade-in-up"
        style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl" />
        <span className="absolute right-full mr-4 bg-white text-[#D71920] border border-red-100 px-3 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
          Call Us
        </span>
      </a>

      {/* WhatsApp FAB */}
      <a 
        href="https://wa.me/916309365673"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#D71920] border border-red-100 w-14 h-14 rounded-full flex items-center justify-center shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group relative animate-fade-in-up"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="text-[28px]" />
        <span className="absolute right-full mr-4 bg-white text-[#D71920] border border-red-100 px-3 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
          WhatsApp
        </span>
      </a>

      {/* Booking FAB */}
      <Link 
        to="/booking"
        className="bg-[#D71920] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group relative animate-fade-in-up"
        style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        aria-label="Book Service"
      >
        <FaCalendarCheck className="text-[22px]" />
        <span className="absolute right-full mr-4 bg-[#D71920] text-white px-3 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-glow">
          Book Now
        </span>
      </Link>
    </div>
  );
};

export default StickyCTABar;
