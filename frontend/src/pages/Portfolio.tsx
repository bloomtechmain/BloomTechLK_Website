import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Star, CheckCircle2, X, ExternalLink,
  Search, Clock, Building2, ArrowRight,
  Layers, Award, Zap,
  BarChart3, Shield, Database, ShoppingCart,
  ClipboardCheck, Users, Wifi, WifiOff, Package,
  TrendingUp, FileText, Bell,
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { getSEOConfig } from '../utils/seoConfig';
import { PageHero, Breadcrumb, Section, Eyebrow, CtaBand, TextLink, fade, GUTTER, type Photo } from '../components/kit';
import { photos } from '../components/photos';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientProject {
  id: number;
  title: string;
  slug: string;
  category: string;
  client_name: string;
  client_industry: string;
  short_desc: string;
  full_desc: string;
  technologies: string[];
  image_url: string;
  project_url?: string;
  status: 'completed' | 'in_progress' | 'featured' | 'coming_soon' | 'capability';
  featured: boolean;
  duration_months: number;
  completion_date: string | null;
  key_outcomes: string[];
  display_order: number;
}

interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface BloomProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  image: string;
  accentColor: string;
  textAccent: string;
  bgAccent: string;
  borderAccent: string;
  features: ProductFeature[];
  technologies: string[];
  metrics: { value: string; label: string }[];
  keyOutcomes: string[];
  serviceSlug: string;
  fullDescription: string;
}

// ─── Static config ────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Web & Mobile', 'AI & Machine Learning', 'Enterprise Software', 'IT Infrastructure', 'Digital Marketing'];
const STATUS_CFG: Record<string, { label: string; bg: string }> = {
  featured:   { label: 'Featured',      bg: 'bg-[#FF6B00]'  },
  completed:  { label: 'We Build This', bg: 'bg-[#101D36]'  },
  in_progress:{ label: 'We Build This', bg: 'bg-[#101D36]'  },
  coming_soon:{ label: 'We Build This', bg: 'bg-[#101D36]'  },
  capability: { label: 'We Build This', bg: 'bg-[#101D36]'  },
};


// ─── BloomTech Product Definitions ───────────────────────────────────────────

