import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Server, Briefcase, Globe, ShieldCheck,
  CheckCircle2, Zap, Award, Users, Target, Phone, MapPin,
  MessageCircle, Landmark, ShoppingBag, Heart, Package,
  Factory, Building2, Cpu, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';

// Hero background videos - Desktop (1080p)
import heroBg1 from '../assets/hero_bg_1.mp4';
import heroBg2 from '../assets/hero_bg_2.mp4';
import heroBg3 from '../assets/hero_bg_3.mp4';

// WebM versions for better compression (modern browsers)
import heroBg1Webm from '../assets/hero_bg_1.webm';
import heroBg2Webm from '../assets/hero_bg_2.webm';
import heroBg3Webm from '../assets/hero_bg_3.webm';

// Mobile optimized versions (720p)
import heroBg1Mobile from '../assets/hero_bg_1_mobile.mp4';
import heroBg2Mobile from '../assets/hero_bg_2_mobile.mp4';
import heroBg3Mobile from '../assets/hero_bg_3_mobile.mp4';

// Poster images for instant loading
import heroBg1Poster from '../assets/hero_bg_1.webp';
import heroBg2Poster from '../assets/hero_bg_2.webp';
import heroBg3Poster from '../assets/hero_bg_3.webp';

// ─── animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let t0: number | null = null;
        const tick = (ts: number) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    const el = ref.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

// ─── data ─────────────────────────────────────────────────────────────────────
const marqueeItems = [
  'AI & Machine Learning', 'Custom ERP & CRM', 'BloomSwift POS',
  'Cybersecurity', 'IT Infrastructure', 'Cloud Hosting',
  'SEO & Digital Marketing', 'Network Engineering', 'BloomAudit',
  'Custom Software', 'On-Premises AI', 'Field Service Platforms',
];

const trustIndustries = [
  { icon: Package,   label: 'Apparel & Garments' },
  { icon: Globe,     label: 'Tourism & Hospitality' },
  { icon: Landmark,  label: 'Banking & Finance' },
  { icon: Heart,     label: 'Healthcare' },
  { icon: ShoppingBag, label: 'Retail & E-Commerce' },
  { icon: Cpu,       label: 'Manufacturing' },
];

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Custom AI agents, on-premise models, and document intelligence for Sri Lankan industries.',
    link: '/services/ai-machine-learning',
    color: 'from-[#ff6b00] to-orange-500',
  },
  {
    icon: Server,
    title: 'Suite of Applications',
    desc: 'BloomSwift POS, BloomAudit, and BloomGo — purpose-built for Sri Lankan businesses.',
    link: '/services/bloomswift-pos',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Strategic Business Applications',
    desc: 'Custom CRM, ERP, and cloud platforms that scale with your Sri Lankan enterprise.',
    link: '/services/custom-crm-erp-solutions',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Digital Presence & Custom Software',
    desc: 'High-performance websites, QR/NFC apps, and SEO built for Sri Lanka\'s mobile-first audience.',
    link: '/services/custom-qr-nfc-applications',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: ShieldCheck,
    title: 'IT Advisory & Cybersecurity',
    desc: 'CISA-certified security, Zero Trust architecture, and compliance aligned with CBSL and SEC.',
    link: '/services/professional-it-consulting',
    color: 'from-red-500 to-orange-500',
  },
];

const sriLankaFeatures = [
  { text: 'Bilingual Sinhala + English support across all products' },
  { text: 'CBSL & SEC regulatory alignment for financial institutions' },
  { text: 'Offline-capable applications built for intermittent connectivity' },
  { text: 'On-site response across Colombo, Kandy, Galle and beyond' },
];

