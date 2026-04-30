import { motion } from 'framer-motion';
import { ServiceFeatureCard } from './ServiceFeatureCard';
import { ServiceBenefitsSidebar } from './ServiceBenefitsSidebar';

/**
 * DefaultServiceContent Component
 * Standard content layout for services without custom sections
 */
interface DefaultServiceContentProps {
  serviceName: string;
  longDesc?: string;
  features?: string[];
  benefits?: string[];
}

export const DefaultServiceContent = ({ 
  serviceName, 
  longDesc, 
  features = [], 
  benefits = [] 
}: DefaultServiceContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Description & Features */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Overview</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-16">
              {longDesc || `Detailed information about ${serviceName} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
            </p>

            {features.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Core Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, idx) => (
                    <ServiceFeatureCard key={idx} feature={feature} index={idx} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column: Benefits Sidebar */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServiceBenefitsSidebar benefits={benefits} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
