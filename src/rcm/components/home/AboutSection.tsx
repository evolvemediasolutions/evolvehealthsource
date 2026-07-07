import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, BarChart2, ShieldCheck, Database, Cpu } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'integrations' | 'reimbursement'>('analytics');

  const stats = [
    { value: '25+', label: 'Combined Experience' },
    { value: '500K+', label: 'Claims Processed' },
    { value: '99.1%', label: 'First-Pass Yield' },
    { value: '96.8%', label: 'Average Collection Rate' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
          
          {/* Left - Interactive Wireframe Dashboard console */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-[32px] blur-xl opacity-30"></div>
            
            <div className="relative z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-2xl overflow-hidden aspect-[4/3] flex flex-col transition-colors duration-300">
              
              {/* Fake Chrome/App bar */}
              <div className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-0.5 transition-colors duration-300">
                  {(['analytics', 'integrations', 'reimbursement'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md capitalize transition-all ${
                        activeTab === tab 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Dashboard Area */}
              <div className="p-8 flex-1 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 relative flex flex-col justify-center transition-colors duration-300">
                <AnimatePresence mode="wait">
                  {activeTab === 'analytics' && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        <span className="text-[10px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/25">Live Analysis</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors duration-300">
                          <div className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-wider">Scrubbed Claims</div>
                          <div className="text-xl font-bold text-slate-900 dark:text-white">99.1% Approval</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors duration-300">
                          <div className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-wider">Days in AR</div>
                          <div className="text-xl font-bold text-slate-900 dark:text-white">28.4 Days</div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors duration-300">
                        <div className="space-y-2 flex-1">
                          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary">
                          <BarChart2 className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'integrations' && (
                    <motion.div
                      key="integrations"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">Active Sync</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {['Epic EHR', 'AthenaHealth', 'Cerner PM', 'eClinicals', 'Allscripts', 'NextGen'].map((sys, idx) => (
                          <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-col items-center justify-center text-center transition-colors duration-300">
                            <Database className="w-4 h-4 text-secondary mb-1.5" />
                            <span className="text-[10px] text-slate-800 dark:text-slate-300 font-semibold">{sys}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-3 transition-colors duration-300">
                        <Cpu className="w-4 h-4 text-accent animate-spin" />
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium font-sans">Automatic data bridging verified. HIPAA-protected stream active.</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'reimbursement' && (
                    <motion.div
                      key="reimbursement"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        <span className="text-[10px] font-bold text-secondary px-2 py-0.5 rounded-full bg-secondary/15 border border-secondary/25">Billing Pipeline</span>
                      </div>
                      
                      <div className="space-y-2.5">
                        {[
                          { title: 'Demographics Capture', status: 'Passed Scrubbing', color: 'text-accent' },
                          { title: 'Eligibility Scrutiny', status: 'Verified Instantly', color: 'text-accent' },
                          { title: 'Electronic Remittance Posting', status: 'ERA Automated', color: 'text-secondary' }
                        ].map((step, idx) => (
                          <div key={idx} className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-center justify-between transition-colors duration-300">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-secondary" />
                              <span className="text-xs text-slate-900 dark:text-white font-semibold">{step.title}</span>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${step.color}`}>{step.status}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 text-sm font-semibold mb-6">
              About Evolve Medical
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Your Trusted Partner for <span className="text-gradient-primary">Healthcare Revenue Excellence</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
              We specialize in end-to-end revenue cycle management, delivering tailored solutions that bridge the gap between clinical care and financial performance. Our technology-driven approach ensures compliance, minimizes denials, and maximizes revenue for healthcare organizations globally.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Comprehensive end-to-end RCM solutions',
                'Advanced analytics, automated ERA, and reporting tools',
                'Dedicated team of certified specialty-specific coding experts'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-2 font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 cursor-default group shadow-sm hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-black text-primary dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
