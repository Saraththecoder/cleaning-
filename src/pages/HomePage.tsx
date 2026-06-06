import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaBuilding, FaHome } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';
import TestimonialsCarousel from '../components/Sections/TestimonialsCarousel';

const HomePage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Home" 
        description="Transform your home, office, hospital, school, or commercial property with Hyderabad's trusted deep cleaning experts. 8 Years of Excellence."
        keywords="Deep Cleaning Services Hyderabad, Home Cleaning Hyderabad, Office Cleaning Hyderabad"
      />
      
      {/* Hero Section */}
      <section className="relative bg-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight !text-white">
              Professional Deep Cleaning Services in <span className="text-primary">Hyderabad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your home, office, hospital, school, or commercial property with Hyderabad's trusted deep cleaning experts. 8 Years of Excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-colors shadow-lg hover:shadow-xl">
                Book Cleaning Now
              </Link>
              <a href="tel:+916309365673" className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg text-center transition-colors shadow-lg hover:shadow-xl">
                Call Now
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-success" /> Trusted Professionals
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-success" /> 8+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2 font-heading">8+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2 font-heading">5000+</div>
              <div className="text-gray-600 font-medium">Properties Cleaned</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2 font-heading">1000+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="text-4xl font-bold text-primary mb-2 font-heading">99%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">We deliver unparalleled cleaning excellence with a commitment to quality and customer satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Team', desc: 'Highly trained, background-checked cleaning professionals.', icon: <FaStar className="text-3xl text-primary" /> },
              { title: 'Advanced Machines', desc: 'Industrial-grade equipment for deep dirt and stain removal.', icon: <FaBuilding className="text-3xl text-primary" /> },
              { title: 'Quality Assurance', desc: 'Rigorous quality checks to ensure a spotless environment.', icon: <FaCheckCircle className="text-3xl text-primary" /> },
              { title: 'Fast Service', desc: 'Timely and efficient service without compromising on quality.', icon: <FaHome className="text-3xl text-primary" /> },
              { title: 'Affordable Pricing', desc: 'Premium services at competitive and transparent prices.', icon: <FaStar className="text-3xl text-primary" /> },
              { title: 'Customer Satisfaction', desc: 'Our priority is your completely clean and healthy space.', icon: <FaCheckCircle className="text-3xl text-primary" /> },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  );
};

export default HomePage;
