
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, TrendingUp, Sparkles } from 'lucide-react';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="results" className="py-24 bg-white text-left w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100/50">
              Live Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              See your clinic's patient growth, live.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              We build custom Google Analytics and call tracking portals, providing real-time data on exactly how many booking calls and forms originate from your new marketing channels.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex lg:justify-end gap-2.5">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 0 ? 'bg-slate-900 text-white' : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              SEO Visibility
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 1 ? 'bg-slate-900 text-white' : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Patient Bookings
            </button>
          </div>
        </div>

        {/* Dashboard Mock Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-slate-950 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl overflow-hidden w-full max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="bg-slate-900 border border-white/5 text-[10px] font-semibold text-slate-400 px-8 py-1 rounded-lg">
              myclinicboost.com/dashboard/live
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800" />
          </div>

          {activeTab === 0 ? (
            <div className="grid md:grid-cols-12 gap-8 relative z-10 text-white">
              <div className="md:col-span-4 space-y-6">
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Monthly SEO Clicks</div>
                  <div className="text-3xl font-black font-display text-emerald-400">+142.4%</div>
                  <div className="text-xs text-slate-400 mt-2">Previous Month: 1,240 clicks</div>
                </div>
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Top Map Keywords</div>
                  <div className="text-3xl font-black font-display text-blue-400">#1 Pack</div>
                  <div className="text-xs text-slate-400 mt-2">Ranked for "dentist near me"</div>
                </div>
              </div>
              <div className="md:col-span-8 bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[250px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5"><Eye className="w-4 h-4 text-blue-400" /> SEO Impressions Curve</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Live</span>
                </div>
                {/* SVG Area Chart */}
                <svg viewBox="0 0 400 120" className="w-full mt-4">
                  <defs>
                    <linearGradient id="db-chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 100 Q 50 80 100 90 T 200 60 T 300 45 T 400 20 L 400 120 L 0 120 Z" fill="url(#db-chart-grad)" />
                  <path d="M 0 100 Q 50 80 100 90 T 200 60 T 300 45 T 400 20" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="200" cy="60" r="3.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="400" cy="20" r="3.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-12 gap-8 relative z-10 text-white">
              <div className="md:col-span-4 space-y-6">
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Direct Bookings</div>
                  <div className="text-3xl font-black font-display text-indigo-400">842 Patients</div>
                  <div className="text-xs text-slate-400 mt-2">Previous Month: 620</div>
                </div>
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Leads Conversion</div>
                  <div className="text-3xl font-black font-display text-emerald-400">12.4%</div>
                  <div className="text-xs text-slate-400 mt-2">Industry Average: 3.2%</div>
                </div>
              </div>
              <div className="md:col-span-8 bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[250px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-indigo-400" /> Appointment Bookings MoM</span>
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Live</span>
                </div>
                {/* SVG Bar Chart */}
                <div className="flex items-end justify-between h-36 pt-4 gap-2">
                  {[25, 45, 30, 68, 52, 90, 60, 85, 78, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gradient-to-t from-indigo-650 to-indigo-500 rounded-t-md hover:opacity-85 transition-opacity" style={{ height: `${val}%` }} />
                      <span className="text-[8px] text-slate-500 mt-1">{`${['J','F','M','A','M','J','J','A','S','O'][idx]}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}
