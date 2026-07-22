import { motion } from 'motion/react';
import { Building2, Users2, Activity, HeartHandshake } from 'lucide-react';

export default function WhoWeHelp() {
  const categories = [
    {
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      title: 'Hospitals & Health Systems',
      description: 'Acute, Inpatient & Outpatient Facilities, Physician Groups, and Integrated Delivery Networks.',
      glow: 'group-hover:border-blue-500/30 dark:group-hover:shadow-blue-500/5',
    },
    {
      icon: <Users2 className="w-5 h-5 text-teal-400" />,
      title: 'Large Physician Practices',
      description: 'All specialties including Radiology, Urgent Care, Anesthesiology, Dermatology, Gastroenterology, Pathology, Cardiology, and more.',
      glow: 'group-hover:border-teal-500/30 dark:group-hover:shadow-teal-500/5',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-cyan-400" />,
      title: 'Independent Groups',
      description: 'All independent groups and specialty clinics including Internal Medicine, Primary Care, General Practice, and Multispecialty Groups.',
      glow: 'group-hover:border-cyan-500/30 dark:group-hover:shadow-cyan-500/5',
    },
    {
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      title: 'Ancillary & Other Providers',
      description: 'Urgent Care, Ambulatory Surgical Centers, Dental, Home Health, Rehab, Social Services, Hospice, Lab, and Skilled Nursing.',
      glow: 'group-hover:border-emerald-500/30 dark:group-hover:shadow-emerald-500/5',
    },
  ];

  return (
    <section className="py-28 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      
      {/* Background Image backdrop with blur and rich dark gradient overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 filter blur-[2px]">
        <img
          src="/images/RCM/medical-center.png"
          alt="Medical Center Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Gradient vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-0"></div>
      
      {/* Radial overlay for center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(2,6,23,0.95)_100%)] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            ● Who We Serve
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Revenue Cycle Excellence, Tailored to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">Your Facility</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Provider organizations across the healthcare continuum entrust Evolve Health Source to manage critical areas of their revenue cycle operations from start to finish.
          </motion.p>
        </div>

        {/* 4 horizontal cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[28px] text-left hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[320px] shadow-lg ${cat.glow}`}
            >
              <div>
                {/* Glowing Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-600/20 group-hover:to-teal-400/20 group-hover:border-teal-500/30 transition-all duration-300">
                  {cat.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                  {cat.title}
                </h3>
                
                {/* Subtle horizontal gradient separator line */}
                <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>

                <p className="text-sm text-slate-400 leading-relaxed font-light font-rcm-sans">
                  {cat.description}
                </p>
              </div>

              {/* Indicator arrow */}
              <div className="text-slate-600 group-hover:text-teal-400 transition-colors duration-300 self-end mt-4 text-lg">
                &rarr;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
