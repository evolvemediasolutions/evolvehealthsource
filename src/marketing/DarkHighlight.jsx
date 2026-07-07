import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, MessageSquare } from 'lucide-react';

export default function DarkHighlight() {
  const cards = [
    {
      badge: 'COMPLIANCE',
      icon: Shield,
      title: 'HIPAA & medical advertising standards.',
      desc: "Patient privacy and medical advertising compliance are baked into every campaign. We won't put your licence at risk for a viral reel."
    },
    {
      badge: 'THE ALGORITHM',
      icon: Clock,
      title: 'YMYL-grade content structure.',
      desc: 'We know exactly how to structure medical information for Google\'s "Your Money or Your Life" quality rater guidelines. That\'s why our clinics rank.'
    },
    {
      badge: 'THE PSYCHOLOGY',
      icon: MessageSquare,
      title: 'Authority + empathy, in every word.',
      desc: 'Messaging that balances medical authority with human approachability — so patients trust you before they ever book a consultation.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1524] text-white text-center relative overflow-hidden border-t border-b border-white/5 w-full z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            WHY VERTICAL BEATS GENERALIST
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-[1.1]">
            BUILT FOR DOCTORS WHO <br className="hidden sm:inline" />{' '}
            VALUE <span className="text-[#EF7E56]">LONG-TERM GROWTH.</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A better patient experience starts before the first appointment. Today, patients research before they reach out. We help clinics create a digital presence that feels trustworthy, clear, and professional.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-[24px] p-8 flex flex-col gap-5 text-left shadow-sm transition-all"
              >
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-white/5 text-cyan-400 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <span className="text-[#EF7E56] text-[10px] font-bold tracking-widest uppercase block">
                    {card.badge}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
