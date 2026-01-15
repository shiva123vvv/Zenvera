import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiShoppingCart, FiLayout, FiSmartphone, FiCheckCircle, FiDatabase } from 'react-icons/fi';

const WebDevelopment = () => {
  const subServices = [
    {
      icon: <FiCode />,
      title: 'Enterprise Web Applications',
      description: 'Scalable, secure web applications for large organizations with complex business logic.',
      features: ['Custom CMS', 'User Management', 'API Integration', 'Security Features']
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Order Tracking', 'Customer Portal']
    },
    {
      icon: <FiLayout />,
      title: 'CMS Development',
      description: 'Custom content management systems tailored to your specific content needs.',
      features: ['Custom Admin Panel', 'SEO Tools', 'Media Library', 'User Roles']
    },
    {
      icon: <FiSmartphone />,
      title: 'Progressive Web Apps',
      description: 'Web applications that work offline and feel like native mobile apps.',
      features: ['Offline Support', 'Push Notifications', 'App-like UI', 'Fast Loading']
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Node.js', logo: '⬢' },
    { name: 'Python', logo: '🐍' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' }
  ];

  const processSteps = [
    { step: 1, title: 'Discovery', description: 'Understand your goals and requirements' },
    { step: 2, title: 'Design', description: 'Create wireframes and UI/UX designs' },
    { step: 3, title: 'Development', description: 'Build with clean, maintainable code' },
    { step: 4, title: 'Testing', description: 'Comprehensive quality assurance' },
    { step: 5, title: 'Deployment', description: 'Launch and monitor performance' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-zen-accent"></span>
            <span className="text-sm font-medium text-zen-navy">Web Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            World-Class <span className="text-transparent bg-clip-text bg-primary-gradient">Web Solutions</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
            Build scalable, responsive, and high-performance web applications that drive business growth and engage users effectively.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Web Project
          </Link>
        </div>
      </section>

      {/* Sub-services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Our Web Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6">
                  <div className="text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{service.title}</h3>
                <p className="text-zen-gray mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <FiCheckCircle className="text-zen-accent mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-zen-navy">Our Development Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gray-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative text-center group">
                  <div className="w-20 h-20 rounded-full bg-white text-zen-navy flex items-center justify-center text-2xl font-bold mx-auto mb-6 z-10 relative ring-8 ring-zen-light shadow-md group-hover:bg-zen-primary group-hover:text-white transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-zen-navy">{step.title}</h3>
                  <p className="text-zen-gray text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Technologies We Use</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-transparent group-hover:border-gray-100">
                  {tech.logo}
                </div>
                <div className="font-medium text-zen-navy">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free consultation and project estimate from our web development experts.
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Get Free Website Audit</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zen-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zen-primary"
                />
                <input
                  type="url"
                  placeholder="Website URL (if any)"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zen-primary"
                />
                <button type="submit" className="btn-primary w-full shadow-lg shadow-zen-primary/50">
                  Get Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;