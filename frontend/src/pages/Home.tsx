import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Brain, Server, Briefcase, Globe, ShieldCheck,
  CheckCircle2, Award, Target, Phone, MapPin,
  MessageCircle, Landmark, ShoppingBag, Heart, Package,
  Cpu, Check, Bot, HardDrive, FileSearch, Store, Calculator, Archive,
  Users, Layers, Cloud, MonitorSmartphone, QrCode, Search, Lock, Scale,
  Database, BarChart3, Smartphone, Network, Zap, WifiOff, Languages,
  UserCheck, Wrench, Clock, Headphones,
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { Section, Eyebrow, MediaFrame, BlockGrid, CtaBand, ContactRows, TextLink, PrimaryButton, StatsStrip, fade, GUTTER } from '../components/kit';
import { photos } from '../components/photos';
import { HeroShowcase } from '../components/home/HeroShowcase';
import { ServicesStack, type StackLayer } from '../components/home/ServicesStack';

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

// ─── presentation-only mappings (no new wording) ─────────────────────────────

// One real photo per service line, for the hero selector (same order as `services`)
const servicePhotos = [photos.engineerLab, photos.posCounter, photos.crm, photos.qr, photos.consulting];

// Layer diagram: each service as a layer, its tiles are the items named in its own description
const [svcAI, svcSuite, svcStrategic, svcDigital, svcAdvisory] = services;
const n = (icon: StackLayer['tiles'][number]['flow'][number]['icon'], label: string) => ({ icon, label });
const layer = (s: typeof services[number], tiles: StackLayer['tiles']): StackLayer => ({ title: s.title, desc: s.desc, link: s.link, icon: s.icon, tiles });
const stackLayers: StackLayer[] = [
  layer(svcDigital, [
    { label: 'High-performance websites', icon: MonitorSmartphone, flow: [n(Layers, 'Design'), n(MonitorSmartphone, 'Website'), n(Users, 'Visitors')] },
    { label: 'QR/NFC apps', icon: QrCode, flow: [n(QrCode, 'Scan'), n(Smartphone, 'App'), n(Database, 'Data')] },
    { label: 'SEO', icon: Search, flow: [n(Search, 'Search'), n(BarChart3, 'Ranking'), n(Users, 'Traffic')] },
  ]),
  layer(svcStrategic, [
    { label: 'Custom CRM', icon: Users, flow: [n(Users, 'Leads'), n(Database, 'CRM'), n(BarChart3, 'Reports')] },
    { label: 'ERP', icon: Layers, flow: [n(Package, 'Inventory'), n(Layers, 'ERP'), n(Calculator, 'Finance')] },
    { label: 'cloud platforms', icon: Cloud, flow: [n(Server, 'Servers'), n(Cloud, 'Cloud'), n(Users, 'Users')] },
  ]),
  layer(svcSuite, [
    { label: 'BloomSwift POS', icon: Store, flow: [n(Store, 'Sales'), n(Database, 'Inventory'), n(BarChart3, 'Analytics')] },
    { label: 'BloomAudit', icon: Calculator, flow: [n(Calculator, 'Ledgers'), n(FileSearch, 'Audit'), n(BarChart3, 'Reports')] },
    { label: 'BloomLTO', icon: Archive, flow: [n(HardDrive, 'Storage'), n(Archive, 'LTO Tape'), n(Search, 'Restore')] },
  ]),
  layer(svcAI, [
    { label: 'Custom AI agents', icon: Bot, flow: [n(Database, 'Data'), n(Bot, 'AI Agent'), n(Zap, 'Action')] },
    { label: 'on-premise models', icon: Server, flow: [n(Lock, 'Private'), n(Server, 'Server'), n(Brain, 'Model')] },
    { label: 'document intelligence', icon: FileSearch, flow: [n(FileSearch, 'Documents'), n(Brain, 'AI'), n(Database, 'Database')] },
  ]),
];
const stackPillar = layer(svcAdvisory, [
  { label: 'CISA-certified security', icon: ShieldCheck, flow: [n(Search, 'Audit'), n(ShieldCheck, 'Controls'), n(CheckCircle2, 'Compliant')] },
  { label: 'Zero Trust architecture', icon: Lock, flow: [n(Users, 'Users'), n(Lock, 'Verify'), n(Network, 'Network')] },
  { label: 'compliance aligned with CBSL and SEC', icon: Scale, flow: [n(FileSearch, 'Policies'), n(Scale, 'CBSL · SEC'), n(CheckCircle2, 'Aligned')] },
]);

