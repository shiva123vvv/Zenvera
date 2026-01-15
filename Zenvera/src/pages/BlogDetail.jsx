import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/comman/SEO';
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiTag, FiShare2, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            // Could redirect or showing a not found state
            // navigate('/insights'); 
        }
    }, [post, navigate]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-zen-light">
                <h2 className="text-3xl font-bold text-zen-navy mb-4">Article Not Found</h2>
                <Link to="/insights" className="btn-primary">Back to Insights</Link>
            </div>
        );
    }

    // Calculate related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 2);

    return (
        <div className="animate-fade-in bg-white">
            <SEO
                title={`${post.title} | Zenvera Insights`}
                description={post.excerpt}
            />

            {/* Progress Bar (Optional - could add later) */}

            {/* Hero Section */}
            <section className="bg-zen-navy relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gradient opacity-10 blur-3xl rounded-l-full transform translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-zen-accent opacity-10 blur-2xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link to="/insights" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors font-medium">
                        <FiArrowLeft className="mr-2" /> Back to Insights
                    </Link>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm text-gray-300">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold">
                            {post.category}
                        </span>
                        <span className="flex items-center"><FiCalendar className="mr-2" /> {post.date}</span>
                        <span className="flex items-center"><FiClock className="mr-2" /> {post.readTime}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold text-lg mr-4 border-2 border-zen-navy">
                            {post.author.charAt(0)}
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold text-lg">{post.author}</div>
                            <div className="text-zen-primary text-sm">{post.authorRole}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative -mt-20 px-4 sm:px-6 lg:px-8 z-20 pb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white mb-12">
                        <img
                            src={post.imagePath}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                            onError={(e) => { e.target.src = 'https://placehold.co/1200x600?text=Insight+Image'; }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Article Body */}
                        <div className="lg:col-span-8">
                            <div
                                className="prose prose-lg prose-indigo max-w-none text-zen-gray font-sans"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <h4 className="flex items-center text-zen-navy font-bold mb-4">
                                    <FiTag className="mr-2 text-zen-primary" /> Related Tags
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-zen-primary hover:text-white transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Share & Related */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Share */}
                            <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 sticky top-32">
                                <h3 className="text-lg font-bold text-zen-navy mb-4 flex items-center">
                                    <FiShare2 className="mr-2 text-zen-primary" /> Share this Article
                                </h3>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                        <FiLinkedin />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                        <FiTwitter />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                        <FiFacebook />
                                    </button>
                                </div>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-zen-navy mb-4">Related Insights</h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map(related => (
                                            <div key={related.id} className="group">
                                                <Link to={`/insights/${related.slug}`} className="block">
                                                    <h4 className="font-bold text-zen-navy group-hover:text-zen-primary transition-colors mb-2 line-clamp-2">
                                                        {related.title}
                                                    </h4>
                                                </Link>
                                                <div className="text-xs text-gray-500 font-medium">{related.date}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-zen-light border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-zen-navy mb-6">Need help implementing these strategies?</h2>
                    <p className="text-xl text-zen-gray mb-8">
                        Our team of experts can help you transform these insights into actionable results for your business.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
