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
    <div className="sticky top-32">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-[#ff6b00]/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none"></div>
        
        <h3 className="text-2xl font-black text-white mb-8 tracking-tight mt-2 drop-shadow-sm">Client Benefits</h3>
        
        {benefits && benefits.length > 0 ? (
          <ul className="flex flex-col gap-5 relative z-10">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-0.5 text-[#ff6b00]">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-white/90 text-lg font-medium leading-tight">{benefit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/60">Benefits information is being compiled.</p>
        )}

        <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">Need a custom approach?</p>
          <Link to="/" className="text-white font-bold flex items-center gap-2 hover:text-[#ff6b00] transition-colors group/link">
            Contact Solutions Architect 
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
