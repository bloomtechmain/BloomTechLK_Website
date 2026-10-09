import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';
import { ORANGE_GRADIENT } from '../../styles/designTokens';

/**
 * ComingSoonContent Component
 * Placeholder content for services that are announced but not yet launched
 */
interface ComingSoonContentProps {
  serviceName: string;
}

export const ComingSoonContent = ({ serviceName }: ComingSoonContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[800px] mx-auto px-6 xl:px-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#16233F] border border-white/10 rounded-xl px-8 py-16"
        >
          <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
            <Clock className="w-6 h-6 text-[#FF6B00]" />
          </div>
          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#FFB27A] mb-4">Coming Soon</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight">
            {serviceName} is on the way.
          </h2>
          <p className="text-white/65 leading-relaxed mb-9 max-w-xl mx-auto text-[15px]">
            We're building {serviceName} and it isn't publicly available just yet. Get in touch and we'll let you know the moment it launches.
          </p>
          <a href="mailto:hello@bloomtech.lk"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-white font-semibold text-[15px] rounded-lg hover:opacity-90 transition-all shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:-translate-y-0.5"
            style={{ background: ORANGE_GRADIENT }}>
            <Mail className="w-4 h-4" /> Get Notified at Launch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
