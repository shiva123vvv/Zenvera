import React from 'react';
import ServiceCard from './ServiceCard';
import { FiCode, FiSmartphone, FiCpu } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="text-3xl" />,
      title: 'Web Development',
      description: 'Scalable, responsive web applications that drive business growth and engage users effectively.',
      link: '/services/web-development',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android with seamless user experiences.',
      link: '/services/mobile-app-development',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: 'Software Solutions',
      description: 'Custom software and IT solutions tailored to solve complex business challenges efficiently.',
      link: '/services/software-solutions',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;