import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Clock, CreditCard, BarChart3, Users, Layers, Package,
  FileText, Bell, Shield, Lock, ArrowRight, TrendingUp,
  Database, Briefcase, PieChart, Building2, UserCheck, Zap, Star,
} from 'lucide-react';

interface BloomAuditContentProps {
  onOpenModal: () => void;
}

const TEAL = '#00cba9';
const TEAL_DIM = 'rgba(0,203,169,0.12)';
const BLUE = '#1c3bd8';

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
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* ── FEATURES GRID ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-2 rounded-full" style={{ background: TEAL }} />
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              10 Modules. One Platform.
              <span className="block text-xl text-white/50 font-medium mt-1 tracking-normal">Click any card to learn more</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isOpen = openFeature === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenFeature(isOpen ? null : i)}
                  className={`bg-white/5 backdrop-blur-md border rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                    isOpen ? 'border-[#00cba9]/50 bg-white/10' : 'border-white/10 hover:border-[#00cba9]/30'
                  } ${isOpen ? 'col-span-2 md:col-span-3 lg:col-span-2' : ''}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ background: isOpen ? TEAL : TEAL_DIM }}
                  >
                    <Icon size={20} color={isOpen ? '#fff' : TEAL} />
                  </div>
                  <h3 className="text-sm font-black text-white mb-1">{f.title}</h3>
                  <p className="text-xs text-white/50 font-medium leading-relaxed">{f.short}</p>
                  {isOpen && (
                    <p className="text-xs text-white/70 font-medium leading-relaxed mt-3 pt-3 border-t border-white/10">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 rounded-full" style={{ background: BLUE }} />
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Extend With Add-Ons
              <span className="block text-xl text-white/50 font-medium mt-1 tracking-normal">Available as optional extras on any plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {addons.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#00cba9]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: TEAL_DIM }}
                  >
                    <Icon size={18} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-sm font-black text-white mb-2">{addon.name}</h4>
                  <p className="text-xs font-medium text-white/50 leading-relaxed">{addon.desc}</p>
                  <span
                    className="inline-block mt-3 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-4 px-4 py-1 rounded-full border"
              style={{ color: TEAL, background: TEAL_DIM, borderColor: 'rgba(0,203,169,0.3)' }}
            >
              For Accountants
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-3">
              A Dedicated Suite for<br />
              <span style={{ color: TEAL }}>Accounting Professionals</span>
            </h2>
            <p className="text-white/50 font-medium max-w-2xl mx-auto">
              Bloom Audit goes beyond a single business. Firms get a full command centre to manage multiple clients, workpapers, and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountantTools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div
                  key={i}
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden group hover:bg-white/8 hover:border-[#00cba9]/25 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(0,203,169,0.18)' }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${TEAL}, #00e8c4)` }}
                  >
                    <Icon size={26} color="#fff" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-1">{tool.name}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: TEAL }}>{tool.sub}</p>
                  <p className="text-sm font-medium text-white/60 leading-relaxed">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-3">
              Up and Running in Three Steps
            </h2>
            <p className="text-white/50 font-medium max-w-xl mx-auto">
              We make onboarding seamless — from your first consultation to full platform access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line on desktop */}
            <div
              className="hidden md:block absolute top-14 left-[22%] right-[22%] h-0.5"
              style={{ background: `linear-gradient(90deg, ${TEAL}, ${BLUE})` }}
            />
            {[
              { n: '1', title: 'Book a Consultation', desc: 'Schedule a one-on-one session for a thorough analysis of your financial requirements, business size, and goals.' },
              { n: '2', title: 'Choose a Package', desc: 'Select the plan that best fits your operational needs — or let us recommend the right one after your consultation.' },
              { n: '3', title: 'Get Your Services', desc: 'Our experts handle your onboarding, accounting setup, audits, and compliance so you can focus on growing your business.' },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${TEAL}, #00e8c4)`, boxShadow: `0 12px 32px rgba(0,203,169,0.35)` }}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-sm font-medium text-white/60 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BUSINESS TYPES ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 rounded-full" style={{ background: TEAL }} />
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Built for Every Stage of Growth
              <span className="block text-xl text-white/50 font-medium mt-1 tracking-normal">From solo freelancers to enterprise firms</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 hover:border-[#00cba9]/30 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform"
                    style={{ background: TEAL_DIM }}
                  >
                    <Icon size={28} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-base font-black text-white mb-2">{biz.title}</h4>
                  <p className="text-xs font-medium text-white/55 leading-relaxed">{biz.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-3">
              Trusted by Sri Lankan Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 hover:border-[#00cba9]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="text-sm font-medium text-white/70 leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${TEAL}, #00e8c4)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">{t.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: TEAL }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── TRUST & SECURITY ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-4 px-4 py-1 rounded-full border"
              style={{ color: TEAL, background: TEAL_DIM, borderColor: 'rgba(0,203,169,0.3)' }}
            >
              Trust &amp; Security
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-3">
              Your Financial Data is{' '}
              <span style={{ color: TEAL }}>Secured at Every Layer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00cba9]/25 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: TEAL_DIM }}
                  >
                    <Icon size={18} style={{ color: TEAL }} />
                  </div>
                  <h4 className="text-sm font-black text-white mb-2">{item.title}</h4>
                  <p className="text-xs font-medium text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[50px] border border-white/10 p-10 lg:p-20 text-center"
          style={{ background: `linear-gradient(135deg, rgba(0,203,169,0.12) 0%, rgba(14,59,94,0.6) 50%, rgba(28,59,216,0.1) 100%)` }}
        >
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'rgba(0,203,169,0.12)' }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'rgba(28,59,216,0.1)' }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.0]">
              Ready to <span style={{ color: TEAL }}>Master</span><br />Your Finances?
            </h2>
            <p className="text-lg text-white/60 font-medium max-w-xl mx-auto mb-10">
              Start with a free consultation — no commitment required. Our team will match you to the right plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: TEAL }}
              >
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-white border border-white/20 transition-all hover:bg-white/10"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
