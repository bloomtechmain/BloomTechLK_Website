import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Key, Monitor, Lock, History, Search, FileCheck, 
  ShieldCheck, Shield, Activity, Cpu, UserCheck, Repeat, Eye, 
  ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';

/**
 * SecurityDataProtectionContent Component
 * Custom content section for Security & Data Protection service
 */
interface SecurityDataProtectionContentProps {
  onOpenModal: () => void;
}

export const SecurityDataProtectionContent = ({ onOpenModal }: SecurityDataProtectionContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Defense-in-Depth Strategy */}
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
              Our Defense-in-Depth Strategy
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Multi-layered protection beyond the firewall</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Perimeter & Network Hardening */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <ShieldAlert size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Perimeter & Network Hardening</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  We build <span className="text-[#ff6b00] font-bold">"Invisible" networks</span>. Utilizing Next-Gen Firewalls (NGFW), Intrusion Prevention Systems (IPS), and strict VLAN segmentation, we ensure that even if one device is compromised, the rest of your infrastructure remains an island.
                </p>
              </div>
            </div>

            {/* II. Identity & Access Management (IAM) */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Key size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Identity & Access Management (IAM)</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  <span className="text-blue-400 font-bold">Identity is the new perimeter</span>. We implement Zero Trust architectures where every user and device must be verified. This includes Phishing-resistant MFA, Least-Privilege Access, and automated de-provisioning for offboarded employees.
                </p>
              </div>
            </div>

            {/* III. Endpoint Protection & EDR */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Monitor size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Endpoint Protection & EDR</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  We move <span className="text-[#ff6b00] font-bold">beyond traditional antivirus</span>. Our Endpoint Detection and Response (EDR) solutions use behavioral AI to stop "Zero-Day" attacks in real-time, isolating infected machines before they can encrypt your files or spread ransomware.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
        
        {/* Data Protection & Sovereignty */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 mt-32"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
              Data Protection & Sovereignty
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Securing the "Crown Jewels" of your business</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Encryption at Rest & in Transit', 
                desc: 'Utilizing AES-256 and TLS 1.3 standards to ensure that even if data is intercepted, it remains unreadable.', 
                icon: Lock 
              },
              { 
                title: 'Immutable Backups', 
                desc: 'We design backup systems that cannot be deleted or modified by ransomware, ensuring rapid recovery.', 
                icon: History 
              },
              { 
                title: 'Data Loss Prevention (DLP)', 
                desc: 'Intelligent monitoring that prevents sensitive information (SSNs, IP) from leaving the company network.', 
                icon: ShieldAlert 
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/60 leading-relaxed font-medium text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The "CISA Advantage": Audit & Compliance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-blue-900/40 via-[#0c1a36] to-black border border-blue-500/20 rounded-[50px] p-10 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8">
                  <ShieldCheck size={18} className="text-blue-400" />
                  <span className="text-blue-300 text-[11px] uppercase font-black tracking-[0.2em]">CISA Audit Mastery</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8">
                  Security That <br />
                  <span className="text-blue-400">Passes the Audit.</span>
                </h2>
                <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12">
                  As a <span className="text-white font-bold italic">CISA-certified professional</span>, I don't just "secure" your network; I make it <span className="text-blue-400">auditable</span>. We align your infrastructure with global standards, ensuring you are ready for any regulatory hurdle.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Vulnerability Assessments', desc: 'Regular scanning of server-grade hardware to patch exploits before they are used.', icon: Search },
                    { title: 'Gap Analysis', desc: 'Aligning your current posture with SOC2, HIPAA, PCI-DSS, or ISO 27001 frameworks.', icon: FileCheck },
                    { title: 'Incident Response Planning', desc: 'We provide the "Playbook" for breach response, minimizing legal exposure and downtime.', icon: ShieldAlert }
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
                        <span className="block text-[8px] text-white/40 uppercase font-black tracking-[0.4em] mt-3 border-t border-white/10 pt-3">Identity verified authority</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Security Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
              The Security Tech Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Enterprise-grade systems we deploy and manage</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl relative">
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40">
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-1">Category</div>
              <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-2">Enterprise Systems</div>
            </div>

            {[
              { cat: 'Firewalls', stack: 'Fortinet, Palo Alto, pfSense (Hardware Accelerated)', icon: Shield },
              { cat: 'Endpoint (EDR)', stack: 'SentinelOne, CrowdStrike, or Microsoft Defender for Business', icon: Monitor },
              { cat: 'Identity', stack: 'Okta, Azure AD (Entra ID), Duo Security', icon: Key },
              { cat: 'SIEM / Logging', stack: 'Wazuh, Splunk, or ELK Stack for real-time monitoring', icon: Activity },
              { cat: 'Hardware Entropy', stack: 'TPM 2.0 integration and hardware-based encryption keys', icon: Cpu }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-all group">
                <div className="p-8 lg:px-10 lg:py-10 flex items-center gap-6 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/20 lg:bg-transparent">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <item.icon size={26} />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight uppercase leading-none">{item.cat}</span>
                </div>
                <div className="p-8 lg:px-10 lg:py-10 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-xl lg:text-2xl leading-relaxed font-bold tracking-tight">{item.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* The 4-Phase Security Lifecycle */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32 mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
              The 4-Phase Security Lifecycle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
            
            {[
              { phase: '1', title: 'Threat Modeling', desc: 'We identify your most "at-risk" assets and likely attack vectors.' },
              { phase: '2', title: 'Hardening & Implementation', desc: 'We deploy the "Shield"—firewalls, MFA, and encryption.' },
              { phase: '3', title: 'Continuous Monitoring', desc: '24/7 logging and automated alerts for suspicious behavior like "Impossible Travel" logins.' },
              { phase: '4', title: 'Governance & Review', desc: 'Quarterly security reviews and policy updates to stay ahead of new exploit trends.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent mt-4 md:mt-0 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 ${idx % 2 === 0 ? 'border-[#ff6b00]' : 'border-blue-400/50'} shadow-lg flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
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

        {/* Proactive "Human Firewalls" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-[#1a305c] via-black to-[#050b18] border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 group-hover:rotate-3 transition-transform">
                    <UserCheck size={40} />
                 </div>
                 <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Security Awareness Training</h3>
                 <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Proactive <br />
                    <span className="text-[#ff6b00]">"Human Firewalls"</span>
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed font-medium">
                    90% of breaches start with human error. We provide managed <span className="text-white font-bold">Phishing Simulations</span> and security training for your staff, turning your employees from your biggest risk into your strongest line of defense.
                  </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                 {[
                   { label: 'Managed Phishing Simulations', icon: ShieldCheck },
                   { label: 'Security Culture Development', icon: Repeat },
                   { label: 'Compliance Training Modules', icon: Eye }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors pointer-events-none">
                      <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                         <item.icon size={24} />
                      </div>
                      <span className="text-white text-xl font-bold tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Active Protection On-Call</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Don't Wait for the Breach <br />
                <span className="text-[#ff6b00]">to Build the Shield.</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Is your current data protection strategy "hope"? Let's replace it with a certified, resilient architecture.
              </p>
              
              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Security audit requested successfully!"); }}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Industry</label>
                      <input type="text" placeholder="Finance" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Employees</label>
                      <input type="number" placeholder="50" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Concern</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                          <option value="" disabled className="text-gray-900 bg-white">Select a Concern...</option>
                          <option value="ransomware" className="text-gray-900 bg-white">Ransomware</option>
                          <option value="compliance" className="text-gray-900 bg-white">Compliance Audit</option>
                          <option value="data_leakage" className="text-gray-900 bg-white">Data Leakage</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                  Secure My Business <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
