import React from 'react';

export default function CaseStudies() {
  return (
    <section id="results" className="py-24 bg-[#F4F7FB] text-left relative z-10 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#0B4F9C] text-xs font-bold uppercase tracking-wider mb-4">
              CASE STUDIES
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Real Medical <br /> Practices. Real <br /> Growth.
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8 text-slate-550">
            <p>
              Success stories from healthcare providers across the United States. Performance metrics are verified using Google Analytics, Google Ads, CRM platforms, and appointment tracking systems.
            </p>
          </div>
        </div>

        {/* Case Studies Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 - Large Case Card (Evergreen Family Medicine) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 flex flex-col gap-6 shadow-sm border border-slate-200/40">
            {/* Top Banner (Dark Blue Gradient) */}
            <div className="bg-gradient-to-r from-[#06244C] to-[#0A3D7E] rounded-[20px] p-6 relative min-h-[160px] flex flex-col justify-between text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0" />
              <div className="z-10">
                <span className="inline-block bg-white text-[#06244C] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  Primary Care • Austin, TX
                </span>
              </div>
              <div className="z-10 mt-6 space-y-1">
                <div className="text-white font-display font-black text-4xl sm:text-5xl leading-none tracking-tight">
                  $1.4M
                </div>
                <div className="text-white/80 font-sans text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                  New Patient Revenue • 12 Months
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Evergreen Family Medicine
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Increased online visibility through local SEO, Google Ads, and website optimization, helping the practice consistently attract high-intent patients.
              </p>
            </div>

            {/* 3 Metrics Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-4.5">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#06244C] leading-none">14:1</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium block mt-1 leading-tight">return on ad spend</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#06244C] leading-none">+312</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium block mt-1 leading-tight">qualified leads</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#06244C] leading-none">42</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium block mt-1 leading-tight">new IVF cycles</div>
              </div>
            </div>

            {/* Line Chart Block */}
            <div className="border border-slate-100/80 rounded-[20px] p-5 relative bg-[#FCFDFE]">
              {/* Header inside Chart Block */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-left space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    MONTHLY ENQUIRIES
                  </span>
                  <div className="flex items-baseline gap-1.5 leading-none">
                    <span className="text-2xl font-bold text-[#06244C]">248</span>
                    <span className="text-[10px] text-slate-400 font-medium">enquiries / month · current</span>
                  </div>
                </div>
                <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                  ▲ 287% <span className="font-normal text-slate-400">over 8 months</span>
                </span>
              </div>

              {/* SVG Line Chart */}
              <div className="w-full h-[120px] relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#F1F5F9" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="#F1F5F9" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#F1F5F9" strokeDasharray="3 3" />

                  {/* Gradient Area under curve */}
                  <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EF7E56" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#EF7E56" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area Fill */}
                  <path
                    d="M 20 100 Q 120 90, 220 70 T 420 40 L 480 35 L 480 110 L 20 110 Z"
                    fill="url(#chart-gradient)"
                  />

                  {/* Curved Trend Line */}
                  <path
                    d="M 20 100 Q 120 90, 220 70 T 420 40 L 480 35"
                    stroke="#EF7E56"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* End Glow Circle Node */}
                  <g transform="translate(480, 35)">
                    <circle r="12" fill="#EF7E56" opacity="0.15" />
                    <circle r="6" fill="none" stroke="#EF7E56" strokeWidth="2.5" />
                    <circle r="3" fill="#EF7E56" />
                  </g>
                </svg>
              </div>

              {/* Month Labels */}
              <div className="flex justify-between text-[10px] font-semibold text-slate-400 mt-2.5 px-3">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>
            </div>

          </div>

          {/* Column 2 - Stacked Smaller Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Card A (Smile Studio) */}
            <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-slate-200/40 flex flex-col">
              {/* Top Banner (Light Blue) */}
              <div className="bg-[#CDE0F2]/75 p-6 relative min-h-[140px] flex flex-col justify-between text-left">
                <div>
                  <span className="inline-block bg-white text-[#06244C] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Dental • Phoenix, AZ
                  </span>
                </div>
                <div className="mt-4 space-y-0.5">
                  <div className="text-[#06244C] font-display font-black text-4xl sm:text-5xl leading-none tracking-tight">
                    +433%
                  </div>
                  <div className="text-[#06244C]/80 font-sans text-[10px] uppercase tracking-wider font-semibold">
                    monthly bookings · 6 months
                  </div>
                </div>
              </div>
              
              {/* Bottom Body */}
              <div className="p-6 text-left space-y-2">
                <h4 className="text-lg font-bold text-slate-900">
                  Smile Studio
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  From 18 to 96 new patients/month — without dropping prices.
                </p>
              </div>
            </div>

            {/* Card B (Coastal Dermatology) */}
            <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-slate-200/40 flex flex-col">
              {/* Top Banner (Sage Green/Teal) */}
              <div className="bg-[#D1E7DD]/75 p-6 relative min-h-[140px] flex flex-col justify-between text-left">
                <div>
                  <span className="inline-block bg-white text-teal-800 font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Dermatology • Tampa, FL
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1.5 text-teal-900 leading-none">
                  <span className="font-display font-black text-4xl sm:text-5xl tracking-tight">
                    #1
                  </span>
                  <span className="font-display font-black text-2xl tracking-tight">
                    in Maps
                  </span>
                </div>
                <div className="text-teal-900/80 font-sans text-[10px] uppercase tracking-wider font-semibold mt-1">
                  in 11 weeks · 312 reviews
                </div>
              </div>
              
              {/* Bottom Body */}
              <div className="p-6 text-left space-y-2">
                <h4 className="text-lg font-bold text-slate-900">
                  Coastal Dermatology
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Achieved top local search rankings and significantly increased appointment requests through reputation management and local SEO.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
