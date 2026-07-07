import React from 'react';
import { motion } from 'framer-motion';
import { Star, Search, Video } from 'lucide-react';

export default function WhyFail() {
  const pillars = [
    {
      num: 'PILLAR 01',
      icon: Star,
      iconBg: 'bg-[#0B4F9C]',
      iconColor: 'text-white',
      cardBg: 'bg-[#EAF3FF]',
      badgeBg: 'bg-[#0B4F9C]/10',
      badgeColor: 'text-[#0B4F9C]',
      title: 'You become the most-followed doctor in your specialty.',
      desc: 'Medically-accurate reels & videos shot in your clinical setting — built to make patients trust you before they ever walk in.',
      titleColor: 'text-slate-900',
      descColor: 'text-slate-600',
      bottomBlock: {
        bg: 'bg-[#06244C]',
        textColor: 'text-white',
        subColor: 'text-white/70',
        iconBg: 'bg-white/10',
        iconColor: 'text-white',
        line1: '10x visibility',
        line2: 'in just 90 days'
      }
    },
    {
      num: 'PILLAR 02',
      icon: Search,
      iconBg: 'bg-white/15',
      iconColor: 'text-white',
      cardBg: 'bg-gradient-to-b from-[#0A3D7E] to-[#06244C]',
      badgeBg: 'bg-white/10',
      badgeColor: 'text-white',
      title: 'Patient flow becomes predictable, every month.',
      desc: 'Local SEO + Google & Meta ad funnels + WhatsApp automation that fill your appointment book on a schedule, not by luck.',
      titleColor: 'text-white',
      descColor: 'text-blue-100/80',
      bottomBlock: {
        bg: 'bg-[#62C8E3]',
        textColor: 'text-[#06244C]',
        subColor: 'text-[#06244C]/80',
        iconBg: 'bg-[#06244C]/10',
        iconColor: 'text-[#06244C]',
        line1: 'Predictable bookings',
        line2: 'every single month'
      }
    },
    {
      num: 'PILLAR 03',
      icon: Video,
      iconBg: 'bg-[#529C7A]',
      iconColor: 'text-white',
      cardBg: 'bg-[#EAF5F0]',
      badgeBg: 'bg-[#3B7A57]/10',
      badgeColor: 'text-[#3B7A57]',
      title: 'You stop renting credibility — and start owning it.',
      desc: 'No more paying influencers. No more PR retainers. The brand, the audience and the trust live on your handles, forever.',
      titleColor: 'text-slate-900',
      descColor: 'text-slate-600',
      italicWord: 'your',
      bottomBlock: {
        bg: 'bg-[#5C9A7F]',
        textColor: 'text-white',
        subColor: 'text-white/70',
        iconBg: 'bg-white/10',
        iconColor: 'text-white',
        line1: 'Yours, forever',
        line2: 'audience & trust owned',
        line3: 'outright'
      }
    }
  ];

  return (
    <section id="transformation" className="py-24 bg-slate-50 border-t border-b border-slate-100 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          <div>
            <div className="text-[#0B4F9C] text-xs font-bold uppercase tracking-wider mb-4">
              THE TRANSFORMATION
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Three things <br /> change when{' '}
              <span className="relative inline-block z-10 px-1">
                <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                you
              </span>{' '}
              <br /> become the <br /> influencer.
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              You don't need a celebrity to vouch for you. Your patients want to follow{' '}
              <em className="italic font-medium text-slate-700">their doctor</em> — not someone the doctor pays. We turn you into the most-followed name in your specialty, and turn the following into bookings.
            </p>
          </div>
        </div>

        {/* Three Transformation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`p-8 pb-[116px] rounded-[24px] flex flex-col justify-between min-h-[380px] border border-slate-200/40 shadow-sm relative overflow-hidden ${pillar.cardBg}`}
              >
                <div className="space-y-6">
                  {/* Card Header (Pillar Pill + Icon Circle) */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${pillar.badgeBg} ${pillar.badgeColor}`}>
                      {pillar.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.iconBg} ${pillar.iconColor}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 text-left">
                    <h3 className={`text-xl font-bold tracking-tight leading-snug ${pillar.titleColor}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${pillar.descColor}`}>
                      {pillar.italicWord ? (
                        <>
                          No more paying influencers. No more PR retainers. The brand, the audience and the trust live on{' '}
                          <em className="italic text-slate-800 font-semibold">your</em> handles, forever.
                        </>
                      ) : (
                        pillar.desc
                      )}
                    </p>
                  </div>
                </div>

                {/* Flush Corner Bottom-Left Highlight Block */}
                {pillar.bottomBlock && (
                  <div className={`absolute left-0 bottom-0 w-[78%] h-[90px] rounded-tr-[20px] flex items-center gap-3 pl-8 pr-4 py-3 ${pillar.bottomBlock.bg}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black ${pillar.bottomBlock.iconBg} ${pillar.bottomBlock.iconColor}`}>
                      ↗
                    </div>
                    <div className="text-left font-sans leading-tight">
                      <div className={`text-sm font-bold tracking-tight ${pillar.bottomBlock.textColor}`}>
                        {pillar.bottomBlock.line1}
                      </div>
                      <div className={`text-[11px] font-medium ${pillar.bottomBlock.subColor}`}>
                        {pillar.bottomBlock.line2}
                      </div>
                      {pillar.bottomBlock.line3 && (
                        <div className={`text-[11px] font-medium ${pillar.bottomBlock.subColor}`}>
                          {pillar.bottomBlock.line3}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
