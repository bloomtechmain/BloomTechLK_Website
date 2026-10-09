import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Package, BarChart3, MessageSquare, Users, Printer,
  Globe, Cloud, LayoutDashboard, ShoppingBag, Coffee, Building2,
  Pill, ShoppingCart, Briefcase, Code2, Shield, Zap, Phone,
  MapPin, MessageCircle, ExternalLink, Star
} from 'lucide-react';
import Footer from '../components/Footer';
import { NAVY, NAVY_RAISED, ORANGE, ORANGE_LIGHT, FONT_SANS, ORANGE_GRADIENT, NAVY_GRADIENT } from '../styles/designTokens';

// ─── animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: d } }),
};
const vp = { once: true, margin: '-80px' };

// ─── counter hook ─────────────────────────────────────────────────────────────
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
const features = [
  { icon: Package,         title: 'Inventory Management',  desc: 'Real-time stock tracking, reorder alerts, multi-warehouse support, and intelligent control to eliminate stockouts.' },
  { icon: BarChart3,       title: 'Sales Analytics',       desc: 'Daily/weekly/monthly dashboards with top products, peak hours, cashier performance, and revenue trends.' },
  { icon: MessageSquare,   title: 'SMS Notifications',     desc: 'Automated SMS for order confirmations, loyalty rewards, low stock alerts, and daily sales summaries.' },
  { icon: Users,           title: 'Role-Based Access',     desc: 'Granular permission controls for cashiers, supervisors, and admins — protect sensitive data with fine-grained roles.' },
  { icon: Printer,         title: 'Thermal Printing',      desc: 'One-click thermal receipt printing with customisable templates — logo, promotions, and footer on every receipt.' },
  { icon: Globe,           title: 'Multi-Location',        desc: 'Manage unlimited branches from one dashboard with centralised reporting and cross-location stock transfers.' },
  { icon: Cloud,           title: 'Cloud & Local Deploy',  desc: 'Runs on cloud or fully on-premises. Offline-capable so operations never stop when connectivity drops.' },
  { icon: LayoutDashboard, title: 'Real-Time Dashboard',   desc: 'Live business intelligence — sales velocity, top items, cashier productivity, inventory levels refreshed every second.' },
];

const industries = [
  { icon: ShoppingBag,  title: 'Retail',               desc: 'Barcode scanning, multi-variant products, loyalty programmes, and end-of-day reconciliation for single stores and multi-branch chains.' },
  { icon: Coffee,       title: 'Restaurants & Cafes',  desc: 'Table management, kitchen display integration, split billing, course ordering, QR menus, and real-time void controls.' },
  { icon: Building2,    title: 'Hospitality',          desc: 'Hotel POS with room-charge posting, mini-bar billing, outlet management, folio settlement, and PMS integration.' },
  { icon: Pill,         title: 'Pharmacy',             desc: 'Drug inventory with batch/expiry tracking, prescription logs, GST billing, and controlled substance reporting.' },
  { icon: ShoppingCart, title: 'Supermarkets',         desc: 'High-throughput POS with weighing scale integration, cashier lanes, bulk pricing, and live stock sync across departments.' },
  { icon: Briefcase,    title: 'Enterprise & ERP',     desc: 'ERP-integrated POS with multi-currency, 10+ branch management, full audit trails, and custom reporting.' },
];

const differentiators = [
  {
    icon: Code2,
    title: 'Custom-Built, Not Off-the-Shelf',
    desc: 'Every client receives a bespoke POS system built around their exact business model, workflows, and hardware — not a repackaged generic product with surface-level customisations.',
  },
  {
    icon: Shield,
    title: 'Full Support, Always',
    desc: 'From deployment day to year five — hands-on technical support, staff training, hardware troubleshooting, and feature updates are part of the partnership, in Sinhala and English.',
  },
  {
    icon: Zap,
    title: 'Modern Stack, Production-Ready',
    desc: 'Node.js, React, and PostgreSQL — battle-tested tech that scales from one checkout counter to enterprise multi-branch deployments handling thousands of daily transactions.',
  },
];

