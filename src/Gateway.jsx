import React from 'react';
import { Link } from 'react-router-dom';

import { PhoneCall, ArrowRight } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import MarketingIllustration from './components/MarketingIllustration';
import RcmIllustration from './components/RcmIllustration';

export default function Gateway() {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-slate-100 font-sans selection:bg-blue-150">

      {/* Floating Centered Brand Logo Header */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md py-2.5 px-6 rounded-full border border-slate-200/50 shadow-md select-none">
        <BrandLogo className="h-10 w-auto" />
      </header>

      {/* LEFT SPLIT PANEL: MyClinicBoost */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#031D3F] text-white flex flex-col justify-center items-center p-8 md:p-16 relative overflow-hidden group border-b md:border-b-0 md:border-r border-slate-900 z-10 transition-all duration-500 hover:z-20">
        {/* Soft cyan bottom-left glow */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Left Side Content Stack */}
        <div className="max-w-md text-center md:text-left flex flex-col items-center md:items-start relative z-10 space-y-4">
          <span className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase">
            PRACTICE GROWTH SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-none text-white">
            MyClinicBoost
          </h2>
          <p className="text-slate-300 text-xs lg:text-sm leading-relaxed max-w-sm select-all">
            Acquire private-pay patients, build doctor authority handles, and dominate local organic map searches with data-driven practice marketing.
          </p>

          {/* Features list */}
          <ul className="hidden sm:block space-y-2 pt-2 select-all">
            {[
              'Website Dev & Local Map SEO',
              'Short-Form Reels Production',
              'Procedure Campaign Tracking'
            ].map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Marketing Illustration */}
          <div className="hidden sm:flex w-full h-32 lg:h-40 my-3 justify-center md:justify-start">
            <MarketingIllustration className="h-full w-auto opacity-90 group-hover:scale-105 transition-transform duration-500" />
          </div>

          <Link
            to="/marketing/home"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#EF7E56] hover:bg-[#d96739] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-orange-500/25 group/btn cursor-pointer"
          >
            <span>Explore MyClinicBoost</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* RIGHT SPLIT PANEL: Evolve RCM */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-white to-blue-50/40 text-slate-900 flex flex-col justify-center items-center p-8 md:p-16 relative overflow-hidden group z-10 transition-all duration-500 hover:z-20">
        {/* Soft indigo top-right glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        {/* Right Side Content Stack */}
        <div className="max-w-md text-center md:text-left flex flex-col items-center md:items-start relative z-10 space-y-4">
          <span className="text-[#0B4F9C] font-bold tracking-widest text-[10px] uppercase">
            REVENUE CYCLE MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-none text-[#0B4F9C]">
            Evolve RCM
          </h2>
          <p className="text-slate-500 text-xs lg:text-sm leading-relaxed max-w-sm select-all">
            Maximise net collection rates, minimise denial write-offs, and optimise clean claim pass rates with certified coding and automated billing.
          </p>

          {/* Features list */}
          <ul className="hidden sm:block space-y-2 pt-2 select-all">
            {[
              'Certified Medical Coding (ICD-10)',
              'Accounts Receivable Management',
              'Denial Recovery & Prevention'
            ].map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0B4F9C] flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Rcm Illustration */}
          <div className="hidden sm:flex w-full h-32 lg:h-40 my-3 justify-center md:justify-start">
            <RcmIllustration className="h-full w-auto opacity-90 group-hover:scale-105 transition-transform duration-500" />
          </div>

          <Link
            to="/rcm/home"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B4F9C] hover:bg-[#093e7a] text-white rounded-full font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-blue-500/25 group/btn cursor-pointer"
          >
            <span>Explore Evolve RCM</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* FLOATING CENTER CONTACT CARD */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col items-center gap-2.5 text-center max-w-[280px] sm:max-w-xs transition-transform duration-300 hover:scale-105 select-all">
        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B4F9C] flex items-center justify-center flex-shrink-0">
          <PhoneCall className="w-4.5 h-4.5" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-[9px] font-bold text-slate-450 uppercase tracking-widest leading-none">
            DIRECT SUPPORT
          </h4>
          <a
            href="tel:+919025481909"
            className="block text-sm sm:text-base font-black text-slate-800 hover:text-blue-650 transition-colors"
          >
            +91 90254 81909
          </a>
          <a
            href="mailto:chitra@evolvehealthsource.com"
            className="block text-xs font-semibold text-blue-600 hover:underline"
          >
            chitra@evolvehealthsource.com
          </a>
        </div>
      </div>

    </div>
  );
}
