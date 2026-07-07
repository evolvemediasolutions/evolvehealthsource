
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-100/50">
              Media Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
              Bespoke videos, high conversion - and complete branding.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We write, voice, and design premium dynamic video explainers representing your clinic's services. Integrate them directly into Google Maps, websites, and campaigns to boost conversion rates.
            </p>
          </div>

          {/* Right Column (Video Mock frame) */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-video rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group flex items-center justify-center"
            >
              {/* Overlay Grid lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              
              {/* Play trigger button */}
              <div className="z-10 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>

              {/* Floating indicators */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white text-xs font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>Explaining Clinical SEO</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
