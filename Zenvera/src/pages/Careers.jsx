import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiBriefcase, FiHeart, FiZap, FiSmile, FiArrowRight, FiCheck, FiCode, FiPenTool, FiBarChart2 } from 'react-icons/fi';
import SEO from '../components/comman/SEO';

const Careers = () => {
    const [filter, setFilter] = useState('All');

    const benefits = [
        { icon: <FiHeart />, title: 'Health & Wellness', description: 'Comprehensive health coverage and mental health days.' },
        { icon: <FiClock />, title: 'Total Flexibility', description: 'Work from anywhere, anytime. We focus on results.' },
        { icon: <FiZap />, title: 'Top Gear', description: 'Latest MacBook Pros and home office stipends.' },
        { icon: <FiSmile />, title: 'Team Retreats', description: 'Quarterly meetups in exotic locations.' },
    ];

    const jobs = [
        {
            id: 1,
            title: 'Senior React Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Lead our frontend initiatives and build scalable React applications.',
            icon: <FiCode />
        },
        {
            id: 2,
            title: 'Full Stack Engineer (MERN)',
            department: 'Engineering',
            location: 'Thiruchengode',
            type: 'Full-time',
            description: 'Develop robust full-stack solutions using MongoDB, Express, React, and Node.js.',
            icon: <FiCode />
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful, intuitive interfaces for our enterprise clients.',
            icon: <FiPenTool />
        },
        {
            id: 4,
            title: 'Product Manager',
            department: 'Product',
            location: 'Thiruchengode',
            type: 'Contract',
            description: 'Coordinate cross-functional teams to deliver projects on time and budget.',
            icon: <FiBarChart2 />
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Manage our cloud infrastructure and ensure high availability.',
            icon: <FiCode />
        }
    ];

    const departments = ['All', 'Engineering', 'Design', 'Product'];
    const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.department === filter);

    return (
        <div className="animate-fade-in bg-white">
            <SEO
                title="Careers | Zenvera"
                description="Join the Zenvera team. Build the future of technology in a culture of innovation and growth."
            />
            {/* Dark Premium Hero */}
            <section className="bg-zen-navy pt-40 pb-32 lg:pt-52 lg:pb-40 relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gradient opacity-10 blur-[100px] rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-zen-secondary opacity-5 blur-[80px] rounded-tr-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 shadow-lg mb-8 backdrop-blur-md animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-semibold text-white tracking-wide">We Are Hiring</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
                        Shape the <span className="text-transparent bg-clip-text bg-primary-gradient">Future</span> <br /> of Digital
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Join a team of dreamers and doers building the next generation of software solutions. Your best work starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#positions" className="btn-primary shadow-lg shadow-zen-primary/30 px-8 py-4 text-lg">
                            View Open Roles
                        </a>
                        <Link to="/about" className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                            Our Culture <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dynamic Stats / Process Bar */}
            <div className="bg-zen-navy border-t border-white/5 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
                        {[
                            { label: 'Global Team', value: 'Remote-First' },
                            { label: 'Growth', value: '200% YoY' },
                            { label: 'Culture', value: 'Employee-First' },
                            { label: 'Open Roles', value: '5+ Positions' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center px-4">
                                <div className="text-white font-bold text-xl md:text-2xl mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zen-navy mb-4">Beyond the Paycheck</h2>
                        <p className="text-zen-gray text-lg">We take care of our team so they can take care of our clients.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary-gradient p-0.5 mb-6 group-hover:scale-110 transition-transform">
                                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-2xl text-zen-primary">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zen-navy">{benefit.title}</h3>
                                <p className="text-zen-gray text-base leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Stages */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zen-navy mb-6">A Simple, Transparent Process</h2>
                            <p className="text-zen-gray text-lg mb-8">We respect your time. Our hiring process is designed to be fast, fair, and friendly.</p>

                            <div className="space-y-8">
                                {[
                                    { step: '01', title: 'Apply', desc: 'Send us your resume/portfolio.' },
                                    { step: '02', title: 'Chat', desc: '30-min culture & tech fit call.' },
                                    { step: '03', title: 'Challenge', desc: 'Showcase your skills practical task.' },
                                    { step: '04', title: 'Offer', desc: 'Welcome to the Zenvera family!' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zen-light text-zen-primary font-bold flex items-center justify-center border-2 border-white shadow-md">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zen-navy mb-1">{item.title}</h3>
                                            <p className="text-zen-gray">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zen-primary to-zen-secondary opacity-10 rounded-3xl transform rotate-6"></div>
                            <div className="bg-zen-navy rounded-3xl p-8 md:p-12 text-white relative shadow-2xl transform hover:-rotate-1 transition-all duration-500">
                                <h3 className="text-2xl font-bold mb-6">"Culture eats strategy for breakfast"</h3>
                                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                                    "At Zenvera, we don't just write code; we cultivate potential. We've built an environment where curiosity is rewarded and failure is seen as a stepping stone to innovation."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                                    <div>
                                        <div className="font-bold">Kumaravel P</div>
                                        <div className="text-sm text-zen-secondary">CEO & Founder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-24 bg-zen-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-zen-primary font-bold uppercase tracking-wider text-sm mb-3 block">Join Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-zen-navy">Current Openings</h2>
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/50 backdrop-blur-sm rounded-full inline-flex border border-white mx-auto shadow-sm">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setFilter(dept)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all
                                    ${filter === dept
                                            ? 'bg-zen-navy text-white shadow-lg'
                                            : 'text-gray-500 hover:bg-white hover:text-zen-navy'
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-zen-primary flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zen-navy mb-2 group-hover:text-zen-primary transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                                            <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded"><FiBriefcase /> {job.department}</span>
                                            <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded"><FiMapPin /> {job.location}</span>
                                            <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded"><FiClock /> {job.type}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm hidden md:block max-w-xl">{job.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 self-start md:self-center w-full md:w-auto mt-2 md:mt-0">
                                    <Link to="/contact" className="btn-secondary whitespace-nowrap w-full md:w-auto text-center border-2 border-transparent group-hover:border-zen-light group-hover:bg-zen-light group-hover:text-zen-navy">
                                        Apply Now
                                    </Link>
                                    <div className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center text-gray-300 group-hover:border-zen-primary group-hover:text-zen-primary transition-colors">
                                        <FiArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-zen-navy mb-2">No roles found</h3>
                                <p className="text-zen-gray">Try adjusting your filters or check back later.</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-zen-gray mb-2 font-medium">Don't see your perfect fit?</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 text-zen-primary font-bold hover:gap-3 transition-all">
                            Send us your open application <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
