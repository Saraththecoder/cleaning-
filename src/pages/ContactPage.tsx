import React from 'react';
import { useForm } from 'react-hook-form';
import SEO from '../components/SEO/SEO';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

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
    <div className="py-12 bg-gray-50">
      <SEO 
        title="Contact Us" 
        description="Get in touch with ULTRA DEEP CLEAN EXPERTS. Call, email, or WhatsApp us for professional deep cleaning services in Hyderabad."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact <span className="text-primary">Us</span></h1>
          <p className="text-xl text-gray-600">
            We're here to help. Reach out to us for any inquiries or to book a service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-gray-600">Madhapur, Hyderabad,<br />Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone Numbers</h4>
                    <p className="text-gray-600">
                      <a href="tel:+916309365673" className="hover:text-primary block">+91 6309365673</a>
                      <a href="tel:+919908265673" className="hover:text-primary block">+91 9908265673</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Address</h4>
                    <p className="text-gray-600">
                      <a href="mailto:Knaresh990826@gmail.com" className="hover:text-primary">Knaresh990826@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent text-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Chat With Us Instantly</h3>
              <p className="text-gray-300 mb-6">Have a quick question? Message us on WhatsApp for an immediate response.</p>
              <a 
                href="https://wa.me/916309365673" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold w-full sm:w-auto"
              >
                <FaWhatsapp className="text-2xl" /> WhatsApp Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input 
                  {...register("mobile", { required: "Mobile number is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="+91 xxxxxxxxxx"
                />
                {errors.mobile && <span className="text-red-500 text-sm mt-1">{errors.mobile.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select 
                  {...register("service", { required: "Please select a service" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Select a service...</option>
                  <option value="Home Deep Cleaning">Home Deep Cleaning</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Sofa Cleaning">Sofa Cleaning</option>
                  <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select 
                  {...register("property", { required: "Please select a property type" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Select property type...</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4+ BHK">4+ BHK</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial/Office</option>
                </select>
                {errors.property && <span className="text-red-500 text-sm mt-1">{errors.property.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md mt-4"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
