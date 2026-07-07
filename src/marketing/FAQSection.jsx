import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What if we've tried agencies / ads before and it didn't work?",
      a: "Most agencies run generalist campaigns that don't capture doctor authority. We build medically-accurate reels and local trust funnels specifically designed for healthcare practices. Our systems are built around your specific clinical credentials to earn trust before they ever walk in."
    },
    {
      q: "Do I need to call and close every lead myself?",
      a: "No. We integrate WhatsApp automation, scheduling links, and automated nurture sequences that qualify leads and encourage them to book a consultation slot directly onto your calendar, reducing admin work for your staff."
    },
    {
      q: "What booking platforms do you integrate with?",
      a: "We integrate directly with major healthcare calendars and EHR systems, including Zocdoc, PracticeSuite, SimplePractice, Acuity, Calendly, and custom WhatsApp booking pipelines."
    },
    {
      q: "Is there a long contract or lock-in period?",
      a: "All our engagements are month-to-month after the initial 90-day onboarding sprint. We believe in earning your business every single month with measurable patient growth, not lock-in contracts."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white text-left relative z-10 w-full border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider mb-4">
              COMMON QUESTIONS
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Doctors usually <br /> ask us...
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              If your question isn't here, WhatsApp us at{' '}
              <a
                href="https://wa.me/919025481909"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EF7E56] font-bold hover:underline"
              >
                +91 90254 81909
              </a>
              . We answer personally.
            </p>
          </div>
        </div>

        {/* Accordion List (Centered max-w-4xl for readability) */}
        <div className="max-w-4xl mx-auto mt-16 space-y-0 divide-y divide-slate-200/60 border-t border-b border-slate-200/60">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 text-left">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-[#06244C] font-bold text-sm sm:text-base text-left hover:text-blue-600 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="pr-4 select-all">{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-[#EAF3FF] text-[#0B4F9C] flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 text-slate-500 text-xs sm:text-sm leading-relaxed select-all">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
