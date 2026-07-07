import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Check } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import MarketingIllustration from './components/MarketingIllustration';
import RcmIllustration from './components/RcmIllustration';

// Framer motion variants for coordinated page entrance animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Gateway() {
  return (
    <div className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between items-center bg-white text-slate-900 px-4 py-6 md:py-8 lg:py-6 lg:px-12 overflow-x-hidden overflow-y-auto lg:overflow-hidden no-scrollbar">
      
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blob 1: Sky Blue */}
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-150/40 blur-[100px] animate-float-1"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* Blob 2: Royal Blue / Indigo */}
        <motion.div
          className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px] animate-float-2"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* Blob 3: Subtle Center Glow */}
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-indigo-50/20 blur-[140px] pointer-events-none" />
      </div>

      {/* Top Header / Branding Area */}
      <motion.header
        className="w-full max-w-7xl mx-auto flex justify-center items-center z-10 pt-2 lg:pt-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <BrandLogo />
      </motion.header>

      {/* Main Core Content Gateway */}
      <motion.main
        className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-10 flex-grow my-6 lg:my-0 gap-6 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Hero Headline and Paragraph */}
        <motion.div className="text-center max-w-3xl flex flex-col items-center" variants={itemVariants}>
          {/* Subtle upper badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Operations Interface</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight mb-2.5">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Healthcare Solution
            </span>
          </h1>

          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal max-w-2xl px-2">
            Evolve Health Source unites healthcare marketing and revenue cycle management under one trusted brand. Select the solution that best supports your organization's growth and operational excellence.
          </p>
        </motion.div>

        {/* Business Selection Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-4xl items-stretch"
          variants={itemVariants}
        >
          
          {/* Card 1: MyClinicBoost */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[24px] p-5 lg:p-6 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-shadow duration-500 overflow-hidden"
          >
            {/* Top Highlight Border Accent on Card Hover */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[24px]" />
            
            {/* Card Content Top */}
            <div>
              {/* Custom SVG Illustration Container */}
              <div className="w-full h-24 lg:h-28 flex items-center justify-center mb-4 bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden relative group-hover:border-cyan-200/50 transition-colors duration-300">
                <MarketingIllustration className="w-full h-full" />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4.5 h-4.5 text-blue-600" />
                <h2 className="text-xl lg:text-2xl font-bold font-display text-slate-800 tracking-tight">
                  MyClinicBoost
                </h2>
                <span className="text-[9px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                  Growth
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs lg:text-[13px] leading-relaxed mb-4 font-normal">
                Helping healthcare providers grow through professional website development, healthcare SEO, branding, paid advertising, and digital marketing.
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {[
                  'Website Development',
                  'Healthcare SEO',
                  'Digital Marketing',
                  'Branding',
                  'Patient Growth',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 text-[11px] font-medium group-hover:bg-blue-50/30 group-hover:border-blue-100 group-hover:text-blue-700 transition-all duration-300"
                  >
                    <Check className="w-3 h-3 text-emerald-500" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button Action */}
            <Link
              to="/marketing/home"
              className="w-full py-2.5 lg:py-3 px-6 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-blue-500/20 group/btn"
            >
              <span>Explore MyClinicBoost</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Card 2: Evolve RCM */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[24px] p-5 lg:p-6 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] transition-shadow duration-500 overflow-hidden"
          >
            {/* Top Highlight Border Accent on Card Hover */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[24px]" />

            {/* Card Content Top */}
            <div>
              {/* Custom SVG Illustration Container */}
              <div className="w-full h-24 lg:h-28 flex items-center justify-center mb-4 bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden relative group-hover:border-indigo-200/50 transition-colors duration-300">
                <RcmIllustration className="w-full h-full" />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4.5 h-4.5 text-indigo-600" />
                <h2 className="text-xl lg:text-2xl font-bold font-display text-slate-800 tracking-tight">
                  Evolve RCM
                </h2>
                <span className="text-[9px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100">
                  Revenue
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs lg:text-[13px] leading-relaxed mb-4 font-normal">
                Optimizing healthcare revenue through medical billing, claims management, denial prevention, payment posting, and revenue cycle optimization.
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {[
                  'Medical Billing',
                  'Revenue Cycle',
                  'Claims Processing',
                  'Denial Management',
                  'Revenue Optimization',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 text-[11px] font-medium group-hover:bg-indigo-50/30 group-hover:border-indigo-100 group-hover:text-indigo-700 transition-all duration-300"
                  >
                    <Check className="w-3 h-3 text-emerald-500" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button Action */}
            <Link
              to="/rcm/home"
              className="w-full py-2.5 lg:py-3 px-6 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-indigo-500/20 group/btn"
            >
              <span>Explore Evolve RCM</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>

        </motion.div>
      </motion.main>

      {/* Minimal Bottom Branding Tagline */}
      <motion.footer
        className="w-full max-w-7xl mx-auto flex justify-center items-center z-10 pt-6 pb-2 border-t border-slate-100/50 text-[11px] text-slate-400 font-medium tracking-wider uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <span>© {new Date().getFullYear()} Evolve Health Source. All Rights Reserved.</span>
      </motion.footer>
      
    </div>
  );
}
