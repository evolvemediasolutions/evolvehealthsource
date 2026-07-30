import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Sparkles, Megaphone, Activity, ShieldCheck, HeartPulse, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ParentLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logo-grad)" />
        <path d="M12 16 H20 M16 12 V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7 11 C9 8 13 6 16 6 C19 6 23 8 25 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
        <path d="M7 21 C9 24 13 26 16 26 C19 26 23 24 25 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-extrabold text-xl sm:text-2xl tracking-[0.12em] text-slate-900 font-sans">
        EVOLVE<span className="text-blue-600 font-medium">HEALTH</span><span className="text-slate-400 font-light text-xs tracking-widest ml-1 hidden sm:inline">SOURCE</span>
      </span>
    </div>
  );
}

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-32 sm:h-36 md:h-40 xl:h-44 text-blue-500 drop-shadow-md select-none pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-marketing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="grad-marketing-soft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect x="20" y="10" width="160" height="120" rx="16" fill="url(#grad-marketing-soft)" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
      
      {/* Browser mockup */}
      <rect x="40" y="25" width="120" height="90" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <line x1="40" y1="41" x2="160" y2="41" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="50" cy="33" r="2.5" fill="#ef4444" />
      <circle cx="57" cy="33" r="2.5" fill="#eab308" />
      <circle cx="64" cy="33" r="2.5" fill="#22c55e" />
      <rect x="74" y="30" width="52" height="6" rx="3" fill="#f1f5f9" />
      
      {/* Clinic icon inside browser */}
      <rect x="50" y="53" width="46" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M73 63V81M64 72H82" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Growth Bars */}
      <rect x="110" y="78" width="8" height="24" rx="2.5" fill="url(#grad-marketing)" />
      <rect x="122" y="66" width="8" height="36" rx="2.5" fill="url(#grad-marketing)" />
      <rect x="134" y="52" width="8" height="50" rx="2.5" fill="url(#grad-marketing)" />
      
      {/* Trendline */}
      <path d="M106 88 L122 72 L134 60 L146 44" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="146" cy="44" r="4" fill="#10b981" filter="url(#glow)" />
      
      {/* Floating Sparkles */}
      <path d="M154 85L155.5 89.5L160 91L155.5 92.5L154 97L152.5 92.5L148 91L152.5 89.5Z" fill="#eab308" />
      <path d="M32 50L33 53L36 54L33 55L32 58L31 55L28 54L31 53Z" fill="#3b82f6" />
    </svg>
  );
}

function RcmIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-32 sm:h-36 md:h-40 xl:h-44 text-indigo-500 drop-shadow-md select-none pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-rcm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="grad-rcm-soft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow-rcm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <rect x="20" y="10" width="160" height="120" rx="16" fill="url(#grad-rcm-soft)" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3"/>
      
      {/* Main medical shield */}
      <path d="M100 28 C120 28 140 22 140 22 C140 54 135 84 100 100 C65 84 60 54 60 22 C60 22 80 28 100 28 Z" fill="white" stroke="#4f46e5" strokeWidth="1.5" strokeLinejoin="round" />
      
      {/* Shield Internal Pattern */}
      <path d="M100 35 L100 88 M76 62 L124 62" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Checkmark at center */}
      <circle cx="100" cy="62" r="16" fill="url(#grad-rcm)" filter="url(#glow-rcm)" />
      <path d="M93 62 L98 67 L107 56" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Connected nodes */}
      <circle cx="48" cy="46" r="5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
      <path d="M53 46 Q70 46 66 58" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
      
      <circle cx="44" cy="84" r="5" fill="#0d9488" stroke="white" strokeWidth="1.5" />
      <path d="M49 84 Q70 84 72 74" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="2 2" />
      
      <circle cx="152" cy="46" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" />
      <path d="M147 46 Q130 46 130 56" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />

      <circle cx="156" cy="84" r="5" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
      <path d="M151 84 Q130 84 126 74" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Mini Sparkles */}
      <path d="M110 18 L111.5 21 L114.5 21.5 L111.5 22 L110 25 L108.5 22 L105.5 21.5 Z" fill="#eab308" />
    </svg>
  );
}

