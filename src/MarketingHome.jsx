
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

export default function MarketingHome() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Ensure the page loads scroll at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfe] text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-500/25 selection:text-blue-900">
      
      {/* Floating Navigation Pill */}
      <div className="fixed top-6 right-6 z-50 flex items-center bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full py-1.5 pl-4 pr-1.5 shadow-2xl">
        <div className="flex items-center gap-2 text-white text-xs font-semibold mr-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          Navigate
        </div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer"
        >
          Open Index &rarr;
        </button>
      </div>

      {/* Index Sidebar Drawer Panel */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-black text-white z-50 p-8 flex flex-col justify-between shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  Tired of scrolling?
                </span>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-8 my-auto">
                {[
                  { num: '01', name: 'The Premise', target: 'hero' },
                  { num: '02', name: 'Why Clinics Fail', target: 'why-fail' },
                  { num: '03', name: 'Our Packages', target: 'packages' },
                  { num: '04', name: 'Results & Proof', target: 'results' },
                  { num: '05', name: 'Growth Audit', target: 'audit-form' },
                  { num: '06', name: 'Common FAQs', target: 'faq' },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#${item.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDrawerOpen(false);
                      document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex items-baseline gap-4 text-left border-b border-slate-900 pb-4"
                  >
                    <span className="text-xs text-slate-650 font-mono group-hover:text-blue-500 transition-colors">
                      {item.num}
                    </span>
                    <span className="text-2xl font-bold tracking-tight text-slate-350 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="ml-auto text-slate-700 group-hover:text-white transition-colors">
                      &rarr;
                    </span>
                  </a>
                ))}
              </nav>

              {/* Footer */}
              <div className="text-[10px] text-slate-650 font-medium">
                &copy; {new Date().getFullYear()} Evolve Health Source. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main layout flow */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <TrustBar />
        <SocialStats />
        <Problems />
        <div id="why-fail">
          <WhyFail />
        </div>
        <Timeline />
        <SocialProof />
        <div id="packages">
          <PlansComparison />
        </div>
        <DarkHighlight />
        <Statistics />
        <CaseStudies />
        <div id="results">
          <Testimonials />
        </div>
        <div id="audit-form">
          <GrowthAudit />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTA />
      </main>
    </div>
  );
}

