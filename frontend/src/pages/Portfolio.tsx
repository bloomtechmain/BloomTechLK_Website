import { useState, useEffect, useMemo, useRef, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  X, Search, ArrowRight, ArrowUpRight, Plus, Minus, Lock,
  Layers, Database, Package, Bell, Mail, Phone, MapPin, Check,
  LayoutGrid, Globe, Monitor, Server,
  type LucideIcon,
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { getSEOConfig } from '../utils/seoConfig';
import { Breadcrumb, Section, SectionHead, CtaBand, ContactRows, FlowChart, GUTTER } from '../components/kit';

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'ERP & Business Systems' | 'Websites & Web Apps' | 'POS Systems' | 'Infrastructure';

interface Project {
  id: string;
  name: string;
  category: Category;
  industry: string;
  region?: string;
  desc: string;
  tags: string[];
  image?: string;
  website?: string;
  status?: string;
  nda?: boolean;
  caseStudy?: string;
}

interface CaseStudy {
  id: string;
  name: string;
  kind: string;
  summary: string;
  workflows: { label?: string; steps: string[] }[];
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  meta: { label: string; value: string }[];
  website?: string;
  gallery: string[];
}

interface BloomProduct {
  id: string;
  name: string;
  website: string;
  tagline: string;
  description: string;
  points: string[];
  workflow: string[];
  screens: string[];
  serviceSlug: string;
  caseStudy?: string;
}

// ─── Portfolio data (BloomTech Project Portfolio 2026) ───────────────────────

const IMG = '/images/portfolio';
const TECH = 'React, Next.js, PostgreSQL, AWS';

// Chart colours: categorical slots 1–4, validated for adjacent-pair CVD separation.
// Two slots sit under 3:1 on white, so every use carries a visible text label.
const CATEGORIES: { name: Category; short: string; icon: LucideIcon; color: string }[] = [
  { name: 'ERP & Business Systems', short: 'ERP',            icon: LayoutGrid, color: '#2A78D6' },
  { name: 'Websites & Web Apps',    short: 'Web',            icon: Globe,      color: '#EB6834' },
  { name: 'POS Systems',            short: 'POS',            icon: Monitor,    color: '#1BAF7A' },
  { name: 'Infrastructure',         short: 'Infrastructure', icon: Server,     color: '#EDA100' },
];
const categoryOf = (c: Category) => CATEGORIES.find((x) => x.name === c)!;

// Map pins on an equirectangular crop (lon −130…100, lat 60…−10) → viewBox 1000 × 304
const toMap = (lon: number, lat: number) => ({ x: ((lon + 130) / 230) * 1000, y: ((60 - lat) / 70) * 304 });
const MARKETS: { code: string; name: string; region: string; x: number; y: number; office?: string; labelAbove?: boolean }[] = [
  { code: 'US', name: 'USA',       region: 'USA',       ...toMap(-97.74, 30.27), office: 'BloomTech USA · Austin, TX' },
  { code: 'CA', name: 'Canada',    region: 'Canada',    ...toMap(-79.38, 43.65), labelAbove: true },
  { code: 'AE', name: 'UAE',       region: 'UAE',       ...toMap(55.27, 25.2) },
  { code: 'LK', name: 'Sri Lanka', region: 'Sri Lanka', ...toMap(79.95, 7.04), office: 'BloomTech LK · Mawaramandiya' },
];

const BLOOM_PRODUCTS: BloomProduct[] = [
  {
    id: 'bloomaudit',
    name: 'BloomAudit',
    website: 'bloomaudit.com',
    tagline: 'The smarter way to run your business finances',
    description: 'One platform for accounting, HR, payroll, inventory, projects and more, for freelancers through to enterprises, at a fraction of the cost of legacy software.',
    points: [
      'Automated US payroll for all 50 states and DC',
      'Sri Lanka HR and payroll with EPF / ETF',
      'Accounting, invoicing, AR / AP and tax tables',
      'Inventory, projects, fixed assets and multi-currency',
    ],
    workflow: ['Record transactions', 'Run payroll', 'Withhold taxes', 'Pay by direct deposit', 'Financial reports'],
    screens: [`${IMG}/bloomaudit-5.webp`, `${IMG}/bloomaudit-1.webp`, `${IMG}/bloomaudit-3.webp`],
    serviceSlug: 'bloomaudit',
    caseStudy: 'bloomaudit',
  },
  {
    id: 'bloomswift',
    name: 'BloomSwift POS',
    website: 'bloomswiftpos.com',
    tagline: 'POS made for an exceptional experience',
    description: 'Point of sale for any shop, available as a cloud or offline (on-premise) system, from a single counter to multi-site enterprise.',
    points: [
      'Retail: clothing, grocery, convenience and gift shops',
      'Hospitality: restaurants, cafés, pubs and bars',
      'Enterprise: multi-site, centralized management',
      'Cloud or offline deployment',
    ],
    workflow: ['Ring up the sale', 'Take payment', 'Update inventory', 'Sync cloud or offline', 'Sales reports'],
    screens: [`${IMG}/bloomswift-pos.webp`],
    serviceSlug: 'bloomswift-pos',
  },
  {
    id: 'bloomlto',
    name: 'BloomLTO',
    website: 'bloomlto.com',
    tagline: 'Your LTO library, finally searchable',
    description: 'Archive software that connects an LTO tape library to a server, indexes every file into a searchable catalog, and restores any file on request.',
    points: [
      'Search by name, path, size or tape',
      'Scheduled archiving to LTFS',
      'Verification and tape duplication',
      'Roles, audit logs and alerts',
    ],
    workflow: ['Connect storage', 'Scan & index', 'Archive to LTO', 'Verify & protect', 'Search & restore'],
    screens: [],
    serviceSlug: 'bloomlto',
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bloomaudit',
    name: 'BloomAudit',
    kind: 'Our product · Finance & HR platform',
    summary: 'An all-in-one finance platform covering accounting, HR, payroll, inventory and projects, with a native US payroll engine and full Sri Lankan payroll compliance.',
    workflows: [
      { label: 'Sri Lanka',     steps: ['Attendance & leave', 'Pay run', 'EPF / ETF', 'Payslips & approvals', 'VAT / SVAT & WHT'] },
      { label: 'United States', steps: ['W-4 self-service', 'Pay run', 'Federal, state & local tax', 'ACH direct deposit', 'Liabilities ledgered'] },
    ],
    challenge: 'Businesses operating in Sri Lanka and the United States were running accounting, HR and payroll in separate tools, while each country has its own tax rules: EPF / ETF, VAT / SVAT and WHT in Sri Lanka; federal, state and local withholding across 50 states in the US. Legacy suites that cover this are expensive, and bolt-on payroll integrations break when the rules change.',
    solution: 'We built BloomAudit as one platform with a separate financial workflow for each country. Sri Lankan companies get EPF / ETF payroll and local tax tables; US companies get a native payroll engine with automatic withholding, W-4 self-service and ACH direct deposit. Accounting, inventory, projects and assets are shared, and new countries plug in as their own workflow.',
    features: [
      'Native US payroll engine: federal, state and local withholding for all 50 states + DC',
      'Employee self-service W-4 elections and ACH direct deposit',
      'Automatic tax liability tracking, SDI and PFML programs',
      'Sri Lanka HR & payroll with EPF / ETF, payslips and approval workflows',
      'Attendance, PTO, onboarding, expense claims and time tracking',
      'Chart of accounts, general ledger, AR / AP, VAT / SVAT and WHT',
      'Inventory, projects, job costing, fixed assets, loans, budgets and multi-currency',
    ],
    results: [
      'One platform replaces separate accounting, HR and payroll tools',
      'Payroll tax calculated on every pay run, with no manual tax tables',
      'Statutory liabilities ledgered automatically as each payroll closes',
      'Country-based design, ready to expand into new markets',
    ],
    meta: [
      { label: 'Type', value: 'Software product' },
      { label: 'Technology', value: TECH },
    ],
    website: 'bloomaudit.com',
    gallery: [1, 2, 3, 5, 4].map((n) => `${IMG}/bloomaudit-${n}.webp`),
  },
  {
    id: 'gamiru',
    name: 'Gamiru',
    kind: 'Client project · Restaurant ERP',
    summary: 'A custom ERP that connects store, kitchen and front desk for a restaurant business, with director-level visibility across the operation.',
    workflows: [{ steps: ['Store: batch stock', 'Kitchen: recipes', 'Front desk: orders', 'Expense tracking', 'Director reports'] }],
    challenge: "The restaurant's store, kitchen and front desk each worked on their own, with stock, recipes, orders and expenses tracked in separate places. Stock was hard to follow batch by batch from the store to the kitchen, and the directors had no single, reliable view of how the business was performing.",
    solution: 'We built a custom ERP that connects store, kitchen and front desk in one system. Stock moves in batches from the store to the kitchen, menus and recipes are set up in the system, expenses are recorded as they happen, and every director has their own access to standard reports across the whole operation.',
    features: [
      'Store-to-kitchen-to-desk operation handling',
      'Batch-wise stock control',
      'Menu and recipe creation',
      'Expense tracking',
      'Director access for every director',
      'Standard business reports',
    ],
    results: [
      'One system replaces separate stock, recipe, order and expense records',
      'Stock traced batch by batch from the store to the kitchen',
      'Every director works from the same reports',
      'Expenses recorded as they happen',
    ],
    meta: [
      { label: 'Type', value: 'ERP & Business Systems' },
      { label: 'Industry', value: 'Restaurant' },
      { label: 'Technology', value: TECH },
    ],
    gallery: [1, 2, 3, 4, 5].map((n) => `${IMG}/gamiru-${n}.webp`),
  },
  {
    id: 'studio-melissa',
    name: 'Studio Melissa Rental',
    kind: 'Client project · Rental web application · USA',
    summary: 'A rental platform for audio and PA equipment across the Greater Austin area, letting customers check live availability, sign the rental agreement and pay online in one flow, backed by a full admin panel for the rental team.',
    workflows: [{ steps: ['Check live availability', 'Choose equipment', 'Sign agreement online', 'Pay with Stripe', 'Booking confirmed'] }],
    challenge: 'Renting audio and PA equipment depended on back-and-forth messages to check what was free, rental agreements handled separately from bookings, and payments taken as another manual step. Every rental needed admin work before the gear went out, and availability was hard to keep accurate.',
    solution: 'We built a rental web application that turns the whole process into one online flow. Customers see live equipment availability, choose what they need, sign the rental agreement online and pay securely through Stripe checkout. The booking is confirmed once the agreement is signed and payment is complete.',
    features: [
      'Real-time equipment availability',
      'Stripe online checkout',
      'Online agreement signing',
      "Equipment timeline showing every unit's status by date",
      'Admin panel for leads, quotes, bookings, inventory, customers and staff',
      'Rental reports: units out, monthly activity and most-rented equipment',
      'Delivery service area map',
    ],
    results: [
      'Customers book, sign and pay online without calling or messaging the business',
      'Availability updates in real time as bookings are made',
      'Every booking comes with a signed agreement and payment',
      'Less admin work before each rental',
    ],
    meta: [
      { label: 'Type', value: 'Websites & Web Apps' },
      { label: 'Industry', value: 'Audio & PA equipment rental' },
      { label: 'Region', value: 'USA' },
      { label: 'Technology', value: TECH },
    ],
    gallery: [1, 2, 3, 4].map((n) => `${IMG}/studio-melissa-${n}.webp`),
  },
  {
    id: 'cuepoint',
    name: 'Cuepoint',
    kind: 'Client project · Pool parlour web application · Sri Lanka',
    summary: 'A web application that runs a pool parlour end to end: online table reservations, games, tournaments created by customers, tournament hosting, and all accounting and tracking, with the website and app hosted on AWS.',
    workflows: [{ steps: ['Reserve a table online', 'Play & track games', 'Create or join tournaments', 'Host tournaments', 'Accounts & reports'] }],
    challenge: 'Running a pool parlour meant taking table bookings by phone, keeping track of games on the floor and organising tournaments by hand, while the accounts were kept separately. There was no single place to see what was booked, what was played and what the business earned.',
    solution: 'We built a web application that brings the whole parlour online. Customers reserve tables and create their own tournaments, the parlour hosts tournaments with flexible hosting options, games are tracked, and all accounting and tracking sit in the same system. The website and application are hosted on AWS.',
    features: [
      'Online table reservations',
      'Pool game tracking',
      'Tournament creation by customers',
      'Tournament hosting options',
      'Full accounting and tracking',
      'Website and application hosted on AWS',
    ],
    results: [
      'Customers reserve tables online, any time',
      'Players organise their own tournaments',
      'Reservations, games, tournaments and accounts in one system',
      'Reliable cloud hosting on AWS',
    ],
    meta: [
      { label: 'Type', value: 'Websites & Web Apps' },
      { label: 'Industry', value: 'Pool parlour' },
      { label: 'Region', value: 'Sri Lanka' },
      { label: 'Technology', value: TECH },
    ],
    website: 'cuepoint.lk',
    gallery: [1, 2, 3, 4, 5].map((n) => `${IMG}/cuepoint-${n}.webp`),
  },
];

const PROJECTS: Project[] = [
  // ERP & Business Systems
  { id: 'gamiru', name: 'Gamiru', category: 'ERP & Business Systems', industry: 'Restaurant',
    desc: 'Custom restaurant ERP that runs the whole operation, from store to kitchen to front desk.',
    tags: ['Batch-wise stock handling', 'Menu and recipe builder', 'Expense tracking', 'Director-level access and standard reports'],
    image: `${IMG}/gamiru-1.webp`, caseStudy: 'gamiru' },
  { id: 'oleema', name: 'Oleema Industries', category: 'ERP & Business Systems', industry: 'Footwear manufacturing', region: 'Sri Lanka',
    desc: 'Full ERP suite for a footwear manufacturer, with QR-based attendance marking and automated payroll generation.',
    tags: ['Full ERP suite', 'QR attendance', 'Payroll generation'], image: `${IMG}/oleema.webp` },
  { id: 'icon-hair', name: 'Icon Hair', category: 'ERP & Business Systems', industry: 'Salon & beauty',
    desc: 'End-to-end salon management platform with online booking, customer and staff accounts, and a single admin panel for everything.',
    tags: ['Online booking', 'Customer and staff accounts', 'Promotions', 'Employee profiles', 'A-to-Z admin panel'] },
  { id: 'outfit-lounge', name: 'Outfit Lounge', category: 'ERP & Business Systems', industry: 'Fashion retail',
    desc: 'Online store, custom ERP and POS in one system, with WhatsApp billing and end-to-end operation tracking.',
    tags: ['Online booking and purchasing', 'POS interface', 'Inventory management', 'WhatsApp billing'], image: `${IMG}/outfit-lounge.webp` },
  { id: 'medical-workflow', name: 'Medical Workflow System', category: 'ERP & Business Systems', industry: 'Healthcare',
    desc: 'A-to-Z medical workflow tracking: one connected ecosystem with separate access for patients, doctors, hospitals and pharmacies.',
    tags: ['Patient, doctor, hospital and pharmacy portals', 'Interconnected workflow', 'All features in one place'], image: `${IMG}/medical-workflow.webp` },
  { id: 'pearl-isle', name: 'Pearl Isle Capital', category: 'ERP & Business Systems', industry: 'Pawning & gold lending',
    desc: 'Barcode tracking system that follows every pawned gold item through its full lifecycle.',
    tags: ['Barcode labelling', 'Item tracking', 'Full item history'] },
  { id: 'interior-solutions', name: 'Interior Solutions Company', category: 'ERP & Business Systems', industry: 'Interior design', region: 'Sri Lanka',
    desc: 'Full ERP solution for an interior solutions company.', tags: ['Full ERP suite'], nda: true, status: 'In acceptance' },
  { id: 'multinational', name: 'Multinational Enterprise', category: 'ERP & Business Systems', industry: 'Enterprise', region: 'Sri Lanka',
    desc: 'Custom CRM for a multinational company. Proposal accepted, delivery under NDA.', tags: ['Custom CRM'], nda: true, status: 'Ongoing' },

  // Websites & Web Apps
  { id: 'studio-melissa', name: 'Studio Melissa Rental', category: 'Websites & Web Apps', industry: 'Audio & PA equipment rental', region: 'USA',
    desc: 'Equipment rental platform with real-time availability, Stripe checkout and online agreement signing.',
    tags: ['Real-time availability', 'Stripe checkout', 'Online agreement signing'], image: `${IMG}/studio-melissa-1.webp`, caseStudy: 'studio-melissa' },
  { id: 'porky-js', name: "Porky J's Event Center", category: 'Websites & Web Apps', industry: 'Restaurant & events', region: 'USA',
    desc: 'Website for a restaurant and event center, with online booking and Stripe payments.',
    tags: ['Online booking', 'Stripe payment gateway'], image: `${IMG}/porky-js.webp` },
  { id: 'pixel-party', name: 'Pixel Party', category: 'Websites & Web Apps', industry: 'Events & ticketing',
    desc: 'Event management website and online ticketing web application.',
    tags: ['Event management', 'Online ticketing'], image: `${IMG}/pixel-party.webp` },
  { id: 'dr-now', name: 'Dr. Now', category: 'Websites & Web Apps', industry: 'Healthcare e-commerce',
    desc: 'E-commerce website for medication, built around GLP-1 consultations.',
    tags: ['Online store', 'Consultation flow'], image: `${IMG}/dr-now.webp` },
  { id: 'crumbs-cream', name: 'Crumbs & Cream', category: 'Websites & Web Apps', industry: 'Bakery & cakes',
    desc: 'Cake shop website with online ordering.', tags: ['Online ordering', 'Product catalogue'], image: `${IMG}/crumbs-cream.webp` },
  { id: 'grand-shine', name: 'Grand Shine Cleaning', category: 'Websites & Web Apps', industry: 'Cleaning services', region: 'Canada',
    desc: 'Service website that showcases cleaning services and takes online bookings.',
    tags: ['Service showcase', 'Online booking'], image: `${IMG}/grand-shine.webp` },
  { id: 'signature-elite', name: 'Signature Elite', category: 'Websites & Web Apps', industry: 'Cleaning & construction', region: 'Canada',
    desc: 'Website with online booking for a group of cleaning and construction companies.',
    tags: ['Multi-company group site', 'Online booking'], image: `${IMG}/signature-elite.webp` },
  { id: 'nexterminate', name: 'Nexterminate', category: 'Websites & Web Apps', industry: 'Pest control', region: 'Canada',
    desc: 'Website for a pest control company serving homeowners and businesses across Toronto and the GTA.',
    tags: ['Service pages', 'Lead generation'], image: `${IMG}/nexterminate.webp`, website: 'nexterminate.ca' },
  { id: 'cuepoint', name: 'Cuepoint', category: 'Websites & Web Apps', industry: 'Pool parlour', region: 'Sri Lanka',
    desc: 'Pool parlour web application with online reservations, game tracking, customer-run tournaments and full accounting, hosted on AWS.',
    tags: ['Online reservations', 'Tournaments', 'Accounting & tracking', 'AWS hosting'],
    image: `${IMG}/cuepoint-1.webp`, website: 'cuepoint.lk', caseStudy: 'cuepoint' },
  { id: 'spare-parts', name: 'Spare Parts Platform', category: 'Websites & Web Apps', industry: 'Automotive parts', region: 'UAE',
    desc: 'Spare parts application for the UAE market.', tags: ['Parts catalogue', 'Ordering'], status: 'In development' },
  { id: 'bloomservice', name: 'BloomService', category: 'Websites & Web Apps', industry: 'Vehicle services',
    desc: 'Vehicle service platform for finding service stations nearby and scheduling a service online.',
    tags: ['Service station listings', 'Instant service scheduling'], image: `${IMG}/bloomservice.webp` },

  // POS Systems
  { id: 'custom-bakery-pos', name: 'Custom Bakery POS', category: 'POS Systems', industry: 'Bakery & cake shop',
    desc: 'Custom-designed POS that runs every operation in a cake shop and bakery, with WhatsApp integration.',
    tags: ['WhatsApp integration', 'Promotions', 'Loyalty customers', 'Full shop operations'] },
  { id: 'weerasinghe', name: 'Weerasinghe Hardware', category: 'POS Systems', industry: 'Hardware retail',
    desc: 'BloomSwift POS deployment for a hardware store.', tags: ['BloomSwift POS'] },
  { id: 'prasad-bakery', name: 'Prasad Bakery', category: 'POS Systems', industry: 'Bakery',
    desc: 'BloomSwift POS deployment for a bakery.', tags: ['BloomSwift POS'] },
  { id: 'kalani-bookshop', name: 'Kalani Bookshop', category: 'POS Systems', industry: 'Book retail',
    desc: 'BloomSwift POS deployment for a bookshop.', tags: ['BloomSwift POS'] },

  // Infrastructure
  { id: 'alpha-school', name: 'Alpha School', category: 'Infrastructure', industry: 'Education', region: 'USA',
    desc: 'Server room design and full infrastructure build for a US school chain with 100+ schools: networking for 50 computers, plus backups on BloomLTO.',
    tags: ['Server room design', 'Networking for 50 computers', 'BloomLTO tape backups'], image: `${IMG}/alpha-school.webp` },
];

const ERP_CLIENTS = ['Gamiru', 'Oleema Industries', 'Icon Hair', 'Outfit Lounge', 'Multinational Enterprise'];
const ERP_MODULES = [
  { title: 'Inventory & stock',     desc: 'Batch-wise stock, transfers between locations and live stock levels.', usedIn: ['Gamiru', 'Outfit Lounge'] },
  { title: 'HR & payroll',          desc: 'Employee records, payroll generation and payslips.',                     usedIn: ['Oleema Industries'] },
  { title: 'QR attendance',         desc: 'Staff mark attendance by scanning a QR code.',                            usedIn: ['Oleema Industries'] },
  { title: 'Accounting & expenses', desc: 'Income, expenses and financial statements in one place.',                 usedIn: ['Gamiru'] },
  { title: 'POS & billing',         desc: 'Point-of-sale counters with WhatsApp billing.',                           usedIn: ['Outfit Lounge'] },
  { title: 'Online booking',        desc: 'Customers book appointments and services online.',                        usedIn: ['Icon Hair', 'Outfit Lounge'] },
  { title: 'CRM',                   desc: 'Customer records, leads and follow-ups.',                                 usedIn: ['Multinational Enterprise'] },
  { title: 'Reports & dashboards',  desc: 'Management and director reports across the business.',                    usedIn: ['Gamiru', 'Outfit Lounge'] },
];

const DELIVERY_STEPS = [
  { title: 'Discover',         desc: 'We learn how your business runs, who uses the system and what success looks like.' },
  { title: 'Plan',             desc: 'Scope, timeline and architecture agreed up front, so there are no surprises.' },
  { title: 'Design',           desc: 'Screens and user flows designed and approved before development starts.' },
  { title: 'Build',            desc: 'Developed in short cycles, with regular demos so you see progress early.' },
  { title: 'Test',             desc: 'Functional, security and user acceptance testing before anything goes live.' },
  { title: 'Launch & support', desc: 'Deployment, staff training and ongoing support after go-live.' },
];

const STACK = [
  { name: 'React',      role: 'User interfaces' },
  { name: 'Next.js',    role: 'Web applications' },
  { name: 'PostgreSQL', role: 'Databases' },
  { name: 'AWS',        role: 'Cloud hosting' },
];

const caseStudyById = (id?: string) => CASE_STUDIES.find((c) => c.id === id);
const projectMeta = (p: Project) => [p.industry, p.region].filter(Boolean).join(' · ');

// ─── BloomLTO interface mockup (no product screenshot in the portfolio) ──────

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


// ─── Shared UI helpers ────────────────────────────────────────────────────────

/** Screenshot in a plain browser frame, as in the printed portfolio. */
const Screen = ({ src, alt, url, dark = false, className = '' }: { src: string; alt: string; url?: string; dark?: boolean; className?: string }) => (
  <div className={`rounded-md overflow-hidden ${dark ? 'bg-navy-dark ring-1 ring-white/10' : 'bg-white ring-1 ring-border-grey'} ${className}`}>
    <div className={`flex items-center gap-3 px-3 py-2 ${dark ? 'bg-navy-dark' : 'bg-grey-light'}`}>
      <div className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-brand-orange" />
        <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />
        <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white/20' : 'bg-gray-300'}`} />
      </div>
      {url && <span className={`flex-1 rounded px-3 py-0.5 text-[10px] text-center font-medium truncate ${dark ? 'bg-white/5 text-white/40' : 'bg-white text-gray-500'}`}>{url}</span>}
    </div>
    <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
  </div>
);

const ExternalSite = ({ site, light = false }: { site: string; light?: boolean }) => (
  <a href={`https://${site}`} target="_blank" rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 text-sm font-bold underline decoration-1 underline-offset-4 transition-colors ${light ? 'text-white decoration-white/30 hover:text-brand-orange' : 'text-navy decoration-navy/25 hover:text-brand-orange-dark'}`}>
    {site} <ArrowUpRight className="w-3.5 h-3.5" />
  </a>
);

const Swatch = ({ color, className = 'w-2.5 h-2.5' }: { color: string; className?: string }) => (
  <span className={`inline-block rounded-[2px] flex-shrink-0 ${className}`} style={{ background: color }} aria-hidden="true" />
);

/** Chart tooltip anchored above the hovered mark, clamped inside its container. */
type Tip = { x: number; y: number; content: ReactNode } | null;
const useTip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<Tip>(null);
  const show = (el: Element, content: ReactNode) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(Math.max(r.left - box.left + r.width / 2, 110), box.width - 110);
    setTip({ x, y: r.top - box.top, content });
  };
  return { ref, tip, show, hide: () => setTip(null) };
};
const TipBox = ({ tip }: { tip: Tip }) => (
  <AnimatePresence>
    {tip && (
      <motion.div key="tip" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }}
        className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-full w-max max-w-[220px] rounded-md bg-navy-dark px-3 py-2 text-white shadow-lg"
        style={{ left: tip.x, top: tip.y - 8 }}>
        {tip.content}
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Workflow pipeline (auto-advancing, click to step) ───────────────────────

const Pipeline = ({ steps, dark = false }: { steps: string[]; dark?: boolean }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const n = steps.length;

  useEffect(() => { setActive(0); }, [steps]);
  useEffect(() => {
    if (!auto || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 2200);
    return () => clearInterval(t);
  }, [auto, reduce, n]);

  const inset = `${50 / n}%`;
  return (
    <div className="relative" onMouseLeave={() => setAuto(true)}>
      <div className={`absolute top-5 h-0.5 ${dark ? 'bg-white/15' : 'bg-border-grey'}`} style={{ left: inset, right: inset }}>
        <motion.div className="absolute inset-y-0 left-0 bg-brand-orange" animate={{ width: `${(active / (n - 1)) * 100}%` }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
      </div>
      <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {steps.map((s, i) => {
          const done = i <= active;
          return (
            <li key={s} className="flex flex-col items-center text-center px-1">
              <button type="button" onMouseEnter={() => { setAuto(false); setActive(i); }} onFocus={() => { setAuto(false); setActive(i); }} onClick={() => { setAuto(false); setActive(i); }}
                aria-label={`Step ${i + 1}: ${s}`} aria-current={i === active ? 'step' : undefined}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors duration-300 ${
                  i === active ? 'bg-brand-orange text-white' : done ? (dark ? 'bg-white text-navy' : 'bg-navy text-white') : dark ? 'bg-navy-mid text-white/50 ring-2 ring-white/15' : 'bg-white text-gray-400 ring-2 ring-border-grey'}`}>
                {i === active && !reduce && (
                  <motion.span className="absolute inset-0 rounded-full ring-2 ring-brand-orange" initial={{ scale: 1, opacity: 0.8 }} animate={{ scale: 1.6, opacity: 0 }} transition={{ duration: 1.2, repeat: Infinity }} />
                )}
                {i + 1}
              </button>
              <span className={`mt-2.5 text-[11px] sm:text-xs font-bold leading-tight transition-colors ${i === active ? (dark ? 'text-white' : 'text-navy') : dark ? 'text-white/45' : 'text-gray-500'}`}>{s}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative bg-navy overflow-hidden">
    {/* Blueprint grid + outline shapes */}
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="pf-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pf-grid)" />
    </svg>
    <div className="absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full border border-white/[0.07]" aria-hidden="true" />
    <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border border-white/[0.07]" aria-hidden="true" />

    <div className={`relative ${GUTTER} pt-32 lg:pt-40 pb-16 lg:pb-24`}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center [&>*]:min-w-0">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="lg:col-span-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]} />
          <p className="text-sm font-bold text-white/55 mb-5">Project portfolio <span className="text-brand-orange">2026</span> · Sri Lanka · United States</p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Software that runs real businesses.
          </h1>
          <p className="text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl">
            ERP systems, web applications, POS and IT infrastructure delivered across four countries, plus the software products we build and run ourselves.
          </p>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 max-w-xl border-t border-white/15">
            {[
              { v: '24+', l: 'projects delivered & in progress' },
              { v: '4',   l: 'countries served' },
              { v: '22',  l: 'industries' },
              { v: '3',   l: 'in-house products' },
            ].map(({ v, l }) => (
              <div key={l} className="pt-5 pr-4">
                <dt className="sr-only">{l}</dt>
                <dd className="text-4xl font-extrabold text-white tracking-tight">{v}</dd>
                <dd className="text-xs text-white/55 mt-1 leading-snug">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Screenshot composite */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-6 relative pb-16 sm:pb-24 pl-6 sm:pl-12">
          <div className="absolute left-0 bottom-0 w-24 h-24 sm:w-36 sm:h-36 bg-brand-orange" aria-hidden="true" />
          <div className="absolute right-6 -top-6 w-20 h-20 border-2 border-white/15" aria-hidden="true" />
          <Screen src={`${IMG}/bloomaudit-5.webp`} alt="BloomAudit advanced analytics screen" url="bloomaudit.com" dark className="relative shadow-2xl" />
          <div className="absolute left-0 sm:left-2 bottom-4 w-[58%] sm:w-[52%]">
            <Screen src={`${IMG}/bloomswift-pos.webp`} alt="BloomSwift POS payment screen" url="bloomswiftpos.com" dark className="shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Overview: waffle chart + map diagram ───────────────────────────────────

const ProjectWaffle = ({ onPick }: { onPick: (id: string) => void }) => {
  const { ref, tip, show, hide } = useTip();
  const [focusCat, setFocusCat] = useState<Category | null>(null);
  const ordered = CATEGORIES.flatMap((c) => PROJECTS.filter((p) => p.category === c.name));

  return (
    <div>
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="text-lg font-extrabold text-navy">Projects by category</h3>
        <span className="text-sm text-gray-500">each square is one project</span>
      </div>

      <div ref={ref} className="relative">
        <div className="grid grid-cols-8 lg:grid-cols-12 gap-[2px]" onMouseLeave={hide}>
          {ordered.map((p, i) => {
            const c = categoryOf(p.category);
            const dim = focusCat && focusCat !== p.category;
            return (
              <motion.button key={p.id} type="button"
                initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
                onMouseEnter={(e) => show(e.currentTarget, <><p className="text-sm font-extrabold">{p.name}</p><p className="text-[11px] text-white/60">{c.name} · {p.industry}</p></>)}
                onFocus={(e) => show(e.currentTarget, <><p className="text-sm font-extrabold">{p.name}</p><p className="text-[11px] text-white/60">{c.name} · {p.industry}</p></>)}
                onBlur={hide}
                onClick={() => onPick(p.id)}
                aria-label={`${p.name}, ${c.name}`}
                className="aspect-square rounded-[3px] transition-[opacity,transform] duration-200 hover:scale-[1.08] hover:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                style={{ background: c.color, opacity: dim ? 0.18 : 1 }} />
            );
          })}
        </div>
        <TipBox tip={tip} />
      </div>

      {/* Legend doubles as the direct labels */}
      <ul className="mt-6 divide-y divide-border-grey border-y border-border-grey">
        {CATEGORIES.map((c) => {
          const n = PROJECTS.filter((p) => p.category === c.name).length;
          return (
            <li key={c.name}>
              <button type="button" onMouseEnter={() => setFocusCat(c.name)} onMouseLeave={() => setFocusCat(null)}
                onFocus={() => setFocusCat(c.name)} onBlur={() => setFocusCat(null)}
                className="w-full flex items-center gap-3 py-2.5 text-left">
                <Swatch color={c.color} />
                <span className="flex-1 text-sm font-semibold text-navy">{c.name}</span>
                <span className="text-sm font-extrabold text-navy tabular-nums w-6 text-right">{n}</span>
                <span className="text-sm text-gray-500 tabular-nums w-12 text-right">{Math.round((n / PROJECTS.length) * 100)}%</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-gray-500">Click a square to open that project in the index below.</p>
    </div>
  );
};

const WorkMap = () => {
  const reduce = useReducedMotion();
  const [sel, setSel] = useState('US');
  const market = MARKETS.find((m) => m.code === sel)!;
  const named = PROJECTS.filter((p) => p.region === market.region);
  const us = MARKETS[0], lk = MARKETS[3];

  return (
    <div>
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="text-lg font-extrabold text-white">Where we work</h3>
        <span className="text-sm text-white/50">two offices · four countries</span>
      </div>

      <div className="relative">
        <svg viewBox="0 0 1000 304" className="w-full h-auto" role="img" aria-label="Map of BloomTech offices in Austin and Sri Lanka, and markets in the USA, Canada, the UAE and Sri Lanka">
          {/* graticule every 10° */}
          {Array.from({ length: 24 }, (_, i) => <line key={`v${i}`} x1={(i * 1000) / 23} x2={(i * 1000) / 23} y1="0" y2="304" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />)}
          {Array.from({ length: 8 }, (_, i) => <line key={`h${i}`} x1="0" x2="1000" y1={(i * 304) / 7} y2={(i * 304) / 7} stroke={i === 6 ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)'} strokeWidth="1" />)}
          <text x="6" y={(6 * 304) / 7 - 6} fill="rgba(255,255,255,0.35)" fontSize="11" fontWeight="700">EQUATOR</text>

          {/* one team across both offices */}
          <motion.path d={`M ${us.x} ${us.y} Q ${(us.x + lk.x) / 2} -60 ${lk.x} ${lk.y}`} fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: 'easeInOut' }} />
          <text x={(us.x + lk.x) / 2} y="40" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="700">one team, two offices</text>

          {MARKETS.map((m) => {
            const on = m.code === sel;
            return (
              <g key={m.code} role="button" tabIndex={0} aria-label={`${m.name}${m.office ? `, ${m.office}` : ''}`} aria-pressed={on}
                onMouseEnter={() => setSel(m.code)} onFocus={() => setSel(m.code)} onClick={() => setSel(m.code)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSel(m.code); }}
                className="cursor-pointer outline-none">
                <circle cx={m.x} cy={m.y} r="22" fill="transparent" />
                {m.office && !reduce && (
                  <motion.circle cx={m.x} cy={m.y} r="8" fill="none" stroke="#FF6B00" strokeWidth="2"
                    animate={{ r: [8, 22], opacity: [0.7, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />
                )}
                <circle cx={m.x} cy={m.y} r={on ? 9 : 7} fill={m.office ? '#FF6B00' : '#FFFFFF'} stroke="#101D36" strokeWidth="2" className="transition-all" />
                <text x={m.x} y={m.labelAbove ? m.y - 18 : m.y + 30} textAnchor="middle" fill={on ? '#FFFFFF' : 'rgba(255,255,255,0.6)'} fontSize="14" fontWeight="800">{m.code}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-white/55">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />BloomTech office</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white" />Market served</span>
        <span>Pin positions are approximate.</span>
      </div>

      {/* Country list: the keyboard / touch twin of the map */}
      <div className="mt-6 grid grid-cols-4 border-y border-white/15">
        {MARKETS.map((m) => (
          <button key={m.code} type="button" onClick={() => setSel(m.code)} aria-pressed={m.code === sel}
            className={`py-3 text-left px-2 border-l first:border-l-0 border-white/10 transition-colors ${m.code === sel ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'}`}>
            <span className="block text-sm font-extrabold text-white">{m.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 min-h-[88px]">
        {market.office && <p className="flex items-center gap-2 text-sm font-bold text-white mb-2"><MapPin className="w-4 h-4 text-brand-orange" />{market.office}</p>}
        <p className="text-sm text-white/60 leading-relaxed">
          <span className="text-white/40">Named in this portfolio: </span>
          {named.map((p) => p.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

// ─── Products ────────────────────────────────────────────────────────────────

const Products = ({ onCaseStudy }: { onCaseStudy: (id: string) => void }) => {
  const [idx, setIdx] = useState(0);
  const [flow, setFlow] = useState(0);
  const product = BLOOM_PRODUCTS[idx];
  const study = caseStudyById(product.caseStudy);
  const flows = [{ label: 'Product flow', steps: product.workflow }, ...(study?.workflows.filter((w) => w.label).map((w) => ({ label: `${w.label} payroll`, steps: w.steps })) ?? [])];
  const steps = flows[Math.min(flow, flows.length - 1)].steps;

  return (
    <div>
      {/* Product switcher */}
      <div role="tablist" aria-label="BloomTech products" className="grid grid-cols-3 border-b border-white/15">
        {BLOOM_PRODUCTS.map((p, i) => (
          <button key={p.id} role="tab" aria-selected={i === idx} onClick={() => { setIdx(i); setFlow(0); }}
            className="relative text-left py-4 pr-3">
            <span className={`block text-lg sm:text-2xl font-extrabold transition-colors ${i === idx ? 'text-white' : 'text-white/35 hover:text-white/70'}`}>{p.name}</span>
            <span className="hidden sm:block text-xs text-white/40 mt-0.5">{p.website}</span>
            {i === idx && <motion.span layoutId="product-tab" className="absolute left-0 right-3 -bottom-px h-[3px] bg-brand-orange" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={product.id} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 pt-10 [&>*]:min-w-0">
          <div className="lg:col-span-5">
            <p className="text-2xl font-extrabold text-white leading-snug mb-4">{product.tagline}</p>
            <p className="text-[15px] text-white/65 leading-relaxed mb-7">{product.description}</p>
            <ul className="divide-y divide-white/10 border-y border-white/10 mb-8">
              {product.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 py-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />{pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {study ? (
                <button onClick={() => onCaseStudy(study.id)} className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors">
                  Read the case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <Link to={`/services/${product.serviceSlug}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors">
                  Product page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {study && <Link to={`/services/${product.serviceSlug}`} className="text-sm font-bold text-white underline decoration-white/30 underline-offset-4 hover:text-brand-orange">Product page</Link>}
              <ExternalSite site={product.website} light />
            </div>
          </div>

          <div className="lg:col-span-7">
            {product.screens.length > 0 ? (
              <div className="relative pr-6 pb-6">
                <div className="absolute right-0 bottom-0 top-8 left-8 border border-white/15" aria-hidden="true" />
                <Screen src={product.screens[0]} alt={`${product.name} interface`} url={product.website} dark className="relative" />
                {product.screens.length > 1 && (
                  <div className="relative hidden sm:grid grid-cols-2 gap-3 mt-3">
                    {product.screens.slice(1).map((s, i) => <Screen key={s} src={s} alt={`${product.name} screen ${i + 2}`} dark />)}
                  </div>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto"><div className="min-w-[440px]"><BloomLTOMockup /></div></div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Workflow */}
      <div className="mt-12 pt-8 border-t border-white/15">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <p className="text-sm font-bold text-white/55">How {product.name} works</p>
          {flows.length > 1 && (
            <div className="flex rounded-md bg-white/[0.06] p-1" role="group" aria-label="Workflow">
              {flows.map((f, i) => (
                <button key={f.label} onClick={() => setFlow(i)} aria-pressed={i === flow}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${i === flow ? 'bg-white text-navy' : 'text-white/60 hover:text-white'}`}>{f.label}</button>
              ))}
            </div>
          )}
        </div>
        <Pipeline steps={steps} dark />
      </div>
    </div>
  );
};

// ─── Case studies viewer ─────────────────────────────────────────────────────

const CaseStudies = ({ active, setActive }: { active: number; setActive: (i: number) => void }) => {
  const study = CASE_STUDIES[active];
  const [shot, setShot] = useState(0);
  const [flow, setFlow] = useState(0);
  useEffect(() => { setShot(0); setFlow(0); }, [active]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 [&>*]:min-w-0">
      {/* Study list */}
      <div className="lg:col-span-3">
        <div role="tablist" aria-label="Case studies" className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 lg:border-t lg:border-border-grey">
          {CASE_STUDIES.map((s, i) => (
            <button key={s.id} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`relative flex-shrink-0 text-left px-4 py-3 lg:px-0 lg:pl-5 lg:py-5 lg:border-b lg:border-border-grey rounded-md lg:rounded-none transition-colors ${i === active ? 'bg-navy lg:bg-transparent' : 'bg-grey-light lg:bg-transparent'}`}>
              {i === active && <motion.span layoutId="study-bar" className="hidden lg:block absolute left-0 top-4 bottom-4 w-[3px] bg-brand-orange" />}
              <span className={`block text-xs font-bold mb-1 ${i === active ? 'text-brand-orange lg:text-brand-orange-dark' : 'text-gray-400'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={`block text-base lg:text-lg font-extrabold whitespace-nowrap lg:whitespace-normal ${i === active ? 'text-white lg:text-navy' : 'text-navy/60'}`}>{s.name}</span>
              <span className="hidden lg:block text-xs text-gray-500 mt-1 leading-snug">{s.kind}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Study panel */}
      <AnimatePresence mode="wait">
        <motion.article key={study.id} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="lg:col-span-9 min-w-0">
          <p className="text-sm font-bold text-brand-orange-dark mb-2">{study.kind}</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">{study.name}</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">{study.summary}</p>

          {/* Screens */}
          <div className="grid md:grid-cols-[1fr_120px] gap-3 mb-12">
            <AnimatePresence mode="wait">
              <motion.div key={study.gallery[shot]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <Screen src={study.gallery[shot]} alt={`${study.name} screen ${shot + 1}`} url={study.website} />
              </motion.div>
            </AnimatePresence>
            <div className="flex md:flex-col gap-2 overflow-x-auto">
              {study.gallery.map((src, i) => (
                <button key={src} onClick={() => setShot(i)} aria-label={`Show screen ${i + 1}`} aria-pressed={i === shot}
                  className={`flex-shrink-0 w-24 md:w-full rounded overflow-hidden ring-2 transition-all ${i === shot ? 'ring-brand-orange' : 'ring-transparent opacity-60 hover:opacity-100'}`}>
                  <img src={src} alt="" loading="lazy" className="block w-full aspect-[16/10] object-cover object-top" />
                </button>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <p className="text-sm font-bold text-gray-500">{study.workflows.length > 1 ? 'Financial workflow by country' : 'Workflow'}</p>
              {study.workflows.length > 1 && (
                <div className="flex rounded-md bg-grey-light p-1" role="group" aria-label="Country">
                  {study.workflows.map((w, i) => (
                    <button key={w.label} onClick={() => setFlow(i)} aria-pressed={i === flow}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${i === flow ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy'}`}>{w.label}</button>
                  ))}
                </div>
              )}
            </div>
            <Pipeline steps={study.workflows[Math.min(flow, study.workflows.length - 1)].steps} />
          </div>

          {/* Challenge → solution */}
          <div className="relative grid md:grid-cols-2 gap-px bg-border-grey border border-border-grey mb-12">
            <div className="bg-white p-6 md:p-8 md:pr-12">
              <p className="text-sm font-extrabold text-gray-500 mb-3">Before · the challenge</p>
              <p className="text-gray-700 leading-relaxed text-[15px]">{study.challenge}</p>
            </div>
            <div className="bg-grey-light p-6 md:p-8 md:pl-12">
              <p className="text-sm font-extrabold text-navy mb-3">After · our solution</p>
              <p className="text-gray-700 leading-relaxed text-[15px]">{study.solution}</p>
            </div>
            <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-orange text-white items-center justify-center ring-4 ring-white" aria-hidden="true">
              <ArrowRight className="w-5 h-5" />
            </span>
          </div>

          {/* Features / results / facts */}
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <h4 className="text-lg font-extrabold text-navy mb-4">Key features</h4>
              <ul className="divide-y divide-border-grey border-y border-border-grey">
                {study.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 py-2.5 text-[15px] text-gray-700"><Check className="w-4 h-4 text-navy mt-1 flex-shrink-0" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 space-y-8">
              <div>
                <h4 className="text-lg font-extrabold text-navy mb-4">Results</h4>
                <ol className="space-y-4">
                  {study.results.map((r, i) => (
                    <li key={r} className="flex gap-4">
                      <span className="text-2xl font-extrabold text-brand-orange-dark leading-none w-8 flex-shrink-0">{i + 1}</span>
                      <span className="text-[15px] text-gray-700 leading-snug">{r}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t-2 border-navy pt-5">
                {study.meta.map((m) => (
                  <div key={m.label} className={m.label === 'Technology' ? 'col-span-2' : ''}>
                    <dt className="text-xs font-bold text-gray-500">{m.label}</dt>
                    <dd className="text-sm font-bold text-navy mt-0.5">{m.value}</dd>
                  </div>
                ))}
                {study.website && (
                  <div className="col-span-2">
                    <dt className="text-xs font-bold text-gray-500">Website</dt>
                    <dd className="mt-0.5"><ExternalSite site={study.website} /></dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

// ─── Project index (filterable table with hover preview) ─────────────────────

const ProjectIndex = ({ open, setOpen, onCaseStudy }: { open: string | null; setOpen: (id: string | null) => void; onCaseStudy: (id: string) => void }) => {
  const [cat, setCat] = useState<'All' | Category>('All');
  const [q, setQ] = useState('');
  const [preview, setPreview] = useState<{ src: string; x: number; y: number } | null>(null);

  const filtered = useMemo(() => PROJECTS.filter((p) => {
    const needle = q.toLowerCase();
    return (cat === 'All' || p.category === cat) && (!needle || [p.name, p.desc, p.industry, p.region ?? '', ...p.tags].some((s) => s.toLowerCase().includes(needle)));
  }), [cat, q]);

  // A project picked elsewhere (the waffle chart) must be visible in the list
  useEffect(() => { if (open && !filtered.some((p) => p.id === open)) { setCat('All'); setQ(''); } }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const movePreview = (e: RPointerEvent, p: Project) => {
    if (e.pointerType !== 'mouse' || !p.image || open === p.id) return setPreview(null);
    setPreview({ src: p.image, x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2 flex-1">
          {(['All', ...CATEGORIES.map((c) => c.name)] as const).map((c) => {
            const count = c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
            const color = c === 'All' ? undefined : categoryOf(c).color;
            return (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${cat === c ? 'bg-navy text-white' : 'bg-grey-light text-navy hover:bg-grey-hover'}`}>
                {color && <Swatch color={color} className="w-2 h-2" />}{c}<span className={cat === c ? 'text-white/50' : 'text-gray-400'}>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search projects, industries…" value={q} aria-label="Search projects" onChange={(e) => setQ(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 text-[13px] bg-grey-light rounded-md text-navy placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-navy" />
          {q && <button onClick={() => setQ('')} aria-label="Clear search" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy"><X className="w-4 h-4" /></button>}
        </div>
      </div>

      {/* Table */}
      <div className="hidden md:grid grid-cols-[48px_minmax(0,2.2fr)_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1.4fr)_40px] gap-4 px-2 pb-3 text-xs font-bold text-gray-500 border-b-2 border-navy">
        <span>No.</span><span>Project</span><span>Industry</span><span>Region</span><span>Category</span><span />
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center border-b border-border-grey">
          <p className="text-lg font-extrabold text-navy mb-2">No projects match that search.</p>
          <button onClick={() => { setCat('All'); setQ(''); }} className="text-sm font-bold text-brand-orange-dark underline underline-offset-4">Show all projects</button>
        </div>
      )}

      <ul onPointerLeave={() => setPreview(null)}>
        {filtered.map((p) => {
          const c = categoryOf(p.category);
          const isOpen = open === p.id;
          const no = String(PROJECTS.indexOf(p) + 1).padStart(2, '0');
          return (
            <li key={p.id} id={`project-${p.id}`} className={`border-b border-border-grey scroll-mt-40 transition-colors ${isOpen ? 'bg-grey-light' : ''}`}>
              <button type="button" onClick={() => setOpen(isOpen ? null : p.id)} aria-expanded={isOpen}
                onPointerMove={(e) => movePreview(e, p)} onPointerLeave={() => setPreview(null)}
                className="group w-full text-left grid grid-cols-[36px_1fr_28px] md:grid-cols-[48px_minmax(0,2.2fr)_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1.4fr)_40px] gap-x-4 gap-y-1 items-center px-2 py-4 hover:bg-grey-light transition-colors">
                <span className="text-sm font-bold text-gray-400 tabular-nums">{no}</span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-base md:text-lg font-extrabold text-navy group-hover:text-brand-orange-dark transition-colors">{p.name}</span>
                    {p.nda && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-gray-500 border border-gray-300 rounded px-1.5 py-0.5"><Lock className="w-2.5 h-2.5" />NDA</span>}
                    {p.status && <span className="text-[10px] font-bold uppercase tracking-wide text-brand-orange-dark border border-brand-orange/40 rounded px-1.5 py-0.5">{p.status}</span>}
                    {p.caseStudy && <span className="text-[10px] font-bold uppercase tracking-wide text-navy bg-white border border-navy/20 rounded px-1.5 py-0.5">Case study</span>}
                  </span>
                  <span className="md:hidden block text-xs text-gray-500 mt-1">{projectMeta(p)}</span>
                </span>
                <span className="hidden md:block text-sm text-gray-600">{p.industry}</span>
                <span className="hidden md:block text-sm text-gray-600">{p.region ?? '—'}</span>
                <span className="hidden md:flex items-center gap-2 text-sm text-gray-600"><Swatch color={c.color} />{c.short}</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center justify-self-end transition-colors ${isOpen ? 'bg-navy text-white' : 'bg-grey-light text-navy group-hover:bg-white'}`}>
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className={`grid gap-6 px-2 pb-8 pt-2 md:pl-[64px] ${p.image ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]' : ''}`}>
                      <div>
                        <p className="text-[15px] text-gray-700 leading-relaxed mb-4 max-w-xl">{p.desc}</p>
                        <p className="text-sm text-gray-500 mb-5">{p.tags.join(' / ')}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                          {p.caseStudy && (
                            <button onClick={() => onCaseStudy(p.caseStudy!)} className="group/c inline-flex items-center gap-2 text-sm font-bold text-white bg-navy hover:bg-navy-mid px-4 py-2.5 rounded-md transition-colors">
                              Read the case study <ArrowRight className="w-4 h-4 group-hover/c:translate-x-1 transition-transform" />
                            </button>
                          )}
                          {p.website && <ExternalSite site={p.website} />}
                        </div>
                      </div>
                      {p.image && <Screen src={p.image} alt={`${p.name} screenshot`} url={p.website} />}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-sm text-gray-500">Showing {filtered.length} of {PROJECTS.length} projects</p>

      {/* Cursor-following screenshot preview (mouse only) */}
      {preview && (
        <img src={preview.src} alt="" aria-hidden="true"
          className="hidden lg:block fixed z-50 pointer-events-none w-80 rounded-md shadow-2xl ring-1 ring-black/10"
          style={{ left: Math.min(preview.x + 28, window.innerWidth - 340), top: Math.max(preview.y - 100, 90) }} />
      )}
    </div>
  );
};

// ─── ERP module matrix ───────────────────────────────────────────────────────

const ModuleMatrix = () => {
  const [row, setRow] = useState<number | null>(null);
  const [col, setCol] = useState<number | null>(null);
  const shown = ERP_MODULES[row ?? 0];
  const colTotals = ERP_CLIENTS.map((c) => ERP_MODULES.filter((m) => m.usedIn.includes(c)).length);
  const maxCol = Math.max(...colTotals);

  return (
    <div className="grid lg:grid-cols-12 gap-10 [&>*]:min-w-0">
      <div className="lg:col-span-8 overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0">
        <table className="w-full min-w-[620px] border-collapse" onMouseLeave={() => { setRow(null); setCol(null); }}>
          <thead>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 pb-3 pr-4 w-[34%]">Module</th>
              {ERP_CLIENTS.map((c, j) => (
                <th key={c} scope="col" onMouseEnter={() => { setCol(j); setRow(null); }}
                  className={`text-xs font-bold pb-3 px-1 text-center leading-tight align-bottom transition-colors ${col === j ? 'text-navy' : 'text-gray-500'}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ERP_MODULES.map((m, i) => (
              <tr key={m.title} onMouseEnter={() => { setRow(i); setCol(null); }} className="group">
                <th scope="row" className={`text-left text-sm font-bold py-2.5 pr-4 border-t border-border-grey transition-colors ${row === i ? 'text-brand-orange-dark' : 'text-navy'}`}>{m.title}</th>
                {ERP_CLIENTS.map((c, j) => {
                  const used = m.usedIn.includes(c);
                  const lit = row === i || col === j;
                  return (
                    <td key={c} className={`border-t border-border-grey text-center py-2.5 transition-colors ${lit ? 'bg-grey-light' : ''}`}>
                      {used
                        ? <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i + 0.04 * j, type: 'spring', stiffness: 400, damping: 20 }}
                            className={`inline-block w-5 h-5 rounded-[4px] align-middle ${lit ? 'bg-brand-orange' : 'bg-navy'}`} role="img" aria-label={`${m.title} used in ${c}`} />
                        : <span className="inline-block w-5 h-5 rounded-[4px] align-middle ring-1 ring-inset ring-border-grey" aria-label={`${m.title} not used in ${c}`} role="img" />}
                    </td>
                  );
                })}
              </tr>
            ))}
            {/* Column totals: modules per project */}
            <tr>
              <th scope="row" className="text-left text-xs font-bold text-gray-500 pt-4 pr-4 border-t-2 border-navy align-bottom">Modules in project</th>
              {colTotals.map((t, j) => (
                <td key={j} className="pt-4 border-t-2 border-navy">
                  <div className="flex flex-col items-center justify-end h-16">
                    <span className="text-xs font-extrabold text-navy mb-1">{t}</span>
                    <motion.span initial={{ height: 0 }} whileInView={{ height: `${(t / maxCol) * 40}px` }} viewport={{ once: true }} transition={{ duration: 0.6, delay: j * 0.06 }}
                      className={`w-5 rounded-t-[4px] ${col === j ? 'bg-brand-orange' : 'bg-navy'}`} />
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <aside className="lg:col-span-4">
        <div className="bg-navy rounded-md p-7 lg:sticky lg:top-32">
          {col !== null ? (
            <>
              <p className="text-xs font-bold text-white/50 mb-2">Project</p>
              <p className="text-2xl font-extrabold text-white mb-4">{ERP_CLIENTS[col]}</p>
              <ul className="space-y-2">
                {ERP_MODULES.filter((m) => m.usedIn.includes(ERP_CLIENTS[col])).map((m) => (
                  <li key={m.title} className="flex items-center gap-2 text-sm text-white/80"><Check className="w-4 h-4 text-brand-orange" />{m.title}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-white/50 mb-2">Module</p>
              <p className="text-2xl font-extrabold text-white mb-3">{shown.title}</p>
              <p className="text-[15px] text-white/70 leading-relaxed mb-5">{shown.desc}</p>
              <p className="text-xs font-bold text-white/50 mb-1">Used in</p>
              <p className="text-sm font-bold text-white">{shown.usedIn.join(' · ')}</p>
            </>
          )}
          <p className="mt-6 pt-5 border-t border-white/10 text-sm text-white/55">Each ERP combines the modules the client's workflow needs.</p>
        </div>
      </aside>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const Portfolio = () => {
  const [study, setStudy] = useState(0);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const goToStudy = (id: string) => {
    const i = CASE_STUDIES.findIndex((c) => c.id === id);
    if (i < 0) return;
    setStudy(i);
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };
  const goToProject = (id: string) => {
    setOpenProject(id);
    setTimeout(() => document.getElementById(`project-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO config={getSEOConfig('portfolio')} />

      <Hero />

      {/* ── 01 Overview ────────────────────────────────────────────────────── */}
      <Section tone="white">
        <SectionHead n="01" label="At a glance" title="Where our work sits"
          sub="From single-location shops to a school chain with more than 100 schools. BloomTech LK and BloomTech USA are run by one team that works across both countries." />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 [&>*]:min-w-0">
          <div className="lg:col-span-5"><ProjectWaffle onPick={goToProject} /></div>
          <div className="lg:col-span-7 bg-navy rounded-md p-6 sm:p-8"><WorkMap /></div>
        </div>
      </Section>

      {/* ── 02 Products ────────────────────────────────────────────────────── */}
      <Section tone="navy">
        <SectionHead n="02" label="Our products" title="Software we build and run ourselves" light />
        <Products onCaseStudy={goToStudy} />
      </Section>

      {/* ── 03 Case studies ────────────────────────────────────────────────── */}
      <Section tone="white" id="case-studies">
        <SectionHead n="03" label="Case studies" title="Inside the work"
          sub="The challenge, what we built and what changed: one of our own products and three client projects." />
        <CaseStudies active={study} setActive={setStudy} />
      </Section>

      {/* ── 04 Project index ───────────────────────────────────────────────── */}
      <Section tone="white" id="projects" className="!pt-0">
        <SectionHead n="04" label="Project index" title={<>All {PROJECTS.length} projects</>}
          sub="Hover a row for a preview, open it for the details." />
        <ProjectIndex open={openProject} setOpen={setOpenProject} onCaseStudy={goToStudy} />
      </Section>

      {/* ── 05 ERP modules ─────────────────────────────────────────────────── */}
      <Section tone="grey">
        <SectionHead n="05" label="Built around you" title="Modules across our ERP projects"
          sub="Every ERP starts from how your business already works. Hover a module or a project to trace where it's used." />
        <ModuleMatrix />
      </Section>

      {/* ── 06 Process ─────────────────────────────────────────────────────── */}
      <Section tone="white">
        <SectionHead n="06" label="How we deliver" title="The same process runs every project, large or small." />
        <FlowChart items={DELIVERY_STEPS} />
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border-t-2 border-navy">
          {STACK.map((t, i) => (
            <div key={t.name} className={`py-6 pr-4 ${i > 0 ? 'lg:border-l lg:pl-6' : ''} ${i % 2 === 1 ? 'border-l pl-6' : ''} border-border-grey`}>
              <p className="text-2xl font-extrabold text-navy">{t.name}</p>
              <p className="text-sm text-gray-500 mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <CtaBand
        eyebrow="Contact"
        title={<>Have a project <span className="block sm:inline">in mind?</span></>}
        text="Tell us what you need to build. Talk to the office nearest you; the same team works on every project."
        button="Start a Conversation"
        to="/contact"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {[
            { office: 'BloomTech LK',  email: 'info@bloomtech.lk',     phone: '+94 77 916 0704', tel: '+94779160704', addr: 'Mawaramandiya, Western Province, Sri Lanka' },
            { office: 'BloomTech USA', email: 'info@bloomtechusa.com', phone: '(737) 329-8158',  tel: '+17373298158', addr: '11801 Domain Blvd, Austin, TX' },
          ].map((o) => (
            <div key={o.office}>
              <p className="text-sm font-bold text-brand-orange mb-2">{o.office}</p>
              <ContactRows rows={[
                { icon: Mail,   label: 'Email',   value: o.email, href: `mailto:${o.email}` },
                { icon: Phone,  label: 'Phone',   value: o.phone, href: `tel:${o.tel}` },
                { icon: MapPin, label: 'Address', value: o.addr },
              ]} />
            </div>
          ))}
        </div>
      </CtaBand>

      <Footer />
    </div>
  );
};

export default Portfolio;
