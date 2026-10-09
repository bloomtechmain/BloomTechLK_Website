import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Server, Briefcase, Globe, ShieldCheck,
  CheckCircle2, Award, Target, Phone, MapPin,
  MessageCircle, Landmark, ShoppingBag, Heart, Package,
  Cpu, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { NAVY, NAVY_RAISED, ORANGE, ORANGE_LIGHT, GREY, FONT_SANS, ORANGE_GRADIENT, NAVY_GRADIENT } from '../styles/designTokens';

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
function useCountUp(target: number, duration = 1200) {
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
          setCount(Math.floor(p * target));
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
  },
  {
    icon: Server,
    title: 'Suite of Applications',
    desc: 'BloomSwift POS, BloomAudit, and BloomLTO — purpose-built for Sri Lankan businesses.',
    link: '/services/bloomswift-pos',
  },
  {
    icon: Briefcase,
    title: 'Strategic Business Applications',
    desc: 'Custom CRM, ERP, and cloud platforms that scale with your Sri Lankan enterprise.',
    link: '/services/custom-crm-erp-solutions',
  },
  {
    icon: Globe,
    title: 'Digital Presence & Custom Software',
    desc: 'High-performance websites, QR/NFC apps, and SEO built for Sri Lanka\'s mobile-first audience.',
    link: '/services/custom-qr-nfc-applications',
  },
  {
    icon: ShieldCheck,
    title: 'IT Advisory & Cybersecurity',
    desc: 'CISA-certified security, Zero Trust architecture, and compliance aligned with CBSL and SEC.',
    link: '/services/professional-it-consulting',
  },
];

const sriLankaFeatures = [
  'Bilingual Sinhala + English support across all products',
  'CBSL & SEC regulatory alignment for financial institutions',
  'Offline-capable applications built for intermittent connectivity',
  'On-site response across Colombo, Kandy, Galle and beyond',
];

