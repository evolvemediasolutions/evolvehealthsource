import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "What is Revenue Cycle Management (RCM) in healthcare?",
    a: "RCM is the financial process utilizing medical billing software and expertise to track patient care episodes from registration and appointment scheduling to the final payment collection."
  },
  {
    q: "How does Evolve Medical optimize first-pass clean claims rates?",
    a: "We deploy advanced claim scrubbing engines programmed with thousands of payer rules, paired with hands-on review by certified coding specialists, guaranteeing clean claims on initial transmission."
  },
  {
    q: "What is your typical turnaround time for claim submission?",
    a: "Our standard cycle completes and submits scrubbed claims within 24 to 48 hours of clinical chart validation."
  },
  {
    q: "Do you integrate with our existing EHR and Practice Management (PM) platforms?",
    a: "Yes, Evolve is platform-agnostic. We integrate with major systems like Epic, Athenahealth, Cerner, eClinicalWorks, Allscripts, and NextGen."
  },
  {
    q: "What are your fees for RCM services?",
    a: "Our pricing model is highly transparent, typically structured as a small percentage of total collected clinic revenue, ensuring our goals align completely with your financial lift."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-secondary-900/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 text-sm font-semibold mb-6">
            FAQ Helpdesk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-primary/20 bg-slate-50/80 dark:bg-slate-900/60 shadow-lg' 
                    : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/10 hover:bg-slate-50 dark:hover:bg-slate-900/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-secondary shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-slate-550 dark:text-slate-400 shrink-0 ml-4">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/40 pt-4">
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
