import { motion } from 'framer-motion';
import {
  PenTool, Zap, Search, ShoppingCart, Building2, AppWindow, Target,
  Server, Shield, Lock, CheckCircle2, ArrowRight, ChevronRight,
  ShieldCheck, Brain, Layers, Globe, Cpu
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_LIGHT, ORANGE_GRADIENT } from '../../../styles/designTokens';

interface CustomWebsiteDesignContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const CustomWebsiteDesignContent = ({ onOpenModal }: CustomWebsiteDesignContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Three Pillars */}
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
              Our Design Philosophy: The Three Pillars
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">A strategic balance of Art, Science, and Strategy</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">
            {[
              {
                num: 'I', title: 'High-Fidelity UI/UX Design', icon: PenTool, color: 'orange',
                desc: <>Utilizing industry-leading creative stacks — including Canva Enterprise and Freepik Premium assets — we craft visual identities that stand out. Our focus is on <span className="font-semibold" style={{ color: ORANGE }}>"User Intent"</span>, ensuring every pixel serves a purpose and every click leads to a conversion.</>,
                items: [
                  { title: 'Conversion-First Layouts', desc: 'Every page is architected around a primary user action — from sign-up to purchase to contact.' },
                  { title: 'Brand Identity Systems', desc: 'Cohesive visual language across typography, color, and motion that reflects your brand prestige.' },
                  { title: 'Responsive & Adaptive', desc: 'Pixel-perfect experiences across desktop, tablet, and mobile without compromise.' },
                ],
              },
              {
                num: 'II', title: 'Performance-Driven Engineering', icon: Zap, color: 'blue',
                desc: <>A beautiful site is useless if it's slow. We build on <span className="text-blue-400 font-semibold">clean, bloat-free code</span> optimized for Core Web Vitals — whether it's a headless Shopify build or a custom React application, sub-second load times are non-negotiable.</>,
                items: [
                  { title: 'Core Web Vitals Optimization', desc: 'LCP, CLS, and INP metrics tuned for top-tier Google PageSpeed scores.' },
                  { title: 'Headless Architecture', desc: 'Decoupled frontend and backend for maximum flexibility, speed, and scalability.' },
                  { title: 'Flawless Mobile Responsiveness', desc: 'Built mobile-first to serve the majority of your users on every screen size.' },
                ],
              },
              {
                num: 'III', title: 'SEO & Content Strategy', icon: Search, color: 'orange',
                desc: <>We bake <span className="font-semibold" style={{ color: ORANGE }}>Search Engine Optimization into the foundation</span> of your site. From schema markup to metadata architecture, your site is discoverable from day one — powered by AI-refined messaging.</>,
                items: [
                  { title: 'Schema & Metadata Architecture', desc: 'Structured data implementation that helps search engines understand and rank your content.' },
                  { title: 'AI-Refined Messaging', desc: 'Anthropic Claude used to produce copy that resonates with your specific target audience.' },
                  { title: 'Technical SEO Foundation', desc: 'Canonical tags, sitemap generation, and crawl optimization built in from the first line of code.' },
                ],
              },
            ].map((p) => (
              <div key={p.num} className="relative">
                <div
                  className={`absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10 ${p.color === 'blue' ? 'border-blue-400/50' : ''}`}
                  style={{ backgroundColor: NAVY_RAISED, borderColor: p.color === 'orange' ? ORANGE : undefined }}
                >
                  {p.num}
                </div>
                <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${p.color === 'blue' ? 'bg-blue-500/15' : ''}`} style={p.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)' } : undefined}>
                      <p.icon size={20} className={p.color === 'blue' ? 'text-blue-400' : undefined} style={p.color === 'orange' ? { color: ORANGE } : undefined} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="text-white/65 leading-relaxed text-[15px] mb-5">{p.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {p.items.map((item) => (
                      <div key={item.title} className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                        <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                        <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Web Solutions */}
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
              Specialized Web Solutions
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">The specific engines your business needs to grow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: ShoppingCart, title: 'E-Commerce Powerhouses', desc: 'Custom Shopify and WooCommerce integrations designed for high-volume transactions and seamless checkout flows.', highlight: 'Shopify Plus & WooCommerce', color: 'orange' },
              { icon: Building2, title: 'Corporate Identity Hubs', desc: 'Professional, multi-page architectures for firms that need to project authority, trust, and executive presence.', highlight: 'Enterprise Authority Design', color: 'blue' },
              { icon: AppWindow, title: 'Custom Web Applications', desc: 'Bespoke portals, member areas, and internal tools built to solve specific operational bottlenecks in your business.', highlight: 'React & Next.js', color: 'orange' },
              { icon: Target, title: 'Landing Page Optimization', desc: 'High-converting "Lead Gen" pages designed for specific ad campaigns — engineered for maximum CPA efficiency.', highlight: 'PPC & Social Campaigns', color: 'blue' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${item.color === 'blue' ? 'bg-blue-500/15 text-blue-400' : ''}`} style={item.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)', color: ORANGE } : undefined}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className={`flex items-center gap-2 font-semibold text-xs uppercase tracking-wide ${item.color === 'blue' ? 'text-blue-400' : ''}`} style={item.color === 'orange' ? { color: ORANGE } : undefined}>
                  <CheckCircle2 size={14} /> {item.highlight}
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
                  Hosting That <br />
                  <span className="text-blue-400">Never Fails.</span>
                </h2>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
                  Most designers leave you to figure out hosting on your own. Because we specialize in <span className="text-white font-semibold">IT Infrastructure & Network Design</span>, your site lives on enterprise-grade server environments — fully managed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'DNS & SSL Management', desc: 'We handle domain configuration, SSL certificates, and renewals so you never go offline unexpectedly.', icon: Globe },
                    { title: 'Server-Side Caching', desc: 'Enterprise caching layers that ensure sub-second response times even under heavy traffic loads.', icon: Cpu },
                    { title: 'Uptime Monitoring', desc: '24/7 automated monitoring with instant alerts and rapid incident response from our infrastructure team.', icon: Zap },
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
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.15em] uppercase mt-3 border-t border-white/10 pt-3">Infrastructure-Grade Hosting</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Stack */}
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
              The Technical Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Professional toolset for scalable, secure web builds</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Category</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Our Toolset</div>
            </div>

            {[
              { cat: 'Platforms', tools: 'Shopify Plus, WordPress (Headless), Webflow', icon: Layers },
              { cat: 'Frontend', tools: 'React.js, Next.js, Tailwind CSS', icon: AppWindow },
              { cat: 'Creative', tools: 'Canva Enterprise, Adobe Suite, Freepik Premium Assets', icon: PenTool },
              { cat: 'Intelligence', tools: 'AI-Driven Copywriting & Optimization (Claude / GPT-4)', icon: Brain },
              { cat: 'Hosting', tools: 'High-Performance Cloud (AWS / Google Cloud / Vercel)', icon: Server },
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

        {/* Compliance & Accessibility */}
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
                <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE_LIGHT }}>CISA-Certified Standards</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Compliance &amp;<br />
                  <span style={{ color: ORANGE }}>Accessibility Built In.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Drawing on our <span className="text-white font-semibold">CISA-certified background</span>, we ensure your website meets modern security and regulatory standards — protecting your business from liability while delivering a premium experience for every user.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-3.5">
                {[
                  { label: 'GDPR & CCPA Compliance', desc: 'Privacy-first data handling with consent management built into the site architecture.', icon: Lock },
                  { label: 'ADA Accessibility (WCAG 2.1)', desc: 'Accessible design ensuring every user — regardless of ability — has a premium experience.', icon: ShieldCheck },
                  { label: 'SSL & Security Hardening', desc: 'TLS 1.3 encryption, HTTP security headers, and vulnerability scanning on every deployment.', icon: Shield },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
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
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">Web Specialist On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Build a Site <br />
                <span style={{ color: ORANGE }}>That Actually Converts?</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Your website should be your hardest-working salesperson. Let's design a digital experience that reflects the prestige of your brand and drives measurable results.
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
                        <option value="corporate" className="text-gray-900 bg-white">Corporate Identity Site</option>
                        <option value="web_app" className="text-gray-900 bg-white">Custom Web Application</option>
                        <option value="landing" className="text-gray-900 bg-white">Landing Page / Lead Gen</option>
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