const projects = [
  { sector: 'Retail Chain',      title: 'Retail Chain POS — Colombo',           desc: 'Multi-branch POS with centralised inventory, barcode scanning, loyalty programme, and daily reporting for a 5-location clothing chain.',              tags: ['Multi-Location', 'Inventory', 'Loyalty'] },
  { sector: 'Restaurant',        title: 'Restaurant Billing System — Galle',     desc: 'Table-service POS with kitchen display integration, course management, split billing, and real-time void controls.',                                    tags: ['KDS', 'Table Mgmt', 'Split Bill'] },
  { sector: 'Pharmacy',          title: 'Pharmacy POS with Inventory — Kandy',   desc: 'Prescription-integrated POS with drug batch tracking, expiry alerts, GST billing, and controlled substance logs for a 3-outlet chain.',                tags: ['Batch Track', 'Expiry Alert', 'GST'] },
  { sector: 'Hospitality',       title: 'Hotel F&B POS — Negombo',               desc: 'Full hotel POS covering restaurant, bar, and room service with room-charge posting, folio settlement, and PMS integration.',                           tags: ['PMS Integration', 'Room Charge', 'Multi-Outlet'] },
  { sector: 'Supermarket',       title: 'Supermarket POS — Kurunegala',          desc: 'High-throughput system with scale integration, cashier lane management, produce pricing, and live dashboard for a 3-floor supermarket.',               tags: ['Scale Integration', 'Bulk Pricing', 'Lanes'] },
  { sector: 'Enterprise',        title: 'Enterprise ERP-POS — International',    desc: 'ERP-integrated enterprise POS with multi-currency, 10+ branch management, full audit trail, and granular permissions for an international client.',      tags: ['ERP Integration', 'Multi-Currency', '10+ Branches'] },
  { sector: 'Cafe',              title: 'Cafe POS with SMS Loyalty — Colombo 3', desc: 'Fast-casual POS with SMS loyalty programme, quick-service mode, modifier support, and daily revenue reports sent to the owner.',                      tags: ['SMS Loyalty', 'Quick Service', 'Modifiers'] },
  { sector: 'Wholesale',         title: 'Wholesale Distribution POS — Ratnapura',desc: 'Wholesale billing with credit customer management, invoice generation, purchase order tracking, delivery note printing, and aged debtor reports.',         tags: ['Credit Mgmt', 'Invoicing', 'Purchase Orders'] },
  { sector: 'Beauty & Wellness', title: 'Salon & Spa POS — Mount Lavinia',       desc: 'Service POS with appointment scheduling, therapist commissions, package/membership sales, and SMS appointment reminders for a luxury spa.',             tags: ['Appointments', 'Commissions', 'Memberships'] },
];

