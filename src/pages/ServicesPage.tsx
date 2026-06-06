import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaCheck } from 'react-icons/fa';

const ServicesPage: React.FC = () => {
  const services = [
    { title: '1 BHK Deep Cleaning', price: '₹4,000', desc: 'Complete deep cleaning including bedrooms, kitchen, bathrooms, windows, floors, fans, switches, and furniture surfaces.' },
    { title: '2 BHK Deep Cleaning', price: '₹7,000', desc: 'Comprehensive cleaning solution for medium-sized homes with advanced equipment and sanitization.' },
    { title: '3 BHK Deep Cleaning', price: '₹11,000', desc: 'Detailed deep cleaning of every room, kitchen, washrooms, and high-touch areas.' },
    { title: '4 BHK Deep Cleaning', price: '₹15,000', desc: 'Premium cleaning package for large apartments and independent houses.' },
    { title: 'Villa Deep Cleaning', price: '₹30,000', desc: 'Luxury deep cleaning service for villas and premium residences.' },
  ];

  const additionalServices = [
    'Sofa Cleaning', 'Kitchen Cleaning', 'Washroom Cleaning', 'Window Cleaning', 
    'Floor Scrubbing', 'Office Cleaning', 'Hospital Cleaning', 'School Cleaning', 
    'Apartment Cleaning', 'Commercial Cleaning'
  ];

  const machinesUsed = [
    'Vacuum Machine', 'Sofa Cleaning Machine', 'Washroom Cleaning Machine', 
    'Floor Cleaning Machine', 'Staircase Cleaning Machine'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <SEO 
        title="Our Services" 
        description="Professional deep cleaning services for 1 BHK, 2 BHK, 3 BHK, Villas, Offices, and Commercial properties."
        keywords="Deep Cleaning Services, Sofa Cleaning, Office Cleaning, Villa Cleaning"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Our <span className="text-primary">Services</span></h1>
          <p className="text-xl text-gray-600">
            Comprehensive cleaning solutions tailored for every space.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{srv.title}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{srv.price}</div>
                <p className="text-gray-600 mb-6 line-clamp-3">{srv.desc}</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to={`/booking?service=${encodeURIComponent(srv.title)}`} className="block w-full text-center bg-gray-900 hover:bg-primary text-white py-3 rounded-lg font-medium transition-colors">
                  Book This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services & Machines */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full block"></span>
              Additional Services
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {additionalServices.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-success" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent text-white p-10 rounded-3xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-2 h-8 bg-primary rounded-full block"></span>
              Advanced Machines Used
            </h3>
            <ul className="space-y-4">
              {machinesUsed.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-300 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
