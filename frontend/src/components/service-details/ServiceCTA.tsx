import { LucideIcon } from 'lucide-react';

/**
 * ServiceCTA Component
 * Call-to-action button group for service pages
 */
interface CTAButton {
  text: string;
  icon: LucideIcon;
  primary?: boolean;
  onClick?: () => void;
}

interface ServiceCTAProps {
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}

export const ServiceCTA = ({ primaryButton, secondaryButton }: ServiceCTAProps) => {
  const PrimaryIcon = primaryButton.icon;
  const SecondaryIcon = secondaryButton.icon;

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={primaryButton.onClick}
        className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
      >
        {primaryButton.text} <PrimaryIcon size={18} className="group-hover:fill-white transition-all" />
      </button>
      <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
        {secondaryButton.text}
      </button>
    </div>
  );
};
