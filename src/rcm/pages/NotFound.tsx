import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../../components/SEO';

export default function NotFound() { 
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="404 - Page Not Found | Evolve Health Source"
        description="The page you are looking for does not exist. Browse our revenue cycle management solutions or return to the homepage."
      />
      <PageHeader title="404" subtitle="The page you are looking for does not exist." />
      <div className="py-24 text-center">
        <Link to="/" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  ); 
}
