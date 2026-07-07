import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Heart,
  Lock,
  Award
} from 'lucide-react';

export default function Hero() {
  const [revenue, setRevenue] = useState(300000);

  // Animate revenue counter upward on page load
  useEffect(() => {
    let start = 300000;
    const end = 342850;
    const duration = 2000; // 2 seconds
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setRevenue(end);
        clearInterval(timer);
      } else {
        setRevenue(Math.floor(start));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  const chartBars = [35, 50, 42, 68, 55, 82, 60, 95, 78, 100];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 max-w-2xl text-left">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Transforming Healthcare Revenue Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">Intelligent RCM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-light"
            >
              Optimize financial performance, minimize claims denials, and achieve full operational efficiency with custom technology-driven services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/rcm/contact"
                className="group relative inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/rcm/solutions"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Visual Glassmorphism Floating Dashboard Representation */}
          <div className="lg:col-span-5 relative h-[520px] lg:h-[600px] w-full hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md h-[460px]">

              {/* Main Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute inset-x-4 top-16 z-20 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-[28px] shadow-2xl transition-all duration-300"
              >
                {/* Top Dashboard Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Monthly Revenue</div>
                      <div className="text-2xl font-bold text-white tracking-tight">
                        ${revenue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 bg-teal-500/15 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +14.8%
                  </div>
                </div>

                {/* Bar Chart Area */}
                <div className="h-36 flex items-end gap-2.5 mb-2 px-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-white/5"></div>
                    <div className="w-full border-t border-white/5"></div>
                    <div className="w-full border-t border-white/5"></div>
                  </div>

                  {chartBars.map((h, i) => (
                    <div key={i} className="flex-1 w-full bg-white/5 rounded-t-md relative h-full flex items-end overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.0 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-blue-500/80 to-teal-400/80 rounded-t-md"
                      />
                    </div>
                  ))}
                </div>

                {/* Chart Labels */}
                <div className="flex justify-between text-[9px] text-slate-400 px-1 pt-1.5 border-t border-white/5">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                  <span>SEP</span>
                  <span>NOV</span>
                </div>
              </motion.div>              {/* Floating Card 1 - First-Pass Yield */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.65 },
                  y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.65 }
                }}
                className="absolute z-30 -left-16 bottom-20 w-52 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4.5 rounded-[22px] shadow-xl text-white"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 border border-teal-500/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">First-Pass Yield</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Clean Claims Rate</span>
                    <span className="text-teal-400 font-bold">99.1%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "99.1%" }}
                      transition={{ delay: 1.4, duration: 1.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - HIPAA Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.8 },
                  y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }
                }}
                className="absolute z-30 -left-12 -top-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 px-4.5 py-3 rounded-full flex items-center gap-2 shadow-xl text-white"
              >
                <ShieldCheck className="w-4.5 h-4.5 text-teal-400 fill-teal-400/10" />
                <span className="text-xs font-bold text-slate-200 tracking-wide">HIPAA Compliant Security</span>
              </motion.div>

              {/* Floating Card 3 - Client Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.95 },
                  y: { repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.95 }
                }}
                className="absolute z-20 -right-16 bottom-16 w-48 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-[20px] shadow-xl text-white"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-black text-white">97%</div>
                  <div className="text-[9px] uppercase font-bold text-slate-400 leading-tight">
                    Client<br />Satisfaction
                  </div>
                  <Heart className="w-5 h-5 text-red-450 fill-red-450/20 ml-auto shrink-0 animate-pulse" />
                </div>
              </motion.div>

              {/* Floating Card 4 - Claims Approval Rate */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 1.1 },
                  y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.1 }
                }}
                className="absolute z-30 -right-10 -top-8 w-48 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-[20px] shadow-xl text-white"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Claims Approval</div>
                    <div className="text-base font-bold text-white leading-tight">98.2%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 5 - 24/7 Monitoring */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: [0, 7, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 1.25 },
                  y: { repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 1.25 }
                }}
                className="absolute z-30 left-12 -bottom-14 bg-slate-900/60 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full flex items-center gap-2.5 shadow-xl text-white"
              >
                <Clock className="w-4 h-4 text-teal-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="text-xs font-bold text-slate-200">24/7 Revenue Monitoring</span>
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
