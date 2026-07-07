
import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

// Marketing Sections
import Hero from './marketing/Hero';
import TrustBar from './marketing/TrustBar';
import SocialStats from './marketing/SocialStats';
import Problems from './marketing/Problems';
import WhyFail from './marketing/WhyFail';
import Timeline from './marketing/Timeline';
import SocialProof from './marketing/SocialProof';
import PlansComparison from './marketing/PlansComparison';
import DarkHighlight from './marketing/DarkHighlight';
import Statistics from './marketing/Statistics';
import CaseStudies from './marketing/CaseStudies';
import Testimonials from './marketing/Testimonials';
import GrowthAudit from './marketing/GrowthAudit';
import FAQSection from './marketing/FAQSection';
import FinalCTA from './marketing/FinalCTA';
import Footer from './marketing/Footer';

export default function MarketingHome() {
  // Ensure the page loads scroll at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfe] text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-500/25 selection:text-blue-900">
      
      {/* Sticky Header Nav with Back to Gateway Trigger */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/MARKETING/logo.png" alt="MyClinicBoost Logo" className="h-10 w-auto" />
          </div>
          
          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold text-slate-700">
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#transformation"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('transformation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-650 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#results"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition-colors"
            >
              Results
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#audit-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          
          {/* Action Area (Right) */}
          <div className="flex items-center gap-5 sm:gap-6 font-sans text-sm font-semibold text-slate-800">
            <a
              href="tel:+919025481909"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span className="hidden sm:inline">+91 90254 81909</span>
            </a>
            <a
              href="#audit-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-[#0B4F9C] hover:bg-[#093e7a] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-md shadow-blue-900/10 text-center"
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* Main layout flow of 16 modular sections */}
      <main className="pt-16">
        <Hero />
        <TrustBar />
        <SocialStats />
        <Problems />
        <WhyFail />
        <Timeline />
        <SocialProof />
        <PlansComparison />
        <DarkHighlight />
        <Statistics />
        <CaseStudies />
        <Testimonials />
        <div id="audit-form">
          <GrowthAudit />
        </div>
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