const BLOOM_PRODUCTS: BloomProduct[] = [
  {
    id: 'bloomaudit',
    name: 'BloomAudit',
    tagline: 'Enterprise Compliance, Simplified.',
    description: 'BloomAudit is a comprehensive IT audit and compliance management platform purpose-built for regulated industries. It automates the entire audit lifecycle — from risk scheduling through evidence collection, finding management, and board-ready reporting — replacing fragmented spreadsheet processes with a single, tamper-proof source of truth.',
    fullDescription: 'BloomAudit transforms how organisations manage compliance and audit obligations. Built after deep engagement with banking and finance clients in Sri Lanka, the platform maps to Central Bank of Sri Lanka frameworks, ISO 27001, and custom regulatory templates. Role-based workflows ensure auditors, management, and board members each see exactly what they need. The real-time risk heat-map surfaces emerging issues before they escalate, while the immutable audit trail satisfies the most demanding regulators.',
    category: 'Enterprise Software',
    status: 'Live & Active',
    image: '/images/IT_Consolting.jpg',
    accentColor: '#3b82f6',
    textAccent: 'text-blue-500',
    bgAccent: 'bg-blue-500',
    borderAccent: 'border-blue-500/30',
    features: [
      { icon: <ClipboardCheck className="w-4 h-4" />, title: 'Automated Compliance Reporting', desc: 'Generate CBSL-ready audit reports in one click with pre-built regulatory templates.' },
      { icon: <BarChart3 className="w-4 h-4" />,      title: 'Risk Assessment Dashboards',     desc: 'Real-time risk heat maps with drill-down analysis across every business unit.' },
      { icon: <Shield className="w-4 h-4" />,         title: 'Immutable Audit Trails',          desc: 'Tamper-proof, timestamped logs for every system action — meeting the toughest regulators.' },
      { icon: <FileText className="w-4 h-4" />,       title: 'Framework Mapping',               desc: 'Pre-built support for CBSL, SEC, ISO 27001, and custom internal frameworks.' },
      { icon: <Users className="w-4 h-4" />,          title: 'Multi-Department Coordination',   desc: 'Coordinate audits across 20+ departments with role-based access and task assignment.' },
      { icon: <Bell className="w-4 h-4" />,           title: 'Proactive Alerts',                desc: 'Automated escalation and deadline reminders keep audits on track automatically.' },
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Nginx', 'JWT Auth'],
    metrics: [
      { value: '85%',   label: 'Reduction in audit prep time' },
      { value: '98%',   label: 'Average compliance score' },
      { value: '12+',   label: 'Regulatory frameworks' },
      { value: '500+',  label: 'Audit templates available' },
    ],
    keyOutcomes: [
      '85% reduction in manual audit preparation time',
      'Real-time compliance dashboards across all departments',
      'Automated regulatory reporting aligned to CBSL requirements',
      '100% tamper-proof audit trail with cryptographic logging',
      'Zero compliance violations in client deployments',
    ],
    serviceSlug: 'bloomaudit',
  },
  {
    id: 'bloomlto',
    name: 'BloomLTO',
    tagline: 'Your LTO Library, Finally Searchable.',
    description: 'BloomLTO is searchable LTO tape archive software that indexes every file the moment it\'s archived to tape — name, path, size, and tape barcode — so restoring a file means searching a catalog, not guessing which cartridge it\'s on.',
    fullDescription: 'Tape is cheap and reliable, but finding one file across a decade of cartridges is a nightmare without a catalog. BloomLTO solves exactly this. The platform watches mounted folders and network sources, archives to LTO in the open LTFS format on a schedule you set, and indexes every file as it\'s written. Re-hash verification and cold-spare duplication protect against media loss, while a full restore audit log tracks who recovered what, from which tape, and when. Built on open standards, tapes stay readable with or without BloomLTO on hand.',
    category: 'IT Infrastructure',
    status: 'Live & Active',
    image: '/images/dc-hero.png',
    accentColor: '#ff6b00',
    textAccent: 'text-[#ff6b00]',
    bgAccent: 'bg-[#ff6b00]',
    borderAccent: 'border-[#ff6b00]/30',
    features: [
      { icon: <Search className="w-4 h-4" />,      title: 'Searchable Catalog',        desc: 'Every file indexed by name, path, size, and tape barcode on archive.' },
      { icon: <Clock className="w-4 h-4" />,        title: 'Scheduled Archiving',       desc: 'Automated runs across specified libraries and sources, on schedule.' },
      { icon: <FileText className="w-4 h-4" />,     title: 'Restore Audit Log',         desc: 'Full recovery history — who restored what, from which tape, and when.' },
      { icon: <Shield className="w-4 h-4" />,       title: 'Verification & Duplication',desc: 'Re-hash checks and cold-spare duplicate copies protect against media loss.' },
      { icon: <Package className="w-4 h-4" />,      title: 'Open LTFS Format',          desc: 'Tapes stay readable with any LTFS-compatible tool — even without BloomLTO.' },
      { icon: <Bell className="w-4 h-4" />,         title: 'Centralized Alerts',        desc: 'One attention page plus optional email alerts for jobs needing a look.' },
    ],
    technologies: ['Node.js', 'Electron', 'SQLite', 'LTFS', 'IBM & HPE Drive APIs', 'React', 'TypeScript', 'Windows / Linux'],
    metrics: [
      { value: '18 TB',   label: 'Native capacity per LTO-9 tape' },
      { value: 'LTO-5–9', label: 'Drive generations supported' },
      { value: '30-Day',  label: 'Free trial available' },
      { value: '100%',    label: 'Open LTFS format' },
    ],
    keyOutcomes: [
      'Every archived file searchable by name, path, size, and tape barcode',
      'Re-hash verification and cold-spare duplication protect against media loss',
      'Full restore audit log — who restored what, from which tape, and when',
      'Open LTFS format keeps tapes readable with or without BloomLTO',
      'Native support across LTO-5 through LTO-9 drives and libraries',
    ],
    serviceSlug: 'bloomlto',
  },
  {
    id: 'bloomswift',
    name: 'BloomSwift POS',
    tagline: 'Fast Checkout. Smarter Business.',
    description: 'BloomSwift POS is a sleek, enterprise-grade point-of-sale system built for speed, reliability, and scalability across Sri Lanka\'s retail and hospitality sectors. From a single boutique to a 35-branch retail chain, BloomSwift handles every transaction with 99.9% uptime — even when the internet goes down.',
    fullDescription: 'Sri Lanka\'s retail environment demands a POS system that can operate reliably across mixed connectivity, handle multi-currency pricing, and provide real-time visibility across dozens of branches. BloomSwift POS meets all of these requirements. Built on an offline-first architecture using SQLite locally and PostgreSQL centrally, every terminal continues selling during outages and synchronises the moment connectivity is restored. The management dashboard gives owners real-time P&L, inventory alerts, and staff performance across every outlet from a single screen.',
    category: 'Retail Technology',
    status: 'Live · 35+ Branches',
    image: '/images/CRM_&_ERP.jpg',
    accentColor: '#10b981',
    textAccent: 'text-emerald-500',
    bgAccent: 'bg-emerald-500',
    borderAccent: 'border-emerald-500/30',
    features: [
      { icon: <Building2 className="w-4 h-4" />,   title: 'Multi-Location Management',  desc: 'Centralised control for unlimited branches from a single dashboard.' },
      { icon: <Package className="w-4 h-4" />,      title: 'Real-Time Inventory Sync',   desc: 'Stock levels update instantly across all locations with low-stock alerts.' },
      { icon: <Star className="w-4 h-4" />,         title: 'Customer Loyalty Programs',  desc: 'Points, rewards, and tier management to drive repeat business.' },
      { icon: <TrendingUp className="w-4 h-4" />,   title: 'Advanced Sales Analytics',   desc: 'Revenue trends, peak hours, and product performance — all in real time.' },
      { icon: <WifiOff className="w-4 h-4" />,      title: 'Offline Capability',          desc: 'Keeps selling during outages; syncs automatically on reconnect.' },
      { icon: <ShoppingCart className="w-4 h-4" />, title: 'Hardware Integration',        desc: 'Works with receipt printers, barcode scanners, and cash drawers.' },
    ],
    technologies: ['React', 'Electron', 'Node.js', 'SQLite', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'REST API'],
    metrics: [
      { value: '35+',   label: 'Branches deployed' },
      { value: '99.9%', label: 'Terminal uptime' },
      { value: '50%',   label: 'Faster checkout speed' },
      { value: '6.4M+', label: 'Daily transactions (LKR)' },
    ],
    keyOutcomes: [
      '35+ retail branches live with zero-downtime deployment',
      '99.9% terminal uptime — including full offline operation',
      '50% faster average transaction and checkout speed',
      'Centralised inventory visible across all branches in real time',
      'Accounting system integration eliminated manual reconciliation',
    ],
    serviceSlug: 'bloomswift-pos',
  },
];

// ─── Capability showcase data ─────────────────────────────────────────────────
// These represent solution types BloomTech is capable of delivering — not
// historical client case studies.

const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 3, featured: false, display_order: 3, status: 'capability',
    title: 'Hotel & Property Management System',
    slug: 'hotel-chain-management-platform',
    category: 'Enterprise Software',
    client_name: '',
    client_industry: 'Tourism & Hospitality',
    duration_months: 10, completion_date: null,
    image_url: '/images/Cloud_application_Deployment.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Socket.io'],
    short_desc: 'We build unified property management systems for hotels and resorts — covering reservations, revenue management, housekeeping, guest loyalty, and real-time analytics across multiple properties.',
    full_desc: 'BloomTech can deliver a fully bespoke Property Management System (PMS) for your hospitality business. Whether you operate a single boutique hotel or a multi-property group, we build platforms that unify every operation — front desk, housekeeping, F&B, and revenue management — into one clean interface. Our solutions include direct booking engines with dynamic pricing, guest loyalty programmes, and integrations with OTA channels and payment gateways.',
    key_outcomes: [
      'Unified operations across all properties from a single dashboard',
      'Direct booking engine to reduce OTA commission dependency',
      'Dynamic pricing engine based on occupancy and demand',
      'Guest loyalty programme to drive repeat bookings',
      'Real-time housekeeping and F&B coordination',
    ],
  },
  {
    id: 5, featured: false, display_order: 5, status: 'capability',
    title: 'Enterprise Cybersecurity & Zero Trust Architecture',
    slug: 'enterprise-cybersecurity-overhaul',
    category: 'IT Infrastructure',
    client_name: '',
    client_industry: 'Banking & Finance',
    duration_months: 4, completion_date: null,
    image_url: '/images/security-hero.png',
    technologies: ['Cisco Firepower', 'CrowdStrike EDR', 'Splunk SIEM', 'Zero Trust', 'HashiCorp Vault'],
    short_desc: 'We design and deploy full Zero Trust security architectures — including EDR, perimeter hardening, SIEM, and compliance frameworks — protecting your organisation from modern threats.',
    full_desc: 'BloomTech\'s CISA-certified security team designs and implements enterprise-grade cybersecurity infrastructure tailored to regulated industries. We conduct a thorough infrastructure audit, identify vulnerabilities, and execute a phased remediation roadmap — delivering Zero Trust network segmentation, endpoint detection and response, 24/7 SIEM monitoring, and compliance-ready evidence packages for frameworks such as SOC2, ISO 27001, and CBSL guidelines.',
    key_outcomes: [
      'Zero Trust network architecture eliminating lateral threat movement',
      'Full endpoint protection across all devices',
      '24/7 automated threat monitoring with incident response',
      'Compliance-ready evidence package for SOC2 / ISO 27001 / CBSL',
      'Significant reduction in overall attack surface',
    ],
  },
  {
    id: 6, featured: false, display_order: 6, status: 'capability',
    title: 'Multilingual Tourism & Travel Mobile App',
    slug: 'sri-lanka-tourism-mobile-app',
    category: 'Web & Mobile',
    client_name: '',
    client_industry: 'Tourism & Travel',
    duration_months: 8, completion_date: null,
    image_url: '/images/digital-marketing.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Stripe'],
    short_desc: 'We build multilingual tourism platforms — mobile apps and web portals with hotel discovery, experience booking, local guide networks, and offline map support across Sinhala, English, and Tamil.',
    full_desc: 'BloomTech builds full-featured tourism applications for the Sri Lankan and regional market. Our platforms combine hotel and experience discovery, certified local guide networks, secure payment processing, and interactive offline maps — all delivered in Sinhala, English, and Tamil. We integrate with accommodation inventory feeds, build custom aggregation APIs, and ensure the app performs reliably across Sri Lanka\'s variable connectivity conditions.',
    key_outcomes: [
      'iOS and Android apps with full Sinhala, English, and Tamil support',
      'Hotel and experience inventory integration via aggregation API',
      'Offline map support for low-connectivity and rural areas',
      'Secure in-app payments with Stripe integration',
      'Real-time booking management and notification system',
    ],
  },
  {
    id: 7, featured: false, display_order: 7, status: 'capability',
    title: 'QR / NFC Asset Tracking & Lifecycle Management',
    slug: 'qr-industrial-asset-tracking',
    category: 'Web & Mobile',
    client_name: '',
    client_industry: 'Manufacturing & Industry',
    duration_months: 4, completion_date: null,
    image_url: '/images/Asset_Life_cycle.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'QR Code API', 'PWA', 'Tailwind CSS'],
    short_desc: 'We build QR and NFC-based asset tracking systems that give you real-time visibility over every asset — from machinery to IT equipment — with integrated maintenance scheduling and procurement workflows.',
    full_desc: 'BloomTech designs and deploys custom asset lifecycle management platforms for industrial and enterprise clients. Every asset is tagged with a unique QR or NFC label. Field staff use our mobile-first PWA to scan, inspect, and update assets in real time — even without internet connectivity. The central dashboard gives management full visibility of asset locations, condition history, upcoming maintenance, and procurement needs across every site.',
    key_outcomes: [
      'Complete real-time visibility of every asset across all locations',
      'Mobile-first PWA with offline scanning capability',
      'Automated maintenance scheduling and reminder system',
      'Reduction in asset loss through continuous accountability',
      'Integration with procurement and accounting systems',
    ],
  },
  {
    id: 8, featured: false, display_order: 8, status: 'capability',
    title: 'AI-Driven Demand Forecasting & ERP Integration',
    slug: 'ai-demand-forecasting-erp',
    category: 'AI & Machine Learning',
    client_name: '',
    client_industry: 'Manufacturing & Retail',
    duration_months: 10, completion_date: null,
    image_url: '/images/Custom_AI_Development.jpg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'React', 'AWS', 'Apache Kafka'],
    short_desc: 'We build machine learning–driven demand forecasting engines that integrate with your ERP — cutting overstock, accelerating procurement decisions, and delivering significant cost savings.',
    full_desc: 'BloomTech builds production-grade AI forecasting systems that connect directly to your existing ERP or inventory management platform. Our models ingest historical sales data, seasonal patterns, and external market signals to generate accurate SKU-level demand forecasts weeks in advance. A custom React dashboard gives planners full visibility into forecast confidence, anomaly alerts, and one-click procurement requisitions — transforming inventory planning from reactive to predictive.',
    key_outcomes: [
      'SKU-level demand forecasts up to 12 weeks ahead',
      'Significant reduction in overstock and dead inventory',
      'Integration with SAP, Odoo, and custom ERP systems',
      'One-click procurement requisition from forecast data',
      'Anomaly detection alerts for unusual demand patterns',
    ],
  },
  {
    id: 9, featured: false, display_order: 9, status: 'capability',
    title: 'Full-Funnel Digital Marketing & SEO Strategy',
    slug: 'digital-marketing-seo-strategy',
    category: 'Digital Marketing',
    client_name: '',
    client_industry: 'E-Commerce & Retail',
    duration_months: 6, completion_date: null,
    image_url: '/images/graphic-design.jpg',
    technologies: ['Google Analytics 4', 'Google Ads', 'Meta Ads', 'SEMrush', 'WordPress', 'HotJar'],
    short_desc: 'We deliver full-funnel digital marketing — technical SEO, AI-assisted content, paid media management, and CRO — engineered to grow your organic traffic and return on ad spend.',
    full_desc: 'BloomTech\'s digital marketing team runs data-driven campaigns that cover every stage of the funnel. We start with a full technical SEO audit (Core Web Vitals, schema markup, crawlability), build an AI-assisted content strategy targeting high-value keywords, and manage paid media across Google and Meta. A custom real-time analytics dashboard gives you live visibility into every KPI — from cost-per-click to organic revenue attribution.',
    key_outcomes: [
      'Technical SEO audit and full Core Web Vitals remediation',
      'AI-assisted content strategy targeting high-value search terms',
      'Paid media management across Google, Meta, and local platforms',
      'Real-time analytics dashboard with revenue attribution',
      'Conversion rate optimisation through A/B testing and heatmaps',
    ],
  },
];

