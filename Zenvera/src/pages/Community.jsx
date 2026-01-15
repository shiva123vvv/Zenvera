import React from 'react';
import { FiSlack, FiGithub, FiTwitter } from 'react-icons/fi';

const Community = () => {
    return (
        <div className="animate-fade-in">
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6 text-zen-navy">Join the Community</h1>
                    <p className="text-xl text-zen-gray max-w-2xl mx-auto">Connect with other developers, designers, and business owners building with Zenvera.</p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <a href="#" className="feature-card text-center hover:bg-[#4A154B] hover:text-white group transition-colors">
                        <div className="icon-box bg-gray-100 text-[#4A154B] mx-auto group-hover:bg-white/20 group-hover:text-white"><FiSlack /></div>
                        <h3 className="text-xl font-bold mb-2">Slack Community</h3>
                        <p className="text-zen-gray group-hover:text-white/80">Chat with us and fellow users in real-time.</p>
                    </a>
                    <a href="#" className="feature-card text-center hover:bg-black hover:text-white group transition-colors">
                        <div className="icon-box bg-gray-100 text-black mx-auto group-hover:bg-white/20 group-hover:text-white"><FiGithub /></div>
                        <h3 className="text-xl font-bold mb-2">GitHub</h3>
                        <p className="text-zen-gray group-hover:text-white/80">Contribute to our open source projects.</p>
                    </a>
                    <a href="#" className="feature-card text-center hover:bg-[#1DA1F2] hover:text-white group transition-colors">
                        <div className="icon-box bg-gray-100 text-[#1DA1F2] mx-auto group-hover:bg-white/20 group-hover:text-white"><FiTwitter /></div>
                        <h3 className="text-xl font-bold mb-2">Twitter / X</h3>
                        <p className="text-zen-gray group-hover:text-white/80">Follow us for the latest news and updates.</p>
                    </a>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Upcoming Events */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-zen-navy">Upcoming Events</h2>
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-6 hover:shadow-md transition-all group">
                                <div className="hidden sm:flex flex-col items-center justify-center bg-zen-light rounded-xl px-6 py-2 text-center min-w-[100px]">
                                    <span className="text-zen-primary font-bold text-sm uppercase">Jan</span>
                                    <span className="text-2xl font-bold text-zen-navy">25</span>
                                </div>
                                <div>
                                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-2">Webinar</div>
                                    <h3 className="text-lg font-bold text-zen-navy mb-2 group-hover:text-zen-primary transition-colors">Building Scalable Apps with Zenvera</h3>
                                    <p className="text-zen-gray text-sm mb-3">Join our lead engineer for a deep dive into architecture.</p>
                                    <span className="text-sm font-bold text-zen-primary cursor-pointer hover:underline">Register Now &rarr;</span>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-6 hover:shadow-md transition-all group">
                                <div className="hidden sm:flex flex-col items-center justify-center bg-zen-light rounded-xl px-6 py-2 text-center min-w-[100px]">
                                    <span className="text-zen-primary font-bold text-sm uppercase">Feb</span>
                                    <span className="text-2xl font-bold text-zen-navy">10</span>
                                </div>
                                <div>
                                    <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-2">Meetup</div>
                                    <h3 className="text-lg font-bold text-zen-navy mb-2 group-hover:text-zen-primary transition-colors">Zenvera Community Meetup - NYC</h3>
                                    <p className="text-zen-gray text-sm mb-3">Meet the team and network with other developers in New York.</p>
                                    <span className="text-sm font-bold text-zen-primary cursor-pointer hover:underline">RSVP Here &rarr;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Contributors */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-zen-navy">Top Contributors</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-all">
                                    <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="User" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <div className="font-bold text-zen-navy text-sm">Developer {i}</div>
                                        <div className="text-xs text-zen-gray">500+ contributions</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-zen-navy rounded-2xl text-white text-center">
                            <h3 className="font-bold mb-2">Want to contribute?</h3>
                            <p className="text-sm text-gray-300 mb-4">Check out our open issues on GitHub and get involved.</p>
                            <button className="btn-primary w-full py-2 text-sm">View Issues</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
