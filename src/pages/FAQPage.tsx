import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQPage: React.FC = () => {
  const faqs = [
    { question: 'How long does deep cleaning take?', answer: 'The duration depends on the size and condition of the property. Typically, a 1 BHK takes 4-5 hours, while larger properties like a 3 BHK or Villa may take 6-10 hours with a team of 3-4 professionals.' },
    { question: 'Do you bring cleaning equipment?', answer: 'Yes, our team brings all necessary industrial-grade cleaning equipment, tools, and eco-friendly cleaning solutions required for the job. You do not need to provide anything.' },
    { question: 'Which areas do you serve?', answer: 'We serve all areas across Hyderabad, including Madhapur, Gachibowli, Jubilee Hills, Banjara Hills, Kondapur, Kukatpally, and surrounding regions.' },
    { question: 'Is same-day service available?', answer: 'Yes, same-day service is subject to availability. We recommend booking at least 24-48 hours in advance to secure your preferred time slot.' },
    { question: 'Are your cleaning products safe?', answer: 'Absolutely. We use high-quality, industry-approved, and safe cleaning products that are tough on stains but safe for your family, pets, and the environment.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-12 bg-white">
      <SEO 
        title="FAQ" 
        description="Frequently Asked Questions about our deep cleaning services. Find answers regarding time, equipment, service areas, and safety."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked <span className="text-primary">Questions</span></h1>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-accent">{faq.question}</span>
                {openIndex === idx ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="p-6 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
