import { motion } from 'motion/react';
import { ArrowRight, Users2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareersCTA() {
  return (
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
            
            <p className="text-lg text-slate-650 dark:text-slate-400 mb-10 font-light leading-relaxed">
              We are always looking for passionate, certified professionals to join our mission of transforming healthcare revenue cycles.
            </p>
            
            <Link 
              to="/rcm/careers"
              className="group relative inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/20 hover:shadow-primary/45"
            >
              <span>Explore Careers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative z-10 w-full max-w-sm hidden md:block">
            {/* High-end decorative dashboard element showing certified badges */}
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
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center justify-between transition-colors duration-300">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Active Openings</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Medical Coder (CPC)</div>
                  </div>
                  <span className="text-[9px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/20">Remote</span>
                </div>
                
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center justify-between transition-colors duration-300">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Active Openings</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">AR Follow-Up Lead</div>
                  </div>
                  <span className="text-[9px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/20">Full-Time</span>
                </div>
              </div>

              <div className="mt-8 text-center text-xs text-slate-500 font-medium">
                Flexible work settings • Premium benefits
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
