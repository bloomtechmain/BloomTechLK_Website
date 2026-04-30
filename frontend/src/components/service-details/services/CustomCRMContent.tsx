import { motion } from 'framer-motion';
import { 
  Users, Layers, Database, Landmark, CheckCircle2, Target, Truck, 
  Shield, Lock, History, BarChart3, ShieldAlert, TrendingUp, Zap, 
  Search, RefreshCcw, ArrowRight, Globe
} from 'lucide-react';

/**
 * CustomCRMContent Component
 * Custom content section for Custom CRM/ERP Solutions service
 */
interface CustomCRMContentProps {
  onOpenModal: () => void;
}

export const CustomCRMContent = ({ onOpenModal }: CustomCRMContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Core CRM/ERP Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Performance Engineering</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                The Power of <span className="text-blue-400 italic font-serif">Custom Integration</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10">
                Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  100% Intellectual Property Ownership
                </div>
                <div className="flex items-center gap-4 text-white/80 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  Zero "Per-User" Monthly Fees
                </div>
                <div className="flex items-center gap-4 text-white/80 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  Seamless Legacy System Extraction
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">CRM</h4>
                  <p className="text-white/40 text-sm italic">Customer Lifecycle</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all translate-y-8 group">
                <div className="w-14 h-14 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <Layers size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">ERP</h4>
                  <p className="text-white/40 text-sm italic">Resource Engine</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Database size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Data Labs</h4>
                  <p className="text-white/40 text-sm italic">Single Source</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all translate-y-8 group">
                <div className="w-14 h-14 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <Landmark size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Fiscal Sync</h4>
                  <p className="text-white/40 text-sm italic">Real-time P&L</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Pillar I: Tailored CRM */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>
              <div className="mb-8 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">I. Tailored CRM</h3>
              <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-6">Own Your Customer Journey</p>
              <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                Generic CRMs are cluttered with features you don't use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle—from initial lead capture to automated follow-ups and long-term retention analytics.
              </p>
              <ul className="space-y-4">
                {['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar II: Precision ERP */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6b00]/10 blur-3xl rounded-full group-hover:bg-[#ff6b00]/20 transition-all"></div>
              <div className="mb-8 w-16 h-16 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">II. Precision ERP</h3>
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-widest mb-6">The Engine of Your Business</p>
              <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                Manage your resources, not just your data. Our custom ERPs integrate your core business processes—including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics—into one seamless dashboard.
              </p>
              <ul className="space-y-4">
                {['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar III: Financial Synchronization */}
            <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
              <div className="mb-8 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">III. Fiscal Sync</h3>
              <p className="text-white/50 font-bold text-sm uppercase tracking-widest mb-6">Real-time Financial Integration</p>
              <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.
              </p>
              <ul className="space-y-4">
                {['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialized Features for Scaling */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Specialized Features for Scaling
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Built for high-growth enterprise operations</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none"></div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Target size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Automated Lead Scoring</h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                  Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 blur-2xl rounded-full pointer-events-none"></div>
                <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Truck size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Inventory & Logistics</h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                  Real-time visibility of stock levels across multiple locations (ideal for companies like <span className="text-[#ff6b00]">Bloom Logistics</span>).
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <BarChart3 size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Custom Reporting Engines</h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                  Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 blur-2xl rounded-full pointer-events-none"></div>
                <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <ShieldAlert size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Advanced RBAC Security</h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                  Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Tech Stack: Scalable Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                The Tech Stack: Scalable Architecture
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Battle-tested foundations for zero-downtime operations</span>
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                <div className="lg:col-span-4 bg-black/20 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group/layer">
                  <div className="absolute -inset-10 bg-blue-500/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                  <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 relative z-10">Performance Stack</h4>
                  <div className="space-y-10 relative z-10">
                    <div>
                      <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Backend Engineering</p>
                      <p className="text-white text-xl font-bold tracking-tight">Python (Django/FastAPI), Node.js, or Go</p>
                    </div>
                    <div>
                      <p className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-3">Database Architecture</p>
                      <p className="text-white text-xl font-bold tracking-tight">PostgreSQL, MySQL, or MongoDB</p>
                    </div>
                    <div>
                      <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-3">Hosting Infrastructure</p>
                      <p className="text-white text-xl font-bold tracking-tight">Dedicated AMD EPYC Servers or Secure Cloud</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-12 relative overflow-hidden group/layer">
                  <div className="absolute -inset-10 bg-[#ff6b00]/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                  <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 relative z-10">Ecosystem & Security Layer</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                    <div>
                      <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6">Native Third-Party Integrations</p>
                      <div className="flex flex-wrap gap-3">
                        {['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'].map((item) => (
                          <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-white/80 text-sm font-bold hover:bg-white/10 transition-colors cursor-default">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6">Security & Resilience</p>
                      <ul className="space-y-4">
                        {[
                          { label: 'End-to-End Encryption (AES-256)', icon: Shield },
                          { label: 'Multi-Factor Authentication (MFA)', icon: Lock },
                          { label: 'Real-time Audit Logs', icon: History }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4 text-white/80 font-bold text-[13px]">
                            <div className="p-1.5 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                              <item.icon size={16} />
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

          {/* The "CISA-Certified" Integrity Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-10"
          >
            <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/10 border border-blue-500/30 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8">
                    <Shield size={16} className="text-blue-400" />
                    <span className="text-blue-300 text-[10px] uppercase font-black tracking-widest">CISA-Certified Integrity Layer</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Secure Data. <br />
                    <span className="text-blue-400">Audit-Ready</span> Architecture.
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                    As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                          <CheckCircle2 size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-xl tracking-tight">Data Integrity Protocol</h4>
                          <p className="text-white/60 text-sm leading-relaxed mt-1">We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                          <CheckCircle2 size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-xl tracking-tight">Granular Audit Trails</h4>
                          <p className="text-white/60 text-sm leading-relaxed mt-1">Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                          <CheckCircle2 size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-xl tracking-tight">Institutional Disaster Recovery</h4>
                          <p className="text-white/60 text-sm leading-relaxed mt-1">Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative group/shield">
                    <div className="absolute inset-0 bg-blue-400/20 blur-[120px] rounded-full group-hover/shield:bg-blue-400/30 transition-all"></div>
                    <Shield size={320} className="text-white/5 relative z-10 transform group-hover/shield:scale-105 transition-transform" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <Database size={80} className="text-blue-400 mb-4 animate-pulse" />
                      <span className="text-white/20 font-black text-6xl tracking-tighter select-none">CISA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study: Logistics & Entity Management */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 pt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Case Study: <span className="text-[#ff6b00]">Logistics & Entity Management</span>
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#ff6b00]/10 to-transparent pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-[#ff6b00]/20 pb-4">The Challenge</h3>
                      <p className="text-xl lg:text-2xl text-white font-black tracking-tight leading-relaxed">
                        Managing a complex transition of ownership and international logistics across multiple corporate entities.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-blue-400/20 pb-4">The Solution</h3>
                      <p className="text-lg text-white/70 leading-relaxed font-medium">
                        A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex items-center gap-4 text-white/40">
                    <Truck size={24} />
                    <div className="h-px flex-1 bg-white/10"></div>
                    <Globe size={24} />
                    <div className="h-px flex-1 bg-white/10"></div>
                    <Landmark size={24} />
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 relative overflow-hidden group-hover:bg-white/10 transition-all">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff6b00]/10 blur-3xl rounded-full"></div>
                    <h3 className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6">The Result</h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-baseline gap-2">
                           <p className="text-5xl font-black text-white">100%</p>
                           <TrendingUp size={24} className="text-[#ff6b00]" />
                        </div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-2">Visibility into Transfer Process</p>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                           <p className="text-5xl font-black text-white">50%</p>
                           <Zap size={24} className="text-blue-400" />
                        </div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-2">Reduction in Admin Overhead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our 4-Stage "Business-First" Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-32"
          >
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-6 underline decoration-[#ff6b00]/30 underline-offset-8">Our 4-Stage <br className="md:hidden" /> <span className="text-[#ff6b00]">"Business-First"</span> Process</h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium tracking-tight">Designing architecture that mimics your team's natural workflow for zero-friction adoption.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {[
                { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
                { step: '02', title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
                { step: '03', title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
                { step: '04', title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap }
              ].map((item, idx) => (
                <div key={idx} className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-white/10 rounded-2xl flex items-center justify-center text-[#ff6b00] font-black text-2xl z-10 shadow-xl shadow-black/50">
                    {item.step}
                  </div>
                  <div className="mb-10 text-white/30 group-hover:text-[#ff6b00] transition-colors">
                    <item.icon size={44} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight leading-none">{item.title}</h4>
                  <p className="text-white/50 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Call to Action - Retire the Spreadsheets */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[50px] shadow-2xl border border-white/10 bg-gradient-to-br from-[#0c1a36] via-black to-[#050b18] p-10 lg:p-24"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff6b00]/10 blur-[120px] rounded-full pointer-events-none transition-all duration-1000"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
              <div className="lg:w-1/2">
                 <h2 className="text-5xl lg:text-8xl font-black text-white tracking-[1.1] mb-12">
                   Ready to <br />
                   <span className="text-[#ff6b00]">Retire</span> the <br />
                   Spreadsheets?
                 </h2>
                 <p className="text-2xl text-white/70 leading-relaxed font-medium mb-16 max-w-md">
                   Your business is unique. Your software should be, too. Let's build the <span className="text-white italic underline decoration-[#ff6b00]">last system you'll ever need.</span>
                 </p>
                 <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl w-fit">
                    <div className="flex -space-x-4">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-14 h-14 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                            <img src={`https://i.pravatar.cc/150?u=crm${i}`} alt="user" className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                    <div>
                      <p className="text-white font-black text-lg tracking-tight">40+ Enterprises</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Successfully Deployed</p>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 lg:p-14 rounded-[40px] shadow-3xl">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                         <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Company Name</label>
                         <input type="text" placeholder="Bloom Logistics" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                       </div>
                       <div className="space-y-3">
                         <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Industry</label>
                         <input type="text" placeholder="Int. Supply Chain" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Current Software Ecosystem</label>
                       <input type="text" placeholder="Legacy SAP / Excel / Email silos" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Biggest Operational Bottleneck</label>
                       <textarea placeholder="Tell us what's slowing down your team..." rows={3} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20"></textarea>
                    </div>
                    <button 
                       type="submit"
                       onClick={(e) => {
                         e.preventDefault();
                         onOpenModal();
                       }}
                       className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/30 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                       Start Your Custom Build <ArrowRight size={26} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
