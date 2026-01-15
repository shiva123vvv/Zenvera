import React from 'react';
import { FiMessageCircle, FiUsers, FiArrowRight, FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import communityNetwork from '../assets/community_network.png';
import SEO from '../components/comman/SEO';

const Community = () => {
    return (
        <div className="animate-fade-in">
            <SEO
                title="Community | Zenvera"
                description="Join the Zenvera community on WhatsApp and Telegram. Connect, learn, and grow with developers and business leaders."
            />
            {/* Hero */}
            <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy tracking-tight">
                        Join the <span className="text-transparent bg-clip-text bg-primary-gradient">Global Community</span>
                    </h1>
                    <p className="text-xl text-zen-gray max-w-2xl mx-auto leading-relaxed">
                        Connect with other developers, designers, and business owners building the future with Zenvera.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 bg-[#25D366] border-[#25D366] hover:bg-[#128C7E]">
                            <FaWhatsapp /> Join WhatsApp
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2 bg-[#229ED9] border-[#229ED9] text-white hover:bg-[#1b8abf] hover:text-white hover:border-[#1b8abf]">
                            <FaTelegramPlane /> Join Telegram
                        </a>
                    </div>
                </div>
            </section>

            {/* Network Visual */}
            <section className="pb-20 bg-white relative overflow-hidden -mt-10 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-gray-100/50">
                        <div className="absolute inset-0 bg-zen-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img
                            src={communityNetwork}
                            alt="Global Developer Network"
                            className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-3xl text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                                Building Together, Growing Together
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Community Channels */}
            <section className="section-padding bg-zen-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-zen-navy mb-4">Connect Where It Matters</h2>
                        <p className="text-zen-gray max-w-2xl mx-auto">Join our dedicated channels for real-time updates, support, and networking.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {/* WhatsApp Community */}
                        <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366]"></div>
                            <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                <FaWhatsapp />
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-zen-navy">WhatsApp Community</h3>
                            <p className="text-zen-gray text-sm mb-4">Official announcements and networking.</p>
                            <span className="text-xs font-bold text-[#25D366] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                Join Now <FiArrowRight />
                            </span>
                        </a>

                        {/* WhatsApp Channel */}
                        <a href="https://whatsapp.com/channel/" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#128C7E]"></div>
                            <div className="w-14 h-14 bg-[#128C7E]/10 text-[#128C7E] rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 group-hover:bg-[#128C7E] group-hover:text-white transition-colors">
                                <FiMessageCircle />
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-zen-navy">WhatsApp Channel</h3>
                            <p className="text-zen-gray text-sm mb-4">Daily tech news, tips, and updates.</p>
                            <span className="text-xs font-bold text-[#128C7E] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                Follow <FiArrowRight />
                            </span>
                        </a>

                        {/* Telegram Group */}
                        <a href="https://t.me/zenvera" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#229ED9]"></div>
                            <div className="w-14 h-14 bg-[#229ED9]/10 text-[#229ED9] rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 group-hover:bg-[#229ED9] group-hover:text-white transition-colors">
                                <FaTelegramPlane />
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-zen-navy">Telegram Group</h3>
                            <p className="text-zen-gray text-sm mb-4">Join 10k+ developers on Telegram.</p>
                            <span className="text-xs font-bold text-[#229ED9] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                Join Group <FiArrowRight />
                            </span>
                        </a>

                        {/* LinkedIn Page */}
                        <a href="https://linkedin.com/company/zenvera" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0A66C2]"></div>
                            <div className="w-14 h-14 bg-[#0A66C2]/10 text-[#0A66C2] rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                                <FiLinkedin />
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-zen-navy">Follow LinkedIn</h3>
                            <p className="text-zen-gray text-sm mb-4">Professional updates and career news.</p>
                            <span className="text-xs font-bold text-[#0A66C2] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                Follow Page <FiArrowRight />
                            </span>
                        </a>
                    </div>

                    {/* Follow Us On Social Media */}
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-zen-navy mb-8">Follow Us on Social Media</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="https://instagram.com/zenvera" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:text-[#E1306C] transition-all">
                                <FiInstagram className="text-xl" />
                                <span className="font-bold">Instagram</span>
                            </a>
                            <a href="https://twitter.com/zenvera" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:text-[#1DA1F2] transition-all">
                                <FiTwitter className="text-xl" />
                                <span className="font-bold">Twitter</span>
                            </a>
                            <a href="https://facebook.com/zenvera" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:text-[#1877F2] transition-all">
                                <FiFacebook className="text-xl" />
                                <span className="font-bold">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
