import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, Ban, ShieldCheck, Users } from 'lucide-react';

export default function WhyChooseUsSection() {
  const [collections, setCollections] = useState<number>(250000);

  const estimatedGrowth = Math.round(collections * 0.15);
  const annualSavings = estimatedGrowth * 12;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <section className="py-28 bg-background border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 text-sm font-semibold mb-6">
            Why Choose Evolve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Driving Financial Excellence in Healthcare
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            We combine deep industry expertise with cutting-edge technology to deliver measurable improvements to your revenue cycle.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
          
          {/* Card 1: Interactive Revenue Optimizer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-3 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] hover:border-primary/20 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-2xl">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Revenue Optimizer Calculator</h3>
                  <p className="text-xs text-slate-500 font-bold">Estimate your financial lift with Evolve RCM</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    <span>Monthly Collections</span>
                    <span className="text-secondary font-bold">{formatter.format(collections)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="25000"
                    value={collections}
                    onChange={(e) => setCollections(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-slate-550 mt-1 font-bold">
                    <span>$50K</span>
                    <span>$500K</span>
                    <span>$1M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Monthly Increase</div>
                <div className="text-xl sm:text-2xl font-black text-accent">{formatter.format(estimatedGrowth)}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-semibold">Avg +15% Optimization</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Annual Optimization</div>
                <div className="text-xl sm:text-2xl font-black text-secondary">{formatter.format(annualSavings)}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-semibold">Accelerated Cash Flow</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Days in AR Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 lg:col-span-3 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] hover:border-primary/20 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 border border-secondary/20 text-secondary rounded-2xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">Days in AR</h3>
                  <p className="text-xs text-slate-500 font-bold">Lower is better. Represents average time to collect.</p>
                </div>
              </div>

              {/* Bar Comparison */}
              <div className="space-y-5 my-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400">
                    <span>Industry average billing cycle</span>
                    <span>42 Days</span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex items-center">
                    <div className="h-full bg-slate-400 dark:bg-slate-750 w-[100%] rounded-full text-[10px] font-black text-white dark:text-slate-300 flex items-center pl-3">Slow turnaround</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span>Evolve Medical Solutions standard</span>
                    <span className="text-accent font-bold">28 Days</span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex items-center">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[66%] rounded-full text-[10px] font-black text-white flex items-center pl-3">33% Faster collections</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light mt-4">
              Our automated claim submission scrubbing reduces days in accounts receivable significantly, putting cash back in your business immediately.
            </p>
          </motion.div>

          {/* Card 3: Live Compliance / HIPAA Shield */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-[32px] hover:border-primary/20 transition-all duration-300 text-center flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center bg-accent/10 border border-accent/20 text-accent rounded-2xl animate-glow-pulse">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">100% HIPAA Compliance</h3>
              <p className="text-xs text-slate-650 dark:text-slate-400 font-light leading-relaxed">
                Strict adherence to HIPAA policies and the latest healthcare security measures. We undergo regular SOC audits.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-accent uppercase tracking-widest">
              SOC 2 Type II Compliant
            </div>
          </motion.div>

          {/* Card 4: Denial rate */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-[32px] hover:border-primary/20 transition-all duration-300 text-center flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl">
                <Ban className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">Drastically Reduced Denials</h3>
              <p className="text-xs text-slate-650 dark:text-slate-400 font-light leading-relaxed">
                Aggressive denial analysis and appeals processes reduce average client denials down to less than 1.5%.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-red-500 uppercase tracking-widest">
              &lt; 1.5% Denial Average
            </div>
          </motion.div>

          {/* Card 5: Certified Specialists */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-[32px] hover:border-primary/20 transition-all duration-300 text-center flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-secondary/10 border border-secondary/20 text-secondary rounded-2xl">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">Certified Specialists</h3>
              <p className="text-xs text-slate-650 dark:text-slate-400 font-light leading-relaxed">
                Our coding teams are fully AAPC & AHIMA certified, keeping pace with annual coding guidelines.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] font-bold text-secondary uppercase tracking-widest">
              AAPC & AHIMA Certified
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
