import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';
import CompanyLogo from '../UI/CompanyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-blue-100 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <CompanyLogo className="h-16 object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Hyderabad's trusted deep cleaning experts with 8+ years of experience. Delivering immaculate hygiene, sanitization, and dirt-free properties.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                { icon: <FaFacebookF />, url: 'https://facebook.com' },
                { icon: <FaInstagram />, url: 'https://instagram.com' },
                { icon: <FaTwitter />, url: 'https://twitter.com' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 text-base font-bold mb-6 font-heading tracking-wide uppercase border-l-2 border-primary pl-3">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'FAQs', path: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 group"
                  >
                    <FaArrowRight className="text-[10px] text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 text-base font-bold mb-6 font-heading tracking-wide uppercase border-l-2 border-primary pl-3">
              Services
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: '1BHK Deep Cleaning',    id: '1bhk-deep-cleaning' },
                { name: '2BHK Deep Cleaning',    id: '2bhk-deep-cleaning' },
                { name: '3BHK Deep Cleaning',    id: '3bhk-deep-cleaning' },
                { name: 'Sofa Cleaning',          id: 'sofa-cleaning' },
                { name: 'Kitchen Cleaning',       id: 'kitchen-cleaning' },
                { name: 'Washroom Cleaning',      id: 'washroom-cleaning' },
                { name: 'Office Cleaning',        id: 'office-cleaning' },
                { name: 'Hospital Cleaning',      id: 'hospital-cleaning' },
              ].map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200 group"
                  >
                    <FaArrowRight className="text-[10px] text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    <span>{srv.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-slate-900 text-base font-bold mb-6 font-heading tracking-wide uppercase border-l-2 border-primary pl-3">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Madhapur, Hyderabad,<br />Telangana, India</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+916309365673" className="hover:text-primary transition-colors font-medium">+91 6309365673</a>
                  <a href="tel:+919908265673" className="hover:text-primary transition-colors font-medium">+91 9908265673</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:knareshdeepcleaning@gmail.com" className="hover:text-primary transition-colors break-all font-medium">knareshdeepcleaning@gmail.com</a>
              </li>
            </ul>
            <a 
              href="https://wa.me/916309365673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2.5 bg-primary hover:bg-blue-800 text-white py-3 px-5 rounded-full hover:shadow-glow transition-all duration-300 font-semibold text-sm hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg animate-pulse" /> 
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} ULTRA DEEP CLEAN EXPERTS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
