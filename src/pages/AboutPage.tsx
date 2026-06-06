import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaCheckCircle } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      <SEO 
        title="About Us" 
        description="Learn about ULTRA DEEP CLEAN EXPERTS, Hyderabad's most trusted deep cleaning company with over 8 years of experience."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About <span className="text-primary">Us</span></h1>
          <p className="text-xl text-gray-600">
            Delivering professional deep cleaning services across Hyderabad for over 8 years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop" 
                alt="Professional Cleaning Team" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                ULTRA DEEP CLEAN EXPERTS has been delivering professional deep cleaning services across Hyderabad for over 8 years. We specialize in residential, commercial, office, hospital, and institutional cleaning using advanced machinery and proven cleaning techniques.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To provide hygienic, affordable, and professional cleaning services that create healthier environments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-accent mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To become Hyderabad's most trusted and recognized deep cleaning company.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent text-white rounded-3xl p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-12 !text-white">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['Quality', 'Integrity', 'Professionalism', 'Customer First', 'Reliability'].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 border border-gray-700">
                  <FaCheckCircle className="text-2xl text-primary" />
                </div>
                <h4 className="font-bold text-lg !text-white">{value}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
