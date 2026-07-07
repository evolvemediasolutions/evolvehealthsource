import { motion } from 'motion/react';
import { Building2, Stethoscope, Users, PlusSquare, Activity, Bone, ActivitySquare, BrainCircuit, ScanHeart } from 'lucide-react';

const specialties = [
  { icon: Building2, name: 'Hospitals', desc: 'Enterprise-grade RCM systems' },
  { icon: ActivitySquare, name: 'Healthcare Systems', desc: 'Multi-facility consolidated workflows' },
  { icon: Users, name: 'Physician Groups', desc: 'Tailored coding for group practices' },
  { icon: Stethoscope, name: 'Clinics', desc: 'Flexible templates for clinic flows' },
  { icon: PlusSquare, name: 'Urgent Care', desc: 'Rapid charge entry and patient capture' },
  { icon: ScanHeart, name: 'Radiology', desc: 'Highly detailed modifier optimization' },
  { icon: Activity, name: 'Laboratories', desc: 'High-throughput panels billing' },
  { icon: BrainCircuit, name: 'Behavioral Health', desc: 'Custom diagnostic mapping support' },
  { icon: Bone, name: 'Dental Practices', desc: 'Specialty dental crosscoding options' },
];

export default function SpecialtySection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20 text-[#0D9488] text-sm font-semibold mb-6"
          >
            Specialties We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Tailored Solutions for Every Practice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-light"
          >
            Our expertise spans across diverse healthcare settings, ensuring compliance and maximizing revenue regardless of your specialty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-slate-900/70 hover:border-secondary/30 transition-all duration-300 cursor-pointer h-full flex items-start gap-4 relative overflow-hidden">
                {/* Glow Effect Background */}
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all shadow-inner shrink-0">
                  <specialty.icon className="w-5 h-5" />
                </div>
                
                <div>
                  <h3 className="font-bold text-white group-hover:text-secondary transition-colors mb-1.5 text-base">
                    {specialty.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {specialty.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