// ─── Presentation-only mappings (data above is untouched) ────────────────────

// Real photography per capability card, keyed by project id
const PROJECT_PHOTOS: Record<number, Photo> = {
  3: photos.tourism,
  5: photos.serverRacks,
  6: photos.tourismBeach,
  7: photos.crmWarehouse,
  8: photos.manufacturing,
  9: photos.marketingStats,
};
const projectPhoto = (p: ClientProject): Photo => PROJECT_PHOTOS[p.id] ?? { src: p.image_url, alt: p.title };

// ─── CSS Product Mockups (product screenshots keep their own colours) ───────

const BloomAuditMockup = () => (
  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f172a]">
    {/* Browser chrome */}
    <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 bg-[#0f172a] rounded-lg px-3 py-1 text-[10px] text-gray-500 text-center font-medium">
        app.bloomaudit.lk / dashboard
      </div>
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    </div>
    {/* App layout */}
    <div className="flex h-[300px]">
      {/* Sidebar */}
      <div className="w-12 bg-[#0f172a] border-r border-white/5 flex flex-col items-center py-4 gap-4">
        <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
          <Shield className="w-3.5 h-3.5 text-white" />
        </div>
        {[BarChart3, ClipboardCheck, FileText, Users, Bell].map((Icon, i) => (
          <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : ''}`}>
            <Icon className="w-3.5 h-3.5 text-gray-500" />
          </div>
        ))}
      </div>
      {/* Main area */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white text-[11px] font-black">Compliance Dashboard</p>
            <p className="text-gray-500 text-[9px]">FY 2025/26 · CBSL Reporting Framework</p>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-2 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[9px] font-bold">Live</span>
          </div>
        </div>
        {/* Stat row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { val: '98%', lbl: 'Score', col: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            { val: '3',   lbl: 'Findings', col: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
            { val: '12',  lbl: 'Depts',  col: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20'   },
            { val: '0',   lbl: 'Overdue', col: 'text-gray-300',   bg: 'bg-white/5 border-white/10'          },
          ].map((s) => (
            <div key={s.lbl} className={`rounded-xl p-2 text-center border ${s.bg}`}>
              <div className={`text-base font-black ${s.col}`}>{s.val}</div>
              <div className="text-gray-500 text-[8px] mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          {[
            { label: 'Risk Assessment', pct: 95, color: 'bg-blue-500' },
            { label: 'Control Testing',  pct: 88, color: 'bg-purple-500' },
            { label: 'CB Reporting',     pct: 100, color: 'bg-emerald-500' },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                <span>{row.label}</span><span className="font-bold text-white">{row.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className={`h-full ${row.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Audit trail table */}
        <div className="bg-white/5 rounded-xl overflow-hidden">
          <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Recent Audit Activity</span>
            <span className="text-[8px] text-blue-400 font-bold">View All →</span>
          </div>
          {[
            { user: 'K. Perera', action: 'Evidence uploaded', dept: 'IT', time: '2m ago', dot: 'bg-emerald-400' },
            { user: 'S. Silva',  action: 'Risk rated: Medium',dept: 'Finance', time: '15m ago', dot: 'bg-amber-400' },
            { user: 'M. Fernando', action: 'Report signed off', dept: 'Compliance', time: '1h ago', dot: 'bg-blue-400' },
          ].map((row) => (
            <div key={row.user} className="flex items-center gap-2.5 px-3 py-2 border-b border-white/5 last:border-0">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.dot}`} />
              <span className="text-[9px] font-bold text-white truncate flex-1">{row.user}</span>
              <span className="text-[8px] text-gray-500 truncate">{row.action}</span>
              <span className="text-[8px] text-gray-600 flex-shrink-0">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BloomLTOMockup = () => (
  <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f172a] border border-white/10">
    {/* App layout */}
    <div className="flex h-[300px]">
      {/* Sidebar */}
      <div className="w-12 bg-[#0f172a] border-r border-white/5 flex flex-col items-center py-4 gap-4">
        <div className="w-7 h-7 rounded-lg bg-[#ff6b00] flex items-center justify-center">
          <Database className="w-3.5 h-3.5 text-white" />
        </div>
        {[Search, Layers, Package, Bell].map((Icon, i) => (
          <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-white/10' : ''}`}>
            <Icon className="w-3.5 h-3.5 text-gray-500" />
          </div>
        ))}
      </div>
      {/* Main area */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white text-[11px] font-black">Catalog Search</p>
            <p className="text-gray-500 text-[9px]">48 tapes indexed · Library: Colombo-DR</p>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-2 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[9px] font-bold">Live</span>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-4">
          <Search className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-[10px] text-gray-400">invoice_2019_Q4.xlsx</span>
        </div>
        {/* Stat row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { val: '18TB', lbl: 'Per Tape', col: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            { val: '5',    lbl: 'Jobs',     col: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20'   },
            { val: '48',   lbl: 'Tapes',    col: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/20'    },
            { val: '0',    lbl: 'Alerts',   col: 'text-gray-300',    bg: 'bg-white/5 border-white/10'            },
          ].map((s) => (
            <div key={s.lbl} className={`rounded-xl p-2 text-center border ${s.bg}`}>
              <div className={`text-base font-black ${s.col}`}>{s.val}</div>
              <div className="text-gray-500 text-[8px] mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          {[
            { label: 'Finance_Backup_Q3', pct: 72, color: 'bg-blue-500' },
            { label: 'Render_Archive_2024', pct: 45, color: 'bg-purple-500' },
            { label: 'Verify: LTO-0412', pct: 100, color: 'bg-emerald-500' },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                <span>{row.label}</span><span className="font-bold text-white">{row.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className={`h-full ${row.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Search results table */}
        <div className="bg-white/5 rounded-xl overflow-hidden">
          <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Search Results</span>
            <span className="text-[8px] text-blue-400 font-bold">3 matches</span>
          </div>
          {[
            { file: 'invoice_2019_Q4.xlsx', tape: 'LTO-0427', size: '2.4 GB', dot: 'bg-emerald-400' },
            { file: 'invoice_2019_Q4_bak.xlsx', tape: 'LTO-0198', size: '2.4 GB', dot: 'bg-blue-400' },
            { file: 'invoice_2019_Q4.pdf', tape: 'LTO-0427', size: '640 KB', dot: 'bg-amber-400' },
          ].map((row) => (
            <div key={row.file} className="flex items-center gap-2.5 px-3 py-2 border-b border-white/5 last:border-0">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.dot}`} />
              <span className="text-[9px] font-bold text-white truncate flex-1">{row.file}</span>
              <span className="text-[8px] text-gray-500 truncate">{row.tape}</span>
              <span className="text-[8px] text-gray-600 flex-shrink-0">{row.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BloomSwiftMockup = () => (
  <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#111827] border border-white/10">
    {/* Browser chrome */}
    <div className="bg-[#1f2937] px-4 py-2.5 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 bg-[#111827] rounded-lg px-3 py-1 text-[10px] text-gray-500 text-center font-medium">
        pos.bloomswift.lk · Branch: Colombo 03
      </div>
      <div className="flex items-center gap-1">
        <Wifi className="w-3.5 h-3.5 text-emerald-400" />
        <span className="text-emerald-400 text-[9px] font-bold">Online</span>
      </div>
    </div>
    {/* Header bar */}
    <div className="bg-[#1f2937] px-4 py-2 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg">BloomSwift</div>
        <span className="text-gray-400 text-[10px]">Cashier: A. Perera</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-[10px]">
        <span>09:42 AM</span>
        <span className="text-gray-700">·</span>
        <span>Transaction #0247</span>
      </div>
    </div>
    {/* Main POS layout */}
    <div className="grid grid-cols-5 h-[260px]">
      {/* Product grid */}
      <div className="col-span-3 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">Products</span>
          <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2 py-1">
            <Search className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600 text-[9px]">Search or scan...</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name: 'Rice 5kg',    price: '2,450', color: 'from-blue-700 to-blue-900',    hot: false },
            { name: 'Coconut Oil', price: '1,200', color: 'from-amber-600 to-amber-800',  hot: true  },
            { name: 'Sugar 1kg',   price: '380',   color: 'from-pink-700 to-pink-900',    hot: false },
            { name: 'Bread',       price: '120',   color: 'from-green-700 to-green-900',  hot: false },
            { name: 'Milk 1L',     price: '320',   color: 'from-purple-700 to-purple-900',hot: false },
            { name: 'Eggs ×10',    price: '680',   color: 'from-orange-700 to-orange-900',hot: true  },
          ].map((p) => (
            <div key={p.name} className={`relative bg-gradient-to-br ${p.color} rounded-xl p-2.5 cursor-pointer hover:opacity-90 transition-opacity`}>
              {p.hot && (
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-2 h-2 text-white" />
                </div>
              )}
              <p className="text-white text-[9px] font-bold leading-tight">{p.name}</p>
              <p className="text-white/70 text-[8px] mt-1">LKR {p.price}</p>
            </div>
          ))}
        </div>
        {/* Category tabs */}
        <div className="flex gap-1.5 mt-2.5">
          {['All', 'Groceries', 'Beverages', 'Snacks'].map((t, i) => (
            <div key={t} className={`px-2.5 py-1 rounded-lg text-[8px] font-bold cursor-pointer ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-white/5 text-gray-500'}`}>
              {t}
            </div>
          ))}
        </div>
      </div>
      {/* Cart panel */}
      <div className="col-span-2 bg-[#1f2937] p-3 flex flex-col border-l border-white/10">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">Current Order</span>
          <span className="text-gray-600 text-[8px]">3 items</span>
        </div>
        <div className="space-y-1.5 flex-1 overflow-hidden">
          {[
            { name: 'Rice 5kg',    qty: 2, total: '4,900' },
            { name: 'Coconut Oil', qty: 1, total: '1,200' },
            { name: 'Bread',       qty: 3, total: '360'   },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-2">
              <span className="text-gray-400 text-[9px] flex-1 truncate">{item.name}</span>
              <span className="text-gray-600 text-[9px] flex-shrink-0">×{item.qty}</span>
              <span className="text-white text-[9px] font-black flex-shrink-0">{item.total}</span>
            </div>
          ))}
        </div>
        {/* Totals */}
        <div className="border-t border-white/10 pt-2.5 mt-2.5 space-y-1.5">
          <div className="flex justify-between text-[9px]">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-300">LKR 6,460</span>
          </div>
          <div className="flex justify-between text-[9px]">
            <span className="text-gray-500">Discount</span>
            <span className="text-emerald-400">— LKR 100</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-gray-300 text-[10px] font-bold">Total</span>
            <span className="text-emerald-400 text-[16px] font-black">6,360</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-2">
            <button className="bg-white/10 rounded-xl py-2 text-center text-gray-400 text-[9px] font-bold">Cash</button>
            <button className="bg-emerald-500 rounded-xl py-2 text-center text-white text-[9px] font-black">Charge ▶</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Shared UI helpers ────────────────────────────────────────────────────────

