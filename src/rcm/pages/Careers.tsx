import PageHeader from '../components/layout/PageHeader';
import CareersCTA from '../components/home/CareersCTA';
import SEO from '../../components/SEO';

export default function Careers() { 
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Careers at Evolve Health Source | Join Our Healthcare Operations Team"
        description="Explore open positions in medical billing, certified medical coding (CPC), and revenue cycle management operations at Evolve Health Source."
        canonical="/careers"
      />
      <PageHeader 
        title="Careers at Evolve Health Source" 
        subtitle="Join a team of passionate professionals dedicated to driving excellence in healthcare."
        breadcrumb="Home / Careers" 
      />
      <CareersCTA />
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
        <p className="text-lg text-gray-600">We are currently updating our job board. Please check back later or send your resume to careers@evolvehealthsource.com.</p>
      </div>
    </div>
  ); 
}
