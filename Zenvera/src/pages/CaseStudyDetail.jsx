import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import SEO from '../components/comman/SEO';
import { FiArrowLeft, FiCheckCircle, FiCpu, FiTarget, FiTrendingUp } from 'react-icons/fi';

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const study = caseStudies.find(s => s.slug === slug);

    useEffect(() => {
        if (!study) {
            // proper 404 handling or redirect could go here
            // for now, we just stay on the page or show a not found message
        }
    }, [study, navigate]);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-zen-light">
                <h2 className="text-3xl font-bold text-zen-navy mb-4">Case Study Not Found</h2>
                <Link to="/case-studies" className="btn-primary">Back to Case Studies</Link>
            </div>
        );
    }

    return (
        <div className="animate-fade-in bg-white">
            <SEO
                title={`${study.title} | Zenvera Case Studies`}
                description={study.challenge}
            />

            {/* Hero Section */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/case-studies" className="inline-flex items-center text-zen-gray hover:text-zen-primary mb-8 transition-colors font-medium">
                        <FiArrowLeft className="mr-2" /> Back to Case Studies
                    </Link>
                    <div className="inline-block px-4 py-1.5 bg-zen-primary/10 text-zen-primary font-bold rounded-full mb-6 text-sm">
                        {study.category.toUpperCase()}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-zen-navy max-w-4xl mx-auto leading-tight">
                        {study.title}
                    </h1>
                    <p className="text-xl text-zen-gray max-w-3xl mx-auto">
                        {study.client}
                    </p>
                </div>
            </section>

            {/* Main Image */}
            <section className="relative -mt-16 px-4 sm:px-6 lg:px-8 z-20 mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        {/* Fallback image if specific asset doesn't exist, using a placeholder logic or the actual image path */}
                        <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-auto object-cover max-h-[600px]"
                            onError={(e) => { e.target.src = 'https://placehold.co/1200x600?text=Case+Study+Image'; }}
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mr-4">
                                        <FiTarget className="text-2xl" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-zen-navy">The Challenge</h2>
                                </div>
                                <p className="text-lg text-zen-gray leading-relaxed">
                                    {study.challenge}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                        <FiCpu className="text-2xl" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-zen-navy">Our Solution</h2>
                                </div>
                                <p className="text-lg text-zen-gray leading-relaxed mb-6">
                                    {study.solution}
                                </p>
                                <div className="bg-zen-light p-8 rounded-2xl border border-gray-100">
                                    <p className="text-gray-700 italic">"{study.details}"</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mr-4">
                                        <FiTrendingUp className="text-2xl" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-zen-navy">Key Results</h2>
                                </div>
                                <p className="text-lg text-zen-gray leading-relaxed mb-8">
                                    {study.results}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {study.stats.map((stat, index) => (
                                        <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                            <div className="text-3xl font-bold text-zen-primary mb-2">{stat.value}</div>
                                            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Details */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                                <h3 className="text-xl font-bold text-zen-navy mb-6">Project Details</h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Client Industry</h4>
                                        <p className="font-medium text-zen-navy text-lg">{study.category}</p>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {study.technologies.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-100">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Services</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-gray-600">
                                                <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Strategy & Consulting
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> UI/UX Design
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> Development
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-6">
                                        <Link to="/contact" className="w-full btn-primary block text-center">
                                            Start Your Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Next Project Nav (Optional but nice) */}
            <section className="bg-zen-light py-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <Link to="/case-studies" className="text-zen-navy font-bold hover:text-zen-primary transition-colors">
                        &larr; Back to All Projects
                    </Link>
                    <Link to="/contact" className="text-zen-navy font-bold hover:text-zen-primary transition-colors">
                        Get a Quote &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetail;
