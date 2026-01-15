import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayout, FiSmartphone, FiShield, FiTrendingUp, FiSettings, FiUsers } from 'react-icons/fi';

const Features = () => {
    const features = [
        {
            icon: <FiLayout />,
            title: 'Responsive Design',
            description: 'Websites that look amazing on any device, from desktops to mobile phones.'
        },
        {
            icon: <FiSmartphone />,
            title: 'Mobile First',
            description: 'Develoment approach that prioritizes the mobile experience for modern users.'
        },
        {
            icon: <FiShield />,
            title: 'Enterprise Security',
            description: 'Bank-grade security protocols to keep your data and users safe.'
        },
        {
            icon: <FiTrendingUp />,
            title: 'SEO Optimized',
            description: 'Built-in search engine optimization to help you rank higher on Google.'
        },
        {
            icon: <FiSettings />,
            title: 'Easy Management',
            description: 'User-friendly CMS allowing you to update content without coding.'
        },
        {
            icon: <FiUsers />,
            title: 'User Analytics',
            description: 'Integrated analytics to track user behavior and improve performance.'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-zen-accent"></span>
                        <span className="text-sm font-medium text-zen-navy">Powerful Features</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
                        Everything You Need to <span className="text-transparent bg-clip-text bg-primary-gradient">Succeed</span>
                    </h1>
                    <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
                        Our platform is packed with advanced features designed to help your business grow and thrive in the digital age.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card group">
                                <div className="icon-box bg-zen-light text-zen-primary group-hover:bg-zen-primary group-hover:text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zen-navy">{feature.title}</h3>
                                <p className="text-zen-gray">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-zen-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-zen-navy">Why Choose Zenvera?</h2>
                        <p className="text-zen-gray">See how we stack up against traditional development agencies.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-3xl shadow-sm border-separate" style={{ borderSpacing: 0 }}>
                            <thead>
                                <tr>
                                    <th className="p-6 text-left border-b border-gray-100 text-lg font-bold text-zen-navy">Feature</th>
                                    <th className="p-6 text-center border-b border-gray-100 text-lg font-bold text-zen-primary bg-zen-primary/5 rounded-t-xl">Zenvera</th>
                                    <th className="p-6 text-center border-b border-gray-100 text-lg font-bold text-gray-400">Traditional Agency</th>
                                    <th className="p-6 text-center border-b border-gray-100 text-lg font-bold text-gray-400">Freelancers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'Development Speed', zen: '2x Faster', other1: 'Standard', other2: 'Variable' },
                                    { feature: 'Code Quality', zen: 'Enterprise Grade', other1: 'Variable', other2: 'Inconsistent' },
                                    { feature: 'Support', zen: '24/7 Priority', other1: 'Business Hours', other2: 'Limited' },
                                    { feature: 'Pricing', zen: 'Transparent', other1: 'Hidden Fees', other2: 'Hourly' },
                                    { feature: 'Scalability', zen: 'Unlimited', other1: 'Limited', other2: 'Low' },
                                ].map((row, index) => (
                                    <tr key={index} className="group hover:bg-gray-50 transition-colors">
                                        <td className="p-6 border-b border-gray-100 font-medium text-zen-navy">{row.feature}</td>
                                        <td className="p-6 border-b border-gray-100 text-center font-bold text-zen-primary bg-zen-primary/5">{row.zen}</td>
                                        <td className="p-6 border-b border-gray-100 text-center text-gray-500">{row.other1}</td>
                                        <td className="p-6 border-b border-gray-100 text-center text-gray-500">{row.other2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-bold text-zen-gray uppercase tracking-widest mb-10">Works seamlessly with your favorite tools</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Using simple text placeholders for logos as per instruction to minimize external deps, but formatted like logos */}
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#61DAFB] transition-colors flex items-center gap-2">React</div>
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#000000] transition-colors flex items-center gap-2">Next.js</div>
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#FF9900] transition-colors flex items-center gap-2">AWS</div>
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#635BFF] transition-colors flex items-center gap-2">Stripe</div>
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#4479A1] transition-colors flex items-center gap-2">MySQL</div>
                        <div className="text-2xl font-bold text-gray-400 hover:text-[#4A154B] transition-colors flex items-center gap-2">Slack</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-zen-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Start your project today and get access to our full suite of tools.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Get Started Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Features;
