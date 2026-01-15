import React from 'react';
import { FiUsers, FiTarget, FiAward, FiGlobe, FiHeart, FiZap } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: <FiHeart />,
      title: 'Integrity',
      description: 'We believe in honest communication and transparent partnerships.'
    },
    {
      icon: <FiZap />,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'Working as an extension of your team to achieve shared goals.'
    },
    {
      icon: <FiTarget />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in everything we do.'
    }
  ];

  const leadership = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: '15+ years in software development and digital transformation.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems.',
      image: '👩‍💻'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Delivery',
      bio: 'Specializes in agile project management and client relations.',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      bio: 'Passionate about user experience and design innovation.',
      image: '👩‍🎨'
    }
  ];

  const milestones = [
    { year: '2025', event: 'Zenvera Founded', description: 'Founded on January 7, 2025, with a vision to transform digital experiences.' },
    { year: '2025', event: 'Rapid Expansion', description: 'Grew to a team of 15 experts and secured first 10 major clients.' },
    { year: '2026', event: 'Global Reach', description: 'Expanded operations to serve international markets and launched new product lines.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
            <span className="text-sm font-medium text-zen-primary">Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zen-navy">
            About <span className="text-transparent bg-clip-text bg-primary-gradient">Zenvera</span>
          </h1>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto mb-10">
            We are a passionate team of technology experts dedicated to delivering innovative digital solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-gradient rounded-3xl p-10 text-white shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-8 border border-white/20">
                <FiTarget className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To empower businesses with innovative technology solutions that simplify complexity, drive growth, and create lasting value through digital transformation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:border-zen-primary/30 hover:-translate-y-2 transition-all duration-500 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zen-light text-zen-primary mb-8 group-hover:bg-zen-primary group-hover:text-white transition-colors duration-300">
                <FiGlobe className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-zen-navy">Our Vision</h2>
              <p className="text-lg text-zen-gray leading-relaxed">
                To be the most trusted digital transformation partner for businesses worldwide, known for our Zen-like approach to technology and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zen-navy">Our Core Values</h2>
            <p className="text-zen-gray max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="feature-card text-center group">
                <div className="icon-box bg-zen-light text-zen-primary group-hover:bg-zen-primary group-hover:text-white mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zen-navy">{value.title}</h3>
                <p className="text-zen-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-zen-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-zen-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zen-navy">Our Journey</h2>
            <p className="text-xl text-zen-gray">Milestones that shaped our success story</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zen-primary via-zen-secondary to-zen-primary"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`timeline-item relative animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <div className="glass-card group hover:scale-105 transition-transform duration-500 border border-white/50">
                        <div className="flex items-center gap-3 mb-3 justify-start md:justify-end">
                          <div className="px-4 py-1 bg-primary-gradient text-white text-sm font-bold rounded-full shadow-lg shadow-zen-primary/30">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-zen-primary transition-colors text-zen-navy">
                          {milestone.event}
                        </h3>
                        <p className="text-zen-gray leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-gradient shadow-lg shadow-zen-primary/50 pulse-glow border-2 border-white"></div>

                    {/* Empty Space for Alternating Layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-zen-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zen-navy">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="text-6xl mb-6 bg-zen-light w-24 h-24 rounded-full flex items-center justify-center mx-auto">{person.image}</div>
                <h3 className="text-xl font-bold mb-1 text-zen-navy">{person.name}</h3>
                <div className="text-zen-primary font-bold text-sm uppercase tracking-wider mb-4">{person.role}</div>
                <p className="text-zen-gray text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">50+</div>
              <div className="text-zen-secondary font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">30+</div>
              <div className="text-zen-secondary font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">40+</div>
              <div className="text-zen-secondary font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">100%</div>
              <div className="text-zen-secondary font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;