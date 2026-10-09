import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[26px] px-8 py-16"
        >
          <div className="w-16 h-16 rounded-full bg-[#ff6b00]/15 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-7 h-7 text-[#ff6b00]" />
          </div>
          <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4">Coming Soon</span>
          <h2 className="text-3xl font-black text-white mb-5 tracking-tight drop-shadow-sm">
            {serviceName} is on the way.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            We're building {serviceName} and it isn't publicly available just yet. Get in touch and we'll let you know the moment it launches.
          </p>
          <a href="mailto:hello@bloomtech.lk"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#ff6b00] text-white font-black text-base rounded-2xl hover:bg-[#e65c00] hover:shadow-[0_0_36px_rgba(255,107,0,.55)] transition-all active:scale-[.97]">
            <Mail className="w-4.5 h-4.5" /> Get Notified at Launch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
