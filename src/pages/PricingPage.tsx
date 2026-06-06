import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaCheckCircle } from 'react-icons/fa';

const PricingPage: React.FC = () => {
  const plans = [
    { name: '1 BHK Deep Cleaning', price: '₹4,000', features: ['Bedrooms & Living Room', 'Kitchen Deep Cleaning', 'Bathroom Deep Cleaning', 'Window & Fan Cleaning', 'Floor Scrubbing'] },
    { name: '2 BHK Deep Cleaning', price: '₹7,000', features: ['Bedrooms & Living Room', 'Kitchen Deep Cleaning', '2 Bathrooms Deep Cleaning', 'Window & Fan Cleaning', 'Floor Scrubbing', 'Sofa Vacuuming'] },
    { name: '3 BHK Deep Cleaning', price: '₹11,000', features: ['Bedrooms & Living Room', 'Kitchen Deep Cleaning', 'All Bathrooms Deep Cleaning', 'Window & Fan Cleaning', 'Floor Scrubbing', 'Sofa Vacuuming', 'Balcony Cleaning'], popular: true },
    { name: '4 BHK Deep Cleaning', price: '₹15,000', features: ['All Rooms Covered', 'Kitchen Deep Cleaning', 'All Bathrooms', 'Premium Floor Care', 'Sofa & Mattress Vacuuming', 'All Balconies'] },
    { name: 'Villa Deep Cleaning', price: '₹30,000', features: ['Complete Villa Coverage', 'Premium Kitchen Care', 'All Bathrooms Sanitization', 'Exterior Wash', 'Staircase Cleaning', 'Luxury Floor Polishing', 'Dedicated Manager'] },
  ];

  return (
    <div className="py-12 bg-white">
      <SEO 
        title="Pricing" 
        description="Affordable and transparent pricing for deep cleaning services in Hyderabad. Check our 1 BHK, 2 BHK, and Villa cleaning packages."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent <span className="text-primary">Pricing</span></h1>
          <p className="text-xl text-gray-600">
            No hidden fees. Premium cleaning services at affordable rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl shadow-lg border p-8 flex flex-col bg-white ${plan.popular ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={`/booking?service=${encodeURIComponent(plan.name)}`} 
                className={`w-full py-4 rounded-xl font-bold text-lg text-center transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-red-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
