import React from 'react';
import { FiSearch, FiBookOpen, FiMessageCircle, FiHelpCircle } from 'react-icons/fi';

const HelpCenter = () => {
    return (
        <div className="animate-fade-in">
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6 text-zen-navy">How can we help you?</h1>
                    <div className="max-w-2xl mx-auto relative">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        <input type="text" placeholder="Search for answers..." className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg border-none outline-none ring-2 ring-transparent focus:ring-zen-primary transition-all" />
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="feature-card text-center cursor-pointer hover:border-zen-primary transition-colors">
                        <div className="icon-box bg-zen-light text-zen-primary mx-auto"><FiBookOpen /></div>
                        <h3 className="text-xl font-bold mb-2">Documentation</h3>
                        <p className="text-zen-gray">Detailed guides and API references for developers.</p>
                    </div>
                    <div className="feature-card text-center cursor-pointer hover:border-zen-primary transition-colors">
                        <div className="icon-box bg-zen-light text-zen-primary mx-auto"><FiMessageCircle /></div>
                        <h3 className="text-xl font-bold mb-2">Community Forum</h3>
                        <p className="text-zen-gray">Connect with other users and share solutions.</p>
                    </div>
                    <div className="feature-card text-center cursor-pointer hover:border-zen-primary transition-colors">
                        <div className="icon-box bg-zen-light text-zen-primary mx-auto"><FiHelpCircle /></div>
                        <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
                        <p className="text-zen-gray">Step-by-step video guides for visual learners.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-zen-navy">Popular Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a href="#" className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all flex items-start group">
                            <span className="text-zen-primary mt-1 mr-3 text-lg">#</span>
                            <div>
                                <h3 className="font-bold text-zen-navy group-hover:text-zen-primary transition-colors">Getting Started with Zenvera</h3>
                                <p className="text-sm text-zen-gray mt-1">Learn the basics of setting up your account and workspace.</p>
                            </div>
                        </a>
                        <a href="#" className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all flex items-start group">
                            <span className="text-zen-primary mt-1 mr-3 text-lg">#</span>
                            <div>
                                <h3 className="font-bold text-zen-navy group-hover:text-zen-primary transition-colors">Managing Team Permissions</h3>
                                <p className="text-sm text-zen-gray mt-1">How to add members and assign roles used in your organization.</p>
                            </div>
                        </a>
                        <a href="#" className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all flex items-start group">
                            <span className="text-zen-primary mt-1 mr-3 text-lg">#</span>
                            <div>
                                <h3 className="font-bold text-zen-navy group-hover:text-zen-primary transition-colors">API Authentication Guide</h3>
                                <p className="text-sm text-zen-gray mt-1">Securely generate and manage API keys for your applications.</p>
                            </div>
                        </a>
                        <a href="#" className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all flex items-start group">
                            <span className="text-zen-primary mt-1 mr-3 text-lg">#</span>
                            <div>
                                <h3 className="font-bold text-zen-navy group-hover:text-zen-primary transition-colors">Billing and Subscription Reports</h3>
                                <p className="text-sm text-zen-gray mt-1">Understanding your monthly invoice and viewing usage stats.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zen-light">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6 text-zen-navy">Still can't find what you're looking for?</h2>
                    <p className="text-zen-gray mb-10">Our support team is always here to help.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"><FiMessageCircle /></div>
                            <h4 className="font-bold text-lg mb-2">Live Chat</h4>
                            <p className="text-sm text-gray-500 mb-6">Available Mon-Fri, 9am-6pm</p>
                            <button className="btn-primary w-full">Start Chat</button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1">
                            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"><FiBookOpen /></div>
                            <h4 className="font-bold text-lg mb-2">Submit a Ticket</h4>
                            <p className="text-sm text-gray-500 mb-6">We'll respond within 24 hours</p>
                            <button className="btn-secondary w-full">Create Ticket</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
