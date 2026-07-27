import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, ShieldCheck, Code, Send, DollarSign, RefreshCw, BarChart, TrendingUp } from 'lucide-react';

const workflowSteps = [
  { icon: Calendar, title: 'Patient Scheduling', desc: 'Secure demographic intake and upfront scheduling optimization.' },
  { icon: ShieldCheck, title: 'Insurance Verification', desc: 'Real-time eligibility verification to prevent downstream denial blocks.' },
  { icon: Code, title: 'Medical Coding', desc: 'ICD-10, CPT, and HCPCS accuracy managed by certified specialists.' },
  { icon: Send, title: 'Claim Submission', desc: 'Highly scrubbed claims transmitted electronically to clearinghouses.' },
  { icon: DollarSign, title: 'Payment Posting', desc: 'Prompt ERA reconciliation and electronic remittance posting.' },
  { icon: RefreshCw, title: 'Denial Management', desc: 'Rapid assessment, routing, correction, and appeals tracking.' },
  { icon: BarChart, title: 'Accounts Receivable', desc: 'Active aging analysis and persistent insurance follow-up.' },
  { icon: TrendingUp, title: 'Revenue Optimization', desc: 'Detailed business intelligence dashboards and operational reviews.' },
];

export default function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-28 bg-background border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient background mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
            RCM Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Intelligent RCM Workflow
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            A seamless, technology-driven approach to manage every step of the revenue cycle, ensuring maximum compliance and profitability.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Vertical background line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 transition-colors duration-300"></div>
          
          {/* Glowing scroll-filled line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(99,102,241,0.5)] animate-colors duration-300"
          />

          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center z-20 group hover:border-secondary transition-colors duration-300">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-secondary transition-colors duration-300" />
                  </div>

                  {/* Card Content Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[47%] lg:w-[48%] pl-16 md:pl-0"
                  >
                    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 rounded-[24px] hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 group shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all shadow-inner shrink-0">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-secondary tracking-widest uppercase">Step 0{index + 1}</div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0D9488] dark:group-hover:text-primary-300 transition-colors">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-[47%] lg:w-[48%]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
