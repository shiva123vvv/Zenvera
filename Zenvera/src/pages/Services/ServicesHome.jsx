import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiSmartphone, FiCpu, FiCheckCircle, FiUsers, FiClock, FiTarget } from 'react-icons/fi';

const ServicesHome = () => {
  const services = [
    {
      icon: <FiCode className="text-3xl" />,
      title: 'Web Development',
      description: 'Build scalable, responsive web applications that drive business growth.',
      features: ['Custom Web Apps', 'E-commerce', 'CMS Development', 'PWA'],
      link: '/services/web-development',
      color: 'from-blue-500 to-cyan-500' // Kept for reference but overridden by theme classes
    },
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Maintenance'],
      link: '/services/mobile-app-development',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: 'Software Solutions',
      description: 'Custom software tailored to solve complex business challenges.',
      features: ['Custom Software', 'Legacy Modernization', 'API Integration', 'QA Testing'],
      link: '/services/software-solutions',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const process = [
    {
      icon: <FiTarget />,
      title: 'Discovery',
      description: 'We understand your business goals and technical requirements'
    },
    {
      icon: <FiUsers />,
      title: 'Planning',
      description: 'Our experts create a detailed roadmap for your project'
    },
    {
      icon: <FiCode />,
      title: 'Development',
      description: 'We build your solution with clean, maintainable code'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Testing',
      description: 'Rigorous quality assurance ensures flawless performance'
    },
    {
      icon: <FiClock />,
      title: 'Support',
      description: 'Ongoing maintenance and support for long-term success'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Our <span className="text-transparent bg-clip-text bg-primary-gradient">Services</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive growth through innovative technology.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-zen-navy">What We Offer</h2>
            <p className="text-zen-gray max-w-2xl mx-auto">
              From web development to complete software solutions, we provide end-to-end services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-primary-gradient rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zen-light text-zen-primary mb-6 group-hover:bg-primary-gradient group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-zen-navy">{service.title}</h3>
                  <p className="text-zen-gray mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FiCheckCircle className="text-zen-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zen-primary font-bold hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-zen-light rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                  )}

                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zen-primary text-white mb-4 relative z-10 ring-4 ring-white">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-zen-primary uppercase tracking-wider mb-2">STEP {index + 1}</div>
                  <h3 className="font-bold mb-2 text-zen-navy">{step.title}</h3>
                  <p className="text-sm text-zen-gray">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <a href="tel:+918012345678" className="px-8 py-3.5 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHome;