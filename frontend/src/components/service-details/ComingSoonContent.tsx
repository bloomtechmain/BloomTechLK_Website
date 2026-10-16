import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';
import { Section, Eyebrow, MediaFrame, PrimaryButton, fade } from '../kit';
import { servicePhotos } from '../photos';

/**
 * ComingSoonContent Component
 * Placeholder content for services that are announced but not yet launched
 */
interface ComingSoonContentProps {
  serviceName: string;
}

export const ComingSoonContent = ({ serviceName }: ComingSoonContentProps) => {
  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div {...fade()} className="lg:col-span-6">
          <span className="w-14 h-14 rounded-xl bg-grey-light text-navy-mid flex items-center justify-center mb-8">
            <Clock className="w-6 h-6" />
          </span>
          <Eyebrow>Coming Soon</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            {serviceName} is on the way.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-xl">
            We're building {serviceName} and it isn't publicly available just yet. Get in touch and we'll let you know the moment it launches.
          </p>
          <PrimaryButton href="mailto:hello@bloomtech.lk" icon={Mail}>Get Notified at Launch</PrimaryButton>
        </motion.div>
        <div className="lg:col-span-6">
          <MediaFrame photo={servicePhotos['medical-system'].a} />
        </div>
      </div>
    </Section>
  );
};
