import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Clock, CreditCard, BarChart3, Users, Layers, Package,
  FileText, Bell, Shield, Lock, ArrowRight, TrendingUp,
  Database, Briefcase, Building2, UserCheck, Zap, Star,
} from 'lucide-react';
import { NAVY_RAISED } from '../../../styles/designTokens';

interface BloomAuditContentProps {
  onOpenModal: () => void;
}

// BloomAudit keeps its own established product-brand accent (teal/blue),
// distinct from the parent BloomTech.lk navy/orange identity — preserved
// as-is; only the card structure/effects were restyled to the house system.
const TEAL = '#00cba9';
const TEAL_DIM = 'rgba(0,203,169,0.12)';
const BLUE = '#1c3bd8';

const vp = { once: true, margin: '-80px' } as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: BookOpen,
    title: 'Advanced Accounting',
    short: 'Full double-entry ledgers & journals',
    detail: 'Complete double-entry accounting with automated ledgers, journals, trial balance, P&L, and balance sheet generation. Supports any chart-of-accounts structure.',
  },
  {
    icon: Clock,
    title: 'Expense Tracking',
    short: 'Real-time capture across departments',
    detail: 'Capture expenses in real time across categories. Attach receipts, set approval workflows, and generate instant expense summaries by cost centre or project.',
  },
  {
    icon: CreditCard,
    title: 'Bank Reconciliation',
    short: 'Manual reconciliation & transaction matching',
    detail: 'Manual bank reconciliation with intelligent transaction matching, outstanding item tracking, and reconciliation reports for accurate month-end closing.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    short: 'Visual dashboards with trend charts',
    detail: 'Visual dashboards showing income, expense, and profit trends. Drill-down reports, period comparisons, and exportable charts for stakeholders.',
  },
  {
    icon: Users,
    title: 'Payroll & EPF/ETF',
    short: 'Sri Lanka-compliant payroll automation',
    detail: 'Fully compliant Sri Lankan payroll with automatic EPF (8%/12%) and ETF (3%) calculations, salary slips, and government submission-ready reports.',
  },
  {
    icon: Layers,
    title: 'Asset Management',
    short: 'Track assets, depreciation & write-offs',
    detail: 'Complete fixed asset register with purchase cost, useful life, depreciation schedules (straight-line or reducing balance), and automated write-off journals.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    short: 'Stock tracking & reorder alerts',
    detail: 'Real-time stock tracking across locations, automatic reorder alerts, cost-of-goods-sold reporting, and inventory valuation (FIFO or weighted average).',
  },
  {
    icon: Building2,
    title: 'Employee & Vendor Portal',
    short: 'Manage staff, vendors & permissions',
    detail: 'Centralised employee records, vendor contracts, purchase orders, and access permissions. Employees access their own data; vendors submit invoices through the portal.',
  },
  {
    icon: FileText,
    title: 'Document Bank',
    short: 'Secure digital storage for all records',
    detail: 'Encrypted cloud storage for invoices, contracts, bank statements, and financial records. Tag, search, and share documents with role-based access control.',
  },
  {
    icon: Bell,
    title: 'Real-Time Notifications',
    short: 'Package expiry alerts & in-app updates',
    detail: 'Automated alerts for subscription expiry, overdue invoices, low stock, payroll due dates — delivered via email and in-app notifications.',
  },
];

const addons = [
  { icon: FileText, name: 'Quote Generator', desc: 'Create professional quotes with automated pricing and PDF export.' },
  { icon: Clock, name: 'Subscriptions Tracker', desc: 'Track all recurring business subscriptions and renewal dates centrally.' },
  { icon: Package, name: 'Document Bank', desc: 'Encrypted cloud storage for invoices, contracts, and financial records.' },
  { icon: Layers, name: 'Asset & Depreciation', desc: 'Fixed asset register, depreciation schedules, and write-off journals.' },
  { icon: FileText, name: 'Estimate Generator', desc: 'Generate detailed project estimates with taxes and branded PDF output.' },
  { icon: Briefcase, name: 'Custom Management', desc: 'Bespoke workflow modules tailored to your specific business operations.' },
  { icon: Users, name: 'Leads Management', desc: 'Track prospects, follow-ups, and conversion rates integrated with financials.' },
  { icon: TrendingUp, name: 'Proposal Tracker', desc: 'Monitor sent proposals, track client views, and set follow-up reminders.' },
];

