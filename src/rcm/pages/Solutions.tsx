import PageHeader from '../components/layout/PageHeader';
import SolutionsSection from '../components/home/SolutionsSection';
import SEO from '../../components/SEO';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <SEO 
        title="RCM & Medical Billing Solutions | Evolve Health Source"
        description="Comprehensive healthcare revenue cycle management solutions: certified specialty coding, automated claims scrubbing, proactive denial appeals, and accounts receivable management."
        canonical="/solutions"
      />
      <PageHeader 
        title="Our Solutions" 
        subtitle="Optimize financial performance, minimize claims denial, and achieve billing compliance with our specialized services."
        breadcrumb="Home / Solutions"
      />
      <SolutionsSection />
    </div>
  );
}
