import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCheck, FiCalendar, FiTarget, FiLayers, FiUsers, FiPieChart, FiCpu, FiShield, FiGlobe, FiBriefcase, FiAward, FiTrendingUp, FiPlus, FiMinus } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiPython, SiAmazonaws, SiMongodb, SiDocker, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import heroIllustration from '../assets/hero-illustration.png';
import dashboardMockup from '../assets/dashboard-mockup.png';
import { blogPosts } from '../data/blogPosts';

import SEO from '../components/comman/SEO';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Home"
        description="Zenvera - Building Future-Ready Enterprise Solutions. We design and develop scalable software solutions that drive innovation."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zen-primary/10 shadow-sm mb-8 animate-fade-in-down">
                <span className="w-2 h-2 rounded-full bg-zen-primary"></span>
                <span className="text-sm font-medium text-zen-primary">Global Digital Transformation Partner</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-zen-navy">
                Building Future-Ready <br />
                <span className="text-transparent bg-clip-text bg-primary-gradient">Enterprise Solutions</span>
              </h1>
              <p className="text-xl text-zen-gray mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100">
                We design and develop scalable software solutions that drive innovation and business growth for forward-thinking companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
                <Link to="/contact" className="btn-primary group flex items-center justify-center gap-2">
                  Book Consultation
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/case-studies" className="btn-secondary group flex items-center justify-center gap-2">
                  View Work
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right delay-300">
              <div className="absolute top-0 right-0 w-full h-full bg-primary-gradient opacity-10 blur-3xl rounded-full -z-10"></div>
              <img
                src={heroIllustration}
                alt="Digital Innovation Team"
                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Element - Chart */}
              <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-glass animate-float hidden lg:block">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500"><FiGlobe /></div>
                  <div>
                    <p className="text-xs text-gray-400">Global Reach</p>
                    <p className="font-bold text-gray-800">20+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card group">
              <div className="icon-box bg-purple-50 text-zen-primary">
                <FiCpu />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Innovative Technology</h3>
              <p className="text-zen-gray">Leveraging cutting-edge technologies like AI, Blockchain, and Cloud to build robust solutions.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group">
              <div className="icon-box bg-blue-50 text-blue-500">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Enterprise Security</h3>
              <p className="text-zen-gray">Security-first approach ensuring your data and applications meet the strict compliance standards.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card group">
              <div className="icon-box bg-teal-50 text-teal-500">
                <FiUsers />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Dedicated Teams</h3>
              <p className="text-zen-gray">Work with a dedicated team of experts committed to your project's success from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zen-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">98%</div>
              <div className="text-zen-gray text-sm uppercase tracking-wider">Client Retention</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">500+</div>
              <div className="text-zen-gray text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">50+</div>
              <div className="text-zen-gray text-sm uppercase tracking-wider">Global Partners</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">24/7</div>
              <div className="text-zen-gray text-sm uppercase tracking-wider">Support Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-zen-gray uppercase tracking-widest mb-8">Powered by Modern Technologies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <SiReact className="text-4xl hover:text-[#61DAFB] transition-colors" title="React" />
            <SiTypescript className="text-4xl hover:text-[#3178C6] transition-colors" title="TypeScript" />
            <SiNodedotjs className="text-4xl hover:text-[#339933] transition-colors" title="Node.js" />
            <SiNextdotjs className="text-4xl hover:text-black transition-colors" title="Next.js" />
            <SiTailwindcss className="text-4xl hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
            <SiAmazonaws className="text-4xl hover:text-[#FF9900] transition-colors" title="AWS" />
            <SiMongodb className="text-4xl hover:text-[#47A248] transition-colors" title="MongoDB" />
            <SiDocker className="text-4xl hover:text-[#2496ED] transition-colors" title="Docker" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 lg:py-32 bg-zen-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zen-navy">End-to-End <br />Software Development</h2>
          <p className="text-zen-gray max-w-2xl mx-auto mb-16 text-lg">
            From detailed project planning to high-level roadmaps, Zenvera provides the clarity and control you need to succeed.
          </p>

          <div className="relative mx-auto max-w-5xl group perspective-1000">
            <div className="absolute inset-0 bg-primary-gradient opacity-10 blur-3xl -z-10 rounded-full scale-90"></div>
            <img
              src={dashboardMockup}
              alt="Zenvera Dashboard"
              className="rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-700 group-hover:rotate-x-2 group-hover:shadow-zen-primary/20"
            />

            {/* Floating Icon */}
            <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-lg animate-bounce hidden lg:block">
              <FiCheck className="text-3xl text-green-500" />
            </div>
          </div>
        </div>
      </section>



      {/* Strategy Visual Section */}
      <section className="py-20 bg-zen-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-primary-gradient opacity-10 blur-2xl rounded-3xl transform rotate-3 scale-95 group-hover:rotate-0 transition-all duration-700"></div>
              <img
                src="/src/assets/process_planning.png"
                alt="Strategic Planning"
                className="relative rounded-3xl shadow-xl transform group-hover:rotate-y-2 transition-transform duration-700 border border-white/40"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider mb-6">
                <FiLayers className="mr-1" /> Strategy First
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zen-navy">From Chaos to Clarity</h2>
              <p className="text-xl text-zen-gray mb-8 leading-relaxed">
                Great software doesn't happen by accident. It starts with a clear vision and a solid plan. We help you cut through the noise and focus on what matters.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zen-navy font-medium"><FiCheck className="text-orange-500 mr-3 text-xl" /> Requirement Analysis</li>
                <li className="flex items-center text-zen-navy font-medium"><FiCheck className="text-orange-500 mr-3 text-xl" /> Technical Feasibility Study</li>
                <li className="flex items-center text-zen-navy font-medium"><FiCheck className="text-orange-500 mr-3 text-xl" /> Roadmap Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zen-navy">How We Deliver Excellence</h2>
            <p className="text-zen-gray max-w-2xl mx-auto text-lg">Our streamlined process ensures transparency and quality at every step of the journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center text-3xl shadow-soft mb-6 group-hover:border-zen-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                <span className="bg-clip-text text-transparent bg-primary-gradient font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Discovery & Strategy</h3>
              <p className="text-zen-gray px-4">We dive deep into your requirements to build a roadmap that aligns with your business goals.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center text-3xl shadow-soft mb-6 group-hover:border-zen-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                <span className="bg-clip-text text-transparent bg-primary-gradient font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Agile Development</h3>
              <p className="text-zen-gray px-4">Our expert developers build your solution in sprints, keeping you updated every week.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center text-3xl shadow-soft mb-6 group-hover:border-zen-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                <span className="bg-clip-text text-transparent bg-primary-gradient font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zen-navy">Launch & Scale</h3>
              <p className="text-zen-gray px-4">We deploy your solution with zero downtime and provide ongoing support for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Split Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-3xl shadow-glass border border-white/60 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" className="fill-zen-primary"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H8.0166V21H5.0166Z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">"Zenvera has transformed how our team works. It's intuitive, fast, and beautiful."</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=5D5FEF&color=fff" alt="Sarah" />
                </div>
                <div>
                  <p className="font-bold text-zen-navy">Sarah Johnson</p>
                  <p className="text-sm text-zen-gray">Product Manager at TechFlow</p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                    <FiPlay />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Task Management</h4>
                    <p className="text-zen-gray">Create, assign, and track tasks with ease. Drag and drop interface makes management a breeze.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                    <FiCalendar />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Calendar Integration</h4>
                    <p className="text-zen-gray">Sync with Google Calendar and Outlook. Never miss a deadline or meeting again.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
                    <FiTarget />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Goal Tracking</h4>
                    <p className="text-zen-gray">Set milestones and track progress visually. Celebrate every victory with your team.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zen-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zen-navy">Frequently Asked Questions</h2>
            <p className="text-zen-gray">Everything you need to know about working with Zenvera.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-zen-navy mb-2 flex items-center justify-between">
                How long does a typical project take?
                <FiArrowRight className="transform rotate-90 text-gray-300" />
              </h3>
              <p className="text-zen-gray">Timelines vary depending on complexity, but a standard web application typically takes 8-12 weeks from discovery to launch.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-zen-navy mb-2 flex items-center justify-between">
                Do you provide post-launch support?
                <FiArrowRight className="transform rotate-90 text-gray-300" />
              </h3>
              <p className="text-zen-gray">Yes, we offer comprehensive maintenance packages to ensure your application remains secure, up-to-date, and performant.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-zen-navy mb-2 flex items-center justify-between">
                What technologies do you specialize in?
                <FiArrowRight className="transform rotate-90 text-gray-300" />
              </h3>
              <p className="text-zen-gray">We are experts in the modern MERN stack (MongoDB, Express, React, Node.js), Next.js, and cloud platforms like AWS and Azure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zen-navy">Latest Insights</h2>
              <p className="text-zen-gray max-w-xl">Stay ahead of the curve with our expert analysis and industry trends.</p>
            </div>
            <Link to="/insights" className="hidden md:flex items-center gap-2 text-zen-primary font-bold hover:gap-3 transition-all">
              View All Articles <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to={`/insights/${post.slug}`} key={post.id} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-gray-100">
                  <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-zen-primary shadow-sm">{post.category}</div>
                  {post.imagePath ? (
                    <img
                      src={post.imagePath}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : null}
                  <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-50" style={{ display: post.imagePath ? 'none' : 'flex' }}>
                    {post.image || '📝'}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-zen-gray mb-2">
                  <span className="flex items-center gap-1"><FiCalendar className="text-zen-primary" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-zen-navy mb-2 group-hover:text-zen-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-zen-gray line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights" className="btn-secondary inline-flex items-center gap-2">
              View All Articles <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-zen-light rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 absolute-center"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Boost your productivity today!</h2>
            <p className="text-zen-gray text-lg mb-10 max-w-2xl mx-auto">Join thousands of teams who use Zenvera to stream their workflows and achieve more together.</p>
            <Link to="/register" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4 shadow-xl shadow-zen-primary/40">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;