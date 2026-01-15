import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiCode, FiSmartphone, FiMonitor } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Services Overview', path: '/services', icon: <FiMonitor /> },
    { name: 'Web Development', path: '/services/web-development', icon: <FiCode /> },
    { name: 'Mobile App Dev', path: '/services/mobile-app-development', icon: <FiSmartphone /> },
    { name: 'Software Solutions', path: '/services/software-solutions', icon: <FiMonitor /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-lg shadow-zen-primary/20 group-hover:scale-105 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <span className="text-2xl font-heading font-bold text-zen-navy tracking-tight">Zenvera</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center space-x-1 font-medium transition-colors py-8 ${location.pathname.includes('/services') ? 'text-zen-primary' : 'text-zen-navy hover:text-zen-primary'}`}>
                <span>Services</span>
                <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transition-all duration-300 origin-top transform ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-zen-light transition-colors group/item"
                  >
                    <div className="text-zen-gray group-hover/item:text-zen-primary transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-zen-navy group-hover/item:text-zen-primary transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/solutions" className={({ isActive }) => `font-medium transition-colors hover:text-zen-primary ${isActive ? 'text-zen-primary' : 'text-zen-navy'}`}>
              Solutions
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => `font-medium transition-colors hover:text-zen-primary ${isActive ? 'text-zen-primary' : 'text-zen-navy'}`}>
              Pricing
            </NavLink>
            <NavLink to="/case-studies" className={({ isActive }) => `font-medium transition-colors hover:text-zen-primary ${isActive ? 'text-zen-primary' : 'text-zen-navy'}`}>
              Case Studies
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `font-medium transition-colors hover:text-zen-primary ${isActive ? 'text-zen-primary' : 'text-zen-navy'}`}>
              About
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `font-medium transition-colors hover:text-zen-primary ${isActive ? 'text-zen-primary' : 'text-zen-navy'}`}>
              Insights
            </NavLink>

            <div className="pl-4 border-l border-gray-200 ml-4">
              <Link to="/contact" className="btn-primary py-3 px-6 rounded-xl text-sm shadow-lg shadow-zen-primary/20 hover:shadow-zen-primary/40">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-zen-navy hover:text-zen-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute top-24 left-0 right-0 shadow-xl min-h-screen animate-fade-in-down z-40 px-4 pt-4 pb-20 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <div className="py-2">
                <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</span>
                <div className="mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-zen-light transition-colors"
                    >
                      <span className="text-zen-gray">{service.icon}</span>
                      <span className="font-medium text-zen-navy">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 my-2"></div>

              <Link to="/solutions" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">Solutions</Link>
              <Link to="/pricing" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">Pricing</Link>
              <Link to="/case-studies" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">Case Studies</Link>
              <Link to="/about" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">About Company</Link>
              <Link to="/blog" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">Insights & News</Link>
              <Link to="/careers" className="px-4 py-3 text-zen-navy font-bold hover:bg-zen-light rounded-xl">Careers</Link>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="btn-primary block text-center w-full py-4 text-lg"
                >
                  Schedule Consultation
                </Link>
                <div className="mt-4 text-center">
                  <Link to="/login" className="text-sm font-medium text-zen-gray hover:text-zen-primary">Client Login</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;