import { motion } from 'framer-motion';
import {
  QrCode, Wifi, Shield, Lock, FileText, Truck, BarChart3, Briefcase,
  CheckCircle2, Activity, Key, ArrowRight, ChevronRight, ShieldCheck, Zap, Database
} from 'lucide-react';
import { NAVY_RAISED, ORANGE } from '../../../styles/designTokens';

interface CustomQRNFCContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const CustomQRNFCContent = ({ onOpenModal }: CustomQRNFCContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Integrated Proximity Technologies */}
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
              Integrated Proximity Technologies
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Bridging the physical and digital divide</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">

            {/* I. Dynamic QR Code Ecosystems */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                I
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <QrCode size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dynamic QR Code Ecosystems</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px] mb-5">
                  Unlike static codes, our dynamic QR solutions allow for <span className="font-semibold" style={{ color: ORANGE }}>real-time data updates</span> without changing the physical print — turning every label, asset, or marketing piece into a live, intelligent touchpoint.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {[
                    { title: 'Operational Automation', desc: 'Link physical assets directly to your ERP or CRM for instant status updates or maintenance logs.' },
                    { title: 'Secure Triage & Support', desc: 'Automate customer support ticketing or lead capture by placing intelligent QR codes on hardware or marketing materials.' },
                    { title: 'Encrypted Document Access', desc: 'Provide instant, role-based access to manuals or compliance certifications stored in your private cloud.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* II. Advanced NFC Implementation */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-blue-400/50 flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED }}>
                II
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Wifi size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Advanced NFC Implementation</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px] mb-5">
                  NFC technology offers a premium, <span className="text-blue-400 font-semibold">"invisible" interface</span> for high-security and high-speed interactions — enabling seamless authentication, asset tracking, and collaboration with a single tap.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {[
                    { title: 'Secure Identity & Access (IAM)', desc: 'Phishing-resistant MFA and physical access control within your office or data center.' },
                    { title: 'Asset Lifecycle Management', desc: 'Track hardware from procurement to retirement with NFC tags storing an immutable Single Source of Truth.' },
                    { title: 'Interactive AV & Collaboration', desc: 'Enable "One-Touch" meeting joins and instant media sharing in your managed AV environments.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CISA-Certified Integrity Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-8 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-2/3">
                <div className="w-14 h-14 bg-blue-500/15 rounded-xl flex items-center justify-center text-blue-400 mb-7">
                  <Shield size={26} />
                </div>
                <h3 className="text-blue-400 font-semibold uppercase tracking-wide text-sm mb-4">Security &amp; Compliance</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  The CISA-Certified <span className="block text-lg lg:text-xl text-white/50 font-normal mt-2 italic">Integrity Layer.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Proximity-based applications are often targeted for data interception. As a <span className="text-white font-semibold">CISA-certified firm</span>, we prioritize the security and auditability of every scan and tap — building trust into every touchpoint.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
                  {[
                    { title: 'Audit-Ready Logging', desc: 'Every QR scan or NFC tap is captured with a timestamp and unique identifier — a bulletproof record for internal audits.', icon: Activity },
                    { title: 'Encryption at Rest & Transit', desc: 'AES-256 and TLS 1.3 standards ensure data exchanged via proximity triggers remains unreadable to unauthorized parties.', icon: Lock },
                    { title: 'Role-Based Access (RBAC)', desc: 'Sensitive information triggered by a tag is only visible to authorized personnel based on their credentials.', icon: Key },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/[0.04] border border-white/10 p-5 rounded-lg">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <item.icon size={16} className="text-blue-400" />
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      </div>
                      <p className="text-white/55 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <Shield size={140} className="text-white/[0.06]" />
                  <ShieldCheck size={44} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Use Cases Table */}
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
              Specialized Industry Use Cases
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Direct ROI through precision proximity solutions</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs">Industry</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs">Application</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs">ROI / Result</div>
            </div>

            {[
              { industry: 'Logistics', application: 'NFC-tagged pallets for real-time cross-border tracking', result: '50% reduction in admin overhead', icon: Truck },
              { industry: 'IT Infrastructure', application: 'QR-coded server racks for instant "Rack & Roll" documentation', result: 'Reduced downtime and faster troubleshooting', icon: Database },
              { industry: 'Marketing', application: 'AI-driven QR lead enrichment for automated scoring', result: 'Higher conversion and optimized ad spend', icon: BarChart3 },
              { industry: 'Professional Services', application: 'Secure NFC digital business cards and entity transfer docs', result: 'Streamlined international operations', icon: Briefcase },
            ].map((row) => (
              <div key={row.industry} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <row.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{row.industry}</span>
                </div>
                <div className="p-6 flex items-center border-b lg:border-b-0 border-white/10">
                  <p className="text-white/70 text-[15px] leading-relaxed">{row.application}</p>
                </div>
                <div className="p-6 flex items-center">
                  <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: ORANGE }}>
                    <CheckCircle2 size={15} className="shrink-0" />
                    {row.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-Phase Deployment Process */}
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
              Our 4-Phase Deployment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10"></div>

            {[
              { phase: '1', title: 'Workflow Mapping', desc: 'We identify physical touchpoints where QR or NFC can replace manual "Excel-and-Email" chaos.' },
              { phase: '2', title: 'Architecture & Tagging', desc: 'We design the database schema and select the appropriate hardware — tags, stickers, or cards — for your environment.' },
              { phase: '3', title: 'Full-Scale Integration', desc: 'We connect your proximity triggers to your existing tech stack, including Shopify, CRM, or custom ERP.' },
              { phase: '4', title: 'Monitoring & Security Review', desc: 'Real-time alerts for suspicious scan behavior and regular vulnerability assessments keep your system secure.' },
            ].map((p, idx) => (
              <div key={p.phase} className="relative z-10 flex flex-col items-start gap-5">
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-white text-lg shrink-0" style={{ backgroundColor: NAVY_RAISED, borderColor: idx % 2 === 0 ? ORANGE : '#60A5FA' }}>
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

        {/* What We Integrate With */}
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
                  <Zap size={26} style={{ color: ORANGE }} />
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE }}>Seamless Connectivity</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Plugs Into <span style={{ color: ORANGE }}>Your Stack.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Our proximity solutions don't live in isolation — they connect directly to the tools your business already relies on, turning every scan or tap into a <span className="text-white font-semibold">live data event</span> inside your workflow.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-3.5">
                {[
                  { label: 'CRM & ERP Systems (Custom or Salesforce)', icon: FileText },
                  { label: 'E-commerce Platforms (Shopify, WooCommerce)', icon: BarChart3 },
                  { label: 'Asset Management & ITSM Databases', icon: Database },
                  { label: 'Private Cloud & On-Premise Servers', icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex items-center gap-5 hover:bg-white/[0.07] transition-colors">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: NAVY_RAISED }}
        >
          <div className="p-8 lg:p-14 flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-7">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }}></span>
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">QR &amp; NFC Specialist On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Make Your Physical <span style={{ color: ORANGE }}>Assets Intelligent?</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Let's identify where a single scan or tap can eliminate hours of manual work and replace it with a live, auditable data event.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Free Discovery Session</h3>
                  <p className="text-white/55 text-sm">Let's map your first proximity workflow</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Primary Use Case</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Use Case...</option>
                        <option value="asset_tracking" className="text-gray-900 bg-white">Asset Tracking</option>
                        <option value="access_control" className="text-gray-900 bg-white">Access Control / IAM</option>
                        <option value="marketing" className="text-gray-900 bg-white">Marketing &amp; Lead Capture</option>
                        <option value="crm_integration" className="text-gray-900 bg-white">CRM / ERP Integration</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: ORANGE }}>
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full text-white text-base font-semibold py-4 rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all active:scale-[0.98] flex justify-center items-center gap-2.5"
                  style={{ backgroundColor: ORANGE }}
                >
                  Request Discovery Session <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
