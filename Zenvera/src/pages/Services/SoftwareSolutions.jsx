import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu, FiDatabase, FiLink, FiCheckCircle, FiServer, FiCode, FiShield, FiBarChart } from 'react-icons/fi';

const SoftwareSolutions = () => {
  const solutions = [
    {
      icon: <FiCpu />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to address your unique business challenges.',
      benefits: ['100% Customization', 'Scalable Architecture', 'Future-proof Design', 'Competitive Advantage']
    },
    {
      icon: <FiServer />,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, efficient, and secure platforms.',
      benefits: ['Improved Performance', 'Enhanced Security', 'Better Integration', 'Reduced Maintenance']
    },
    {
      icon: <FiLink />,
      title: 'API Development & Integration',
      description: 'Connect disparate systems and enable seamless data flow between applications.',
      benefits: ['System Connectivity', 'Real-time Data Sync', 'Third-party Integration', 'Automation']
    },
    {
      icon: <FiShield />,
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing services to ensure software reliability and performance.',
      benefits: ['Automated Testing', 'Security Testing', 'Performance Testing', 'Bug Prevention']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', solutions: 'HIPAA compliant systems, Patient portals' },
    { name: 'Finance', icon: '💰', solutions: 'Banking software, Payment systems, FinTech' },
    { name: 'Retail', icon: '🛒', solutions: 'POS systems, Inventory management, E-commerce' },
    { name: 'Manufacturing', icon: '🏭', solutions: 'ERP systems, Supply chain, Quality control' },
    { name: 'Education', icon: '🎓', solutions: 'LMS, Student portals, Administration systems' },
    { name: 'Logistics', icon: '🚚', solutions: 'Tracking systems, Fleet management, Delivery' }
  ];

  const technologies = [
    { category: 'Backend', techs: ['Node.js', 'Python', 'Java', '.NET'] },
    { category: 'Frontend', techs: ['React', 'Angular', 'Vue.js'] },
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'Google Cloud'] },
    { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'Jenkins', 'Git'] }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
            <span className="text-sm font-medium text-zen-navy">Software Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Scalable <span className="text-transparent bg-clip-text bg-primary-gradient">IT Solutions</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
            Comprehensive software solutions that solve complex business challenges, improve efficiency, and drive innovation.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Our Software Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6">
                  <div className="text-2xl">{solution.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{solution.title}</h3>
                <p className="text-zen-gray mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <FiCheckCircle className="text-zen-accent mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-zen-navy">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-zen-primary/10 group">
                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-zen-light transition-colors">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{industry.name}</h3>
                <p className="text-zen-gray text-sm leading-relaxed">{industry.solutions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category) => (
              <div key={category.category} className="border border-gray-100 rounded-2xl p-8 hover:shadow-soft transition-all duration-300 bg-white">
                <h3 className="text-xl font-bold mb-6 text-zen-navy flex items-center">
                  <span className="w-2 h-6 bg-zen-primary rounded-full mr-3"></span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-4 py-2 bg-gray-50 text-zen-gray rounded-xl text-sm font-medium hover:bg-zen-primary hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 text-white mb-8 backdrop-blur-sm border border-white/20">
            <FiBarChart className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a technical consultation with our software architects.
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-zen-navy mb-6">Book a Technical Consultation</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary flex-1 text-center justify-center"
                  >
                    Send Message
                  </Link>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl border-2 border-zen-primary text-zen-primary font-bold hover:bg-zen-primary hover:text-white transition-all duration-300 flex-1 text-center flex items-center justify-center"
                  >
                    Schedule Call
                  </a>
                </div>
                <p className="text-sm text-zen-gray">
                  Get a 30-minute free consultation with our technical lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareSolutions;