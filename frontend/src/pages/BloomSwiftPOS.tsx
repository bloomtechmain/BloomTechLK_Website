import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Package, BarChart3, MessageSquare, Users, Printer,
  Globe, Cloud, LayoutDashboard, ShoppingBag, Coffee, Building2,
  Pill, ShoppingCart, Briefcase, Code2, Shield, Zap, Phone,
  MapPin, MessageCircle, ExternalLink, Star
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig, siteUrl } from '../utils/seoConfig';
import {
  PageHero, Section, Heading, BlockGrid, CtaBand, ContactRows, PhotoBand, PrimaryButton, TextLink, fade,
} from '../components/kit';
import { servicePhotos } from '../components/photos';

const pics = servicePhotos['bloomswift-pos'];

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
    <div className="bg-white">

      <SEO
        config={getSEOConfig('service', 'bloomswift-pos')}
        breadcrumbs={[
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'BloomSwift POS', url: `${siteUrl}/services/bloomswift-pos/` }
        ]}
      />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <PageHero
        photo={pics.hero}
        eyebrow={<>20+ POS Projects Delivered Across Sri Lanka &amp; Beyond</>}
        title={<>Fast, smart, <span className="block">built for business</span></>}
        text="BloomSwift POS is a custom-built point-of-sale platform engineered for retail, restaurants, hospitality, pharmacy, and enterprise — deployed across Sri Lanka and internationally."
        minH="lg:min-h-[760px]"
      >
        <div className="flex flex-wrap gap-2 mt-7">
          {['Cloud + Local Deploy', 'SMS Notifications', 'Thermal Printing'].map(t => (
            <span key={t} className="px-3 py-1.5 rounded-md bg-white/[0.07] text-xs font-semibold text-white/75">{t}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <PrimaryButton href="https://www.bloomswiftpos.com/" external>Get a Demo</PrimaryButton>
          <TextLink href="#projects">View Projects</TextLink>
        </div>

        {/* live counters */}
        <div className="mt-10 grid grid-cols-3 border-t border-white/10 max-w-xl">
          {[
            { valEl: <span ref={projRef}>{projCount}+</span>, label: 'POS Projects Delivered' },
            { valEl: '6', label: 'Industries Served' },
            { valEl: '99.9%', label: 'Uptime' },
          ].map(({ valEl, label }, i) => (
            <div key={label} className={`pt-5 pr-4 ${i > 0 ? 'pl-5 border-l border-white/10' : ''}`}>
              <div className="text-3xl font-extrabold text-white mb-1 tracking-tight">{valEl}</div>
              <div className="text-xs text-white/55 leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* sub-brand line */}
        <div className="mt-8 inline-flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest">A Sub-Brand of</span>
          <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:underline underline-offset-4">
            BloomTech.lk
          </a>
        </div>
      </PageHero>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <Section tone="white" id="features">
        <Heading
          center
          eyebrow="Platform Features"
          title="Everything your business needs in one POS platform"
          sub="Built from the ground up with modern technology — BloomSwift POS handles every aspect of your operations, from sales to inventory to reporting."
        />
        <BlockGrid
          cols={4}
          items={features.map(({ icon, title, desc }, i) => ({ icon, title, desc, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <Section tone="grey" id="industries">
        <Heading
          eyebrow="Industries We Serve"
          title="Tailored POS for every vertical"
          image={pics.a}
        >
          <p>
            BloomSwift POS is custom-built for each client — not a generic product. We understand the unique workflows, compliance, and realities of every sector we serve.
          </p>
        </Heading>
        <BlockGrid
          cols={3}
          items={industries.map(({ icon, title, desc }) => ({ icon, title, desc }))}
        />
      </Section>

      {/* ══════════════════════ WHY BLOOMSWIFT ══════════════════════ */}
      <Section tone="dark">
        <Heading
          light
          center
          eyebrow="Why BloomSwift POS"
          title={<>Not off-the-shelf. <span className="block">Built for your business.</span></>}
          sub="Every BloomSwift POS deployment is a custom project — engineered around your specific workflows, hardware, and operational needs."
        />
        <BlockGrid
          dark
          cols={3}
          items={differentiators.map(({ icon, title, desc }, i) => ({ icon, title, desc, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* ══════════════════════ PROJECTS ══════════════════════ */}
      <Section tone="white" id="projects">
        <Heading
          center
          eyebrow="Delivered Projects"
          title={<>20+ POS systems shipped across Sri Lanka &amp; internationally</>}
          sub="Each BloomSwift POS is custom-built for its client and industry. Here's a sample of what we've delivered."
        />
        <BlockGrid
          cols={3}
          items={projects.map(({ sector, title, desc, tags }) => ({
            tag: sector,
            sub: (
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-navy">
                <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                Delivered
              </span>
            ),
            title,
            desc,
            stack: tags,
          }))}
        />
      </Section>

      {/* ══════════════════════ TESTIMONIAL ══════════════════════ */}
      <Section tone="grey">
        <motion.figure
          {...fade()}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-10 md:p-14 shadow-[8px_8px_0_0_#101D36] text-center"
        >
          <div className="flex justify-center gap-1.5 mb-7" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-navy text-navy" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-navy mb-8">
            "BloomSwift POS transformed how we run our restaurant group. The system was built exactly around our workflow — not the other way around. Real-time dashboards, SMS alerts when inventory runs low, and receipts that print flawlessly every time. Best technology investment we've made."
          </blockquote>
          <span className="block w-10 h-px bg-brand-orange mx-auto mb-5" />
          <figcaption>
            <div className="text-base font-extrabold text-navy">Gayan Weerasingha</div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mt-1">Weerasingha Hardware · Sri Lanka</div>
          </figcaption>
        </motion.figure>
      </Section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <CtaBand
        id="contact"
        title="Ready to build your custom POS system?"
        text="Tell us about your business and we'll design a BloomSwift POS solution tailored to your industry, size, and budget. Typical deployments take 2–4 weeks."
        secondary={
          <>
            <PrimaryButton href="https://www.bloomswiftpos.com/" external icon={ExternalLink}>Visit BloomSwift POS</PrimaryButton>
            <TextLink href="https://www.bloomtech.lk" external>Explore BloomTech.lk</TextLink>
          </>
        }
      >
        <ContactRows
          rows={[
            { icon: Phone, label: 'Call Us', value: '+94 70 123 4567', href: 'tel:+94701234567' },
            { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Us', href: 'https://wa.me/94701234567', external: true },
            { icon: MapPin, label: 'Location', value: 'Sri Lanka & International' },
          ]}
        />
      </CtaBand>

      <Footer />
    </div>
  );
};



export default BloomSwiftPOS;
