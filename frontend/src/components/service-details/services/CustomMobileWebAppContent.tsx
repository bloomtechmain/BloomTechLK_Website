import { motion } from 'framer-motion';
import {
  Smartphone, Zap, PenTool, ShoppingCart, BarChart3, Brain, Users,
  Plug, QrCode, Server, GitBranch, Cpu, Shield, Lock, ShieldCheck,
  CheckCircle2, ArrowRight, ChevronRight, Database, Layers,
} from 'lucide-react';

interface CustomMobileWebAppContentProps {
  onOpenModal: () => void;
}

export const CustomMobileWebAppContent = ({ onOpenModal }: CustomMobileWebAppContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Our Development Philosophy
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Bridging technological breakthroughs with practical business requirements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Conversion-First Design',
                desc: 'We focus on "User Intent," ensuring every pixel and interaction — on mobile or web — serves a specific business purpose, not just aesthetic appeal.',
                color: 'text-[#ff6b00]',
                bg: 'bg-[#ff6b00]/20',
                border: 'border-[#ff6b00]/20',
              },
              {
                icon: Zap,
                title: 'Performance-Driven Engineering',
                desc: 'Built on clean, bloat-free code optimized for sub-second load times and flawless responsiveness across every device and platform.',
                color: 'text-blue-400',
                bg: 'bg-blue-500/20',
                border: 'border-blue-400/20',
              },
              {
                icon: PenTool,
                title: 'High-Fidelity UI/UX',
                desc: 'Utilizing Canva Enterprise and Freepik Premium to craft standout visual identities that reflect the prestige of your brand everywhere.',
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

        {/* Specialized Solutions */}
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
              Specialized Mobile & Web Solutions
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Bespoke engines tailored to your operational needs — on any platform</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-12">

            {[
              {
                num: 'I',
                icon: ShoppingCart,
                title: 'E-Commerce Powerhouses',
                desc: 'Custom storefronts — mobile or web — designed for high-volume transactions and seamless checkout flows, from product discovery to post-purchase experience.',
                tags: ['Shopify Integration', 'Apple Pay / Google Pay', 'High-Volume Checkout'],
                borderColor: 'border-[#ff6b00]',
                shadowColor: 'shadow-[0_0_20px_rgba(255,107,0,0.3)]',
                iconBg: 'bg-[#ff6b00]/20',
                iconColor: 'text-[#ff6b00]',
              },
              {
                num: 'II',
                icon: BarChart3,
                title: 'Enterprise CRM & ERP Modules',
                desc: 'Manage resources and customers in one seamless, unified dashboard — integrating inventory, HR, sales pipelines, and financial sync into a single source of truth.',
                tags: ['Precision ERP', 'Tailored CRM', 'Financial Sync'],
                borderColor: 'border-blue-400/50',
                shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
                iconBg: 'bg-blue-500/20',
                iconColor: 'text-blue-400',
              },
              {
                num: 'III',
                icon: Users,
                title: 'Custom Portals & Internal Tools',
                desc: 'Bespoke mobile and web applications built to solve specific operational bottlenecks — from field service dashboards to secure, role-based client and member portals.',
                tags: ['React Native & Flutter', 'Role-Based Access (RBAC)', 'Offline-First'],
                borderColor: 'border-[#ff6b00]',
                shadowColor: 'shadow-[0_0_20px_rgba(255,107,0,0.3)]',
                iconBg: 'bg-[#ff6b00]/20',
                iconColor: 'text-[#ff6b00]',
              },
              {
                num: 'IV',
                icon: Brain,
                title: 'Automated Data & Document Intelligence',
                desc: 'Turn your archives into a searchable, intelligent knowledge base — extraction engines that read PDFs, emails, and images, piping key metrics directly into your database.',
                tags: ['Extraction Engines', 'AI-Driven Logic', 'Predictive Analytics'],
                borderColor: 'border-blue-400/50',
                shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
                iconBg: 'bg-blue-500/20',
                iconColor: 'text-blue-400',
              },
              {
                num: 'V',
                icon: Plug,
                title: 'Enterprise Integration',
                desc: 'We connect your apps directly to your existing tech stack — including Shopify, custom CRM, and ERP systems — creating a single source of truth.',
                tags: ['CRM & ERP Sync', 'REST & GraphQL APIs', 'Real-Time Data'],
                borderColor: 'border-[#ff6b00]',
                shadowColor: 'shadow-[0_0_20px_rgba(255,107,0,0.3)]',
                iconBg: 'bg-[#ff6b00]/20',
                iconColor: 'text-[#ff6b00]',
              },
              {
                num: 'VI',
                icon: QrCode,
                title: 'Proximity-Based Applications',
                desc: 'Specialized apps utilizing QR and NFC technology for secure asset tracking, contactless interactions, and automated workflows.',
                tags: ['NFC Integration', 'QR Scanning', 'Asset Tracking'],
                borderColor: 'border-blue-400/50',
                shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
                iconBg: 'bg-blue-500/20',
                iconColor: 'text-blue-400',
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 ${item.borderColor} ${item.shadowColor} flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform`}>
                  {item.num}
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconColor}`}>
                      <item.icon size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-bold uppercase tracking-widest">
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
                <Server size={18} className="text-blue-400" />
                <span className="text-blue-300 text-[11px] uppercase font-black tracking-[0.2em]">Exclusive Infrastructure Advantage</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8">
                Backend That <br />
                <span className="text-blue-400">Never Fails.</span>
              </h2>
              <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12">
                Unlike traditional design firms, our mobile and web solutions are backed by <span className="text-white font-bold italic">enterprise-grade infrastructure</span> — fully managed, always available, and built to scale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Secure Managed Hosting', desc: 'App backends hosted on high-availability cloud environments — AWS, Google Cloud, or Azure.', icon: Layers },
                  { title: 'Automated CI/CD Pipelines', desc: 'Custom deployment pipelines that automate testing and ensure zero-downtime updates to your live app.', icon: GitBranch },
                  { title: 'On-Premise Capability', desc: 'For strict data privacy, we host your application\'s intelligence locally on AMD EPYC server clusters.', icon: Cpu },
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
                  <Server size={100} className="text-[#ff6b00] mb-6 drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]" />
                  <div className="text-center">
                    <span className="block text-3xl font-black text-white tracking-widest leading-none">Enterprise</span>
                    <span className="block text-[8px] text-white/40 uppercase font-black tracking-[0.4em] mt-3 border-t border-white/10 pt-3">Infrastructure-Grade Backend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CISA Integrity Standard */}
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
                  <Shield size={40} />
                </div>
                <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">CISA-Certified Standard</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Security &<br />
                  <span className="text-[#ff6b00]">Compliance Built In.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  As a <span className="text-white font-bold">CISA-certified professional</span>, we ensure every mobile and web platform we build meets modern security and regulatory standards — protecting your business and every user from day one.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {[
                  { label: 'GDPR/CCPA Compliance & ADA Accessibility (WCAG 2.1)', desc: 'Privacy-first and inclusive design protecting you from regulatory liability.', icon: Lock },
                  { label: 'Audit-Ready, Disaster-Resilient Architecture', desc: 'Detailed logging, redundant backups, and hardened protocols built for full accountability.', icon: CheckCircle2 },
                  { label: 'Zero Trust Identity & Access Management', desc: 'Phishing-resistant MFA and least-privilege access to protect sensitive user data.', icon: ShieldCheck },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 mt-1">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-white text-base font-bold tracking-tight block mb-1">{item.label}</span>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
              Our 4-Phase Development Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>

            {[
              { phase: '1', title: 'Strategy & Workflow Mapping', desc: 'Mapping the complete user journey and current manual processes before touching a single line of code — aligning every screen to a business goal.', color: 'border-[#ff6b00]' },
              { phase: '2', title: 'Architecture & Creative Concepting', desc: 'Designing database schemas, API contracts, and high-fidelity mockups that bring your brand\'s personality to life and validate UX flows.', color: 'border-blue-400/50' },
              { phase: '3', title: 'Iterative Development & Integration', desc: 'Building in sprints with access to a live staging environment, integrating essential APIs for payments, communications, and your existing stack.', color: 'border-[#ff6b00]' },
              { phase: '4', title: 'Launch, Training & Optimization', desc: 'App Store submission or deployment, full staff training, and continuous performance tuning as your user base grows.', color: 'border-blue-400/50' },
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

        {/* Tech Stack */}
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
              Mobile & Web Tech Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">The professional toolset behind every build</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl">
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40">
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-1">Layer</div>
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-2">Our Toolset</div>
            </div>

            {[
              { cat: 'Mobile', tools: 'React Native, Flutter — one codebase for iOS & Android', icon: Smartphone },
              { cat: 'Web Frontend', tools: 'React, Next.js, TypeScript, Tailwind CSS', icon: Layers },
              { cat: 'Backend', tools: 'Node.js, Python (Django / FastAPI), or Go', icon: Server },
              { cat: 'Database', tools: 'PostgreSQL, MySQL, or MongoDB for unstructured data', icon: Database },
              { cat: 'Infrastructure', tools: 'AWS, Google Cloud, Azure — with On-Premise AMD EPYC option', icon: Cpu },
              { cat: 'Security', tools: 'OAuth 2.0, JWT, Zero Trust IAM, AES-256 Encryption', icon: Shield },
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Solutions Architect On Standby</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Build Your <br />
                <span className="text-[#ff6b00]">Mobile or Web Platform?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Your app — on a phone or in a browser — should be your hardest-working team member. Let's map the user journey and design an experience that drives real business results.
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
                  <h3 className="text-2xl font-black text-white mb-2">Start Your Project</h3>
                  <p className="text-white/60 text-sm">Tell us what you're building</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Project Type...</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Store</option>
                        <option value="crm_erp" className="text-gray-900 bg-white">CRM / ERP System</option>
                        <option value="client_portal" className="text-gray-900 bg-white">Client or Member Portal</option>
                        <option value="enterprise" className="text-gray-900 bg-white">Enterprise / Internal Tool</option>
                        <option value="consumer" className="text-gray-900 bg-white">Consumer-Facing App</option>
                        <option value="proximity" className="text-gray-900 bg-white">QR / NFC Proximity App</option>
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
                  Start My Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