const industries = [
  {
    icon: Package,
    name: 'Apparel & Garments',
    desc: 'Production tracking, ERP, and AI quality control for Sri Lanka\'s largest export sector.',
    gradient: 'from-orange-500/10 to-amber-500/5',
    border: 'hover:border-orange-400/40',
  },
  {
    icon: Globe,
    name: 'Tourism & Hospitality',
    desc: 'Hotel POS, QR menus, booking management, and smart workspace tech for Sri Lanka\'s resorts.',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    border: 'hover:border-blue-400/40',
  },
  {
    icon: Landmark,
    name: 'Banking & Finance',
    desc: 'CBSL-aligned compliance software and AI document processing for banks and financial institutions.',
    gradient: 'from-green-500/10 to-emerald-500/5',
    border: 'hover:border-green-400/40',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'Patient management systems, medical record digitisation, and secure data infrastructure.',
    gradient: 'from-red-500/10 to-rose-500/5',
    border: 'hover:border-red-400/40',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
    desc: 'Multi-location POS, inventory management, and e-commerce built for Sri Lankan retailers.',
    gradient: 'from-purple-500/10 to-violet-500/5',
    border: 'hover:border-purple-400/40',
  },
  {
    icon: Cpu,
    name: 'Manufacturing',
    desc: 'Production monitoring, asset tracking, and IoT integrations for factories across Sri Lanka.',
    gradient: 'from-slate-500/10 to-zinc-500/5',
    border: 'hover:border-slate-400/40',
  },
];

const advantages = [
  {
    icon: Award,
    title: 'Local Expertise, Global Standards',
    desc: 'CISA-certified professionals combining deep Sri Lankan industry knowledge with internationally recognised frameworks — ISO 27001, NIST, CBSL, and SEC.',
  },
  {
    icon: Target,
    title: 'Built for Sri Lanka\'s Realities',
    desc: 'Power-resilient architectures, offline-capable apps, and bilingual interfaces engineered for how Sri Lankan businesses actually operate day to day.',
  },
  {
    icon: ShieldCheck,
    title: 'Full-Service Local Support',
    desc: 'Dedicated account managers, rapid on-site response, 24/7 remote monitoring, and complete technical support in Sinhala and English.',
  },
];

const differentiators = [
  { num: '01', text: 'CISA-Certified Technology Team' },
  { num: '02', text: 'Built for Sri Lanka\'s Infrastructure & Connectivity' },
  { num: '03', text: '24/7 Remote + On-Site Support in English & Sinhala' },
];

