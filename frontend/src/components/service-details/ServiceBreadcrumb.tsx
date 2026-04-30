import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * ServiceBreadcrumb Component
 * Navigation breadcrumb for service detail pages
 */
interface ServiceBreadcrumbProps {
  serviceName: string;
}

export const ServiceBreadcrumb = ({ serviceName }: ServiceBreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-[#ff6b00] uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
      <Link to="/" className="text-white/60 hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight size={14} className="text-white/30" />
      <span className="text-white/60">Services</span>
      <ChevronRight size={14} className="text-white/30" />
      <span className="truncate max-w-[150px] sm:max-w-none text-white">{serviceName}</span>
    </div>
  );
};
