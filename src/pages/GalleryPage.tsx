import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaInfoCircle } from 'react-icons/fa';

interface GalleryItem {
  label: string;
  subtitle: string;
  category: 'residential' | 'commercial' | 'specialized';
  img: string;
}

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: GalleryItem[] = [
    { label: 'Kitchen Deep Clean', subtitle: 'Grease removal & cabinet scrubbing', category: 'specialized', img: '/kitchen_clean.png' },
    { label: 'Bathroom Restoration', subtitle: 'Tile descaling & sanitization', category: 'specialized', img: '/bathroom_clean.png' },
    { label: 'Sofa Cleaning', subtitle: 'Shampooing & stain extraction', category: 'specialized', img: '/sofa_clean.png' },
    { label: 'Office Workplace Clean', subtitle: 'Desk, floor & carpet sanitization', category: 'commercial', img: '/office_clean.png' },
    { label: '3BHK Move-in Deep Clean', subtitle: 'Complete residential scrubbing', category: 'residential', img: '/living_room_clean.png' },
    { label: 'Floor Polishing & Scrubbing', subtitle: 'Marble scrubbing with single disc', category: 'residential', img: '/floor_scrubbing.png' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(item => item.category === activeFilter);

  return (
    <div className="py-20 bg-slate-50/30 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="Before & After Gallery – Ultra Deep Clean Experts" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
      />
      
      {/* Background blobs */}
      <div className="bg-orb w-[300px] h-[300px] bg-blue-500/10 top-20 -left-10 animate-float"></div>
      <div className="bg-orb w-[400px] h-[400px] bg-slate-300/20 bottom-10 -right-20 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-150/40 rounded-full px-4 py-1.5 inline-block mb-3">Portfolio</span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Our Work Gallery</h1>
          <p className="text-slate-655 text-base sm:text-lg">
            Witness the deep cleaning transformations. Real photos of residential, office, and scrubbing projects.
          </p>
        </div>

        {/* Before and After Section Redesign */}
        <div className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black mb-8 text-slate-800 border-l-2 border-primary pl-3 uppercase tracking-wider">
            Spotlight: Before & After
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 group aspect-[4/3] bg-slate-100"
            >
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3.5 py-1.5 rounded-full text-xxs font-extrabold uppercase tracking-widest z-10 backdrop-blur-md">
                Before Cleaning
              </div>
              <img 
                src="/before_clean.png" 
                alt="Before Cleaning" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                loading="lazy" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 group aspect-[4/3] bg-slate-100"
            >
              <div className="absolute top-4 left-4 bg-emerald-600/95 text-white px-3.5 py-1.5 rounded-full text-xxs font-extrabold uppercase tracking-widest z-10 backdrop-blur-md shadow-md">
                After Cleaning
              </div>
              <img 
                src="/after_clean.png" 
                alt="After Cleaning" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                loading="lazy" 
              />
            </motion.div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 flex justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'specialized', label: 'Specialized' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white border-primary shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.label}
                className="rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={project.img} 
                    alt={project.label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-primary text-white px-4 py-2.5 rounded-full font-bold text-xxs uppercase tracking-wider shadow-md hover:scale-102 transition-transform hover:bg-blue-800">
                      View details
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-850 group-hover:text-primary transition-colors leading-tight">
                      {project.label}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative bottom banner */}
        <div className="mt-16 bg-white/70 backdrop-blur-md max-w-2xl mx-auto p-6 rounded-2xl border border-slate-100 shadow-soft flex items-start gap-4">
          <FaInfoCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed font-semibold">
            We respect our clients' privacy. Address details are kept confidential. For more project portfolio photos, before & after scrubbing clips, or client references, chat with us directly on WhatsApp.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
