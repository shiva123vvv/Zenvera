import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu, FiDatabase, FiLink, FiCheckCircle, FiServer, FiCode, FiShield, FiBarChart, FiLayers } from 'react-icons/fi';
import SEO from '../../components/comman/SEO';

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

  const techCapabilities = [
    { title: 'Frontend Mastery', desc: 'Expertise in all modern frontend frameworks to build responsive, interactive, and user-friendly interfaces.' },
    { title: 'Backend Power', desc: 'Robust and scalable back-end solutions using the most suitable server-side languages and architectures.' },
    { title: 'Mobile First', desc: 'Development of high-performance native and cross-platform mobile applications for all devices.' },
    { title: 'Cloud Native', desc: 'Scalable cloud infrastructure deployment and management ensuring reliability and security.' }
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title="Software Solutions"
        description="Custom software development, legacy modernization, and API integration services by Zenvera."
      />
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

      {/* Architecture Visual */}
      <section className="py-20 bg-zen-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative perspective-1000">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <img
                src="/src/assets/software_architecture.png"
                alt="Enterprise Software Architecture"
                className="relative rounded-2xl shadow-2xl border border-white/40 w-full transform hover:rotate-x-2 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wider mb-6">
                <FiDatabase className="mr-1" /> Data-Driven
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zen-navy">Modern Architecture Definition</h2>
              <p className="text-xl text-zen-gray mb-8 leading-relaxed">
                We don't just patch legacy systems; we redefine them. Using microservices, containerization, and cloud-native principles, we build software that thrives on change.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-zen-navy font-bold"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Modular Microservices Design</li>
                <li className="flex items-center text-zen-navy font-bold"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Docker & Kubernetes Orchestration</li>
                <li className="flex items-center text-zen-navy font-bold"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Serverless Event-Driven Logic</li>
              </ul>
            </div>
          </div>
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

      {/* We Work In All Technologies - New Section */}
      <section className="py-24 bg-zen-navy text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-gradient opacity-5 rounded-full blur-[100px] -mr-40 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zen-secondary opacity-5 rounded-full blur-[80px] -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider mb-6 border border-white/20">
                <FiLayers className="mr-1" /> Technology Agnostic
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">We Work Across <br /><span className="text-transparent bg-clip-text bg-primary-gradient">All Technologies</span></h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't force your problem into a specific tech stack. Instead, we select the perfect tools for your unique requirements. We evaluate your business needs and implement the most effective technologies to ensure scalability, security, and performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techCapabilities.map((tech, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-1">{tech.title}</h4>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zen-primary/20 to-zen-secondary/20 rounded-2xl blur-xl transform rotate-3"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Engineering Philosophy</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-zen-primary/20 flex items-center justify-center text-zen-primary mr-4 flex-shrink-0">
                      <FiDatabase />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Performance First</h4>
                      <p className="text-gray-400 text-sm mt-1">We optimize every line of code for maximum speed and efficiency, regardless of the language.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-zen-secondary/20 flex items-center justify-center text-zen-secondary mr-4 flex-shrink-0">
                      <FiLayers />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Scalable Architecture</h4>
                      <p className="text-gray-400 text-sm mt-1">Systems designed to grow with your business, utilizing cloud-native principles and microservices.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                      <FiCode />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Clean Code Standards</h4>
                      <p className="text-gray-400 text-sm mt-1">Maintainable, documented, and tested code that ensures long-term project health.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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