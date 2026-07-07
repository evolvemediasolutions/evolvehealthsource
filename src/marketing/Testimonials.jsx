import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonialsList = [
    {
      stars: '★★★★★',
      quote: '"We\'ve worked with several marketing agencies over the years, but this is the first team that focuses on real patient growth instead of vanity metrics. Our monthly appointment requests have increased significantly, and we finally have a predictable marketing system."',
      author: 'Dr. Sarah Mitchell',
      sub: 'OB-GYN • Austin, TX',
      initials: 'SM',
      avatarBg: 'bg-[#EF7E56]'
    },
    {
      stars: '★★★★★',
      quote: '"We went from barely showing up in local search results to ranking in the top three on Google Maps within a few months. Most of our new patients now come directly from Google."',
      author: 'Dr. Michael Anderson',
      sub: 'Dermatologist • Phoenix, AZ',
      initials: 'MA',
      avatarBg: 'bg-[#82C3B5]'
    },
    {
      stars: '★★★★★',
      quote: '"Their team became an extension of our practice. From website improvements to SEO and paid advertising, they\'ve handled everything while delivering measurable growth at a fraction of the cost of hiring an in-house marketing team."',
      author: 'Dr. Jennifer Carter',
      sub: 'Orthopedic Surgeon • Charlotte, NC',
      initials: 'JC',
      avatarBg: 'bg-[#06244C]'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFBFE]/75 text-left relative z-10 border-b border-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Featured Testimonial Quote */}
        <div className="w-full bg-[#F4F7FB] border border-slate-200/50 rounded-[28px] p-8 md:p-12 shadow-sm mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative text-left">
          {/* Big Initials Circle Avatar */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#06244C] text-white flex items-center justify-center font-display font-black text-4xl flex-shrink-0 shadow-lg shadow-blue-950/15">
            MA
          </div>
          
          {/* Quote details */}
          <div className="space-y-4 relative flex-grow">
            <span className="text-[#0B4F9C] font-serif text-5xl leading-none absolute -top-4 -left-1">“</span>
            
            <div className="flex text-yellow-500 text-sm pl-6 mb-2">
              ★★★★★
            </div>
            
            <p className="text-slate-800 text-lg md:text-xl font-bold font-sans leading-relaxed pl-6 select-all">
              For 12 years I depended only on patient referrals. ClinicBoost gave my clinic a clear identity in the market and the reels they produce actually get watched. We've doubled our monthly revenue and finally have a waiting list.
            </p>
            
            <div className="leading-none pl-6 pt-2">
              <h4 className="font-bold text-slate-900 text-sm block">Dr. Michael Anderson</h4>
              <span className="text-slate-500 text-xs block mt-1">Cardiologist • Dallas, Texas</span>
            </div>
          </div>
        </div>

        {/* Small Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
          {testimonialsList.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-slate-100 shadow-md shadow-slate-100/40 rounded-[24px] p-8 flex flex-col justify-between min-h-[300px] text-left relative"
            >
              {/* Quote details */}
              <div className="space-y-4">
                <div className="flex text-[#06244C] text-xs">
                  {t.stars}
                </div>
                <p className="text-slate-650 text-sm leading-relaxed font-normal select-all">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-slate-50 mt-6">
                <div className={`w-9 h-9 rounded-full ${t.avatarBg} text-white flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                  {t.initials}
                </div>
                <div className="leading-none">
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{t.author}</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">{t.sub}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
