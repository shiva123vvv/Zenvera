import React, { useState } from 'react';
import { FiSearch, FiCode, FiLayers, FiZap, FiChevronDown, FiMail, FiPhone, FiFileText, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SEO from '../components/comman/SEO';

const HelpCenter = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Every project is unique, but a standard custom web application typically takes 8-12 weeks from discovery to launch. Mobile apps may take 12-16 weeks depending on complexity."
        },
        {
            question: "Do you provide post-launch maintenance?",
            answer: "Yes, we offer flexible support and maintenance packages. We ensure your software remains secure, up-to-date, and compatible with the latest technologies."
        },
        {
            question: "What technology stack do you use?",
            answer: "We are technology agnostic but specialize in the MERN stack (MongoDB, Express, React, Node.js), Next.js, and cloud ecosystems (AWS, Azure) for scalable enterprise solutions."
        },
        {
            question: "How do you handle project communication?",
            answer: "We use agile methodologies with weekly sprints. You'll have a dedicated project manager and access to our project management tools (Jira/Trello) for transparent progress tracking."
        }
    ];

    const popularArticles = [
        { title: "Our Development Process", desc: "A step-by-step guide to how we bring ideas to life.", link: "/about" },
        { title: "Engagement Models", desc: "Fixed Price and material or Dedicated Teams.", link: "/services" },
        { title: "Technical Requirements Guide", desc: "How to prepare your project scope for an accurate quote.", link: "/contact" },
        { title: "Security Protocols", desc: "How we ensure your intellectual property and data are safe.", link: "/privacy" },
        { title: "Client Onboarding Checklist", desc: "What we need from you to kickstart the project.", link: "/contact" }
    ];

    // Filter Logic
    const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredArticles = popularArticles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="animate-fade-in bg-zen-light min-h-screen">
            <SEO
                title="Help Center | Zenvera"
                description="Frequently asked questions and resources about our software development services."
            />

            {/* Hero Section */}
            <section className="bg-zen-navy pt-32 pb-24 lg:pt-40 lg:pb-32 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gradient opacity-10 blur-3xl rounded-l-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">How can we support your project?</h1>
                    <p className="text-xl text-gray-300 mb-10">Find answers about our services, processes, and technical capabilities.</p>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-primary-gradient rounded-2xl opacity-25 group-hover:opacity-50 blur transition duration-200"></div>
                        <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">
                            <FiSearch className="ml-6 text-gray-400 text-xl" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for services, technologies, or process info..."
                                className="w-full px-4 py-5 outline-none text-zen-navy placeholder-gray-400 text-lg"
                            />
                            <button className="bg-zen-primary text-white px-8 py-5 font-bold hover:bg-opacity-90 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Options Grid */}
            <section className="relative -mt-12 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer block">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-2xl">
                                <FiCode />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-zen-navy">Technical Support</h3>
                            <p className="text-zen-gray mb-4">For existing clients needing assistance with deployed applications.</p>
                            <span className="text-zen-primary font-bold text-sm flex items-center justify-center group-hover:gap-2 transition-all">Get Support <FiArrowRight className="ml-1" /></span>
                        </Link>
                        <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer block">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors text-2xl">
                                <FiLayers />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-zen-navy">Project Consultation</h3>
                            <p className="text-zen-gray mb-4">Questions about starting a new project or digital transformation.</p>
                            <span className="text-zen-primary font-bold text-sm flex items-center justify-center group-hover:gap-2 transition-all">Book Consultation <FiArrowRight className="ml-1" /></span>
                        </Link>
                        <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 group cursor-pointer block">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors text-2xl">
                                <FiZap />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-zen-navy">Partnership Inquiries</h3>
                            <p className="text-zen-gray mb-4">Information for potential technology partners and vendors.</p>
                            <span className="text-zen-primary font-bold text-sm flex items-center justify-center group-hover:gap-2 transition-all">Become a Partner <FiArrowRight className="ml-1" /></span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Popular Articles */}
                        <div className="lg:col-span-7">
                            <h2 className="text-2xl font-bold mb-8 text-zen-navy flex items-center">
                                <span className="w-2 h-8 bg-zen-primary rounded-full mr-3"></span>
                                Popular Guides
                            </h2>
                            <div className="space-y-4">
                                {filteredArticles.length > 0 ? filteredArticles.map((article, idx) => (
                                    <Link key={idx} to={article.link} className="flex items-start p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-zen-primary/30 transition-all group cursor-pointer">
                                        <div className="mt-1 mr-4 text-gray-300 group-hover:text-zen-primary transition-colors">
                                            <FiFileText size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zen-navy text-lg group-hover:text-zen-primary transition-colors mb-1">{article.title}</h3>
                                            <p className="text-zen-gray text-sm mb-2">{article.desc}</p>
                                            <span className="text-xs text-zen-primary font-bold uppercase tracking-wider group-hover:underline">Read Guide</span>
                                        </div>
                                    </Link>
                                )) : <p className="text-gray-500 italic">No guides found matching your search.</p>}
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-bold mb-8 text-zen-navy flex items-center">
                                <span className="w-2 h-8 bg-zen-accent rounded-full mr-3"></span>
                                Common Questions
                            </h2>
                            <div className="space-y-4">
                                {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-sm">
                                        <button
                                            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className={`font-bold transition-colors ${activeIndex === index ? 'text-zen-primary' : 'text-zen-navy'}`}>
                                                {faq.question}
                                            </span>
                                            <span className={`transform transition-transform duration-300 text-zen-primary ${activeIndex === index ? 'rotate-180' : ''}`}>
                                                <FiChevronDown />
                                            </span>
                                        </button>
                                        <div
                                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 py-4 opacity-100 border-t border-gray-50' : 'max-h-0 py-0 opacity-0'}`}
                                        >
                                            <p className="text-zen-gray text-sm leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                )) : <p className="text-gray-500 italic">No questions found matching your search.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6 text-zen-navy">Can't find what you're looking for?</h2>
                    <p className="text-zen-gray mb-10 text-lg">Our team is always available to discuss your specific needs.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="mailto:support@zenvera.com" className="bg-zen-light p-8 rounded-3xl border border-gray-100 flex-1 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm"><FiMail /></div>
                            <h4 className="font-bold text-xl mb-2 text-zen-navy">Email Support</h4>
                            <p className="text-sm text-zen-gray mb-6">For detailed technical inquiries.<br />support@zenvera.com</p>
                            <span className="btn-primary block w-full shadow-lg shadow-zen-primary/20">Send Email</span>
                        </a>
                        <a href="tel:+15551234567" className="bg-zen-light p-8 rounded-3xl border border-gray-100 flex-1 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm"><FiPhone /></div>
                            <h4 className="font-bold text-xl mb-2 text-zen-navy">Call Us</h4>
                            <p className="text-sm text-zen-gray mb-6">Speak directly with a representative.<br />Mon-Fri, 9am-6pm</p>
                            <span className="btn-secondary block w-full bg-white">Call Now</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
