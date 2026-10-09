import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * ServiceBenefitsSidebar Component
 * Sidebar showing client benefits with sticky positioning
 */
interface ServiceBenefitsSidebarProps {
  benefits: string[];
}

export const ServiceBenefitsSidebar = ({ benefits }: ServiceBenefitsSidebarProps) => {
  return (
    <div className="sticky top-28">
      <div className="bg-[#16233F] border border-white/10 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-7 tracking-tight">Client Benefits</h3>

        {benefits && benefits.length > 0 ? (
          <ul className="flex flex-col gap-5">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#FF6B00] mt-0.5 shrink-0" />
                <span className="text-white/75 text-[15px] leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/50 text-sm">Benefits information is being compiled.</p>
        )}

        <div className="mt-10 pt-7 border-t border-white/10">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-3">Need a custom approach?</p>
          <Link to="/contact" className="text-white font-semibold text-sm flex items-center gap-2 hover:text-[#FF6B00] transition-colors group">
            Contact Solutions Architect
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
