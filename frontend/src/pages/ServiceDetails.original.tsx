import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Cpu, Cloud, Globe, Monitor, Bot, Sparkles, Brain, Activity, Lock, Database, Package, ShieldAlert, FileText, BarChart3, TrendingUp, Key, Rocket, Network, PenTool, Sliders, Layers, Search, History, Users, Landmark, Target, Truck, RefreshCcw, Code2, Layout, ShoppingBag, MousePointer2, Volume2, Video, Mic, AlertTriangle, Smartphone, UserCheck, FileCheck, Repeat, Eye, Building2, Terminal, Palette, BrainCircuit, CloudFog, ShieldCheck, LineChart, Shuffle } from 'lucide-react';
import { getServiceBySlug, ServiceItem } from '../data/servicesData';
import Navbar from '../components/Navbar';

// Lazy load the modal - only load when needed
const ExpertFormModal = lazy(() => import('../components/ExpertFormModal'));

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when loading a new service page
    window.scrollTo(0, 0);
    
    if (serviceId) {
      const foundService = getServiceBySlug(serviceId);
      if (foundService) {
        setService(foundService);
      } else {
        setService(null);
      }
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/80 flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-white/70 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 bg-[#ff6b00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e65c00] transition-colors shadow-lg">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/30 font-sans selection:bg-[#ff6b00] selection:text-white relative">
      <Navbar />
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b00]/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-[#ff6b00]/15 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start relative z-10"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#ff6b00] uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} className="text-white/30" />
                <span className="text-white/60">Services</span>
                <ChevronRight size={14} className="text-white/30" />
                <span className="truncate max-w-[150px] sm:max-w-none text-white">{service.name}</span>
              </div>
              
              {service.slug === 'it-network-infrastructure' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-[#ff6b00]" />
                  The Vision
                </div>
              )}
              {service.slug === 'managed-av-services' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Monitor size={18} className="text-[#ff6b00]" />
                  Precision Communication
                </div>
              )}
              {service.slug === 'asset-lifecycle-management' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Package size={18} className="text-[#ff6b00]" />
                  Strategic Control
                </div>
              )}
              {service.slug === 'ai-custom-development-automation' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#ff6b00]" />
                  Intelligence in Motion
                </div>
              )}
              {service.slug === 'ai-machine-learning' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BrainCircuit size={18} className="text-[#ff6b00]" />
                  Agentic Intelligence. Domain-Specific Precision.
                </div>
              )}
              {service.slug === 'custom-crm-solutions' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers size={18} className="text-[#ff6b00]" />
                  Total Operational Control
                </div>
              )}
              {service.slug === 'professional-it-consulting' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Shield size={18} className="text-[#ff6b00]" />
                  Elite Strategy & Execution
                </div>
              )}
              {service.slug === 'security-data-protection' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ShieldAlert size={18} className="text-[#ff6b00]" />
                  Absolute Resilience
                </div>
              )}
              {service.slug === 'cloud-hosting-deployment' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cloud size={18} className="text-[#ff6b00]" />
                  Scalable. Secure. Seamless.
                </div>
              )}
              {service.slug === 'custom-websites-design' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <PenTool size={18} className="text-[#ff6b00]" />
                  Conversion-First Design
                </div>
              )}
              {service.slug === 'rack-and-roll-services' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Truck size={18} className="text-[#ff6b00]" />
                  Turnkey Deployment
                </div>
              )}
              {service.slug === 'custom-ai-hardware' && (
                <div className="text-[#ff6b00] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu size={18} className="text-[#ff6b00]" />
                  Cloud Repatriation. On-Premise Power.
                </div>
              )}
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 max-w-4xl drop-shadow-2xl">
                {service.slug === 'it-network-infrastructure' ? 'Future-Proof Infrastructure. Engineered for Performance.' : 
                 service.slug === 'managed-av-services' ? 'Immersive AV. Seamless Collaboration. Engineering the Experience.' : 
                 service.slug === 'asset-lifecycle-management' ? 'Maximize Value. Minimize Risk. Master Your IT Lifecycle.' : 
                 service.slug === 'ai-custom-development-automation' ? 'Bespoke AI Solutions. Automate the Mundane. Command Your Data.' : 
                 service.slug === 'ai-machine-learning' ? 'Custom AI & Machine Learning. Built for Your Business Logic.' :
                 service.slug === 'custom-crm-solutions' ? 'Unified Systems. Unlimited Growth. Custom CRM & ERP Solutions.' : 
                 service.slug === 'custom-server-design-deployment' ? 'Purpose-Built Servers. Enterprise-Grade Performance.' :
                 service.slug === 'online-marketing-services' ? 'Data-Driven Visibility. Performance-Led Growth.' :
                 service.slug === 'professional-it-consulting' ? 'Strategic Advisory. Technical Precision. Global Perspective.' :
                 service.slug === 'security-data-protection' ? 'Zero Trust. Total Integrity. CISA-Certified Security.' :
                 service.slug === 'cloud-hosting-deployment' ? 'Enterprise Cloud Hosting. High-Performance Deployment.' :
                 service.slug === 'custom-websites-design' ? 'Bespoke Digital Experiences. Engineered to Convert.' :
                 service.slug === 'custom-nas-storage' ? 'Beyond the Cloud. Enterprise-Grade Custom NAS Solutions.' :
                 service.slug === 'rack-and-roll-services' ? 'From Dock to First Ping. Professional Server Deployment.' :
                 service.slug === 'custom-ai-hardware' ? 'Own Your AI Infrastructure. Eliminate Cloud Lock-In.' : service.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-50/90 font-medium leading-relaxed max-w-3xl mb-12 drop-shadow-md">
                {service.slug === 'it-network-infrastructure' 
                  ? 'We design, deploy, and manage resilient IT networks that serve as the backbone of your business. From high-density local networks to global hybrid-cloud architectures, we build for the speed of tomorrow.' 
                  : service.slug === 'managed-av-services'
                  ? 'Beyond the screen and the speaker, we design high-impact audiovisual environments. From executive boardrooms to enterprise-wide live events, we blend studio-grade audio precision with world-class video infrastructure.'
                  : service.slug === 'asset-lifecycle-management'
                  ? 'From initial procurement to secure certified destruction, we manage every stage of your hardware and software journey. Stop losing track of your investments and start optimizing your ROI.'
                  : service.slug === 'ai-custom-development-automation'
                  ? 'We bridge the gap between raw data and actionable intelligence. From custom LLM implementations to automated data pipelines, we build AI tools that reclaim your time and turn "noise" into insight.'
                  : service.slug === 'custom-crm-solutions'
                  ? 'Stop fighting your software and start fueling your business. We build bespoke CRM and ERP platforms designed to unify your data, automate your workflows, and provide a single source of truth for your entire operation.'
                  : service.slug === 'custom-server-design-deployment'
                  ? 'Stop overpaying for generic cloud instances and under-powered workstations. We design, build, and deploy high-density server solutions—from AMD EPYC virtualization clusters to high-VRAM GPU nodes—engineered for your specific workload.'
                  : service.slug === 'online-marketing-services'
                  ? 'We move beyond "likes" and "impressions" to deliver measurable ROI. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business don\'t just rank—it dominates.'
                  : service.slug === 'professional-it-consulting'
                  ? 'We provide high-level consultancy and specialized professional services for organizations that demand absolute integrity. From IT auditing and risk mitigation to international business operations, we bridge the gap between complex strategy and flawless execution.'
                  : service.slug === 'security-data-protection'
                  ? 'In an era of evolving threats, "good enough" security is a liability. We design multi-layered defense architectures that protect your data, ensure your compliance, and guarantee your business continuity—no matter what.'
                  : service.slug === 'cloud-hosting-deployment'
                  ? 'Stop worrying about server maintenance and start focusing on growth. We design and manage high-availability cloud environments and automated deployment pipelines that ensure your applications are always fast, always online, and always secure.'
                  : service.slug === 'custom-websites-design'
                  ? "We don't just build websites; we build high-performance business tools. From lightning-fast architecture to immersive UI/UX, we create digital storefronts and corporate portals that reflect the prestige of your brand."
                  : service.slug === 'custom-nas-storage'
                  ? 'Stop renting space for your most valuable assets. We design and deploy high-performance Network Attached Storage systems that offer lightning-fast local speeds, impenetrable security, and zero monthly subscription fees.'
                  : service.slug === 'rack-and-roll-services'
                  ? 'We handle the complete physical and logical integration of your server infrastructure. From receiving equipment at the dock to the moment the first ping is sent, our team ensures precision deployment, professional cabling, and optimized performance for your mission-critical data center operations.'
                  : service.slug === 'custom-ai-hardware'
                  ? 'For organizations with strict data privacy requirements or intensive compute needs, the public cloud isn\'t always the answer. We design and build purpose-built AI hardware—from high-VRAM GPU nodes to AMD EPYC clusters—engineered to run your models locally with zero per-token costs.'
                  : service.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {service.slug === 'it-network-infrastructure' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Get a Free Infrastructure Audit <Zap size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Our Tech Stack
                    </button>
                  </>
                ) : service.slug === 'managed-av-services' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Schedule a Site Survey <Monitor size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore Collaboration Solutions
                    </button>
                  </>
                ) : service.slug === 'asset-lifecycle-management' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Request an Asset Audit <Package size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Compliance Frameworks
                    </button>
                  </>
                ) : service.slug === 'ai-machine-learning' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Book an AI Strategy Session <BrainCircuit size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore AI Use Cases
                    </button>
                  </>
                ) : service.slug === 'ai-custom-development-automation' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Book an AI Strategy Session <Bot size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore Automation Use Cases
                    </button>
                  </>
                ) : service.slug === 'custom-nas-storage' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Build Your Storage Spec <Database size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Schedule a Data Consultation
                    </button>
                  </>
                ) : service.slug === 'custom-server-design-deployment' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Build Your Custom Spec <Cpu size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Consult an Infrastructure Engineer
                    </button>
                  </>
                ) : service.slug === 'online-marketing-services' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Get a Free SEO Audit <Search size={18} className="group-hover:scale-110 transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Strategy Framework
                    </button>
                  </>
                ) : service.slug === 'security-data-protection' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Request a Security Audit <ShieldAlert size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Our Compliance Framework
                    </button>
                  </>
                ) : service.slug === 'professional-it-consulting' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Consult with an Expert <Zap size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Service Frameworks
                    </button>
                  </>
                ) : service.slug === 'cloud-hosting-deployment' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Get a Hosting Audit <Activity size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Deployment Frameworks
                    </button>
                  </>
                ) : service.slug === 'custom-websites-design' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Start Your Project <Rocket size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Our Portfolio
                    </button>
                  </>
                ) : service.slug === 'rack-and-roll-services' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Request Deployment Quote <Truck size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Deployment Options
                    </button>
                  </>
                ) : service.slug === 'custom-ai-hardware' ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Calculate Your Cloud Savings <Cpu size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      Explore AI Hardware Solutions
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                    >
                      Talk to an Expert <Zap size={18} className="group-hover:fill-white transition-all" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                      View Case Studies
                    </button>
                  </>
                )}
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 group">
                {service.imageUrl ? (
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gradient-to-br from-[#ff6b00]/20 to-[#0c1a36] flex items-center justify-center">
                    <Cpu size={80} className="text-white/20" />
                  </div>
                )}
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a36]/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Solution Area</p>
                    <p className="text-white font-bold text-sm">{service.name.split(' ')[0]} Intelligence</p>
                  </div>
                  <div className="w-10 h-10 bg-[#ff6b00] rounded-xl flex items-center justify-center text-white">
                    <Shield size={20} />
                  </div>
                </div>
              </div>

              {/* Backglow for the image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6b00]/30 to-blue-500/30 blur-3xl -z-10 rounded-[40px]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      {!['it-network-infrastructure', 'managed-av-services', 'asset-lifecycle-management', 'ai-custom-development-automation', 'ai-machine-learning', 'custom-crm-erp-solutions', 'custom-nas-storage', 'custom-server-design-deployment', 'online-marketing-services', 'professional-it-consulting', 'security-data-protection', 'cloud-hosting-deployment', 'custom-websites-design', 'av-smart-workspaces', 'rack-and-roll-services'].includes(service.slug) ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Overview</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-16">
                {service.longDesc || `Detailed information about ${service.name} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Core Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-xl shadow-lg flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-transform">
                          {idx % 4 === 0 && <Cpu size={20} />}
                          {idx % 4 === 1 && <Cloud size={20} />}
                          {idx % 4 === 2 && <Shield size={20} />}
                          {idx % 4 === 3 && <Globe size={20} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-white tracking-wide">{feature}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Benefits & Sidebar */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-[#ff6b00]/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight mt-2 drop-shadow-sm">Client Benefits</h3>
                
                {service.benefits && service.benefits.length > 0 ? (
                  <ul className="flex flex-col gap-5 relative z-10">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-0.5 text-[#ff6b00]">
                          <CheckCircle2 size={24} />
                        </div>
                        <span className="text-white/90 text-lg font-medium leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/60">Benefits information is being compiled.</p>
                )}

                <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">Need a custom approach?</p>
                  <Link to="/" className="text-white font-bold flex items-center gap-2 hover:text-[#ff6b00] transition-colors group/link">
                    Contact Solutions Architect 
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      ) : service.slug === 'it-network-infrastructure' ? (
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
                  Connect with our certified network engineers in Austin to discuss your infrastructure needs and get a free network audit.
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
                        <p className="text-white font-medium text-sm">11801 Domain Blvd, Austin, TX 78758</p>
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
                    onClick={() => setIsModalOpen(true)}
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
      ) : service.slug === 'ai-custom-development-automation' ? (
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
                    We design custom AI agents that handle repetitive cognitive tasks. Whether it’s automating customer support triage, generating high-fidelity reports, or managing complex scheduling, our solutions act as a <span className="text-[#ff6b00] font-bold">"Force Multiplier"</span> for your existing team.
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
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Strategy session requested!"); }}>
                  <div className="grid grid-cols-1 gap-6">
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

                  <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Request Strategy Session <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'custom-server-design-deployment' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Core Deployment Architectures */}
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
                Core Deployment Architectures
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Engineering capability across the compute spectrum</span>
              </h2>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
              
              {/* I. High-Density Virtualization (VDI & Cloud) */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  I
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Layers size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">High-Density Virtualization (VDI & Cloud)</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Maximize your rack space. We specialize in multi-core <span className="text-[#ff6b00] font-bold">AMD EPYC</span> builds designed to host hundreds of virtual machines. By utilizing high-speed NVMe storage arrays and massive DDR5 memory pools, we eliminate hardware bottlenecks in your private cloud.
                  </p>
                </div>
              </div>

              {/* II. GPU-Accelerated AI & Rendering Nodes */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  II
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Zap size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">GPU-Accelerated AI & Rendering Nodes</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    For clients running local LLMs (like Claude/Llama) or intensive 3D rendering, we build custom GPU-optimized chassis. Our designs focus on <span className="text-blue-400 font-bold">thermal management</span> and power delivery, ensuring your hardware sustains peak performance during 24/7 compute cycles.
                  </p>
                </div>
              </div>

              {/* III. Enterprise Storage & Cold Archives (NAS/SAN) */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  III
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Database size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Enterprise Storage & Cold Archives (NAS/SAN)</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Data is your most valuable asset. We build redundant, high-capacity storage servers with hardware-level RAID and <span className="text-[#ff6b00] font-bold">ZFS file systems</span>. From lightning-fast "Hot Storage" for active editing to deep "Cold Archives" for compliance, your data stays safe and accessible.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* The Hardware Pedigree: Component-Level Precision */}
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
                    <Cpu size={40} />
                 </div>
                 <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">The Hardware Pedigree</h3>
                 <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Component-Level Precision.
                    <span className="block text-2xl lg:text-3xl text-white/50 font-medium mt-4 tracking-normal italic">Engineered for the "Pro-sumer" & IT Manager.</span>
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium">
                    We don't just "assemble" servers; we engineer high-performance systems where every component is validated for peak throughput and maximum electrical efficiency.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white">Processor Selection</h4>
                      </div>
                      <p className="text-white/60 text-sm">Expertise in <span className="text-white font-bold">AMD EPYC</span> and <span className="text-white font-bold">Threadripper Pro</span> platforms for maximum PCIe lane availability and multi-threaded dominance.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white">Thermal Engineering</h4>
                      </div>
                      <p className="text-white/60 text-sm">Custom cooling solutions including server-grade air cooling and <span className="text-white font-bold">closed-loop liquid systems</span> to ensure longevity in high-ambient environments.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white">Redundant Power (1+1)</h4>
                      </div>
                      <p className="text-white/60 text-sm">Deployment of <span className="text-white font-bold">Titanium-rated redundant power supplies</span> (PSUs) to ensure zero downtime during electrical failures.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group/item hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Monitor size={18} className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold text-white">Remote Management (IPMI/BMC)</h4>
                      </div>
                      <p className="text-white/60 text-sm">Every server includes dedicated <span className="text-white font-bold">out-of-band management hardware</span> for remote BIOS-level control and health monitoring.</p>
                    </div>
                  </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <Cpu size={200} className="text-white/10 relative z-10" />
                    <Sliders size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* The "Infrastructure-Ready" Tech Stack */}
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
                The "Infrastructure-Ready" Tech Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">A look at the components and software we integrate</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              {/* Header */}
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Component / Layer</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Selection</div>
              </div>

              {/* Processors */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Sparkles className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Processors</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium text-pretty">AMD EPYC 9004/8004 Series, Intel Xeon Scalable</p>
                </div>
              </div>

              {/* Motherboards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Sliders className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Motherboards</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Gigabyte Enterprise, Supermicro, ASRock Rack</p>
                </div>
              </div>

              {/* Memory */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Database className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Memory</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">ECC Registered DDR5 (3200MT/s - 5600MT/s+)</p>
                </div>
              </div>

              {/* Storage */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Package className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Storage</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Enterprise NVMe (Samsung PM Series), SAS-12G</p>
                </div>
              </div>

              {/* OS / Hypervisor */}
              <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Zap className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">OS / Hypervisor</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Proxmox VE, VMware ESXi, TrueNAS CORE, Ubuntu Server</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The CISA Reliability Standard - Server Edition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-[#1a305c]/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/2">
                   <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                      <Shield size={40} />
                   </div>
                   <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">CISA-Certified Compliance</h3>
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                      Servers Built for Audit and Uptime.
                   </h2>
                   <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                      Drawing on my CISA-certified background, I don't just "build" servers; I prepare them for the enterprise environment through rigorous testing and hardware-level security.
                   </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Burn-In Testing</h4>
                      <p className="text-white/60">Every build undergoes a <span className="text-white font-bold">72-hour stress test</span> (CPU/RAM/Disk) to catch hardware infant mortality before deployment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Lock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Security Hardening</h4>
                      <p className="text-white/60">BIOS-level security, <span className="text-white font-bold">TPM 2.0 integration</span>, and OS-level hardening are standard on every deployment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Lifecycle Documentation</h4>
                      <p className="text-white/60">You receive a complete hardware manifest, <span className="text-white font-bold">wiring diagrams</span>, and thermal benchmarks for your audit logs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 4-Phase Deployment Lifecycle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                The 4-Phase Deployment Lifecycle
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">A systematic approach to server-grade excellence</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
              
              {/* Phase 1 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Workload Analysis</h4>
                  <p className="text-white/60 leading-relaxed font-medium">We profile your software requirements (IOPS, Thread Count, VRAM) to prevent over-speccing or under-performing.</p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Custom Engineering</h4>
                  <p className="text-white/60 leading-relaxed font-medium">We source enterprise-grade components and assemble the unit in a static-controlled environment for peak stability.</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Data Center Integration</h4>
                  <p className="text-white/60 leading-relaxed font-medium">We handle the physical rack-and-stack, structured cabling, and multi-layer network provisioning.</p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Proactive Monitoring</h4>
                  <p className="text-white/60 leading-relaxed font-medium">We set up automated alerts for hardware health, ensuring we know about a failing fan or drive before you do.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hybrid Cloud Integration */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#1a305c]/80 to-[#0c1a36]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
                    <Cloud size={32} />
                  </div>
                  <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Hybrid Cloud Integration</h3>
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    The Best of Both Worlds.
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                    We specialize in <span className="text-[#ff6b00] font-bold">"Cloud Repatriation."</span> By moving your most intensive workloads from expensive AWS/Azure instances to on-premise custom servers, we’ve helped clients reduce their monthly OPEX by up to <span className="text-green-400 font-black">60%</span> while increasing performance.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-blue-400" /> Lower OPEX costs
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-blue-400" /> Reduced Latency
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-blue-400" /> Complete IP Privacy
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-blue-400" /> Zero Ingress/Egress Fees
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#ff6b00]/20 blur-[100px] rounded-full"></div>
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 relative z-10 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-8">
                         <History size={18} className="text-blue-400" />
                         <span className="text-white font-bold">Repatriation Dashboard</span>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-xs text-white/50 mb-2 font-bold uppercase tracking-widest">AWS Instances</div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-red-500/50"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-white/50 mb-2 font-bold uppercase tracking-widest">Custom On-Prem</div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[30%] h-full bg-green-500/50"></div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                          <div>
                             <div className="text-white font-black text-2xl tracking-tighter">$4,200/mo</div>
                             <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Managed Cloud OPEX</div>
                          </div>
                          <div className="text-right">
                             <div className="text-green-400 font-black text-2xl tracking-tighter">$1,680/mo</div>
                             <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">On-Prem Energy + Maint.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Call to Action - Customized for Servers */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0c1a36] to-black z-0"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-[55%]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Compute Architect Standby</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Ready to Own Your Compute?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                  Stop renting your performance. Build a server that is specifically tuned for your business's DNA.
                </p>
                
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500/20 rounded-full"></div>
                </div>
              </div>

              <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full pointer-events-none"></div>
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Technical spec requested successfully!"); }}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary Workload</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer text-sm">
                          <option value="virtualization">Virtualization</option>
                          <option value="ai">AI / ML</option>
                          <option value="storage">Storage</option>
                          <option value="gaming">Gaming / High-Hz</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Rack Size</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer text-sm">
                          <option value="1u">1U</option>
                          <option value="2u">2U</option>
                          <option value="4u">4U</option>
                          <option value="tower">Tower</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Target Budget</label>
                      <input type="text" placeholder="$5,000 - $15,000" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                  </div>

                  <button className="mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Request a Technical Spec <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'ai-machine-learning' ? (
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
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("AI Strategy session requested!"); }}>
                  <div className="grid grid-cols-1 gap-6">
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

                  <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Book AI Strategy Session <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'custom-crm-erp-solutions' ? (
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Core CRM/ERP Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Performance Engineering</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  The Power of <span className="text-blue-400 italic font-serif">Custom Integration</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium mb-10">
                  Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white/80 font-bold group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    100% Intellectual Property Ownership
                  </div>
                  <div className="flex items-center gap-4 text-white/80 font-bold group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    Zero "Per-User" Monthly Fees
                  </div>
                  <div className="flex items-center gap-4 text-white/80 font-bold group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    Seamless Legacy System Extraction
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Users size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">CRM</h4>
                    <p className="text-white/40 text-sm italic">Customer Lifecycle</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all translate-y-8 group">
                  <div className="w-14 h-14 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <Layers size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">ERP</h4>
                    <p className="text-white/40 text-sm italic">Resource Engine</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Database size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Data Labs</h4>
                    <p className="text-white/40 text-sm italic">Single Source</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-between hover:bg-white/10 transition-all translate-y-8 group">
                  <div className="w-14 h-14 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <Landmark size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Fiscal Sync</h4>
                    <p className="text-white/40 text-sm italic">Real-time P&L</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
              {/* Pillar I: Tailored CRM */}
              <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                <div className="mb-8 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">I. Tailored CRM</h3>
                <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-6">Own Your Customer Journey</p>
                <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                  Generic CRMs are cluttered with features you don't use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle—from initial lead capture to automated follow-ups and long-term retention analytics.
                </p>
                <ul className="space-y-4">
                  {['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar II: Precision ERP */}
              <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6b00]/10 blur-3xl rounded-full group-hover:bg-[#ff6b00]/20 transition-all"></div>
                <div className="mb-8 w-16 h-16 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <Layers size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">II. Precision ERP</h3>
                <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-widest mb-6">The Engine of Your Business</p>
                <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                  Manage your resources, not just your data. Our custom ERPs integrate your core business processes—including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics—into one seamless dashboard.
                </p>
                <ul className="space-y-4">
                  {['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar III: Financial Synchronization */}
              <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
                <div className="mb-8 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Landmark size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">III. Fiscal Sync</h3>
                <p className="text-white/50 font-bold text-sm uppercase tracking-widest mb-6">Real-time Financial Integration</p>
                <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
                  Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.
                </p>
                <ul className="space-y-4">
                  {['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specialized Features for Scaling */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-32 mb-32"
            >
              <div className="flex items-center gap-3 mb-16">
                <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                  Specialized Features for Scaling
                  <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Built for high-growth enterprise operations</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <Target size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Automated Lead Scoring</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                    Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <Truck size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Inventory & Logistics</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                    Real-time visibility of stock levels across multiple locations (ideal for companies like <span className="text-[#ff6b00]">Bloom Logistics</span>).
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <BarChart3 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Custom Reporting Engines</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                    Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <ShieldAlert size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-wide relative z-10">Advanced RBAC Security</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium italic relative z-10">
                    Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Tech Stack: Scalable Architecture */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32"
            >
              <div className="flex items-center gap-3 mb-16">
                <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                  The Tech Stack: Scalable Architecture
                  <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Battle-tested foundations for zero-downtime operations</span>
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                  <div className="lg:col-span-4 bg-black/20 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group/layer">
                    <div className="absolute -inset-10 bg-blue-500/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                    <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 relative z-10">Performance Stack</h4>
                    <div className="space-y-10 relative z-10">
                      <div>
                        <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Backend Engineering</p>
                        <p className="text-white text-xl font-bold tracking-tight">Python (Django/FastAPI), Node.js, or Go</p>
                      </div>
                      <div>
                        <p className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-3">Database Architecture</p>
                        <p className="text-white text-xl font-bold tracking-tight">PostgreSQL, MySQL, or MongoDB</p>
                      </div>
                      <div>
                        <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-3">Hosting Infrastructure</p>
                        <p className="text-white text-xl font-bold tracking-tight">Dedicated AMD EPYC Servers or Secure Cloud</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8 p-8 lg:p-12 relative overflow-hidden group/layer">
                    <div className="absolute -inset-10 bg-[#ff6b00]/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                    <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 relative z-10">Ecosystem & Security Layer</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                      <div>
                        <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6">Native Third-Party Integrations</p>
                        <div className="flex flex-wrap gap-3">
                          {['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'].map((item) => (
                            <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-white/80 text-sm font-bold hover:bg-white/10 transition-colors cursor-default">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6">Security & Resilience</p>
                        <ul className="space-y-4">
                          {[
                            { label: 'End-to-End Encryption (AES-256)', icon: Shield },
                            { label: 'Multi-Factor Authentication (MFA)', icon: Lock },
                            { label: 'Real-time Audit Logs', icon: History }
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-white/80 font-bold text-[13px]">
                              <div className="p-1.5 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                                <item.icon size={16} />
                              </div>
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The "CISA-Certified" Integrity Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32 mt-10"
            >
              <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/10 border border-blue-500/30 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8">
                      <Shield size={16} className="text-blue-400" />
                      <span className="text-blue-300 text-[10px] uppercase font-black tracking-widest">CISA-Certified Integrity Layer</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                      Secure Data. <br />
                      <span className="text-blue-400">Audit-Ready</span> Architecture.
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                      As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards.
                    </p>
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                         <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                            <CheckCircle2 size={20} />
                         </div>
                         <div>
                            <h4 className="text-white font-bold text-xl tracking-tight">Data Integrity Protocol</h4>
                            <p className="text-white/60 text-sm leading-relaxed mt-1">We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                            <CheckCircle2 size={20} />
                         </div>
                         <div>
                            <h4 className="text-white font-bold text-xl tracking-tight">Granular Audit Trails</h4>
                            <p className="text-white/60 text-sm leading-relaxed mt-1">Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                            <CheckCircle2 size={20} />
                         </div>
                         <div>
                            <h4 className="text-white font-bold text-xl tracking-tight">Institutional Disaster Recovery</h4>
                            <p className="text-white/60 text-sm leading-relaxed mt-1">Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.</p>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="relative group/shield">
                      <div className="absolute inset-0 bg-blue-400/20 blur-[120px] rounded-full group-hover/shield:bg-blue-400/30 transition-all"></div>
                      <Shield size={320} className="text-white/5 relative z-10 transform group-hover/shield:scale-105 transition-transform" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <Database size={80} className="text-blue-400 mb-4 animate-pulse" />
                        <span className="text-white/20 font-black text-6xl tracking-tighter select-none">CISA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study: Logistics & Entity Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32 pt-10"
            >
              <div className="flex items-center gap-3 mb-16">
                <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                  Case Study: <span className="text-[#ff6b00]">Logistics & Entity Management</span>
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 lg:p-20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#ff6b00]/10 to-transparent pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-[#ff6b00]/20 pb-4">The Challenge</h3>
                        <p className="text-xl lg:text-2xl text-white font-black tracking-tight leading-relaxed">
                          Managing a complex transition of ownership and international logistics across multiple corporate entities.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-blue-400/20 pb-4">The Solution</h3>
                        <p className="text-lg text-white/70 leading-relaxed font-medium">
                          A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."
                        </p>
                      </div>
                    </div>
                    <div className="mt-16 flex items-center gap-4 text-white/40">
                      <Truck size={24} />
                      <div className="h-px flex-1 bg-white/10"></div>
                      <Globe size={24} />
                      <div className="h-px flex-1 bg-white/10"></div>
                      <Landmark size={24} />
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 relative overflow-hidden group-hover:bg-white/10 transition-all">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff6b00]/10 blur-3xl rounded-full"></div>
                      <h3 className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-6">The Result</h3>
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-baseline gap-2">
                             <p className="text-5xl font-black text-white">100%</p>
                             <TrendingUp size={24} className="text-[#ff6b00]" />
                          </div>
                          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-2">Visibility into Transfer Process</p>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                             <p className="text-5xl font-black text-white">50%</p>
                             <Zap size={24} className="text-blue-400" />
                          </div>
                          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-2">Reduction in Admin Overhead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our 4-Stage "Business-First" Process */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32 mt-32"
            >
              <div className="text-center mb-24">
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-6 underline decoration-[#ff6b00]/30 underline-offset-8">Our 4-Stage <br className="md:hidden" /> <span className="text-[#ff6b00]">"Business-First"</span> Process</h2>
                <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium tracking-tight">Designing architecture that mimics your team's natural workflow for zero-friction adoption.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {[
                  { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
                  { step: '02', title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
                  { step: '03', title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
                  { step: '04', title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap }
                ].map((item, idx) => (
                  <div key={idx} className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-white/10 rounded-2xl flex items-center justify-center text-[#ff6b00] font-black text-2xl z-10 shadow-xl shadow-black/50">
                      {item.step}
                    </div>
                    <div className="mb-10 text-white/30 group-hover:text-[#ff6b00] transition-colors">
                      <item.icon size={44} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-6 tracking-tight leading-none">{item.title}</h4>
                    <p className="text-white/50 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Final Call to Action - Retire the Spreadsheets */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[50px] shadow-2xl border border-white/10 bg-gradient-to-br from-[#0c1a36] via-black to-[#050b18] p-10 lg:p-24"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff6b00]/10 blur-[120px] rounded-full pointer-events-none transition-all duration-1000"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <div className="lg:w-1/2">
                   <h2 className="text-5xl lg:text-8xl font-black text-white tracking-[1.1] mb-12">
                     Ready to <br />
                     <span className="text-[#ff6b00]">Retire</span> the <br />
                     Spreadsheets?
                   </h2>
                   <p className="text-2xl text-white/70 leading-relaxed font-medium mb-16 max-w-md">
                     Your business is unique. Your software should be, too. Let's build the <span className="text-white italic underline decoration-[#ff6b00]">last system you'll ever need.</span>
                   </p>
                   <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl w-fit">
                      <div className="flex -space-x-4">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="w-14 h-14 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                              <img src={`https://i.pravatar.cc/150?u=crm${i}`} alt="user" className="w-full h-full object-cover" />
                           </div>
                         ))}
                      </div>
                      <div>
                        <p className="text-white font-black text-lg tracking-tight">40+ Enterprises</p>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Successfully Deployed</p>
                      </div>
                   </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 lg:p-14 rounded-[40px] shadow-3xl">
                    <form className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                           <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Company Name</label>
                           <input type="text" placeholder="Bloom Logistics" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                         </div>
                         <div className="space-y-3">
                           <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Industry</label>
                           <input type="text" placeholder="Int. Supply Chain" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Current Software Ecosystem</label>
                         <input type="text" placeholder="Legacy SAP / Excel / Email silos" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Biggest Operational Bottleneck</label>
                         <textarea placeholder="Tell us what's slowing down your team..." rows={3} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold placeholder:text-white/20"></textarea>
                      </div>
                      <button 
                         type="submit"
                         className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/30 active:scale-95 flex items-center justify-center gap-3 group"
                      >
                         Start Your Custom Build <ArrowRight size={26} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'online-marketing-services' ? (
      <section className="py-20 relative bg-black/30">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          {/* Our Core Growth Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 mt-10"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
                  <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                    Our Core Growth Pillars
                  </h2>
                </div>
                <p className="text-xl text-white/50 max-w-2xl font-medium">The intersection of technical precision and creative authority.</p>
              </div>
              <div className="text-right hidden md:block">
                 <div className="text-6xl font-black text-white/5 tracking-tighter uppercase">Visibility</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* I. Technical SEO & Core Web Vitals */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-[#ff6b00]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col hover:bg-white/10 transition-all shadow-2xl">
                  <div className="mb-8 w-16 h-16 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#ff6b00]/20">
                    <Code2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">I. Technical SEO & Core Web Vitals</h3>
                  <div className="w-12 h-1 bg-[#ff6b00] mb-8 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-white/60 leading-relaxed font-medium text-lg leading-[1.6]">
                    Search engines favor performance. Leveraging our <span className="text-white font-bold italic">Custom Server & Infrastructure expertise</span>, we optimize your site’s backend for sub-second load times, proper schema markup, and flawless mobile indexing. If your site isn't fast, it won't rank; we ensure it’s the fastest in your industry.
                  </p>
                </div>
              </motion.div>

              {/* II. Strategic Content Marketing */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative lg:translate-y-8"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col hover:bg-white/10 transition-all shadow-2xl">
                  <div className="mb-8 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/20">
                    <PenTool size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">II. Strategic Content Marketing</h3>
                  <div className="w-12 h-1 bg-blue-500 mb-8 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-white/60 leading-relaxed font-medium text-lg leading-[1.6]">
                    We use Advanced AI (<span className="text-blue-400 font-bold">Anthropic/Claude</span>) and deep industry research to produce high-authority content. We don't just write for bots; we write for humans, establishing your brand as a Thought Leader through whitepapers, case studies, and high-conversion landing pages.
                  </p>
                </div>
              </motion.div>

              {/* III. Precision Paid Acquisition (PPC) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-[#ff6b00]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col hover:bg-white/10 transition-all shadow-2xl">
                  <div className="mb-8 w-16 h-16 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#ff6b00]/20">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">III. Precision Paid Acquisition (PPC)</h3>
                  <div className="w-12 h-1 bg-[#ff6b00] mb-8 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-white/60 leading-relaxed font-medium text-lg leading-[1.6]">
                    Stop wasting ad spend. We manage highly targeted Google Ads and Meta campaigns using <span className="text-white font-bold italic">"Negative Keyword" filtering</span> and A/B split testing. We treat your ad budget like a financial asset, optimizing for the lowest Cost Per Acquisition (CPA) possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* The Technical Marketing Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 lg:mt-32 pb-10"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                The Technical Marketing Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Professional tools for granular tracking & authority</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Category</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Marketing Stack</div>
              </div>

              {/* Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <BarChart3 className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Analytics</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Google Analytics 4 (GA4), GTM, Microsoft Clarity (Heatmaps)</p>
                </div>
              </div>

              {/* SEO Tools */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Search className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">SEO Tools</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Ahrefs, SEMRush, Screaming Frog (Technical Crawling)</p>
                </div>
              </div>

              {/* Content AI */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Bot className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Content AI</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium text-pretty hover:text-white transition-colors cursor-default">Anthropic Claude-3.5-Sonnet for high-fidelity copy</p>
                </div>
              </div>

              {/* Creative */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Layout className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Creative</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Canva Enterprise & Freepik Premium for high-res assets</p>
                </div>
              </div>

              {/* E-Commerce */}
              <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <ShoppingBag className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">E-Commerce</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Shopify Flow & Facebook Conversions API (CAPI)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The "CISA" Integrity Standard: Marketing Transparency */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-[#1a305c]/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/2">
                   <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                      <Shield size={40} />
                   </div>
                   <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Evidence-Based Integrity</h3>
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                      Marketing Built on Evidence, Not Guesswork.
                   </h2>
                   <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                      As a CISA-certified professional, I value Integrity and Transparency. Most agencies hide behind "vanity metrics." We provide "CISA-level" reporting that shows exactly where your money went and what it returned.
                   </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-8">
                  <div className="flex items-start gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Conversion Tracking</h4>
                      <p className="text-white/60 font-medium">We don't just track clicks; we track <span className="text-white font-black italic">revenue</span>. Every dollar is accounted for in the conversion funnel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <MousePointer2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Attribution Modeling</h4>
                      <p className="text-white/60 font-medium">Understanding which touchpoint (SEO, Social, or Paid) actually triggered the sale for precise budget allocation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Competitor Intelligence</h4>
                      <p className="text-white/60 font-medium">Real-time monitoring of your competitors' keyword gaps and ad strategies to find your niche dominance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specialized E-Commerce Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-black/80 to-[#1a305c]/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 shadow-xl shadow-blue-500/10">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">E-Commerce Dominance</h3>
                  <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Optimized for Shopify & Beyond.
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                    Drawing on our experience managing Shopify stores and <span className="text-[#ff6b00] font-bold">Bloom Logistics</span>, we understand the "Full-Funnel" of e-commerce. We optimize your product pages for <span className="text-[#ff6b00] font-black italic">"Buyer Intent"</span> keywords, set up abandoned cart recovery automations, and manage high-ROI retargeting campaigns.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-white/70 font-bold hover:text-white transition-colors cursor-default">
                      <CheckCircle2 size={20} className="text-blue-400" /> Buyer Intent Optimization
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold hover:text-white transition-colors cursor-default">
                      <CheckCircle2 size={20} className="text-blue-400" /> Abandoned Cart Recovery
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold hover:text-white transition-colors cursor-default">
                      <CheckCircle2 size={20} className="text-blue-400" /> Dynamic Retargeting
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold hover:text-white transition-colors cursor-default">
                      <CheckCircle2 size={20} className="text-blue-400" /> Cross-Sells & Upsells
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group/device">
                    <div className="absolute inset-0 bg-[#ff6b00]/20 blur-[100px] rounded-full group-hover/device:bg-[#ff6b00]/30 transition-all"></div>
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 relative z-10 backdrop-blur-md overflow-hidden">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                           <LineChart size={24} className="text-[#ff6b00]" />
                           <span className="text-white font-black tracking-widest text-xs uppercase">E-Com ROI Tracker</span>
                        </div>
                        <div className="text-green-400 font-bold text-xs">+24.5%</div>
                      </div>
                      <div className="space-y-6">
                        <div className="h-40 flex items-end gap-2">
                           {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                             <div key={i} className="flex-1 bg-gradient-to-t from-[#ff6b00] to-blue-500 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                        <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
                           <div>
                              <div className="text-white/40 text-[10px] uppercase font-black mb-1">CPA</div>
                              <div className="text-2xl font-black text-white">$4.20</div>
                           </div>
                           <div>
                              <div className="text-white/40 text-[10px] uppercase font-black mb-1">ROAS</div>
                              <div className="text-2xl font-black text-green-400">8.4x</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 4-Phase Growth Lifecycle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="flex flex-col items-center text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">Our Growth Pathway</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                The 4-Phase Growth <span className="text-[#ff6b00]">Lifecycle</span>
              </h2>
              <p className="text-xl text-white/50 max-w-2xl font-medium">A systematic, data-led approach to category leadership.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative px-4">
              {/* Connecting Line - Desktop Only */}
              <div className="hidden md:block absolute top-[40px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-blue-500 via-[#ff6b00] to-blue-500 z-0 opacity-30"></div>
              
              {/* Phase 1 */}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-500 shadow-2xl flex items-center justify-center font-black text-white text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  1
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Deep Audit & Baseline</h4>
                <p className="text-white/50 leading-relaxed font-medium">We analyze your current traffic, technical debt, and competitor positioning to find hidden opportunities.</p>
              </div>

              {/* Phase 2 */}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-2xl flex items-center justify-center font-black text-white text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  2
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Infrastructure Hardening</h4>
                <p className="text-white/50 leading-relaxed font-medium">We fix the technical SEO issues and speed bottlenecks before driving a single click of new traffic.</p>
              </div>

              {/* Phase 3 */}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-500 shadow-2xl flex items-center justify-center font-black text-white text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  3
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Campaign Deployment</h4>
                <p className="text-white/50 leading-relaxed font-medium">We launch high-authority content and targeted ad sets that focus on conversion, not just raw volume.</p>
              </div>

              {/* Phase 4 */}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-2xl flex items-center justify-center font-black text-white text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  4
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Agile Optimization</h4>
                <p className="text-white/50 leading-relaxed font-medium">We review data weekly, doubling down on high-perf channels and cutting waste instantly.</p>
              </div>
            </div>
          </motion.div>

          {/* Final Call to Action - Customized for Marketing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 lg:mt-40 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-[#0c1a36] z-0"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-20 flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-[50%]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                  <span className="text-white/80 text-xs font-black uppercase tracking-widest">Growth Architect Standby</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-8 drop-shadow-lg">
                  Ready to <span className="text-[#ff6b00]">Outrank</span> Your Competition?
                </h2>
                <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                  Don't let your competitors own the first page of Google. Let’s build a marketing engine that scales with your ambition.
                </p>
                <div className="flex gap-4">
                   <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-blue-400 font-black text-2xl tracking-tighter">ROI</div>
                      <div className="text-white/30 text-[10px] uppercase font-black">Focused Strategy</div>
                   </div>
                   <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-[#ff6b00] font-black text-2xl tracking-tighter">3.5x</div>
                      <div className="text-white/30 text-[10px] uppercase font-black">Avg. LTV Lift</div>
                   </div>
                </div>
              </div>

              <div className="lg:w-[50%] w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-3xl relative overflow-hidden group/form">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full"></div>
                <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Growth audit requested successfully!"); }}>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-2">Your Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-2">Current Website</label>
                        <input type="url" placeholder="https://example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-2">Monthly Budget</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold appearance-none cursor-pointer">
                          <option value="<$5k">&lt; $5,000</option>
                          <option value="$5k-$15k">$5,000 - $15,000</option>
                          <option value="$15k-$50k">$15,000 - $50,000</option>
                          <option value=">$50k">&gt; $50,000</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] ml-2">Primary Goal</label>
                        <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-bold appearance-none cursor-pointer">
                          <option value="sales">Increase Sales</option>
                          <option value="leads">Lead Generation</option>
                          <option value="brand">Brand Awareness</option>
                          <option value="technical">Technical SEO Fix</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-4 group">
                    Start My Growth Audit <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'managed-av-services' ? (
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
      ) : service.slug === 'asset-lifecycle-management' ? (
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
                    As an <span className="text-white font-bold">ISACA Austin Chapter member</span> and <span className="text-white font-bold">CISA holder</span>, I bring an auditor's discipline to your asset registry. Our management process isn't just about spreadsheets; it’s about creating a defensible, transparent chain of custody that satisfies even the most rigorous regulatory requirements.
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
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Assessment request submitted!"); }}>
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
      ) : service.slug === 'custom-nas-storage' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Why Custom NAS? (The Performance Gap) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Why Custom NAS? <span className="text-[#ff6b00]">The Performance Gap</span>
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Engineering for uncompromising data velocity</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Pillar I: Unmatched Throughput */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="mb-8 w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <Activity size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-none">I. Unmatched Throughput</h3>
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border-b border-blue-400/20 pb-4 inline-block">(10GbE to 100GbE)</p>
                <p className="text-white/60 leading-relaxed font-medium text-lg">
                  Retail NAS units often bottleneck at 1Gbps. Our custom builds utilize enterprise NICs and <span className="text-white">NVMe caching</span> to provide 10Gbps, 40Gbps, or even 100Gbps speeds. Edit 8K video or run VMs over the network without friction.
                </p>
              </motion.div>

              {/* Pillar II: Massive Scalability & Density */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="mb-8 w-20 h-20 bg-[#ff6b00]/20 rounded-3xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                  <Layers size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-none">II. Massive Scalability</h3>
                <p className="text-[#ff6b00] font-black text-[10px] uppercase tracking-[0.2em] mb-8 border-b border-[#ff6b00]/20 pb-4 inline-block">Dense Storage Architecture</p>
                <p className="text-white/60 leading-relaxed font-medium text-lg">
                  Whether a silent 4-bay office unit or a <span className="text-white">60-bay rack-mount monster</span>, we engineer for growth. Utilizing AMD EPYC platforms, we provide the PCIe lanes necessary for high-speed HBA controllers and massive arrays.
                </p>
              </motion.div>

              {/* Pillar III: True Data Redundancy */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
                <div className="mb-8 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                  <Shield size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-none">III. Data Redundancy</h3>
                <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4 inline-block">(ZFS Integration)</p>
                <p className="text-white/60 leading-relaxed font-medium text-lg">
                  We specialize in <span className="text-white">ZFS-based storage</span>, the gold standard for integrity. Our systems protect against "Bit Rot," drive failure, and accidental deletion with automated snapshots and multi-level RAID pools.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Operational Continuity Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10 bg-gradient-to-br from-[#0c1a36] to-black p-10 lg:p-20"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="lg:w-2/3">
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Data Sovereignty <br />
                  <span className="text-[#ff6b00]">Starts Locally.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                  Take back control of your data. No more per-user fees, no more cloud latency, and no more privacy compromises.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl shadow-orange-500/40 active:scale-95 flex items-center gap-3 group"
                >
                  Configure Your NAS Build <ArrowRight size={26} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                 <div className="relative group/storage">
                    <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full group-hover/storage:bg-blue-400/30 transition-all"></div>
                    <Database size={240} className="text-white/5 relative z-10 transform group-hover/storage:scale-105 transition-all duration-500" />
                    <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                       <Shield size={60} className="text-[#ff6b00]" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
          {/* Specialized Storage Tiers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Specialized Storage Tiers
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Speed vs. Capacity Optimization</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Flash-Array Performance */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flash-Array Performance</h3>
                <p className="text-white/60 leading-relaxed">
                  All-SSD/NVMe arrays for high-IOPS workloads like databases, virtual machine hosting, and real-time 4K/8K video editing. Zero latency for mission-critical apps.
                </p>
              </div>

              {/* Hybrid Storage Pools */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCcw size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hybrid Storage Pools</h3>
                <p className="text-white/60 leading-relaxed">
                  The best of both worlds—mechanical drives for bulk capacity combined with high-speed SSD caching for frequently accessed files. Intelligent data tiering.
                </p>
              </div>

              {/* Deep Archive & Cold Storage */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Package size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deep Archive & Cold Storage</h3>
                <p className="text-white/60 leading-relaxed">
                  High-density, power-efficient builds designed for long-term compliance storage and "Write Once, Read Many" (WORM) requirements. Maximum density, minimum cost.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Tech Stack Table */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-32"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                The Technical Tech Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Enterprise hardware for 24/7 uptime</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
              {/* Header */}
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Component</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Enterprise Selection</div>
              </div>

              {/* Processors */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Cpu className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Processors</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">AMD EPYC™ 7002/8004/9004 Series (High PCIe Lane Counts)</p>
                </div>
              </div>

              {/* Memory */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Database className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Memory</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">ECC Registered DDR4/DDR5 (To prevent silent data corruption)</p>
                </div>
              </div>

              {/* Networking */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Network className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Networking</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Mellanox ConnectX/Intel 10G/40G/100G SFP+ and RJ45</p>
                </div>
              </div>

              {/* Drives */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Package className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Drives</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Enterprise SAS/SATA (Seagate Exos, Western Digital Gold)</p>
                </div>
              </div>

              {/* File System */}
              <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Shield className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">File System</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">OpenZFS with LZ4 Compression and Deduplication</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 4-Phase Storage Deployment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                The 4-Phase Storage Deployment 
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Our systematic approach to data velocity</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
              
              {/* Phase 1 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Capacity & IOPS Planning</h4>
                  <p className="text-white/60 leading-relaxed font-medium">We calculate your usable storage needs vs. your speed requirements to determine the optimal drive chemistry.</p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Hardware Engineering</h4>
                  <p className="text-white/60 leading-relaxed font-medium">Custom assembly using server-grade chassis with hot-swappable drive bays and redundant power for 24/7 uptime.</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Network Integration</h4>
                  <p className="text-white/60 leading-relaxed font-medium">Configuring Link Aggregation (LACP), VLAN tagging, and cross-platform sharing (SMB, NFS, iSCSI).</p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative z-10 flex flex-col items-start gap-6 bg-white/5 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Remote Backup Sync</h4>
                  <p className="text-white/60 leading-relaxed font-medium">Setting up encrypted "Off-site" synchronization to a second NAS or a private cloud for true disaster recovery.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Private Cloud & Collaboration */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#1a305c]/80 to-[#0c1a36]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/5 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] mb-8">
                    <Cloud size={32} />
                  </div>
                  <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Private Cloud & Collaboration</h3>
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Your Own "Dropbox"—Without the Monthly Bill.
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                    We integrate collaboration suites (like <span className="text-blue-400 font-bold">Nextcloud</span>) directly onto your NAS. Access your files from anywhere in the world via secure VPN, share large files with clients via password-protected links, and sync your mobile photos—all while keeping 100% ownership of your data.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-[#ff6b00]" /> Secure VPN Access
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-[#ff6b00]" /> Password-Protected Links
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-[#ff6b00]" /> Mobile Photo Sync
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold">
                      <CheckCircle2 size={20} className="text-[#ff6b00]" /> Zero Subscription Fees
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 relative z-10 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                            <Smartphone size={18} />
                          </div>
                          <span className="text-white font-bold">Cloud Sync Active</span>
                        </div>
                        <div className="text-green-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Encrypted
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                          <div className="flex items-center gap-3">
                            <FileText size={18} className="text-blue-400" />
                            <span className="text-white/60 text-sm font-medium">project_v4_master.psd</span>
                          </div>
                          <span className="text-white/30 text-[10px]">1.2 GB</span>
                        </div>
                        <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                          <div className="flex items-center gap-3">
                            <Video size={18} className="text-[#ff6b00]" />
                            <span className="text-white/60 text-sm font-medium">client_delivery_export.mp4</span>
                          </div>
                          <span className="text-white/30 text-[10px]">4.8 GB</span>
                        </div>
                        <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between opacity-50">
                          <div className="flex items-center gap-3">
                            <Package size={18} className="text-gray-400" />
                            <span className="text-white/60 text-sm font-medium">company_archive_2023.zip</span>
                          </div>
                          <span className="text-white/30 text-[10px]">85.2 GB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The CISA Integrity Standard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-[#1a305c]/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/2">
                   <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                      <Shield size={40} />
                   </div>
                   <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">CISA-Certified Compliance</h3>
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                      Storage Built for the Auditor’s Scrutiny.
                   </h2>
                   <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                      Drawing on my CISA-certified background, I ensure your NAS isn't just a "hard drive on the network"—it’s a compliant data vault that withstands both physical and digital threats.
                   </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Lock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Encryption at Rest</h4>
                      <p className="text-white/60">Hardware-accelerated AES-NI encryption ensures your volumes are unreadable if drives are physically stolen or compromised.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                      <History size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Immutable Snapshots</h4>
                      <p className="text-white/60">Ransomware protection that works. Even if your network is compromised, your local snapshots can "time travel" back to a clean state.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Detailed Audit Logs</h4>
                      <p className="text-white/60">Track exactly who accessed which file and when—essential for HIPAA, GDPR, and financial compliance audits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Call to Action - Customized for NAS */}
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
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Storage Architect Standby</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Ready to Own Your Data?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                  Stop trusting your business's memory to a $20/month cloud subscription. Build a permanent, high-speed foundation.
                </p>
                
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
                </div>
              </div>

              <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Storage audit requested successfully!"); }}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                    
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Current Storage Size (TB)</label>
                      <input type="number" placeholder="10" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>

                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Main Use Case</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                          <option value="" disabled className="text-gray-900 bg-white">Select a Use Case...</option>
                          <option value="backups" className="text-gray-900 bg-white">Backups</option>
                          <option value="video_editing" className="text-gray-900 bg-white">Video Editing</option>
                          <option value="vm_hosting" className="text-gray-900 bg-white">VM Hosting</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Request a Storage Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      ) : service.slug === 'professional-it-consulting' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Core Professional Pillars */}
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
                Core Professional Pillars
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">High-level expertise across three distinct consultancy buckets</span>
              </h2>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
              
              {/* I. IT Governance & Risk Management (CISA-Led) */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  I
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <ShieldAlert size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">I. IT Governance & Risk Management (CISA-Led)</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Leveraging our <span className="text-[#ff6b00] font-bold">CISA certification</span>, we provide independent, high-level audits of your IT infrastructure and internal controls. We don't just find vulnerabilities; we design the remediation roadmap to ensure your organization is resilient, compliant, and audit-ready.
                  </p>
                </div>
              </div>

              {/* II. Business Process Optimization */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  II
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Zap size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">II. Business Process Optimization</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    We analyze your "as-is" workflows to identify bottlenecks in your supply chain, financial reporting, or team productivity. Drawing on our experience with <span className="text-blue-400 font-bold">Custom ERP and CRM builds</span>, we re-engineer your processes for maximum efficiency and scalability.
                  </p>
                </div>
              </div>

              {/* III. International Operations & Entity Management */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  III
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Globe size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">III. International Operations & Entity Management</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Managing cross-border business is complex. We provide strategic support for <span className="text-[#ff6b00] font-bold">entity management, ownership transfers, and international logistics</span>. We understand the nuances of global business, ensuring your operations remain compliant and streamlined across multiple jurisdictions.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Specialized Advisory Services */}
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
                Specialized Advisory Services
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize font-sans leading-none">Executive-level leadership & strategic oversight</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Fractional CTO/CISO Services', 
                  desc: 'High-level technology leadership for firms that need executive-grade strategy without the full-time overhead.', 
                  icon: UserCheck 
                },
                { 
                  title: 'Compliance Framework Alignment', 
                  desc: 'Mapping your business to SOC2, ISO 27001, HIPAA, or PCI-DSS standards with surgical precision.', 
                  icon: FileCheck 
                },
                { 
                  title: 'Vendor & Contract Management', 
                  desc: 'Professional oversight of third-party technology providers to ensure SLA compliance and cost-efficiency.', 
                  icon: Landmark 
                },
                { 
                  title: 'Business Continuity Planning (BCP)', 
                  desc: 'Designing the "What If" scenarios for disaster recovery, data protection, and operational resilience.', 
                  icon: RefreshCcw 
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 lg:p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <item.icon size={32} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-4 tracking-tight leading-none">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed font-medium text-lg">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The "CISA & ISACA" Advantage */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="bg-gradient-to-r from-blue-900/40 via-blue-800/10 to-transparent border border-blue-500/30 rounded-[50px] p-10 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <div className="lg:w-3/5">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-10">
                    <Shield size={18} className="text-blue-400" />
                    <span className="text-blue-300 text-[11px] uppercase font-black tracking-[0.2em]">CISA Certified Authority Layer</span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-10 drop-shadow-2xl">
                    Certified Integrity. <br />
                    <span className="text-blue-400">Evidence-Based</span> Advice.
                  </h2>
                  <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12 max-w-2xl">
                    Professional services are built on trust. As an active member of the <span className="text-white font-bold italic underline decoration-blue-500/50 underline-offset-8">ISACA Austin Chapter</span> and a holder of the <span className="text-blue-400 font-bold italic">CISA (Certified Information Systems Auditor)</span> designation, my advisory is grounded in globally recognized standards of excellence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="flex items-start gap-5 group/point">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1 transition-all group-hover/point:bg-blue-500 group-hover/point:text-white shadow-lg shadow-blue-500/10">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="text-white font-black text-xl mb-2 tracking-tight uppercase">Objective Analysis</h5>
                        <p className="text-white/50 text-sm leading-relaxed font-medium">We provide unbiased, third-party evaluations of your technology and teams.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group/point">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1 transition-all group-hover/point:bg-blue-500 group-hover/point:text-white shadow-lg shadow-blue-500/10">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="text-white font-black text-xl mb-2 tracking-tight uppercase">Regulatory Fluency</h5>
                        <p className="text-white/50 text-sm leading-relaxed font-medium">We speak the language of auditors, lawyers, and stakeholders fluently.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group/point">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1 transition-all group-hover/point:bg-blue-500 group-hover/point:text-white shadow-lg shadow-blue-500/10">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="text-white font-black text-xl mb-2 tracking-tight uppercase">Ethical Standards</h5>
                        <p className="text-white/50 text-sm leading-relaxed font-medium">Our work is governed by a strict code of professional ethics and continuous professional education (CPE).</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative group/isaca scale-110">
                    <div className="absolute inset-0 bg-blue-400/20 blur-[120px] rounded-full"></div>
                    <Shield size={380} className="text-white/5 relative z-10 transform group-hover/isaca:scale-105 group-hover/isaca:rotate-1 transition-all duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <Database size={100} className="text-blue-400 mb-6 animate-pulse" />
                      <span className="text-white/20 font-black text-8xl tracking-tighter select-none drop-shadow-2xl">ISACA</span>
                      <span className="text-blue-400/40 font-black text-[10px] tracking-[0.5em] uppercase mt-4 border-t border-blue-500/20 pt-4">Austin Chapter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Delivery Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-32"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Service Delivery Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">The frameworks and tools that keep your strategy on track</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl relative group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40 relative z-10">
                <div className="p-8 lg:p-10 font-black text-white/50 uppercase tracking-[0.2em] text-xs col-span-1">Category</div>
                <div className="p-8 lg:p-10 font-black text-white/50 uppercase tracking-[0.2em] text-xs col-span-2">Frameworks & Methodology</div>
              </div>

              {[
                { category: 'Audit Standard', info: 'COBIT, NIST Cybersecurity Framework, ITIL', icon: Search },
                { category: 'Project Mgmt', info: 'Agile, Waterfall, and Lean Six Sigma Principles', icon: Layers },
                { category: 'Communication', info: 'Secure, Encrypted Portals & Professional Documentation', icon: Lock },
                { category: 'Analysis', info: 'Data-driven ROI modeling and Risk Heat Mapping', icon: LineChart }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-all relative z-10">
                  <div className="p-8 lg:px-10 lg:py-12 flex items-center gap-6 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/20 lg:bg-transparent">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <item.icon size={28} />
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight uppercase leading-none">{item.category}</span>
                  </div>
                  <div className="p-8 lg:px-10 lg:py-12 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-xl lg:text-2xl leading-relaxed font-bold tracking-tight">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Consultation CTA */}
          {/* The 4-Phase Engagement Lifecycle */}
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
                The 4-Phase Engagement Lifecycle
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
              
              {[
                { phase: '1', title: 'Strategic Discovery', desc: 'We define the scope, identify key stakeholders, and establish success metrics.' },
                { phase: '2', title: 'Gap Analysis & Audit', desc: 'A deep-dive into your current state vs. your desired "Future State" or regulatory requirement.' },
                { phase: '3', title: 'Strategy Implementation', desc: 'We execute the plan, whether it\'s an infrastructure overhaul, a compliance push, or an entity transfer.' },
                { phase: '4', title: 'Governance & Handover', desc: 'Final documentation, training, and established monitoring to ensure long-term success.' }
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

          {/* Global Logistics & Supply Chain Expertise */}
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
                      <Truck size={40} />
                   </div>
                   <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Logistics Consultancy</h3>
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                      From Austin <br />
                      <span className="text-[#ff6b00]">to the World.</span>
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-medium">
                      With deep roots in international logistics through <span className="text-white font-bold">Bloom Logistics</span>, we provide specialized consultancy for firms navigating the complexities of global supply chains. We handle the "hard parts"—regulatory compliance, transfer logistics, and operational oversight—so you can focus on growth.
                    </p>
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                   {[
                     { label: 'Regulatory Compliance', icon: ShieldCheck },
                     { label: 'Transfer Logistics', icon: Repeat },
                     { label: 'Operational Oversight', icon: Eye }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0c1a36] to-black z-0"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/20 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-16 xl:p-20 flex flex-col lg:flex-row gap-16 xl:gap-20 items-center">
              <div className="lg:w-[50%]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Executive Engagement</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8 drop-shadow-lg">
                  Ready for a <span className="text-[#ff6b00]">Higher Standard</span> of Service?
                </h2>
                <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                  Don't settle for generic advice. Partner with a professional who understands the intersection of technology, finance, and global operations.
                </p>
                
                <div className="flex gap-12 items-center">
                   <div className="flex -space-x-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#ff6b00] bg-[#1a305c] flex items-center justify-center font-black text-white text-xs z-10">B</div>
                      ))}
                   </div>
                   <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Expert Network <br/> Direct Access</p>
                </div>
              </div>

              <div className="lg:w-[50%] w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
                <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Engagement request submitted. We will contact you shortly."); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-white/40 font-black text-[11px] mb-3 block uppercase tracking-widest">Full Name</label>
                      <input type="text" placeholder="Executive Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/10 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-white/10 transition-all font-bold text-lg" required />
                    </div>
                    
                    <div>
                      <label className="text-white/40 font-black text-[11px] mb-3 block uppercase tracking-widest">Industry</label>
                      <input type="text" placeholder="Technology / Logistics" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/10 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-white/10 transition-all font-bold text-lg" required />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-white/40 font-black text-[11px] mb-3 block uppercase tracking-widest">Primary Need</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-bold text-lg appearance-none cursor-pointer" required>
                          <option value="" disabled className="text-gray-900 bg-white">Select a Requirement...</option>
                          <option value="audit" className="text-gray-900 bg-white">IT Audit & Governance</option>
                          <option value="strategy" className="text-gray-900 bg-white">Operational Strategy</option>
                          <option value="logistics" className="text-gray-900 bg-white">International Logistics</option>
                          <option value="fractional" className="text-gray-900 bg-white">Fractional Leadership (CTO/CISO)</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#ff6b00]">
                          <ChevronRight size={24} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-lg font-black uppercase tracking-widest py-6 rounded-[24px] shadow-[0_15px_40px_rgba(255,107,0,0.4)] transition-all active:scale-[0.98] flex justify-center items-center gap-4 group">
                    Book a Professional Consultation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'security-data-protection' ? (
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
      ) : service.slug === 'cloud-hosting-deployment' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Hosting & Deployment Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 mt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Our Hosting & Deployment Pillars
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">The transition from raw hardware to managed services</span>
              </h2>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
              
              {/* I. Managed Cloud Infrastructure */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  I
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Cloud size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Managed Cloud Infrastructure</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    We provide high-performance managed hosting tailored to your specific needs. Whether you require a <span className="text-[#ff6b00] font-bold italic">Private Cloud</span> on dedicated AMD EPYC hardware or a scalable <span className="text-blue-400 font-bold italic">Public Cloud</span> setup (AWS/Azure/GCP), we handle the architecture, security, and OS-level management so you don't have to.
                  </p>
                </div>
              </div>

              {/* II. Automated CI/CD Pipelines */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  II
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Zap size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Automated CI/CD Pipelines</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    Move from code to production in <span className="text-blue-400 font-bold italic">seconds, not hours</span>. We build custom Continuous Integration and Continuous Deployment (CI/CD) pipelines that automate testing and staging. This reduces human error, ensures code quality, and allows for <span className="text-[#ff6b00] font-bold underline decoration-[#ff6b00]/30 underline-offset-4">"zero-downtime"</span> updates to your live applications.
                  </p>
                </div>
              </div>

              {/* III. Containerization & Microservices */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  III
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Package size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Containerization & Microservices</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    We modernize legacy applications using <span className="text-white font-bold italic">Docker and Kubernetes</span>. By isolating services into containers, we ensure your apps run identically in development, staging, and production. This architecture allows for <span className="text-[#ff6b00] font-bold">"Elastic Scaling"</span>—automatically adding resources during traffic spikes and scaling back to save costs during quiet periods.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* High-Performance Hosting Components */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-32"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                High-Performance Hosting Components
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Integrating the full stack of delivery tools</span>
              </h2>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-3xl font-medium">
              To host enterprise applications, you need more than just "web space." We integrate specialized hardware and gateways to ensure seamless connectivity and localized edge performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Globe size={28} className="text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase tracking-widest">Ubiquiti UniFi Cloud Gateway Ultra</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">
                    For hybrid-cloud setups, this gateway provides powerful networking and security features in a compact form factor, ensuring a <span className="text-blue-400 font-bold italic">secure tunnel</span> between your local office and your cloud-hosted apps.
                  </p>
              </div>

              <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Cpu size={28} className="text-[#ff6b00]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase tracking-widest">Supermicro SuperServer 1019P-WRT</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">
                    A professional-grade 1U rackmount server perfect for <span className="text-[#ff6b00] font-bold italic text-xs">high-density web hosting</span> or as a dedicated deployment node in your data center. Optimized for mission-critical reliability.
                  </p>
              </div>
            </div>
          </motion.div>

          {/* Hardened Hosting */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-blue-400" size={28} />
                    <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">Hardened Hosting</h3>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                    Maximum Defensibility. <br />
                    <span className="text-blue-400">Total Integrity.</span>
                  </h2>
                  
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    "Uptime" is a security metric. We design hosting environments that prioritize <span className="text-white font-bold italic">Integrity and Availability</span>, ensuring your apps survive the most aggressive threat landscapes.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                  {[
                    { title: 'DDoS Protection & WAF', desc: 'Web Application Firewall (WAF) to block malicious traffic and automated DDoS mitigation to keep you online.', icon: ShieldAlert },
                    { title: 'Automated Scaling & Load Balancing', desc: 'Distribute traffic across multiple nodes, ensuring hardware failure never takes your app offline.', icon: RefreshCcw },
                    { title: 'Compliance-Ready Logging', desc: 'Full audit trails of all deployments and server access, essential for SOC2 or HIPAA cloud compliance.', icon: FileCheck }
                  ].map((feat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <feat.icon size={16} />
                        </span>
                        {feat.title}
                      </h4>
                      <p className="text-white/50 ml-11 text-xs leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Stack & Supported Platforms */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-32 mt-32"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Technical Stack & Supported Platforms
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Our versatility across different enterprise environments</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] overflow-hidden shadow-2xl relative group">
              {/* Header */}
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/40">
                <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-1">Category</div>
                <div className="p-8 lg:p-10 font-black text-white/30 uppercase tracking-[0.2em] text-xs col-span-2">Supported Tech & Platforms</div>
              </div>

              {[
                { cat: 'Cloud Providers', stack: 'AWS, Microsoft Azure, Google Cloud, DigitalOcean, Railway', icon: Cloud },
                { cat: 'Virtualization', stack: 'Proxmox VE, VMware vSphere, Docker, Kubernetes', icon: Layers },
                { cat: 'Automation', stack: 'GitHub Actions, GitLab CI, Jenkins, Ansible', icon: Shuffle },
                { cat: 'Web Servers', stack: 'Nginx, Apache, LiteSpeed (LSCache optimized)', icon: Zap }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/11 transition-all group/row">
                  <div className="p-8 lg:px-10 lg:py-10 flex items-center gap-6 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/20 lg:bg-transparent">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover/row:scale-110 transition-transform">
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

          {/* The 4-Phase Deployment Roadmap */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                The 4-Phase Deployment Roadmap
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Our strategic path to 99.99% uptime</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[30px] left-10 w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-blue-500 to-[#ff6b00] z-0"></div>
              
              {/* Phase 1 */}
              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">Architecture Audit</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">We analyze your app’s resource consumption and traffic patterns to choose the right hosting tier.</p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative z-10 flex flex-col items-center text-center gap-6 mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">Environment Provisioning</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">Setting up the <span className="text-[#ff6b00] font-bold">"Golden Image"</span> for your servers, including security hardening and dependency management.</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative z-10 flex flex-col items-center text-center gap-6 mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">Pipeline Integration</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">Building the automated <span className="text-blue-400 font-bold">"Bridge"</span> between your developers' code and the live server.</p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative z-10 flex flex-col items-center text-center gap-6 mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">24/7 Monitoring</h4>
                  <p className="text-white/60 leading-relaxed font-medium text-sm">Real-time alerts for CPU, Memory, and Latency, ensuring we fix issues <span className="text-blue-400 font-bold">proactively</span>.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Call to Action - specialized for Cloud Hosting */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0c1a36] z-0"></div>
            
            {/* Background patterns */}
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-[50%]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Global Data Delivery</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Ready for a Faster, <br />
                  <span className="text-[#ff6b00]">More Reliable App?</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                  Don't let poor hosting be the bottleneck for your business. Let’s build an infrastructure that can handle your next million users.
                </p>
                
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500/20 rounded-full"></div>
                </div>
              </div>

              <div className="lg:w-[50%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative overflow-hidden group/form">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full pointer-events-none group-hover/form:scale-150 transition-transform duration-700"></div>
                
                <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Deployment plan requested! Our engineers will contact you shortly."); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                      <input type="text" placeholder="John Doe" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium text-sm" />
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">App Type</label>
                      <div className="relative">
                        <select defaultValue="" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer text-sm">
                          <option value="" disabled className="text-gray-900 bg-white">Select Type...</option>
                          <option value="web" className="text-gray-900 bg-white">Web App</option>
                          <option value="mobile" className="text-gray-900 bg-white">Mobile Backend</option>
                          <option value="ecommerce" className="text-gray-900 bg-white">E-commerce</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                          <ChevronRight size={14} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Current Provider</label>
                      <input type="text" placeholder="e.g. AWS/Azure" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium text-sm" />
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Monthly Traffic</label>
                      <input type="text" placeholder="e.g. 500k reqs" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all font-medium text-sm" />
                    </div>
                  </div>

                  <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white text-[13px] font-black uppercase tracking-[0.2em] py-5 rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Request a Deployment Plan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'security-data-protection' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Our Defense-in-Depth Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 mt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Our Defense-in-Depth Strategy
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Multi-layered security that protects your "Crown Jewels"</span>
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
                      <Globe size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Perimeter & Network Hardening</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    We build <span className="text-[#ff6b00] font-bold underline decoration-[#ff6b00]/30 underline-offset-4">"Invisible" networks</span>. Utilizing Next-Gen Firewalls (NGFW), Intrusion Prevention Systems (IPS), and strict VLAN segmentation, we ensure that even if one device is compromised, the rest of your infrastructure remains an island.
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
                    <h3 className="text-2xl font-bold text-white tracking-tight">Identity & Access Management (IAM)</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    Identity is the new perimeter. We implement <span className="text-blue-400 font-bold italic">Zero Trust architectures</span> where no user or device is trusted by default. Utilizing <span className="text-[#ff6b00] font-bold">FIDO2-compliant MFA</span> and adaptive access policies, we ensure only the right people have access to the right data at the right time.
                  </p>
                </div>
              </div>

              {/* III. Data Sovereignty & Protection */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  III
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Database size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Data Sovereignty & Protection</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-white/70 leading-relaxed text-lg font-medium">
                      Utilizing <span className="text-[#ff6b00] font-bold italic text-xs">AES-256 and TLS 1.3 standards</span> to ensure that even if data is intercepted, it remains unreadable.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <li className="flex gap-2 text-white/50 text-sm italic font-bold">
                         <span className="text-[#ff6b00] tracking-tighter">●</span> Immutable Backups (Ransomware Proof)
                       </li>
                       <li className="flex gap-2 text-white/50 text-sm italic font-bold">
                         <span className="text-[#ff6b00] tracking-tighter">●</span> Data Loss Prevention (DLP Monitoring)
                       </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* The CISA Advantage */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="text-blue-400" size={28} />
                    <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">The "CISA Advantage": Audit & Compliance</h3>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                    Security That <br />
                    <span className="text-blue-400">Passes the Audit.</span>
                  </h2>
                  
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    As a CISA-certified professional, I don't just "secure" your network; I make it auditable. We align your infrastructure with global standards, ensuring you are ready for any regulatory hurdle.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                  {[
                    { title: 'Vulnerability Assessments', desc: 'Regular scanning of server-grade hardware (AMD EPYC/Gigabyte) to preempt exploits.', icon: Search },
                    { title: 'Compliance Mapping', desc: 'Mapping your IT infrastructure to NIST, SOC2, HIPAA, or PCI-DSS frameworks.', icon: FileCheck },
                    { title: 'Regulatory Reporting', desc: 'Detailed security reports for stakeholders, auditors, and board-level review.', icon: FileText }
                  ].map((feat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <feat.icon size={16} />
                        </span>
                        {feat.title}
                      </h4>
                      <p className="text-white/50 ml-11 text-xs leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 4-Phase Security Lifecycle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                The 4-Phase Security Lifecycle
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Our continuous improvement loop for Absolute Resilience</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[30px] left-10 w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-blue-500 to-[#ff6b00] z-0"></div>
              
              {[
                { n: 1, title: 'Threat Modeling', desc: 'We identify your most "at-risk" assets and likely attack vectors.', icon: ShieldAlert },
                { n: 2, title: 'Implementation', desc: 'We deploy the "Shield"—firewalls, MFA, and military-grade encryption.', icon: Lock },
                { n: 3, title: 'Continuous Monitoring', desc: '24/7 logging and automated alerts for suspicious behavior (Impossible Travel).', icon: Search },
                { n: 4, title: 'Governance & Review', desc: 'Quarterly security reviews and policy updates to stay ahead of new exploit trends.', icon: RefreshCcw }
              ].map((phase, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#102a43] to-[#0c1a36] border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                    {phase.n}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-tighter uppercase">{phase.title}</h4>
                    <p className="text-white/60 leading-relaxed font-medium text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Awareness Training */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
            <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-2/3">
                 <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 border border-white/10 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                    <Users size={40} />
                 </div>
                 <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Proactive "Human Firewalls"</h3>
                 <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    Security Awareness <br />
                    <span className="text-blue-400">Training.</span>
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium">
                    90% of breaches start with human error. We provide managed Phishing Simulations and security training, turning your employees from your biggest risk into your strongest line of defense.
                  </p>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                 <div className="relative overflow-hidden rounded-3xl border border-white/10 p-4 bg-white/5 backdrop-blur-md">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <Brain size={180} className="text-white/10 relative z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-24 h-24 bg-blue-500/20 rounded-full animate-ping"></div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'custom-websites-design' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24 relative"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#ff6b00]/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="text-[#ff6b00]" size={16} />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Conversion-First Design</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8">
              Bespoke Digital Experiences. <br />
              <span className="bg-gradient-to-r from-[#ff6b00] to-[#cc4400] bg-clip-text text-transparent">Engineered to Convert.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-12 font-medium">
              We don't just build websites; we build high-performance business tools. From lightning-fast architecture to immersive UI/UX, we create digital storefronts and corporate portals that reflect the prestige of your brand.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_20px_50px_rgba(255,107,0,0.3)] flex items-center gap-3 active:scale-95 transition-all"
              >
                Start Your Project <Rocket size={20} />
              </button>
              <Link 
                to="/portfolio"
                className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-md"
              >
                View Our Portfolio <Eye size={20} className="text-[#ff6b00]" />
              </Link>
            </div>
          </motion.div>

          {/* Design Philosophy Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 mt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Our Design Philosophy: The Three Pillars
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">A balance of Art, Science, and Strategy</span>
              </h2>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
              
              {/* I. High-Fidelity UI/UX Design */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  I
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <PenTool size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">High-Fidelity UI/UX Design</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    Utilizing industry-leading creative stacks (including <span className="text-[#ff6b00] font-bold italic">Canva Enterprise</span> and <span className="text-blue-400 font-bold italic text-xs">Freepik Premium</span> assets), we craft visual identities that stand out. We focus on <span className="text-white font-black underline decoration-[#ff6b00]/30 underline-offset-4">"User Intent,"</span> ensuring that every pixel serves a purpose and every click leads to a conversion.
                  </p>
                </div>
              </div>

              {/* II. Performance-Driven Engineering */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  II
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Zap size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Performance-Driven Engineering</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    A beautiful site is useless if it’s slow. We build on clean, bloat-free code optimized for <span className="text-blue-400 font-bold italic">Core Web Vitals</span>. Whether it’s a headless Shopify build or a custom React application, we ensure <span className="text-[#ff6b00] font-bold">sub-second load times</span> and flawless mobile responsiveness.
                  </p>
                </div>
              </div>

              {/* III. SEO & Content Strategy */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  III
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Search size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">SEO & Content Strategy</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-medium">
                    We bake Search Engine Optimization into the foundation. From schema markup to metadata architecture, we ensure your site isn't just live—it’s discoverable. We leverage <span className="text-blue-400 font-bold">Advanced AI (Anthropic/Claude)</span> to help refine messaging that resonates with your specific target audience.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* Specialized Web Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 lg:mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                Specialized Web "Engines"
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">Bespoke architectures for distinct business objectives</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'E-Commerce Powerhouses', 
                  desc: 'Custom Shopify Plus and WooCommerce integrations designed for high-volume transactions and seamless checkout flows.',
                  icon: ShoppingBag 
                },
                { 
                  title: 'Corporate Identity Hubs', 
                  desc: 'Professional, multi-page architectures for firms that need to project authority, trust, and enterprise-grade reliability.',
                  icon: Building2 
                },
                { 
                  title: 'Custom Web Applications', 
                  desc: 'Bespoke portals, secure member areas, and internal operational tools built to solve specific business bottlenecks.',
                  icon: Terminal 
                },
                { 
                  title: 'Landing Page Optimization', 
                  desc: 'High-converting "Lead Gen" engines designed for specific ad campaigns, tracking, and maximum ROI from PPC/Social spend.',
                  icon: MousePointer2 
                }
              ].map((engine, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all hover:scale-[1.02] group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00]/20 to-[#ff6b00]/5 rounded-2xl flex items-center justify-center text-[#ff6b00] mb-6 border border-[#ff6b00]/20 group-hover:scale-110 transition-transform">
                    <engine.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{engine.title}</h3>
                  <p className="text-white/60 leading-relaxed font-medium">
                    {engine.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Technical Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 lg:mt-32"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                The Technical Tech Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">No templates. Just professional engineering.</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group mb-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1 border-r border-white/5">Category</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Toolset</div>
              </div>

              {[
                { cat: 'Platforms', tools: 'Shopify Plus, WordPress (Headless), Webflow', icon: Layers },
                { cat: 'Frontend', tools: 'React.js, Next.js, Tailwind CSS', icon: Code2 },
                { cat: 'Creative', tools: 'Canva, Adobe Suite, Freepik Assets', icon: Palette },
                { cat: 'Intelligence', tools: 'AI-Driven Copywriting & Optimization (Claude/GPT-4)', icon: BrainCircuit },
                { cat: 'Hosting', tools: 'High-Performance Cloud (AWS / Google Cloud / Vercel)', icon: CloudFog }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 lg:border-r bg-black/10 lg:bg-transparent">
                    <row.icon className="text-[#ff6b00]" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">{row.cat}</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">
                      {row.tools}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* The "Full Lifecycle" Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 lg:mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                The "Full Lifecycle" Process
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal capitalize">A systematic approach from strategy to optimization</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative px-4 md:px-0">
              <div className="hidden md:block absolute top-[30px] left-10 w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
              
              {[
                { 
                  n: 1, 
                  title: 'Strategy & Wireframing', 
                  desc: 'We map out the user journey before we ever touch a line of code.', 
                  icon: Layout 
                },
                { 
                  n: 2, 
                  title: 'Creative Concepting', 
                  desc: 'Delivering high-fidelity mockups that bring your brand’s personality to life.', 
                  icon: Palette 
                },
                { 
                  n: 3, 
                  title: 'Development & Integration', 
                  desc: 'Building the backend, integrating APIs (CRM, Email, Payments), and ensuring security.', 
                  icon: Code2 
                },
                { 
                  n: 4, 
                  title: 'Launch & Optimization', 
                  desc: 'Post-launch heat-mapping, A/B testing, and continuous performance tuning.', 
                  icon: Rocket 
                }
              ].map((phase, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {phase.n}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6b00] transition-colors">{phase.title}</h4>
                    <p className="text-white/60 leading-relaxed font-medium text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Advantage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-[#0c1a36]/80 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <CloudFog className="text-blue-400" size={28} />
                    <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">The Infrastructure Advantage</h3>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-6">
                    Websites Supported by <br />
                    <span className="text-blue-400">Enterprise Infrastructure.</span>
                  </h2>
                  
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    Most designers leave you to figure out hosting on your own. Because we specialize in IT Infrastructure and Network Design, your website is hosted on enterprise-grade server environments. We manage the DNS, SSL certificates, and Server-Side Caching, ensuring your digital presence is as stable as your physical office network.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                  {[
                    { title: 'Server-Side Caching', desc: 'Object caching and page-level optimization for sub-second speeds.', icon: Zap },
                    { title: 'Global CDN Integration', desc: 'Edge delivery ensuring your content is fast from New York to Tokyo.', icon: Globe },
                    { title: 'Managed SSL/DNS', desc: 'Enterprise-grade certificate management and DDoS-protected DNS.', icon: ShieldCheck }
                  ].map((feat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <feat.icon size={16} />
                        </span>
                        {feat.title}
                      </h4>
                      <p className="text-white/50 ml-11 text-xs leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance & Accessibility */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 mb-10"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 border border-white/10 rounded-2xl shadow-lg flex items-center justify-center text-white mb-6">
                  <Shield size={48} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">
                  Compliance & <span className="text-[#ff6b00]">Accessibility</span>
                </h3>
              </div>
              <div className="lg:w-2/3">
                <h4 className="text-2xl font-bold text-white mb-6">Inclusive & Secure by Design.</h4>
                <p className="text-lg text-white/70 leading-relaxed font-medium mb-8">
                  Drawing on our <span className="text-[#ff6b00] font-bold">CISA-certified</span> background, we ensure your website meets modern security standards. From GDPR/CCPA compliance to ADA accessibility (WCAG 2.1), we protect your business from liability while ensuring every user has a premium experience.
                </p>
                <div className="flex flex-wrap gap-4">
                   <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">WCAG 2.1 Compliant</span>
                   <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">GDPR / CCPA Ready</span>
                   <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">SSL/TLS 1.3 Hardened</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Updated Footer CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Ready to Build Your Digital Flagship?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10">
                  Don't settle for a template. Build a custom digital experience that scales with your ambition. Build something that converts.
                </p>
                
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl">
                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Quote request sent!"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 transition-all font-medium" />
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Website URL (if existing)</label>
                      <input type="text" placeholder="https://..." className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Project Type</label>
                      <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-medium appearance-none">
                        <option value="ecommerce">E-commerce Powerhouse</option>
                        <option value="corporate">Corporate Identity Hub</option>
                        <option value="webapp">Custom Web App</option>
                        <option value="landing">Landing Page Optimization</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Budget Range</label>
                      <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 transition-all font-medium appearance-none">
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k+">$50k+</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_20px_40px_rgba(255,107,0,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3">
                    Get a Custom Quote <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'av-smart-workspaces' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Service Pillars: <span className="text-[#ff6b00]">Core Expertise</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">High-Performance Networking</h3>
                <p className="text-white/70 leading-relaxed">
                  We don't just "plug in" routers. We engineer high-availability topologies. Our designs eliminate single points of failure, utilizing SD-WAN, BGP routing, and L3 switching to ensure your data moves at wire-speed without congestion.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Server & Storage Infrastructure</h3>
                <p className="text-white/70 leading-relaxed">
                  Leveraging enterprise-grade compute power, we design server environments optimized for virtualization. Whether you require AMD EPYC-based high-density compute clusters or high-availability SAN/NAS storage for massive data sets, we ensure your applications have the resources they need to thrive.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform">
                  <Cloud size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hybrid & Multi-Cloud Strategy</h3>
                <p className="text-white/70 leading-relaxed">
                  Bridging the gap between on-premise reliability and cloud scalability. We specialize in secure Site-to-Site VPNs and Direct Connect pathways, allowing your local infrastructure to scale seamlessly into AWS, Azure, or GCP environments.
                </p>
              </div>
            </div>
          </div>

          {/* The Anatomy of Our Design */}
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
                  The Anatomy of Our Design
                  <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Technical Detail</span>
                </h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ff6b00]/10 to-transparent rounded-tr-full pointer-events-none"></div>

                <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-3xl relative z-10 font-medium">
                  To give the page "weight," we break down the layers of our builds:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                  {/* The Edge */}
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                      <Shield size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-wide">The Edge</h4>
                      <p className="text-white/60 leading-relaxed">
                        Implementation of Next-Generation Firewalls <span className="text-[#ff6b00]/90 font-semibold">(NGFW)</span> with deep packet inspection and Zero Trust Access.
                      </p>
                    </div>
                  </div>

                  {/* The Core */}
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                      <Zap size={24} className="text-[#ff6b00]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-wide">The Core</h4>
                      <p className="text-white/60 leading-relaxed">
                        <span className="text-[#ff6b00]/90 font-semibold">10GbE to 100GbE</span> backbone routing designed for low latency and high throughput.
                      </p>
                    </div>
                  </div>

                  {/* The Access Layer */}
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                      <Globe size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-wide">The Access Layer</h4>
                      <p className="text-white/60 leading-relaxed">
                        Managed <span className="text-[#ff6b00]/90 font-semibold">Wi-Fi 6E/7</span> ecosystems with intelligent VLAN segmentation for Guest, IoT, and Corporate traffic.
                      </p>
                    </div>
                  </div>

                  {/* The Physical Layer */}
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 group-hover:-translate-y-1 transition-transform">
                      <Cpu size={24} className="text-[#ff6b00]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-wide">The Physical Layer</h4>
                      <p className="text-white/60 leading-relaxed">
                        Precision-engineered structured cabling <span className="text-[#ff6b00]/90 font-semibold">(Cat6a/Fiber)</span>, rack optimization, and redundant UPS power management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Compliance & Audit Advantage */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 lg:mt-32"
            >
              <div className="bg-gradient-to-br from-[#0c1a36]/80 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-blue-400" size={28} />
                      <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm">The Compliance & Audit Advantage</h3>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-6">
                      Infrastructure Built with an Auditor’s Eye.
                    </h2>
                    
                    <p className="text-lg text-white/80 leading-relaxed font-medium">
                      Most designers build for <span className="text-white italic">"connectivity."</span> We build for compliance. Drawing on our CISA-certified expertise, every network we design is pre-hardened for IT audits. We integrate security at the architectural level, ensuring your infrastructure meets strict standards like <span className="text-blue-300 font-bold">SOC2, HIPAA, or PCI-DSS</span> from Day 1.
                    </p>
                  </div>

                  <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                    {/* Log Management */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <CheckCircle2 size={16} />
                        </span>
                        Log Management
                      </h4>
                      <p className="text-white/70 ml-11">Centralized SIEM integration for full visibility.</p>
                    </div>

                    {/* Disaster Recovery */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <CheckCircle2 size={16} />
                        </span>
                        Disaster Recovery
                      </h4>
                      <p className="text-white/70 ml-11">Automated off-site backups with verified RPO/RTO targets.</p>
                    </div>

                    {/* Network Hardening */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <CheckCircle2 size={16} />
                        </span>
                        Network Hardening
                      </h4>
                      <p className="text-white/70 ml-11">Port security, MAC filtering, and automated patch management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Systems & Tech Stack */}
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
                  Systems & Tech Stack
                  <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">A quick-reference table to show our technical breadth</span>
                </h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
                
                {/* Header */}
                <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                  <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Category</div>
                  <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Specialized Systems</div>
                </div>

                {/* Network Gear */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                    <Globe className="text-[#ff6b00]" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">Network Gear</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Cisco Catalyst, Ubiquiti UniFi, Juniper Networks, Mikrotik</p>
                  </div>
                </div>

                {/* Virtualization */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                    <Cloud className="text-blue-400" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">Virtualization</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Proxmox VE, VMware vSphere, Microsoft Hyper-V</p>
                  </div>
                </div>

                {/* Compute Hardware */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                    <Cpu className="text-[#ff6b00]" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">Compute Hardware</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">AMD EPYC & Intel Xeon Platforms, Gigabyte/Supermicro Server Chassis</p>
                  </div>
                </div>

                {/* Security/Firewall */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                    <Shield className="text-blue-400" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">Security / Firewall</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">pfSense, Fortinet, SonicWall, Palo Alto Networks</p>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                    <Zap className="text-[#ff6b00]" size={24} />
                    <span className="text-xl font-bold text-white tracking-wide">Monitoring</span>
                  </div>
                  <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Zabbix, Grafana, PRTG, SNMP-based Real-time Alerts</p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* The 4-Phase Implementation Lifecycle */}
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
                  The 4-Phase Implementation Lifecycle
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-blue-500 z-0"></div>
                
                {/* Phase 1 */}
                <div className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Discovery & Audit</h4>
                    <p className="text-white/60 leading-relaxed font-medium">We analyze your current traffic patterns, hardware lifecycles, and business bottlenecks.</p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Logic & Topology Design</h4>
                    <p className="text-white/60 leading-relaxed font-medium">We produce detailed network diagrams and hardware manifests before a single cable is run.</p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Deployment & Integration</h4>
                    <p className="text-white/60 leading-relaxed font-medium">Physical installation, configuration of "Golden Images" for servers, and seamless cut-over to minimize downtime.</p>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative z-10 flex flex-col items-start gap-6 bg-black/20 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-transparent mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-2xl shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Optimization & Handover</h4>
                    <p className="text-white/60 leading-relaxed font-medium">Stress testing under load and training your internal team on the new management dashboards.</p>
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
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Solutions Architect Standby</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                    Is Your Network Holding You Back?
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                    Don't let aging hardware or poorly planned subnets throttle your growth. Let's build a foundation that scales.
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
                        <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Company</label>
                        <input type="text" placeholder="Acme Corp" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                      </div>

                      <div>
                        <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Current Pain Point</label>
                        <div className="relative">
                          <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                            <option value="" disabled className="text-gray-900 bg-white">Select a Pain Point...</option>
                            <option value="connectivity" className="text-gray-900 bg-white">Connectivity</option>
                            <option value="security" className="text-gray-900 bg-white">Security</option>
                            <option value="scaling" className="text-gray-900 bg-white">Scaling</option>
                            <option value="migration" className="text-gray-900 bg-white">Migration</option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                            <ChevronRight size={18} className="rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                      Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : service.slug === 'rack-and-roll-services' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* End-to-End Deployment Lifecycle */}
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
                End-to-End Deployment Lifecycle
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Minimizing your "Time-to-Live" with precision execution</span>
              </h2>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
              
              {/* 1. Logistics & Receiving */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Package size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Logistics & Receiving</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">
                    We receive your shipments (Servers, Switches, Storage Arrays, PDUs) and verify all components against the Bill of Materials (BOM).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Eye size={16} className="text-[#ff6b00]" /> Inspection & Inventory
                      </h4>
                      <p className="text-white/60 text-xs">Verify all components against BOM specifications</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <FileCheck size={16} className="text-[#ff6b00]" /> Asset Tagging
                      </h4>
                      <p className="text-white/60 text-xs">Custom asset management labels for lifecycle tracking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Precision Rack Integration */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Layout size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Precision Rack Integration</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">
                    We don't just place servers in racks; we engineer an environment for maximum performance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Target size={16} className="text-blue-400" /> Strategic Placement
                      </h4>
                      <p className="text-white/60 text-xs">U-space mapping to optimize heat dissipation</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Sliders size={16} className="text-blue-400" /> Rail Kit Installation
                      </h4>
                      <p className="text-white/60 text-xs">Heavy-duty sliding rails for 1U to 4U+ chassis</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Zap size={16} className="text-blue-400" /> PDU & UPS Integration
                      </h4>
                      <p className="text-white/60 text-xs">Redundant, clean power distribution</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Professional Structured Cabling */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                      <Network size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Professional Structured Cabling</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">
                    A "BloomTech Rack" is identifiable by its organization. We eliminate "cable spaghetti" to ensure easy maintenance and superior airflow.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Palette size={16} className="text-[#ff6b00]" /> Color-Coded Patching
                      </h4>
                      <p className="text-white/60 text-xs">Standardized schemes for Data, Management & Power</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Repeat size={16} className="text-[#ff6b00]" /> Velcro Management
                      </h4>
                      <p className="text-white/60 text-xs">Premium fasteners protecting high-speed cables</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <FileText size={16} className="text-[#ff6b00]" /> End-to-End Labels
                      </h4>
                      <p className="text-white/60 text-xs">Every cable labeled at source and destination</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Basic Configuration & Burn-In */}
              <div className="relative group">
                <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                  4
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Terminal size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Basic Configuration & "Burn-In"</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">
                    Every component is tested and configured before handover to ensure immediate operational readiness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Activity size={16} className="text-blue-400" /> POST Verification
                      </h4>
                      <p className="text-white/60 text-xs">Verify boot and accurate RAM/CPU counts</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <RefreshCcw size={16} className="text-blue-400" /> Firmware Updates
                      </h4>
                      <p className="text-white/60 text-xs">Latest stable BIOS, NICs, and RAID controllers</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <Monitor size={16} className="text-blue-400" /> IPMI/OOB Setup
                      </h4>
                      <p className="text-white/60 text-xs">Configure iDRAC/iLO for remote management</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Why Choose BloomTech for Rack & Roll */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
            <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 p-10 lg:p-16">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 mx-auto">
                  <Truck size={40} />
                </div>
                <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Professional Excellence</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Why Choose BloomTech for Rack & Roll?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                      <CloudFog size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Optimized Airflow (Hot/Cold Aisle)</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    We adhere to ASHRAE standards for data center cooling, ensuring your hardware doesn't throttle or fail prematurely due to heat.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Cpu size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">AMD EPYC & High-Density Expertise</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Specialized experience with server-grade components, including high-core-count AMD EPYC motherboards and specialized server cooling solutions.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Network+ Certified Integration</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Our cable runs aren't just neat; they are technically sound, meeting all Category 6 and Fiber Optic transmission standards.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Reduced Downtime</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    By pre-staging and "racking" equipment efficiently, we reduce your on-site deployment time by up to 40%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deployment Options */}
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
                Deployment Options
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Choose the service level that fits your needs</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
              {/* Table Header */}
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Service Level</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Best For</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Includes</div>
              </div>
              
              {/* Table Rows */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors">
                <div className="p-6 lg:p-8">
                  <p className="font-bold text-lg text-white mb-2 lg:mb-0">Physical Rack</p>
                  <p className="text-white/40 text-xs lg:hidden">Fast hardware mounting</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/60 text-sm lg:text-base">Fast hardware mounting</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/80 font-medium text-sm lg:text-base">Rack, Stack, and Power</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors">
                <div className="p-6 lg:p-8">
                  <p className="font-bold text-lg text-white mb-2 lg:mb-0">Full Integration</p>
                  <p className="text-white/40 text-xs lg:hidden">Turnkey server rooms</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/60 text-sm lg:text-base">Turnkey server rooms</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/80 font-medium text-sm lg:text-base">Rack, Stack, Cable Management, and Labeling</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/5 transition-colors">
                <div className="p-6 lg:p-8">
                  <p className="font-bold text-lg text-white mb-2 lg:mb-0">The "Roll-In"</p>
                  <p className="text-white/40 text-xs lg:hidden">Large-scale expansion</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/60 text-sm lg:text-base">Large-scale expansion</p>
                </div>
                <div className="px-6 pb-6 lg:p-8">
                  <p className="text-white/80 font-medium text-sm lg:text-base">Pre-configured rack delivery and final network uplink</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
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
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Austin Deployment Team Ready</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Modernize Your Server Room Today
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                  Don't let messy cabling or poor rack planning slow down your enterprise. Contact the BloomTech Austin team for a professional deployment quote.
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
                    <h3 className="text-2xl font-black text-white mb-2">Professional Deployment Quote</h3>
                    <p className="text-white/60 text-sm">Get your rack infrastructure done right</p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 size={18} className="text-[#ff6b00]" />
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Office</p>
                        <p className="text-white font-medium text-sm">11801 Domain Blvd, Austin, TX 78758</p>
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
                        <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Web</p>
                        <p className="text-white font-medium text-sm">bloomtechus.com</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                  >
                    Request Deployment Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : service.slug === 'custom-ai-hardware' ? (
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          
          {/* The Cloud Repatriation Opportunity */}
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
                The Cloud Repatriation Opportunity
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Why enterprises are bringing AI compute back on-premise</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group mb-16">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                    Why Pay <span className="text-[#ff6b00]">Per Token</span> Forever?
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed font-medium mb-8">
                    Cloud AI services like OpenAI and Anthropic charge based on usage—every API call, every token processed. For businesses running AI at scale, these costs compound rapidly. Our solution? <span className="text-[#ff6b00] font-bold">Bring the compute power in-house</span> with custom-built AI hardware that you own outright.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 shrink-0 mt-1">
                        <AlertTriangle size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">The Cloud AI Tax</h4>
                        <p className="text-white/60 text-sm">Running AI in the cloud = ongoing monthly costs that scale with usage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 shrink-0 mt-1">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">On-Premise ROI</h4>
                        <p className="text-white/60 text-sm">One-time hardware investment that pays for itself within 12-18 months</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Cost Comparison</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-white/60 text-sm font-medium">Cloud AI (Monthly)</span>
                          <span className="text-red-400 font-black text-2xl">$3,500</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-red-500/50"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-white/60 text-sm font-medium">Custom Hardware (Amortized)</span>
                          <span className="text-green-400 font-black text-2xl">$800</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[23%] h-full bg-green-500/50"></div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[#ff6b00] font-bold text-lg">77% Cost Reduction</p>
                        <p className="text-white/40 text-xs">After 18 months of use</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Hardware Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 mt-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Core Hardware Solutions
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Purpose-built AI compute for every workload</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* LLM Inference Nodes */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Brain size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">LLM Inference Nodes</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">High-VRAM GPU workstations optimized for running Llama, Claude, or GPT models locally with blazing-fast token generation.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-[#ff6b00]" /> 48GB+ VRAM GPUs
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-[#ff6b00]" /> PCIe 5.0 Bandwidth
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-[#ff6b00]" /> Liquid Cooling Systems
                  </div>
                </div>
              </div>

              {/* Training & Fine-Tuning Clusters */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Training & Fine-Tuning Clusters</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">Multi-GPU systems designed for parallel processing with NVLink bridges for model training and domain-specific fine-tuning.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-blue-400" /> 4-8 GPU Configurations
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-blue-400" /> NVLink/SXM Bridges
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-blue-400" /> Enterprise NVMe RAID
                  </div>
                </div>
              </div>

              {/* Edge AI Appliances */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Edge AI Appliances</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">Compact, power-efficient systems for deploying AI at remote locations with low-latency inference requirements.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-white" /> Fanless Cooling
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-white" /> NVIDIA Jetson/Orin
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                    <CheckCircle2 size={16} className="text-white" /> Low Power (50W-150W)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Hardware Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-32"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                The Hardware Stack
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Professional-grade components for 24/7 AI workloads</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Component</div>
                <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Selection</div>
              </div>

              {/* GPUs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Cpu className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">GPUs</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">NVIDIA RTX 4090, A6000, H100 (48GB-80GB VRAM)</p>
                </div>
              </div>

              {/* CPUs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Activity className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">CPUs</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">AMD Threadripper PRO, Intel Xeon W-Series</p>
                </div>
              </div>

              {/* Memory */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Database className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Memory</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">256GB-512GB ECC DDR5 (5600MT/s+)</p>
                </div>
              </div>

              {/* Storage */}
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <Package className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Storage</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Gen4/Gen5 NVMe SSDs in RAID 0/1/10</p>
                </div>
              </div>

              {/* Cooling */}
              <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                  <CloudFog className="text-[#ff6b00]" size={24} />
                  <span className="text-xl font-bold text-white tracking-wide">Cooling</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center col-span-2">
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Custom AIO Liquid Cooling, Server-Grade Fans</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                Real-World Use Cases
                <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Industries leveraging on-premise AI hardware</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Landmark size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Financial Services</h3>
                </div>
                <p className="text-white/60 text-lg mb-6 leading-relaxed">Running fraud detection models on-premise to maintain data sovereignty and avoid cloud exposure of sensitive financial transactions.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Zero Data Leakage
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Healthcare & Research</h3>
                </div>
                <p className="text-white/60 text-lg mb-6 leading-relaxed">Processing medical imaging and patient data locally to comply with HIPAA regulations while leveraging AI diagnostics.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> HIPAA Compliant
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Video size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Media & Creative</h3>
                </div>
                <p className="text-white/60 text-lg mb-6 leading-relaxed">Real-time video processing, AI-powered editing, and generative content creation without cloud render farms.</p>
                <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Instant Rendering
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Manufacturing & IoT</h3>
                </div>
                <p className="text-white/60 text-lg mb-6 leading-relaxed">Edge AI for predictive maintenance, quality control vision systems, and real-time anomaly detection on the factory floor.</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Low Latency Edge
                </div>
              </div>
            </div>
          </motion.div>

          {/* The CISA Advantage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 mb-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
            <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-2/3">
                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 border border-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                    <ShieldCheck size={40} />
                 </div>
                 <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Security & Data Sovereignty</h3>
                 <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                    AI You Own. <br />
                    <span className="text-blue-400">Data That Stays Yours.</span>
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed font-medium mb-10">
                    As a CISA-certified professional, I ensure your on-premise AI infrastructure isn't just powerful—it's secure. Every system is hardened at the BIOS level, with TPM 2.0 encryption and air-gapped options for the most sensitive workloads.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Lock size={18} className="text-blue-400" />
                        <h4 className="text-lg font-bold text-white">Full Encryption</h4>
                      </div>
                      <p className="text-white/60 text-sm">Hardware-accelerated AES-NI at rest and in transit</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <History size={18} className="text-blue-400" />
                        <h4 className="text-lg font-bold text-white">Audit Trails</h4>
                      </div>
                      <p className="text-white/60 text-sm">Complete logging of all model queries and data access</p>
                    </div>
                  </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <Cpu size={200} className="text-white/10 relative z-10" />
                    <Shield size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0c1a36] z-0"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/40 to-transparent pointer-events-none z-0 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-[55%]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">AI Hardware Specialist Standby</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                  Ready to Own Your AI Infrastructure?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                  Stop paying per token. Build a custom AI hardware solution that pays for itself and keeps your data sovereign.
                </p>
                
                <div className="flex gap-2 items-center">
                  <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
                </div>
              </div>

              <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Hardware spec request submitted!"); }}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                    </div>
                    
                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Primary AI Workload</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                          <option value="" disabled className="text-gray-900 bg-white">Select Workload...</option>
                          <option value="inference" className="text-gray-900 bg-white">LLM Inference</option>
                          <option value="training" className="text-gray-900 bg-white">Model Training</option>
                          <option value="edge" className="text-gray-900 bg-white">Edge AI</option>
                          <option value="rendering" className="text-gray-900 bg-white">AI Rendering</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Budget Range</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                          <option value="" disabled className="text-gray-900 bg-white">Select Budget...</option>
                          <option value="15k-30k" className="text-gray-900 bg-white">$15k - $30k</option>
                          <option value="30k-60k" className="text-gray-900 bg-white">$30k - $60k</option>
                          <option value="60k-100k" className="text-gray-900 bg-white">$60k - $100k</option>
                          <option value="100k+" className="text-gray-900 bg-white">$100k+</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group">
                    Request Hardware Spec <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ) : null}

      {/* Simple Footer for the page */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-20 relative z-10 py-12">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center overflow-hidden">
               <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              BloomTech<span className="text-[#ff6b00]">USA</span>
            </span>
          </div>
          <p className="text-white/50 font-medium text-sm md:text-base">© 2026 BloomTechUSA. All rights reserved.</p>
        </div>
      </footer>

      {service && (
        <Suspense fallback={null}>
          <ExpertFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={service.name}
            serviceSlug={service.slug}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ServiceDetails;
