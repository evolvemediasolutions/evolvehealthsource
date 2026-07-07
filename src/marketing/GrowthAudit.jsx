import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function GrowthAudit() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clinic, setClinic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !email.includes('@')) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  };

  const checklist = [
    { bold: 'Website audit', normal: " — what's converting, what's leaking" },
    { bold: 'Google Business Profile review', normal: ' — your local-search rank & gaps' },
    { bold: 'Social & reels teardown', normal: " — what's working, what's missing" },
    { bold: 'Competitor scan', normal: " — who's outranking you and why" },
    { bold: '30-day action plan', normal: ' — 3 specific fixes you can ship this week' }
  ];

  return (
    <section className="py-24 bg-[#E9F0F8]/40 text-left relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Blue Container Card */}
        <div className="bg-[#0C1523] rounded-[32px] p-8 md:p-14 text-white grid lg:grid-cols-12 gap-12 relative overflow-hidden border border-slate-800 shadow-xl">
          {/* Top-right glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Column (Content & Checklist) */}
          <div className="lg:col-span-7 space-y-6 relative z-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider">
                FREE · NO OBLIGATION
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-[1.1] text-left">
                Get a free 30-min <br className="hidden sm:inline" /> practice growth <br className="hidden sm:inline" /> audit.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl select-all">
                A healthcare marketing strategist will review your practice's online presence and identify opportunities to attract more qualified patients. You'll receive actionable recommendations tailored to your goals completely free.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3.5 my-8">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-slate-200 text-sm sm:text-base select-all">
                    <strong className="font-bold text-white">{item.bold}</strong>{item.normal}
                  </span>
                </li>
              ))}
            </ul>

            {/* Subtext footer */}
            <p className="text-slate-400 text-xs sm:text-sm border-t border-slate-800/80 pt-6 select-all">
              If we're not the right fit, we'll tell you and recommend someone who is. Zero sales pressure.
            </p>
          </div>

          {/* Right Column (Form Box) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-100 flex flex-col justify-between min-h-[460px]">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850">Audit Claimed!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Thank you, {name}! We have received your request and will WhatsApp you within 1 business day to schedule your practice review.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg font-bold text-slate-900">Claim your free audit</h3>
                    <p className="text-slate-450 text-[11px] font-medium leading-none">
                      We'll WhatsApp you within 1 business day to schedule.
                    </p>
                  </div>

                  <div className="space-y-4 text-left">
                    {/* Your Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (e.target.value) setError(false);
                        }}
                        placeholder="Dr. Michael Anderson"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (e.target.value) setError(false);
                        }}
                        placeholder="you@yourclinic.in"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* WhatsApp number */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        WhatsApp number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Clinic / Practice Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                        Clinic / practice name
                      </label>
                      <input
                        type="text"
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        placeholder="Smile Studio Dental"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#EF7E56] hover:bg-[#d96739] text-white rounded-xl font-bold text-sm tracking-wide transition-all text-center cursor-pointer shadow-lg shadow-orange-500/10 mt-2 block"
                  >
                    Book My Free Audit →
                  </button>

                  {/* Validation Error warning */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-100 text-red-500 rounded-xl p-3 text-xs font-semibold text-center mt-2"
                    >
                      Please provide your name and a valid email.
                    </motion.div>
                  )}

                  {/* Subtext */}
                  <p className="text-[10px] text-slate-400 text-center block mt-2">
                    5 audit slots available this month.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
