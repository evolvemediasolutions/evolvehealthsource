import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../../components/SEO';
import JobApplicationModal from '../components/careers/JobApplicationModal';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function Careers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Medical Coder (CPC)');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

  const openings = [
    {
      id: 'medical-coder-cpc',
      title: 'Medical Coder (CPC)',
      type: 'Remote',
      department: 'Specialty Coding & Auditing',
      employmentType: 'Full-Time',
      location: 'Remote (US & Global)',
      summary: 'Ensure accurate diagnostic and procedural coding compliance across ICD-10-CM, CPT, and HCPCS Level II codes to maintain a >98% clean claim rate.',
      responsibilities: [
        'Review patient clinical documentation and assign appropriate ICD-10-CM, CPT, and HCPCS codes.',
        'Apply correct coding modifiers to prevent claim edits, rejections, and audit flags.',
        'Collaborate with healthcare providers and audit leads to resolve documentation ambiguities.',
        'Stay updated on annual CMS, AMA, and AHA regulatory guidelines.'
      ],
      qualifications: [
        'Active AAPC (CPC, COC) or AHIMA (CCS, CCS-P) certification.',
        'Minimum 2+ years of medical coding experience in outpatient or specialty settings.',
        'Proficiency in major EHR and practice management platforms.'
      ],
      popular: true,
    },
    {
      id: 'ar-follow-up-lead',
      title: 'AR Follow-Up Lead',
      type: 'Full-Time',
      department: 'Accounts Receivable & Denial Recovery',
      employmentType: 'Full-Time',
      location: 'Jacksonville, FL / Hybrid',
      summary: 'Lead our claims resolution team in tracking aged accounts receivable, identifying root denial causes, and executing proactive payer appeals.',
      responsibilities: [
        'Analyze aged unpaid claims (30, 60, 90, 120+ days) and prioritize high-value recovery workflows.',
        'Communicate directly with commercial and government payers to dispute unwarranted denials.',
        'Draft and submit formal appeal letters with requisite clinical substantiation.',
        'Mentor junior AR specialists and report weekly collection metrics to practice leadership.'
      ],
      qualifications: [
        '3+ years of experience in US healthcare AR follow-up and denial management.',
        'Strong understanding of commercial payers, Medicare, Medicaid, and ERISA guidelines.',
        'Proven leadership skills and meticulous attention to detail.'
      ],
      popular: false,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Careers & Openings | Evolve Health Source"
        description="Explore active career openings in medical coding (CPC), accounts receivable, and healthcare revenue cycle operations at Evolve Health Source. Apply today."
        canonical="/careers"
      />
      <PageHeader 
        title="Careers at Evolve Health Source" 
        subtitle="Join our dedicated team of healthcare and revenue cycle specialists driving financial excellence for practices nationwide."
        breadcrumb="Home / Careers" 
      />

      {/* Main Openings Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-teal-600" />
            We Are Hiring
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Current Active Openings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Ready to make an impact? Review our active positions below and submit your application directly to our talent team at{' '}
            <span className="font-semibold text-slate-900">chitra@evolvehealthsource.com</span>.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {openings.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {job.popular && (
                <div className="absolute top-0 right-0 bg-teal-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-2xl shadow-sm">
                  Priority Need
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/60">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    {job.employmentType}
                  </span>
                  <span className="text-xs text-slate-400 font-medium ml-auto flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
                  {job.department}
                </p>

                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {job.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600" /> Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {job.qualifications.map((qual, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left order-2 sm:order-1">
                  Direct submission to <span className="font-semibold text-slate-700">chitra@evolvehealthsource.com</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleApply(job.title)}
                  className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-[#0F9D8A] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Popup Modal */}
      <JobApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPosition={selectedPosition}
      />
    </div>
  ); 
}
