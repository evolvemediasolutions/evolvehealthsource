import PageHeader from '../components/layout/PageHeader';
import SolutionsSection from '../components/home/SolutionsSection';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <PageHeader 
        title="Our Solutions" 
        subtitle="Optimize financial performance, minimize claims denial, and achieve billing compliance with our specialized services."
        breadcrumb="Home / Solutions"
      />
      <SolutionsSection />
    </div>
  );
}
