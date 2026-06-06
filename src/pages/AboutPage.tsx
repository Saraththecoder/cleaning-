import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaStar, FaShieldAlt, FaBriefcase, FaHeart, FaClock } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const coreValues = [
    { title: 'Quality Service', desc: 'Executing professional sanitization & scrubbing standards.', icon: <FaStar className="text-xl text-white" /> },
    { title: 'Satisfaction Guarantee', desc: 'We promise clean results or we re-clean within 24 hours.', icon: <FaHeart className="text-xl text-white" /> },
    { title: 'Professionalism', desc: 'Background-verified, punctual specialists.', icon: <FaBriefcase className="text-xl text-white" /> },
    { title: 'Reliability', desc: 'Timely, scheduled clean-up tasks with zero delays.', icon: <FaClock className="text-xl text-white" /> },
    { title: 'Hygiene & Safety', desc: 'Child & pet safe non-toxic cleaning chemicals.', icon: <FaShieldAlt className="text-xl text-white" /> }
  ];

  const teamMembers = [
    {
      name: 'K. Naresh',
      role: 'Founder & Managing Director',
      initials: 'KN',
      bio: 'With over 8 years in the professional cleaning industry, Naresh founded Ultra Deep Clean Experts to bring industrial-grade cleaning standards to Hyderabad homes and businesses. He personally trains every team member.'
    },
    {
      name: 'Suresh Anandan',
      role: 'Senior Cleaning Specialist',
      initials: 'SA',
      bio: 'Expert in specialized chemical treatments, stain removal, and sanitization protocols with 6+ years of field experience.'
    },
    {
      name: 'Chandra L.',
      role: 'Commercial Cleaning Lead',
      initials: 'CL',
      bio: 'Manages large-scale office, school, and warehouse cleaning operations ensuring strict quality control and safety.'
    },
    {
      name: 'Kiran Sharma',
      role: 'Bathroom & Kitchen Specialist',
      initials: 'KS',
      bio: 'Specializes in high-pressure steam cleaning, grease removal, and restoring kitchen and bathroom surfaces.'
    }
  ];

  return (
    <div className="py-20 bg-slate-50/30 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="About Us – Ultra Deep Clean Experts Hyderabad" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
      />
      
      {/* Background blobs */}
      <div className="bg-orb w-[300px] h-[300px] bg-red-500/10 top-20 -left-10 animate-float"></div>
      <div className="bg-orb w-[450px] h-[450px] bg-slate-300/20 bottom-10 -right-20 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-150/40 rounded-full px-4 py-1.5 inline-block mb-3">Our History</span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">About Our Company</h1>
          <p className="text-slate-655 text-base sm:text-lg">
            Delivering high-end professional cleaning and scrubbing services in Hyderabad since 2018.
          </p>
        </motion.div>

        {/* Section: Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft border border-slate-100 bg-slate-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop" 
              alt="Professional Cleaning Team" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Our Story</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                ULTRA DEEP CLEAN EXPERTS has been delivering professional deep cleaning services across Hyderabad for over 8 years. We specialize in residential, commercial, office, hospital, and institutional cleaning using advanced machinery and proven cleaning techniques.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded with a vision to deliver premium standards at affordable rates, we have successfully restored and sanitized over 5,000 properties.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Our Mission</h3>
                <p className="text-slate-650 text-xs leading-relaxed">
                  Providing professional, affordable, and high-quality deep cleaning services using advanced cleaning equipment and trained staff.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100">
                <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Our Vision</h3>
                <p className="text-slate-650 text-xs leading-relaxed">
                  To become the most trusted deep cleaning service provider, delivering clean, healthy, and hygienic spaces for every customer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section: Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-3xl p-10 sm:p-14 shadow-2xl border border-red-700 text-center mb-24 relative overflow-hidden"
        >
          {/* background blur effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-[60px] pointer-events-none"></div>

          <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full px-4 py-1.5 inline-block mb-3">Core Values</span>
          <h2 className="text-2xl sm:text-3xl font-black mb-12 tracking-tight !text-white">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 p-6 rounded-2xl flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center mb-4 text-xl">
                  {value.icon}
                </div>
                <h4 className="font-bold text-sm mb-2 text-white leading-tight">{value.title}</h4>
                <p className="text-red-100 text-xxs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section: Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6 max-w-6xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-red-50 border border-red-150/40 rounded-full px-4 py-1.5 inline-block mb-3">Our Crew</span>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Meet Our Specialists</h2>
            <p className="text-slate-655 text-sm">
              Highly trained, background-checked professionals committed to safety and hygiene.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-soft hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Initials Avatar */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-md border border-red-200 group-hover:bg-red-700 transition-colors duration-300">
                  {member.initials}
                </div>
                
                <h3 className="text-lg font-bold text-slate-850 mb-1 leading-tight">{member.name}</h3>
                <span className="text-primary font-semibold text-xs mb-4 uppercase tracking-wider block">{member.role}</span>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
