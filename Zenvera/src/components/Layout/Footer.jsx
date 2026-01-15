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
      { name: 'Pricing Plans', path: '/pricing' }
    ],
    Company: [
      { name: 'About Zenvera', path: '/about' },
      { name: 'Our Work', path: '/case-studies' },
      { name: 'Success Stories', path: '/case-studies' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact Us', path: '/contact' }
    ],
    Resources: [
      { name: 'Insights & Blog', path: '/blog' },
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Product Updates', path: '/updates' }
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: '#' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiLinkedin />, url: '#' },
    { icon: <FiInstagram />, url: '#' }
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
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zen-primary transition-colors text-white border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
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
              <p className="text-gray-400 text-sm">123 Innovation Dr, Suite 500<br />San Francisco, CA 94107</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zen-primary"><FiMail size={20} /></div>
            <div>
              <h4 className="font-bold mb-1">Email Us</h4>
              <p className="text-gray-400 text-sm">hello@zenvera.com<br />support@zenvera.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zen-primary"><FiPhone size={20} /></div>
            <div>
              <h4 className="font-bold mb-1">Call Us</h4>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
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