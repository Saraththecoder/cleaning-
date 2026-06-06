import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import CompanyLogo from '../UI/CompanyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <CompanyLogo className="mb-6 !bg-white !text-accent w-max" />
            <p className="mb-6 text-sm leading-relaxed">
              Hyderabad's trusted deep cleaning experts with 8+ years of experience. We transform spaces with advanced cleaning technology and professional care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-primary transition-colors">Home Deep Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Office Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Sofa Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Bathroom Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Kitchen Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Commercial Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>Madhapur, Hyderabad,<br />Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+916309365673" className="hover:text-white transition-colors">+91 6309365673</a>
                  <a href="tel:+919908265673" className="hover:text-white transition-colors">+91 9908265673</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:Knaresh990826@gmail.com" className="hover:text-white transition-colors break-all">Knaresh990826@gmail.com</a>
              </li>
            </ul>
            <a 
              href="https://wa.me/916309365673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-success text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} ULTRA DEEP CLEAN EXPERTS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
