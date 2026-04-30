import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, Globe, CloudFog, Shuffle, Smartphone, Target, UserCheck, 
  ShieldCheck, Shield, Lock, AlertTriangle, Building2, Layout, Terminal, 
  Activity, LineChart, Eye, TrendingUp, CheckCircle2, ArrowRight, Monitor 
} from 'lucide-react';

/**
 * NetworkInfrastructureContent Component
 * Custom content section for IT Network Infrastructure service
 */
interface NetworkInfrastructureContentProps {
  onOpenModal: () => void;
}

export const NetworkInfrastructureContent = ({ onOpenModal }: NetworkInfrastructureContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Core Networking Specializations */}
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
              Core Networking Specializations
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">End-to-end infrastructure solutions for modern enterprises</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Enterprise Architecture Design */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Network size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Architecture Design</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  We don't just plug in hardware; we design ecosystems. Our certified engineers map out your entire network topology to eliminate single points of failure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Globe size={16} className="text-[#ff6b00]" /> LAN/WAN Implementation
                    </h4>
                    <p className="text-white/60 text-xs">High-performance networks designed for low latency</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <CloudFog size={16} className="text-[#ff6b00]" /> SD-WAN Solutions
                    </h4>
                    <p className="text-white/60 text-xs">Software-Defined WAN to optimize traffic across locations</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Shuffle size={16} className="text-[#ff6b00]" /> VLAN Segmentation
                    </h4>
                    <p className="text-white/60 text-xs">Logically separating networks to improve security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* II. Wireless Networking & Mobility */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Smartphone size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Wireless Networking & Mobility</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Modern work requires seamless connectivity. We design enterprise-grade Wi-Fi solutions that provide blanket coverage without "dead zones."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Target size={16} className="text-blue-400" /> Heat Mapping
                    </h4>
                    <p className="text-white/60 text-xs">Advanced tools for optimal Access Point placement</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <UserCheck size={16} className="text-blue-400" /> Secure Guest Access
                    </h4>
                    <p className="text-white/60 text-xs">Isolated environments protecting corporate data</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Network size={16} className="text-blue-400" /> Mesh Networking
                    </h4>
                    <p className="text-white/60 text-xs">Resilient wireless for large facilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* III. Network Security & Perimeter Defense */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Network Security & Perimeter Defense</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  With the threat landscape constantly evolving, your network must be your first line of defense.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Shield size={16} className="text-[#ff6b00]" /> Next-Gen Firewalls
                    </h4>
                    <p className="text-white/60 text-xs">NGFW with Deep Packet Inspection</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Lock size={16} className="text-[#ff6b00]" /> VPN & Remote Access
                    </h4>
                    <p className="text-white/60 text-xs">Secure encrypted tunnels (IPsec/SSL)</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <AlertTriangle size={16} className="text-[#ff6b00]" /> IDS/IPS
                    </h4>
                    <p className="text-white/60 text-xs">Real-time monitoring and threat neutralization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IV. Infrastructure Hardware Management */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                IV
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Building2 size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Infrastructure Hardware Management</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  We partner with leading vendors to provide the most reliable hardware on the market.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Shuffle size={16} className="text-blue-400" /> Switching & Routing
                    </h4>
                    <p className="text-white/60 text-xs">High-speed backbone infrastructure</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Network size={16} className="text-blue-400" /> Structured Cabling
                    </h4>
                    <p className="text-white/60 text-xs">Cat6, Cat6a, and Fiber Optic installation</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Layout size={16} className="text-blue-400" /> Rack Design
                    </h4>
                    <p className="text-white/60 text-xs">Clean layouts for airflow and maintenance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* The Network+ Advantage */}
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
                  <ShieldCheck size={40} />
               </div>
               <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Certified Excellence</h3>
               <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  The Network+ Advantage
                  <span className="block text-2xl lg:text-3xl text-white/50 font-medium mt-4 tracking-normal italic">CompTIA Certified Engineering Team</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10">
                  Choosing a <span className="text-white font-bold">CompTIA Network+ Certified</span> partner like BloomTech means your infrastructure is handled by experts who have mastered the seven layers of the OSI model.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Terminal size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                      <h4 className="text-lg font-bold text-white">Hardware Neutrality</h4>
                    </div>
                    <p className="text-white/60 text-sm">Understanding Cisco, Juniper, Ubiquiti interaction for perfect integration</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                      <h4 className="text-lg font-bold text-white">Troubleshooting Excellence</h4>
                    </div>
                    <p className="text-white/60 text-sm">Systematic approach to identify and resolve connectivity issues</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                      <h4 className="text-lg font-bold text-white">Security-First Mindset</h4>
                    </div>
                    <p className="text-white/60 text-sm">Security baked into every configuration and protocol</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                  <Network size={200} className="text-white/10 relative z-10" />
                  <ShieldCheck size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Network Health Check & Support */}
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
              Network Health Check & Support
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Comprehensive audits and proactive monitoring</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Performance Optimization */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <LineChart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Performance Optimization</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Tuning your hardware to handle 10G or higher speeds with minimal latency.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Maximum Throughput
                </div>
              </div>
            </div>

            {/* 24/7 Monitoring */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">24/7 Monitoring</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Proactive oversight of switches, routers, and firewalls to catch issues early.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Always Protected
                </div>
              </div>
            </div>

            {/* Scalability Planning */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Scalability Planning</h3>
                </div>
                <p className="text-white/60 text-lg mb-8">Ensuring your network can double in capacity without complete overhauls.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Future-Proof Growth
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Network Infrastructure CTA */}
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Network Engineers On Standby</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Build a Faster, Safer Network?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Connect with our certified network engineers to discuss your infrastructure needs and get a free network audit.
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
                  <h3 className="text-2xl font-black text-white mb-2">Free Network Audit</h3>
                  <p className="text-white/60 text-sm">Let's identify bottlenecks and security vulnerabilities</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 size={18} className="text-[#ff6b00]" />
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Office</p>
                      <p className="text-white font-medium text-sm">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor size={18} className="text-blue-400" />
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Phone</p>
                      <p className="text-white font-medium text-sm">(737) 329-8158</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[#ff6b00]" />
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Email</p>
                      <p className="text-white font-medium text-sm">networking@bloomtechus.com</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Request Network Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
