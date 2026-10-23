import PageHeader from '../components/layout/PageHeader';
import SEO from '../../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Terms of Service | Evolve Health Source"
        description="Review the terms and conditions governing the use of Evolve Health Source services, platforms, and advisory offerings."
        canonical="/terms"
      />
      <PageHeader 
        title="Terms of Service" 
        subtitle="Operational standards and agreement terms for healthcare provider engagements."
        breadcrumb="Home / Terms of Service"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website or engaging Evolve Health Source for Revenue Cycle Management (RCM), medical billing, or medical coding services, your organization agrees to these Terms of Service and applicable Business Associate Agreements (BAA).
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services & Service Level Agreements</h2>
          <p>
            Service parameters, clean claim targets, turnaround timelines, and financial performance reporting metrics are established within individual client Master Services Agreements.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Confidentiality & Non-Disclosure</h2>
          <p>
            Both parties agree to treat proprietary billing methodologies, audit data, and clinical records with strict confidentiality under mutual non-disclosure and HIPAA compliance covenants.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Inquiries</h2>
          <p>
            For legal inquiries concerning terms or agreements, please reach out to <a href="mailto:connect@evolvehealthsource.com" className="text-primary-600 font-semibold hover:underline">connect@evolvehealthsource.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
