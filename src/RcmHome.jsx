import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, DollarSign, Clock, FileCheck2, AlertCircle, Sparkles } from 'lucide-react';

export default function RcmHome() {
  return (
    <div className="min-h-screen bg-[#fafbfe] text-slate-800 p-6 md:p-12 font-sans relative overflow-x-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-violet-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb & Back button */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-semibold group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Brand Gateway</span>
          </Link>
        </motion.div>

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-3 border border-indigo-100/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Revenue Portal</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
              Evolve RCM <span className="text-indigo-600 font-normal">Revenue Command</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              End-to-end medical billing and optimized revenue cycle performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-500/10 transition-all">
              Verify Insurance
            </button>
            <button className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl transition-all">
              Denial Audit
            </button>
          </motion.div>
        </div>

        {/* Quick Analytics Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Clean Claims Rate', value: '98.6%', change: '+1.4% MoM', icon: FileCheck2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Days in A/R', value: '23.4 Days', change: '-4.2 Days MoM', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Revenue Reclaimed', value: '$84,250', change: '+22.1% this mo', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Resolved Denials', value: '94.2%', change: '+3.5% MoM', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</span>
                <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-800 font-display">{stat.value}</span>
                <span className={`text-xs font-bold ${i === 1 ? 'text-emerald-600' : 'text-emerald-600'}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Core RCM Solutions List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800 font-display">Revenue Optimization Suite</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Medical Billing & Coding Accuracy',
                desc: 'Certified AAPC medical coders translating diagnoses into error-free electronic submissions with rapid turnaround.',
                metric: '99.5% Coding Accuracy Rate',
              },
              {
                title: 'Preventative Denial Management',
                desc: 'AI-driven scrubbers and automated triggers identify errors prior to submission, reducing first-pass denials.',
                metric: '<2% Denial Rate Guarantee',
              },
              {
                title: 'A/R Recovery & Aging Collections',
                desc: 'Persistent follow-ups and secondary audits on outstanding aging claims to extract unrecognized revenue.',
                metric: '45% Faster A/R Settlement',
              },
              {
                title: 'Patient Payment Posting & Portals',
                desc: 'Digital patient statements, modern secure portal access, and clear balance communication to boost self-pay collection rates.',
                metric: '+35% Self-Pay Collections',
              },
            ].map((srv, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">{srv.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2">{srv.desc}</p>
                  <span className="inline-block text-[10px] font-bold text-indigo-600 bg-indigo-50/50 px-2 py-0.5 rounded border border-indigo-100/50">
                    {srv.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
