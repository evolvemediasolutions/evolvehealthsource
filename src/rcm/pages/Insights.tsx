import PageHeader from '../components/layout/PageHeader';
import InsightsSection from '../components/home/InsightsSection';
import SEO from '../../components/SEO';

export default function Insights() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SEO 
        title="Healthcare & RCM Insights | Evolve Health Source"
        description="Stay ahead with expert healthcare revenue cycle insights, ICD-10 regulatory updates, denial reduction methodologies, and AI technology in modern billing operations."
        canonical="/insights"
      />
      <PageHeader
        title="Insights & Resources"
        subtitle="Expert perspectives on healthcare revenue cycle management, technology, and industry trends."
        breadcrumb="Home / Insights"
      />
      <InsightsSection />
    </div>
  );
}
