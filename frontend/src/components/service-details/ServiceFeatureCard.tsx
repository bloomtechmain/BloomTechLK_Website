import { LucideIcon, Cpu, Cloud, Shield, Globe } from 'lucide-react';

/**
 * ServiceFeatureCard Component
 * Displays a single feature with icon and description
 */
interface ServiceFeatureCardProps {
  feature: string;
  index: number;
  customIcon?: LucideIcon;
}

export const ServiceFeatureCard = ({ feature, index, customIcon }: ServiceFeatureCardProps) => {
  // Default icon rotation based on index
  const getDefaultIcon = (idx: number) => {
    const icons = [Cpu, Cloud, Shield, Globe];
    return icons[idx % 4];
  };

  const Icon = customIcon || getDefaultIcon(index);

  return (
    <div className="bg-[#16233F] p-6 rounded-xl border border-white/10 flex items-start gap-4 hover:border-white/20 transition-colors">
      <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
        <Icon size={18} className="text-[#FF6B00]" />
      </div>
      <div>
        <h4 className="font-semibold text-white text-[15px] leading-snug">{feature}</h4>
      </div>
    </div>
  );
};