const industryPhotos = [photos.apparel, photos.tourism, photos.finance, photos.healthcare, photos.retail, photos.manufacturing];

// Pillars band: a photo per advantage, plus keyword tiles quoted from each description
const advantagePhotos = [photos.team, photos.colomboAerial, photos.consultingRoom];
const advantageTiles = [
  [
    { icon: Award, label: 'ISO 27001' },
    { icon: ShieldCheck, label: 'NIST' },
    { icon: Landmark, label: 'CBSL' },
    { icon: Scale, label: 'SEC' },
  ],
  [
    { icon: Zap, label: 'Power-resilient architectures' },
    { icon: WifiOff, label: 'offline-capable apps' },
    { icon: Languages, label: 'bilingual interfaces' },
  ],
  [
    { icon: UserCheck, label: 'Dedicated account managers' },
    { icon: Wrench, label: 'rapid on-site response' },
    { icon: Clock, label: '24/7 remote monitoring' },
    { icon: Headphones, label: 'Sinhala and English' },
  ],
];

// ─── component ────────────────────────────────────────────────────────────────
const Home = () => {
  const reduce = useReducedMotion();

  // Counter values
  const { count: projectsCount, ref: projectsRef } = useCountUp(50);
  const { count: industriesCount, ref: industriesRef } = useCountUp(6);
  const { count: countriesCount, ref: countriesRef } = useCountUp(5);

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.home} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <HeroShowcase services={services.map((s, i) => ({ ...s, photo: servicePhotos[i] }))} />

      {/* ══════════════════════ STATS + TRUST STRIP ══════════════════════ */}
      <section className="bg-white border-b border-gray-200">
        <div className={GUTTER}>
          <StatsStrip
            stats={[
              { value: <span ref={projectsRef}>{projectsCount}+</span>, label: 'Projects Delivered' },
              { value: <span ref={industriesRef}>{industriesCount}</span>, label: 'Industries Served' },
              { value: <span ref={countriesRef}>{countriesCount}</span>, label: 'Countries' },
              { value: 'Yes', label: 'CISA Certified' },
            ]}
          />
          <div className="border-t border-gray-200 py-6 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-10">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 shrink-0">
              Industries We Serve Across Sri Lanka
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 flex-1 gap-y-3">
              {trustIndustries.map(({ icon: Icon, label }, i) => (
                <li key={label} className={`group flex items-center gap-2.5 text-sm font-semibold text-navy pr-3 ${i > 0 ? 'lg:border-l lg:border-gray-200 lg:pl-5' : ''}`}>
                  <span className="w-8 h-8 rounded-md bg-grey-light text-navy-mid flex items-center justify-center shrink-0 transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="w-4 h-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES ══════════════════════ */}
      <Section tone="white" id="services">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14">
          <motion.div {...fade()} className="lg:col-span-7">
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Complete Technology Solutions
            </h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="lg:col-span-5">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Five practice areas covering everything Sri Lankan businesses need to compete and grow.
            </p>
            <TextLink to="/company" light={false}>About BloomTech.lk</TextLink>
          </motion.div>
        </div>

        <ServicesStack layers={stackLayers} pillar={stackPillar} />
      </Section>

      {/* ══════════════════════ SRI LANKA FOCUS ══════════════════════ */}
      <Section tone="grey">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          <motion.div {...fade()} className="lg:col-span-5 lg:pr-16">
            <Eyebrow>Sri Lanka First</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
              Built for how Sri Lankan businesses actually operate
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Every product we build accounts for the real constraints of running a business in Sri Lanka — from power reliability to regulatory compliance to the languages your team speaks.
            </p>
            <MediaFrame photo={photos.colomboSkyline} />
          </motion.div>

          <div className="lg:col-span-7 lg:pl-16 lg:border-l lg:border-gray-200">
            <ol className="border-b border-gray-200">
              {sriLankaFeatures.map((text, i) => (
                <motion.li key={text} {...fade(i * 0.06)} className="flex gap-6 py-7 border-t border-gray-200 first:border-t-0 lg:first:pt-0">
                  <span className="font-mono text-sm font-bold text-brand-orange-dark pt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-xl font-extrabold text-navy leading-snug">{text}</p>
                </motion.li>
              ))}
            </ol>

            {/* HQ panel */}
            <motion.div {...fade(0.15)} className="mt-10 rounded-2xl bg-navy p-7 lg:p-8 grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-white font-extrabold text-lg mb-1.5">Mawaramandiya HQ</div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">
                    Based in the Western Province — serving clients from Colombo to Kandy to Galle, island-wide and internationally.
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col gap-6 sm:gap-4 sm:pl-8 sm:border-l sm:border-white/10">
                <div>
                  <div className="text-white font-bold">24/7 Local Support</div>
                  <div className="text-white/50 text-sm">English &amp; Sinhala</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white leading-none tracking-tight">99.9%</div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/45 mt-1.5">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fade(0.2)} className="mt-10">
              <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <Section tone="white">
        <motion.div {...fade()} className="text-center mb-14 max-w-3xl mx-auto">
          <Eyebrow center>Sectors We Serve</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            Deep expertise across Sri Lanka's key sectors
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We understand the unique challenges, regulations, and opportunities in Sri Lanka's most important industries.
          </p>
        </motion.div>

        <BlockGrid
          cols={3}
          items={industries.map(({ icon, name, desc }, i) => ({
            icon,
            num: String(i + 1).padStart(2, '0'),
            title: name,
            desc,
            image: industryPhotos[i],
          }))}
        />
      </Section>

      {/* ══════════════════════ WHY BLOOMTECH ══════════════════════ */}
      <section className="bg-navy-dark py-20 lg:py-24">
        <div className={GUTTER}>
          <motion.div {...fade()} className="text-center mb-14 max-w-3xl mx-auto">
            <Eyebrow center light>Why BloomTech.lk</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Sri Lanka's technology partner that understands your business
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto_auto] border-t border-white/10">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid lg:grid-rows-subgrid lg:row-span-6 py-10 lg:px-10 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 border-white/10"
              >
                <div className="group relative h-52 lg:h-56 mb-8 rounded-xl overflow-hidden">
                  <img src={advantagePhotos[i].src} alt={advantagePhotos[i].alt} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
                  <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
                </div>
                <Icon className="w-6 h-6 text-white/70 mb-6" strokeWidth={1.75} />
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/70 leading-relaxed mb-8">{desc}</p>

                {/* the matching differentiator, ticking in */}
                <div className="mb-8 rounded-xl bg-white/[0.03] p-5 flex items-center gap-4">
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.3 + i * 0.2 }}
                    className="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center shrink-0"
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </motion.span>
                  <span className="font-bold text-white leading-snug">{differentiators[i]}</span>
                </div>

                <ul className="grid grid-cols-2 gap-2 content-start" aria-hidden="true">
                  {advantageTiles[i].map((t, k) => {
                    const wide = k === advantageTiles[i].length - 1 && advantageTiles[i].length % 2 === 1;
                    return (
                      <li key={t.label} className={wide ? 'col-span-2' : ''}>
                        <div className="group/tile h-full flex items-center gap-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-3 transition-colors">
                          <span className="w-8 h-8 rounded-md bg-white/[0.07] text-white/70 flex items-center justify-center shrink-0 transition-colors group-hover/tile:bg-white group-hover/tile:text-navy">
                            <t.icon className="w-4 h-4" />
                          </span>
                          <span className="text-sm font-bold text-white leading-snug first-letter:uppercase">{t.label}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <CtaBand
        title="Ready to transform your Sri Lankan business?"
        text="Connect with our Mawaramandiya team in Sinhala or English — at a pace that suits your business."
        button="Get in Touch"
        to="/contact"
        secondary={<TextLink to="/company">About BloomTech.lk</TextLink>}
      >
        <ContactRows
          rows={[
            { icon: Phone, label: 'Phone', value: socialMedia.phone, href: `tel:${socialMedia.phone.replace(/\s/g, '')}` },
            { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Us', href: `https://wa.me/${socialMedia.whatsapp}`, external: true },
            { icon: MapPin, label: 'Location', value: 'Mawaramandiya, Sri Lanka' },
          ]}
        />
      </CtaBand>

      <Footer />
    </div>
  );
};

export default Home;
