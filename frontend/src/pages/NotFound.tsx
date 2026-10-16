import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { PrimaryButton } from '../components/kit';

const NotFound = () => (
  <div className="min-h-screen bg-navy flex flex-col items-center justify-center pt-24 px-4 text-center">
    <SEO config={{ title: 'Page Not Found - BloomTech.lk', description: 'The page you are looking for does not exist or has been moved.' }} noindex />
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Page Not Found</h1>
    <p className="text-white/65 mb-8">The page you're looking for doesn't exist or has been moved.</p>
    <PrimaryButton to="/" icon={ArrowLeft}>Return Home</PrimaryButton>
  </div>
);

export default NotFound;
