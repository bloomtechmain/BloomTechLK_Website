import { motion } from 'framer-motion';
import {
  BookOpen, Clock, CreditCard, BarChart3, Users, Layers, Package,
  FileText, Bell, Shield, Lock, TrendingUp, CalendarCheck, Boxes, PackageCheck,
  Database, Briefcase, Building2, UserCheck, Zap, Star,
} from 'lucide-react';
import { Section, Heading, Explorer, BlockGrid, FlowChart, CtaBand, PhotoBand, TextLink, fade } from '../../kit';
import { servicePhotos } from '../../photos';

interface BloomAuditContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['bloomaudit'];

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
  return (
    <>
      {/* ── FEATURES ─────────────────────────────────────────── */}
      <Section tone="white">
        <Heading title="10 Modules. One Platform." sub="Click any card to learn more" />
        <Explorer
          items={features.map((f) => ({ icon: f.icon, title: f.title, sub: f.short, desc: f.detail }))}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* ── ADD-ONS ───────────────────────────────────────────────── */}
      <Section tone="grey">
        <Heading title="Extend With Add-Ons" sub="Available as optional extras on any plan" />
        <BlockGrid
          cols={4}
          items={addons.map((a) => ({ icon: a.icon, title: a.name, desc: a.desc, tag: 'Available Add-On' }))}
        />
      </Section>

      {/* ── FOR ACCOUNTANTS ──────────────────────────────────────── */}
      <Section tone="white">
        <Heading
          eyebrow="For Accountants"
          title={<>A Dedicated Suite for<br />Accounting Professionals</>}
          image={pics.a}
        >
          <p>
            Bloom Audit goes beyond a single business. Firms get a full command centre to manage multiple clients, workpapers, and analytics.
          </p>
        </Heading>
        <BlockGrid
          cols={3}
          items={accountantTools.map((t, i) => ({ icon: t.icon, num: String(i + 1).padStart(2, '0'), title: t.name, sub: t.sub, desc: t.desc }))}
        />
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <Section tone="grey">
        <Heading center title="Up and Running in Three Steps" sub="We make onboarding seamless — from your first consultation to full platform access." />
        <FlowChart
          items={[
            { step: '1', icon: CalendarCheck, title: 'Book a Consultation', desc: 'Schedule a one-on-one session for a thorough analysis of your financial requirements, business size, and goals.' },
            { step: '2', icon: Boxes, title: 'Choose a Package', desc: 'Select the plan that best fits your operational needs — or let us recommend the right one after your consultation.' },
            { step: '3', icon: PackageCheck, title: 'Get Your Services', desc: 'Our experts handle your onboarding, accounting setup, audits, and compliance so you can focus on growing your business.' },
          ]}
        />
      </Section>

      {/* ── BUSINESS TYPES ───────────────────────────────────────── */}
      <Section tone="white">
        <Heading title="Built for Every Stage of Growth" sub="From solo freelancers to enterprise firms" />
        <BlockGrid
          cols={4}
          items={[
            { icon: Users, title: 'Freelancers', desc: 'Simple income tracking and professional reports without accountant fees. Start with Basic from LKR 7,499/mo.' },
            { icon: Briefcase, title: 'Small Teams', desc: 'Multi-user access, vendor management, and project tracking for teams up to 5. The Standard plan covers everything.' },
            { icon: Building2, title: 'Growing Companies', desc: 'Full payroll, EPF/ETF, inventory, and asset management. Premium supports up to 20 users as you scale.' },
            { icon: Database, title: 'Enterprises', desc: 'AI forecasting, custom integrations, dedicated account manager, and SLA support tailored to your exact requirements.' },
          ].map((b, i) => ({ ...b, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <Section tone="grey">
        <Heading center title="Trusted by Sri Lankan Businesses" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              {...fade(i * 0.08)}
              className="flex flex-col h-full rounded-xl p-7 bg-white shadow-[5px_5px_0_0_#D5DAE3] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#101D36] transition-all duration-200"
            >
              <div className="flex gap-1 mb-5" aria-hidden="true">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-navy text-navy" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic flex-1 mb-6">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3.5 pt-5 border-t border-gray-200">
                <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">{t.name}</span>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-0.5">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* ── TRUST & SECURITY ─────────────────────────────────────── */}
      <Section tone="dark">
        <Heading light center eyebrow={<>Trust &amp; Security</>} title={<>Your Financial Data is{' '}Secured at Every Layer</>} />
        <BlockGrid
          dark
          cols={3}
          items={securityItems.map((s) => ({ icon: s.icon, title: s.title, desc: s.desc }))}
        />
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <CtaBand
        title={<>Ready to Master Your Finances?</>}
        text="Start with a free consultation — no commitment required. Our team will match you to the right plan."
        button="Get Started Free"
        onClick={onOpenModal}
        secondary={<TextLink onClick={onOpenModal}>Book a Consultation</TextLink>}
      />
    </>
  );
};
