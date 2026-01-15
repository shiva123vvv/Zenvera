import React, { useState } from 'react';
import CaseStudyCard from '../components/comman/CaseStudyCard';
import { FiFilter, FiSearch, FiDownload, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/comman/SEO';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 items



  // Filter Logic
  const filteredStudies = caseStudies.filter((study) => {
    const matchesFilter = activeFilter === 'All' || study.category === activeFilter;
    const matchesSearch =
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.solution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };



  const filters = ['All', 'Finance', 'Healthcare', 'Retail', 'Logistics', 'Education', 'Technology'];

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
      <SEO
        title="Case Studies"
        description="See how Zenvera has helped businesses transform with custom software, web, and mobile app solutions."
      />
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
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-primary-gradient text-white shadow-md shadow-zen-primary/20' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all w-full md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 bg-zen-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-zen-navy text-center">Featured Success Stories</h2>
          <div className="flex flex-col gap-24">

            {/* Fintech Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full mb-4">FINTECH</div>
                <h3 className="text-3xl font-bold mb-4 text-zen-navy">NeoBank Dashboard Reimagined</h3>
                <p className="text-zen-gray mb-6">A complete overhaul of the user experience for a leading digital bank, focusing on clarity, trust, and speed.</p>
                <div className="flex gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">40%</div>
                    <div className="text-xs text-gray-500">Faster Transactions</div>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">1M+</div>
                    <div className="text-xs text-gray-500">Monthly Users</div>
                  </div>
                </div>
                <Link to="/case-studies/neobank-dashboard-reimagined" className="text-zen-primary font-bold hover:gap-2 flex items-center gap-1 transition-all">View Case Study <FiArrowRight /></Link>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src="/src/assets/case_study_fintech.png" alt="Fintech Dashboard" className="relative rounded-2xl shadow-xl w-full hover:scale-[1.02] transition-transform duration-500 border border-gray-100" />
              </div>
            </div>

            {/* Health Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1 relative group">
                <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src="/src/assets/case_study_health.png" alt="Health App" className="relative rounded-2xl shadow-xl w-full hover:scale-[1.02] transition-transform duration-500 border border-gray-100" />
              </div>
              <div className="order-2">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full mb-4">HEALTHCARE</div>
                <h3 className="text-3xl font-bold mb-4 text-zen-navy">Patient-First Portal</h3>
                <p className="text-zen-gray mb-6">Empowering patients with easy access to their medical records, appointments, and doctor communication.</p>
                <div className="flex gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">60%</div>
                    <div className="text-xs text-gray-500">Admin Reduction</div>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">98%</div>
                    <div className="text-xs text-gray-500">Patient Satisfaction</div>
                  </div>
                </div>
                <Link to="/case-studies/patient-first-portal" className="text-zen-primary font-bold hover:gap-2 flex items-center gap-1 transition-all">View Case Study <FiArrowRight /></Link>
              </div>
            </div>

            {/* Ecommerce Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full mb-4">E-COMMERCE</div>
                <h3 className="text-3xl font-bold mb-4 text-zen-navy">Fashion Retail Mobile App</h3>
                <p className="text-zen-gray mb-6">A vibrant, high-energy shopping experience designed to engage Gen Z shoppers and drive conversions.</p>
                <div className="flex gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">75%</div>
                    <div className="text-xs text-gray-500">Faster Load Times</div>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zen-primary">2x</div>
                    <div className="text-xs text-gray-500">Mobile Conversions</div>
                  </div>
                </div>
                <Link to="/case-studies/fashion-retail-mobile-app" className="text-zen-primary font-bold hover:gap-2 flex items-center gap-1 transition-all">View Case Study <FiArrowRight /></Link>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src="/src/assets/case_study_ecommerce.png" alt="Ecommerce App" className="relative rounded-2xl shadow-xl w-full hover:scale-[1.02] transition-transform duration-500 border border-gray-100" />
              </div>
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
                {filteredStudies.length > 0 ? (
                  filteredStudies.slice(0, visibleCount).map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
                ) : (
                  <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                    <div className="text-6xl text-gray-200 mb-4 mx-auto w-fit"><FiSearch /></div>
                    <h3 className="text-xl font-bold text-zen-navy mb-2">No Case Studies Found</h3>
                    <p className="text-zen-gray">Try adjusting your filters or search terms.</p>
                    <button
                      onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                      className="mt-4 text-zen-primary font-bold hover:underline"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Load More */}
              {visibleCount < filteredStudies.length && (
                <div className="text-center mt-12">
                  <button onClick={handleLoadMore} className="btn-secondary">
                    Load More Case Studies
                  </button>
                </div>
              )}
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