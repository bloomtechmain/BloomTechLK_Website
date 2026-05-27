import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Star, CheckCircle2, X, ExternalLink,
  Search, Clock, Building2, Calendar, ArrowRight,
  Layers, Award, Filter, SlidersHorizontal, Zap,
  BarChart3, Shield, Smartphone, MapPin, ShoppingCart,
  ClipboardCheck, Users, Wifi, WifiOff, Package,
  TrendingUp, FileText, Bell, ChevronDown,
} from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig } from '../utils/seoConfig';
import axios from 'axios';

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
  status: 'completed' | 'in_progress' | 'featured' | 'coming_soon';
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
  featured:   { label: 'Featured',      bg: 'bg-[#ff6b00]'  },
  completed:  { label: 'We Build This', bg: 'bg-[#0c1a36]'  },
  in_progress:{ label: 'We Build This', bg: 'bg-[#0c1a36]'  },
  coming_soon:{ label: 'We Build This', bg: 'bg-[#0c1a36]'  },
  capability: { label: 'We Build This', bg: 'bg-[#0c1a36]'  },
};

const CAT_CFG: Record<string, { border: string; bg: string; text: string }> = {
  'Web & Mobile':          { border: 'border-blue-200',   bg: 'bg-blue-50',   text: 'text-blue-700'   },
  'AI & Machine Learning': { border: 'border-purple-200', bg: 'bg-purple-50', text: 'text-purple-700' },
  'Enterprise Software':   { border: 'border-orange-200', bg: 'bg-orange-50', text: 'text-orange-700' },
  'IT Infrastructure':     { border: 'border-gray-200',   bg: 'bg-gray-50',   text: 'text-gray-700'   },
  'Digital Marketing':     { border: 'border-green-200',  bg: 'bg-green-50',  text: 'text-green-700'  },
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
    id: 'bloomgo',
    name: 'BloomGo',
    tagline: 'Your Field Team, Fully Connected.',
    description: 'BloomGo is a smart field service and mobile workforce management platform that keeps field teams productive, coordinated, and connected — whether they\'re in Colombo or deep in Sri Lanka\'s rural regions. From AI-assisted job dispatch to offline-capable mobile forms, BloomGo eliminates the chaos of manual field coordination.',
    fullDescription: 'Managing field teams across Sri Lanka\'s diverse geography presents unique challenges — variable connectivity, long distances, and complex routing. BloomGo was designed to solve exactly this. The platform combines an intelligent dispatch engine with a native mobile app (iOS and Android) that works fully offline, syncing automatically when connectivity is restored. Supervisors get a live dashboard with real-time job status, team locations, and SLA tracking. Customers receive automated SMS updates at every job milestone.',
    category: 'Mobile & Field Operations',
    status: 'Live & Active',
    image: '/images/av-hero.png',
    accentColor: '#ff6b00',
    textAccent: 'text-[#ff6b00]',
    bgAccent: 'bg-[#ff6b00]',
    borderAccent: 'border-[#ff6b00]/30',
    features: [
      { icon: <Zap className="w-4 h-4" />,        title: 'Smart Job Scheduling',    desc: 'AI-assisted dispatch with skill-based assignment and workload balancing.' },
      { icon: <MapPin className="w-4 h-4" />,      title: 'Route Optimisation',      desc: 'Real-time routing with traffic awareness reduces travel time by 40%.' },
      { icon: <FileText className="w-4 h-4" />,    title: 'Digital On-Site Forms',   desc: 'Custom form builder with photo capture, signatures, and auto-report generation.' },
      { icon: <Smartphone className="w-4 h-4" />,  title: 'Live GPS Tracking',       desc: 'Team locations updated every 60 seconds with geofence alerts.' },
      { icon: <WifiOff className="w-4 h-4" />,     title: 'Offline-First Operation', desc: 'Full functionality without internet — syncs instantly on reconnect.' },
      { icon: <Users className="w-4 h-4" />,       title: 'Team Communication',      desc: 'In-app messaging with job context keeps everyone on the same page.' },
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Socket.io', 'Firebase FCM', 'SQLite'],
    metrics: [
      { value: '40%',  label: 'Reduction in travel time' },
      { value: '95%',  label: 'On-time job completion rate' },
      { value: 'iOS + Android', label: 'Cross-platform support' },
      { value: '100%', label: 'Offline-capable' },
    ],
    keyOutcomes: [
      '40% reduction in field team travel time through route optimisation',
      '95% on-time job completion rate across all deployments',
      'Offline-first — works in Sri Lanka\'s remote areas without connectivity',
      'Automated customer SMS updates at every job milestone',
      'Real-time supervisor dashboard with live team location tracking',
    ],
    serviceSlug: 'bloomgo',
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

// ─── CSS Product Mockups ──────────────────────────────────────────────────────

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

const BloomGoMockup = () => (
  <div className="flex items-center justify-center gap-6">
    {/* Phone frame */}
    <div className="w-[175px] bg-[#0c1a36] rounded-[32px] p-2.5 shadow-2xl border-[3px] border-[#1a305c] flex-shrink-0">
      {/* Notch */}
      <div className="w-14 h-4 bg-[#1a305c] rounded-full mx-auto mb-2 flex items-center justify-center">
        <div className="w-8 h-1 bg-[#0c1a36] rounded-full" />
      </div>
      {/* Screen */}
      <div className="bg-gray-50 rounded-[22px] overflow-hidden">
        {/* App header */}
        <div className="bg-[#ff6b00] px-3 pt-3 pb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white text-[11px] font-black">BloomGo</span>
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3 text-white/80" />
              <div className="w-3 h-3 rounded-full bg-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          </div>
          <p className="text-orange-100 text-[8px]">Today: 8 jobs · 3 completed</p>
        </div>
        {/* Map area */}
        <div className="h-[90px] relative overflow-hidden bg-gradient-to-br from-blue-100 via-green-50 to-blue-100">
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border border-gray-200/60" />
            ))}
          </div>
          {/* Roads */}
          <div className="absolute top-[35%] left-0 right-0 h-[2px] bg-white/70" />
          <div className="absolute left-[40%] top-0 bottom-0 w-[2px] bg-white/70" />
          {/* Job pins */}
          <div className="absolute top-2 left-4 w-4 h-4 bg-[#ff6b00] rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <span className="text-white text-[6px] font-black">1</span>
          </div>
          <div className="absolute top-[45%] left-[55%] w-4 h-4 bg-[#ff6b00] rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <span className="text-white text-[6px] font-black">2</span>
          </div>
          <div className="absolute bottom-3 right-5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
          </div>
          <div className="absolute top-3 right-10 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white shadow-md" />
          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            <path d="M 16 12 Q 60 50 88 50 Q 130 50 155 85" stroke="#ff6b00" strokeWidth="1.5" fill="none" strokeDasharray="4 2" opacity="0.6" />
          </svg>
        </div>
        {/* Job list */}
        <div className="px-2.5 py-2 space-y-1.5">
          {[
            { id: 'J-0421', name: 'Network Install', status: 'Done',       color: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50' },
            { id: 'J-0422', name: 'CCTV Repair',    status: 'Active',     color: 'bg-[#ff6b00]',   text: 'text-orange-600', bg: 'bg-orange-50' },
            { id: 'J-0423', name: 'Server Upgrade', status: 'Scheduled',  color: 'bg-blue-500',    text: 'text-blue-600',   bg: 'bg-blue-50'   },
          ].map((j) => (
            <div key={j.id} className={`flex items-center gap-2 ${j.bg} rounded-xl px-2 py-1.5`}>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${j.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-black text-gray-800 truncate">{j.name}</p>
                <p className="text-[7px] text-gray-500">{j.id}</p>
              </div>
              <span className={`text-[7px] font-bold ${j.text} flex-shrink-0`}>{j.status}</span>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="flex justify-around py-2 border-t border-gray-100 px-2">
          {[MapPin, ClipboardCheck, Users, BarChart3].map((Icon, i) => (
            <div key={i} className={`p-1.5 rounded-lg ${i === 0 ? 'bg-[#ff6b00]' : ''}`}>
              <Icon className={`w-3.5 h-3.5 ${i === 0 ? 'text-white' : 'text-gray-400'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Supervisor dashboard side panel */}
    <div className="flex-1 space-y-2.5 hidden sm:block">
      <div className="bg-[#0c1a36] rounded-2xl p-3.5 border border-white/10">
        <p className="text-[9px] font-black text-[#ff6b00] uppercase tracking-widest mb-2">Live Supervisor View</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { val: '8', lbl: 'Active Jobs', col: 'text-white' },
            { val: '3', lbl: 'Completed',   col: 'text-emerald-400' },
            { val: '2', lbl: 'En Route',    col: 'text-[#ff6b00]'  },
            { val: '0', lbl: 'Overdue',     col: 'text-gray-400'   },
          ].map((m) => (
            <div key={m.lbl} className="bg-white/5 rounded-xl p-2 text-center">
              <p className={`text-lg font-black ${m.col}`}>{m.val}</p>
              <p className="text-gray-600 text-[8px]">{m.lbl}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0c1a36] rounded-2xl p-3.5 border border-white/10">
        <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2">Today's SLA</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '95%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#ff6b00] to-amber-400 rounded-full"
            />
          </div>
          <span className="text-white font-black text-[11px] flex-shrink-0">95%</span>
        </div>
        <p className="text-gray-600 text-[8px] mt-1">On-time completion rate</p>
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
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0c1a36]/6 text-[#0c1a36]/70 border border-[#0c1a36]/10 whitespace-nowrap">
    {label}
  </span>
);

const CatBadge = ({ category }: { category: string }) => {
  const cfg = CAT_CFG[category] ?? { border: 'border-gray-200', bg: 'bg-gray-50', text: 'text-gray-700' };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${cfg.border} ${cfg.bg} ${cfg.text}`}>
      <Layers className="w-3 h-3" />{category}
    </span>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const cfg = STATUS_CFG[status] ?? STATUS_CFG.completed;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${cfg.bg}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />{cfg.label}
    </span>
  );
};

// ─── Client Project Card ──────────────────────────────────────────────────────

const ClientCard = ({ project, index, onOpen }: { project: ClientProject; index: number; onOpen: (p: ClientProject) => void }) => {
  const extra = project.technologies.length - 4;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0c1a36]/8 transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { (e.target as HTMLImageElement).src = '/bloomtech-logo.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#0c1a36]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onOpen(project)}
            className="flex items-center gap-2 bg-[#ff6b00] text-white font-black text-sm px-6 py-3 rounded-2xl shadow-xl translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-[#0c1a36]/80 backdrop-blur-sm border border-white/10">
            <Zap className="w-3 h-3" /> We Build This
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        {/* Industry target */}
        <p className="text-[11px] font-bold text-[#ff6b00] uppercase tracking-widest mb-2">
          For {project.client_industry}
        </p>
        <h3 className="text-[17px] font-black text-[#0c1a36] leading-snug mb-3 group-hover:text-[#ff6b00] transition-colors duration-300">{project.title}</h3>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">{project.short_desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((t) => <TechTag key={t} label={t} />)}
          {extra > 0 && <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold text-[#ff6b00] bg-orange-50 border border-orange-100">+{extra} more</span>}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {project.duration_months ? `~${project.duration_months} months` : 'Flexible timeline'}
          </div>
          <button onClick={() => onOpen(project)} className="flex items-center gap-1.5 text-[12px] font-black text-[#ff6b00] hover:gap-3 transition-all">
            Learn More <ChevronRight className="w-4 h-4" />
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

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl my-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
          <X className="w-5 h-5 text-[#0c1a36]" />
        </button>
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/bloomtech-logo.png'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a36] via-[#0c1a36]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <CatBadge category={project.category} />
              <StatusBadge status={project.status} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">{project.title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-7">
            <div>
              <h3 className="text-[11px] font-black text-[#ff6b00] uppercase tracking-widest mb-3">What We Build</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{project.full_desc}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-[#ff6b00] uppercase tracking-widest mb-4">What You Get</h3>
              <ul className="space-y-2.5">
                {project.key_outcomes.map((o, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                    className="flex items-start gap-3 text-[14px] text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><span>{o}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-[#ff6b00] uppercase tracking-widest mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-[#0c1a36] text-white text-[12px] font-bold rounded-xl">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
              <h3 className="text-[11px] font-black text-[#ff6b00] uppercase tracking-widest">Solution Details</h3>
              {project.client_industry && (
                <div className="flex gap-3"><Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target Industry</p>
                  <p className="text-[13px] font-bold text-[#0c1a36]">{project.client_industry}</p></div>
                </div>
              )}
              {project.duration_months > 0 && (
                <div className="flex gap-3"><Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Typical Timeline</p>
                  <p className="text-[13px] font-bold text-[#0c1a36]">~{project.duration_months} months</p></div>
                </div>
              )}
              <div className="flex gap-3"><Award className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery</p>
                <p className="text-[13px] font-bold text-[#0c1a36]">Custom-built for your requirements</p></div>
              </div>
              <div className="flex gap-3"><Zap className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Capability</p>
                <p className="text-[13px] font-bold text-emerald-600">Ready to deliver</p></div>
              </div>
            </div>
            <Link to="/contact" onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-[#ff6b00] text-white font-black text-[13px] py-3.5 rounded-2xl hover:bg-orange-600 transition-colors">
              <ArrowRight className="w-4 h-4" /> Start This Project
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

  const Mockup = product.id === 'bloomaudit' ? BloomAuditMockup : product.id === 'bloomgo' ? BloomGoMockup : BloomSwiftMockup;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative w-full max-w-5xl bg-[#0c1a36] rounded-[32px] overflow-hidden shadow-2xl my-auto border border-white/10"
      >
        <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Header */}
        <div className="p-8 md:p-10 pb-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${product.bgAccent}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />{product.status}
            </span>
            <span className="text-[11px] font-bold text-gray-400">{product.category}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{product.name}</h2>
          <p className={`text-lg font-black ${product.textAccent} mb-4`}>{product.tagline}</p>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-3xl">{product.fullDescription}</p>
        </div>

        {/* Mockup */}
        <div className="px-8 md:px-10 py-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Product Interface Preview</p>
            <Mockup />
          </div>
        </div>

        <div className="px-8 md:px-10 pb-10 grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-5">Core Features</h3>
            <div className="space-y-4">
              {product.features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl ${product.bgAccent} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white">{f.icon}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-white mb-0.5">{f.title}</p>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-7">
            {/* Metrics */}
            <div>
              <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className={`text-2xl font-black ${product.textAccent} mb-1`}>{m.value}</p>
                    <p className="text-[11px] text-gray-500 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 text-gray-300 text-[11px] font-bold rounded-xl border border-white/10">{t}</span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <Link to={`/services/${product.serviceSlug}`} onClick={onClose}
                className={`flex-1 flex items-center justify-center gap-2 ${product.bgAccent} text-white font-black text-[13px] py-3.5 rounded-2xl hover:opacity-90 transition-opacity`}>
                <ExternalLink className="w-4 h-4" /> Product Page
              </Link>
              <Link to="/contact" onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-black text-[13px] py-3.5 rounded-2xl hover:bg-white/15 transition-colors">
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
  const [clientProjects, setClientProjects] = useState<ClientProject[]>([]);
  const [loading, setLoading]               = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<BloomProduct | null>(null);

  // Slugs that belong to BloomTech products (exclude from client grid)
  const PRODUCT_SLUGS = new Set(['bloomaudit-enterprise-platform', 'bloomswift-pos-retail-chain', 'bloomgo-field-service']);

  useEffect(() => {
    const fetch = async () => {
      try {
        const apiUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get<{ projects: ClientProject[] }>(`${apiUrl}/api/portfolio`);
        const filtered = res.data.projects.filter((p) => !PRODUCT_SLUGS.has(p.slug));
        setClientProjects(filtered.length ? filtered : CLIENT_PROJECTS);
      } catch {
        setClientProjects(CLIENT_PROJECTS);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

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
      <section className="relative bg-[#0c1a36] pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b00]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-[#ff6b00] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#ff6b00]">Portfolio</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Award className="w-3.5 h-3.5" /> Our Work
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6">
                Project{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400">Portfolio</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-[17px] text-gray-300 leading-relaxed">
                From our own product suite to enterprise client projects — here's the technology we've built for Sri Lankan businesses and beyond.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3">
              {[
                { v: '3',    l: 'BloomTech Products', e: '🚀' },
                { v: '8+',   l: 'Client Projects', e: '🏆' },
                { v: '10+',  l: 'Industries Served', e: '🏭' },
                { v: '99.9%',l: 'Platform Uptime',  e: '⚡' },
              ].map(({ v, l, e }) => (
                <div key={l} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
                  <div className="text-xl mb-1">{e}</div>
                  <div className="text-2xl font-black text-white">{v}</div>
                  <div className="text-[11px] font-medium text-gray-400 mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BloomTech Product Suite ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">

          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Star className="w-3.5 h-3.5 fill-[#ff6b00]" /> BloomTech Product Suite
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0c1a36] leading-none tracking-tighter">
                  Our Own{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400">Products</span>
                </h2>
                <p className="text-gray-500 text-[16px] mt-3 max-w-xl">
                  Software we've designed, built, and actively deploy for clients across Sri Lanka.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[13px] font-black">All products live &amp; active</span>
              </div>
            </div>
          </motion.div>

          {/* Product cards */}
          <div className="space-y-8">
            {BLOOM_PRODUCTS.map((product, idx) => {
              const isEven = idx % 2 === 0;
              const Mockup = product.id === 'bloomaudit' ? BloomAuditMockup
                           : product.id === 'bloomgo'    ? BloomGoMockup
                           : BloomSwiftMockup;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative bg-[#0c1a36] rounded-[32px] overflow-hidden border border-white/5"
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at ${isEven ? '80% 50%' : '20% 50%'}, ${product.accentColor}40 0%, transparent 60%)`,
                    }}
                  />

                  <div className={`relative grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-dense'}`}>

                    {/* ── Text panel ── */}
                    <div className={`p-10 xl:p-14 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-2'}`}>
                      {/* Product badge */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`inline-flex items-center gap-2 ${product.bgAccent} bg-opacity-20 border ${product.borderAccent} px-3 py-1.5 rounded-xl`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${product.bgAccent} animate-pulse`} />
                          <span className={`text-[10px] font-black uppercase tracking-widest ${product.textAccent}`}>{product.status}</span>
                        </div>
                        <span className="text-[11px] font-bold text-gray-500">{product.category}</span>
                      </div>

                      <h3 className="text-4xl xl:text-5xl font-black text-white tracking-tighter mb-2">{product.name}</h3>
                      <p className={`text-lg font-black ${product.textAccent} mb-5`}>{product.tagline}</p>
                      <p className="text-[15px] text-gray-400 leading-relaxed mb-8">{product.description}</p>

                      {/* Feature grid */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {product.features.slice(0, 4).map((f) => (
                          <div key={f.title} className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-3.5 group-hover:border-white/15 transition-colors">
                            <div className={`w-7 h-7 rounded-xl ${product.bgAccent} flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white">{f.icon}</span>
                            </div>
                            <div>
                              <p className="text-[12px] font-black text-white leading-tight mb-0.5">{f.title}</p>
                              <p className="text-[11px] text-gray-600 leading-snug line-clamp-2">{f.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Metrics row */}
                      <div className="grid grid-cols-4 gap-3 mb-8">
                        {product.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <p className={`text-xl font-black ${product.textAccent}`}>{m.value}</p>
                            <p className="text-[9px] text-gray-600 mt-0.5 leading-tight">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.technologies.slice(0, 6).map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/8 border border-white/10 text-gray-400 text-[11px] font-semibold rounded-lg">{t}</span>
                        ))}
                        {product.technologies.length > 6 && (
                          <span className={`px-3 py-1 border ${product.borderAccent} ${product.textAccent} text-[11px] font-bold rounded-lg`}>
                            +{product.technologies.length - 6} more
                          </span>
                        )}
                      </div>

                      {/* CTA buttons */}
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => openProduct(product)}
                          className={`flex items-center gap-2 ${product.bgAccent} text-white font-black text-[13px] px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity active:scale-95`}
                        >
                          View Full Details <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                          to={`/services/${product.serviceSlug}`}
                          className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black text-[13px] px-6 py-3.5 rounded-2xl hover:bg-white/15 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" /> Service Page
                        </Link>
                      </div>
                    </div>

                    {/* ── Mockup panel ── */}
                    <div className={`relative p-8 xl:p-12 flex items-center justify-center min-h-[420px] ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                      {/* Product label */}
                      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Live Product Preview</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-bold text-emerald-400">Active</span>
                        </div>
                      </div>
                      <div className="w-full mt-8">
                        <Mockup />
                      </div>
                    </div>
                  </div>

                  {/* Key outcomes footer */}
                  <div className="border-t border-white/10 px-10 xl:px-14 py-5">
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      {product.keyOutcomes.slice(0, 3).map((o, i) => (
                        <div key={i} className="flex items-center gap-2 text-[12px] text-gray-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Client Projects ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fb]">

        {/* Section header + filter bar */}
        <div className="sticky top-[72px] z-40 bg-[#f8f9fb] border-b border-gray-200/70 shadow-sm">
          <div className="max-w-[1550px] mx-auto px-6 xl:px-12 py-5">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex-shrink-0">
                <h2 className="text-[18px] font-black text-[#0c1a36]">Solutions We Can Build</h2>
                <p className="text-[12px] text-gray-500">Enterprise solutions ready to deliver for your business</p>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden lg:block" />

              {/* Category pills */}
              <div className="flex items-center gap-2 flex-wrap flex-1">
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-[12px] font-bold transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-[#0c1a36] text-white shadow-sm' : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'}`}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center gap-2.5 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-52">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Search solutions..." value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-[13px] bg-white border border-gray-200 rounded-xl text-[#0c1a36] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/30 focus:border-[#ff6b00]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[13px] font-semibold text-gray-500">
              {loading ? 'Loading solutions...' : (
                <>Showing <span className="font-black text-[#0c1a36]">{filtered.length}</span> of <span className="font-black text-[#0c1a36]">{clientProjects.length}</span> solutions</>
              )}
            </p>
            {(activeCategory !== 'All' || searchQuery) && (
              <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-[12px] font-bold text-[#ff6b00] hover:underline flex items-center gap-1">
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="aspect-[16/9] bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 w-24 bg-gray-200 rounded-full" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded-full" />
                    <div className="h-3 w-full bg-gray-100 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-black text-[#0c1a36] mb-2">No solutions found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or category filter.</p>
              <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-6 py-3 bg-[#ff6b00] text-white font-black rounded-2xl hover:bg-orange-600 transition-colors">
                Clear Filters
              </button>
            </motion.div>
          )}

          {!loading && filtered.length > 0 && (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => <ClientCard key={p.id} project={p} index={i} onOpen={openProject} />)}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden bg-[#0c1a36] p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Filter className="w-3.5 h-3.5" /> Start Your Project
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter mb-4">
                Have a project{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-400">in mind?</span>
              </h2>
              <p className="text-[16px] text-gray-300 leading-relaxed mb-10">
                Our CISA-certified team has delivered transformative technology for businesses across Sri Lanka. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact"
                  className="flex items-center gap-2 bg-[#ff6b00] text-white font-black px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/company"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-2xl hover:bg-white/15 transition-all">
                  Learn About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && <ClientModal project={selectedProject} onClose={closeProject} />}
        {selectedProduct && <ProductModal product={selectedProduct} onClose={closeProduct} />}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
