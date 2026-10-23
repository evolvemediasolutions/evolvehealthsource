import PageHeader from '../components/layout/PageHeader';
import AboutSection from '../components/home/AboutSection';
import CareersCTA from '../components/home/CareersCTA';
import SEO from '../../components/SEO';

export default function About() { 
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us | Evolve Health Source"
        description="Learn about Evolve Health Source's mission to empower healthcare practices with expert medical billing, AAPC certified coding, and revenue cycle optimization."
        canonical="/about"
      />
      <PageHeader 
        title="About Evolve Health Source" 
        subtitle="We are a team of healthcare and technology experts dedicated to transforming revenue cycle management."
        breadcrumb="Home / About Us"
      />
      <AboutSection />
      <CareersCTA />
    </div>
  ); 
}
