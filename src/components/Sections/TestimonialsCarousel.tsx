import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Reddy',
    location: 'Madhapur',
    text: 'ULTRA DEEP CLEAN EXPERTS did a phenomenal job with my 3BHK. Highly recommend!',
    rating: 5,
    initials: 'RR'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Gachibowli',
    text: 'Used their sofa cleaning service — looks brand new. Very professional team.',
    rating: 5,
    initials: 'PS'
  },
  {
    id: 3,
    name: 'Kiran Rao',
    location: 'Kondapur',
    text: 'Booked for my office. Staff was punctual, thorough, and used great equipment.',
    rating: 5,
    initials: 'KR'
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    location: 'Banjara Hills',
    text: 'Kitchen deep cleaning was excellent. Removed years of grease. Will book again.',
    rating: 5,
    initials: 'SR'
  },
  {
    id: 5,
    name: 'Venkat Prasad',
    location: 'Kukatpally',
    text: 'Reasonable pricing for the quality. My villa was sparkling after their visit.',
    rating: 5,
    initials: 'VP'
  },
  {
    id: 6,
    name: 'Meena Iyer',
    location: 'Hitech City',
    text: 'Same-day service was available. Team was friendly and cleaned every corner.',
    rating: 5,
    initials: 'MI'
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

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

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 z-10 text-primary border border-gray-100 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 z-10 text-primary border border-gray-100 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center relative overflow-hidden min-h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center"
              >
                {/* Initials Avatar Circle */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border border-red-200">
                  {testimonials[currentIndex].initials}
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed max-w-2xl">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-lg text-accent font-heading">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm font-semibold">{testimonials[currentIndex].location}, Hyderabad</p>
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
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
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