const industries = [
  {
    icon: Package,
    name: 'Apparel & Garments',
    desc: 'Production tracking, ERP, and AI quality control for Sri Lanka\'s largest export sector.',
  },
  {
    icon: Globe,
    name: 'Tourism & Hospitality',
    desc: 'Hotel POS, QR menus, booking management, and smart workspace tech for Sri Lanka\'s resorts.',
  },
  {
    icon: Landmark,
    name: 'Banking & Finance',
    desc: 'CBSL-aligned compliance software and AI document processing for banks and financial institutions.',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'Patient management systems, medical record digitisation, and secure data infrastructure.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
    desc: 'Multi-location POS, inventory management, and e-commerce built for Sri Lankan retailers.',
  },
  {
    icon: Cpu,
    name: 'Manufacturing',
    desc: 'Production monitoring, asset tracking, and IoT integrations for factories across Sri Lanka.',
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
  'CISA-Certified Technology Team',
  'Built for Sri Lanka\'s Infrastructure & Connectivity',
  '24/7 Remote + On-Site Support in English & Sinhala',
];

const vp = { once: true, margin: '-80px' } as const;

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

  return (
    <div style={{ fontFamily: FONT_SANS }}>
      <SEO config={seoConfigs.home} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[620px] h-[90vh] max-h-[760px] flex items-center overflow-hidden" style={{ background: NAVY_GRADIENT }}>

        {/* Video slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
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
          {/* Directional overlay for text contrast — single flat scrim, left-weighted */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(100deg, ${NAVY} 18%, rgba(16,29,54,0.78) 48%, rgba(16,29,54,0.42) 100%)` }} />
          {/* Soft seam into the section below */}
          <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to top, ${NAVY}, transparent)`, opacity: 0.9 }} />
        </div>

        {/* Content */}
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
              <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE_LIGHT }}>
                Sri Lanka's Technology Partner
              </p>
            </div>

            <h1 className="text-[2.75rem] md:text-[3.4rem] font-bold mb-6 leading-[1.08] tracking-tight text-white">
              Technology built for <span style={{ color: ORANGE }}>Sri Lankan businesses</span>
            </h1>

            <p className="text-white/72 text-lg mb-10 leading-relaxed max-w-xl">
              AI, enterprise software, and custom IT infrastructure — designed around how Sri Lankan companies actually operate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                to="/services/ai-machine-learning"
                className="px-8 py-4 text-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                style={{ background: ORANGE_GRADIENT }}
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/[0.06] text-white border border-white/25 rounded-lg font-semibold text-[15px] hover:bg-white/[0.12] hover:border-white/40 transition-all flex items-center justify-center"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {videoSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-7' : 'w-1 bg-white/35 hover:bg-white/55'}`}
              style={i === currentSlide ? { backgroundColor: ORANGE } : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════ TRUST STRIP ══════════════════════ */}
      <div className="border-b border-gray-200" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 py-7">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 mb-5">
            Industries We Serve Across Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustIndustries.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-[0_1px_2px_rgba(16,29,54,0.05)] text-sm font-medium text-gray-700">
                <span className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" style={{ color: ORANGE }} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ STATS ROW ══════════════════════ */}
      <div style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
            {[
              { ref: projectsRef, val: projectsCount, suffix: '+', label: 'Projects Delivered' },
              { ref: industriesRef, val: industriesCount, suffix: '',  label: 'Industries Served' },
              { ref: countriesRef,  val: countriesCount,  suffix: '',  label: 'Countries' },
              { ref: null,          val: null,            suffix: '',  label: 'CISA Certified', fixed: 'Yes' },
            ].map(({ ref, val, suffix, label, fixed }, i) => (
              <div key={label} className={`px-4 py-10 text-center ${i >= 2 ? 'border-t border-white/[0.08] md:border-t-0' : ''}`}>
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  {fixed ?? (
                    <span ref={ref ?? undefined}>{val}{suffix}</span>
                  )}
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-[2px] rounded-full" style={{ backgroundColor: ORANGE }} />
                  <span className="text-[11px] text-white/50 uppercase tracking-[0.1em]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ SERVICES ══════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">

            {/* Label column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>What We Build</p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-5" style={{ color: NAVY }}>
                Complete Technology Solutions
              </h2>
              <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">
                Five practice areas covering everything Sri Lankan businesses need to compete and grow.
              </p>
              <Link
                to="/company"
                className="inline-flex items-center gap-2 font-semibold text-sm group"
                style={{ color: ORANGE }}
              >
                About BloomTech.lk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service list */}
            <div className="rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] overflow-hidden">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <Link
                      to={svc.link}
                      className={`group relative flex items-center gap-5 py-6 px-7 hover:bg-[#FBFBFC] transition-colors ${i !== 0 ? 'border-t border-gray-100' : ''}`}
                    >
                      <span className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform origin-center" style={{ backgroundColor: ORANGE }} />
                      <div className="w-12 h-12 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold mb-1" style={{ color: NAVY }}>{svc.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF6B00] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SRI LANKA FOCUS ══════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        {/* subtle tonal depth — a single soft, low-opacity wash, not a glowing blob */}
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${NAVY_RAISED})`, opacity: 0.6 }} />

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>Sri Lanka First</p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-5 text-white">
                Built for how Sri Lankan businesses actually operate
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-lg text-[15px]">
                Every product we build accounts for the real constraints of running a business in Sri Lanka — from power reliability to regulatory compliance to the languages your team speaks.
              </p>

              <ul className="space-y-3.5 mb-9">
                {sriLankaFeatures.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ORANGE }} />
                    </span>
                    <span className="text-white/75 text-[15px] leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-sm rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all"
                style={{ background: ORANGE_GRADIENT }}
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right — elevated info panel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:block rounded-2xl p-9 border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
              style={{ backgroundColor: NAVY_RAISED }}
            >
              <div className="flex items-start gap-4 mb-7 pb-7 border-b border-white/[0.08]">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                  <MapPin className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-[15px] mb-1.5">Mawaramandiya HQ</div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Based in the Western Province — serving clients from Colombo to Kandy to Galle, island-wide and internationally.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-[15px] mb-1">24/7 Local Support</div>
                  <div className="text-white/50 text-sm">English &amp; Sinhala</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[2.25rem] leading-none tracking-tight" style={{ color: ORANGE }}>99.9%</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.1em] mt-1.5">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Sectors We Serve</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Deep expertise across Sri Lanka's key sectors
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              We understand the unique challenges, regulations, and opportunities in Sri Lanka's most important industries.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group bg-white rounded-xl p-7 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-5 group-hover:bg-[#FF6B00] group-hover:ring-[#FF6B00] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: NAVY }}>{name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY BLOOMTECH ══════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: `linear-gradient(180deg, ${NAVY_RAISED}, transparent)`, opacity: 0.5 }} />

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>Why BloomTech.lk</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white">
              Sri Lanka's technology partner that understands your business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                style={{ backgroundColor: NAVY_RAISED }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-10 border-t border-white/10">
            {differentiators.map((text) => (
              <div key={text} className="inline-flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                <span className="text-white/65 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="py-24 px-6" style={{ background: ORANGE_GRADIENT }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

            {/* Left — message */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-5 leading-[1.1] tracking-tight">
                Ready to transform your Sri Lankan business?
              </h2>
              <p className="text-lg text-white/90 mb-9 leading-relaxed max-w-md mx-auto lg:mx-0">
                Connect with our Mawaramandiya team in Sinhala or English — at a pace that suits your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link to="/contact" className="px-8 py-4 bg-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(16,29,54,0.5)] hover:shadow-[0_10px_26px_-8px_rgba(16,29,54,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2" style={{ color: NAVY }}>
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/company" className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-colors">
                  About BloomTech.lk
                </Link>
              </div>
            </motion.div>

            {/* Right — navy contact panel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-3 shadow-[0_24px_60px_-20px_rgba(16,29,54,0.45)]"
              style={{ backgroundColor: NAVY }}
            >
              {[
                { icon: Phone, label: 'Phone', value: socialMedia.phone, href: `tel:${socialMedia.phone.replace(/\s/g, '')}` },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Us', href: `https://wa.me/${socialMedia.whatsapp}`, external: true },
                { icon: MapPin, label: 'Location', value: 'Mawaramandiya, Sri Lanka' },
              ].map(({ icon: Icon, label, value, href, external }, i) => {
                const inner = (
                  <div className={`flex items-center gap-4 px-6 py-5 ${i !== 0 ? 'border-t border-white/[0.08]' : ''} ${href ? 'hover:bg-white/[0.04] transition-colors' : ''} rounded-lg`}>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <div className="text-left">
                      <p className="text-white/45 text-[11px] font-semibold uppercase tracking-[0.1em] mb-0.5">{label}</p>
                      <p className="text-white text-[15px] font-semibold">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
