import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const CaseStudyCard = ({ client, challenge, solution, results, category }) => {
  return (
    <div className="case-study-card group">
      {/* Category Badge with Gradient */}
      <div className="relative p-6 bg-gradient-to-br from-zen-navy to-blue-900 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full">
            {category}
          </span>
          <div className="w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
            <FiTrendingUp className="text-2xl text-green-400" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2">{client}</h3>

        {/* Decorative gradient line */}
        <div className="w-20 h-1 bg-gradient-to-r from-zen-primary to-zen-accent rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        {/* Challenge */}
        <div className="group/section">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-gradient-to-b from-zen-primary to-zen-accent rounded-full"></div>
            <h4 className="font-bold text-gray-800">Challenge</h4>
          </div>
          <p className="text-gray-600 pl-3 leading-relaxed">{challenge}</p>
        </div>

        {/* Solution */}
        <div className="group/section">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-gradient-to-b from-zen-primary to-zen-accent rounded-full"></div>
            <h4 className="font-bold text-gray-800">Solution</h4>
          </div>
          <p className="text-gray-600 pl-3 leading-relaxed">{solution}</p>
        </div>

        {/* Results with Premium Styling */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-5 border border-green-200/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle className="text-green-600 text-xl" />
              <h4 className="font-bold text-green-800">Results</h4>
            </div>
            <p className="text-green-900 font-semibold pl-7">{results}</p>
          </div>
        </div>

        {/* CTA Link */}
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-zen-primary font-bold group/link hover:gap-3 transition-all duration-300 pt-2"
        >
          <span>View Full Case Study</span>
          <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;