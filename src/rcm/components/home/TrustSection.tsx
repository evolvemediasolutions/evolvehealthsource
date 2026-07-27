import { ShieldCheck, Award, Zap, CheckCircle2, Clock } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, text: 'HIPAA Compliant Security' },
  { icon: Award, text: 'Certified Coding Specialists' },
  { icon: CheckCircle2, text: '94% Claims Submission Accuracy' },
  { icon: Zap, text: 'AI-Powered Scrubbing Workflows' },
  { icon: Clock, text: '24-48 Hour Claim Turnaround' },
];

export default function TrustSection() {
  const scrollerItems = [...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="bg-slate-900/20 dark:bg-slate-950/40 py-8 border-y border-slate-800/60 dark:border-slate-800/30 relative z-20 overflow-hidden backdrop-blur-md transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />
      
      <div className="flex w-max">
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {scrollerItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 select-none"
            >
              <div className="p-2 bg-primary/10 text-primary dark:text-secondary border border-primary/20 rounded-xl shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-300 dark:text-slate-300 text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
