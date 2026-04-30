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
    <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
      <Icon size={18} className="text-[#ff6b00]" />
      {text}
    </div>
  );
};
