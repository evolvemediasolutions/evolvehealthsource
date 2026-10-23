import PageHeader from '../components/layout/PageHeader';
import SEO from '../../components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Privacy Policy | Evolve Health Source"
        description="Read the Evolve Health Source privacy policy to understand how we protect patient and client confidential information in accordance with HIPAA and industry standards."
        canonical="/privacy"
      />
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Our commitment to safeguarding patient data privacy and healthcare information security."
        breadcrumb="Home / Privacy Policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. HIPAA & Information Compliance</h2>
          <p>
            Evolve Health Source strictly adheres to the Health Insurance Portability and Accountability Act (HIPAA), Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable state privacy statutes. All Protected Health Information (PHI) processed through our revenue cycle systems is safeguarded with end-to-end encryption.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Collection of Information</h2>
          <p>
            We collect information provided directly through consultation forms, contact inquiries, and partner integration onboarding. This includes representative names, business email addresses, phone numbers, and operational practice details.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security & Storage</h2>
          <p>
            Our systems utilize enterprise-grade TLS encryption in transit and AES-256 encryption at rest. Access controls follow least-privilege protocols, multi-factor authentication, and regular third-party security audits.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Privacy Officer</h2>
          <p>
            For inquiries regarding privacy practices or data governance, contact our compliance office at <a href="mailto:connect@evolvehealthsource.com" className="text-primary-600 font-semibold hover:underline">connect@evolvehealthsource.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
