import PageHeader from '../components/layout/PageHeader';
import InsightsSection from '../components/home/InsightsSection';

export default function Insights() {
  return (
    <div className="min-h-screen bg-slate-950">
      <PageHeader
        title="Insights & Resources"
        subtitle="Expert perspectives on healthcare revenue cycle management, technology, and industry trends."
        breadcrumb="Home / Insights"
      />
      <InsightsSection />
    </div>
  );
}
