import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$2,999',
            description: 'Perfect for small businesses looking to establish a digital presence.',
            features: [
                'Custom Website Design',
                'Mobile Responsive',
                'Basic SEO Setup',
                'Contact Form Integration',
                '1 Month Support',
                'Standard Performance'
            ],
            notIncluded: [
                'E-commerce Functionality',
                'Custom Web Application',
                'Advanced Analytics',
                'Priority Support'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Business',
            price: '$5,999',
            description: 'Comprehensive solution for growing companies needing more power.',
            features: [
                'Everything in Starter',
                'CMS Integration',
                'Advanced SEO Optimization',
                'Newsletter Integration',
                '3 Months Support',
                'High Performance Optimization',
                'Blog Setup'
            ],
            notIncluded: [
                'Custom Web Application',
                'Priority Support'
            ],
            cta: 'Choose Business',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Tailored solutions for large organizations with complex requirements.',
            features: [
                'Everything in Business',
                'Custom Web Application',
                'E-commerce Functionality',
                'API Integrations',
                '12 Months Support',
                'Dedicated Project Manager',
                '24/7 Priority Support',
                'Cloud Infrastructure Setup'
            ],
            notIncluded: [],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
                        <span className="text-sm font-medium text-zen-navy">Transparent Pricing</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
                        Invest in Your <span className="text-transparent bg-clip-text bg-primary-gradient">Growth</span>
                    </h1>
                    <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
                        Clear, transparent pricing packages designed to match your business stage and goals. No hidden fees.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-zen-primary shadow-xl scale-105 z-10' : 'border-gray-100 shadow-soft hover:shadow-xl hover:-translate-y-1'} transition-all duration-300 flex flex-col`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zen-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-zen-primary/30">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-zen-navy mb-2">{plan.name}</h3>
                                    <div className="text-4xl font-bold text-zen-primary mb-2">{plan.price}</div>
                                    <p className="text-zen-gray text-sm">{plan.description}</p>
                                </div>

                                <div className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <FiCheck className="text-zen-accent mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature, idx) => (
                                        <div key={idx} className="flex items-start opacity-50">
                                            <FiX className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-500 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        to="/contact"
                                        className={`w-full block text-center py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-primary-gradient text-white shadow-lg hover:shadow-zen-primary/30' : 'bg-gray-50 text-zen-navy hover:bg-gray-100 border border-gray-200'}`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-zen-light rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-zen-navy mb-4">Need a Custom Solution?</h3>
                        <p className="text-zen-gray max-w-2xl mx-auto mb-8">
                            We understand that every business is unique. If our standard packages don't fit your needs, let's talk about a custom quote tailored specifically for you.
                        </p>
                        <Link to="/contact" className="btn-primary">
                            Get a Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="section-padding bg-zen-light">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-zen-navy mb-2">Do you require a deposit?</h4>
                            <p className="text-zen-gray">Yes, generally we require a 50% deposit to start the project, with the remaining balance due upon completion and approval.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-zen-navy mb-2">How long does a typical project take?</h4>
                            <p className="text-zen-gray">A standard brochure website typically takes 4-6 weeks. Custom applications and more complex projects can take 3-6 months depending on requirements.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-zen-navy mb-2">Do you offer ongoing maintenance?</h4>
                            <p className="text-zen-gray">Yes! We offer several maintenance packages to ensure your website remains secure, up-to-date, and performing optimally.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
