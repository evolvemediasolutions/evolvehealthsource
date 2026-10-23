import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import AboutSection from '../components/home/AboutSection';
import WhoWeHelp from '../components/home/WhoWeHelp';
import SolutionsSection from '../components/home/SolutionsSection';
import WorkflowSection from '../components/home/WorkflowSection';
import SpecialtySection from '../components/home/SpecialtySection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import InsightsSection from '../components/home/InsightsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import CareersCTA from '../components/home/CareersCTA';
import FinalCTA from '../components/home/FinalCTA';
import SEO from '../../components/SEO';

export default function Home() {
  return (
    <div className="relative bg-slate-950 overflow-hidden">
      <SEO 
        title="Evolve Health Source | Healthcare Revenue Cycle Management & Billing"
        description="Maximize clinical revenue and eliminate claims denials with Evolve Health Source. Delivering end-to-end medical billing, certified medical coding, and clean-claim automation."
        canonical="/"
      />
      <Hero />
      <TrustSection />
      <AboutSection />
      <WhoWeHelp />
      <SolutionsSection />
      <WorkflowSection />
      <SpecialtySection />
      <WhyChooseUsSection />
      <InsightsSection />
      <TestimonialsSection />
      <FaqSection />
      <CareersCTA />
      <FinalCTA />
    </div>
  );
}
