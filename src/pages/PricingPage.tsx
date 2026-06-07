import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import { FaCheckCircle, FaInfoCircle, FaShieldAlt, FaPercent, FaBriefcase } from 'react-icons/fa';

interface PlanItem {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingPage: React.FC = () => {
  const plans: PlanItem[] = [
    { 
      name: '1 BHK Deep Cleaning', 
      price: '₹4,000', 
      features: ['Bedrooms & Living Room deep dust extraction', 'Kitchen slab, tiles & exterior cabinets degreasing', '1 Bathroom deep acid scrubbing & descaling', 'Window mesh washing, fans & frames clean-down', 'Complete floor machine scrubbing & mopping'] 
    },
    { 
      name: '2 BHK Deep Cleaning', 
      price: '₹7,000', 
      features: ['2 Bedrooms & Living Room deep clean', 'Kitchen degreasing & full shelf wipe-downs', '2 Bathrooms descaled & disinfected', 'Window track cleaning, fans & lights wiped', 'Floor scrubbing with industrial machines', 'Sofa & mattress dry vacuuming (up to 4 seats)'] 
    },
    { 
      name: '3 BHK Deep Cleaning', 
      price: '₹11,000', 
      features: ['3 Bedrooms & Living Room deep clean', 'Kitchen deep degreasing, chimney shell cleaning', 'All Bathrooms descaled, scrubbed & sanitized', 'Windows, grids, frames & tracks washed', 'Marble/tile floor machine scrubbing & polishing', 'Sofa vacuuming (up to 6 seats)', 'Balcony high pressure washing & clean-up'], 
      popular: true 
    },
    { 
      name: '4 BHK Deep Cleaning', 
      price: '₹15,000', 
      features: ['4 Bedrooms & Living Room complete sanitization', 'Kitchen deep degreasing & interior shelves clean', 'All Bathrooms fully scrubbed, acid descaled', 'Premium floor scrubbing & tile joint cleaning', 'Sofa, carpet & mattress vacuuming (up to 8 seats)', 'All balconies thoroughly scrubbed & washed'] 
    },
    { 
      name: 'Villa Deep Cleaning', 
      price: '₹30,000', 
      features: ['Complete duplex/villa rooms & staircase coverage', 'Kitchen deep degreasing & cabinet inside cleaning', 'All bathrooms acid scrubbing & tile polishing', 'Exterior glass wall wiping & tracks clean', 'Premium luxury floor polishing & buffing', 'Dedicated Supervisor on-site for quality check', 'Balconies & open terrace high pressure washing'] 
    },
    { 
      name: 'Commercial Deep Cleaning', 
      price: 'Custom Quote', 
      features: ['Office workspace, cabins & conference rooms', 'Restroom deep scrubbing & medical-grade sanitization', 'Industrial dry/wet vacuuming & carpet shampooing', 'Flexible after-hours booking to avoid downtime', 'Dedicated Site Supervisor on-site', 'GST Invoice and billing options available'] 
    }
  ];

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
        "name": "Pricing",
        "item": "https://ultradeepcleanexperts.com/pricing"
      }
    ]
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Ultra Deep Clean Experts Pricing Packages",
    "itemListElement": plans.map(plan => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": `${plan.name} in Hyderabad`,
        "description": plan.features.join(', ')
      },
      "price": plan.price === 'Custom Quote' ? undefined : plan.price.replace(/[^\d]/g, ''),
      "priceCurrency": plan.price === 'Custom Quote' ? undefined : "INR"
    }))
  };

  return (
    <div className="py-20 bg-slate-550 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="Transparent Pricing – Deep Cleaning Services Hyderabad" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service, house cleaning cost hyderabad"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
        canonicalPath="/pricing"
        schema={[breadcrumbSchema, pricingSchema]}
      />
      
      {/* Background blobs */}
      <div className="bg-orb w-[400px] h-[400px] bg-blue-500/10 top-10 right-10 animate-float"></div>
      <div className="bg-orb w-[300px] h-[300px] bg-slate-350/20 bottom-10 left-10 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-150/40 rounded-full px-4 py-1.5 inline-block mb-3">Rates & Packages</span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Transparent Pricing</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            No hidden costs. Premium deep cleaning services in Hyderabad at highly competitive rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {plans.map((plan, idx) => {
            const waMessage = `Hi! I want to book the "${plan.name}" package. Please confirm availability.`;
            const waLink = `https://wa.me/916309365673?text=${encodeURIComponent(waMessage)}`;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-8 flex flex-col bg-white border card-hover-effect ${
                  plan.popular 
                    ? 'border-primary ring-2 ring-primary/20 shadow-hover' 
                    : 'border-slate-100 shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xxs font-extrabold uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-black text-slate-900 font-heading mb-2 leading-tight">{plan.name}</h3>
                
                <div className="mb-6 flex items-baseline gap-1 mt-2">
                  <span className={`${plan.price === 'Custom Quote' ? 'text-3xl' : 'text-5xl'} font-black text-slate-900 font-heading tracking-tight`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom Quote' && <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider ml-1">Fixed Rate</span>}
                </div>

                <ul className="space-y-3.5 mb-8 flex-grow border-t border-slate-50 pt-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-success mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-slate-650 text-xs font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-glow hover:-translate-y-0.5' 
                        : 'bg-blue-50 text-primary border border-blue-100 hover:bg-primary hover:text-white hover:-translate-y-0.5'
                    }`}
                  >
                    Instant WhatsApp Booking
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Badges Redesign */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-3xl p-10 sm:p-14 shadow-2xl border border-blue-700 relative overflow-hidden"
        >
          {/* background blur effect */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-[60px] pointer-events-none"></div>

          <div className="text-center mb-12">
            <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full px-4 py-1.5 inline-block mb-3">Our Commitments</span>
            <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight !text-white">Our Service Commitments</h2>
            <p className="text-blue-100 text-sm">Every booking with us comes with strict safety and quality standards.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Satisfaction Guarantee', desc: 'Not satisfied? Inform us within 24 hours, and we re-clean free.', icon: <FaShieldAlt className="text-white text-2xl" /> },
              { title: 'Fixed Price Quotes', desc: 'No hidden taxes, travel charges, or surprise service additions.', icon: <FaPercent className="text-white text-2xl" /> },
              { title: 'Verified Specialists', desc: 'Fully background-checked, insured, and vetted cleaning staff.', icon: <FaBriefcase className="text-white text-2xl" /> },
              { title: 'Eco-Safe Detergents', desc: 'Safe cleaning agents that protect children, pets, and fabrics.', icon: <FaInfoCircle className="text-white text-2xl" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 p-6 rounded-2xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1.5 text-white leading-tight">{item.title}</h4>
                  <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
