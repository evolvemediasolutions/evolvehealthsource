import React from 'react';
import { motion } from 'motion/react';
import { 
  Megaphone, 
  Globe, 
  TrendingUp, 
  Users, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  FileCode2,
  CalendarDays
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    description: 'Bespoke, blazing-fast, and fully responsive medical websites engineered for maximum conversion. Seamlessly integrated with appointment scheduling and client intake workflows.',
    details: ['HIPAA-compliant hosting', 'Patient portal integrations', 'Web accessibility (ADA) audit']
  },
  {
    icon: Search,
    title: 'Healthcare SEO & Local Maps',
    description: 'Dominate local Google searches when patients look for specialists in your area. We optimize your profiles, reviews, and clinical pages for high search intent.',
    details: ['Local maps pack dominance', 'Medical content authority creation', 'Review building systems']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Advertising',
    description: 'High-ROI pay-per-click (PPC) campaigns and social media advertising tailored to bring in specific high-value medical cases and increase caseloads.',
    details: ['Google & Meta ads management', 'HIPAA-compliant ad tracking', 'Advanced audience retargeting']
  },
  {
    icon: Sparkles,
    title: 'Medical Branding & Identity',
    description: 'Build a trustworthy, memorable brand that resonates with patients and stands out in a crowded market. From sleek logo design to complete brand books.',
    details: ['Brand voice definition', 'Sleek custom logo design', 'Clinical collaterals & signage']
  }
];

const STATISTICS = [
  { value: '3.5x', label: 'Average Patient Growth' },
  { value: '450+', label: 'Medical Practices Boosted' },
  { value: '98%', label: 'First-Class Review Rating' },
  { value: '$12M+', label: 'Additional Revenue Generated' }
];

export default function MarketingHome() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
        
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/35 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100/50 shadow-sm animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Healthcare Marketing Solution</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Grow Your Practice. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
                  Attract More Patients.
                </span>
              </h1>
              
              <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                MyClinicBoost provides professional website development, hyper-targeted healthcare SEO, medical branding, and premium digital advertising designed exclusively for growing healthcare providers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  to="/rcm/contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full shadow-lg shadow-teal-600/20 hover:shadow-teal-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <a
                  href="#services"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-semibold rounded-full hover:border-slate-300 transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-slate-500 text-xs sm:text-sm border-t border-slate-100">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-600" /> HIPAA Compliant Channels</span>
                <span className="flex items-center gap-1.5"><FileCode2 className="w-4 h-4 text-teal-600" /> ADA Certified Web Designs</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-teal-600" /> Real-time Analytics Dashboard</span>
              </div>
            </div>
            
            {/* Right Illustration/Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none rounded-3xl bg-white p-6 md:p-8 border border-slate-200/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)]">
                
                {/* Floating Widget 1 */}
                <div className="absolute -top-6 -right-6 bg-teal-500 text-white rounded-2xl p-4 shadow-lg flex items-center gap-3 animate-bounce">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs opacity-95 font-semibold">New Patients</div>
                    <div className="text-xl font-bold">+184%</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                    <span>Patient Acquisition Engine</span>
                    <span className="text-teal-600 text-xs font-semibold">Active</span>
                  </h3>
                  
                  {/* Fake stats chart */}
                  <div className="h-48 w-full bg-slate-50 rounded-2xl p-4 flex flex-col justify-between border border-slate-100">
                    <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                      <span>Monthly Traffic Lift</span>
                      <span className="text-emerald-500 font-bold">+245% Year-over-Year</span>
                    </div>
                    <div className="flex items-end gap-3 h-28 pt-2">
                      <div className="w-full bg-teal-200/60 rounded-t-lg h-[20%]"></div>
                      <div className="w-full bg-teal-200/80 rounded-t-lg h-[35%]"></div>
                      <div className="w-full bg-teal-300 rounded-t-lg h-[55%]"></div>
                      <div className="w-full bg-teal-400 rounded-t-lg h-[72%]"></div>
                      <div className="w-full bg-teal-500 rounded-t-lg h-[98%]"></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                      <span>Q1</span>
                      <span>Q2</span>
                      <span>Q3</span>
                      <span>Q4</span>
                      <span>Current</span>
                    </div>
                  </div>
                  
                  {/* Task Checklists */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-slate-700 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Custom Clinic Web App Deployed</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Ranked #1 for local &apos;Primary Care Near Me&apos;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATISTICS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-400">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section id="services" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold tracking-widest text-teal-600 uppercase mb-3">Our Core Expertise</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Complete Patient Acquisition Suite
            </p>
            <p className="text-slate-500 text-base font-light mt-4">
              We design, write, deploy, and manage every stage of your practice&apos;s digital pipeline so you can focus on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-[20px] border border-slate-100 p-6 sm:p-8 hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">{srv.description}</p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-4 mt-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                      {srv.details.map((dt, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final Banner */}
      <section className="bg-gradient-to-br from-teal-900 to-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Ready to boost your clinic&apos;s growth?</h2>
          <p className="text-teal-100/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Get a free local SEO and performance analysis of your current website. No obligation, 100% actionable audits.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/rcm/contact"
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-full transition-all duration-300 shadow-lg shadow-teal-500/15"
            >
              Get My Free Audit
            </Link>
            <Link
              to="/"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-semibold rounded-full transition-all duration-300"
            >
              Back to Parent Portal
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
