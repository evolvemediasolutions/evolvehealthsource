import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  Calendar, 
  FileSearch, 
  Sparkles,
  ShieldCheck,
  Home
} from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../../components/SEO';

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      step: '01',
      icon: Calendar,
      title: 'Consultation & Discovery',
      description: 'One of our senior RCM specialists will review your submission and reach out within 24 business hours to schedule your consultation.'
    },
    {
      step: '02',
      icon: FileSearch,
      title: 'Workflow & Denial Audit',
      description: 'We perform a preliminary assessment of your specialty, payer mix, and billing workflows to pinpoint clean-claim and revenue lift opportunities.'
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Tailored Optimization Plan',
      description: 'You receive a transparent roadmap detailing projected collection speed, denial reduction strategies, and measurable ROI for your practice.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="Thank You | Evolve Health Source"
        description="Thank you for contacting Evolve Health Source. Our revenue cycle advisory team will review your enquiry and reach out within 24 hours."
        canonical="/contact/thank-you"
      />
      <PageHeader 
        title="Thank You for Reaching Out!" 
        subtitle="Your enquiry has been successfully received. We're excited to partner with you on revenue cycle excellence."
        breadcrumb="Home / Contact / Thank You" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20 flex-grow">
        {/* Main Confirmation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 mb-12 text-center"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 ring-8 ring-emerald-50/50">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Request Confirmed
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            We’ve Received Your Message
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            A confirmation has been dispatched to our advisory desk. Our dedicated healthcare billing and coding team will review your details and contact you shortly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 text-sm"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all text-sm"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* What Happens Next Section */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">What Happens Next?</h3>
            <p className="text-slate-500 text-sm">
              Here is what you can anticipate following your consultation request.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 select-none pointer-events-none">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Immediate Assistance Banner */}
        <div className="bg-slate-900 rounded-2xl text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">Need Immediate Support or Have Questions?</h4>
            <p className="text-slate-400 text-sm max-w-xl">
              Feel free to call our direct office line or email us directly for urgent multi-facility RCM escalations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:18005550199"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors text-sm font-semibold border border-slate-700"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              1-800-555-0199
            </a>
            <a
              href="mailto:connect@evolvehealthsource.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors text-sm font-semibold shadow-md shadow-emerald-600/20"
            >
              <Mail className="w-4 h-4" />
              connect@evolvehealthsource.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
