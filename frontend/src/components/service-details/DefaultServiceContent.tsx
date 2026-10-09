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
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

        {/* Left Column: Description & Features */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Overview</h2>
            <p className="text-white/65 leading-relaxed mb-14 text-[15px]">
              {longDesc || `Detailed information about ${serviceName} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
            </p>

            {features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-7 tracking-tight">Core Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ServiceBenefitsSidebar benefits={benefits} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
