import React from 'react';
import CaseStudyCard from '../components/comman/CaseStudyCard';
import { FiFilter, FiSearch, FiDownload } from 'react-icons/fi';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'FinTech Startup',
      challenge: 'Needed a scalable payment platform in 3 months to handle increasing transaction volume',
      solution: 'Built a React/Node.js microservices architecture with AWS infrastructure and real-time analytics',
      results: '40% faster transactions, 99.9% uptime, handled 1M+ transactions/month',
      category: 'Web Development'
    },
    {
      client: 'Healthcare Provider',
      challenge: 'Legacy system causing operational delays and patient data management issues',
      solution: 'Modernized platform with cloud migration, HIPAA-compliant database, and mobile access',
      results: '60% reduction in processing time, improved data accuracy, better patient experience',
      category: 'Software Solutions'
    },
    {
      client: 'E-commerce Retailer',
      challenge: 'Slow website performance leading to high bounce rates and lost sales',
      solution: 'Complete frontend optimization, PWA implementation, and CDN integration',
      results: '75% faster page loads, 40% increase in conversions, mobile sales doubled',
      category: 'Web Development'
    },
    {
      client: 'Logistics Company',
      challenge: 'Inefficient tracking system causing delivery delays and customer complaints',
      solution: 'Custom mobile app with real-time GPS tracking, driver management, and customer portal',
      results: '30% faster deliveries, 50% reduction in customer complaints, improved route optimization',
      category: 'Mobile App Development'
    },
    {
      client: 'Education Platform',
      challenge: 'Unable to handle concurrent users during peak enrollment periods',
      solution: 'Scalable cloud architecture with load balancing and auto-scaling capabilities',
      results: 'Handled 10K+ concurrent users, 99.5% uptime, reduced infrastructure costs by 40%',
      category: 'Software Solutions'
    },
    {
      client: 'Media Company',
      challenge: 'Content management system too complex for non-technical staff',
      solution: 'Custom CMS with intuitive interface, automated workflows, and integrated analytics',
      results: '80% faster content publishing, reduced training time by 60%, increased engagement',
      category: 'Web Development'
    }
  ];

  const filters = ['All', 'Web Development', 'Mobile App Development', 'Software Solutions', 'Healthcare', 'Finance', 'Retail'];

  const industries = [
    { name: 'Finance', count: 4 },
    { name: 'Healthcare', count: 3 },
    { name: 'Retail', count: 5 },
    { name: 'Education', count: 2 },
    { name: 'Logistics', count: 3 },
    { name: 'Technology', count: 6 }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Case <span className="text-transparent bg-clip-text bg-primary-gradient">Studies</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Explore how we've helped businesses across industries achieve digital transformation and drive measurable results.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <FiFilter className="text-zen-primary mr-2" />
              <span className="text-zen-navy font-medium">Filter by:</span>
              <div className="flex flex-wrap gap-2 ml-4">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'All' ? 'bg-primary-gradient text-white shadow-md shadow-zen-primary/20' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all w-full md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-secondary">
                  Load More Case Studies
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Industry Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-heading font-bold mb-6 text-zen-navy">Industries We Serve</h3>
                <div className="space-y-4">
                  {industries.map((industry) => (
                    <div key={industry.name} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-gray-600 group-hover:text-zen-primary transition-colors">{industry.name}</span>
                      <span className="text-sm font-semibold bg-gray-50 text-gray-500 px-3 py-1 rounded-full group-hover:bg-zen-primary/10 group-hover:text-zen-primary transition-colors">
                        {industry.count} projects
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Report */}
              <div className="bg-zen-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-gradient opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-4 backdrop-blur-sm border border-white/20">
                    <FiDownload className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Download Success Report</h3>
                  <p className="text-sm mb-6 text-gray-300">Get detailed insights into our project successes and client results.</p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-zen-navy focus:outline-none focus:ring-2 focus:ring-zen-primary"
                    />
                    <button
                      type="submit"
                      className="w-full btn-primary shadow-lg shadow-zen-primary/30"
                    >
                      Download Report
                    </button>
                  </form>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-8 shadow-glass border border-white/60 relative">
                <div className="text-6xl text-zen-primary/10 absolute top-4 left-6 font-serif">"</div>
                <p className="text-zen-gray italic mb-6 relative z-10 pt-4">
                  "Zenvera transformed our digital presence. Their team delivered exceptional results on time and within budget."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold text-sm mr-3">JS</div>
                  <div>
                    <div className="font-bold text-zen-navy">John Smith</div>
                    <div className="text-sm text-zen-gray">CEO, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Results Like These?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business achieve digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary"
            >
              Start Your Project
            </a>
            <a
              href="tel:+918012345678"
              className="px-8 py-3.5 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;