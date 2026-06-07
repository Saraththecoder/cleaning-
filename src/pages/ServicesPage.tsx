import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import {
  FaCheck, FaBrush, FaHome, FaBuilding, FaWrench, FaTools,
  FaCalendarCheck, FaWhatsapp, FaStar, FaCouch, FaToilet, FaHospital, FaSchool
} from 'react-icons/fa';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  category: 'residential' | 'commercial' | 'specialized';
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  image: string;
}

const categoryColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  residential: {
    bg: 'bg-blue-50',
    text: 'text-primary',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  commercial: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  specialized: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-100',
    badge: 'bg-amber-100 text-amber-700',
  },
};

const categoryLabels: Record<string, string> = {
  residential: '🏠 Residential',
  commercial: '🏢 Commercial',
  specialized: '✨ Specialized',
};

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services: ServiceItem[] = [
    {
      id: '1bhk-deep-cleaning',
      title: '1BHK Deep Cleaning',
      desc: 'Thorough scrub-down, dusting, and sanitization of single-bedroom flats, covering the living room, kitchen, bathroom, and balcony.',
      category: 'residential',
      icon: <FaHome />,
      image: '/living_room_clean.png',
      features: [
        'Kitchen deep degreasing',
        'Tile and toilet scrub-down',
        'Window pane & mesh washing',
        'Complete floor machine scrubbing',
      ],
    },
    {
      id: '2bhk-deep-cleaning',
      title: '2BHK Deep Cleaning',
      desc: 'Complete restoration cleaning for two-bedroom apartments. Removes stubborn dust, paint spots, oil grime, and sanitizes bathrooms.',
      category: 'residential',
      icon: <FaHome />,
      popular: true,
      image: '/after_clean.png',
      features: [
        'Kitchen degreasing & cabinet cleaning',
        '2 Washrooms deep acid washing',
        'Sofa & mattress dry vacuuming',
        'Glass & frame spot removal',
      ],
    },
    {
      id: '3bhk-deep-cleaning',
      title: '3BHK Deep Cleaning',
      desc: 'High-end deep wash and stain extraction for spacious three-bedroom residences. Full sanitation of every room and storage cabinet.',
      category: 'residential',
      icon: <FaHome />,
      image: '/luxury_living_room.png',
      features: [
        'Heavy-duty floor scrubbing & polishing',
        '3 Washrooms fully descaled',
        'Kitchen chimney & cabinet cleaning',
        'Balcony cleaning & high pressure spray',
      ],
    },
    {
      id: 'house-deep-cleaning',
      title: 'House Deep Cleaning',
      desc: 'Villas, independent bungalows, or empty flats before move-in/after renovation. Cleans paint dust, concrete stains, and grime.',
      category: 'residential',
      icon: <FaHome />,
      image: '/villa_clean.png',
      features: [
        'Post-renovation dust extraction',
        'Floor scrubbing with Single Disc Machine',
        'Door, window, frame & handle cleaning',
        'Wall dry dusting & spot cleaning',
      ],
    },
    {
      id: 'sofa-cleaning',
      title: 'Sofa Cleaning',
      desc: 'Expert fabric or leather sofa shampooing. Uses vacuum extractors to lift embedded dirt, sweat stains, odors, and food spills.',
      category: 'specialized',
      icon: <FaCouch />,
      image: '/sofa_clean.png',
      features: [
        'High-power dry vacuuming',
        'Organic chemical foam shampooing',
        'Wet extraction stain vacuuming',
        'Disinfection & deodorizing treatment',
      ],
    },
    {
      id: 'kitchen-cleaning',
      title: 'Kitchen Cleaning',
      desc: 'Focused degreasing of grease-laden kitchen tiles, slab stones, cabinets (interior/exterior), gas burners, and window meshes.',
      category: 'specialized',
      icon: <FaTools />,
      image: '/kitchen_clean.png',
      features: [
        'Oil & carbon deposit removal',
        'Cabinet cleaning inside & out',
        'Chimney external degreasing',
        'Sink sanitization & chrome polishing',
      ],
    },
    {
      id: 'washroom-cleaning',
      title: 'Washroom Cleaning',
      desc: 'Deep acid descaling of tiles, shower glass, bathtubs, fittings, and toilets. Restores bathroom floors to sparkling clean.',
      category: 'specialized',
      icon: <FaToilet />,
      image: '/bathroom_clean.png',
      features: [
        'Hard water scaling removal',
        'Mirror & glass scale scrubbing',
        'Sanitization of toilet and sink',
        'Exhaust fan & geyser dusting',
      ],
    },
    {
      id: 'office-cleaning',
      title: 'Office Cleaning',
      desc: 'Maintain office hygiene, dust-free workspaces, sanitized meeting rooms, and spotless carpet surfaces for employees.',
      category: 'commercial',
      icon: <FaBuilding />,
      image: '/office_clean.png',
      features: [
        'Desk, chair & computer screen wiping',
        'Carpet shampooing & dry vacuuming',
        'Pantry & restroom sanitization',
        'Eco-friendly floor scrubbing',
      ],
    },
    {
      id: 'hospital-cleaning',
      title: 'Hospital Cleaning',
      desc: 'Medical-grade sanitization protocols for clinics, nursing homes, and wards. Kills bacteria and maintains clinical hygiene.',
      category: 'commercial',
      icon: <FaHospital />,
      image: '/hospital_clean.png',
      features: [
        'EPA-approved disinfectant usage',
        'Odorless sanitization misting',
        'High-frequency contact point cleaning',
        'Strict hygiene standard compliance',
      ],
    },
    {
      id: 'school-cleaning',
      title: 'School Cleaning',
      desc: 'Classrooms, sports rooms, libraries, and canteen cleaning. Provides a germ-free and dust-free environment for kids.',
      category: 'commercial',
      icon: <FaSchool />,
      image: '/school_clean.png',
      features: [
        'Desk & bench sanitization',
        'Restroom deep scrubbing & disinfection',
        'Playground equipment clean-down',
        'Eco-friendly non-toxic solutions',
      ],
    },
  ];

  const machinesUsed = [
    { title: 'Single Disc Scrubbing Machine', desc: 'For floor polishing, scrubbing, and heavy-duty tile cleaning.', icon: <FaTools /> },
    { title: 'High-Power Wet & Dry Vacuum', desc: 'Sucks deep-seated dust and dirty water from floors and carpets.', icon: <FaWrench /> },
    { title: 'Sofa Extraction Machine', desc: 'Sprays foam and sucks out deep stains, bacteria, and moisture.', icon: <FaBrush /> },
    { title: 'High-Pressure Steam Jet', desc: 'Sanitizes and loosens oil deposits in kitchens & bathrooms.', icon: <FaTools /> },
  ];

  const tabs = [
    { id: 'all', label: 'All Services', icon: '🔍' },
    { id: 'residential', label: 'Residential', icon: '🏠' },
    { id: 'commercial', label: 'Commercial', icon: '🏢' },
    { id: 'specialized', label: 'Specialized', icon: '✨' },
  ];

  const filteredServices =
    activeTab === 'all' ? services : services.filter((srv) => srv.category === activeTab);

  const servicesSchema = services.map(srv => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${srv.title} in Hyderabad`,
    "description": srv.desc,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ultra Deep Clean Experts",
      "telephone": "+916309365673",
      "priceRange": "$$",
      "image": "https://ultradeepcleanexperts.com/logo192.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Madhapur",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Madhapur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gachibowli"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kondapur"
      }
    ],
    "serviceType": "Deep Cleaning Services"
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ultradeepcleanexperts.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ultradeepcleanexperts.com/services"
      }
    ]
  };

  return (
    <div className="bg-white relative overflow-hidden">
      <SEO
        title="Our Cleaning Services – Ultra Deep Clean Experts Hyderabad"
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service, local deep cleaning services"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
        canonicalPath="/services"
        schema={[breadcrumbSchema, ...servicesSchema]}
      />

      {/* ─── Page Header ─── */}
      <div className="bg-gradient-to-br from-[#0B1E6B] via-primary to-blue-500 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/80 font-bold text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full px-4 py-1.5 inline-block mb-4">
            Our Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            Our Cleaning Services
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            High-grade hygiene and cleaning solutions customized for every corner of Hyderabad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">

        {/* ─── Category Filter Tabs ─── */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ─── Services Grid ─── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-28">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv) => {
              const cat = categoryColors[srv.category];
              const waMessage = `Hi! I want to book the "${srv.title}" service. Please confirm availability.`;
              const waLink = `https://wa.me/916309365673?text=${encodeURIComponent(waMessage)}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={srv.id}
                  id={srv.id}
                  className={`bg-white rounded-3xl border shadow-soft hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col relative group ${
                    srv.popular
                      ? 'border-primary ring-2 ring-primary/15'
                      : `border-slate-100 hover:${cat.border}`
                  }`}
                >
                  {/* Image Header with Hover Scale */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={srv.image}
                      alt={`${srv.title} - Professional deep cleaning services in Hyderabad`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Category/Icon Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5 border border-white/50 text-slate-800">
                      <span className="text-sm">{srv.icon}</span>
                      <span>{categoryLabels[srv.category].split(' ').slice(1).join(' ')}</span>
                    </div>

                    {/* Popular Badge */}
                    {srv.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full shadow-md z-10">
                        ⭐ Most Popular
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight font-heading mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{srv.desc}</p>

                    {/* Features list */}
                    <div className="flex-grow">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">What's Included</p>
                      <ul className="space-y-2.5">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FaCheck className="text-primary text-[8px]" />
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5"
                      >
                        <FaWhatsapp className="text-base" />
                        Book via WhatsApp
                      </a>
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                        <Link to="/pricing" className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                          <FaStar className="text-[10px] text-primary" /> View Pricing
                        </Link>
                        <Link
                          to={`/booking?service=${encodeURIComponent(srv.title)}`}
                          className="flex items-center gap-1 hover:text-primary transition-colors font-medium"
                        >
                          <FaCalendarCheck className="text-[10px] text-primary" /> Online Booking
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ─── Equipment / Machinery Panel ─── */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0B1E6B] via-primary to-blue-500 text-white p-8 sm:p-14 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="text-center mb-10 sm:mb-12 relative z-10">
              <span className="text-white/80 font-bold text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Our Gear
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                Heavy-Duty Machinery We Use
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                We bring professional deep cleaners, single discs, and steam extraction tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {machinesUsed.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 p-5 sm:p-6 rounded-2xl flex gap-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-lg sm:text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1 leading-snug">{item.title}</h4>
                    <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
