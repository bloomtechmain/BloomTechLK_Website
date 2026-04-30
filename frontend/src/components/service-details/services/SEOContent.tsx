import { motion } from 'framer-motion';
import {
  Search, Brain, TrendingUp, Shield, Activity, BarChart3, Target,
  FileText, Zap, Globe, Lock, CheckCircle2, ArrowRight, ChevronRight,
  ShieldCheck, Cpu, DollarSign
} from 'lucide-react';

interface SEOContentProps {
  onOpenModal: () => void;
}

export const SEOContent = ({ onOpenModal }: SEOContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Core SEO Pillars */}
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
              Our Core SEO Pillars
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Balancing the art of content with the science of infrastructure</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">

            {/* I. Technical SEO & Infrastructure Hardening */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Cpu size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical SEO & Infrastructure Hardening</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Search engines favor high-performance environments. Leveraging our expertise in <span className="text-[#ff6b00] font-bold">Custom Server Design</span>, we fix the technical debt that holds your rankings back — from the server layer up.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Core Web Vitals', desc: 'Optimizing your site\'s backend for sub-second load times and flawless mobile indexing.' },
                    { title: 'Schema & Metadata', desc: 'Implementing advanced schema markup to help search engines understand your data structure.' },
                    { title: 'Enterprise Hosting', desc: 'Ensuring your site runs on enterprise-grade server environments for maximum stability and speed.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* II. AI-Powered Content Strategy */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Brain size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI-Powered Content Strategy</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  We don't just write for bots — we write for humans to establish your brand as a <span className="text-blue-400 font-bold">Thought Leader</span>. Using Anthropic's Claude for high-fidelity research and deep competitor analysis, our content captures high-intent traffic.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'High-Fidelity Copy', desc: 'AI-assisted research producing authoritative whitepapers, case studies, and landing pages.' },
                    { title: 'Keyword Intelligence', desc: 'Real-time monitoring of competitor keyword gaps to capture high-intent traffic before rivals do.' },
                    { title: 'Messaging Optimization', desc: 'Refining your digital messaging to resonate specifically with your target audience\'s pain points.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/20 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* III. Precision Paid Acquisition (PPC) */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Target size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Precision Paid Acquisition (PPC)</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  We treat your ad budget like a <span className="text-[#ff6b00] font-bold">financial asset</span>, optimizing relentlessly for the lowest Cost Per Acquisition (CPA) possible — squeezing maximum ROI from every dollar spent.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Targeted Campaigns', desc: 'High-ROI Google Ads and Meta campaigns managed with A/B split testing for continuous improvement.' },
                    { title: 'Negative Keyword Filtering', desc: 'Ensuring your budget isn\'t wasted on irrelevant traffic that never converts.' },
                    { title: 'E-Commerce Growth', desc: 'Specialized retargeting and CAPI integration for Shopify and high-volume digital storefronts.' },
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

        {/* CISA Integrity Standard */}
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
                <span className="text-blue-300 text-[11px] uppercase font-black tracking-[0.2em]">CISA Integrity Standard</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8">
                Marketing That <br />
                <span className="text-blue-400">Passes the Audit.</span>
              </h2>
              <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12">
                Drawing on our <span className="text-white font-bold italic">CISA-certified background</span>, we provide "Auditor-level" reporting that replaces guesswork with evidence — tracking real revenue, not just vanity metrics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Conversion Tracking', desc: 'We track actual revenue, not just clicks, to prove true ROI across every campaign.', icon: DollarSign },
                  { title: 'Attribution Modeling', desc: 'Understand exactly which touchpoint — SEO, Social, or Paid — triggered the final sale.', icon: Activity },
                  { title: 'Compliance & Accessibility', desc: 'GDPR/CCPA and ADA (WCAG 2.1) standards protect your brand from legal liability.', icon: Lock },
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
                    <span className="block text-[8px] text-white/40 uppercase font-black tracking-[0.4em] mt-3 border-t border-white/10 pt-3">Auditor-Level Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Marketing Stack */}
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
              Technical Marketing Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Professional-grade tools for granular tracking and performance</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl relative">
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40">
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-1">Category</div>
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-2">Our Toolset</div>
            </div>

            {[
              { cat: 'Analytics', tools: 'Google Analytics 4 (GA4), GTM, and Microsoft Clarity Heatmaps', icon: BarChart3 },
              { cat: 'Technical SEO', tools: 'Ahrefs, SEMRush, and Screaming Frog for technical crawling', icon: Search },
              { cat: 'Content AI', tools: 'Anthropic Claude for high-fidelity technical copy and research', icon: Brain },
              { cat: 'Infrastructure', tools: 'High-Performance Cloud (AWS / GCP / Vercel) and LiteSpeed Optimization', icon: Globe },
              { cat: 'Paid Acquisition', tools: 'Google Ads, Meta Ads Manager, and Conversion API (CAPI) Integration', icon: Target },
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

        {/* 4-Phase Growth Lifecycle */}
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
              The 4-Phase Growth Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>

            {[
              { phase: '1', title: 'Deep Audit', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to identify every opportunity.', color: 'border-[#ff6b00]' },
              { phase: '2', title: 'Infrastructure Fixes', desc: 'Hardening your technical SEO and speed bottlenecks before driving new traffic — building on solid ground.', color: 'border-blue-400/50' },
              { phase: '3', title: 'Campaign Launch', desc: 'Deploying high-authority content and targeted paid ad sets calibrated to your specific audience.', color: 'border-[#ff6b00]' },
              { phase: '4', title: 'Agile Optimization', desc: 'Weekly data reviews to double down on what works and ruthlessly cut what doesn\'t.', color: 'border-blue-400/50' },
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

        {/* Why BloomTech SEO Is Different */}
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
                  <TrendingUp size={40} />
                </div>
                <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Our Differentiator</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  SEO Backed by <br />
                  <span className="text-[#ff6b00]">Infrastructure Experts.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  Most agencies stop at the content layer. We go deeper — optimizing the <span className="text-white font-bold">server, hosting, and codebase</span> itself. When your Core Web Vitals are hardened at the infrastructure level, rankings follow.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {[
                  { label: 'Sub-second load times via enterprise server tuning', icon: Zap },
                  { label: 'AI-assisted content at enterprise research depth', icon: Brain },
                  { label: 'Paid & organic unified under one ROI dashboard', icon: BarChart3 },
                  { label: 'CISA-certified compliance and privacy standards', icon: ShieldCheck },
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">SEO Strategist On Standby</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Stop Being Invisible. <br />
                <span className="text-[#ff6b00]">Start Dominating.</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Your competitors are capturing traffic that should be yours. Let's run a free audit and identify exactly what's holding your rankings back.
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
                  <h3 className="text-2xl font-black text-white mb-2">Free SEO Audit</h3>
                  <p className="text-white/60 text-sm">We'll identify your biggest ranking opportunities</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Goal</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Goal...</option>
                        <option value="organic_rankings" className="text-gray-900 bg-white">Improve Organic Rankings</option>
                        <option value="paid_ads" className="text-gray-900 bg-white">Reduce PPC Cost Per Acquisition</option>
                        <option value="content" className="text-gray-900 bg-white">Content Strategy & Authority</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Growth</option>
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
                  Get My Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
