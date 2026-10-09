import { motion } from 'framer-motion';
import {
  ShieldAlert, Zap, Globe, UserCheck, FileCheck, Landmark, RefreshCcw,
  Shield, Database, CheckCircle2, Search, Layers, Lock, LineChart,
  Truck, ShieldCheck, Repeat, Eye, ArrowRight, ChevronRight
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_LIGHT } from '../../../styles/designTokens';

/**
 * ProfessionalITConsultingContent Component
 * Custom content section for Professional IT Consulting service
 */
interface ProfessionalITConsultingContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const ProfessionalITConsultingContent = ({ onOpenModal }: ProfessionalITConsultingContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Core Professional Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 rounded-full" style={{ backgroundColor: ORANGE }}></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Core Professional Pillars
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">High-level expertise across three distinct consultancy buckets</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">

            {/* I. IT Governance & Risk Management (CISA-Led) */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                I
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <ShieldAlert size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">I. IT Governance &amp; Risk Management (CISA-Led)</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Leveraging our <span className="font-semibold" style={{ color: ORANGE }}>CISA certification</span>, we provide independent, high-level audits of your IT infrastructure and internal controls. We don't just find vulnerabilities; we design the remediation roadmap to ensure your organization is resilient, compliant, and audit-ready.
                </p>
              </div>
            </div>

            {/* II. Business Process Optimization */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-blue-400/50 flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED }}>
                II
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Zap size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">II. Business Process Optimization</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  We analyze your "as-is" workflows to identify bottlenecks in your supply chain, financial reporting, or team productivity. Drawing on our experience with <span className="text-blue-400 font-semibold">Custom ERP and CRM builds</span>, we re-engineer your processes for maximum efficiency and scalability.
                </p>
              </div>
            </div>

            {/* III. International Operations & Entity Management */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                III
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Globe size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">III. International Operations &amp; Entity Management</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Managing cross-border business is complex. We provide strategic support for <span className="font-semibold" style={{ color: ORANGE }}>entity management, ownership transfers, and international logistics</span>. We understand the nuances of global business, ensuring your operations remain compliant and streamlined across multiple jurisdictions.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Specialized Advisory Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 rounded-full bg-blue-400"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Specialized Advisory Services
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Executive-level leadership &amp; strategic oversight</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Fractional CTO/CISO Services',
                desc: 'High-level technology leadership for firms that need executive-grade strategy without the full-time overhead.',
                icon: UserCheck
              },
              {
                title: 'Compliance Framework Alignment',
                desc: 'Mapping your business to SOC2, ISO 27001, HIPAA, or PCI-DSS standards with surgical precision.',
                icon: FileCheck
              },
              {
                title: 'Vendor & Contract Management',
                desc: 'Professional oversight of third-party technology providers to ensure SLA compliance and cost-efficiency.',
                icon: Landmark
              },
              {
                title: 'Business Continuity Planning (BCP)',
                desc: 'Designing the "What If" scenarios for disaster recovery, data protection, and operational resilience.',
                icon: RefreshCcw
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The "CISA & ISACA" Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-blue-500/20 p-8 lg:p-14 bg-blue-500/[0.04]">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full mb-7">
                  <Shield size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">CISA Certified Authority Layer</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-7">
                  Certified Integrity. <br />
                  <span className="text-blue-400">Evidence-Based</span> Advice.
                </h2>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
                  Professional services are built on trust. As an active member of the <span className="text-white font-semibold">ISACA Austin Chapter</span> and a holder of the <span className="text-blue-400 font-semibold">CISA (Certified Information Systems Auditor)</span> designation, my advisory is grounded in globally recognized standards of excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1.5">Objective Analysis</h5>
                      <p className="text-white/50 text-sm leading-relaxed">We provide unbiased, third-party evaluations of your technology and teams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1.5">Regulatory Fluency</h5>
                      <p className="text-white/50 text-sm leading-relaxed">We speak the language of auditors, lawyers, and stakeholders fluently.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1.5">Ethical Standards</h5>
                      <p className="text-white/50 text-sm leading-relaxed">Our work is governed by a strict code of professional ethics and continuous professional education (CPE).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 flex justify-center">
                <div className="rounded-xl border border-blue-500/20 p-10 w-full max-w-[280px] text-center" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="w-16 h-16 rounded-xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
                    <Database size={28} className="text-blue-400" />
                  </div>
                  <span className="block text-white font-bold text-2xl tracking-tight">ISACA</span>
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.2em] uppercase mt-3 border-t border-white/10 pt-3">Austin Chapter</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Delivery Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ backgroundColor: ORANGE }}></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Service Delivery Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">The frameworks and tools that keep your strategy on track</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Category</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Frameworks &amp; Methodology</div>
            </div>

            {[
              { category: 'Audit Standard', info: 'COBIT, NIST Cybersecurity Framework, ITIL', icon: Search },
              { category: 'Project Mgmt', info: 'Agile, Waterfall, and Lean Six Sigma Principles', icon: Layers },
              { category: 'Communication', info: 'Secure, Encrypted Portals & Professional Documentation', icon: Lock },
              { category: 'Analysis', info: 'Data-driven ROI modeling and Risk Heat Mapping', icon: LineChart }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <item.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{item.category}</span>
                </div>
                <div className="p-6 flex items-center lg:col-span-2">
                  <p className="text-white/70 text-[15px] leading-relaxed">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The 4-Phase Engagement Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ backgroundColor: ORANGE }}></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              The 4-Phase Engagement Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10 z-0"></div>

            {[
              { phase: '1', title: 'Strategic Discovery', desc: 'We define the scope, identify key stakeholders, and establish success metrics.' },
              { phase: '2', title: 'Gap Analysis & Audit', desc: 'A deep-dive into your current state vs. your desired "Future State" or regulatory requirement.' },
              { phase: '3', title: 'Strategy Implementation', desc: 'We execute the plan, whether it\'s an infrastructure overhaul, a compliance push, or an entity transfer.' },
              { phase: '4', title: 'Governance & Handover', desc: 'Final documentation, training, and established monitoring to ensure long-term success.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start gap-5">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-white text-lg shrink-0`} style={{ backgroundColor: NAVY_RAISED, borderColor: idx % 2 === 0 ? ORANGE : '#60A5FA' }}>
                  {p.phase}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
                  <p className="text-white/55 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Logistics & Supply Chain Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-white/10 p-8 lg:p-14" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-1/2">
                 <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-7" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Truck size={26} style={{ color: ORANGE }} />
                 </div>
                 <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE_LIGHT }}>Logistics Consultancy</h3>
                 <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-7">
                    From Sri Lanka <br />
                    <span style={{ color: ORANGE }}>to the World.</span>
                  </h2>
                  <p className="text-white/65 leading-relaxed text-[15px]">
                    With deep roots in international logistics through <span className="text-white font-semibold">Bloom Logistics</span>, we provide specialized consultancy for firms navigating the complexities of global supply chains. We handle the "hard parts"—regulatory compliance, transfer logistics, and operational oversight—so you can focus on growth.
                  </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                 {[
                   { label: 'Regulatory Compliance', icon: ShieldCheck },
                   { label: 'Transfer Logistics', icon: Repeat },
                   { label: 'Operational Oversight', icon: Eye }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex items-center gap-5 hover:bg-white/[0.07] transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                         <item.icon size={20} style={{ color: ORANGE }} />
                      </div>
                      <span className="text-white text-base font-semibold tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: NAVY_RAISED }}
        >
          <div className="p-8 lg:p-14 flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-[50%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-7">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }}></span>
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">Executive Engagement</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready for a <span style={{ color: ORANGE }}>Higher Standard</span> of Service?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Don't settle for generic advice. Partner with a professional who understands the intersection of technology, finance, and global operations.
              </p>
            </div>

            <div className="lg:w-[50%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Full Name</label>
                    <input type="text" placeholder="Executive Name" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" required />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Industry</label>
                    <input type="text" placeholder="Technology / Logistics" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" required />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Primary Need</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer" required>
                        <option value="" disabled className="text-gray-900 bg-white">Select a Requirement...</option>
                        <option value="audit" className="text-gray-900 bg-white">IT Audit & Governance</option>
                        <option value="strategy" className="text-gray-900 bg-white">Operational Strategy</option>
                        <option value="logistics" className="text-gray-900 bg-white">International Logistics</option>
                        <option value="fractional" className="text-gray-900 bg-white">Fractional Leadership (CTO/CISO)</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: ORANGE }}>
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full text-white text-base font-semibold py-4 rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all active:scale-[0.98] flex justify-center items-center gap-2.5" style={{ backgroundColor: ORANGE }}>
                  Book a Professional Consultation <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
