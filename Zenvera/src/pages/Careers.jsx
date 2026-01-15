import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiBriefcase, FiHeart, FiZap, FiSmile } from 'react-icons/fi';

const Careers = () => {
    const benefits = [
        { icon: <FiHeart />, title: 'Health & Wellness', description: 'Comprehensive health coverage and wellness programs.' },
        { icon: <FiClock />, title: 'Flexible Hours', description: 'Work when you are most productive. We value output over hours.' },
        { icon: <FiZap />, title: 'Equipment', description: 'Top-of-the-line MacBook Pro and accessories for every team member.' },
        { icon: <FiSmile />, title: 'Team Retreats', description: 'Annual company retreats to amazing locations to bond and recharge.' },
    ];

    const jobs = [
        {
            title: 'Senior React Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'We are looking for an experienced React developer to lead our frontend initiatives.'
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'New York, NY',
            type: 'Full-time',
            description: 'Create beautiful, intuitive interfaces for our enterprise clients.'
        },
        {
            title: 'Project Manager',
            department: 'Product',
            location: 'Remote',
            type: 'Contract',
            description: 'Coordinate cross-functional teams to deliver projects on time and budget.'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-zen-secondary"></span>
                        <span className="text-sm font-medium text-zen-navy">We're Hiring</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
                        Join the <span className="text-transparent bg-clip-text bg-primary-gradient">Zenvera</span> Team
                    </h1>
                    <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
                        Build the future of digital technology with a passionate, innovative, and supportive team.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zen-light text-zen-primary mb-6 text-2xl">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zen-navy">{benefit.title}</h3>
                                <p className="text-zen-gray text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-zen-light">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-zen-navy">Open Positions</h2>
                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-zen-navy mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-zen-gray mb-3">
                                        <span className="flex items-center"><FiBriefcase className="mr-2" /> {job.department}</span>
                                        <span className="flex items-center"><FiMapPin className="mr-2" /> {job.location}</span>
                                        <span className="flex items-center"><FiClock className="mr-2" /> {job.type}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{job.description}</p>
                                </div>
                                <Link to="/contact" className="btn-secondary whitespace-nowrap">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-zen-gray mb-4">Don't see the right role?</p>
                        <Link to="/contact" className="font-semibold text-zen-primary hover:underline">
                            Send us your resume anyway!
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
