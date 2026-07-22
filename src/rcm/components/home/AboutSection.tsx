import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
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
          
          {/* Left - Visual Card and Metrics overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-[32px] blur-xl opacity-30"></div>
            
            <div className="relative z-10 bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-2xl overflow-hidden min-h-[400px] sm:min-h-[450px] transition-colors duration-300">
              
              {/* Background comforting image */}
              <img
                src="/images/RCM/about-care.png"
                alt="Healthcare professional comforting patient"
                className="absolute inset-0 w-full h-full object-cover brightness-95 dark:brightness-75 select-none"
              />
              {/* Soft overlay gradients for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent z-1"></div>
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
