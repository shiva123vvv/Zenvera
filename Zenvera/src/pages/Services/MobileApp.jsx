import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiTablet, FiGlobe, FiCheckCircle, FiDownload, FiRefreshCw, FiBarChart } from 'react-icons/fi';

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

  const technologies = [
    { name: 'React Native', icon: '⚛️', category: 'Cross-platform' },
    { name: 'Flutter', icon: '🎯', category: 'Cross-platform' },
    { name: 'Swift', icon: '🦅', category: 'iOS' },
    { name: 'Kotlin', icon: '☕', category: 'Android' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    { name: 'AWS Amplify', icon: '☁️', category: 'Backend' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'Jenkins', icon: '⚙️', category: 'CI/CD' }
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

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Our Technology Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center group">
                <div className="w-24 h-24 rounded-3xl bg-gray-50 flex flex-col items-center justify-center mx-auto mb-4 group-hover:bg-zen-light transition-colors duration-300 border border-transparent group-hover:border-zen-primary/20">
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="text-xs font-bold text-zen-primary uppercase tracking-wider">{tech.category}</span>
                </div>
                <div className="font-bold text-zen-navy">{tech.name}</div>
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