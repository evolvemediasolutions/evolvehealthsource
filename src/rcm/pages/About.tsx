import PageHeader from '../components/layout/PageHeader';
import AboutSection from '../components/home/AboutSection';
import CareersCTA from '../components/home/CareersCTA';

export default function About() { 
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="About Evolve Medical Solutions" 
        subtitle="We are a team of healthcare and technology experts dedicated to transforming revenue cycle management."
        breadcrumb="Home / About Us"
      />
      <AboutSection />
      <CareersCTA />
    </div>
  ); 
}
