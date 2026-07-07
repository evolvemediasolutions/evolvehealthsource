import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: '2-hour deep dive into your specialty, patient avatars and growth goals.',
      color: 'border-[#EF7E56] text-[#EF7E56]'
    },
    {
      num: '02',
      title: 'Positioning',
      desc: 'We craft your unique market position & signature offer.',
      color: 'border-[#0B4F9C] text-[#0B4F9C]'
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Website, GMB, Instagram & ad funnel — all rebuilt around the position.',
      color: 'border-[#529C7A] text-[#529C7A]'
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'First reels, ads & campaigns go live. Your patient phone starts ringing.',
      color: 'border-[#C2923D] text-[#C2923D]'
    },
    {
      num: '05',
      title: 'Scale',
      desc: 'Monthly content, ad optimisation & reporting. We compound your growth.',
      color: 'border-[#04244C] text-[#04244C]'
    }
  ];

  return (
    <section className="py-24 bg-white text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider mb-4">
              HOW WE ONBOARD YOU
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              From kickoff to <br className="hidden sm:inline" />{' '}
              <span className="relative inline-block z-10 px-1">
                <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                first booking
              </span>{' '}
              in 30 <br className="hidden sm:inline" /> days.
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              A focused 5-step onboarding sprint. You meet your team in week 1, your first reels go live in week 3, and the patient pipeline opens by day 30.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline Connector Block */}
        <div className="relative mt-24">
          {/* Dashed Connector Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#EF7E56]/40 z-0 hidden md:block" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Circle */}
                <div className={`w-12 h-12 rounded-full border-[2.5px] bg-white flex items-center justify-center font-bold text-base shadow-sm relative z-10 ${step.color}`}>
                  {step.num}
                </div>
                {/* Label & Description */}
                <div className="space-y-2 px-2 text-center">
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
