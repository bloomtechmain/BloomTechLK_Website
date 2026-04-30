import { motion } from 'framer-motion';
import { 
  BrainCircuit, Target, Network, Zap, Sliders, Code2, Brain, Database,
  Eye, FileText, Mic, Activity, Users, LineChart, ShieldCheck, Lock,
  CheckCircle2, Shuffle, Key, TrendingUp, ArrowRight, ChevronRight
} from 'lucide-react';

/**
 * AIMachineLearningContent Component
 * Custom content section for AI & Machine Learning service
 */
interface AIMachineLearningContentProps {
  onOpenModal: () => void;
}

export const AIMachineLearningContent = ({ onOpenModal }: AIMachineLearningContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* The BloomTech AI Strategy: 2026 Edition */}
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
              The BloomTech AI Strategy: 2026 Edition
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">From experimental pilots to production-grade intelligence</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Agentic AI & Autonomous Workflows */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <BrainCircuit size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Agentic AI & Autonomous Workflows</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  We move beyond simple prompts. We build AI Agents capable of executing tasks within defined business parameters without constant human oversight.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Target size={16} className="text-[#ff6b00]" /> Autonomous Decision-Making
                    </h4>
                    <p className="text-white/60 text-xs">Executing tasks without constant human oversight</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Network size={16} className="text-[#ff6b00]" /> Multi-System Orchestration
                    </h4>
                    <p className="text-white/60 text-xs">Connecting CRM, ERP, and Slack automatically</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-[#ff6b00]" /> Proactive Initiation
                    </h4>
                    <p className="text-white/60 text-xs">Triggering actions based on real-time data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* II. Domain-Specific Model Tuning */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Sliders size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Domain-Specific Model Tuning</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  While general models are broad, they often lack the nuance of your specific industry. We ground models in your proprietary data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Code2 size={16} className="text-blue-400" /> Context Engineering
                    </h4>
                    <p className="text-white/60 text-xs">Grounding in your "corporate language"</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Brain size={16} className="text-blue-400" /> Fine-Tuned Hybrids
                    </h4>
                    <p className="text-white/60 text-xs">Custom logic for Finance, Logistics, Healthcare</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Database size={16} className="text-blue-400" /> RAG Systems
                    </h4>
                    <p className="text-white/60 text-xs">Real-time access to internal documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* III. Multi-Modal Intelligence */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Eye size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Multi-Modal Intelligence</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  In 2026, data isn't just text. Our solutions process information across all modalities for comprehensive intelligence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <FileText size={16} className="text-[#ff6b00]" /> Vision & Document AI
                    </h4>
                    <p className="text-white/60 text-xs">Extract data from invoices and blueprints</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-[#ff6b00]" /> Audio & Sentiment
                    </h4>
                    <p className="text-white/60 text-xs">Analyze customer calls in real-time</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Activity size={16} className="text-[#ff6b00]" /> Fusion Systems
                    </h4>
                    <p className="text-white/60 text-xs">Predict hardware failures before they happen</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* AI Governance Framework */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Implementation & Governance
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Building AI safely is the other half of the battle</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Human-in-the-Loop */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Human-in-the-Loop</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">AI handles 90% of the work, but flags complex cases for human approval.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Supervised Automation
                </div>
              </div>
            </div>

            {/* Model Observability */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <LineChart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Model Observability</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Continuous monitoring for "drift" to ensure accuracy over time.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Always Accurate
                </div>
              </div>
            </div>

            {/* Bias & Fairness Testing */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Bias & Fairness</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Rigorous auditing for compliance with 2026 AI regulations and ethical standards.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Ethical AI
                </div>
              </div>
            </div>

            {/* Security-First Deployment */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Security-First</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">On-Premise, Hybrid, or Private Cloud deployment ensuring data never leaves your control.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Your Data, Your Control
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Custom AI vs Off-the-Shelf */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-32 pb-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Why Custom AI vs. Off-the-Shelf?
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">The competitive advantage of bespoke intelligence</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Feature</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Off-the-Shelf AI</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">BloomTech Custom AI</div>
            </div>

            {/* Data Privacy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Lock className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Data Privacy</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/60 text-lg leading-relaxed font-medium">Shared/Public Training</p>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg leading-relaxed font-bold">Proprietary & Isolated</p>
              </div>
            </div>

            {/* Workflow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Shuffle className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Workflow</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/60 text-lg leading-relaxed font-medium">Rigid/Tool-Centric</p>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg leading-relaxed font-bold">Tailored to Your Business</p>
              </div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Network className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Integration</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/60 text-lg leading-relaxed font-medium">Limited API access</p>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg leading-relaxed font-bold">Deep Legacy System Hooks</p>
              </div>
            </div>

            {/* IP Ownership */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Key className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">IP Ownership</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/60 text-lg leading-relaxed font-medium">None</p>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg leading-relaxed font-bold">You Own the Logic Layer</p>
              </div>
            </div>

            {/* ROI */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <TrendingUp className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">ROI Timeline</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/60 text-lg leading-relaxed font-medium">Months to Prove Value</p>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg leading-relaxed font-bold">Immediate Measurable Impact</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">AI Strategist On Standby</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Build Your Custom AI Advantage?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Move beyond generic chatbots. Build domain-specific intelligence that transforms your business operations.
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
                  <h3 className="text-2xl font-black text-white mb-2">Book AI Strategy Session</h3>
                  <p className="text-white/60 text-sm">Let's discuss your AI transformation</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Industry</label>
                    <input type="text" placeholder="Finance / Healthcare / Logistics" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">AI Focus Area</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                        <option value="agentic" className="text-gray-900 bg-white">Agentic AI & Automation</option>
                        <option value="domain" className="text-gray-900 bg-white">Domain-Specific Models</option>
                        <option value="multimodal" className="text-gray-900 bg-white">Multi-Modal Intelligence</option>
                        <option value="custom" className="text-gray-900 bg-white">Custom RAG Systems</option>
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
                  Book AI Strategy Session <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