export default function Gateway() {
  const navigate = useNavigate();

  const handleMarketingClick = () => {
    navigate('/marketing/home');
  };

  const handleRcmClick = () => {
    navigate('/rcm/home');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden flex flex-col justify-between items-center bg-white text-slate-800 font-sans p-4 sm:p-6 md:p-8 lg:p-12 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.01]"></div>

        {/* Slow floating radial gradient blobs */}
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -35, 15, 0],
            scale: [1, 1.04, 0.98, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-gradient-to-br from-blue-300/20 via-indigo-200/10 to-transparent blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -15, 30, 0],
            y: [0, 35, -15, 0],
            scale: [1, 0.98, 1.04, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-gradient-to-br from-teal-200/20 via-blue-200/10 to-transparent blur-[120px] rounded-full"
        />
        
        {/* Soft center pulse light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-radial from-blue-100/10 to-transparent blur-[130px] rounded-full pointer-events-none"></div>
      </div>

      {/* Header / Brand Logo */}
      <header className="w-full max-w-7xl mx-auto flex justify-center py-2 sm:py-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ParentLogo />
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-grow z-10">
        
        {/* Title and Intro Paragraph */}
        <div className="text-center max-w-3xl px-4 mb-4 sm:mb-6 lg:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-blue-800"
          >
            Choose Your Healthcare Solution
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-slate-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Evolve Health Source unites healthcare marketing and revenue cycle management under one trusted brand. Select the solution that best supports your organization's growth and operational excellence.
          </motion.p>
        </div>

        {/* Business Selection Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-center items-stretch"
        >
          
          {/* Card 1 — MyClinicBoost */}
          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col justify-between bg-white/85 backdrop-blur-md border border-slate-200/80 hover:border-blue-300 rounded-[24px] p-5 sm:p-6 lg:p-8 xl:p-10 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_35px_60px_-15px_rgba(59,130,246,0.1)] transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={handleMarketingClick}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.99 }}
            style={{ contentVisibility: 'auto' }}
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div>
              {/* Illustration container */}
              <div className="w-full flex justify-center mb-4 sm:mb-6 rounded-2xl bg-slate-50/50 group-hover:bg-blue-50/30 border border-slate-100 group-hover:border-blue-100/50 p-2 transition-colors duration-300">
                <MarketingIllustration />
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Megaphone className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  MyClinicBoost
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                Helping healthcare providers grow through professional website development, healthcare SEO, branding, paid advertising, and digital marketing.
              </p>

              {/* Chips Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {['Website Development', 'Healthcare SEO', 'Digital Marketing', 'Branding', 'Patient Growth'].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/50 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors duration-300"
                  >
                    {chip === 'Patient Growth' && <Sparkles className="w-2.5 h-2.5 mr-1 text-amber-500 animate-pulse" />}
                    {chip === 'Website Development' && <Globe className="w-2.5 h-2.5 mr-1 text-blue-500" />}
                    {chip === 'Healthcare SEO' && <TrendingUp className="w-2.5 h-2.5 mr-1 text-teal-500" />}
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button
                className="w-full relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#10b981] shadow-md group-hover:shadow-lg group-hover:shadow-[#2563eb]/25 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMarketingClick();
                }}
              >
                <span>Explore MyClinicBoost</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 — Evolve RCM */}
          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col justify-between bg-white/85 backdrop-blur-md border border-slate-200/80 hover:border-indigo-300 rounded-[24px] p-5 sm:p-6 lg:p-8 xl:p-10 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_35px_60px_-15px_rgba(79,70,229,0.1)] transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={handleRcmClick}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.99 }}
            style={{ contentVisibility: 'auto' }}
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div>
              {/* Illustration container */}
              <div className="w-full flex justify-center mb-4 sm:mb-6 rounded-2xl bg-slate-50/50 group-hover:bg-indigo-50/30 border border-slate-100 group-hover:border-indigo-100/50 p-2 transition-colors duration-300">
                <RcmIllustration />
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Activity className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  Evolve RCM
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                Optimizing healthcare revenue through medical billing, claims management, denial prevention, payment posting, and revenue cycle optimization.
              </p>

              {/* Chips Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {['Medical Billing', 'Revenue Cycle', 'Claims Processing', 'Denial Management', 'Revenue Optimization'].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/50 group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-100 transition-colors duration-300"
                  >
                    {chip === 'Denial Management' && <ShieldCheck className="w-2.5 h-2.5 mr-1 text-indigo-500" />}
                    {chip === 'Medical Billing' && <CreditCard className="w-2.5 h-2.5 mr-1 text-emerald-500" />}
                    {chip === 'Revenue Optimization' && <HeartPulse className="w-2.5 h-2.5 mr-1 text-rose-500 animate-pulse" />}
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button
                className="w-full relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#10b981] shadow-md group-hover:shadow-lg group-hover:shadow-[#2563eb]/25 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRcmClick();
                }}
              >
                <span>Explore Evolve RCM</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
          
        </motion.div>
      </main>

      {/* Footer / Copyright */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4 border-t border-slate-200/40 text-[10px] sm:text-xs text-slate-400 select-none z-10 gap-2 sm:gap-0">
        <div>
          © {new Date().getFullYear()} Evolve Health Source. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span className="hover:text-slate-600 transition-colors duration-200 cursor-pointer">Terms of Service</span>
          <span className="hover:text-slate-600 transition-colors duration-200 cursor-pointer">Privacy Policy</span>
        </div>
      </footer>

    </div>
  );
}
