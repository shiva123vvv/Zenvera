import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import SEO from '../components/comman/SEO';

const Contact = () => {
  // Frontend-only form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: 'Email Us',
      details: [
        { text: 'hello@zenvera.com', link: 'mailto:hello@zenvera.com' },
        { text: 'support@zenvera.com', link: 'mailto:support@zenvera.com' }
      ],
      description: 'We respond within 24 hours'
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: 'Call Us',
      details: [
        { text: '+91 80 1234 5678', link: 'tel:+918012345678' },
        { text: '+91 98 7654 3210', link: 'tel:+919876543210' }
      ],
      description: 'Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: 'Head Office',
      details: [
        { text: 'Thiruchengode', link: 'https://maps.google.com/?q=Thiruchengode' }
      ],
      description: 'Tamil Nadu, India'
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: 'Our Branches',
      details: [
        { text: 'MM Hills', link: 'https://maps.google.com/?q=MM+Hills' },
        { text: 'Hanur (Chamarajanagara)', link: 'https://maps.google.com/?q=Hanur' }
      ],
      description: 'Karnataka, India'
    }
  ];

  return (
    <div className="animate-fade-in bg-zen-light min-h-screen">
      <SEO
        title="Contact Us | Zenvera"
        description="Get in touch with Zenvera for your next digital project. Free consultation and quote."
      />
      {/* Hero */}
      <section className="bg-zen-navy pt-32 pb-32 lg:pt-40 lg:pb-48 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gradient opacity-10 blur-3xl rounded-l-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's Talk About Your Project
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your digital transformation? Contact us for a free consultation or just to say hello.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-20 pb-20 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Form Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-zen-navy mb-2">Send us a Message</h2>
                <p className="text-zen-gray">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-xl font-bold text-zen-navy mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We'll be in touch very soon.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-zen-primary font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zen-navy">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zen-navy">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zen-navy">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a topic...</option>
                      <option value="Project Inquiry">New Project Inquiry</option>
                      <option value="Partnership">Partnership Proposal</option>
                      <option value="Support">Technical Support</option>
                      <option value="Careers">Careers / Job Application</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zen-navy">Message</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project goals, timeline, and budget..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full btn-primary py-4 text-lg shadow-lg flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? 'Sending...' : <><FiSend /> Send Message</>}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-zen-primary flex items-center justify-center text-xl flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-zen-navy text-lg mb-1">{info.title}</h3>
                      <div className="flex flex-col">
                        {info.details.map((detail, idx) => (
                          <a
                            key={idx}
                            href={detail.link}
                            target={detail.link.startsWith('http') ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="text-zen-gray font-medium hover:text-zen-primary transition-colors py-0.5"
                          >
                            {detail.text}
                          </a>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide font-bold">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Card */}
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.56847844062!2d77.896677!3d11.380000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9641777239845%3A0xe549320619a008c7!2sThiruchengode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1642186830722!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Headquarters Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;