const accountantTools = [
  {
    icon: Database,
    name: 'Bloom ERP HQ',
    sub: 'ERP Command Centre',
    desc: 'Full ERP command centre for accountants managing multiple client organisations from a single dashboard. Switch between clients instantly, consolidate reports, and maintain full audit trails.',
  },
  {
    icon: Briefcase,
    name: 'Practice Manager',
    sub: 'Firm Workflow Management',
    desc: 'End-to-end workflow and client management for accounting firms — task assignment, deadline tracking, client communication logs, and team capacity management.',
  },
  {
    icon: BookOpen,
    name: 'Cashbook & Ledger',
    sub: 'Simplified Bookkeeping',
    desc: 'Simplified cash-based bookkeeping tool for small clients who need straightforward income/expense tracking with cashbook reports and basic ledger summaries.',
  },
  {
    icon: FileText,
    name: 'Workpapers',
    sub: 'Digital Audit Preparation',
    desc: 'Digital audit workpaper preparation and sign-off. Prepare, review, and authorise working papers electronically with version control and partner approval workflows.',
  },
  {
    icon: BarChart3,
    name: 'Syft Analytics',
    sub: 'Advanced Financial Intelligence',
    desc: 'Advanced data analytics and financial visualisation for accounting professionals. Generate client-ready reports and deliver strategic advisory insights with confidence.',
  },
];

const testimonials = [
  {
    initials: 'NK',
    quote: '"Bloom Audit replaced three separate tools we were juggling. The payroll module with EPF/ETF calculations saved us hours every month — and it\'s always accurate. Best decision for our manufacturing company."',
    name: 'Nimal Karunaratne',
    role: 'Director · Karunaratne Manufacturing, Kandy',
  },
  {
    initials: 'SF',
    quote: '"As an accounting firm, the Practice Manager and Workpapers modules changed how we operate. We manage 35+ client files from one dashboard with full sign-off trails. Our audit efficiency has doubled."',
    name: 'Sanduni Fernando',
    role: 'Partner · Fernando & Associates, Colombo 3',
  },
  {
    initials: 'RP',
    quote: '"We upgraded from Basic to Standard after two months. The inventory and asset management modules alone paid for the plan many times over. The analytics dashboard is something I check every morning."',
    name: 'Roshan Perera',
    role: 'CEO · Perera Trading Co., Gampaha',
  },
];

