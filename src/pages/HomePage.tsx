import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaMapMarkerAlt, FaUsers, FaPhoneAlt, FaArrowRight
} from 'react-icons/fa';
import SEO from '../components/SEO/SEO';
import TestimonialsCarousel from '../components/Sections/TestimonialsCarousel';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
  };

  return (
    <div className="bg-white relative overflow-hidden">
      <SEO
        title="Ultra Deep Clean Experts – Professional Deep Cleaning in Hyderabad"
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
      />

      {/* ═══════════════════════════════════════
          HERO SECTION – Premium Light Layout
      ═══════════════════════════════════════ */}
      <section className="relative w-full bg-slate-50/50 bg-grid-pattern py-16 lg:py-24 flex items-center min-h-[85vh]">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-red-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-slate-200/20 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase Column (displays the image fully!) */}
            <div className="lg:col-span-7 w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-2xl bg-white p-3 sm:p-4 rounded-[2rem] shadow-xl border border-slate-100/80"
              >
                <img
                  src="/floor_scrubbing.png"
                  alt="Professional deep cleaning in Hyderabad"
                  className="w-full h-auto rounded-[1.5rem] object-contain shadow-inner"
                />
              </motion.div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                
                {/* Brand Badge */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-150/40 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Hyderabad's Premium Cleaning Service
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl xl:text-6xl font-black mb-4 leading-none tracking-tight text-slate-900 font-heading"
                >
                  Ultra Deep <br />
                  <span className="text-primary">Clean Experts</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-slate-650 font-bold mb-6"
                >
                  Spotless Spaces, Healthy Homes
                </motion.p>

                {/* Paragraph */}
                <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base text-slate-500 mb-8 leading-relaxed max-w-lg"
                >
                  Transform your residential, commercial, or specialized property with Hyderabad's leading deep cleaning professionals. We use advanced machines and eco-friendly solutions for an immaculate, sanitized finish.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 mb-8">
                  <Link
                    to="/booking"
                    className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5"
                  >
                    Book Cleaning Now
                  </Link>
                  <a
                    href="tel:+916309365673"
                    className="bg-white border border-slate-200 text-slate-800 hover:border-primary hover:text-primary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    Call Now
                  </a>
                </motion.div>

                {/* Quick Trust Badges */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 border-t border-slate-100 pt-6">
                  {['Verified Specialists', 'Eco-Friendly Chemicals', 'Advanced Machinery'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                      <FaCheckCircle className="text-primary text-sm flex-shrink-0" />
                      {badge}
                    </div>
                  ))}
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-red-50 blur-[100px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-200/50 rounded-full px-4 py-1.5 inline-block mb-4">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">How It Works</h2>
            <p className="text-slate-500 text-base sm:text-lg">Get your residence or workplace deep cleaned in 3 hassle-free steps.</p>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="absolute top-[52px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-red-100 via-primary/30 to-red-100 hidden lg:block z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
              {[
                { step: '01', title: 'Schedule Online / Call', desc: 'WhatsApp us or book through our online form. We confirm your slot in minutes.', icon: <FaPhoneAlt /> },
                { step: '02', title: 'Specialists Arrive', desc: 'Our trained crew arrives with all machines, tools, sanitizers, and detergents.', icon: <FaUsers /> },
                { step: '03', title: 'Superb Cleaning & Check', desc: 'Inspect the results. We ensure full cleaning satisfaction before we leave.', icon: <FaCheckCircle /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-red-200 flex flex-col items-center text-center group shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-red-50 text-primary rounded-full border border-red-100 flex items-center justify-center font-black text-lg mb-6 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED SERVICES PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-slate-50/60 bg-grid-pattern relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-200/50 rounded-full px-4 py-1.5 inline-block mb-4">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">Our Popular Services</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Professional deep cleaning for every type of space — residential, commercial, and specialized.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {[
              { title: '1–3 BHK Deep Clean', desc: 'Complete home scrub-down — rooms, kitchen, bathrooms, windows, and floors.', icon: '🏠', id: '1bhk-deep-cleaning' },
              { title: 'Sofa Cleaning', desc: 'Foam shampooing and wet extraction to remove stains, odor, and embedded dirt.', icon: '🛋️', id: 'sofa-cleaning' },
              { title: 'Kitchen Degreasing', desc: 'Tile scrubbing, cabinet washing, chimney cleaning, and sink sanitization.', icon: '🍳', id: 'kitchen-cleaning' },
              { title: 'Washroom Sanitization', desc: 'Acid descaling of tiles, glass, toilet, and fittings for a sparkling bathroom.', icon: '🚿', id: 'washroom-cleaning' },
              { title: 'Office Cleaning', desc: 'Hygienic workspace — desks, carpets, restrooms, and eco-friendly floor scrubbing.', icon: '🏢', id: 'office-cleaning' },
              { title: 'Hospital Cleaning', desc: 'Medical-grade disinfection for clinics, nursing homes, and hospital wards.', icon: '🏥', id: 'hospital-cleaning' },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 hover:border-red-200 shadow-soft hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="text-3xl sm:text-4xl mb-4">{srv.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{srv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{srv.desc}</p>
                <Link
                  to={`/services#${srv.id}`}
                  className="mt-5 flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-200"
                >
                  Learn More <FaArrowRight className="text-[10px]" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AREAS WE SERVE
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-200/50 rounded-full px-4 py-1.5 inline-block mb-4">Service Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-slate-900">Areas We Serve in Hyderabad</h2>
            <p className="text-slate-600 text-base sm:text-lg">Providing prompt deep cleaning and scrubbing services in all major neighborhoods.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            {[
              'Madhapur', 'Gachibowli', 'Kondapur', 'Banjara Hills', 'Jubilee Hills',
              'Hitech City', 'Kukatpally', 'Miyapur', 'Begumpet', 'Secunderabad',
              'Ameerpet', 'Dilsukhnagar', 'LB Nagar', 'Uppal', 'KPHB'
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shadow-sm hover:border-primary hover:text-primary hover:shadow-soft transition-all duration-300 cursor-default"
              >
                <FaMapMarkerAlt className="text-primary text-xs flex-shrink-0" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <div className="border-t border-slate-100">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default HomePage;
