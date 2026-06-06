import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const GalleryPage: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628156633633-4f9e1e2d4218?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <SEO 
        title="Gallery" 
        description="See our deep cleaning transformations. Before and after photos of our professional cleaning services in Hyderabad."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Our <span className="text-primary">Gallery</span></h1>
          <p className="text-xl text-gray-600">
            Witness the transformation. See the quality of our deep cleaning services.
          </p>
        </div>

        {/* Before and After Section (Placeholder layout) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-sm font-bold z-10">Before</div>
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" alt="Before Cleaning" className="w-full h-80 object-cover filter grayscale" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="absolute top-4 left-4 bg-success text-white px-3 py-1 rounded text-sm font-bold z-10">After</div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" alt="After Cleaning" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Cleaning Work Showcase */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden shadow-sm"
              >
                <img src={img} alt={`Cleaning work showcase ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
