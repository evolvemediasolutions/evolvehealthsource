import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-slate-950 overflow-hidden w-full pt-20">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1.02, 1.06, 1.02],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero-bg.png"
            alt="Healthcare professional background"
            className="w-full h-full object-cover object-right opacity-35 filter brightness-90 saturate-75"
          />
        </motion.div>

        {/* Dark Navy Gradient Overlay from Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-1"></div>
        {/* Soft Vignette Mask for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(2,6,23,0.95)_100%)] z-2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          ● Intelligent Revenue Cycle Management
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-center max-w-3xl"
        >
          Transforming Healthcare Revenue Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">Intelligent RCM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-light text-center"
        >
          Optimize financial performance, minimize claims denials, and achieve full operational efficiency with custom technology-driven services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 cursor-pointer"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/solutions"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
