import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import CompanyLogo from '../UI/CompanyLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white border-b border-blue-100 shadow-md backdrop-blur-md text-slate-800' 
        : 'glass-premium text-slate-800'
    }`}>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-102">
            <CompanyLogo className="transition-all duration-300" />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-semibold text-sm tracking-wide uppercase transition-colors py-2 group ${
                    active ? 'text-primary' : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    active ? 'scale-x-100' : ''
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/booking"
              className="px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 bg-primary text-white hover:bg-blue-700 shadow-soft hover:shadow-glow"
            >
              Book Cleaning
            </Link>
          </div>

          {/* Mobile Menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors focus:outline-none text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-blue-950/20 backdrop-blur-sm z-40 transition-opacity" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full bg-white shadow-2xl border-b border-blue-50 p-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-bold text-base transition-all ${
                    active 
                      ? 'bg-blue-50 text-primary border-l-4 border-primary' 
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center bg-primary text-white py-4 rounded-full font-bold text-base shadow-lg hover:bg-blue-700 transition-colors"
            >
              Book Service Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
