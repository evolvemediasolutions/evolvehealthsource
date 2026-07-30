import { motion } from 'motion/react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      
      {/* Decorative Orbs and Grid Meshes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[140px] pointer-events-none animate-glow-pulse"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-slate-200 dark:border-white/5 rounded-full blur-[2px] opacity-20 pointer-events-none transition-colors duration-300"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
        >
          Let Healthcare Experts Handle Your Revenue Cycle
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-650 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Partner with us to reduce denials, accelerate cash flow, and ensure compliance so you can focus entirely on patient care.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link 
            to="/rcm/contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] text-white font-extrabold shadow-xl shadow-[#10b981]/20 hover:shadow-[#10b981]/30 transition-all hover:scale-[1.03]"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/rcm/contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold border border-slate-200 dark:border-white/10 transition-colors backdrop-blur-md hover:scale-[1.03]"
          >
            <CalendarDays className="w-4 h-4 text-secondary" />
            <span>Schedule Consultation</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
