import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  FileSignature,
  Wallet,
  ActivitySquare,
  Ban,
  CheckCircle2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const solutions = [
  {
    title: 'Revenue Cycle Management',
    description: 'Complete management of the healthcare revenue journey from patient scheduling and insurance verification to claim submission, payment posting, denial management, and revenue optimization.',
    icon: ActivitySquare,
    link: '/rcm/solutions',
    image: '/images/rcm.png',
    items: [
      'Patient Registration & Eligibility Verification',
      'Claims Submission & Payment Posting',
      'Denial Management & Analytics'
    ]
  },
  {
    title: 'Medical Coding Services',
    description: 'Improve coding accuracy and compliance through expert solutions designed to minimize errors, reduce claim denials, and ensure proper reimbursement.',
    icon: FileSignature,
    link: '/solutions/medical-coding',
    image: '/images/medical-coding.png',
    items: [
      'Physician Coding',
      'Hospital Coding',
      'Outpatient Coding'
    ]
  },
  {
    title: 'Medical Billing & Claims',
    description: 'Ensure faster payments through accurate billing workflows, electronic claim submissions, and proactive claim tracking.',
    icon: Wallet,
    link: '/solutions/medical-billing',
    image: '/images/medical-billing.png',
    items: [
      'Higher First-Pass Claim Acceptance',
      'Reduced Billing Errors',
      'Faster Reimbursement Cycles'
    ]
  },
  {
    title: 'Accounts Receivable',
    description: 'Our dedicated AR specialists work on unpaid and aging claims, identify revenue gaps, and implement effective recovery strategies to improve collections.',
    icon: BarChart3,
    link: '/solutions/accounts-receivable',
    image: '/images/ar-followup.png',
    items: [
      'Aging Analysis',
      'Insurance Follow-up',
      'Patient Balance Follow-up'
    ]
  },
  {
    title: 'Denial Prevention & Recovery',
    description: 'Every denied claim represents delayed revenue. Our denial specialists identify root causes, appeal rejected claims, and implement preventive strategies.',
    icon: Ban,
    link: '/solutions/denial-management',
    image: '/images/denial-prevention.png',
    items: [
      'Denial Analysis',
      'Appeals Management',
      'Corrective Action Plans'
    ]
  }
];

export default function SolutionsSection() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Check location.search first (query before hash: ?tab=X#solutions)
    let tab = new URLSearchParams(location.search).get('tab');
    
    // Fallback to location.hash (query inside hash: #solutions?tab=X)
    if (!tab && location.hash && location.hash.includes('?')) {
      const queryString = location.hash.split('?')[1];
      tab = new URLSearchParams(queryString).get('tab');
    }

    if (tab !== null) {
      const idx = parseInt(tab, 10);
      if (idx >= 0 && idx < solutions.length) {
        setActiveIndex(idx);
      }
    }
  }, [location.search, location.hash]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const ActiveIcon = solutions[activeIndex].icon;

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background light rings */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#0F9D8A]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#0f4c81]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16 md:mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 uppercase">
              OUR SOLUTIONS
            </h2>
            <div className="flex items-center gap-3">
              <Link
                to="/rcm/contact"
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-full text-sm transition-all duration-300"
              >
                Contact Us
              </Link>
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 cursor-pointer"
                aria-label="Previous solution"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F9D8A] hover:bg-[#0D8A79] text-white shadow-md transition-all duration-300 cursor-pointer"
                aria-label="Next solution"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-400 font-light leading-relaxed max-w-xl text-left">
              We provide end-to-end Revenue Cycle Management solutions that streamline healthcare operations, improve reimbursement accuracy, reduce denials, and optimize financial performance across the entire patient journey.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Horizontal Tabs Navigation */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-4 mb-8 -mx-4 px-4 scroll-smooth">
          {solutions.map((sol, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${activeIndex === index
                ? 'bg-[#0F9D8A] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
            >
              {sol.title}
            </button>
          ))}
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch lg:h-[620px]">

          {/* Column 1: Interactive Solution Navigation (lg only) - tabs stretch to fill height equally */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-between h-full py-2 border-r border-slate-100 dark:border-slate-800/50 pr-4">
            {solutions.map((sol, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-full flex-1 text-left flex items-center border-b border-slate-200 dark:border-slate-800/60 last:border-0 group transition-all duration-300 relative focus:outline-none cursor-pointer py-2 min-h-[60px]"
              >
                <span
                  className={`block text-lg xl:text-xl font-bold tracking-tight transition-all duration-300 ${activeIndex === index
                      ? 'text-[#0F9D8A] translate-x-1.5'
                      : 'text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300'
                    }`}
                >
                  {sol.title}
                </span>
              </button>
            ))}
          </div>

          {/* Column 2: Dynamic Healthcare Image */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 h-[320px] md:h-auto min-h-[320px] lg:min-h-[480px]">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 transition-colors duration-300 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={solutions[activeIndex].image}
                  alt={solutions[activeIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Column 3: Dynamic Solution Information Card */}
          <div className="col-span-1 md:col-span-7 lg:col-span-5">
            <div className="bg-[#F8FAFC] dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full transition-all duration-300 shadow-sm hover:shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Solution Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#E6F4F1] dark:bg-teal-950/40 text-[#0F9D8A] flex items-center justify-center mb-6 shadow-sm">
                      <ActiveIcon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                      {solutions[activeIndex].title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-400 font-light leading-relaxed text-sm lg:text-base mb-6">
                      {solutions[activeIndex].description}
                    </p>

                    <div className="w-full h-px bg-slate-200 dark:bg-slate-800/80 my-6" />

                    <Link
                      to="/rcm/contact"
                      className="inline-flex items-center text-[#0F9D8A] hover:text-[#0D8A79] font-bold text-sm lg:text-base group/cta transition-colors duration-300"
                    >
                      Request Consultation
                      <ArrowRight className="w-4.5 h-4.5 ml-1.5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Bottom feature panel */}
                  <div className="mt-8 p-5 bg-white dark:bg-slate-950/70 border border-slate-100 dark:border-slate-850 rounded-[20px] shadow-sm">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                      {activeIndex === 0 ? 'Key Focus Areas' : activeIndex === 1 ? 'Key Services' : activeIndex === 2 ? 'Benefits' : 'Services'}
                    </h4>
                    <ul className={`grid grid-cols-1 gap-x-6 gap-y-3 ${solutions[activeIndex].items.length > 4
                      ? 'sm:grid-cols-2 lg:grid-cols-2'
                      : 'sm:grid-cols-2 lg:grid-cols-1'
                      }`}>
                      {solutions[activeIndex].items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#0F9D8A] shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
