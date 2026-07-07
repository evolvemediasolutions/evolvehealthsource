import React from 'react';

export default function TrustBar() {
  const specialties = [
    'Dermatology',
    'Orthopaedics',
    'Paediatrics',
    'Aesthetics',
    'Cardiology',
    'Dental',
    'Ophthalmology',
    'Plastic Surgery'
  ];

  return (
    <section className="bg-slate-950 py-5 overflow-hidden w-full relative z-10 border-t border-b border-white/5">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      {/* Infinite scrolling marquee wrapper */}
      <div className="flex w-max animate-marquee whitespace-nowrap items-center gap-12">
        {Array(4).fill(specialties).flat().map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#F07A53] text-sm select-none">✦</span>
            <span className="text-white font-sans text-base md:text-lg font-bold tracking-tight">
              {item}
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
