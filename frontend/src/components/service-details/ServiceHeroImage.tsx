import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

/**
 * ServiceHeroImage Component
 * Hero image section for service detail pages
 */
interface ServiceHeroImageProps {
  imageUrl?: string;
  serviceName: string;
}

export const ServiceHeroImage = ({ imageUrl, serviceName }: ServiceHeroImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative"
    >
      <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] border border-white/10">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={serviceName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-[400px] bg-[#16233F] flex items-center justify-center">
            <Cpu size={64} className="text-white/15" />
          </div>
        )}
        {/* Flat scrim for any overlaid text/edge blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101D36]/50 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};
