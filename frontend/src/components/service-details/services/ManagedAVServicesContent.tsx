import { motion } from 'framer-motion';
import { 
  Monitor, Volume2, Video, Mic, Sliders, Activity, Network, Cloud, 
  Cpu, Shield, CheckCircle2, ArrowRight, ChevronRight 
} from 'lucide-react';

/**
 * ManagedAVServicesContent Component
 * Custom content section for Managed AV Services
 */
interface ManagedAVServicesContentProps {
  onOpenModal: () => void;
}

export const ManagedAVServicesContent = ({ onOpenModal }: ManagedAVServicesContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Core Service Environments */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Core Service Environments: <span className="text-[#ff6b00]">Highlighting Specific Stages</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Executive Boardrooms & Leadership Suites</h3>
              <p className="text-white/70 leading-relaxed">
                Where high-stakes decisions happen, technology must be invisible yet flawless. We design "One-Touch" join experiences, integrating 4K displays, hidden hardware, and automated environmental controls to keep the focus on the meeting, not the troubleshooting.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                <Volume2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Large Auditoriums & Multi-Room Training Facilities</h3>
              <p className="text-white/70 leading-relaxed">
                Scaling audio and video across vast spaces requires complex signal routing. We implement distributed AV-over-IP systems that ensure perfectly synced, lag-free video and crystal-clear audio coverage for every seat in the house, regardless of room size.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                <Video size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Events & Enterprise Collaboration</h3>
              <p className="text-white/70 leading-relaxed">
                Town halls and global broadcasts require broadcast-grade reliability. We manage the full stack—from multi-camera switching and live streaming encoders to real-time collaboration platforms—ensuring your message reaches your global team with zero friction.
              </p>
            </div>
          </div>
        </div>

        {/* The Technical Edge: Engineering the Immersive */}
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
              The Technical Edge: Engineering the "Immersive"
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Pro-Audio Knowledge & Precision</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent rounded-tr-full pointer-events-none"></div>

            <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-3xl relative z-10 font-medium">
              Showcasing the specialized expertise that sets our AV design apart from standard solutions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
              {/* Microphones */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                  <Mic size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Strategic Microphone Placement</h4>
                  <p className="text-white/60 leading-relaxed">
                    Utilizing beamforming ceiling arrays and precision-tuned lavalier systems to ensure "Every Voice Heard" without room echo or feedback.
                  </p>
                </div>
              </div>

              {/* Acoustics */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                  <Sliders size={24} className="text-[#ff6b00]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Acoustic & Sound Optimization</h4>
                  <p className="text-white/60 leading-relaxed">
                    Beyond the hardware, we tune the room. Our experts utilize DSP (Digital Signal Processing) and room calibration tools to optimize frequency response for speech intelligibility.
                  </p>
                </div>
              </div>

              {/* Cable Management */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                  <Activity size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Discreet Cable Management</h4>
                  <p className="text-white/60 leading-relaxed">
                    A premium experience is clean. We specialize in hidden architecture, utilizing under-floor routing and custom-milled table connectivity boxes for a zero-clutter finish.
                  </p>
                </div>
              </div>

              {/* Signal AV-over-IP */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                  <Network size={24} className="text-[#ff6b00]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Signal Integrity & AV-over-IP</h4>
                  <p className="text-white/60 leading-relaxed">
                    Utilizing NDI or Dante protocols to move high-definition media over your existing IT network with ultra-low latency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Managed AV Tech Stack */}
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
              Managed AV Tech Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Leading components and platforms we integrate</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Component Type</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Leading Systems & Platforms</div>
            </div>

            {/* Collaboration Platforms */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Cloud className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Collaboration Platforms</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Microsoft Teams Rooms, Zoom Rooms, Cisco Webex</p>
              </div>
            </div>

            {/* Audio Processing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Mic className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Audio Processing</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Shure, Sennheiser, Biamp, Q-SYS</p>
              </div>
            </div>

            {/* Control & Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Cpu className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Control & Automation</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Crestron, AMX, Extron</p>
              </div>
            </div>

            {/* Display & Video */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Monitor className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Display & Video</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Planar (LED Walls), Samsung/LG Professional Displays, Logitech Rally</p>
              </div>
            </div>

            {/* Streaming & Production */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Video className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Streaming & Production</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Blackmagic Design, NewTek NDI, OBS Enterprise</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The "Managed" Advantage: 24/7 Reliability */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 lg:mt-20 pb-20"
        >
          <div className="bg-gradient-to-br from-[#0c1a36]/80 to-[#ff6b00]/10 backdrop-blur-xl border border-[#ff6b00]/20 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-[#ff6b00]" size={28} />
                  <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">The "Managed" Advantage</h3>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-6">
                  We Don't Just Install. We Optimize.
                </h2>
                
                <p className="text-lg text-white/80 leading-relaxed font-medium">
                  An AV system is only as good as its last meeting. Our Managed AV service includes proactive monitoring and remote support to ensure your rooms are <span className="text-green-400 font-bold">"Green"</span> before your executives walk in.
                </p>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                {/* Proactive Health Checks */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    Proactive Health Checks
                  </h4>
                  <p className="text-white/70 ml-11">Remote monitoring of projector lamp life, firmware levels, and network connectivity.</p>
                </div>

                {/* Concierge Meeting Support */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    Concierge Meeting Support
                  </h4>
                  <p className="text-white/70 ml-11">On-site or remote assistance for high-profile executive calls and town halls.</p>
                </div>

                {/* Lifecycle Refresh */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    Lifecycle Refresh
                  </h4>
                  <p className="text-white/70 ml-11">We manage the hardware cycle, ensuring your collaboration tech stays current with evolving software standards.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Production Pedigree */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 lg:mt-20 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border border-blue-400/30 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 transform hover:scale-110 transition-transform">
              <Mic size={32} className="text-blue-400" />
            </div>
            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-2 justify-center">
              <Activity size={16} /> The Production Pedigree
            </h3>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8 drop-shadow-lg">
              Studio-Grade Expertise for the Corporate World.
            </h2>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Our approach is rooted in professional audio production. With deep experience in <span className="text-blue-400 font-bold">Avid Pro Tools</span> environments and high-fidelity signal chains, we bring a "recording studio" mentality to your corporate space. We understand that in a world of remote work, <span className="text-white italic">audio quality is the new handshake.</span>
            </p>
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">AV Engineer Standby</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Elevate Your Collaboration?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                From the boardroom to the global stage, let's build a communication platform that inspires.
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
              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Request submitted successfully!"); }}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Venue Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Venue Type...</option>
                        <option value="boardroom" className="text-gray-900 bg-white">Boardroom</option>
                        <option value="auditorium" className="text-gray-900 bg-white">Auditorium</option>
                        <option value="event_space" className="text-gray-900 bg-white">Event Space</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Need</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Primary Need...</option>
                        <option value="new_build" className="text-gray-900 bg-white">New Build</option>
                        <option value="retrofit" className="text-gray-900 bg-white">Retrofit</option>
                        <option value="managed_support" className="text-gray-900 bg-white">Managed Support</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                  Get Your Custom Proposal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
