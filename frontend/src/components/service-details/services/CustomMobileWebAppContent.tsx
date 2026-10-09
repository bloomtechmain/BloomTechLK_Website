import { motion } from 'framer-motion';
import {
  Smartphone, Zap, PenTool, ShoppingCart, BarChart3, Brain, Users,
  Plug, QrCode, Server, GitBranch, Cpu, Shield, Lock, ShieldCheck,
  CheckCircle2, ArrowRight, ChevronRight, Database, Layers,
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_LIGHT, ORANGE_GRADIENT } from '../../../styles/designTokens';

interface CustomMobileWebAppContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const CustomMobileWebAppContent = ({ onOpenModal }: CustomMobileWebAppContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ backgroundColor: ORANGE }}></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Our Development Philosophy
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Bridging technological breakthroughs with practical business requirements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Smartphone, title: 'Conversion-First Design', desc: 'We focus on "User Intent," ensuring every pixel and interaction — on mobile or web — serves a specific business purpose, not just aesthetic appeal.', color: 'orange' },
              { icon: Zap, title: 'Performance-Driven Engineering', desc: 'Built on clean, bloat-free code optimized for sub-second load times and flawless responsiveness across every device and platform.', color: 'blue' },
              { icon: PenTool, title: 'High-Fidelity UI/UX', desc: 'Utilizing Canva Enterprise and Freepik Premium to craft standout visual identities that reflect the prestige of your brand everywhere.', color: 'orange' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${item.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : ''}`} style={item.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE } : undefined}>
                  <item.icon size={22} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2.5">{item.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full bg-blue-400"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Specialized Mobile &amp; Web Solutions
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Bespoke engines tailored to your operational needs — on any platform</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-9">
            {[
              { num: 'I', icon: ShoppingCart, title: 'E-Commerce Powerhouses', desc: 'Custom storefronts — mobile or web — designed for high-volume transactions and seamless checkout flows, from product discovery to post-purchase experience.', tags: ['Shopify Integration', 'Apple Pay / Google Pay', 'High-Volume Checkout'], color: 'orange' },
              { num: 'II', icon: BarChart3, title: 'Enterprise CRM & ERP Modules', desc: 'Manage resources and customers in one seamless, unified dashboard — integrating inventory, HR, sales pipelines, and financial sync into a single source of truth.', tags: ['Precision ERP', 'Tailored CRM', 'Financial Sync'], color: 'blue' },
              { num: 'III', icon: Users, title: 'Custom Portals & Internal Tools', desc: 'Bespoke mobile and web applications built to solve specific operational bottlenecks — from field service dashboards to secure, role-based client and member portals.', tags: ['React Native & Flutter', 'Role-Based Access (RBAC)', 'Offline-First'], color: 'orange' },
              { num: 'IV', icon: Brain, title: 'Automated Data & Document Intelligence', desc: 'Turn your archives into a searchable, intelligent knowledge base — extraction engines that read PDFs, emails, and images, piping key metrics directly into your database.', tags: ['Extraction Engines', 'AI-Driven Logic', 'Predictive Analytics'], color: 'blue' },
              { num: 'V', icon: Plug, title: 'Enterprise Integration', desc: 'We connect your apps directly to your existing tech stack — including Shopify, custom CRM, and ERP systems — creating a single source of truth.', tags: ['CRM & ERP Sync', 'REST & GraphQL APIs', 'Real-Time Data'], color: 'orange' },
              { num: 'VI', icon: QrCode, title: 'Proximity-Based Applications', desc: 'Specialized apps utilizing QR and NFC technology for secure asset tracking, contactless interactions, and automated workflows.', tags: ['NFC Integration', 'QR Scanning', 'Asset Tracking'], color: 'blue' },
            ].map((item) => (
              <div key={item.num} className="relative">
                <div
                  className={`absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10 ${item.color === 'blue' ? 'border-blue-400/50' : ''}`}
                  style={{ backgroundColor: NAVY_RAISED, borderColor: item.color === 'orange' ? ORANGE : undefined }}
                >
                  {item.num}
                </div>
                <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.color === 'blue' ? 'bg-blue-500/15' : ''}`} style={item.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)' } : undefined}>
                      <item.icon size={20} className={item.color === 'blue' ? 'text-blue-400' : undefined} style={item.color === 'orange' ? { color: ORANGE } : undefined} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/65 leading-relaxed text-[15px] mb-5">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-full text-white/55 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-8 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full mb-7">
                  <Server size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">Exclusive Infrastructure Advantage</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-7">
                  Backend That <br />
                  <span className="text-blue-400">Never Fails.</span>
                </h2>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
                  Unlike traditional design firms, our mobile and web solutions are backed by <span className="text-white font-semibold">enterprise-grade infrastructure</span> — fully managed, always available, and built to scale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Secure Managed Hosting', desc: 'App backends hosted on high-availability cloud environments — AWS, Google Cloud, or Azure.', icon: Layers },
                    { title: 'Automated CI/CD Pipelines', desc: 'Custom deployment pipelines that automate testing and ensure zero-downtime updates to your live app.', icon: GitBranch },
                    { title: 'On-Premise Capability', desc: 'For strict data privacy, we host your application\'s intelligence locally on AMD EPYC server clusters.', icon: Cpu },
                  ].map((point) => (
                    <div key={point.title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <point.icon size={18} />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-base mb-1.5">{point.title}</h5>
                        <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/5 flex justify-center">
                <div className="rounded-xl border border-blue-500/20 p-10 w-full max-w-[280px] text-center" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Server size={28} style={{ color: ORANGE }} />
                  </div>
                  <span className="block text-white font-bold text-2xl tracking-tight">Enterprise</span>
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.15em] uppercase mt-3 border-t border-white/10 pt-3">Infrastructure-Grade Backend</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CISA Integrity Standard */}
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
                  <Shield size={26} style={{ color: ORANGE }} />
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE_LIGHT }}>CISA-Certified Standard</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Security &amp;<br />
                  <span style={{ color: ORANGE }}>Compliance Built In.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  As a <span className="text-white font-semibold">CISA-certified professional</span>, we ensure every mobile and web platform we build meets modern security and regulatory standards — protecting your business and every user from day one.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-3.5">
                {[
                  { label: 'GDPR/CCPA Compliance & ADA Accessibility (WCAG 2.1)', desc: 'Privacy-first and inclusive design protecting you from regulatory liability.', icon: Lock },
                  { label: 'Audit-Ready, Disaster-Resilient Architecture', desc: 'Detailed logging, redundant backups, and hardened protocols built for full accountability.', icon: CheckCircle2 },
                  { label: 'Zero Trust Identity & Access Management', desc: 'Phishing-resistant MFA and least-privilege access to protect sensitive user data.', icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <item.icon size={20} style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <span className="text-white text-[15px] font-semibold tracking-tight block mb-1">{item.label}</span>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Phase Development Roadmap */}
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
              Our 4-Phase Development Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10"></div>

            {[
              { phase: '1', title: 'Strategy & Workflow Mapping', desc: 'Mapping the complete user journey and current manual processes before touching a single line of code — aligning every screen to a business goal.' },
              { phase: '2', title: 'Architecture & Creative Concepting', desc: 'Designing database schemas, API contracts, and high-fidelity mockups that bring your brand\'s personality to life and validate UX flows.' },
              { phase: '3', title: 'Iterative Development & Integration', desc: 'Building in sprints with access to a live staging environment, integrating essential APIs for payments, communications, and your existing stack.' },
              { phase: '4', title: 'Launch, Training & Optimization', desc: 'App Store submission or deployment, full staff training, and continuous performance tuning as your user base grows.' },
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

        {/* Tech Stack */}
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
              Mobile &amp; Web Tech Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">The professional toolset behind every build</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Layer</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Our Toolset</div>
            </div>

            {[
              { cat: 'Mobile', tools: 'React Native, Flutter — one codebase for iOS & Android', icon: Smartphone },
              { cat: 'Web Frontend', tools: 'React, Next.js, TypeScript, Tailwind CSS', icon: Layers },
              { cat: 'Backend', tools: 'Node.js, Python (Django / FastAPI), or Go', icon: Server },
              { cat: 'Database', tools: 'PostgreSQL, MySQL, or MongoDB for unstructured data', icon: Database },
              { cat: 'Infrastructure', tools: 'AWS, Google Cloud, Azure — with On-Premise AMD EPYC option', icon: Cpu },
              { cat: 'Security', tools: 'OAuth 2.0, JWT, Zero Trust IAM, AES-256 Encryption', icon: Shield },
            ].map((item) => (
              <div key={item.cat} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <item.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{item.cat}</span>
                </div>
                <div className="p-6 flex items-center lg:col-span-2">
                  <p className="text-white/70 text-[15px] leading-relaxed">{item.tools}</p>
                </div>
              </div>
            ))}
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
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">Solutions Architect On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Build Your <br />
                <span style={{ color: ORANGE }}>Mobile or Web Platform?</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Your app — on a phone or in a browser — should be your hardest-working team member. Let's map the user journey and design an experience that drives real business results.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Start Your Project</h3>
                  <p className="text-white/55 text-sm">Tell us what you're building</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Project Type...</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Store</option>
                        <option value="crm_erp" className="text-gray-900 bg-white">CRM / ERP System</option>
                        <option value="client_portal" className="text-gray-900 bg-white">Client or Member Portal</option>
                        <option value="enterprise" className="text-gray-900 bg-white">Enterprise / Internal Tool</option>
                        <option value="consumer" className="text-gray-900 bg-white">Consumer-Facing App</option>
                        <option value="proximity" className="text-gray-900 bg-white">QR / NFC Proximity App</option>
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
                  style={{ background: ORANGE_GRADIENT }}
                >
                  Start My Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
