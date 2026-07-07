import React from 'react';

export default function SocialStats() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 text-center w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Star Rating */}
        <div className="flex justify-center gap-1 text-amber-500 text-lg md:text-xl">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-[#0B4F9C] tracking-tight leading-tight max-w-4xl mx-auto">
          Trusted by 100+ Healthcare Providers Across the U.S.
        </h2>

        {/* Sub-text */}
        <div className="text-slate-400 font-sans text-xs sm:text-sm flex flex-wrap justify-center items-center gap-2 sm:gap-3 leading-relaxed">
          <span>Rated</span>
          <span className="font-bold text-slate-800">4.9 / 5</span>
          <span className="text-slate-300">·</span>
          <span>Serving</span>
          <span className="font-bold text-slate-800">20+ Medical Specialties</span>
          <span className="text-slate-300">·</span>
          <span className="font-bold text-[#0B4F9C]">Helping</span>
          <span className="text-slate-500">Practices Grow Nationwide</span>
        </div>

      </div>
    </section>
  );
}
