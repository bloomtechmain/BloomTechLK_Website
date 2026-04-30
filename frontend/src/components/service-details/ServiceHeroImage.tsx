import { motion } from 'framer-motion';
import { Shield, Cpu } from 'lucide-react';

/**
 * ServiceHeroImage Component
 * Hero image section with decorative overlay and badge
 */
interface ServiceHeroImageProps {
  imageUrl?: string;
  serviceName: string;
}

export const ServiceHeroImage = ({ imageUrl, serviceName }: ServiceHeroImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 group">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={serviceName} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-[400px] bg-gradient-to-br from-[#ff6b00]/20 to-[#0c1a36] flex items-center justify-center">
            <Cpu size={80} className="text-white/20" />
          </div>
        )}
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a36]/60 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Backglow for the image */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6b00]/30 to-blue-500/30 blur-3xl -z-10 rounded-[40px]"></div>
    </motion.div>
  );
};
