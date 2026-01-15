import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiShoppingBag, FiActivity, FiTruck, FiBook, FiGlobe } from 'react-icons/fi';

const Solutions = () => {
    const industries = [
        {
            icon: <FiBriefcase />,
            name: 'Corporate',
            description: 'Professional websites and internal tools for enterprises.'
        },
        {
            icon: <FiShoppingBag />,
            name: 'E-Commerce',
            description: 'Online stores with secure payment gateways and inventory management.'
        },
        {
            icon: <FiActivity />,
            name: 'Healthcare',
            description: 'HIPAA-compliant platforms for hospitals and clinics.'
        },
        {
            icon: <FiTruck />,
            name: 'Logistics',
            description: 'Tracking systems and fleet management solutions.'
        },
        {
            icon: <FiBook />,
            name: 'Education',
            description: 'LMS platforms and student portals for schools and universities.'
        },
        {
            icon: <FiGlobe />,
            name: 'Travel',
            description: 'Booking engines and travel agency management systems.'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
                        <span className="text-sm font-medium text-zen-navy">Industry Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
                        Tailored for <span className="text-transparent bg-clip-text bg-primary-gradient">Your Industry</span>
                    </h1>
                    <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
                        We understand the unique challenges of different sectors and provide specialized solutions to address them.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6 text-2xl">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zen-navy">{industry.name}</h3>
                                <p className="text-zen-gray mb-6">{industry.description}</p>
                                <ul className="space-y-2 mb-6 text-sm text-zen-gray">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Custom implementations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Industry compliance</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Scalable architecture</li>
                                </ul>
                                <div>
                                    <Link to="/contact" className="text-zen-primary font-semibold hover:underline flex items-center gap-1 group">
                                        Learn more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-zen-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 opacity-50"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zen-navy">Why Partners Choose Zenvera</h2>
                        <p className="text-zen-gray max-w-2xl mx-auto">We don't just build software; we engineer business success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"><FiActivity /></div>
                            <h3 className="text-xl font-bold mb-3 text-zen-navy">Performance First</h3>
                            <p className="text-zen-gray">Optimized for speed and efficiency to ensure your users have the seamless experience they deserve.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"><FiBriefcase /></div>
                            <h3 className="text-xl font-bold mb-3 text-zen-navy">Business Centric</h3>
                            <p className="text-zen-gray">Our solutions are designed with your bottom line in mind, focusing on ROI and business growth.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"><FiShoppingBag /></div>
                            <h3 className="text-xl font-bold mb-3 text-zen-navy">Future Proof</h3>
                            <p className="text-zen-gray">Built with modern technology stacks that scale with your business as it grows and evolves.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section-padding bg-zen-navy text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Our Approach to <br />
                                <span className="text-transparent bg-clip-text bg-primary-gradient">Digital Excellence</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                We believe that great software is born from a deep understanding of the problem space. Our process is collaborative, transparent, and iterative.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-zen-primary flex-shrink-0">01</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Discovery & Strategy</h4>
                                        <p className="text-gray-400">We start by listening. We dive deep into your business goals, user needs, and market landscape.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-zen-primary flex-shrink-0">02</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Design & Prototyping</h4>
                                        <p className="text-gray-400">We visualize the solution with wireframes and interactive prototypes to ensure alignment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-zen-primary flex-shrink-0">03</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Agile Development</h4>
                                        <p className="text-gray-400">Our engineers build robust, scalable code in sprints, keeping you involved at every step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
                            <div className="absolute top-4 right-4 text-6xl text-white/5 font-bold">AGILE</div>
                            <div className="space-y-6 relative z-10">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-300">Project Quality</span>
                                        <span className="text-zen-primary font-bold">99.9%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="w-[99.9%] h-full bg-primary-gradient rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-300">On-Time Delivery</span>
                                        <span className="text-zen-primary font-bold">100%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="w-full h-full bg-primary-gradient rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-300">Client Satisfaction</span>
                                        <span className="text-zen-primary font-bold">5.0/5</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="w-full h-full bg-primary-gradient rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-zen-light rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 absolute-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to transform your business?</h2>
                        <p className="text-zen-gray text-lg mb-10 max-w-2xl mx-auto">Let's discuss how we can build the perfect solution for your industry needs.</p>
                        <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4 shadow-xl shadow-zen-primary/40">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
