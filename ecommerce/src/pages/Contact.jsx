import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import '../components/Css/About.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formData.email) errors.email = 'Email Address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form data submitted:', formData);
      alert('Message sent successfully!');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const inputStyle = (name) =>
    `w-full p-3 rounded-lg border-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
      formErrors[name] ? 'border-red-500' : 'border-gray-200'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
     <section className="py-20 text-center bg-white shadow-sm">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-slideInLeft">
    Get in Touch
  </h1>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slideInRight">
    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
  </p>
</section>

      {/* Contact Info Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Visit Store Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 animate-slideInUp" style={{ animationDelay: '0s' }}>
      <div className="p-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 mb-4 text-white shadow-md">
        <MapPin size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Visit Our Store</h3>
      <p className="text-gray-500">Bhaktapur Durbar Square Area</p>
      <p className="text-gray-500">Bhaktapur, Nepal</p>
    </div>

    {/* Call Us Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
      <div className="p-4 rounded-full bg-gradient-to-tr from-rose-500 to-red-500 mb-4 text-white shadow-md">
        <Phone size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
      <p className="text-gray-500">+977-1-6610000</p>
      <p className="text-gray-500">+977-9800000000</p>
    </div>

    {/* Email Us Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
      <div className="p-4 rounded-full bg-gradient-to-tr from-sky-500 to-blue-500 mb-4 text-white shadow-md">
        <Mail size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h3>
      <p className="text-gray-500">hello@martwear.com.np</p>
      <p className="text-gray-500">support@martwear.com.np</p>
    </div>

    {/* Business Hours Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
      <div className="p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 mb-4 text-white shadow-md">
        <Clock size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Hours</h3>
      <p className="text-gray-500">Mon - Sat: 10:00 AM - 6:00 PM</p>
      <p className="text-gray-500">Sun: 11:00 AM - 5:00 PM</p>
    </div>
  </div>
</section>


      {/* Main Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Column: Form */}
          <div className="lg:w-1/2 p-8 bg-white rounded-2xl shadow-lg animate-slideInLeft">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputStyle('fullName')}
                    placeholder="Your full name"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={inputStyle('phoneNumber')}
                    placeholder="Your phone number"
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle('email')}
                  placeholder="Your email address"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputStyle('subject')} appearance-none pr-10`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Returns & Exchanges">Returns & Exchanges</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <ChevronDown size={20} />
                  </div>
                  {formErrors.subject && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={inputStyle('message')}
                  placeholder="Tell us how we can help you..."
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Location & FAQ */}
          <div className="lg:w-1/2 space-y-8 animate-slideInRight">
            {/* Find Us Here Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 mb-4 text-white shadow-md">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Find Us Here</h3>
              <p className="text-gray-500">Bhaktapur Durbar Square Area</p>
              <p className="text-gray-500">Bhaktapur, Nepal</p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800">Do you offer home delivery?</h4>
                  <p className="text-sm">Yes, we offer free home delivery within Bhaktapur for orders above NPR 2000.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">What are your return policies?</h4>
                  <p className="text-sm">We accept returns within 7 days of purchase for unused items with original packaging.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Do you have a physical store?</h4>
                  <p className="text-sm">Yes, visit our store in Bhaktapur for personalized fitting and consultation services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
