import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring the latest trends in web development including AI integration, PWAs, and performance optimization techniques.',
      category: 'Web Development',
      author: 'Alex Chen',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement to protect user data and prevent breaches.',
      category: 'Mobile Development',
      author: 'Sarah Johnson',
      date: 'Dec 10, 2023',
      readTime: '4 min read',
      image: '🔒'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies for Enterprises',
      excerpt: 'A comprehensive guide to successful cloud adoption and migration for large organizations.',
      category: 'Software Solutions',
      author: 'Michael Rodriguez',
      date: 'Dec 5, 2023',
      readTime: '6 min read',
      image: '☁️'
    },
    {
      id: 4,
      title: 'UI/UX Design Principles for Better Conversion',
      excerpt: 'How thoughtful design can significantly improve user engagement and conversion rates.',
      category: 'Design',
      author: 'Priya Sharma',
      date: 'Nov 28, 2023',
      readTime: '4 min read',
      image: '🎨'
    },
    {
      id: 5,
      title: 'Agile vs Waterfall: Choosing the Right Methodology',
      excerpt: 'A comparison of project management methodologies and when to use each for optimal results.',
      category: 'Project Management',
      author: 'David Kim',
      date: 'Nov 20, 2023',
      readTime: '5 min read',
      image: '📊'
    },
    {
      id: 6,
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'How low-code platforms are changing the software development landscape and who should use them.',
      category: 'Technology',
      author: 'Emma Wilson',
      date: 'Nov 15, 2023',
      readTime: '3 min read',
      image: '⚡'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'Software Solutions',
    'Design',
    'Project Management',
    'Technology'
  ];

  const popularTags = [
    'React', 'Node.js', 'Cloud', 'Security', 'UI/UX', 'AI', 'DevOps', 'Startup'
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            Insights & <span className="text-transparent bg-clip-text bg-primary-gradient">Blog</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${category === 'All' ? 'bg-primary-gradient text-white shadow-md' : 'bg-white text-zen-gray hover:bg-gray-100'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-gradient text-white shadow-sm">
                          {post.category}
                        </span>
                        <div className="text-3xl">{post.image}</div>
                      </div>

                      <h2 className="text-xl font-bold mb-3 text-zen-navy group-hover:text-zen-primary transition-colors">{post.title}</h2>
                      <p className="text-zen-gray mb-6 text-sm">{post.excerpt}</p>

                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <div className="flex items-center mr-4">
                          <FiUser className="mr-1 text-zen-primary" />
                          {post.author}
                        </div>
                        <div className="flex items-center mr-4">
                          <FiCalendar className="mr-1 text-zen-primary" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-1 text-zen-primary" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link
                        to={`/insights/${post.id}`}
                        className="inline-flex items-center text-zen-primary font-bold hover:gap-2 transition-all"
                      >
                        Read Article
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-zen-primary transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 rounded-lg bg-zen-primary text-white flex items-center justify-center shadow-lg shadow-zen-primary/30">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-zen-primary transition-colors">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-zen-primary transition-colors">
                  3
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-zen-primary transition-colors">
                  →
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-zen-navy">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search insights..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zen-primary focus:border-transparent outline-none"
                  />
                  <button className="absolute right-3 top-3 text-gray-400">
                    🔍
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-zen-navy">Categories</h3>
                <ul className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-zen-gray hover:text-zen-primary transition-colors"
                      >
                        <span>{category}</span>
                        <span className="text-sm bg-gray-50 px-2 py-1 rounded-full">12</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-zen-navy">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="inline-block px-3 py-1 bg-gray-50 text-zen-gray rounded-full text-sm hover:bg-zen-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-zen-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gradient opacity-20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                  <p className="text-sm mb-6 text-gray-300">Get the latest insights delivered to your inbox.</p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-zen-navy outline-none focus:ring-2 focus:ring-zen-primary"
                    />
                    <button
                      type="submit"
                      className="w-full btn-primary shadow-lg shadow-zen-primary/30"
                    >
                      Subscribe
                    </button>
                  </form>
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