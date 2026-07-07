import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F8FAFC] overflow-hidden pt-16 pb-20 text-left">
      {/* Background glow blobs */}
      <div className="absolute top-[20%] right-[-5%] w-[45%] h-[55%] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-[10%] w-[35%] h-[45%] bg-rose-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3EDF7] text-blue-900 text-xs font-semibold border border-blue-150/30"
            >
              <span className="w-2 h-2 rounded-full bg-[#1E40AF]" />
              <span>Built exclusively for doctors who want consistent growth</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[54px] font-display font-black tracking-tight text-slate-900 leading-[1.12]"
            >
              The Growth Partner for <br />
              Doctors & Healthcare <br />
              Practices{' '}
              <span className="relative inline-block pb-1">
                Across the U.S.
                <span className="absolute bottom-0 left-0 w-full">
                  <svg viewBox="0 0 320 12" className="w-full h-2.5 text-sky-400 fill-none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M4 8 C90 3, 210 3, 316 7" />
                  </svg>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl"
            >
              Today's patients choose doctors they trust and recognize. <br />
              We position your clinic as the first choice in your field <br />
              and convert that visibility into <strong className="font-extrabold text-slate-900">consistent, predictable patient flow.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-[#F07A53] hover:bg-[#e26941] text-white font-bold text-[15px] tracking-wide rounded-full shadow-lg shadow-orange-500/20 transition-all cursor-pointer text-center"
              >
                See Our 3 Packages
              </a>
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-blue-600 font-bold text-[15px] tracking-wide rounded-full transition-all cursor-pointer text-center"
              >
                Claim Your Free Audit
              </a>
            </motion.div>

            {/* Bottom Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#EBF3FC] rounded-xl px-5 py-3 text-slate-705 text-xs sm:text-sm font-semibold tracking-wide text-left max-w-lg mt-6 border border-[#D3E5F9]/30"
            >
              Be the <strong className="font-bold text-[#1E40AF]">first doctor patients think of</strong> when they need care.
            </motion.div>
          </div>

          {/* Right Column (Doctor & Mock Google Review + Booking Confirmed Card) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0 select-none">
            
            {/* Doctor Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[420px]"
            >
              <img
                src="/images/MARKETING/US1-removebg-preview.png"
                alt="Healthcare Practice Doctor Partner"
                className="w-full h-auto object-cover select-none relative z-10"
              />
              {/* Card 1: Google Review Mock (Top-Left overlay) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[-40px] md:left-[-70px] top-[10%] bg-white border border-slate-200/50 rounded-[20px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-0 w-[240px] md:w-[270px] -rotate-[4deg] text-left"
              >
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#EF7E56] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    EC
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] font-bold text-slate-800 leading-none">Emily</span>
                      <div className="flex text-yellow-400 text-[10px]">
                        ★★★★★
                      </div>
                    </div>
                    <div className="text-[13px] font-bold text-slate-800 leading-tight mt-1">Carter</div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <span>2 days ago</span>
                      <span>·</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Local Guide</div>
                  </div>
                </div>
                
                <p className="text-[11px] text-slate-650 leading-relaxed font-normal mb-3">
                  I found Dr. Johnson through Google and scheduled my appointment online. The entire experience was smooth, and the staff made me feel comfortable from start to finish. Highly recommend!
                </p>
                
                <div className="flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[10px] font-semibold text-slate-400">
                  <div className="w-3.5 h-3.5 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-bold text-[8px]">
                    G
                  </div>
                  <span>Posted on Google</span>
                </div>
              </motion.div>

              {/* Card 2: Booking Confirmed Mock (Bottom-Right overlay) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute right-[-20px] md:right-[-35px] bottom-[5%] bg-white border border-slate-200/50 rounded-[20px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-20 w-[220px] md:w-[245px] rotate-[3deg] text-left"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-[3]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-none">Booking confirmed</h4>
                    <span className="text-[9px] text-slate-405 block mt-1">3 mins ago</span>
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-medium">Patient</span>
                    <span className="text-slate-800 font-bold">Michael Johnson</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-medium">Date</span>
                    <span className="text-slate-800 font-bold">Tomorrow · 11 am</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-medium">Source</span>
                    <span className="text-[#F07A53] font-bold">Google Search</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
