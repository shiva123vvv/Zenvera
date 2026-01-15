import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiShoppingBag, FiActivity, FiTruck, FiBook, FiGlobe, FiLayers, FiCode, FiCpu, FiCheck, FiAward, FiUsers, FiClock, FiPlus, FiMinus } from 'react-icons/fi';
import SEO from '../components/comman/SEO';

const Solutions = () => {

    const industries = [
        {
            icon: <FiBriefcase />,
            name: 'Enterprise Transformation',
            description: 'Scalable ERPs, CRMs, and internal tools designed to streamline complex corporate operations.',
            path: '/services/software-solutions'
        },
        {
            icon: <FiShoppingBag />,
            name: 'Next-Gen Commerce',
            description: 'High-performance e-commerce platforms with AI-driven recommendations and seamless checkout.',
            path: '/services/web-development'
        },
        {
            icon: <FiActivity />,
            name: 'HealthTech Innovation',
            description: 'Secure, HIPAA-compliant telemedicine and patient management systems for modern healthcare.',
            path: '/services/software-solutions'
        },
        {
            icon: <FiTruck />,
            name: 'Smart Logistics',
            description: 'Real-time fleet tracking, inventory management, and route optimization solutions.',
            path: '/services/software-solutions'
        },
        {
            icon: <FiBook />,
            name: 'EdTech Platforms',
            description: 'Interactive learning management systems (LMS) and virtual classrooms for global education.',
            path: '/services/software-solutions'
        },
        {
            icon: <FiGlobe />,
            name: 'Digital Travel',
            description: 'Robust booking engines and travel agency management systems connected to global GDS.',
            path: '/services/web-development'
        }
    ];

    const techCapabilities = [
        { title: 'Frontend Mastery', desc: 'Expertise in all modern frontend frameworks to build responsive, interactive, and user-friendly interfaces.' },
        { title: 'Backend Power', desc: 'Robust and scalable back-end solutions using the most suitable server-side languages and architectures.' },
        { title: 'Mobile First', desc: 'Development of high-performance native and cross-platform mobile applications for all devices.' },
        { title: 'Cloud Native', desc: 'Scalable cloud infrastructure deployment and management ensuring reliability and security.' }
    ];

    const faqs = [
        {
            question: 'How do you determine the right technology for our project?',
            answer: 'We conduct a thorough discovery phase to understand your business goals, user needs, and scalability requirements. Based on this, we recommend the most suitable tech stack that offers the best balance of performance, cost, and future-proofing.'
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'While we work across various sectors, we have deep expertise in FinTech, Healthcare, E-commerce, EdTech, and Logistics. Our team understands the specific compliance and operational challenges of these industries.'
        },
        {
            question: 'Do you provide post-launch support?',
            answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solution remains secure, up-to-date, and performs optimally. We act as your long-term technology partner.'
        },
        {
            question: 'Can you integrate with our existing systems?',
            answer: 'Absolutely. We specialize in API development and system integration. We can seamlessly connect your new solution with legacy systems, third-party services (CRMs, ERPs), and other digital tools.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="animate-fade-in">
            <SEO
                title="Industry Solutions"
                description="Tailored digital solutions for Healthcare, FinTech, E-Commerce, Logistics, and more."
            />
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
                        We understand the unique challenges of different sectors and provide specialized, scalable solutions to address them.
                    </p>
                </div>
            </section>

            {/* Global Impact Stats */}
            <section className="py-12 bg-zen-light border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-bold text-zen-primary mb-2 flex justify-center items-center gap-2">
                                <FiAward /> 50+
                            </div>
                            <p className="text-zen-gray font-medium">Enterprise Projects</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-zen-primary mb-2 flex justify-center items-center gap-2">
                                <FiUsers /> 98%
                            </div>
                            <p className="text-zen-gray font-medium">Client Retention</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-zen-primary mb-2 flex justify-center items-center gap-2">
                                <FiGlobe /> 15+
                            </div>
                            <p className="text-zen-gray font-medium">Countries Served</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-zen-primary mb-2 flex justify-center items-center gap-2">
                                <FiClock /> 5Y+
                            </div>
                            <p className="text-zen-gray font-medium">Industry Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6 text-2xl group-hover:bg-zen-primary group-hover:text-white transition-colors duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zen-navy">{industry.name}</h3>
                                <p className="text-zen-gray mb-6 leading-relaxed">{industry.description}</p>
                                <ul className="space-y-2 mb-6 text-sm text-zen-gray">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Custom implementations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Industry compliance</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zen-primary"></div>Scalable architecture</li>
                                </ul>
                                <div>
                                    <Link to={industry.path} className="text-zen-primary font-semibold hover:gap-2 flex items-center gap-1 group transition-all">
                                        Learn more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Delivery Methodology */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-zen-navy mb-4">How We Deliver Excellence</h2>
                        <p className="text-zen-gray max-w-2xl mx-auto">Our proven methodology ensures consistent, high-quality results tailored to your specific industry needs.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals and technical requirements.' },
                                { step: '02', title: 'Strategy', desc: 'Architecting a scalable solution aligned with your vision.' },
                                { step: '03', title: 'Development', desc: 'Agile execution using best-in-class technologies.' },
                                { step: '04', title: 'Growth', desc: 'Continuous optimization and support for long-term success.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-zen-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-zen-primary/30">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-zen-navy mb-2">{item.title}</h3>
                                    <p className="text-sm text-zen-gray">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* We Work In All Technologies - New Section */}
            <section className="py-24 bg-zen-navy text-white relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-gradient opacity-5 rounded-full blur-[100px] -mr-40 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zen-secondary opacity-5 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider mb-6 border border-white/20">
                                <FiLayers className="mr-1" /> Technology Agnostic
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">We Work Across <br /><span className="text-transparent bg-clip-text bg-primary-gradient">All Technologies</span></h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                We don't force your problem into a specific tech stack. Instead, we select the perfect tools for your unique requirements. We evaluate your business needs and implement the most effective technologies to ensure scalability, security, and performance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {techCapabilities.map((tech, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                                        <h4 className="font-bold text-lg mb-1">{tech.title}</h4>
                                        <p className="text-gray-400 text-sm">{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zen-primary/20 to-zen-secondary/20 rounded-2xl blur-xl transform rotate-3"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Our Engineering Philosophy</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-zen-primary/20 flex items-center justify-center text-zen-primary mr-4 flex-shrink-0">
                                            <FiCpu />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Performance First</h4>
                                            <p className="text-gray-400 text-sm mt-1">We optimize every line of code for maximum speed and efficiency, regardless of the language.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-zen-secondary/20 flex items-center justify-center text-zen-secondary mr-4 flex-shrink-0">
                                            <FiLayers />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Scalable Architecture</h4>
                                            <p className="text-gray-400 text-sm mt-1">Systems designed to grow with your business, utilizing cloud-native principles and microservices.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                                            <FiCode />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Clean Code Standards</h4>
                                            <p className="text-gray-400 text-sm mt-1">Maintainable, documented, and tested code that ensures long-term project health.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-zen-navy mb-4">Frequently Asked Questions</h2>
                        <p className="text-zen-gray">Common questions about our industry solutions and engagement model.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-5 text-left bg-white flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-bold text-zen-navy text-lg">{faq.question}</span>
                                    <span className={`text-zen-primary transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                                    </span>
                                </button>
                                <div
                                    className={`bg-zen-light transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                >
                                    <p className="text-zen-gray leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-zen-light rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-zen-navy">
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 absolute-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to transform your business?</h2>
                        <p className="text-zen-gray text-lg mb-10 max-w-2xl mx-auto">Let's discuss how we can build the perfect solution for your industry needs.</p>
                        <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4 shadow-xl shadow-zen-primary/40 text-white">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
