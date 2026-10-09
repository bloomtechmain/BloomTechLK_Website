import { motion } from 'framer-motion';
import {
  Search, Brain, TrendingUp, Shield, Activity, BarChart3, Target,
  Zap, Globe, Lock, ArrowRight, ChevronRight,
  ShieldCheck, Cpu, DollarSign
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_LIGHT } from '../../../styles/designTokens';

interface SEOContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const SEOContent = ({ onOpenModal }: SEOContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Core SEO Pillars */}
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
              Our Core SEO Pillars
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Balancing the art of content with the science of infrastructure</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">
            {[
              {
                num: 'I', title: 'Technical SEO & Infrastructure Hardening', icon: Cpu, color: 'orange',
                desc: <>Search engines favor high-performance environments. Leveraging our expertise in <span className="font-semibold" style={{ color: ORANGE }}>Custom Server Design</span>, we fix the technical debt that holds your rankings back — from the server layer up.</>,
                items: [
                  { title: 'Core Web Vitals', desc: 'Optimizing your site\'s backend for sub-second load times and flawless mobile indexing.' },
                  { title: 'Schema & Metadata', desc: 'Implementing advanced schema markup to help search engines understand your data structure.' },
                  { title: 'Enterprise Hosting', desc: 'Ensuring your site runs on enterprise-grade server environments for maximum stability and speed.' },
                ],
              },
              {
                num: 'II', title: 'AI-Powered Content Strategy', icon: Brain, color: 'blue',
                desc: <>We don't just write for bots — we write for humans to establish your brand as a <span className="text-blue-400 font-semibold">Thought Leader</span>. Using Anthropic's Claude for high-fidelity research and deep competitor analysis, our content captures high-intent traffic.</>,
                items: [
                  { title: 'High-Fidelity Copy', desc: 'AI-assisted research producing authoritative whitepapers, case studies, and landing pages.' },
                  { title: 'Keyword Intelligence', desc: 'Real-time monitoring of competitor keyword gaps to capture high-intent traffic before rivals do.' },
                  { title: 'Messaging Optimization', desc: 'Refining your digital messaging to resonate specifically with your target audience\'s pain points.' },
                ],
              },
              {
                num: 'III', title: 'Precision Paid Acquisition (PPC)', icon: Target, color: 'orange',
                desc: <>We treat your ad budget like a <span className="font-semibold" style={{ color: ORANGE }}>financial asset</span>, optimizing relentlessly for the lowest Cost Per Acquisition (CPA) possible — squeezing maximum ROI from every dollar spent.</>,
                items: [
                  { title: 'Targeted Campaigns', desc: 'High-ROI Google Ads and Meta campaigns managed with A/B split testing for continuous improvement.' },
                  { title: 'Negative Keyword Filtering', desc: 'Ensuring your budget isn\'t wasted on irrelevant traffic that never converts.' },
                  { title: 'E-Commerce Growth', desc: 'Specialized retargeting and CAPI integration for Shopify and high-volume digital storefronts.' },
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

        {/* CISA Integrity Standard */}
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
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">CISA Integrity Standard</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-7">
                  Marketing That <br />
                  <span className="text-blue-400">Passes the Audit.</span>
                </h2>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
                  Drawing on our <span className="text-white font-semibold">CISA-certified background</span>, we provide "Auditor-level" reporting that replaces guesswork with evidence — tracking real revenue, not just vanity metrics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-7">
                  {[
                    { title: 'Conversion Tracking', desc: 'We track actual revenue, not just clicks, to prove true ROI across every campaign.', icon: DollarSign },
                    { title: 'Attribution Modeling', desc: 'Understand exactly which touchpoint — SEO, Social, or Paid — triggered the final sale.', icon: Activity },
                    { title: 'Compliance & Accessibility', desc: 'GDPR/CCPA and ADA (WCAG 2.1) standards protect your brand from legal liability.', icon: Lock },
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
                    <Shield size={28} style={{ color: ORANGE }} />
                  </div>
                  <span className="block text-white font-bold text-2xl tracking-tight">CISA</span>
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.15em] uppercase mt-3 border-t border-white/10 pt-3">Auditor-Level Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Marketing Stack */}
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
              Technical Marketing Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Professional-grade tools for granular tracking and performance</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Category</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Our Toolset</div>
            </div>

            {[
              { cat: 'Analytics', tools: 'Google Analytics 4 (GA4), GTM, and Microsoft Clarity Heatmaps', icon: BarChart3 },
              { cat: 'Technical SEO', tools: 'Ahrefs, SEMRush, and Screaming Frog for technical crawling', icon: Search },
              { cat: 'Content AI', tools: 'Anthropic Claude for high-fidelity technical copy and research', icon: Brain },
              { cat: 'Infrastructure', tools: 'High-Performance Cloud (AWS / GCP / Vercel) and LiteSpeed Optimization', icon: Globe },
              { cat: 'Paid Acquisition', tools: 'Google Ads, Meta Ads Manager, and Conversion API (CAPI) Integration', icon: Target },
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

        {/* 4-Phase Growth Lifecycle */}
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
              The 4-Phase Growth Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10"></div>

            {[
              { phase: '1', title: 'Deep Audit', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to identify every opportunity.' },
              { phase: '2', title: 'Infrastructure Fixes', desc: 'Hardening your technical SEO and speed bottlenecks before driving new traffic — building on solid ground.' },
              { phase: '3', title: 'Campaign Launch', desc: 'Deploying high-authority content and targeted paid ad sets calibrated to your specific audience.' },
              { phase: '4', title: 'Agile Optimization', desc: 'Weekly data reviews to double down on what works and ruthlessly cut what doesn\'t.' },
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

        {/* Why BloomTech SEO Is Different */}
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
                  <TrendingUp size={26} style={{ color: ORANGE }} />
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE_LIGHT }}>Our Differentiator</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  SEO Backed by <br />
                  <span style={{ color: ORANGE }}>Infrastructure Experts.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Most agencies stop at the content layer. We go deeper — optimizing the <span className="text-white font-semibold">server, hosting, and codebase</span> itself. When your Core Web Vitals are hardened at the infrastructure level, rankings follow.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-3.5">
                {[
                  { label: 'Sub-second load times via enterprise server tuning', icon: Zap },
                  { label: 'AI-assisted content at enterprise research depth', icon: Brain },
                  { label: 'Paid & organic unified under one ROI dashboard', icon: BarChart3 },
                  { label: 'CISA-certified compliance and privacy standards', icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex items-center gap-5">
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
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">SEO Strategist On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Stop Being Invisible. <br />
                <span style={{ color: ORANGE }}>Start Dominating.</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Your competitors are capturing traffic that should be yours. Let's run a free audit and identify exactly what's holding your rankings back.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Free SEO Audit</h3>
                  <p className="text-white/55 text-sm">We'll identify your biggest ranking opportunities</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Primary Goal</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Goal...</option>
                        <option value="organic_rankings" className="text-gray-900 bg-white">Improve Organic Rankings</option>
                        <option value="paid_ads" className="text-gray-900 bg-white">Reduce PPC Cost Per Acquisition</option>
                        <option value="content" className="text-gray-900 bg-white">Content Strategy &amp; Authority</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Growth</option>
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
                  Get My Free Audit <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