// ─── component ───────────────────────────────────────────────────────────────
const BloomSwiftPOS = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { count: projCount, ref: projRef } = useCountUp(20, 1200);

  return (
    <div style={{ fontFamily: FONT_SANS }}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[640px] overflow-hidden" style={{ background: NAVY_GRADIENT }}>

        {/* Full-height POS image — right side, desktop only */}
        <div className="absolute right-0 top-0 h-full w-[48%] hidden lg:block">
          <img
            src="/supermarket-worker-pos.jpg"
            alt="BloomSwift POS in action"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* single flat directional scrim for text contrast */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(100deg, ${NAVY} 24%, rgba(16,29,54,0.82) 52%, rgba(16,29,54,0.5) 100%)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: `linear-gradient(to top, ${NAVY}, transparent)`, opacity: 0.9 }} />

        <div className="relative z-20 max-w-[1550px] mx-auto w-full px-6 xl:px-12 pt-32 pb-20">
          <div className="lg:max-w-[56%]">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
              <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE_LIGHT }}>
                20+ POS Projects Delivered Across Sri Lanka &amp; Beyond
              </p>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.05} className="text-[2.75rem] md:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-white mb-6">
              Fast, smart, <span style={{ color: ORANGE }}>built for business</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.1} className="max-w-xl text-lg text-white/72 leading-relaxed mb-8">
              BloomSwift POS is a custom-built point-of-sale platform engineered for retail, restaurants, hospitality, pharmacy, and enterprise — deployed across Sri Lanka and internationally.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.14} className="flex flex-wrap gap-2.5 mb-8">
              {['Cloud + Local Deploy', 'SMS Notifications', 'Thermal Printing'].map(t => (
                <span key={t} className="px-3.5 py-1.5 bg-white/[0.06] border border-white/15 rounded-full text-xs font-semibold text-white/65 tracking-wide">{t}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.18} className="flex flex-wrap gap-3.5 mb-10">
              <a href="https://www.bloomswiftpos.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all"
                style={{ background: ORANGE_GRADIENT }}>
                Get a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] text-white border border-white/25 rounded-lg font-semibold text-[15px] hover:bg-white/[0.12] hover:border-white/40 transition-all">
                View Projects
              </a>
            </motion.div>

            {/* live counters */}
            <motion.div variants={fadeUp} custom={0.22} className="flex flex-wrap gap-8 mb-6">
              {[
                { valEl: <span ref={projRef}>{projCount}+</span>, label: 'POS Projects Delivered' },
                { valEl: '6', label: 'Industries Served' },
                { valEl: '99.9%', label: 'Uptime' },
              ].map(({ valEl, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white mb-1 tracking-tight">{valEl}</div>
                  <div className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-[2px] rounded-full" style={{ backgroundColor: ORANGE }} />
                    <span className="text-[11px] text-white/50 uppercase tracking-[0.1em]">{label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* sub-brand line */}
            <motion.div variants={fadeUp} custom={0.26} className="inline-flex items-center gap-2">
              <span className="text-xs font-medium text-white/40 uppercase tracking-wide">A Sub-Brand of</span>
              <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wide hover:underline" style={{ color: ORANGE }}>
                BloomTech.lk
              </a>
            </motion.div>

          </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section id="features" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Platform Features</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Everything your business needs in one POS platform
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Built from the ground up with modern technology — BloomSwift POS handles every aspect of your operations, from sales to inventory to reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 4) * 0.06}
                className="group bg-white rounded-xl p-6 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#FF6B00] group-hover:ring-[#FF6B00] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section id="industries" className="py-24 bg-gray-50 scroll-mt-16">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Industries We Serve</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Tailored POS for every vertical
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              BloomSwift POS is custom-built for each client — not a generic product. We understand the unique workflows, compliance, and realities of every sector we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 3) * 0.07}
                className="group bg-white rounded-xl p-6 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#FF6B00] group-hover:ring-[#FF6B00] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY BLOOMSWIFT ══════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: `linear-gradient(180deg, ${NAVY_RAISED}, transparent)`, opacity: 0.5 }} />

        <div className="relative z-10 max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>Why BloomSwift POS</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4 text-white">
              Not off-the-shelf. <span style={{ color: ORANGE }}>Built for your business.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-[15px]">
              Every BloomSwift POS deployment is a custom project — engineered around your specific workflows, hardware, and operational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={i * 0.1}
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
        </div>
      </section>

      {/* ══════════════════════ PROJECTS ══════════════════════ */}
      <section id="projects" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Delivered Projects</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              20+ POS systems shipped across Sri Lanka &amp; internationally
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Each BloomSwift POS is custom-built for its client and industry. Here's a sample of what we've delivered.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(({ sector, title, desc, tags }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 3) * 0.06}
                className="group bg-white rounded-xl p-6 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Delivered
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: ORANGE }}>
                    · {sector}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100">
                  {tags.map(t => (
                    <span key={t} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIAL ══════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}
            className="max-w-3xl mx-auto bg-white rounded-xl p-10 md:p-12 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] text-center"
          >
            <div className="flex justify-center gap-1.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-7" style={{ color: NAVY }}>
              "BloomSwift POS transformed how we run our restaurant group. The system was built exactly around our workflow — not the other way around. Real-time dashboards, SMS alerts when inventory runs low, and receipts that print flawlessly every time. Best technology investment we've made."
            </blockquote>
            <div className="text-[15px] font-semibold" style={{ color: NAVY }}>Gayan Weerasingha</div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] mt-1" style={{ color: ORANGE }}>Weerasingha Hardware · Sri Lanka</div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section id="contact" className="py-24 px-6 scroll-mt-16" style={{ background: ORANGE_GRADIENT }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center lg:text-left">
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-5 leading-[1.1] tracking-tight">
                Ready to build your custom POS system?
              </h2>
              <p className="text-lg text-white/90 mb-9 leading-relaxed max-w-md mx-auto lg:mx-0">
                Tell us about your business and we'll design a BloomSwift POS solution tailored to your industry, size, and budget. Typical deployments take 2–4 weeks.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a href="https://www.bloomswiftpos.com/" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(16,29,54,0.5)] hover:shadow-[0_10px_26px_-8px_rgba(16,29,54,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2" style={{ color: NAVY }}>
                  Visit BloomSwift POS <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-colors">
                  Explore BloomTech.lk
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={0.1}
              className="rounded-2xl p-3 shadow-[0_24px_60px_-20px_rgba(16,29,54,0.45)]"
              style={{ backgroundColor: NAVY }}
            >
              {[
                { icon: Phone, label: 'Call Us', value: '+94 70 123 4567', href: 'tel:+94701234567' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Us', href: 'https://wa.me/94701234567', external: true },
                { icon: MapPin, label: 'Location', value: 'Sri Lanka & International' },
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

export default BloomSwiftPOS;
