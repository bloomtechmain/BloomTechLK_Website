import { motion } from 'framer-motion';
import {
  Bot, Database, Brain, Shield, Zap, TrendingUp, Sparkles, Sliders, Cloud,
  Cpu, Activity, Lock, CheckCircle2, Key, FileText, BarChart3, ArrowRight, ChevronRight
} from 'lucide-react';
import { NAVY_RAISED, ORANGE, ORANGE_GRADIENT } from '../../../styles/designTokens';

/**
 * AICustomDevContent Component
 * Custom content section for AI Custom Development & Automation service
 */
interface AICustomDevContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const AICustomDevContent = ({ onOpenModal }: AICustomDevContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Core Pillars of AI Development */}
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
              Core Pillars of AI Development
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Bridging data and actionable intelligence</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">

            {/* I. Task Automation & Intelligent Agents */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                I
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Bot size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Task Automation &amp; Intelligent Agents</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  We design custom AI agents that handle repetitive cognitive tasks. Whether it's automating customer support triage, generating high-fidelity reports, or managing complex scheduling, our solutions act as a <span className="font-semibold" style={{ color: ORANGE }}>"Force Multiplier"</span> for your existing team.
                </p>
              </div>
            </div>

            {/* II. Advanced Data Management & Extraction */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-blue-400/50 flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED }}>
                II
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Database size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Advanced Data Management &amp; Extraction</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Stop manual data entry. We build systems that "read" and categorize unstructured data—PDFs, emails, and images—extracting key metrics and piping them directly into your database or CRM. Turn your archives into a searchable, intelligent knowledge base.
                </p>
              </div>
            </div>

            {/* III. Private & Secure LLM Integration */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                III
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Brain size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Private &amp; Secure LLM Integration</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Leveraging industry leaders like <span className="text-blue-300 font-semibold">Anthropic</span>, we build custom interfaces and RAG (Retrieval-Augmented Generation) systems. This allows your AI to answer questions based only on your private company data, ensuring accuracy without compromising security.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* The On-Prem AI Advantage */}
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
              The "On-Prem" AI Advantage
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Leveraging high-performance local compute</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 p-8 lg:p-12" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-5 leading-tight">
                  Why Settle for the <span className="text-blue-400">Public Cloud?</span>
                </h3>
                <p className="text-white/65 leading-relaxed text-[15px] mb-7">
                  For businesses with strict data privacy requirements, we offer <span className="font-semibold" style={{ color: ORANGE }}>On-Premise AI Deployment</span>. Utilizing server-grade hardware (AMD EPYC / High-VRAM GPU clusters), we can host your AI models locally.
                </p>

                <div className="flex gap-3 items-center">
                  <div className="w-10 h-px bg-blue-400/40"></div>
                  <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wide">
                    <Cpu size={14} /> Server-Grade Performance
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <div className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <Shield size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Zero Data Leakage</h4>
                      <p className="text-white/55 text-sm">Your proprietary data never leaves your network. Total control over your intelligence assets.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <Zap size={18} style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Low Latency</h4>
                      <p className="text-white/55 text-sm">Instant response times for internal tools by bypassing public internet gateways.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:bg-white/[0.07] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Cost Predictability</h4>
                      <p className="text-white/55 text-sm">Eliminate the fluctuating "per-token" costs of cloud APIs with a one-time hardware investment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Automation Tech Stack */}
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
              Automation Tech Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Tools and models driving our AI solutions</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Category</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Systems &amp; Frameworks</div>
            </div>

            {[
              { cat: 'Foundation Models', info: 'Claude (Anthropic), GPT-4o, Llama 3 (Open Source)', icon: Sparkles },
              { cat: 'Orchestration', info: 'LangChain, CrewAI, AutoGen', icon: Sliders },
              { cat: 'Data Pipelines', info: 'Python (Pandas/NumPy), SQL, Vector Databases (Pinecone/Chroma)', icon: Database },
              { cat: 'Deployment', info: 'Docker, Kubernetes, Local High-Performance Servers', icon: Cloud },
              { cat: 'Integration', info: 'Zapier, Make, Custom API Webhooks', icon: Zap },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <item.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{item.cat}</span>
                </div>
                <div className="p-6 flex items-center lg:col-span-2">
                  <p className="text-white/70 text-[15px] leading-relaxed">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The CISA-Certified Security Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="rounded-xl border border-white/10 p-8 lg:p-14" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-2/3">
                <div className="w-14 h-14 bg-blue-500/15 rounded-xl flex items-center justify-center text-blue-400 mb-7">
                  <Shield size={26} />
                </div>
                <h3 className="text-blue-400 font-semibold uppercase tracking-wide text-sm mb-4">Security &amp; Compliance</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  AI You Can Trust.
                  <span className="block text-lg lg:text-xl text-white/50 font-normal mt-2 italic">CISA-Certified Integrity.</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  In the "Wild West" of AI development, security is often an afterthought. As a <span className="text-white font-semibold">CISA-certified professional</span>, I ensure every automation we build is resilient, auditable, and secure by design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                  <div className="bg-white/[0.04] border border-white/10 p-5 rounded-lg">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Activity size={16} className="text-blue-400" />
                      <h4 className="text-base font-semibold text-white">Traceable</h4>
                    </div>
                    <p className="text-white/55 text-sm">Full logging of AI decisions and data access for complete audit transparency.</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-5 rounded-lg">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Lock size={16} className="text-blue-400" />
                      <h4 className="text-base font-semibold text-white">Secure</h4>
                    </div>
                    <p className="text-white/55 text-sm">Role-based access control (RBAC) ensuring only authorized users query sensitive data.</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-5 rounded-lg">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <CheckCircle2 size={16} className="text-blue-400" />
                      <h4 className="text-base font-semibold text-white">Compliant</h4>
                    </div>
                    <p className="text-white/55 text-sm">Aligning your AI usage with industry standards and data protection laws.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <Shield size={140} className="text-white/[0.06]" />
                  <Key size={44} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real-World Use Cases */}
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
              Real-World Use Cases
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Direct ROI through specialized automation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: 'Automated Document Intelligence', desc: 'Processing thousands of complex legal contracts and financial invoices per hour with 99% extraction accuracy.', stat: 'Reclaiming 40+ hours/week', icon: FileText, color: 'orange' },
              { title: 'Intelligent Customer Triage', desc: 'AI-driven support agents that handle 70% of initial customer inquiries and automatically schedule technical sessions.', stat: 'Instant Response Time', icon: Bot, color: 'blue' },
              { title: 'Secure Knowledge Mining', desc: 'A private, on-prem RAG system that allows engineers to query decades of internal documentation without cloud data exposure.', stat: 'Zero Trust Security', icon: Cpu, color: 'orange' },
              { title: 'Predictive Resource Analytics', desc: 'AI models that predict server hardware failures and bandwidth bottlenecks before they impact production environments.', stat: 'Proactive Optimization', icon: BarChart3, color: 'blue' },
            ].map((uc, idx) => (
              <div key={idx} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${uc.color === 'blue' ? 'bg-blue-500/15' : ''}`}
                    style={uc.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)' } : undefined}
                  >
                    <uc.icon size={20} className={uc.color === 'blue' ? 'text-blue-400' : undefined} style={uc.color === 'orange' ? { color: ORANGE } : undefined} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{uc.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{uc.desc}</p>
                <div className={`flex items-center gap-2 font-semibold text-xs uppercase tracking-wide ${uc.color === 'blue' ? 'text-blue-400' : ''}`} style={uc.color === 'orange' ? { color: ORANGE } : undefined}>
                  <CheckCircle2 size={14} /> {uc.stat}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Strategy CTA */}
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
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">AI Strategist On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Reclaim Your Team's Time?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Automate the mundane tasks that drain your resources. Let's design an AI roadmap that delivers real ROI.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Free Strategy Session</h3>
                  <p className="text-white/55 text-sm">Let's identify automation opportunities</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">AI Focus Area</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                        <option value="automation" className="text-gray-900 bg-white">Task Automation</option>
                        <option value="data_extraction" className="text-gray-900 bg-white">Data Extraction</option>
                        <option value="custom_llm" className="text-gray-900 bg-white">Custom LLM / RAG</option>
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
                  Request Strategy Session <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
