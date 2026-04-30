import { motion } from 'framer-motion';
import {
  Layers, TrendingUp, Lock, BarChart3, Brain, Users, Shield,
  Database, Server, CheckCircle2, ArrowRight, ChevronRight,
  ShieldCheck, Activity, RefreshCw, FileText, Zap, Cpu
} from 'lucide-react';

interface CustomWebAppContentProps {
  onOpenModal: () => void;
}

export const CustomWebAppContent = ({ onOpenModal }: CustomWebAppContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Why Custom Over Off-the-Shelf */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Why Choose Custom Over "Off-the-Shelf"?
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Stop adapting to your software — make your software adapt to you</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: 'Tailored to Your Workflow',
                desc: 'We design a database schema and UI that mimics your team\'s natural processes, rather than forcing you to adapt to generic software.',
                color: 'text-[#ff6b00]',
                bg: 'bg-[#ff6b00]/20',
                border: 'border-[#ff6b00]/20',
              },
              {
                icon: TrendingUp,
                title: 'Scalable & Resilient',
                desc: 'Built on a robust technical stack to ensure your system never crashes as your user base grows — engineered for longevity.',
                color: 'text-blue-400',
                bg: 'bg-blue-500/20',
                border: 'border-blue-400/20',
              },
              {
                icon: Lock,
                title: 'Proprietary Logic',
                desc: 'You own the logic layer and the data, eliminating fluctuating "per-user" or "per-token" licensing fees forever.',
                color: 'text-[#ff6b00]',
                bg: 'bg-[#ff6b00]/20',
                border: 'border-[#ff6b00]/20',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-8 rounded-[32px] bg-white/5 border ${item.border} hover:bg-white/10 transition-all hover:-translate-y-2`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} className={item.color} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/60 leading-relaxed font-medium text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Development Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Specialized Development Pillars
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">High-velocity engines that solve specific operational bottlenecks</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">

            {/* I. Enterprise CRM & ERP Modules */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <BarChart3 size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise CRM & ERP Modules</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Manage your resources and customers in one <span className="text-[#ff6b00] font-bold">seamless, unified dashboard</span> — eliminating the fragmented tools that slow your team down and obscure your true business performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Precision ERP', desc: 'Integrate inventory, HR, order processing, and supply chain logistics into a single source of truth.' },
                    { title: 'Tailored CRM', desc: 'Track exactly what matters to your sales cycle — from lead capture to automated retention analytics.' },
                    { title: 'Financial Sync', desc: 'Automate invoicing and track project-based expenses with real-time P&L visibility.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* II. Automated Data & Document Intelligence */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Brain size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Automated Data & Document Intelligence</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Stop manual data entry and turn your archives into a <span className="text-blue-400 font-bold">searchable, intelligent knowledge base</span> — extracting value from unstructured data that was previously invisible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Extraction Engines', desc: 'Systems that "read" and categorize PDFs, emails, and images — piping key metrics directly into your database.' },
                    { title: 'AI-Driven Logic', desc: 'Predictive algorithms that prioritize high-value leads and forecast inventory restock levels automatically.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* III. Secure Client & Member Portals */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Users size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Secure Client & Member Portals</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Project authority and trust with professional, <span className="text-[#ff6b00] font-bold">multi-layered portal architectures</span> that give your clients and team secure, role-appropriate access to exactly what they need.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Role-Based Access Control (RBAC)', desc: 'Sensitive financial or client data is only visible to authorized personnel — never over-exposed.' },
                    { title: 'Audit-Ready Architecture', desc: 'Every change or deletion is logged with a timestamp and user ID for total accountability.' },
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

        {/* Technical Stack */}
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
              The Technical Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Modern, scalable architecture for maximum uptime and security</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl">
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40">
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-1">Layer</div>
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-2">Our Selection</div>
            </div>

            {[
              { cat: 'Backend', tools: 'Python (Django / FastAPI), Node.js, or Go', icon: Server },
              { cat: 'Frontend', tools: 'React.js, Next.js, Tailwind CSS', icon: Layers },
              { cat: 'Database', tools: 'PostgreSQL, MySQL, or MongoDB for unstructured data', icon: Database },
              { cat: 'Hosting', tools: 'Dedicated AMD EPYC Servers or Secure Cloud (AWS / Azure)', icon: Cpu },
              { cat: 'Security', tools: 'End-to-End Encryption, MFA, and Zero Trust IAM', icon: Shield },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-all group last:border-b-0">
                <div className="p-8 lg:px-10 lg:py-10 flex items-center gap-6 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/20 lg:bg-transparent">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform shrink-0">
                    <item.icon size={26} />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight uppercase leading-none">{item.cat}</span>
                </div>
                <div className="p-8 lg:px-10 lg:py-10 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-xl lg:text-2xl leading-relaxed font-bold tracking-tight">{item.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CISA-Certified Advantage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0c1a36] to-black z-0"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 p-10 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8">
                <ShieldCheck size={18} className="text-blue-400" />
                <span className="text-blue-300 text-[11px] uppercase font-black tracking-[0.2em]">CISA-Certified Advantage</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8">
                Built for Security. <br />
                <span className="text-blue-400">Built to Last.</span>
              </h2>
              <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12">
                As a <span className="text-white font-bold italic">CISA-certified professional</span>, we don't just build for functionality — we build for security, integrity, and auditability at every layer of your application.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Data Integrity', desc: 'Strict validation rules prevent "dirty data" from entering your system — keeping your reports accurate.', icon: CheckCircle2 },
                  { title: 'Disaster Recovery', desc: 'Automated redundant backups ensure your business data is always minutes away from full recovery.', icon: RefreshCw },
                  { title: 'Hardened Infrastructure', desc: 'Your app is supported by enterprise-grade network design and server-side caching for maximum resilience.', icon: Activity },
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all shadow-lg">
                      <point.icon size={20} />
                    </div>
                    <div>
                      <h5 className="text-white font-black text-lg mb-1 tracking-tight">{point.title}</h5>
                      <p className="text-white/40 text-xs leading-relaxed font-medium">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="p-4 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-3xl relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>
                <div className="relative z-10 border border-white/20 rounded-[32px] p-8 bg-black/40 shadow-2xl flex flex-col items-center">
                  <Shield size={100} className="text-[#ff6b00] mb-6 drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]" />
                  <div className="text-center">
                    <span className="block text-3xl font-black text-white tracking-widest leading-none">CISA</span>
                    <span className="block text-[8px] text-white/40 uppercase font-black tracking-[0.4em] mt-3 border-t border-white/10 pt-3">Security-First Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Stage Business-First Process */}
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
              Our 4-Stage "Business-First" Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>

            {[
              { phase: '1', title: 'Workflow Mapping', desc: 'We map your current manual processes to eliminate "Excel-and-Email" chaos before a line of code is written.', color: 'border-[#ff6b00]' },
              { phase: '2', title: 'Architecture Design', desc: 'We design the complete blueprints for your digital infrastructure — database schemas, API contracts, and UI flows.', color: 'border-blue-400/50' },
              { phase: '3', title: 'Iterative Development', desc: 'We build in Sprints, giving you access to a live staging environment to test and validate features in real-time.', color: 'border-[#ff6b00]' },
              { phase: '4', title: 'Deployment & Training', desc: 'We handle data migration from your old systems and provide full staff training for a smooth, confident rollout.', color: 'border-blue-400/50' },
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

        {/* What We Replace */}
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
                <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">The Business Case</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Replace the <br />
                  <span className="text-[#ff6b00]">"Excel-and-Email" Era.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  Manual workflows built on spreadsheets and email chains are a hidden cost centre. A single bespoke application can <span className="text-white font-bold">eliminate dozens of manual touchpoints</span> and pay for itself within months.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {[
                  { label: 'Eliminate fragmented, siloed data across tools', icon: Database },
                  { label: 'Automate approval workflows and notifications', icon: RefreshCw },
                  { label: 'Unified real-time reporting and KPI dashboards', icon: BarChart3 },
                  { label: 'Full IP ownership — no per-seat licensing fees', icon: Lock },
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0c1a36] z-0"></div>
          <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Solutions Architect On Standby</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Own Your <br />
                <span className="text-[#ff6b00]">Business Platform?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Stop renting fragmented software and start building a platform that is engineered specifically for your business DNA — and owned entirely by you.
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
                  <h3 className="text-2xl font-black text-white mb-2">Free Workflow Discovery</h3>
                  <p className="text-white/60 text-sm">Let's map your first automation opportunity</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Need</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Primary Need...</option>
                        <option value="crm_erp" className="text-gray-900 bg-white">CRM / ERP System</option>
                        <option value="client_portal" className="text-gray-900 bg-white">Client or Member Portal</option>
                        <option value="data_automation" className="text-gray-900 bg-white">Data & Document Automation</option>
                        <option value="internal_tool" className="text-gray-900 bg-white">Internal Workflow Tool</option>
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
                  Start My Discovery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
