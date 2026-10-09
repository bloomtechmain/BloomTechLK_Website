import { LucideIcon } from 'lucide-react';
import { ORANGE_GRADIENT } from '../../styles/designTokens';

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

  return (
    <div className="flex flex-wrap items-center gap-3.5">
      <button
        onClick={primaryButton.onClick}
        className="hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-[15px] transition-all shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 group"
        style={{ background: ORANGE_GRADIENT }}
      >
        {primaryButton.text} <PrimaryIcon size={18} />
      </button>
      <button className="bg-white/[0.06] border border-white/25 hover:bg-white/[0.12] hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-[15px] transition-all active:scale-[0.98]">
        {secondaryButton.text}
      </button>
    </div>
  );
};
