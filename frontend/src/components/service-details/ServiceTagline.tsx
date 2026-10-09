import { LucideIcon } from 'lucide-react';

/**
 * ServiceTagline Component
 * Displays the service tagline with icon
 */
interface ServiceTaglineProps {
  icon: LucideIcon;
  text: string;
}

export const ServiceTagline = ({ icon: Icon, text }: ServiceTaglineProps) => {
  return (
    <div className="text-[#FFB27A] text-sm font-semibold uppercase tracking-[0.12em] mb-4 flex items-center gap-2">
      <Icon size={16} className="text-[#FFB27A]" />
      {text}
    </div>
  );
};
