import { motion } from 'framer-motion';
import {
  BrainCircuit, Target, Network, Zap, Sliders, Code2, Brain, Database,
  Eye, FileText, Mic, Activity, Users, LineChart, ShieldCheck, Lock,
  CheckCircle2, Shuffle, Key, TrendingUp, ArrowRight, ChevronRight
} from 'lucide-react';
import { NAVY_RAISED, ORANGE } from '../../../styles/designTokens';

/**
 * AIMachineLearningContent Component
 * Custom content section for AI & Machine Learning service
 */
interface AIMachineLearningContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const AIMachineLearningContent = ({ onOpenModal }: AIMachineLearningContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* The BloomTech AI Strategy: 2026 Edition */}
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
              The BloomTech AI Strategy: 2026 Edition
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">From experimental pilots to production-grade intelligence</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">

            {/* I. Agentic AI & Autonomous Workflows */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                I
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <BrainCircuit size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Agentic AI &amp; Autonomous Workflows</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px] mb-5">
                  We move beyond simple prompts. We build AI Agents capable of executing tasks within defined business parameters without constant human oversight.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Target size={15} style={{ color: ORANGE }} /> Autonomous Decision-Making
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Executing tasks without constant human oversight</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Network size={15} style={{ color: ORANGE }} /> Multi-System Orchestration
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Connecting CRM, ERP, and Slack automatically</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Zap size={15} style={{ color: ORANGE }} /> Proactive Initiation
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Triggering actions based on real-time data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* II. Domain-Specific Model Tuning */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-blue-400/50 flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED }}>
                II
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Sliders size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Domain-Specific Model Tuning</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px] mb-5">
                  While general models are broad, they often lack the nuance of your specific industry. We ground models in your proprietary data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Code2 size={15} className="text-blue-400" /> Context Engineering
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Grounding in your "corporate language"</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Brain size={15} className="text-blue-400" /> Fine-Tuned Hybrids
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Custom logic for Finance, Logistics, Healthcare</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Database size={15} className="text-blue-400" /> RAG Systems
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Real-time access to internal documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* III. Multi-Modal Intelligence */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                III
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Eye size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Multi-Modal Intelligence</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px] mb-5">
                  In 2026, data isn't just text. Our solutions process information across all modalities for comprehensive intelligence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <FileText size={15} style={{ color: ORANGE }} /> Vision &amp; Document AI
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Extract data from invoices and blueprints</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Mic size={15} style={{ color: ORANGE }} /> Audio &amp; Sentiment
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Analyze customer calls in real-time</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
                      <Activity size={15} style={{ color: ORANGE }} /> Fusion Systems
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">Predict hardware failures before they happen</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* AI Governance Framework */}
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
              Implementation &amp; Governance
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Building AI safely is the other half of the battle</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: 'Human-in-the-Loop', desc: 'AI handles 90% of the work, but flags complex cases for human approval.', stat: 'Supervised Automation', icon: Users, color: 'blue' },
              { title: 'Model Observability', desc: 'Continuous monitoring for "drift" to ensure accuracy over time.', stat: 'Always Accurate', icon: LineChart, color: 'orange' },
              { title: 'Bias & Fairness', desc: 'Rigorous auditing for compliance with 2026 AI regulations and ethical standards.', stat: 'Ethical AI', icon: ShieldCheck, color: 'blue' },
              { title: 'Security-First', desc: 'On-Premise, Hybrid, or Private Cloud deployment ensuring data never leaves your control.', stat: 'Your Data, Your Control', icon: Lock, color: 'orange' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${item.color === 'blue' ? 'bg-blue-500/15' : ''}`}
                    style={item.color === 'orange' ? { backgroundColor: 'rgba(255,107,0,0.15)' } : undefined}
                  >
                    <item.icon size={20} className={item.color === 'blue' ? 'text-blue-400' : undefined} style={item.color === 'orange' ? { color: ORANGE } : undefined} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className={`flex items-center gap-2 font-semibold text-xs uppercase tracking-wide ${item.color === 'blue' ? 'text-blue-400' : ''}`} style={item.color === 'orange' ? { color: ORANGE } : undefined}>
                  <CheckCircle2 size={14} /> {item.stat}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Custom AI vs Off-the-Shelf */}
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
              Why Custom AI vs. Off-the-Shelf?
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">The competitive advantage of bespoke intelligence</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Feature</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs">Off-the-Shelf AI</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs">BloomTech Custom AI</div>
            </div>

            {[
              { feature: 'Data Privacy', icon: Lock, left: 'Shared/Public Training', right: 'Proprietary & Isolated' },
              { feature: 'Workflow', icon: Shuffle, left: 'Rigid/Tool-Centric', right: 'Tailored to Your Business' },
              { feature: 'Integration', icon: Network, left: 'Limited API access', right: 'Deep Legacy System Hooks' },
              { feature: 'IP Ownership', icon: Key, left: 'None', right: 'You Own the Logic Layer' },
              { feature: 'ROI Timeline', icon: TrendingUp, left: 'Months to Prove Value', right: 'Immediate Measurable Impact' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <row.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{row.feature}</span>
                </div>
                <div className="p-6 flex items-center">
                  <p className="text-white/55 text-[15px] leading-relaxed">{row.left}</p>
                </div>
                <div className="p-6 flex items-center">
                  <p className="text-white/85 text-[15px] leading-relaxed font-semibold">{row.right}</p>
                </div>
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
          <div className="p-8 lg:p-14 flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-7">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ORANGE }}></span>
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">AI Strategist On Standby</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Build Your Custom AI Advantage?
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Move beyond generic chatbots. Build domain-specific intelligence that transforms your business operations.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Book AI Strategy Session</h3>
                  <p className="text-white/55 text-sm">Let's discuss your AI transformation</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Industry</label>
                    <input type="text" placeholder="Finance / Healthcare / Logistics" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">AI Focus Area</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                        <option value="agentic" className="text-gray-900 bg-white">Agentic AI &amp; Automation</option>
                        <option value="domain" className="text-gray-900 bg-white">Domain-Specific Models</option>
                        <option value="multimodal" className="text-gray-900 bg-white">Multi-Modal Intelligence</option>
                        <option value="custom" className="text-gray-900 bg-white">Custom RAG Systems</option>
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
                  Book AI Strategy Session <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
