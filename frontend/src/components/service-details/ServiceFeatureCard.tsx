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
    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
      <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-xl shadow-lg flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-white tracking-wide">{feature}</h4>
      </div>
    </div>
  );
};
