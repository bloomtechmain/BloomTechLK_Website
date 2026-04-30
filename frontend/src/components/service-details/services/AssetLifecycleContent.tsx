import { motion } from 'framer-motion';
import { 
  Database, Search, Smartphone, FileText, Shield, AlertTriangle, 
  TrendingUp, BarChart3, Layers, CheckCircle2, History, 
  Landmark, Lock, ArrowRight, ChevronRight
} from 'lucide-react';

/**
 * AssetLifecycleContent Component
 * Custom content section for Asset Lifecycle Management service
 */
interface AssetLifecycleContentProps {
  onOpenModal: () => void;
}

export const AssetLifecycleContent = ({ onOpenModal }: AssetLifecycleContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* The 5 Pillars of Asset Management */}
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
              The 5 Pillars of Asset Management
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Chronological stages of an asset's life</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Strategic Procurement & Planning */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Procurement & Planning</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  We don't just order hardware; we align acquisitions with your growth roadmap. We handle vendor negotiations, hardware standardization (e.g., <span className="text-[#ff6b00] font-semibold">AMD EPYC</span> server builds), and "Just-in-Time" inventory planning to ensure you never overpay for idle tech.
                </p>
              </div>
            </div>

            {/* II. Automated Deployment & Provisioning */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4">Automated Deployment & Provisioning</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Zero-touch deployment is the goal. We manage the imaging, tagging, and configuration of devices so they are "work-ready" the moment they reach the end-user. This includes VLAN assignment, endpoint security enrollment, and software licensing.
                </p>
              </div>
            </div>

            {/* III. Active Maintenance & Optimization */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4">Active Maintenance & Optimization</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Managing the "Middle Life" of an asset. We track warranty status, automate patch management, and perform proactive hardware health checks (predictive failure analysis for SSDs/HDDs) to prevent unexpected downtime.
                </p>
              </div>
            </div>

            {/* IV. Risk-Based Compliance & Auditing */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                IV
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4">Risk-Based Compliance & Auditing</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Leveraging CISA-standard protocols, we maintain a "Single Source of Truth" for your inventory. Every asset is tracked via a unique identifier, ensuring 100% accuracy for financial reporting and security audits.
                </p>
              </div>
            </div>

            {/* V. Secure Retirement & ITAD */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                V
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4">Secure Retirement & ITAD</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  The end of life is the highest risk point for data breaches. We provide <span className="text-blue-300 font-bold">NIST-compliant</span> data destruction, certified hardware recycling, and detailed "Certificate of Destruction" documentation for your audit trail.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
        
        {/* The Tech Stack: Systems We Use */}
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
              The Tech Stack: <span className="text-[#ff6b00]">Systems We Use</span>
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Showcasing the tools that keep the data organized</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Managed Systems / Tools</div>
            </div>

            {/* ITAM Software */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Database className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">ITAM Software</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Snipe-IT, Asset Panda, or SolarWinds Service Desk</p>
              </div>
            </div>

            {/* Discovery Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Search className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Discovery Tools</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Network scanning (nmap/zabbix) for ghost asset detection</p>
              </div>
            </div>

            {/* MDM / Endpoint */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Smartphone className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">MDM / Endpoint</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Microsoft Intune, Kandji, or Jamf</p>
              </div>
            </div>

            {/* Documentation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <FileText className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Documentation</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">ITGlue, Hudu, or customized SharePoint databases</p>
              </div>
            </div>

            {/* Compliance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Shield className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Compliance</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">ISACA-aligned frameworks and SOC2 tracking tools</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Lifecycle Management Matters (The ROI) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-32 pb-20"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Why Lifecycle Management Matters <span className="text-blue-400">(The ROI)</span>
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Direct value delivered through strategic oversight</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ghost Assets */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Problem: Ghost Assets</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Unidentified, unused, or "lost" hardware and software licenses that inflate costs and create security holes.</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={20} className="text-green-400" />
                    <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Our Lifecycle Solution</span>
                  </div>
                  <p className="text-white font-medium text-lg">We identify and remove unused licenses and hardware, instantly optimizing your spend.</p>
                </div>
              </div>
            </div>

            {/* Security Gaps */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                    <Shield size={24} className="opacity-70" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Problem: Security Gaps</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Retired devices ending up on the secondary market with sensitive corporate or customer data still intact.</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={20} className="text-green-400" />
                    <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Our Lifecycle Solution</span>
                  </div>
                  <p className="text-white font-medium text-lg">We ensure retired drives are shredded or digitally wiped to NIST standards, never sold with data.</p>
                </div>
              </div>
            </div>

            {/* Budget Shocks */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Problem: Budget Shocks</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Unexpected hardware failures leading to emergency CapEx spikes and operational disruption.</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={20} className="text-green-400" />
                    <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Our Lifecycle Solution</span>
                  </div>
                  <p className="text-white font-medium text-lg">We provide 3-year refresh forecasts to stabilize CapEx and prevent "emergency" spending.</p>
                </div>
              </div>
            </div>

            {/* Audit Failures */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Problem: Audit Failures</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Manual inventory spreadsheets that are inaccurate, outdated, and fail to survive clinical audits.</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={20} className="text-green-400" />
                    <span className="text-green-400 font-bold uppercase tracking-widest text-xs">Our Lifecycle Solution</span>
                  </div>
                  <p className="text-white font-medium text-lg">We maintain real-time, timestamped logs of every asset move, ensuring you are 100% audit-ready.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specialized Service: Software Asset Management (SAM) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-[#1a305c]/50 to-[#0c1a36]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="text-[#ff6b00]" size={28} />
                  <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">Specialized Service</h3>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8">
                  Software Asset Management (SAM)
                  <span className="block text-[#ff6b00] mt-2">Don't Pay for What You Don't Use.</span>
                </h2>
                
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                  Software audits can be devastating to a budget. We manage your SaaS subscriptions (<span className="text-white">Shopify, Canva, Pro Tools, etc.</span>) and enterprise licenses to ensure you are never "under-licensed" (legal risk) or "over-licensed" (wasted spend).
                </p>
                
                <div className="flex flex-wrap gap-4 mt-10">
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 text-sm font-bold flex items-center gap-2">
                     <CheckCircle2 size={14} className="text-[#ff6b00]" /> Seats Tracking
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 text-sm font-bold flex items-center gap-2">
                     <CheckCircle2 size={14} className="text-[#ff6b00]" /> Renewal Optimization
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 text-sm font-bold flex items-center gap-2">
                     <CheckCircle2 size={14} className="text-[#ff6b00]" /> Usage Analytics
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                        <History size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-2">Automated Renewal Tracking</h4>
                        <p className="text-white/60">We track every renewal date across your entire SaaS stack, providing 60-day alerts to evaluate usage before payment.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <BarChart3 size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-white mb-2">Usage Metric Optimization</h4>
                        <p className="text-white/60">We utilize API-based insights to identify users who haven't logged in, allowing you to reallocate seats instead of buying more.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The "Audit Ready" Guarantee */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
               <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                  <Landmark size={40} />
               </div>
               <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Integrity & Compliance</h3>
               <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  The "Audit Ready" Guarantee.
                  <span className="block text-2xl lg:text-3xl text-white/50 font-medium mt-4 tracking-normal italic">CISA-Level Integrity.</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium">
                  As an <span className="text-white font-bold">ISACA Austin Chapter member</span> and <span className="text-white font-bold">CISA holder</span>, I bring an auditor's discipline to your asset registry. Our management process isn't just about spreadsheets; it's about creating a defensible, transparent chain of custody that satisfies even the most rigorous regulatory requirements.
                </p>
                
                <div className="flex items-center gap-6 mt-12 bg-black/20 border border-white/10 p-6 rounded-2xl inline-flex">
                   <div className="text-center border-r border-white/10 pr-6">
                      <p className="text-[#ff6b00] font-black text-2xl">100%</p>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Compliance</p>
                   </div>
                   <div className="text-center pr-6">
                      <p className="text-blue-400 font-black text-2xl">Certified</p>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">ISACA Standards</p>
                   </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-[#ff6b00]/20 blur-3xl rounded-full"></div>
                  <Shield size={200} className="text-white/10 relative z-10" />
                  <Lock size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ff6b00]" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action - Customized for Asset Lifecycle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0c1a36] z-0"></div>
          
          {/* Background patterns */}
          <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Inventory Specialist Standby</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Account for Every Asset?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Stop the hardware "black hole." Get a clear view of what you own, where it is, and what it's worth.
              </p>
              
              {/* Decorative element */}
              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Estimated Seat Count</label>
                    <input type="number" placeholder="50" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Goal</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Primary Goal...</option>
                        <option value="cost_savings" className="text-gray-900 bg-white">Cost Savings</option>
                        <option value="security_wiping" className="text-gray-900 bg-white">Security/Wiping</option>
                        <option value="audit_compliance" className="text-gray-900 bg-white">Audit Compliance</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                  Start Your Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
