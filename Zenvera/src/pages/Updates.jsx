import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const Updates = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Frontend-only subscription simulation
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
            setEmail('');
        }
    };

    const updates = [
        {
            version: 'Upcoming',
            date: 'March 2026',
            title: 'Design-to-Code Accelerator',
            description: 'A new proprietary tool we are building to cut development time by 40% for our clients by automatically converting Figma designs to clean React code.',
            type: 'roadmap'
        },
        {
            version: 'New Service',
            date: 'February 10, 2026',
            title: 'AI Integration Consulting',
            description: 'Officially launching our dedicated AI practice to help enterprise clients integrate LLMs and machine learning into their workflows.',
            type: 'release'
        },
        {
            version: 'Portfolio Update',
            date: 'January 20, 2026',
            title: 'FinTech Solution Launch',
            description: 'Successfully deployed a secure payment gateway integration for a major banking client, now available as a case study.',
            type: 'update'
        },
        {
            version: 'v2.0',
            date: 'January 1, 2026',
            title: 'Zenvera Brand Refresh',
            description: 'Launched our new website and visual identity to better reflect our status as a premium software agency.',
            type: 'major'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gradient opacity-10 blur-3xl rounded-l-full"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zen-navy">Agency Updates & Roadmap</h1>
                    <p className="text-xl text-zen-gray max-w-2xl mx-auto">Track our growth, new service offerings, and the technology we're building.</p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-white relative">
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

                    {updates.map((update, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content */}
                            <div className="flex-1 md:w-1/2 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-zen-primary/30 transition-all hover:-translate-y-1">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider
                                    ${update.type === 'major' ? 'bg-purple-100 text-purple-600' :
                                        update.type === 'release' ? 'bg-green-100 text-green-600' :
                                            update.type === 'roadmap' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {update.version}
                                </span>
                                <h3 className="text-xl font-bold text-zen-navy mb-2">{update.title}</h3>
                                <p className="text-zen-gray mb-4 leading-relaxed">{update.description}</p>
                                <span className="text-sm font-medium text-gray-400 block border-t border-gray-100 pt-3">{update.date}</span>
                            </div>

                            {/* Timeline Node */}
                            <div className="md:w-0 relative flex items-center justify-center">
                                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-zen-primary shadow-md z-10"></div>
                            </div>

                            {/* Spacer for alternate detailing */}
                            <div className="flex-1 md:w-1/2 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-zen-light border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="bg-zen-navy rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-gradient opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                            <p className="text-gray-300 mb-8 max-w-lg mx-auto">Get the latest insights on software trends, agency updates, and tech tips delivered to your inbox.</p>

                            {subscribed ? (
                                <div className="bg-green-500/20 text-green-200 border border-green-500/30 px-6 py-4 rounded-xl flex items-center justify-center gap-2">
                                    ✓ Subscribed successfully!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your work email"
                                            className="w-full pl-12 pr-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-zen-primary shadow-inner bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm"
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary py-4 px-8 shadow-lg shadow-black/20 whitespace-nowrap">
                                        Subscribe Now
                                    </button>
                                </form>
                            )}
                            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Updates;
