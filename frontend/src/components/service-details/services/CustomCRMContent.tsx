import { motion } from 'framer-motion';
import {
  Users, Layers, Database, Landmark, CheckCircle2, Target, Truck,
  Shield, Lock, History, BarChart3, ShieldAlert, TrendingUp, Zap,
  Search, RefreshCcw, ArrowRight, Globe
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_LIGHT } from '../../../styles/designTokens';

/**
 * CustomCRMContent Component
 * Custom content section for Custom CRM/ERP Solutions service
 */
interface CustomCRMContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const CustomCRMContent = ({ onOpenModal }: CustomCRMContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Intro: Custom Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-20 mt-10"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-wide">Performance Engineering</span>
              </div>
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
                The Power of <span className="text-blue-400">Custom Integration</span>
              </h2>
              <p className="text-white/65 leading-relaxed text-[15px] mb-8">
                Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
              </p>

              <div className="space-y-3">
                {['100% Intellectual Property Ownership', 'Zero "Per-User" Monthly Fees', 'Seamless Legacy System Extraction'].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-white/80 font-medium text-[15px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
                      <CheckCircle2 size={17} />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {[
                { title: 'CRM', sub: 'Customer Lifecycle', icon: Users, color: 'blue' },
                { title: 'ERP', sub: 'Resource Engine', icon: Layers, color: 'orange' },
                { title: 'Data Labs', sub: 'Single Source', icon: Database, color: 'white' },
                { title: 'Fiscal Sync', sub: 'Real-time P&L', icon: Landmark, color: 'orange' },
              ].map((card, i) => (
                <div key={card.title} className={`rounded-xl p-6 border border-white/10 aspect-square flex flex-col justify-between ${i % 2 ? 'translate-y-5' : ''}`} style={{ backgroundColor: NAVY_RAISED }}>
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center ${card.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : card.color === 'white' ? 'bg-white/10 text-white' : ''}`}
                    style={card.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE } : undefined}
                  >
                    <card.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{card.title}</h4>
                    <p className="text-white/40 text-xs">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: 'I', title: 'Tailored CRM', tag: 'Own Your Customer Journey', color: 'blue', icon: Users,
                desc: 'Generic CRMs are cluttered with features you don\'t use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle — from initial lead capture to automated follow-ups and long-term retention analytics.',
                items: ['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'],
              },
              {
                num: 'II', title: 'Precision ERP', tag: 'The Engine of Your Business', color: 'orange', icon: Layers,
                desc: 'Manage your resources, not just your data. Our custom ERPs integrate your core business processes — including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics — into one seamless dashboard.',
                items: ['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'],
              },
              {
                num: 'III', title: 'Fiscal Sync', tag: 'Real-time Financial Integration', color: 'white', icon: Landmark,
                desc: 'Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.',
                items: ['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'],
              },
            ].map((p) => (
              <div key={p.num} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div
                  className={`mb-6 w-12 h-12 rounded-lg flex items-center justify-center ${p.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : p.color === 'white' ? 'bg-white/10 text-white' : ''}`}
                  style={p.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE } : undefined}
                >
                  <p.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1.5">{p.num}. {p.title}</h3>
                <p className={`font-semibold text-xs uppercase tracking-wide mb-4 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'white' ? 'text-white/50' : ''}`} style={p.color === 'orange' ? { color: ORANGE } : undefined}>{p.tag}</p>
                <p className="text-white/60 leading-relaxed text-sm mb-6">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-white/75 text-sm font-medium">
                      <div className={`w-1.5 h-1.5 rounded-full ${p.color === 'blue' ? 'bg-blue-400' : 'bg-white'}`} style={p.color === 'orange' ? { backgroundColor: ORANGE } : undefined}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Features for Scaling */}
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
              Specialized Features for Scaling
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Built for high-growth enterprise operations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, title: 'Automated Lead Scoring', desc: 'Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.', color: 'blue' },
              { icon: Truck, title: 'Inventory & Logistics', desc: 'Real-time visibility of stock levels across multiple locations (ideal for companies like Bloom Logistics).', color: 'orange' },
              { icon: BarChart3, title: 'Custom Reporting Engines', desc: 'Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.', color: 'white' },
              { icon: ShieldAlert, title: 'Advanced RBAC Security', desc: 'Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.', color: 'orange' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${f.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : f.color === 'white' ? 'bg-white/10 text-white' : ''}`}
                  style={f.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE } : undefined}
                >
                  <f.icon size={20} />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{f.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
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
            <div className="h-8 w-1 rounded-full bg-blue-400"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              The Tech Stack: Scalable Architecture
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Battle-tested foundations for zero-downtime operations</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 p-7 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-8">Performance Stack</h4>
                <div className="space-y-7">
                  <div>
                    <p className="text-blue-400 font-semibold text-[10px] uppercase tracking-[0.12em] mb-2">Backend Engineering</p>
                    <p className="text-white text-base font-semibold tracking-tight">Python (Django/FastAPI), Node.js, or Go</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[10px] uppercase tracking-[0.12em] mb-2" style={{ color: ORANGE_LIGHT }}>Database Architecture</p>
                    <p className="text-white text-base font-semibold tracking-tight">PostgreSQL, MySQL, or MongoDB</p>
                  </div>
                  <div>
                    <p className="text-white/50 font-semibold text-[10px] uppercase tracking-[0.12em] mb-2">Hosting Infrastructure</p>
                    <p className="text-white text-base font-semibold tracking-tight">Dedicated AMD EPYC Servers or Secure Cloud</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 p-7 lg:p-10">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-8">Ecosystem &amp; Security Layer</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-blue-400 font-semibold text-[10px] uppercase tracking-[0.12em] mb-4">Native Third-Party Integrations</p>
                    <div className="flex flex-wrap gap-2.5">
                      {['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'].map((item) => (
                        <span key={item} className="px-3.5 py-1.5 bg-white/[0.05] border border-white/10 rounded-lg text-white/75 text-sm font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[10px] uppercase tracking-[0.12em] mb-4" style={{ color: ORANGE_LIGHT }}>Security &amp; Resilience</p>
                    <ul className="space-y-3">
                      {[
                        { label: 'End-to-End Encryption (AES-256)', icon: Shield },
                        { label: 'Multi-Factor Authentication (MFA)', icon: Lock },
                        { label: 'Real-time Audit Logs', icon: History }
                      ].map((item) => (
                        <li key={item.label} className="flex items-center gap-3 text-white/75 text-sm font-medium">
                          <div className="p-1.5 rounded-md shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE }}>
                            <item.icon size={14} />
                          </div>
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CISA Integrity Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-8 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/25 rounded-full mb-7">
                  <Shield size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">CISA-Certified Integrity Layer</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Secure Data. <br />
                  <span className="text-blue-400">Audit-Ready</span> Architecture.
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px] mb-9">
                  As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards.
                </p>
                <div className="space-y-5">
                  {[
                    { title: 'Data Integrity Protocol', desc: 'We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.' },
                    { title: 'Granular Audit Trails', desc: 'Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.' },
                    { title: 'Institutional Disaster Recovery', desc: 'Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={17} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-[15px]">{item.title}</h4>
                        <p className="text-white/55 text-sm leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="rounded-xl border border-blue-500/20 p-10 w-full max-w-[260px] text-center" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="w-16 h-16 rounded-xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
                    <Database size={28} className="text-blue-400" />
                  </div>
                  <span className="block text-white font-bold text-2xl tracking-tight">CISA</span>
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.15em] uppercase mt-3 border-t border-white/10 pt-3">Certified Integrity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study */}
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
              Case Study: <span style={{ color: ORANGE }}>Logistics &amp; Entity Management</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 p-8 lg:p-14" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="font-semibold text-[10px] uppercase tracking-[0.12em] mb-4 border-b pb-3" style={{ color: ORANGE, borderColor: 'rgba(255,107,0,0.2)' }}>The Challenge</h3>
                    <p className="text-lg text-white font-semibold tracking-tight leading-relaxed">
                      Managing a complex transition of ownership and international logistics across multiple corporate entities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-blue-400 font-semibold text-[10px] uppercase tracking-[0.12em] mb-4 border-b border-blue-400/20 pb-3">The Solution</h3>
                    <p className="text-white/65 leading-relaxed text-[15px]">
                      A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-4 text-white/35">
                  <Truck size={22} />
                  <div className="h-px flex-1 bg-white/10"></div>
                  <Globe size={22} />
                  <div className="h-px flex-1 bg-white/10"></div>
                  <Landmark size={22} />
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="bg-white/[0.04] p-7 rounded-xl border border-white/10 h-full">
                  <h3 className="font-semibold text-[10px] uppercase tracking-[0.12em] mb-6" style={{ color: ORANGE }}>The Result</h3>
                  <div className="space-y-7">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-white">100%</p>
                        <TrendingUp size={20} style={{ color: ORANGE }} />
                      </div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mt-1.5">Visibility into Transfer Process</p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-white">50%</p>
                        <Zap size={20} className="text-blue-400" />
                      </div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mt-1.5">Reduction in Admin Overhead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Stage Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-white tracking-tight mb-3">Our 4-Stage "Business-First" Process</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-[15px]">Designing architecture that mimics your team's natural workflow for zero-friction adoption.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10"></div>
            {[
              { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
              { step: '02', title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
              { step: '03', title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
              { step: '04', title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap }
            ].map((item) => (
              <div key={item.step} className="relative z-10 rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center justify-between mb-7">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/40">
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-bold text-lg" style={{ color: ORANGE }}>{item.step}</span>
                </div>
                <h4 className="text-base font-semibold text-white mb-2.5">{item.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: NAVY_RAISED }}
        >
          <div className="p-8 lg:p-16 flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                Ready to <span style={{ color: ORANGE }}>Retire</span> the Spreadsheets?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-md">
                Your business is unique. Your software should be, too. Let's build the last system you'll ever need.
              </p>
              <div className="flex items-center gap-4 p-5 bg-white/[0.04] border border-white/10 rounded-xl w-fit">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full border-2 border-[#101D36] overflow-hidden bg-gray-700">
                      <img src={`https://i.pravatar.cc/150?u=crm${i}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-base tracking-tight">40+ Enterprises</p>
                  <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wide">Successfully Deployed</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Company Name</label>
                    <input type="text" placeholder="Bloom Logistics" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Industry</label>
                    <input type="text" placeholder="Int. Supply Chain" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Current Software Ecosystem</label>
                  <input type="text" placeholder="Legacy SAP / Excel / Email silos" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                </div>
                <div>
                  <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Biggest Operational Bottleneck</label>
                  <textarea placeholder="Tell us what's slowing down your team..." rows={3} className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-semibold text-base shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all active:scale-[0.98] flex items-center justify-center gap-2.5"
                  style={{ backgroundColor: ORANGE }}
                >
                  Start Your Custom Build <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
