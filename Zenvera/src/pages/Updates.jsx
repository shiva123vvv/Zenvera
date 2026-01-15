import React from 'react';

const Updates = () => {
    const updates = [
        {
            version: 'v2.0.0',
            date: 'January 7, 2026',
            title: 'Zenvera 2.0 Launch',
            description: 'Major platform overhaul with new design system, improved performance, and expanded service offerings.'
        },
        {
            version: 'v1.5.0',
            date: 'November 15, 2025',
            title: 'Mobile App Services',
            description: 'Introduced comprehensive mobile application development services for iOS and Android.'
        },
        {
            version: 'v1.0.0',
            date: 'January 7, 2025',
            title: 'Initial Release',
            description: 'Zenvera launched to help businesses achieve digital transformation.'
        }
    ];

    return (
        <div className="animate-fade-in">
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6 text-zen-navy">Product Updates</h1>
                    <p className="text-xl text-zen-gray max-w-2xl mx-auto">See what's new and how we're improving.</p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto space-y-12">
                    {updates.map((update, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-zen-primary/20 pb-8 last:pb-0">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zen-primary shadow-lg shadow-zen-primary/40"></div>
                            <div className="mb-2 flex items-center gap-3">
                                <span className="bg-zen-light text-zen-primary font-bold px-3 py-1 rounded-full text-sm">{update.version}</span>
                                <span className="text-zen-gray text-sm">{update.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-zen-navy mb-2">{update.title}</h3>
                            <p className="text-zen-gray">{update.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-20 bg-zen-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-zen-navy">Future Roadmap</h2>
                        <p className="text-zen-gray">What we're working on next.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 opacity-75">
                            <div className="text-xs font-bold text-zen-primary mb-2 uppercase tracking-wide">Q2 2026</div>
                            <h3 className="text-lg font-bold text-zen-navy mb-2">AI Design Assistant</h3>
                            <p className="text-sm text-zen-gray">Automated layout suggestions based on your content.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 opacity-75">
                            <div className="text-xs font-bold text-zen-primary mb-2 uppercase tracking-wide">Q3 2026</div>
                            <h3 className="text-lg font-bold text-zen-navy mb-2">Global CDN Expansion</h3>
                            <p className="text-sm text-zen-gray">New edge nodes in South America and Africa.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 opacity-75">
                            <div className="text-xs font-bold text-zen-primary mb-2 uppercase tracking-wide">Q4 2026</div>
                            <h3 className="text-lg font-bold text-zen-navy mb-2">Marketplace Launch</h3>
                            <p className="text-sm text-zen-gray">Buy and sell custom templates and plugins.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-zen-navy">Never Miss an Update</h2>
                    <p className="text-zen-gray mb-8">Subscribe to our changelog to get the latest improvements directly to your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-zen-primary" />
                        <button type="submit" className="btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Updates;
