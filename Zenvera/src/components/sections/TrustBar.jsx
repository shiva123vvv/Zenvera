import React from 'react';
import { FiAward, FiShield, FiGlobe, FiUsers } from 'react-icons/fi';

const TrustBar = () => {
  const stats = [
    { icon: <FiGlobe />, value: '50+', label: 'Projects Delivered' },
    { icon: <FiUsers />, value: '30+', label: 'Happy Clients' },
    { icon: <FiAward />, value: '100%', label: 'Client Satisfaction' },
    { icon: <FiShield />, value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zen-teal bg-opacity-10 text-zen-teal mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-zen-navy mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;