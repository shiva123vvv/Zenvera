import React from 'react';
import ContactForm from '../components/comman/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: 'Email',
      details: ['hello@zenvera.com', 'support@zenvera.com'],
      description: 'We respond within 4 hours'
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: 'Phone',
      details: ['+91 80 1234 5678', '+91 98 7654 3210'],
      description: 'Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: 'Office',
      details: ['123 Innovation Dr, Suite 500', 'San Francisco, CA 94107'],
      description: 'Global Headquarters'
    },
    {
      icon: <FiClock className="text-xl" />,
      title: 'Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
      description: 'IST Time Zone'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Timelines vary based on project complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months.'
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes, we provide comprehensive maintenance packages including updates, security patches, and performance monitoring.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with regular client updates, sprint reviews, and iterative development.'
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We provide transparent fixed-price or time-and-material quotes after understanding your requirements.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Get in <span className="text-transparent bg-clip-text bg-primary-gradient">Touch</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Ready to start your project? Contact us for a free consultation and discover how Zenvera can help transform your digital presence.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-glass border border-white/50">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:border-zen-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-gradient text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-zen-navy">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-zen-gray font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-xs text-zen-primary font-bold uppercase tracking-wider">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Chat */}
              <div className="bg-zen-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gradient opacity-20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-6 backdrop-blur-sm border border-white/20">
                    <FiMessageSquare className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quick Chat</h3>
                  <p className="text-gray-300 mb-8 text-sm">Prefer to chat instantly? Our team is available for quick questions.</p>
                  <button className="w-full btn-primary shadow-lg shadow-zen-primary/30">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-zen-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zen-navy">Visit Our Office</h2>
            <p className="text-zen-gray">123 Tech Street, Bangalore, India</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px] border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zenvera Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zen-navy">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{faq.question}</h3>
                <p className="text-zen-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We're here to help. Reach out to us for any questions about our services or process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@zenvera.com"
              className="btn-primary flex items-center justify-center"
            >
              Email Us Now
            </a>
            <a
              href="tel:+918012345678"
              className="px-8 py-3.5 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;