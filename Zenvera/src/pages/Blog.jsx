import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiArrowRight, FiSearch, FiFilter, FiTag, FiX } from 'react-icons/fi';
import { blogPosts, categories, popularTags } from '../data/blogPosts'; // Import shared data
import SEO from '../components/comman/SEO';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState(null); // Track active tag filter
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // 1. Category Filter
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

      // 2. Search Filter
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      // 3. Tag Filter
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true;

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, activeTag]);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handlers
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveTag(null); // Reset tag when changing category
    setCurrentPage(1);
  };

  const handleTagClick = (tag, e) => {
    e.preventDefault();
    setActiveTag(tag === activeTag ? null : tag); // Toggle tag
    setActiveCategory('All'); // Reset category when searching by tag (optional UX decision)
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setActiveTag(null);
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="animate-fade-in bg-zen-light min-h-screen">
      <SEO
        title="Insights & Blog | Zenvera"
        description="Stay updated with the latest trends, insights, and best practices in technology and digital transformation."
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32 text-center relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-zen-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zen-accent opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-md border border-white/60 rounded-full text-zen-primary font-bold text-sm mb-6 shadow-sm">
            THOUGHT LEADERSHIP
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy tracking-tight">
            Insights & <span className="text-transparent bg-clip-text bg-primary-gradient">Perspectives</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-2xl mx-auto leading-relaxed">
            Expert analysis, deep dives into technology trends, and practical guides for digital transformation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main Content Area */}
            <div className="lg:w-2/3">

              {/* Desktop Filters (Categories) */}
              <div className="hidden lg:flex flex-wrap gap-2 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${category === activeCategory
                        ? 'bg-primary-gradient text-white shadow-lg shadow-zen-primary/25 transform -translate-y-0.5'
                        : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 hover:text-zen-primary'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Active Filter Indicators (Mobile/Tag context) */}
              {(activeTag || searchQuery || activeCategory !== 'All') && (
                <div className="flex items-center gap-3 mb-8 lg:hidden">
                  <span className="text-sm font-bold text-zen-navy">Active Filters:</span>
                  <button onClick={clearFilters} className="text-sm text-red-500 font-medium flex items-center hover:underline">
                    <FiX className="mr-1" /> Clear All
                  </button>
                </div>
              )}

              {/* Blog Grid */}
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full border border-gray-100/50">
                      {/* Image Placeholder area - could be actual image */}
                      <div className="h-48 bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img
                          src={post.imagePath}
                          alt={post.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Zenvera+Insights'; }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-zen-primary text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                          <span className="flex items-center"><FiCalendar className="mr-1" /> {post.date}</span>
                          <span className="flex items-center"><FiClock className="mr-1" /> {post.readTime}</span>
                        </div>

                        <Link to={`/insights/${post.slug}`} className="block mb-3">
                          <h2 className="text-xl font-bold text-zen-navy group-hover:text-zen-primary transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed flex-1">
                          {post.excerpt}
                        </p>

                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 mr-2">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-zen-navy">{post.author}</span>
                          </div>
                          <Link
                            to={`/insights/${post.slug}`}
                            className="inline-flex items-center text-zen-primary font-bold text-sm hover:gap-2 transition-all"
                          >
                            Read <FiArrowRight className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-zen-navy mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-6">We couldn't find any articles matching your search or filters.</p>
                  <button onClick={clearFilters} className="btn-secondary">
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-16">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-200 hover:bg-gray-50 hover:text-zen-primary text-gray-600'}`}
                  >
                    ←
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${currentPage === index + 1
                          ? 'bg-primary-gradient text-white shadow-lg shadow-zen-primary/30 font-bold'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-zen-primary'
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-200 hover:bg-gray-50 hover:text-zen-primary text-gray-600'}`}
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">

              {/* Search Widget */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-zen-navy flex items-center">
                  <FiSearch className="mr-2 text-zen-primary" /> Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    placeholder="Search insights..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Mobile Categories (Dropdown style or simplified) - Actually the main filters handle this, but sidebar can have additional stats */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:hidden">
                <h3 className="text-lg font-bold mb-4 text-zen-navy">Categories</h3>
                <select
                  value={activeCategory}
                  onChange={(e) => handleCategoryClick(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zen-primary/50 outline-none"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>


              {/* Popular Tags Widget */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-zen-navy flex items-center">
                  <FiTag className="mr-2 text-zen-primary" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => handleTagClick(tag, e)}
                      className={`inline-block px-3 py-1.5 rounded-lg text-sm transition-all ${activeTag === tag
                          ? 'bg-zen-primary text-white shadow-md'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-zen-primary'
                        }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-zen-navy rounded-2xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-gradient opacity-20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">Subscribe to Zenvera</h3>
                  <p className="text-sm mb-6 text-gray-300 leading-relaxed">Get the latest technology insights and updates delivered weekly to your inbox.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl text-zen-navy outline-none focus:ring-2 focus:ring-zen-primary border border-transparent focus:border-white/20 transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full btn-primary shadow-lg shadow-zen-primary/30"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 mt-4 text-center">No spam, unsubscribe at any time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;