import { motion } from 'framer-motion';
import {
  QrCode, Wifi, Shield, Lock, FileText, Truck, BarChart3, Briefcase,
  CheckCircle2, Activity, Key, ArrowRight, ChevronRight, ShieldCheck, Zap, Database
} from 'lucide-react';

interface CustomQRNFCContentProps {
  onOpenModal: () => void;
}

export const CustomQRNFCContent = ({ onOpenModal }: CustomQRNFCContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Integrated Proximity Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Integrated Proximity Technologies
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Bridging the physical and digital divide</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">

            {/* I. Dynamic QR Code Ecosystems */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <QrCode size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Dynamic QR Code Ecosystems</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Unlike static codes, our dynamic QR solutions allow for <span className="text-[#ff6b00] font-bold">real-time data updates</span> without changing the physical print — turning every label, asset, or marketing piece into a live, intelligent touchpoint.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Operational Automation', desc: 'Link physical assets directly to your ERP or CRM for instant status updates or maintenance logs.' },
                    { title: 'Secure Triage & Support', desc: 'Automate customer support ticketing or lead capture by placing intelligent QR codes on hardware or marketing materials.' },
                    { title: 'Encrypted Document Access', desc: 'Provide instant, role-based access to manuals or compliance certifications stored in your private cloud.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* II. Advanced NFC Implementation */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Wifi size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Advanced NFC Implementation</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  NFC technology offers a premium, <span className="text-blue-400 font-bold">"invisible" interface</span> for high-security and high-speed interactions — enabling seamless authentication, asset tracking, and collaboration with a single tap.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Secure Identity & Access (IAM)', desc: 'Phishing-resistant MFA and physical access control within your office or data center.' },
                    { title: 'Asset Lifecycle Management', desc: 'Track hardware from procurement to retirement with NFC tags storing an immutable Single Source of Truth.' },
                    { title: 'Interactive AV & Collaboration', desc: 'Enable "One-Touch" meeting joins and instant media sharing in your managed AV environments.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CISA-Certified Integrity Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                <Shield size={40} />
              </div>
              <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Security & Compliance</h3>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                The CISA-Certified <br />
                <span className="block text-2xl lg:text-3xl text-white/50 font-medium mt-4 tracking-normal italic">Integrity Layer.</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                Proximity-based applications are often targeted for data interception. As a <span className="text-white font-bold">CISA-certified firm</span>, we prioritize the security and auditability of every scan and tap — building trust into every touchpoint.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { title: 'Audit-Ready Logging', desc: 'Every QR scan or NFC tap is captured with a timestamp and unique identifier — a bulletproof record for internal audits.', icon: Activity },
                  { title: 'Encryption at Rest & Transit', desc: 'AES-256 and TLS 1.3 standards ensure data exchanged via proximity triggers remains unreadable to unauthorized parties.', icon: Lock },
                  { title: 'Role-Based Access (RBAC)', desc: 'Sensitive information triggered by a tag is only visible to authorized personnel based on their credentials.', icon: Key },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon size={18} className="text-blue-400" />
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <Shield size={200} className="text-white/10 relative z-10" />
                <ShieldCheck size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Use Cases Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Specialized Industry Use Cases
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Direct ROI through precision proximity solutions</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>

            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Industry</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Application</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">ROI / Result</div>
            </div>

            {[
              { industry: 'Logistics', application: 'NFC-tagged pallets for real-time cross-border tracking', result: '50% reduction in admin overhead', icon: Truck },
              { industry: 'IT Infrastructure', application: 'QR-coded server racks for instant "Rack & Roll" documentation', result: 'Reduced downtime and faster troubleshooting', icon: Database },
              { industry: 'Marketing', application: 'AI-driven QR lead enrichment for automated scoring', result: 'Higher conversion and optimized ad spend', icon: BarChart3 },
              { industry: 'Professional Services', application: 'Secure NFC digital business cards and entity transfer docs', result: 'Streamlined international operations', icon: Briefcase },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-all group last:border-b-0">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform shrink-0">
                    <row.icon size={22} />
                  </div>
                  <span className="text-xl font-black text-white tracking-tight">{row.industry}</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-1 border-b lg:border-b-0 border-white/5">
                  <p className="text-white/80 text-base lg:text-lg font-medium leading-relaxed">{row.application}</p>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-1">
                  <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm">
                    <CheckCircle2 size={16} className="shrink-0" />
                    {row.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-Phase Deployment Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
              Our 4-Phase Deployment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>

            {[
              { phase: '1', title: 'Workflow Mapping', desc: 'We identify physical touchpoints where QR or NFC can replace manual "Excel-and-Email" chaos.', color: 'border-[#ff6b00]' },
              { phase: '2', title: 'Architecture & Tagging', desc: 'We design the database schema and select the appropriate hardware — tags, stickers, or cards — for your environment.', color: 'border-blue-400/50' },
              { phase: '3', title: 'Full-Scale Integration', desc: 'We connect your proximity triggers to your existing tech stack, including Shopify, CRM, or custom ERP.', color: 'border-[#ff6b00]' },
              { phase: '4', title: 'Monitoring & Security Review', desc: 'Real-time alerts for suspicious scan behavior and regular vulnerability assessments keep your system secure.', color: 'border-blue-400/50' },
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent mt-4 md:mt-0 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 ${p.color} shadow-lg flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
                  {p.phase}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{p.title}</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What We Integrate With */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 lg:mt-32"
        >
          <div className="bg-gradient-to-br from-[#1a305c] via-black to-[#050b18] border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 group-hover:rotate-3 transition-transform">
                  <Zap size={40} />
                </div>
                <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Seamless Connectivity</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Plugs Into <br />
                  <span className="text-[#ff6b00]">Your Stack.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  Our proximity solutions don't live in isolation — they connect directly to the tools your business already relies on, turning every scan or tap into a <span className="text-white font-bold">live data event</span> inside your workflow.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {[
                  { label: 'CRM & ERP Systems (Custom or Salesforce)', icon: FileText },
                  { label: 'E-commerce Platforms (Shopify, WooCommerce)', icon: BarChart3 },
                  { label: 'Asset Management & ITSM Databases', icon: Database },
                  { label: 'Private Cloud & On-Premise Servers', icon: ShieldCheck },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0">
                      <item.icon size={24} />
                    </div>
                    <span className="text-white text-lg font-bold tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">QR & NFC Specialist On Standby</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Make Your Physical <br />
                <span className="text-[#ff6b00]">Assets Intelligent?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Let's identify where a single scan or tap can eliminate hours of manual work and replace it with a live, auditable data event.
              </p>

              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white mb-2">Free Discovery Session</h3>
                  <p className="text-white/60 text-sm">Let's map your first proximity workflow</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Use Case</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Use Case...</option>
                        <option value="asset_tracking" className="text-gray-900 bg-white">Asset Tracking</option>
                        <option value="access_control" className="text-gray-900 bg-white">Access Control / IAM</option>
                        <option value="marketing" className="text-gray-900 bg-white">Marketing & Lead Capture</option>
                        <option value="crm_integration" className="text-gray-900 bg-white">CRM / ERP Integration</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Request Discovery Session <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
