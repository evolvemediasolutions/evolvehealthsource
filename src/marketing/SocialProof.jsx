import React from 'react';
import { Play, Heart, Send, Check } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-24 bg-white text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider mb-4">
              CONTENT THAT CONVERTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              Reels and videos <br /> that{' '}
              <span className="relative inline-block z-10 px-1">
                <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                stop the scroll
              </span>{' '}
              <br /> — and start the <br /> booking.
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              No filters, no fake hype. Deeply-researched, medically-accurate content shot in real clinical settings. Built for the algorithm. Built for the patient. Built for you.
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Phone Mockup inside Blue Box */}
          <div className="lg:col-span-5 bg-[#0A3D7E] rounded-[32px] p-8 flex justify-center items-center overflow-hidden min-h-[500px] relative shadow-sm border border-blue-900/10">
            {/* Background glowing gradient circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl z-0" />

            {/* Mobile Phone Mockup */}
            <div className="relative w-[260px] aspect-[9/18] rounded-[38px] border-[6px] border-slate-950 bg-slate-950 shadow-2xl overflow-hidden z-10 flex flex-col">
              {/* Speaker Notch */}
              <div className="absolute top-0 inset-x-0 h-4 bg-slate-950 z-20 flex items-center justify-center">
                <div className="w-16 h-3 bg-black rounded-b-lg" />
              </div>

              {/* Video Screen Content */}
              <div className="relative flex-grow overflow-hidden flex flex-col justify-end">
                {/* Doctor Portrait Image */}
                <img
                  src="/images/MARKETING/doctor.png"
                  alt="Dr. Jessica Miller - Reels Video"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />

                {/* Reels Info & Overlay (Bottom) */}
                <div className="relative z-20 p-4 space-y-3 text-left">
                  {/* Tag Category */}
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                    IVF - MOST-WATCHED
                  </span>
                  
                  {/* Title */}
                  <h4 className="text-white font-bold text-sm leading-tight tracking-tight">
                    What 90% of IVF clinics don't tell you
                  </h4>

                  {/* Actions & Statistics */}
                  <div className="flex items-center gap-3.5 text-white/95 text-[10px] font-bold">
                    <div className="flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" />
                      <span>1.2M</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-current text-red-500" />
                      <span>86K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Send className="w-3 h-3 rotate-[-20deg]" />
                      <span>4.2K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 4 Dashboard Grid Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Card A: Sarah Mitchell Google Review */}
            <div className="bg-[#FFF0EB] border border-orange-100 rounded-[28px] p-6 flex flex-col justify-between text-left shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EF7E56] text-white flex items-center justify-center font-bold text-sm">
                      SM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-tight">Sarah Mitchell</h4>
                      <span className="text-[10px] text-slate-400 block mt-0.5">1 week ago</span>
                    </div>
                  </div>
                  <div className="flex text-yellow-500 text-xs">
                    ★★★★★
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-normal">
                  Watched their dental reel, walked into the clinic same evening. Zero waiting. Cleaned, scaled, done in 40 mins. Worth it.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-[10px] font-bold text-slate-400 border-t border-orange-200/40 mt-4">
                <div className="w-3.5 h-3.5 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-bold text-[8px]">
                  G
                </div>
                <span>Posted on Google</span>
              </div>
            </div>

            {/* Card B: WhatsApp Chat Message */}
            <div className="bg-[#FFF9F6] border border-orange-100/50 rounded-[28px] overflow-hidden flex flex-col text-left shadow-sm">
              <div className="bg-[#0B664B] text-white p-3.5 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#EF7E56] text-white flex items-center justify-center font-bold text-xs">
                  RM
                </div>
                <div className="leading-none text-left">
                  <h4 className="text-xs font-bold text-white">Rebecca Moore</h4>
                  <span className="text-[9px] text-emerald-100 block mt-0.5">online</span>
                </div>
              </div>
              <div className="p-4 space-y-3 font-sans text-xs bg-[#F3EFE9] flex-grow min-h-[160px]">
                <div className="bg-white rounded-lg p-2.5 max-w-[85%] text-left text-slate-800 shadow-sm leading-relaxed">
                  Hi, I saw your IVF reel today 🤍
                </div>
                <div className="bg-white rounded-lg p-2.5 max-w-[85%] text-left text-slate-800 shadow-sm leading-relaxed">
                  Can we talk?
                </div>
                <div className="bg-[#DCF8C6] rounded-lg p-2.5 max-w-[85%] ml-auto text-left text-slate-800 shadow-sm relative pb-5 leading-relaxed">
                  Of course! Tomorrow 11am works?
                  <span className="absolute right-2 bottom-1 text-[8px] text-slate-400">10:42 ✓✔</span>
                </div>
              </div>
            </div>

            {/* Card C: Instagram Post Card */}
            <div className="bg-white border border-slate-100 rounded-[28px] p-4 flex flex-col justify-between text-left shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 text-white flex items-center justify-center font-bold text-[9px]">
                  J
                </div>
                <span className="text-xs font-bold text-slate-800">@dr.james.wilson.cardio</span>
              </div>
              
              <div className="bg-[#0A3D7E] rounded-2xl aspect-square flex flex-col justify-between p-6 text-center text-white relative shadow-inner">
                <div className="flex-grow flex items-center justify-center">
                  <h4 className="text-base sm:text-lg font-bold tracking-tight leading-snug">
                    3 chest-pain symptoms you should never ignore
                  </h4>
                </div>
                <div className="flex justify-center gap-1.5 text-[8px] text-white/50">
                  <span className="text-white font-bold">●</span>
                  <span>○</span>
                  <span>○</span>
                  <span>○</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-slate-400 text-xs">
                <div className="flex gap-3">
                  <span>♥</span>
                  <span>💬</span>
                  <span>⬏</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500">14,231 likes</span>
              </div>
            </div>

            {/* Card D: Bookings Count Statistics */}
            <div className="bg-[#FDF8F5] border border-orange-100/50 rounded-[28px] p-6 flex flex-col justify-between text-left shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">3 bookings</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">last 24 hrs</span>
                </div>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-orange-200/10">
                  <span className="text-slate-450 font-medium">From IG reels</span>
                  <span className="text-[#EF7E56] font-bold">+8</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-orange-200/10">
                  <span className="text-slate-450 font-medium">From Google</span>
                  <span className="text-blue-600 font-bold">+12</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-450 font-medium">From WhatsApp</span>
                  <span className="text-emerald-600 font-bold">+5</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
