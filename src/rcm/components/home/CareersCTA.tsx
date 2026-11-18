import { useState } from 'react';
import { ArrowRight, Users2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobApplicationModal from '../careers/JobApplicationModal';

export default function CareersCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Medical Coder (CPC)');

  const handleOpenApply = (position: string) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-background relative overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
            
            {/* Decorative background grid pattern inside card */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            {/* Glowing ambient ring */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-xl relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 text-sm font-semibold mb-6 shadow-sm">
                <Users2 className="w-4 h-4 text-secondary" />
                Join Our Team
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Build the Future of Healthcare Operations
              </h2>
              
              <p className="text-lg text-slate-650 dark:text-slate-400 mb-8 font-light leading-relaxed">
                We are always looking for passionate, certified professionals to join our mission of transforming healthcare revenue cycles.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/careers"
                  className="group relative inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/40 text-sm"
                >
                  <span>Explore Careers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleOpenApply('Medical Coder (CPC)')}
                  className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-bold text-sm transition-all duration-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm cursor-pointer"
                >
                  Apply Directly
                </button>
              </div>

              {/* Mobile Active Openings quick-action strip */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 md:hidden space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Immediate Openings:
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenApply('Medical Coder (CPC)')}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold"
                >
                  <span className="text-slate-900 dark:text-white">Medical Coder (CPC)</span>
                  <span className="text-teal-600 dark:text-teal-400">Apply Now &rarr;</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenApply('AR Follow-Up Lead')}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold"
                >
                  <span className="text-slate-900 dark:text-white">AR Follow-Up Lead</span>
                  <span className="text-teal-600 dark:text-teal-400">Apply Now &rarr;</span>
                </button>
              </div>
            </div>

            <div className="relative z-10 w-full max-w-sm hidden md:block">
              {/* Interactive dashboard element showing clickable openings */}
              <div className="aspect-square rounded-[32px] bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 to-transparent"></div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  </div>
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>
                
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => handleOpenApply('Medical Coder (CPC)')}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/70 dark:hover:border-teal-500/70 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer group text-left"
                    title="Click to apply for Medical Coder (CPC)"
                  >
                    <div>
                      <div className="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span>Active Opening</span>
                        <span className="text-[9px] text-slate-400 group-hover:text-teal-600 font-medium transition-colors">• Click to Apply</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        Medical Coder (CPC)
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/20">Remote</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleOpenApply('AR Follow-Up Lead')}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/70 dark:hover:border-teal-500/70 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer group text-left"
                    title="Click to apply for AR Follow-Up Lead"
                  >
                    <div>
                      <div className="text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span>Active Opening</span>
                        <span className="text-[9px] text-slate-400 group-hover:text-teal-600 font-medium transition-colors">• Click to Apply</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        AR Follow-Up Lead
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/20">Full-Time</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                </div>

                <div className="mt-8 text-center text-xs text-slate-500 font-medium">
                  Flexible work settings • Applications sent to chitra@evolvehealthsource.com
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Career Application Popup Modal */}
      <JobApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPosition={selectedPosition}
      />
    </>
  );
}
