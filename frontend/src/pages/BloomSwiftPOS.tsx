import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Package, BarChart3, MessageSquare, Users, Printer,
  Globe, Cloud, LayoutDashboard, ShoppingBag, Coffee, Building2,
  Pill, ShoppingCart, Briefcase, Code2, Shield, Zap, Phone,
  MapPin, MessageCircle, ExternalLink, Star, CheckCircle2
} from 'lucide-react';
import Footer from '../components/Footer';

// ─── animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
};
const vp = { once: true, margin: '-40px' };

// ─── counter hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1600) {
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
  const { count: projCount, ref: projRef } = useCountUp(20, 1600);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1a36]">

        {/* grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* blobs */}
        <div className="absolute top-[8%] right-[6%] w-[520px] h-[520px] bg-[#ff6b00]/[0.13] rounded-full blur-[110px] animate-pulse" />
        <div className="absolute bottom-[6%] left-[3%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '7s', animationDirection: 'reverse' }} />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a36]/95 via-[#0c1a36]/75 to-[#ff6b00]/15" />

        {/* Full-height POS image — right side, desktop only */}
        <div className="absolute right-0 top-0 h-full w-[48%] hidden lg:block">
          <img
            src="/supermarket-worker-pos.jpg"
            alt="BloomSwift POS in action"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0c1a36] to-transparent pointer-events-none" />
        </div>

        {/* bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-6 xl:px-12 pt-24 pb-20">
          <div className="lg:max-w-[55%]">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>

            {/* badge */}
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-3 px-5 py-2 mb-5 text-[11px] font-bold tracking-[0.28em] text-white uppercase bg-[#ff6b00]/18 backdrop-blur-md border border-[#ff6b00]/35 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] animate-pulse" />
              20+ POS Projects Delivered Across Sri Lanka &amp; Beyond
            </motion.div>

            {/* headline */}
            <motion.h1 variants={fadeUp} custom={0.05} className="text-[clamp(3rem,7.5vw,6.5rem)] font-black leading-[0.88] tracking-[-0.045em] text-white mb-4">
              Fast. Smart.<br />
              <span className="text-[#ff6b00]">Built for<br />Business.</span>
            </motion.h1>

            {/* subheadline */}
            <motion.p variants={fadeUp} custom={0.1} className="max-w-[40rem] text-[clamp(1rem,1.8vw,1.3rem)] font-medium text-white/78 leading-[1.72] mb-4">
              BloomSwift POS is a custom-built point-of-sale platform engineered for retail, restaurants, hospitality, pharmacy, and enterprise — deployed across Sri Lanka and internationally.
            </motion.p>

            {/* stack chips */}
            <motion.div variants={fadeUp} custom={0.14} className="flex flex-wrap gap-2.5 mb-6">
              {['Cloud + Local Deploy', 'SMS Notifications', 'Thermal Printing'].map(t => (
                <span key={t} className="px-3.5 py-1.5 bg-white/7 border border-white/12 rounded-full text-[12px] font-700 text-white/62 tracking-wide">{t}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.18} className="flex flex-wrap gap-4 mb-6">
              <a href="https://www.bloomswiftpos.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#ff6b00] text-white font-black text-base rounded-2xl hover:bg-[#e65c00] hover:shadow-[0_0_36px_rgba(255,107,0,.55)] transition-all active:scale-[.97]">
                Get a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-3 px-9 py-4 bg-white/10 backdrop-blur-md text-white font-black text-base rounded-2xl border-2 border-white/20 hover:bg-white hover:text-[#0c1a36] transition-all">
                View Projects
              </a>
            </motion.div>

            {/* live counters */}
            <motion.div variants={fadeUp} custom={0.22} className="flex flex-wrap gap-3 mb-4">
              {[
                { valEl: <span ref={projRef} className="text-[2.5rem] font-black text-[#ff6b00] leading-none tracking-[-0.04em]">{projCount}+</span>, label: 'POS Projects Delivered' },
                { val: '6',     label: 'Industries Served' },
                { val: '99.9%', label: 'Uptime' },
              ].map(({ val, valEl, label }) => (
                <div key={label} className="px-6 py-4 bg-white/6 backdrop-blur-md border border-white/10 rounded-[18px]">
                  {valEl ?? <span className="block text-[2.5rem] font-black text-[#ff6b00] leading-none tracking-[-0.04em]">{val}</span>}
                  <span className="block text-[11px] font-700 text-white/5 uppercase tracking-[0.18em] mt-1 text-white/50">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* sub-brand pill */}
            <motion.div variants={fadeUp} custom={0.26} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff6b00]/10 border border-[#ff6b00]/22 rounded-full">
              <span className="text-[11px] font-700 text-white/45 uppercase tracking-[0.13em]">A Sub-Brand of</span>
              <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-900 text-[#ff6b00] uppercase tracking-[0.13em] hover:underline">
                BloomTech.lk
              </a>
            </motion.div>

          </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section id="features" className="py-28 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Platform Features</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              Everything Your Business Needs<br />in One POS Platform
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Built from the ground up with modern technology — BloomSwift POS handles every aspect of your operations, from sales to inventory to reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 4) * 0.08}
                className="group bg-gray-50 rounded-[22px] p-7 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all"
              >
                <div className="w-13 h-13 rounded-[13px] bg-[#ff6b00]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff6b00] transition-colors w-[52px] h-[52px]">
                  <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[.9375rem] font-black text-[#0c1a36] mb-1.5">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section id="industries" className="py-28 bg-gray-50 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Industries We Serve</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              Tailored POS for Every Vertical
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
              BloomSwift POS is custom-built for each client — not a generic product. We understand the unique workflows, compliance, and realities of every sector we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 3) * 0.08}
                className="group bg-white rounded-[22px] p-7 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-[52px] h-[52px] rounded-[13px] bg-[#ff6b00]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff6b00] transition-colors">
                  <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[1.0625rem] font-black text-[#0c1a36] mb-1.5">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY BLOOMSWIFT ══════════════════════ */}
      <section className="py-28 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-[-80px] right-[4%] w-[480px] h-[480px] bg-[#ff6b00]/9 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-80px] left-[4%] w-[380px] h-[380px] bg-blue-500/9 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Why BloomSwift POS</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-white leading-[1.05] tracking-tight mb-4">
              Not Off-the-Shelf.<br />
              <span className="text-[#ff6b00]">Built for Your Business.</span>
            </h2>
            <p className="text-lg font-medium text-white/62 max-w-3xl mx-auto leading-relaxed">
              Every BloomSwift POS deployment is a custom project — engineered around your specific workflows, hardware, and operational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {differentiators.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={i * 0.12}
                className="group relative bg-white/5 backdrop-blur-sm rounded-[26px] p-9 border border-white/10 hover:bg-white/9 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#ff6b00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-[60px] h-[60px] rounded-[15px] bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center mb-6 group-hover:scale-[1.08] transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[1.25rem] font-black text-white mb-3">{title}</h3>
                  <p className="text-[.9375rem] font-medium text-white/62 leading-[1.72]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROJECTS ══════════════════════ */}
      <section id="projects" className="py-28 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Delivered Projects</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              20+ POS Systems Shipped<br />Across Sri Lanka &amp; Internationally
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Each BloomSwift POS is custom-built for its client and industry. Here's a sample of what we've delivered.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(({ sector, title, desc, tags }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="show" viewport={vp}
                variants={fadeUp} custom={(i % 3) * 0.08}
                className="group bg-gray-50 rounded-[22px] p-7 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all"
              >
                {/* delivered badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-[10px] font-black uppercase tracking-[0.1em] text-emerald-700 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Delivered
                </div>
                {/* sector */}
                <div className="inline-flex px-2.5 py-1 bg-[#ff6b00]/8 rounded-full text-[10px] font-700 uppercase tracking-[0.08em] text-[#ff6b00] mb-2.5 ml-1.5">
                  {sector}
                </div>
                <h3 className="text-[1.0625rem] font-black text-[#0c1a36] mb-1.5">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100">
                  {tags.map(t => (
                    <span key={t} className="text-[10px] font-700 text-gray-500 bg-gray-100 px-2 py-0.5 rounded-[6px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIAL ══════════════════════ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}
            className="max-w-[54rem] mx-auto bg-white rounded-[30px] p-12 md:p-14 border-2 border-gray-100 shadow-[0_24px_60px_rgba(0,0,0,.06)] text-center"
          >
            {/* quote icon */}
            <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center mx-auto mb-7">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            {/* stars */}
            <div className="flex justify-center gap-1.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-[clamp(1.0625rem,2vw,1.375rem)] font-semibold text-[#0c1a36] leading-[1.65] italic mb-7">
              "BloomSwift POS transformed how we run our restaurant group. The system was built exactly around our workflow — not the other way around. Real-time dashboards, SMS alerts when inventory runs low, and receipts that print flawlessly every time. Best technology investment we've made."
            </blockquote>
            <div className="text-[1rem] font-black text-[#0c1a36]">Gayan Weerasingha</div>
            <div className="text-[.8125rem] font-700 text-[#ff6b00] uppercase tracking-[0.1em] mt-1">Weerasingha Hardware · Sri Lanka</div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section id="contact" className="py-28 bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#b84a00] relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

            <motion.span variants={fadeUp} className="block text-[11px] font-black uppercase tracking-[0.3em] text-white/5 mb-3 text-white/50">Get Started</motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-white leading-[1.05] tracking-tight mb-4">
              Ready to Build Your<br />Custom POS System?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[1.0625rem] font-medium text-white/78 max-w-[42rem] mx-auto leading-[1.72] mb-10">
              Tell us about your business and we'll design a BloomSwift POS solution tailored to your industry, size, and budget. Typical deployments take 2–4 weeks.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="https://www.bloomswiftpos.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-white text-[#0c1a36] font-black text-base rounded-2xl hover:bg-gray-100 hover:shadow-[0_0_36px_rgba(255,255,255,.25)] transition-all">
                Visit BloomSwift POS <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-transparent text-white font-black text-base rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all">
                Explore BloomTech.lk
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              {[
                {
                  ico: <Phone className="w-5 h-5 text-white" />,
                  bg: 'bg-[#ff6b00]',
                  label: 'Call Us',
                  val: '+94 70 123 4567',
                  href: 'tel:+94701234567',
                },
                {
                  ico: <MessageCircle className="w-5 h-5 text-white" />,
                  bg: 'bg-green-600',
                  label: 'WhatsApp',
                  val: 'Chat with Us →',
                  href: 'https://wa.me/94701234567',
                },
                {
                  ico: <MapPin className="w-5 h-5 text-white" />,
                  bg: 'bg-blue-600',
                  label: 'Location',
                  val: 'Sri Lanka & International',
                  href: undefined,
                },
              ].map(({ ico, bg, label, val, href }) => (
                <div key={label} className="flex items-center gap-3.5 px-5 py-3.5 bg-white/8 backdrop-blur-md border border-white/14 rounded-2xl">
                  <div className={`w-10 h-10 ${bg} rounded-[10px] flex items-center justify-center shrink-0`}>{ico}</div>
                  <div className="text-left">
                    <div className="text-[10px] font-700 text-white/45 uppercase tracking-[0.15em] mb-0.5">{label}</div>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[.9375rem] font-black text-white hover:text-[#ff6b00] transition-colors">{val}</a>
                      : <span className="text-[.9375rem] font-black text-white">{val}</span>
                    }
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomSwiftPOS;
