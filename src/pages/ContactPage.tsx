import React from 'react';
import { useForm } from 'react-hook-form';
import SEO from '../components/SEO/SEO';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaInfoCircle, FaBuilding, FaPaperPlane } from 'react-icons/fa';

interface ContactFormInputs {
  name: string;
  mobile: string;
  service: string;
  property: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    const text = `*New Contact Inquiry*%0A%0AName: ${data.name}%0AMobile: ${data.mobile}%0AService Required: ${data.service}%0AProperty Type: ${data.property}%0AMessage: ${data.message}`;
    window.open(`https://wa.me/916309365673?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 bg-slate-50/30 bg-grid-pattern relative overflow-hidden">
      <SEO 
        title="Contact Us – Book Deep Cleaning in Hyderabad" 
        description="Ultra Deep Clean Experts offers professional home, office, sofa, bathroom & kitchen deep cleaning in Hyderabad. 8+ years experience, 5000+ properties cleaned. Book now!"
        keywords="deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service"
        ogTitle="Ultra Deep Clean Experts – Deep Cleaning in Hyderabad"
        ogDescription="Professional deep cleaning for homes, offices & commercial spaces in Hyderabad. Trusted by 5000+ customers. Book via WhatsApp."
      />
      
      {/* Background blobs */}
      <div className="bg-orb w-[300px] h-[300px] bg-blue-500/10 top-20 -left-10 animate-float"></div>
      <div className="bg-orb w-[450px] h-[450px] bg-slate-300/20 bottom-10 -right-20 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-150/40 rounded-full px-4 py-1.5 inline-block mb-3">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Contact Our Team</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out to our customer support for custom cleaning quotes, school/hospital checklists, or schedules.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100">
              <h3 className="text-xl font-bold mb-8 font-heading text-slate-900 border-l-2 border-primary pl-3">
                Quick Contact Channels
              </h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Address', detail: 'Madhapur, Hyderabad, Telangana, India', icon: <FaMapMarkerAlt /> },
                  { 
                    title: 'Phone Numbers', 
                    detail: (
                      <div className="flex flex-col">
                        <a href="tel:+916309365673" className="hover:text-primary transition-colors font-semibold">+91 6309365673</a>
                        <a href="tel:+919908265673" className="hover:text-primary transition-colors font-semibold">+91 9908265673</a>
                      </div>
                    ),
                    icon: <FaPhoneAlt />
                  },
                  { 
                    title: 'Email Address', 
                    detail: <a href="mailto:knareshdeepcleaning@gmail.com" className="hover:text-primary transition-colors break-all font-semibold">knareshdeepcleaning@gmail.com</a>,
                    icon: <FaEnvelope />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-1">{item.title}</h4>
                      <div className="text-slate-600 text-sm leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white p-5 rounded-3xl shadow-soft border border-slate-100">
              <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-4 border-l-2 border-primary pl-3">Our service region</h4>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2693822974956!2d78.3757!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjYiTiA3OMKwMjInMzIuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="260" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Our Service Area – Madhapur, Hyderabad"
                />
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-3xl border border-blue-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-[40px] pointer-events-none"></div>
              <h3 className="text-lg font-bold mb-2 text-white font-heading">Need Fast Help?</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-6">WhatsApp us directly for free cleaning consultation and same-day slots.</p>
              <a 
                href="https://wa.me/916309365673" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-blue-50 border border-white hover:shadow-glow transition-all duration-300 font-bold text-xs uppercase tracking-wider"
              >
                <FaWhatsapp className="text-lg animate-pulse" /> 
                <span>WhatsApp support</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-soft">
            <h3 className="text-xl font-bold mb-6 font-heading border-l-2 border-primary pl-3">
              Send Direct Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Service Required</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                      <FaInfoCircle className="text-sm" />
                    </span>
                    <select 
                      {...register("service", { required: "Please select a service" })}
                      className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white cursor-pointer"
                    >
                      <option value="">Select...</option>
                      <option value="Home Deep Cleaning">Home Deep Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Sofa Cleaning">Sofa Cleaning</option>
                      <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.service && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.service.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Property Size</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                      <FaBuilding className="text-sm" />
                    </span>
                    <select 
                      {...register("property", { required: "Please select a property type" })}
                      className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white cursor-pointer"
                    >
                      <option value="">Select size...</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="4+ BHK">4+ BHK</option>
                      <option value="Villa">Villa</option>
                      <option value="Commercial">Commercial/Office</option>
                    </select>
                  </div>
                  {errors.property && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.property.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Detailed Message</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 text-slate-800 bg-slate-50/50 focus:bg-white"
                  placeholder="Tell us what needs deep cleaning or scrubbing..."
                ></textarea>
                {errors.message && <span className="text-rose-600 text-xs mt-1.5 block font-semibold">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-primary text-white font-bold py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5 uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
