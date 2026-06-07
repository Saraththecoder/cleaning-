import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { FaCheckCircle, FaCalendarAlt, FaUser, FaPhoneAlt, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

interface BookingFormInputs {
  name: string;
  mobile: string;
  service: string;
  date: string;
  address: string;
}

const BookingPage: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BookingFormInputs>();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const cleanParam = serviceParam.trim().toLowerCase().replace(/\s+/g, ' ');
      
      const mapping: Record<string, string> = {
        '1bhk deep cleaning': '1BHK Deep Cleaning',
        '1 bhk deep cleaning': '1BHK Deep Cleaning',
        '2bhk deep cleaning': '2BHK Deep Cleaning',
        '2 bhk deep cleaning': '2BHK Deep Cleaning',
        '3bhk deep cleaning': '3BHK Deep Cleaning',
        '3 bhk deep cleaning': '3BHK Deep Cleaning',
        '4bhk deep cleaning': '4 BHK Deep Cleaning',
        '4 bhk deep cleaning': '4 BHK Deep Cleaning',
        'house deep cleaning': 'House Deep Cleaning',
        'villa deep cleaning': 'Villa Deep Cleaning',
        'sofa cleaning': 'Sofa Cleaning',
        'sofa deep cleaning': 'Sofa Cleaning',
        'kitchen cleaning': 'Kitchen Cleaning',
        'kitchen deep cleaning': 'Kitchen Cleaning',
        'washroom cleaning': 'Washroom Cleaning',
        'washroom deep cleaning': 'Washroom Cleaning',
        'office cleaning': 'Office Cleaning',
        'hospital cleaning': 'Hospital Cleaning',
        'school cleaning': 'School Cleaning',
        'commercial cleaning': 'Commercial Deep Cleaning',
        'commercial deep cleaning': 'Commercial Deep Cleaning'
      };

      const matchedOption = mapping[cleanParam];
      if (matchedOption) {
        setValue('service', matchedOption);
      } else {
        setValue('service', serviceParam);
      }
    }
  }, [location, setValue]);

  const onSubmit = (data: BookingFormInputs) => {
    const text = `*New Booking Request*%0A%0AName: ${data.name}%0AMobile: ${data.mobile}%0AService: ${data.service}%0APreferred Date: ${data.date}%0AAddress: ${data.address}`;
    window.open(`https://wa.me/916309365673?text=${text}`, '_blank');
  };

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
        "name": "Book Service",
        "item": "https://ultradeepcleanexperts.com/booking"
      }
    ]
  };

  return (
    <div className="py-20 bg-slate-50/30 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="Book Deep Cleaning – Ultra Deep Clean Experts Hyderabad" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service, schedule cleaning hyderabad"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
        canonicalPath="/booking"
        schema={breadcrumbSchema}
      />
      
      {/* Glow Orbs */}
      <div className="bg-orb w-[300px] h-[300px] bg-blue-500/10 top-20 -left-10 animate-float"></div>
      <div className="bg-orb w-[400px] h-[400px] bg-slate-300/20 bottom-10 -right-20 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-soft">
            <span className="text-primary font-bold text-xxs uppercase tracking-widest bg-blue-50 border border-blue-150/40 rounded-full px-3.5 py-1 inline-block mb-3">Reservations</span>
            <h1 className="text-3xl sm:text-4xl font-black mb-2 tracking-tight">Book Your Cleaning</h1>
            <p className="text-slate-500 text-sm mb-8">Secure your preferred date. We will coordinate details and confirm your slot via WhatsApp.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                      <FaUser className="text-sm" />
                    </span>
                    <input 
                      {...register("name", { required: "Name is required" })}
                      className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                      <FaPhoneAlt className="text-sm" />
                    </span>
                    <input 
                      {...register("mobile", { required: "Mobile number is required" })}
                      className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white"
                      placeholder="+91 xxxxxxxxxx"
                    />
                  </div>
                  {errors.mobile && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.mobile.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Select Service</label>
                  <select 
                    {...register("service", { required: "Please select a service" })}
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="">Choose a package...</option>
                    
                    <optgroup label="Residential Deep Cleaning">
                      <option value="1BHK Deep Cleaning">1BHK Deep Cleaning (₹4,000)</option>
                      <option value="2BHK Deep Cleaning">2BHK Deep Cleaning (₹7,000)</option>
                      <option value="3BHK Deep Cleaning">3BHK Deep Cleaning (₹11,000)</option>
                      <option value="4 BHK Deep Cleaning">4 BHK Deep Cleaning (₹15,000)</option>
                      <option value="House Deep Cleaning">House Deep Cleaning</option>
                      <option value="Villa Deep Cleaning">Villa Deep Cleaning (₹30,000)</option>
                    </optgroup>

                    <optgroup label="Specialized Cleaning">
                      <option value="Sofa Cleaning">Sofa Deep Cleaning</option>
                      <option value="Kitchen Cleaning">Kitchen Deep Cleaning</option>
                      <option value="Washroom Cleaning">Washroom Deep Cleaning</option>
                    </optgroup>

                    <optgroup label="Commercial & Institutional">
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Hospital Cleaning">Hospital Cleaning</option>
                      <option value="School Cleaning">School Cleaning</option>
                      <option value="Commercial Deep Cleaning">Commercial Deep Cleaning (Custom Quote)</option>
                    </optgroup>

                    <option value="Other">Other Custom Service</option>
                  </select>
                  {errors.service && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.service.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferred Date</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                      <FaCalendarAlt className="text-sm" />
                    </span>
                    <input 
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  {errors.date && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.date.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Address (Hyderabad)</label>
                <div className="relative">
                  <span className="absolute top-4 left-4 text-slate-400">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <textarea 
                    {...register("address", { required: "Address is required" })}
                    rows={3}
                    className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white"
                    placeholder="H.No, Street, Landmark, Area, Hyderabad"
                  ></textarea>
                </div>
                {errors.address && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.address.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>

          {/* Right Column details */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl border border-blue-700 shadow-lg relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-[40px] pointer-events-none"></div>

              <h3 className="text-lg font-bold mb-6 border-b border-red-500/30 pb-4 font-heading tracking-wide uppercase text-white">
                Booking Details
              </h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  'Transparent up-front pricing',
                  '100% Satisfaction Guarantee',
                  'Vetted & verified personnel',
                  'Eco-safe detergents & chemicals',
                  'No prepayment required'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-white text-base flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-3xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-100/50 border border-blue-200/55 rounded-xl flex items-center justify-center text-primary text-xl flex-shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 leading-tight">Need Urgent Service?</h4>
                <p className="text-slate-650 text-xs leading-relaxed mb-4">We accommodate same-day deep cleaning bookings subject to slot availability.</p>
                <a 
                  href="tel:+916309365673" 
                  className="inline-block text-center w-full bg-white border border-blue-200 text-primary font-bold py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-blue-50 hover:border-primary transition-all duration-300"
                >
                  Call +91 6309365673
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
