import React from 'react';
import { motion } from 'framer-motion';

export default function Problems() {
  const items = [
    {
      num: '01',
      title: 'Unstable monthly revenue.',
      desc: 'Strong months followed by weak ones make planning impossible. Staffing, expansion and daily operations all suffer when patient flow is inconsistent.'
    },
    {
      num: '02',
      title: 'Wasted marketing spend.',
      desc: "You invest heavily in promotions and third-party endorsements — but they don't build long-term trust or consistent patient acquisition."
    },
    {
      num: '03',
      title: 'Low visibility despite expertise.',
      desc: 'You may be highly skilled, but visibility decides patient choice. Clinics with stronger marketing systems attract more high-value cases — consistently.'
    },
    {
      num: '04',
      title: 'No structured patient-acquisition system.',
      desc: "A basic website or occasional marketing isn't enough. Without a continuous system, potential patients choose your competitors — every single day."
    }
  ];

  return (
    <section className="py-24 bg-white text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          <div>
            <div className="text-[#0B4F9C] text-xs font-bold uppercase tracking-wider mb-4">
              THE #1 PROBLEM
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Unpredictable <br className="hidden sm:inline" /> patient flow is <br className="hidden sm:inline" /> hurting{' '}
              <span className="relative inline-block z-10 px-1">
                <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                your clinic.
              </span>
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>Some months are full. Some are empty.</p>
            <p>Without a reliable system, you can't plan hiring, revenue, or growth.</p>
            <p>Uncertainty is not a strategy — it's a risk.</p>
          </div>
        </div>

        {/* 2x2 Grid of Roadblocks */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex gap-6 items-start"
            >
              <div className="text-5xl font-display font-black text-[#0B4F9C]/15 leading-none select-none">
                {item.num}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
