import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Solutions',
    'Cloud Services',
    'Digital Transformation',
    'Not Sure'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className={`glass-card ${className}`}>
      {submitted ? (
        <div className="text-center py-12 animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6 pulse-glow">
            <FiCheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold mb-3 gradient-text">Thank You!</h3>
          <p className="text-gray-600 text-lg">We've received your message and will get back to you within 24 hours.</p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3">Let's Start a Conversation</h3>
            <p className="text-gray-600">Fill out the form below and our team will reach out to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-zen-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary focus:border-zen-primary transition-all duration-300 hover:border-gray-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-zen-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary focus:border-zen-primary transition-all duration-300 hover:border-gray-300"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary focus:border-zen-primary transition-all duration-300 hover:border-gray-300"
                  placeholder="Your Company"
                />
              </div>

              <div className="group">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary focus:border-zen-primary transition-all duration-300 hover:border-gray-300 bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details <span className="text-zen-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary focus:border-zen-primary transition-all duration-300 hover:border-gray-300 resize-none"
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-5 text-lg font-bold inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <FiCheckCircle className="text-zen-primary" />
              <p>We respect your privacy. Your information will never be shared.</p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;