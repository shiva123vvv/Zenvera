import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ServicesHome from './pages/Services/ServicesHome';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileApp from './pages/Services/MobileApp';
import SoftwareSolutions from './pages/Services/SoftwareSolutions';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import HelpCenter from './pages/HelpCenter';
import Community from './pages/Community';
import Updates from './pages/Updates';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHome />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileApp />} />
          <Route path="/services/software-solutions" element={<SoftwareSolutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/:slug" element={<BlogDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />

          {/* New Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/community" element={<Community />} />
          <Route path="/updates" element={<Updates />} />


        </Routes >
      </Layout >
    </Router >
  );
}

export default App;