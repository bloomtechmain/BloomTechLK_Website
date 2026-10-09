import { motion } from 'framer-motion';
import {
  ShieldAlert, Key, Monitor, Lock, History, Search, FileCheck,
  ShieldCheck, Shield, Activity, Cpu, UserCheck, Repeat, Eye,
  ArrowRight, ChevronRight
} from 'lucide-react';
import { NAVY_RAISED, ORANGE } from '../../../styles/designTokens';

/**
 * SecurityDataProtectionContent Component
 * Custom content section for Security & Data Protection service
 */
interface SecurityDataProtectionContentProps {
  onOpenModal: () => void;
}

const vp = { once: true, margin: '-80px' } as const;

export const SecurityDataProtectionContent = ({ onOpenModal }: SecurityDataProtectionContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Defense-in-Depth Strategy */}
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
              Our Defense-in-Depth Strategy
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Multi-layered protection beyond the firewall</span>
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-6 lg:ml-7 pl-10 lg:pl-12 flex flex-col gap-10">

            {/* I. Perimeter & Network Hardening */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                I
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <ShieldAlert size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Perimeter &amp; Network Hardening</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  We build <span className="font-semibold" style={{ color: ORANGE }}>"Invisible" networks</span>. Utilizing Next-Gen Firewalls (NGFW), Intrusion Prevention Systems (IPS), and strict VLAN segmentation, we ensure that even if one device is compromised, the rest of your infrastructure remains an island.
                </p>
              </div>
            </div>

            {/* II. Identity & Access Management (IAM) */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-blue-400/50 flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED }}>
                II
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Key size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Identity &amp; Access Management (IAM)</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  <span className="text-blue-400 font-semibold">Identity is the new perimeter</span>. We implement Zero Trust architectures where every user and device must be verified. This includes Phishing-resistant MFA, Least-Privilege Access, and automated de-provisioning for offboarded employees.
                </p>
              </div>
            </div>

            {/* III. Endpoint Protection & EDR */}
            <div className="relative">
              <div className="absolute -left-[55px] lg:-left-[63px] top-0 w-10 h-10 lg:w-11 lg:h-11 rounded-xl border flex items-center justify-center font-bold text-white text-base z-10" style={{ backgroundColor: NAVY_RAISED, borderColor: ORANGE }}>
                III
              </div>
              <div className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Monitor size={20} style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Endpoint Protection &amp; EDR</h3>
                </div>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  We move <span className="font-semibold" style={{ color: ORANGE }}>beyond traditional antivirus</span>. Our Endpoint Detection and Response (EDR) solutions use behavioral AI to stop "Zero-Day" attacks in real-time, isolating infected machines before they can encrypt your files or spread ransomware.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Data Protection & Sovereignty */}
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
              Data Protection &amp; Sovereignty
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Securing the "Crown Jewels" of your business</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Encryption at Rest & in Transit', desc: 'Utilizing AES-256 and TLS 1.3 standards to ensure that even if data is intercepted, it remains unreadable.', icon: Lock },
              { title: 'Immutable Backups', desc: 'We design backup systems that cannot be deleted or modified by ransomware, ensuring rapid recovery.', icon: History },
              { title: 'Data Loss Prevention (DLP)', desc: 'Intelligent monitoring that prevents sensitive information (SSNs, IP) from leaving the company network.', icon: ShieldAlert },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                <div className="w-11 h-11 rounded-lg bg-blue-500/15 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2.5">{item.title}</h4>
                <p className="text-white/55 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The "CISA Advantage": Audit & Compliance */}
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
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide">CISA Audit Mastery</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-7">
                  Security That <br />
                  <span className="text-blue-400">Passes the Audit.</span>
                </h2>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
                  As a <span className="text-white font-semibold">CISA-certified professional</span>, I don't just "secure" your network; I make it <span className="text-blue-400">auditable</span>. We align your infrastructure with global standards, ensuring you are ready for any regulatory hurdle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  {[
                    { title: 'Vulnerability Assessments', desc: 'Regular scanning of server-grade hardware to patch exploits before they are used.', icon: Search },
                    { title: 'Gap Analysis', desc: 'Aligning your current posture with SOC2, HIPAA, PCI-DSS, or ISO 27001 frameworks.', icon: FileCheck },
                    { title: 'Incident Response Planning', desc: 'We provide the "Playbook" for breach response, minimizing legal exposure and downtime.', icon: ShieldAlert },
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
                  <span className="block text-blue-300/60 font-semibold text-[10px] tracking-[0.15em] uppercase mt-3 border-t border-white/10 pt-3">Identity Verified Authority</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Security Tech Stack */}
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
              The Security Tech Stack
              <span className="block text-base lg:text-lg text-white/50 font-normal mt-1.5">Enterprise-grade systems we deploy and manage</span>
            </h2>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: NAVY_RAISED }}>
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10">
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-1">Category</div>
              <div className="p-6 font-semibold text-white/40 uppercase tracking-wide text-xs col-span-2">Enterprise Systems</div>
            </div>

            {[
              { cat: 'Firewalls', stack: 'Fortinet, Palo Alto, pfSense (Hardware Accelerated)', icon: Shield },
              { cat: 'Endpoint (EDR)', stack: 'SentinelOne, CrowdStrike, or Microsoft Defender for Business', icon: Monitor },
              { cat: 'Identity', stack: 'Okta, Azure AD (Entra ID), Duo Security', icon: Key },
              { cat: 'SIEM / Logging', stack: 'Wazuh, Splunk, or ELK Stack for real-time monitoring', icon: Activity },
              { cat: 'Hardware Entropy', stack: 'TPM 2.0 integration and hardware-based encryption keys', icon: Cpu },
            ].map((item) => (
              <div key={item.cat} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors">
                <div className="p-6 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <item.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">{item.cat}</span>
                </div>
                <div className="p-6 flex items-center lg:col-span-2">
                  <p className="text-white/70 text-[15px] leading-relaxed">{item.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The 4-Phase Security Lifecycle */}
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
              The 4-Phase Security Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute top-[22px] left-8 w-[calc(100%-4rem)] h-px bg-white/10"></div>

            {[
              { phase: '1', title: 'Threat Modeling', desc: 'We identify your most "at-risk" assets and likely attack vectors.' },
              { phase: '2', title: 'Hardening & Implementation', desc: 'We deploy the "Shield"—firewalls, MFA, and encryption.' },
              { phase: '3', title: 'Continuous Monitoring', desc: '24/7 logging and automated alerts for suspicious behavior like "Impossible Travel" logins.' },
              { phase: '4', title: 'Governance & Review', desc: 'Quarterly security reviews and policy updates to stay ahead of new exploit trends.' },
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

        {/* Proactive "Human Firewalls" */}
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
                  <UserCheck size={26} style={{ color: ORANGE }} />
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-sm mb-4" style={{ color: ORANGE }}>Security Awareness Training</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Proactive <span style={{ color: ORANGE }}>"Human Firewalls"</span>
                </h2>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  90% of breaches start with human error. We provide managed <span className="text-white font-semibold">Phishing Simulations</span> and security training for your staff, turning your employees from your biggest risk into your strongest line of defense.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-3.5">
                {[
                  { label: 'Managed Phishing Simulations', icon: ShieldCheck },
                  { label: 'Security Culture Development', icon: Repeat },
                  { label: 'Compliance Training Modules', icon: Eye },
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

        {/* Final Call to Action */}
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
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">Active Protection On-Call</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Don't Wait for the Breach <br />
                <span style={{ color: ORANGE }}>to Build the Shield.</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Is your current data protection strategy "hope"? Let's replace it with a certified, resilient architecture.
              </p>
            </div>

            <div className="lg:w-[45%] w-full bg-black/20 border border-white/10 rounded-xl p-8 lg:p-10">
              <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Industry</label>
                    <input type="text" placeholder="Finance" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Employees</label>
                    <input type="number" placeholder="50" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-white/50 font-semibold text-xs mb-2 block uppercase tracking-wide">Primary Concern</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/[0.06] border border-white/15 rounded-lg px-5 py-3.5 text-white focus:outline-none focus:border-[#FF6B00]/60 focus:bg-white/[0.09] transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Concern...</option>
                        <option value="ransomware" className="text-gray-900 bg-white">Ransomware</option>
                        <option value="compliance" className="text-gray-900 bg-white">Compliance Audit</option>
                        <option value="data_leakage" className="text-gray-900 bg-white">Data Leakage</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: ORANGE }}>
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full text-white text-base font-semibold py-4 rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all active:scale-[0.98] flex justify-center items-center gap-2.5" style={{ backgroundColor: ORANGE }}>
                  Secure My Business <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
