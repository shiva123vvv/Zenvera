import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiTablet, FiGlobe, FiCheckCircle, FiDownload, FiRefreshCw, FiBarChart, FiLayers, FiDatabase, FiCode } from 'react-icons/fi';
import SEO from '../../components/comman/SEO';

const MobileApp = () => {
  const services = [
    {
      icon: <FiSmartphone />,
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and SwiftUI for optimal performance.',
      features: ['Swift/SwiftUI', 'App Store Optimization', 'Apple Ecosystem', 'Security']
    },
    {
      icon: <FiTablet />,
      title: 'Android App Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose for superior user experience.',
      features: ['Kotlin/Java', 'Material Design', 'Google Play', 'Performance']
    },
    {
      icon: <FiGlobe />,
      title: 'Cross-Platform Development',
      description: 'Single codebase solutions with React Native or Flutter for cost efficiency.',
      features: ['React Native', 'Flutter', 'Code Reuse', 'Faster Development']
    },
    {
      icon: <FiRefreshCw />,
      title: 'App Maintenance & Support',
      description: 'Ongoing support, updates, and enhancements for your mobile applications.',
      features: ['Bug Fixes', 'Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  const techCapabilities = [
    { title: 'Frontend Mastery', desc: 'Expertise in all modern frontend frameworks to build responsive, interactive, and user-friendly interfaces.' },
    { title: 'Backend Power', desc: 'Robust and scalable back-end solutions using the most suitable server-side languages and architectures.' },
    { title: 'Mobile First', desc: 'Development of high-performance native and cross-platform mobile applications for all devices.' },
    { title: 'Cloud Native', desc: 'Scalable cloud infrastructure deployment and management ensuring reliability and security.' }
  ];

  const developmentStages = [
    {
      stage: 'Strategy',
      activities: ['Market Research', 'Competitor Analysis', 'Feature Planning']
    },
    {
      stage: 'Design',
      activities: ['Wireframing', 'UI/UX Design', 'Prototyping']
    },
    {
      stage: 'Development',
      activities: ['Frontend Dev', 'Backend API', 'Third-party Integration']
    },
    {
      stage: 'Testing',
      activities: ['QA Testing', 'User Testing', 'Performance Testing']
    },
    {
      stage: 'Launch',
      activities: ['App Store Submission', 'Marketing', 'User Onboarding']
    }
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title="Mobile App Development"
        description="Native iOS, Android, and Cross-platform mobile app development services by Zenvera."
      />
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
            <span className="text-sm font-medium text-zen-navy">Mobile Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Next-Gen <span className="text-transparent bg-clip-text bg-primary-gradient">Mobile Apps</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
            Create engaging, high-performance mobile applications for iOS and Android that deliver exceptional user experiences.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your App Project
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Our Mobile Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6">
                  <div className="text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{service.title}</h3>
                <p className="text-zen-gray mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FiCheckCircle className="text-zen-accent mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-zen-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-teal-500/20 rounded-full blur-3xl transform -rotate-6"></div>
              <img
                src="/src/assets/service_mobile.png"
                alt="Mobile App Development Showcase"
                className="relative rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zen-navy">Engineering Mobile Excellence</h2>
              <p className="text-lg text-zen-gray mb-8 leading-relaxed">
                In a mobile-first world, your app is your brand's most important touchpoint. We build intuitive, high-performance applications that users love to engage with.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-zen-primary mb-1">4.8+</div>
                  <div className="text-sm text-zen-gray">Avg App Store Rating</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-zen-primary mb-1">99.9%</div>
                  <div className="text-sm text-zen-gray">Crash-Free Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Stages */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-zen-navy">Our Mobile Development Process</h2>
          <div className="space-y-8">
            {developmentStages.map((stage, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start group">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-zen-navy text-xl font-bold mr-6 shadow-sm border border-gray-100 group-hover:bg-zen-primary group-hover:text-white transition-colors duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-zen-navy">{stage.stage}</h3>
                  </div>
                </div>
                <div className="md:w-3/4 pl-0 md:pl-8 border-l-2 border-gray-100 md:border-l-0">
                  <div className="flex flex-wrap gap-3 ml-8 md:ml-0">
                    {stage.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-gray-100 text-zen-gray font-medium shadow-sm"
                      >
                        <FiCheckCircle className="mr-2 text-zen-primary" />
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
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
            <FiDownload className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free App Development Quote</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Share your app idea with us and get a detailed project estimate within 24 hours.
          </p>
          <div className="max-w-md mx-auto">
            <Link to="/contact" className="btn-primary w-full py-4 text-lg justify-center flex">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;