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
    <div className="flex items-center gap-2 text-sm font-medium text-white/50 mb-6">
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight size={14} className="text-white/25" />
      <span>Services</span>
      <ChevronRight size={14} className="text-white/25" />
      <span className="truncate max-w-[150px] sm:max-w-none text-white">{serviceName}</span>
    </div>
  );
};