const securityItems = [
  { icon: Lock, title: 'JWT Authentication', desc: 'Stateless JSON Web Token authentication with short-lived tokens and refresh rotation — every session is verified independently.' },
  { icon: Shield, title: 'Bcrypt Encryption', desc: 'All user passwords are hashed with bcrypt before storage. Plain-text credentials are never written to disk or transmitted.' },
  { icon: UserCheck, title: 'Role-Based Access Control', desc: 'Granular permissions ensure every user only sees and touches what they\'re authorised to — from data entry staff to directors.' },
  { icon: Bell, title: 'Daily Package Monitoring', desc: 'Automated daily checks on subscription status with advance expiry notifications so your team is never caught off guard.' },
  { icon: Zap, title: 'Google OAuth 2.0', desc: 'Sign in securely with your existing Google account — full OAuth 2.0 compliance, no extra password to remember.' },
  { icon: Database, title: 'Cloud Hosting & Backups', desc: 'Hosted on secure cloud infrastructure with automatic daily backups, high availability, and SSL encryption on all data in transit.' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const BloomAuditContent = ({ onOpenModal }: BloomAuditContentProps) => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* ── FEATURES GRID ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ background: TEAL }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              10 Modules. One Platform.
              <span className="block text-base text-white/50 font-normal mt-1.5">Click any card to learn more</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isOpen = openFeature === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenFeature(isOpen ? null : i)}
                  className={`rounded-xl p-5 cursor-pointer border transition-colors ${
                    isOpen ? 'col-span-2 md:col-span-3 lg:col-span-2' : ''
                  }`}
                  style={{ backgroundColor: NAVY_RAISED, borderColor: isOpen ? 'rgba(0,203,169,0.4)' : 'rgba(255,255,255,0.1)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3.5 transition-colors"
                    style={{ background: isOpen ? TEAL : TEAL_DIM }}
                  >
                    <Icon size={18} color={isOpen ? '#fff' : TEAL} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{f.short}</p>
                  {isOpen && (
                    <p className="text-xs text-white/65 leading-relaxed mt-3 pt-3 border-t border-white/10">
                      {f.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── ADD-ONS ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ background: BLUE }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Extend With Add-Ons
              <span className="block text-base text-white/50 font-normal mt-1.5">Available as optional extras on any plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 border border-white/10 hover:border-white/20 transition-colors"
                  style={{ backgroundColor: NAVY_RAISED }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5" style={{ background: TEAL_DIM }}>
                    <Icon size={16} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{addon.name}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{addon.desc}</p>
                  <span
                    className="inline-block mt-3 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                    style={{ color: TEAL, background: TEAL_DIM }}
                  >
                    Available Add-On
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── FOR ACCOUNTANTS ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.12em] mb-4 px-3.5 py-1 rounded-full border"
              style={{ color: TEAL, background: TEAL_DIM, borderColor: 'rgba(0,203,169,0.3)' }}
            >
              For Accountants
            </span>
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-white tracking-tight mb-3">
              A Dedicated Suite for<br />
              <span style={{ color: TEAL }}>Accounting Professionals</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-[15px]">
              Bloom Audit goes beyond a single business. Firms get a full command centre to manage multiple clients, workpapers, and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {accountantTools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors"
                  style={{ backgroundColor: NAVY_RAISED }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: TEAL_DIM }}
                  >
                    <Icon size={22} style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tool.name}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wide mb-3" style={{ color: TEAL }}>{tool.sub}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-white tracking-tight mb-3">
              Up and Running in Three Steps
            </h2>
            <p className="text-white/55 max-w-xl mx-auto text-[15px]">
              We make onboarding seamless — from your first consultation to full platform access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-10 left-[22%] right-[22%] h-px"
              style={{ background: `linear-gradient(90deg, ${TEAL}, ${BLUE})`, opacity: 0.4 }}
            />
            {[
              { n: '1', title: 'Book a Consultation', desc: 'Schedule a one-on-one session for a thorough analysis of your financial requirements, business size, and goals.' },
              { n: '2', title: 'Choose a Package', desc: 'Select the plan that best fits your operational needs — or let us recommend the right one after your consultation.' },
              { n: '3', title: 'Get Your Services', desc: 'Our experts handle your onboarding, accounting setup, audits, and compliance so you can focus on growing your business.' },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-white border"
                  style={{ backgroundColor: NAVY_RAISED, borderColor: TEAL }}
                >
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BUSINESS TYPES ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1 rounded-full" style={{ background: TEAL }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Built for Every Stage of Growth
              <span className="block text-base text-white/50 font-normal mt-1.5">From solo freelancers to enterprise firms</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { icon: Users, title: 'Freelancers', desc: 'Simple income tracking and professional reports without accountant fees. Start with Basic from LKR 7,499/mo.' },
              { icon: Briefcase, title: 'Small Teams', desc: 'Multi-user access, vendor management, and project tracking for teams up to 5. The Standard plan covers everything.' },
              { icon: Building2, title: 'Growing Companies', desc: 'Full payroll, EPF/ETF, inventory, and asset management. Premium supports up to 20 users as you scale.' },
              { icon: Database, title: 'Enterprises', desc: 'AI forecasting, custom integrations, dedicated account manager, and SLA support tailored to your exact requirements.' },
            ].map((biz, i) => {
              const Icon = biz.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-colors"
                  style={{ backgroundColor: NAVY_RAISED }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ background: TEAL_DIM }}>
                    <Icon size={22} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{biz.title}</h4>
                  <p className="text-xs text-white/55 leading-relaxed">{biz.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-white tracking-tight">
              Trusted by Sri Lankan Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl p-7 flex flex-col border border-white/10 hover:border-white/20 transition-colors"
                style={{ backgroundColor: NAVY_RAISED }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="text-sm text-white/65 leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                    style={{ background: TEAL }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: TEAL }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── TRUST & SECURITY ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.12em] mb-4 px-3.5 py-1 rounded-full border"
              style={{ color: TEAL, background: TEAL_DIM, borderColor: 'rgba(0,203,169,0.3)' }}
            >
              Trust &amp; Security
            </span>
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-white tracking-tight">
              Your Financial Data is{' '}
              <span style={{ color: TEAL }}>Secured at Every Layer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                  style={{ backgroundColor: NAVY_RAISED }}
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-3.5" style={{ background: TEAL_DIM }}>
                    <Icon size={18} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-xl border border-white/10 p-10 lg:p-16 text-center"
          style={{ backgroundColor: NAVY_RAISED }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
            Ready to <span style={{ color: TEAL }}>Master</span> Your Finances?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-9">
            Start with a free consultation — no commitment required. Our team will match you to the right plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-base font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: TEAL, boxShadow: '0 8px 20px -6px rgba(0,203,169,0.45)' }}
            >
              Get Started Free
              <ArrowRight size={18} />
            </button>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-base font-semibold text-white border border-white/20 transition-all hover:bg-white/10"
            >
              Book a Consultation
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
