import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Reddy',
    location: 'Madhapur',
    text: 'ULTRA DEEP CLEAN EXPERTS did a phenomenal job with my 3BHK. The staff was professional and the equipment they used was top-notch. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Gachibowli',
    text: 'I booked them for a move-in deep cleaning of my villa. They left no corner untouched. The house smelled fresh and looked brand new.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    location: 'Kondapur',
    text: 'Excellent sofa and bathroom cleaning service. They removed tough stains that I thought were permanent. Very affordable pricing too.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Anjali Verma',
    location: 'Hitech City',
    text: 'We use their commercial cleaning services for our office. The team is punctual, reliable, and does not disrupt our working hours. Great experience.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Mohammed Ali',
    location: 'Jubilee Hills',
    text: 'I was amazed by the machinery they brought. True professionals. The deep cleaning was thorough and the team was extremely polite.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Neha Singh',
    location: 'Kukatpally',
    text: 'Booked them via WhatsApp, the response was quick. The cleaning was done perfectly on time. Great customer service and flawless work.',
    rating: 5,
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">Don't just take our word for it. Here is what our happy customers in Hyderabad have to say.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 z-10 text-primary border border-gray-100"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 z-10 text-primary border border-gray-100"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center relative overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-lg text-accent">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