const TechTag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-gray-600 whitespace-nowrap">
    {label}
  </span>
);

const CatBadge = ({ category }: { category: string }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white text-navy">
    <Layers className="w-3 h-3" />{category}
  </span>
);

const StatusBadge = ({ status }: { status: string }) => {
  const cfg = STATUS_CFG[status] ?? STATUS_CFG.completed;
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-navy">
      {cfg.label}
    </span>
  );
};

// ─── Client Project Card ──────────────────────────────────────────────────────

const ClientCard = ({ project, index, onOpen }: { project: ClientProject; index: number; onOpen: (p: ClientProject) => void }) => {
  const extra = project.technologies.length - 4;
  const pic = projectPhoto(project);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className="group bg-grey-light rounded-xl overflow-hidden flex flex-col shadow-[5px_5px_0_0_#D5DAE3] hover:bg-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#101D36] transition-all duration-200"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={pic.src}
          alt={pic.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).src = '/bloomtech-logo.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 bg-navy/70">
          <button
            onClick={() => onOpen(project)}
            className="flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            See Capabilities <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Only show category badge — no fake status badge */}
        <div className="absolute top-3 left-3">
          <CatBadge category={project.category} />
        </div>
        {/* "We Build This" pill top-right */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-navy">
            <Zap className="w-3 h-3" /> We Build This
          </span>
        </div>
      </div>
      <div className="p-6 lg:p-7 flex flex-col flex-1">
        {/* Industry target */}
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange-dark mb-2">
          For {project.client_industry}
        </p>
        <h3 className="text-xl font-extrabold leading-snug text-navy mb-3">{project.title}</h3>
        <div className="flex-1 mb-5">
          <p className="text-gray-700 leading-relaxed line-clamp-3">{project.short_desc}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((t) => <TechTag key={t} label={t} />)}
          {extra > 0 && <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold text-navy bg-white">+{extra} more</span>}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            {project.duration_months ? `~${project.duration_months} months` : 'Flexible timeline'}
          </div>
          <button onClick={() => onOpen(project)} className="group/l flex items-center gap-1.5 text-sm font-bold text-navy">
            Learn More <ArrowRight className="w-4 h-4 group-hover/l:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Client Project Modal ─────────────────────────────────────────────────────

const ClientModal = ({ project, onClose }: { project: ClientProject; onClose: () => void }) => {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);
  const pic = projectPhoto(project);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 bg-navy-dark/75 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-[10px_10px_0_0_#101D36] my-auto"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img src={pic.src} alt={pic.alt} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/bloomtech-logo.png'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <CatBadge category={project.category} />
              <StatusBadge status={project.status} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{project.title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange-dark mb-3">What We Build</h3>
              <p className="text-gray-700 leading-relaxed">{project.full_desc}</p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange-dark mb-4">What You Get</h3>
              <ul className="space-y-2">
                {project.key_outcomes.map((o, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                    className="flex items-start gap-3 rounded-lg bg-grey-light px-4 py-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-navy-mid mt-0.5 flex-shrink-0" /><span>{o}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange-dark mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-white text-xs font-semibold rounded-md bg-navy">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-grey-light rounded-xl p-5 space-y-4">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange-dark">Solution Details</h3>
              {project.client_industry && (
                <div className="flex gap-3"><Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div><p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Target Industry</p>
                  <p className="text-sm font-bold text-navy">{project.client_industry}</p></div>
                </div>
              )}
              {project.duration_months > 0 && (
                <div className="flex gap-3"><Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div><p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Typical Timeline</p>
                  <p className="text-sm font-bold text-navy">~{project.duration_months} months</p></div>
                </div>
              )}
              <div className="flex gap-3"><Award className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div><p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Delivery</p>
                <p className="text-sm font-bold text-navy">Custom-built for your requirements</p></div>
              </div>
              <div className="flex gap-3"><Zap className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div><p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Capability</p>
                <p className="text-sm font-bold text-navy">Ready to deliver</p></div>
              </div>
            </div>
            <Link to="/contact" onClick={onClose}
              className="group w-full flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Start This Project
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── BloomTech Product Modal ──────────────────────────────────────────────────

const ProductModal = ({ product, onClose }: { product: BloomProduct; onClose: () => void }) => {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);

  const Mockup = product.id === 'bloomaudit' ? BloomAuditMockup : product.id === 'bloomlto' ? BloomLTOMockup : BloomSwiftMockup;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 bg-navy-dark/80 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden my-auto bg-navy"
      >
        <span className="absolute left-0 top-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-8 md:p-10 pb-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white ${product.bgAccent}`}>
              {product.status}
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45">{product.category}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{product.name}</h2>
          <p className={`text-lg font-semibold mb-4 ${product.textAccent}`}>{product.tagline}</p>
          <p className="text-white/60 text-[15px] leading-relaxed max-w-3xl">{product.fullDescription}</p>
        </div>

        {/* Mockup */}
        <div className="px-8 md:px-10 py-8">
          <div className="bg-white/[0.04] rounded-xl p-6">
            <p className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">Product Interface Preview</p>
            <Mockup />
          </div>
        </div>

        <div className="px-8 md:px-10 pb-10 grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest mb-5">Core Features</h3>
            <div className="space-y-4">
              {product.features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg text-white flex items-center justify-center flex-shrink-0 ${product.bgAccent}`}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-white mb-0.5">{f.title}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-7">
            {/* Metrics */}
            <div>
              <h3 className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.metrics.map((m) => (
                  <div key={m.label} className="bg-white/[0.05] rounded-lg p-4">
                    <p className={`text-2xl font-extrabold mb-1 ${product.textAccent}`}>{m.value}</p>
                    <p className="text-[11px] text-white/50 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 text-white/75 text-[11px] font-semibold rounded-md">{t}</span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <Link to={`/services/${product.serviceSlug}`} onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-[13px] py-3.5 rounded-xl transition-colors">
                <ExternalLink className="w-4 h-4" /> Product Page
              </Link>
              <Link to="/contact" onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white font-bold text-[13px] py-3.5 rounded-xl hover:bg-white hover:text-navy transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<BloomProduct | null>(null);

  const clientProjects = CLIENT_PROJECTS;

  const filtered = useMemo(() => clientProjects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.short_desc.toLowerCase().includes(q)
      || p.client_industry?.toLowerCase().includes(q) || p.technologies.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchQ;
  }), [clientProjects, activeCategory, searchQuery]);

  const openProject = useCallback((p: ClientProject) => setSelectedProject(p), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const openProduct  = useCallback((p: BloomProduct) => setSelectedProduct(p), []);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  return (
    <div className="min-h-screen bg-white">
      <SEO config={getSEOConfig('portfolio')} />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <PageHero
        photo={photos.devTeam}
        breadcrumb={<Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]} />}
        eyebrow="Our Work"
        title={<>Project <span className="block">Portfolio</span></>}
        text="From our own product suite to enterprise client projects — here's the technology we've built for Sri Lankan businesses and beyond."
      >
        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 max-w-2xl">
          {[
            { v: '3',    l: 'BloomTech Products' },
            { v: '8+',   l: 'Client Projects' },
            { v: '10+',  l: 'Industries Served' },
            { v: '99.9%',l: 'Platform Uptime' },
          ].map(({ v, l }, i) => (
            <div key={l} className={`pt-5 pb-1 pr-4 ${i % 2 === 1 ? 'pl-5 border-l border-white/10' : ''} ${i === 2 ? 'sm:pl-5 sm:border-l sm:border-white/10' : ''}`}>
              <div className="text-3xl font-extrabold text-white mb-1 tracking-tight">{v}</div>
              <div className="text-xs text-white/55 leading-snug">{l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── BloomTech Product Suite ─────────────────────────────────────────── */}
      <Section tone="white">
        <motion.div {...fade()} className="mb-14 flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div>
            <Eyebrow>BloomTech Product Suite</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Our own products
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-xl leading-relaxed">
              Software we've designed, built, and actively deploy for clients across Sri Lanka.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-grey-light rounded-lg px-4 py-2.5 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span className="text-navy text-[13px] font-bold">All products live &amp; active</span>
          </div>
        </motion.div>

        {/* Product cards */}
        <div className="space-y-10">
          {BLOOM_PRODUCTS.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const Mockup = product.id === 'bloomaudit' ? BloomAuditMockup
                         : product.id === 'bloomlto'   ? BloomLTOMockup
                         : BloomSwiftMockup;
            return (
              <motion.div
                key={product.id}
                {...fade()}
                className="group relative rounded-2xl overflow-hidden bg-navy shadow-[8px_8px_0_0_#D5DAE3]"
              >
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 [&>*]:min-w-0">

                  {/* ── Text panel ── */}
                  <div className={`p-8 sm:p-10 xl:p-14 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white ${product.bgAccent}`}>{product.status}</span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45">{product.category}</span>
                    </div>

                    <h3 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight mb-2">{product.name}</h3>
                    <p className={`text-lg font-semibold mb-5 ${product.textAccent}`}>{product.tagline}</p>
                    <p className="text-[15px] text-white/60 leading-relaxed mb-8">{product.description}</p>

                    {/* Feature grid */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-8">
                      {product.features.slice(0, 4).map((f) => (
                        <div key={f.title} className="group/f flex items-start gap-3 bg-white/[0.05] hover:bg-white/[0.09] rounded-lg p-3.5 transition-colors">
                          <div className={`w-8 h-8 rounded-md text-white flex items-center justify-center flex-shrink-0 ${product.bgAccent}`}>
                            {f.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-tight mb-0.5">{f.title}</p>
                            <p className="text-[11px] text-white/50 leading-snug line-clamp-2">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Metrics row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 mb-8">
                      {product.metrics.map((m, i) => (
                        <div key={m.label} className={`pt-4 pr-3 ${i > 0 ? 'sm:pl-4 sm:border-l sm:border-white/10' : ''} ${i % 2 === 1 ? 'pl-4 border-l border-white/10' : ''}`}>
                          <p className={`text-xl font-extrabold ${product.textAccent}`}>{m.value}</p>
                          <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {product.technologies.slice(0, 6).map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-white/10 text-white/70 text-[11px] font-semibold rounded-md">{t}</span>
                      ))}
                      {product.technologies.length > 6 && (
                        <span className={`px-2.5 py-1 border ${product.borderAccent} ${product.textAccent} text-[11px] font-bold rounded-md`}>
                          +{product.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-5">
                      <button
                        onClick={() => openProduct(product)}
                        className="group/b inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors"
                      >
                        View Full Details <ArrowRight className="w-4 h-4 group-hover/b:translate-x-1 transition-transform" />
                      </button>
                      <Link
                        to={`/services/${product.serviceSlug}`}
                        className="group/s inline-flex items-center gap-2 font-bold text-sm text-white hover:text-white/75 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Service Page
                      </Link>
                    </div>
                  </div>

                  {/* ── Mockup panel ── */}
                  <div className={`relative p-6 sm:p-8 xl:p-12 flex items-center justify-center min-h-[420px] bg-navy-mid ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                      <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest">Live Product Preview</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-400">Active</span>
                      </div>
                    </div>
                    <div className="w-full mt-8 overflow-x-auto">
                      <div className="min-w-[440px]">
                        <Mockup />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key outcomes footer */}
                <div className="border-t border-white/10 px-8 sm:px-10 xl:px-14 py-5">
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {product.keyOutcomes.slice(0, 3).map((o, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/55">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${product.textAccent}`} />
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── Client Projects ─────────────────────────────────────────────────── */}
      <section className="bg-grey-light">

        {/* Section header + filter bar */}
        <div className="sticky top-[84px] z-40 bg-grey-light/95 border-b border-border-grey">
          <div className={`${GUTTER} py-5`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <h2 className="text-lg font-extrabold text-navy">Solutions We Can Build</h2>
                <p className="text-xs text-gray-500">Enterprise solutions ready to deliver for your business</p>
              </div>
              <div className="w-px h-8 bg-border-grey hidden lg:block" />

              {/* Category pills */}
              <div className="flex items-center gap-2 flex-wrap flex-1">
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} aria-pressed={activeCategory === cat}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${activeCategory === cat ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-grey-hover'}`}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center gap-2.5 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-60">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Search solutions..." value={searchQuery}
                    aria-label="Search solutions"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-[13px] bg-white rounded-lg text-navy placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-navy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={`${GUTTER} py-12 lg:py-16`}>
          <div className="flex items-center justify-between mb-8">
            <p className="text-[13px] text-gray-600">
              Showing <span className="font-bold text-navy">{filtered.length}</span> of <span className="font-bold text-navy">{clientProjects.length}</span> solutions
            </p>
            {(activeCategory !== 'All' || searchQuery) && (
              <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-xs font-bold text-navy hover:underline underline-offset-4 flex items-center gap-1">
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="w-14 h-14 rounded-xl bg-white text-navy-mid flex items-center justify-center mx-auto mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-2">No solutions found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or category filter.</p>
              <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors">
                Clear Filters
              </button>
            </motion.div>
          )}

          {filtered.length > 0 && (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => <ClientCard key={p.id} project={p} index={i} onOpen={openProject} />)}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <CtaBand
        eyebrow="Start Your Project"
        title={<>Have a project <span className="block sm:inline">in mind?</span></>}
        text="Our CISA-certified team has delivered transformative technology for businesses across Sri Lanka. Let's build something extraordinary together."
        button="Start a Conversation"
        to="/contact"
        secondary={<TextLink to="/company">Learn About Us</TextLink>}
      />

      <Footer />

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && <ClientModal project={selectedProject} onClose={closeProject} />}
        {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProduct} />}
      </AnimatePresence>
    </div>
  );
};



export default Portfolio;