// ─── component ────────────────────────────────────────────────────────────────
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Counter values
  const { count: projectsCount, ref: projectsRef } = useCountUp(50);
  const { count: industriesCount, ref: industriesRef } = useCountUp(6);
  const { count: countriesCount, ref: countriesRef } = useCountUp(5);

  const videoSlides = [
    { webm: heroBg1Webm, mp4: heroBg1, mobile: heroBg1Mobile, poster: heroBg1Poster },
    { webm: heroBg2Webm, mp4: heroBg2, mobile: heroBg2Mobile, poster: heroBg2Poster },
    { webm: heroBg3Webm, mp4: heroBg3, mobile: heroBg3Mobile, poster: heroBg3Poster },
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { setIsVideoLoaded(true); }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [videoSlides.length]);

  const vp = { once: true, margin: '-40px' } as const;

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.home} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden">

        {/* Video slideshow */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {isVideoLoaded ? (
                <video
                  ref={videoRef}
                  key={`${currentSlide}-${isMobile}`}
                  poster={videoSlides[currentSlide].poster}
                  className="w-full h-full object-cover"
                  autoPlay loop muted playsInline
                  preload={currentSlide === 0 ? 'auto' : 'metadata'}
                >
                  {isMobile ? (
                    <source src={videoSlides[currentSlide].mobile} type="video/mp4" />
                  ) : (
                    <>
                      <source src={videoSlides[currentSlide].webm} type="video/webm" />
                      <source src={videoSlides[currentSlide].mp4} type="video/mp4" />
                    </>
                  )}
                </video>
              ) : (
                <div
                  className="w-full h-full dynamic-bg"
                  style={{ ['--bg-image' as string]: `url(${videoSlides[currentSlide].poster})` } as React.CSSProperties}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a36]/92 via-[#0c1a36]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_transparent_0%,_rgba(12,26,54,0.35)_100%)] z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-7 text-[11px] font-black tracking-[0.28em] text-white uppercase bg-[#ff6b00]/20 backdrop-blur-md border border-[#ff6b00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse shadow-[0_0_10px_#ff6b00]" />
              <span>🇱🇰</span> Sri Lanka's Premier Technology Partner
            </div>

            {/* Headline — smaller, punchier */}
            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-black mb-5 leading-[0.88] tracking-[-0.04em] text-white">
              Sri Lanka's<br />
              <span className="text-[#ff6b00]">Technology Partner.</span>
            </h1>

            {/* One-line sub */}
            <p className="max-w-xl text-white/80 text-lg md:text-xl mb-9 font-medium leading-relaxed">
              AI, enterprise software, and custom IT infrastructure — built specifically for Sri Lankan businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/services/ai-machine-learning"
                className="w-full sm:w-auto px-10 py-4 bg-[#ff6b00] text-white rounded-2xl font-black text-base hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.55)] transition-all flex items-center justify-center gap-3 group active:scale-[.97]"
              >
                Explore Our Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-base hover:bg-white hover:text-[#0c1a36] transition-all flex items-center justify-center"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Marquee ticker strip */}
        <div className="absolute bottom-16 left-0 right-0 z-20 overflow-hidden border-y border-white/8 bg-[#0c1a36]/40 backdrop-blur-sm py-3">
          <div className="flex animate-marquee will-change-transform whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-5 text-[12px] font-bold text-white/70 uppercase tracking-[0.15em]">
                {item}
                <span className="text-[#ff6b00] opacity-70">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {videoSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-[#ff6b00]' : 'w-2 bg-white/30'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════ TRUST STRIP ══════════════════════ */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-8">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-5">
            Industries We Serve Across Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustIndustries.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-[13px] font-700 text-[#0c1a36]">
                <Icon className="w-4 h-4 text-[#ff6b00]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ STATS ROW ══════════════════════ */}
      <div className="bg-[#0c1a36]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { ref: projectsRef, val: projectsCount, suffix: '+', label: 'Projects Delivered' },
            { ref: industriesRef, val: industriesCount, suffix: '',  label: 'Industries Served' },
            { ref: countriesRef,  val: countriesCount,  suffix: '',  label: 'Countries' },
            { ref: null,          val: null,            suffix: '',  label: 'CISA Certified', fixed: 'Yes' },
          ].map(({ ref, val, suffix, label, fixed }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="px-8 py-10 text-center border-r border-white/8 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(2)]:border-b [&:nth-child(1)]:border-b md:[&:nth-child(1)]:border-b-0 md:[&:nth-child(2)]:border-b-0"
            >
              <div className="text-[2.5rem] font-black text-[#ff6b00] leading-none tracking-[-0.04em] mb-1.5">
                {fixed ?? (
                  <span ref={ref ?? undefined}>{val}{suffix}</span>
                )}
              </div>
              <div className="text-[11px] font-700 text-white/45 uppercase tracking-[0.18em]">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════ SERVICES ══════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

            {/* Sticky label column */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.7 }}
              >
                <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4">What We Build</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0c1a36] leading-[1.02] tracking-tight mb-5">
                  Complete Technology Solutions
                </h2>
                <p className="text-base font-medium text-gray-500 leading-relaxed mb-8">
                  Five practice areas covering everything Sri Lankan businesses need to compete and grow.
                </p>
                <Link
                  to="/company"
                  className="inline-flex items-center gap-2 text-[#ff6b00] font-black text-sm uppercase tracking-widest hover:gap-3 transition-all"
                >
                  About BloomTech.lk <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Service cards */}
            <div className="space-y-4">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                  >
                    <Link
                      to={svc.link}
                      className="group flex items-center gap-6 bg-white rounded-[24px] p-6 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl transition-all"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-black text-[#0c1a36] mb-1 group-hover:text-[#ff6b00] transition-colors">{svc.title}</h3>
                        <p className="text-sm font-medium text-gray-500 leading-relaxed">{svc.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#ff6b00] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SRI LANKA FOCUS ══════════════════════ */}
      <section className="py-28 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-[-60px] right-[8%] w-[500px] h-[500px] bg-[#ff6b00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-60px] left-[5%] w-[380px] h-[380px] bg-blue-500/8 rounded-full blur-[100px]" />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-16 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4">Sri Lanka First</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Built for how Sri Lankan<br />
                <span className="text-[#ff6b00]">businesses actually operate.</span>
              </h2>
              <p className="text-white/65 text-base font-medium leading-relaxed mb-8 max-w-lg">
                Every product we build accounts for the real constraints of running a business in Sri Lanka — from power reliability to regulatory compliance to the languages your team speaks.
              </p>

              <div className="space-y-3 mb-10">
                {sriLankaFeatures.map(({ text }) => (
                  <div key={text} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/8">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] mt-0.5 shrink-0" />
                    <span className="text-white/80 font-medium text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#ff6b00] text-white font-black text-sm rounded-2xl hover:bg-[#e65c00] hover:shadow-[0_0_36px_rgba(255,107,0,0.5)] transition-all active:scale-[.97]"
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right — stacked glass cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative hidden lg:flex flex-col gap-4"
            >
              {/* Card 1 — HQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/8 backdrop-blur-md rounded-2xl p-6 border border-white/12"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#ff6b00]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <span className="text-white font-black text-sm">🇱🇰 Mawaramandiya HQ</span>
                </div>
                <p className="text-white/55 text-xs font-medium leading-relaxed">
                  Based in Mawaramandiya, Western Province — serving clients from Colombo to Kandy to Galle.
                </p>
              </motion.div>

              {/* Card 2 — Coverage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="bg-white/8 backdrop-blur-md rounded-2xl p-6 border border-white/12 ml-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white font-black text-sm">Island-Wide + International</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Colombo', 'Kandy', 'Galle', 'Negombo', 'Ratnapura', 'International'].map(city => (
                    <span key={city} className="text-[11px] font-700 text-white/55 bg-white/8 px-2.5 py-1 rounded-full">{city}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 — Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.44 }}
                className="bg-gradient-to-br from-[#ff6b00]/20 to-orange-600/10 backdrop-blur-md rounded-2xl p-6 border border-[#ff6b00]/25"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-black text-sm mb-1">24/7 Local Support</div>
                    <div className="text-white/55 text-xs font-medium">English & Sinhala</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#ff6b00] font-black text-2xl leading-none">99.9%</div>
                    <div className="text-white/45 text-[10px] font-700 uppercase tracking-wider mt-1">Uptime</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Sectors We Serve</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-3">
              Deep Expertise Across<br />Sri Lanka's Key Sectors
            </h2>
            <p className="text-base font-medium text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We understand the unique challenges, regulations, and opportunities in Sri Lanka's most important industries.
            </p>
          </motion.div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 w-max md:w-auto">
              {industries.map(({ icon: Icon, name, desc, gradient, border }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                  className={`group w-[260px] md:w-auto bg-gradient-to-br ${gradient} bg-white rounded-2xl p-7 border-2 border-gray-100 ${border} hover:shadow-xl hover:-translate-y-1 transition-all snap-start`}
                  style={{ backgroundColor: 'white' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff6b00] transition-colors">
                    <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-[#0c1a36] mb-2">{name}</h3>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY BLOOMTECH ══════════════════════ */}
      <section className="py-28 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-16 w-[400px] h-[400px] bg-[#ff6b00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-16 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Why BloomTech.lk</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-3">
              Sri Lanka's Technology Partner<br />
              <span className="text-[#ff6b00]">That Understands Your Business</span>
            </h2>
          </motion.div>

          {/* 3 advantage cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/9 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#ff6b00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                  <p className="text-white/62 font-medium leading-relaxed text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Differentiator rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {differentiators.map(({ num, text }) => (
              <div key={num} className="inline-flex items-center gap-3 px-5 py-3 bg-white/6 border border-white/10 rounded-full">
                <span className="text-[#ff6b00] font-black text-xs">#{num}</span>
                <span className="text-white/70 font-medium text-sm">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-white/50 mb-4">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              Ready to Transform Your<br />Sri Lankan Business?
            </h2>
            <p className="text-lg text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Connect with our Mawaramandiya team in Sinhala or English — at a pace that suits your business.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff6b00] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/55 text-[10px] font-black uppercase tracking-widest mb-1">Phone</p>
                  <a href={`tel:${socialMedia.phone.replace(/\s/g, '')}`} className="text-white text-base font-black hover:text-[#ff6b00] transition-colors">
                    {socialMedia.phone}
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/55 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${socialMedia.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="text-white text-base font-black hover:text-green-400 transition-colors">
                    Chat with Us
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/55 text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-base font-black">Mawaramandiya, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-10 py-4 bg-white text-[#0c1a36] rounded-2xl font-black text-base hover:bg-gray-100 hover:shadow-2xl transition-all flex items-center gap-3">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/company" className="px-10 py-4 bg-transparent text-white border-2 border-white/30 rounded-2xl font-black text-base hover:bg-white/10 transition-all">
                About BloomTech.lk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
