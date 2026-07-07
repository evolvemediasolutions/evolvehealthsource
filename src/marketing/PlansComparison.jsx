import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Shield, Sparkles } from 'lucide-react';

export default function PlansComparison() {
  return (
    <section id="packages" className="py-24 bg-white text-left relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Header Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="text-[#EF7E56] text-xs font-bold uppercase tracking-wider mb-4">
              PRODUCTIZED — NOT CUSTOM
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] text-left">
              You pick the one <br />{' '}
              <span className="relative inline-block z-10 px-1">
                <span className="absolute inset-x-0 bottom-2.5 h-[16px] bg-[#D4F1F4]/80 -z-10 rounded-sm"></span>
                that fits
              </span>{' '}
              your stage
            </h2>
          </div>
          <div className="space-y-4 text-slate-500 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
            <p>
              We've built the same growth system for 80+ practices, so we've turned it into three clean packages.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-16">
          
          {/* Tier 1: The Doctor Influencer System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-[28px] p-8 flex flex-col justify-between min-h-[700px] shadow-sm relative text-left"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0EB] text-[#0B4F9C] flex items-center justify-center">
                  <User className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <div className="text-[#0B4F9C] text-[10px] font-bold uppercase tracking-wider">
                    TIER 1 · INDIVIDUAL DOCTORS
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    The Doctor Influencer System
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  For solo practitioners. Personal branding + SEO so patients find & trust you.
                </p>
              </div>

              <div className="border-t border-slate-100 my-6" />

              {/* Features List */}
              <div className="space-y-6 text-xs sm:text-sm">
                
                {/* Group 1 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STRATEGY</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Personal Branding Strategy & voice</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Monthly 30-day content calendar</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">20-min monthly strategy call</span>
                    </li>
                  </ul>
                </div>

                {/* Group 2 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CONTENT</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">
                        <strong className="font-bold text-slate-900">8 static posts</strong> — carousels & education
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Trust-driven caption writing</span>
                    </li>
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PROFILE & VISIBILITY</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Instagram + Facebook profile optimisation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Google Business Profile setup</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF7E56] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Medical-camp guidance</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 space-y-6">
              {/* Promise Box */}
              <div className="bg-[#EAF3FF] p-4.5 rounded-2xl text-left border border-blue-100/30">
                <span className="text-[#0B4F9C] text-[10px] font-bold uppercase tracking-wider block mb-1">
                  THE PROMISE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  10× visibility lift in 90 days · improved trust perception · consistent online presence.
                </p>
              </div>

              {/* Button */}
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full py-3.5 text-center border border-slate-200 hover:border-[#0B4F9C] hover:text-[#0B4F9C] text-[#0B4F9C] rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer"
              >
                Get a Quote →
              </a>
            </div>
          </motion.div>

          {/* Tier 2: The Clinic Growth System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-[2.5px] border-[#0B4F9C] rounded-[28px] p-8 flex flex-col justify-between min-h-[700px] shadow-lg relative text-left"
          >
            {/* Most Popular Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EF7E56] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md z-20">
              MOST POPULAR
            </div>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] text-[#0B4F9C] flex items-center justify-center">
                  <Building2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <div className="text-[#0B4F9C] text-[10px] font-bold uppercase tracking-wider">
                    TIER 2 · CLINICS & CHAINS
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    The Clinic Growth System
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  For multi-doctor clinics & dental / aesthetic chains. Social + personal branding + paid acquisition for predictable patient flow.
                </p>
              </div>

              <div className="border-t border-slate-100 my-6" />

              {/* Highlight Pill */}
              <div className="bg-[#EAF3FF] py-3.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-[#0B4F9C] border border-blue-150">
                <Sparkles className="w-4 h-4 text-[#EF7E56] fill-current flex-shrink-0" />
                <span>Includes everything in Personal Branding</span>
              </div>

              {/* Features List */}
              <div className="space-y-6 text-xs sm:text-sm">
                
                {/* Group 1 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PATIENT ACQUISITION</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">
                        <strong className="font-bold text-slate-900">Lead-Gen Ads</strong> (Meta)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Landing page + WhatsApp funnel</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Local SEO for your areas</span>
                    </li>
                  </ul>
                </div>

                {/* Group 2 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CONTENT & REPUTATION</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">+4 additional videos / month</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Multi-doctor content strategy</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Patient testimonial content</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Reputation management</span>
                    </li>
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TECH & ANALYTICS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Website maintenance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F9C] mt-2 flex-shrink-0" />
                      <span className="text-slate-650">Competitor analysis</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 space-y-6">
              {/* Outcome Box */}
              <div className="bg-[#EAF3FF] p-4.5 rounded-2xl text-left border border-blue-100/30">
                <span className="text-[#0B4F9C] text-[10px] font-bold uppercase tracking-wider block mb-1">
                  THE OUTCOME
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  3–5× patient enquiries in 60 days · stronger reputation · less dependency on Practo.
                </p>
              </div>

              {/* Button */}
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full py-3.5 text-center bg-[#EF7E56] hover:bg-[#d96739] text-white rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-orange-500/10"
              >
                Get a Quote →
              </a>
            </div>
          </motion.div>

          {/* Tier 3: The Hospital Authority Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1524] border border-slate-800 rounded-[28px] p-8 flex flex-col justify-between min-h-[700px] shadow-sm relative text-left"
          >
            {/* Ambient gold glow glow inside dark card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl z-0" />

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 text-[#C2923D] flex items-center justify-center">
                  <Shield className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <div className="text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                    TIER 3 · HOSPITALS
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    The Hospital Authority Package
                  </h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For hospitals & multi-specialty groups. The full marketing department — branding, content, ads, PR, CRM & conversion — under one roof.
                </p>
              </div>

              <div className="border-t border-white/5 my-6" />

              {/* Highlight Pill */}
              <div className="bg-white/5 py-3.5 px-4 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-white border border-white/5">
                <Sparkles className="w-4 h-4 text-[#C2923D] fill-current flex-shrink-0" />
                <span>Includes everything in Clinic Boost</span>
              </div>

              {/* Features List */}
              <div className="space-y-6 text-xs sm:text-sm">
                
                {/* Group 1 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">BRAND & PRODUCTION</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">
                        <strong className="font-bold text-white">Full-scale branding strategy</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">Premium video production (high-quality shoots)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">YouTube authority building</span>
                    </li>
                  </ul>
                </div>

                {/* Group 2 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">MULTI-CHANNEL GROWTH</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">Multi-channel ads (Meta + Google + YouTube)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">Department-wise marketing strategy</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">PR & media features</span>
                    </li>
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">TECH & CONVERSION</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">CRM integration for lead tracking</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">Conversion-optimisation funnel</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2923D] mt-2 flex-shrink-0" />
                      <span className="text-slate-300">Doctor reputation management</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 space-y-6 relative z-10">
              {/* Outcome Box */}
              <div className="bg-white/5 p-4.5 rounded-2xl text-left border border-white/5">
                <span className="text-amber-550 text-[10px] font-bold uppercase tracking-wider block mb-1">
                  THE OUTCOME
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Category authority in your region · sustained patient inflow · unprompted brand recall.
                </p>
              </div>

              {/* Button */}
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full py-3.5 text-center bg-[#C2923D] hover:bg-[#a67b32] text-white rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-amber-900/10"
              >
                Talk to Us →
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Footer Disclaimer */}
        <p className="mt-16 text-center text-slate-400 font-sans text-xs sm:text-sm">
          All engagements are <strong className="font-bold text-slate-700">month-to-month after the first 90 days</strong>. No long contracts. No lock-ins.
        </p>

      </div>
    </section>
  );
}
