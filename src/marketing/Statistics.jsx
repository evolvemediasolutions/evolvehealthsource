import React from 'react';
import { motion } from 'framer-motion';

export default function Statistics() {
  const stats = [
    {
      value: '3.5',
      unit: 'x',
      label: 'Avg. monthly new patients'
    },
    {
      value: '$250',
      unit: 'K+',
      label: 'Added monthly revenue (avg)'
    },
    {
      value: '186',
      unit: '%',
      label: 'Increase in qualified calls'
    },
    {
      value: '14',
      unit: ':1',
      label: 'Average return on ad spend'
    }
  ];

  return (
    <section className="py-24 bg-white text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider mb-4">
              THE NUMBERS
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Outcomes you can <br className="hidden sm:inline" /> take to the bank.
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              Our healthcare marketing strategies have helped physicians and medical practices across the U.S. attract more patients, increase revenue, and build sustainable long-term growth.
            </p>
          </div>
        </div>

        {/* Separator Border Wrapper for Stats */}
        <div className="border-t border-b border-slate-200/60 py-12 md:py-16 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 sm:divide-x divide-slate-250/60">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="text-center px-4 space-y-2.5"
              >
                <div className="text-5xl sm:text-6xl font-display font-black text-[#06244C] flex items-baseline justify-center tracking-tight select-all">
                  <span>{stat.value}</span>
                  <span className="text-[#EF7E56] font-bold text-3xl sm:text-4xl ml-1 leading-none">
                    {stat.unit}
                  </span>
                </div>
                <div className="text-slate-500 font-sans text-xs sm:text-sm font-medium tracking-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
