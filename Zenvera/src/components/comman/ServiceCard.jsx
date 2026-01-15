import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon, title, description, link, color }) => {
  return (
    <div className="service-card bg-white group">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zen-primary/5 via-transparent to-zen-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container with Gradient */}
        <div className="icon-container mb-6">
          <div className="text-3xl">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-zen-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link with Arrow Animation */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-zen-primary font-semibold group/link hover:gap-3 transition-all duration-300"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;