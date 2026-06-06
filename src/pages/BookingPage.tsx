import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { FaCheckCircle } from 'react-icons/fa';

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
    // Check for service query param
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setValue('service', serviceParam);
    }
  }, [location, setValue]);

  const onSubmit = (data: BookingFormInputs) => {
    const text = `*New Booking Request*%0A%0AName: ${data.name}%0AMobile: ${data.mobile}%0AService: ${data.service}%0APreferred Date: ${data.date}%0AAddress: ${data.address}`;
    window.open(`https://wa.me/916309365673?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-white">
      <SEO 
        title="Book Now" 
        description="Book your deep cleaning service with ULTRA DEEP CLEAN EXPERTS today."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Booking Form */}
          <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-3xl font-bold mb-2">Book Your <span className="text-primary">Cleaning</span></h1>
            <p className="text-gray-600 mb-8">Fill out the form below to secure your booking. We will confirm your slot via WhatsApp.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input 
                    {...register("mobile", { required: "Mobile number is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="+91 xxxxxxxxxx"
                  />
                  {errors.mobile && <span className="text-red-500 text-sm mt-1">{errors.mobile.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
                  <select 
                    {...register("service", { required: "Please select a service" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="1 BHK Deep Cleaning">1 BHK Deep Cleaning (₹4,000)</option>
                    <option value="2 BHK Deep Cleaning">2 BHK Deep Cleaning (₹7,000)</option>
                    <option value="3 BHK Deep Cleaning">3 BHK Deep Cleaning (₹11,000)</option>
                    <option value="4 BHK Deep Cleaning">4 BHK Deep Cleaning (₹15,000)</option>
                    <option value="Villa Deep Cleaning">Villa Deep Cleaning (₹30,000)</option>
                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Other">Other Custom Service</option>
                  </select>
                  {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input 
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                  {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address (Hyderabad)</label>
                <textarea 
                  {...register("address", { required: "Address is required" })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="H.No, Street, Landmark, Area"
                ></textarea>
                {errors.address && <span className="text-red-500 text-sm mt-1">{errors.address.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md text-lg"
              >
                Book Now & Pay Later
              </button>
            </form>
          </div>

          {/* Why Book Us */}
          <div className="w-full md:w-1/3 space-y-8">
            <div className="bg-accent text-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Why Book With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-success text-xl" />
                  <span>Transparent Pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-success text-xl" />
                  <span>100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-success text-xl" />
                  <span>Trained Professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-success text-xl" />
                  <span>Eco-Friendly Products</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-2">Need Immediate Help?</h4>
              <p className="text-blue-800 text-sm mb-4">Call our support team directly to schedule a same-day service.</p>
              <a href="tel:+916309365673" className="block text-center bg-white text-blue-900 font-bold py-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                Call +91 6309365673
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
