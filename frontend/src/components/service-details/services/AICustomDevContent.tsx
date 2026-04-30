import { motion } from 'framer-motion';
import { 
  Bot, Database, Brain, Shield, Zap, TrendingUp, Sparkles, Sliders, Cloud,
  Cpu, Activity, Lock, CheckCircle2, Key, FileText, BarChart3, ArrowRight, ChevronRight
} from 'lucide-react';

/**
 * AICustomDevContent Component
 * Custom content section for AI Custom Development & Automation service
 */
interface AICustomDevContentProps {
  onOpenModal: () => void;
}

export const AICustomDevContent = ({ onOpenModal }: AICustomDevContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Core Pillars of AI Development */}
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
              Core Pillars of AI Development
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Bridging data and actionable intelligence</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Task Automation & Intelligent Agents */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Bot size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Task Automation & Intelligent Agents</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  We design custom AI agents that handle repetitive cognitive tasks. Whether it's automating customer support triage, generating high-fidelity reports, or managing complex scheduling, our solutions act as a <span className="text-[#ff6b00] font-bold">"Force Multiplier"</span> for your existing team.
                </p>
              </div>
            </div>

            {/* II. Advanced Data Management & Extraction */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Database size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Advanced Data Management & Extraction</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  Stop manual data entry. We build systems that "read" and categorize unstructured data—PDFs, emails, and images—extracting key metrics and piping them directly into your database or CRM. Turn your archives into a searchable, intelligent knowledge base.
                </p>
              </div>
            </div>

            {/* III. Private & Secure LLM Integration */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Brain size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Private & Secure LLM Integration</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  Leveraging industry leaders like <span className="text-blue-300 font-bold">Anthropic</span>, we build custom interfaces and RAG (Retrieval-Augmented Generation) systems. This allows your AI to answer questions based only on your private company data, ensuring accuracy without compromising security.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* The On-Prem AI Advantage */}
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
              The "On-Prem" AI Advantage
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Leveraging high-performance local compute</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10 text-pretty">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  Why Settle for the <span className="text-blue-400">Public Cloud?</span>
                </h3>
                <p className="text-lg text-white/80 leading-relaxed font-medium mb-8">
                  For businesses with strict data privacy requirements, we offer <span className="text-[#ff6b00] font-bold">On-Premise AI Deployment</span>. Utilizing server-grade hardware (AMD EPYC / High-VRAM GPU clusters), we can host your AI models locally.
                </p>
                
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                  <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                    <Cpu size={14} /> Server-Grade Performance
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Zero Data Leakage</h4>
                      <p className="text-white/60 text-sm">Your proprietary data never leaves your network. Total control over your intelligence assets.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Low Latency</h4>
                      <p className="text-white/60 text-sm">Instant response times for internal tools by bypassing public internet gateways.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Cost Predictability</h4>
                      <p className="text-white/60 text-sm">Eliminate the fluctuating "per-token" costs of cloud APIs with a one-time hardware investment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Automation Tech Stack */}
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
              Automation Tech Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Tools and models driving our AI solutions</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Systems & Frameworks</div>
            </div>

            {/* Foundation Models */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Sparkles className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Foundation Models</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Claude (Anthropic), GPT-4o, Llama 3 (Open Source)</p>
              </div>
            </div>

            {/* Orchestration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Sliders className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Orchestration</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">LangChain, CrewAI, AutoGen</p>
              </div>
            </div>

            {/* Data Pipelines */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Database className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Data Pipelines</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Python (Pandas/NumPy), SQL, Vector Databases (Pinecone/Chroma)</p>
              </div>
            </div>

            {/* Deployment */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Cloud className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Deployment</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Docker, Kubernetes, Local High-Performance Servers</p>
              </div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Zap className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Integration</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Zapier, Make, Custom API Webhooks</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* The CISA-Certified Security Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
               <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                  <Shield size={40} />
               </div>
               <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Security & Compliance</h3>
               <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  AI You Can Trust.
                  <span className="block text-2xl lg:text-3xl text-white/50 font-medium mt-4 tracking-normal italic">CISA-Certified Integrity.</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium">
                  In the "Wild West" of AI development, security is often an afterthought. As a <span className="text-white font-bold">CISA-certified professional</span>, I ensure every automation we build is resilient, auditable, and secure by design.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity size={18} className="text-blue-400" />
                      <h4 className="text-lg font-bold text-white">Traceable</h4>
                    </div>
                    <p className="text-white/60 text-sm">Full logging of AI decisions and data access for complete audit transparency.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Lock size={18} className="text-blue-400" />
                      <h4 className="text-lg font-bold text-white">Secure</h4>
                    </div>
                    <p className="text-white/60 text-sm">Role-based access control (RBAC) ensuring only authorized users query sensitive data.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <h4 className="text-lg font-bold text-white">Compliant</h4>
                    </div>
                    <p className="text-white/60 text-sm">Aligning your AI usage with industry standards and data protection laws.</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                  <Shield size={200} className="text-white/10 relative z-10" />
                  <Key size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Real-World Use Cases */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Real-World Use Cases
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Direct ROI through specialized automation</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Automated Document Intelligence</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Processing thousands of complex legal contracts and financial invoices per hour with 99% extraction accuracy.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Reclaiming 40+ hours/week
                </div>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Intelligent Customer Triage</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">AI-driven support agents that handle 70% of initial customer inquiries and automatically schedule technical sessions.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Instant Response Time
                </div>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Secure Knowledge Mining</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">A private, on-prem RAG system that allows engineers to query decades of internal documentation without cloud data exposure.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Zero Trust Security
                </div>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Predictive Resource Analytics</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">AI models that predict server hardware failures and bandwidth bottlenecks before they impact production environments.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Proactive Optimization
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Strategy CTA */}
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
                Ready to Reclaim Your Team's Time?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Automate the mundane tasks that drain your resources. Let's design an AI roadmap that delivers real ROI.
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
                  <h3 className="text-2xl font-black text-white mb-2">Free Strategy Session</h3>
                  <p className="text-white/60 text-sm">Let's identify automation opportunities</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">AI Focus Area</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                        <option value="automation" className="text-gray-900 bg-white">Task Automation</option>
                        <option value="data_extraction" className="text-gray-900 bg-white">Data Extraction</option>
                        <option value="custom_llm" className="text-gray-900 bg-white">Custom LLM / RAG</option>
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
                  Request Strategy Session <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
