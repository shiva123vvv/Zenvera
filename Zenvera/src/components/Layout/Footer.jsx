import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Mobile App Development', path: '/services/mobile-app-development' },
      { name: 'Software Solutions', path: '/services/software-solutions' },
      { name: 'Industry Solutions', path: '/solutions' },
    ],
    Company: [
      { name: 'About Zenvera', path: '/about' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact Us', path: '/contact' }
    ],
    Resources: [
      { name: 'Insights & Blog', path: '/insights' },
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Agency Roadmap', path: '/updates' }
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://facebook.com/zenvera' },
    { icon: <FiTwitter />, url: 'https://twitter.com/zenvera' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/company/zenvera' },
    { icon: <FiInstagram />, url: 'https://instagram.com/zenvera' }
  ];

  return (
    <footer className="bg-zen-navy text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <span className="text-2xl font-heading font-bold">Zenvera</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm text-base leading-relaxed">
              We are a premier digital transformation agency helping enterprises build scalable, secure, and future-proof software solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zen-primary transition-colors text-white border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/careers" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/10 group">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-bold text-white group-hover:text-zen-secondary">We're Hiring! Join our team &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-heading font-bold mb-6 text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-gray-800 pt-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zen-primary"><FiMapPin size={20} /></div>
            <div>
              <h4 className="font-bold mb-1">Headquarters</h4>
              <p className="text-gray-400 text-sm">Thiruchengode,<br />Tamil Nadu, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zen-primary"><FiMail size={20} /></div>
            <div>
              <h4 className="font-bold mb-1">Email Us</h4>
              <a href="mailto:hello@zenvera.com" className="text-gray-400 text-sm hover:text-white transition-colors">hello@zenvera.com</a><br />
              <a href="mailto:support@zenvera.com" className="text-gray-400 text-sm hover:text-white transition-colors">support@zenvera.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zen-primary"><FiPhone size={20} /></div>
            <div>
              <h4 className="font-bold mb-1">Call Us</h4>
              <a href="tel:+918012345678" className="text-gray-400 text-sm hover:text-white transition-colors">+91 80 1234 5678</a><br />
              <span className="text-gray-500 text-xs">Mon-Fri, 9am-6pm IST</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zenvera Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/help" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;