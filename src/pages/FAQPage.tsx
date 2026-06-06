import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const faqs: FAQItem[] = [
    { 
      question: 'How long does deep cleaning take?', 
      answer: 'The duration depends on the size and condition of the property. Typically, a 1 BHK takes 4-5 hours, while larger properties like a 3 BHK or Villa may take 6-10 hours with a team of 3-4 professionals.' 
    },
    { 
      question: 'Do you bring cleaning equipment?', 
      answer: 'Yes, our team brings all necessary industrial-grade cleaning equipment, tools, and eco-friendly cleaning solutions required for the job. You do not need to provide anything.' 
    },
    { 
      question: 'Are your cleaning products safe?', 
      answer: 'Absolutely. We use high-quality, industry-approved, and safe cleaning products that are tough on stains but safe for your family, pets, and the environment.' 
    },
    { 
      question: 'Do you clean commercial spaces as well?', 
      answer: 'Yes, we deep clean offices, schools, hospitals, warehouses, showrooms, and other commercial properties in Hyderabad.' 
    },
    { 
      question: 'Which areas in Hyderabad do you serve?', 
      answer: 'We serve all major areas including Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Hitech City, Kukatpally, Miyapur, Begumpet, Secunderabad, and surrounding localities.' 
    },
    { 
      question: 'What is your cancellation and re-cleaning policy?', 
      answer: 'You can reschedule or cancel up to 4 hours before the appointment at no charge. If you\'re not satisfied with any area cleaned, we will re-clean it free of charge within 24 hours of service.' 
    },
    { 
      question: 'Do I need to be home during the cleaning?', 
      answer: 'Yes, we recommend being present during the service, especially for the first time. However, many regular customers leave a key with us — our team is fully background-checked and insured.' 
    },
    { 
      question: 'What payment methods do you accept?', 
      answer: 'We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfer. Payment is collected after the service is completed and you are satisfied.' 
    },
    { 
      question: 'Is same-day or emergency cleaning available?', 
      answer: 'Yes, subject to team availability. Call or WhatsApp us directly for urgent bookings and we\'ll do our best to accommodate within the same day.' 
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 bg-slate-50/30 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="FAQs – Ultra Deep Clean Experts Hyderabad" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
      />
      
      {/* Background blobs */}
      <div className="bg-orb w-[350px] h-[350px] bg-red-500/10 top-20 -left-10 animate-float"></div>
      <div className="bg-orb w-[400px] h-[400px] bg-slate-350/20 bottom-10 -right-20 animate-pulse-soft"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-150/40 rounded-full px-4 py-1.5 inline-block mb-3">FAQ</span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-slate-655 text-base sm:text-lg">
            Find answers to commonly asked questions about our process, tools, booking dates, and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-soft ${
                  isOpen ? 'border-primary/40 ring-1.5 ring-primary/5 shadow-md' : 'border-slate-100'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex gap-4 items-center">
                    <FaQuestionCircle className={`text-xl flex-shrink-0 transition-colors ${
                      isOpen ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                    }`} />
                    <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight leading-snug">{faq.question}</span>
                  </div>
                  <FaChevronDown className={`text-sm text-slate-400 transition-transform duration-300 ml-4 ${
                    isOpen ? 'text-primary transform rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Contact support */}
        <div className="mt-16 bg-primary rounded-3xl p-8 sm:p-10 border border-red-700 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-[40px] pointer-events-none"></div>
          <div>
            <h4 className="font-bold text-lg text-white font-heading">Still have questions?</h4>
            <p className="text-red-100 text-xs mt-1 leading-relaxed">No problem. Message us on WhatsApp or call our team for support.</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <a 
              href="https://wa.me/916309365673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 hover:bg-red-50"
            >
              WhatsApp Support
            </a>
            <a 
              href="tel:+916309365673" 
              className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
