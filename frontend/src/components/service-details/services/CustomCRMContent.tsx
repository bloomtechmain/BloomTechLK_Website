import { motion } from 'framer-motion';
import {
  Users, Layers, Database, Landmark, Target, Truck,
  Shield, Lock, History, BarChart3, ShieldAlert, TrendingUp, Zap,
  Search, RefreshCcw, ArrowRight, Globe, CheckCircle2, Server
} from 'lucide-react';
import {
  Section, Heading, BlockGrid, Explorer, StackTable, FeatureBand, FlowChart, CtaBand, PhotoBand, IconTiles,
  fade, fieldDarkCls, labelDarkCls,
} from '../../kit';
import { servicePhotos } from '../../photos';

/**
 * CustomCRMContent Component
 * Custom content section for Custom CRM/ERP Solutions service
 */
interface CustomCRMContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['custom-crm-erp-solutions'];

export const CustomCRMContent = ({ onOpenModal }: CustomCRMContentProps) => {
  return (
    <>
      {/* Intro: Custom Integration */}
      <Section tone="white">
        <Heading
          eyebrow="Performance Engineering"
          title={<>The Power of Custom Integration</>}
          image={pics.a}
        >
          <p>
            Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={['100% Intellectual Property Ownership', 'Zero "Per-User" Monthly Fees', 'Seamless Legacy System Extraction'].map((text) => ({ label: text }))}
            />
          </div>
        </Heading>
        <BlockGrid
          cols={4}
          items={[
            { title: 'CRM', sub: 'Customer Lifecycle', icon: Users },
            { title: 'ERP', sub: 'Resource Engine', icon: Layers },
            { title: 'Data Labs', sub: 'Single Source', icon: Database },
            { title: 'Fiscal Sync', sub: 'Real-time P&L', icon: Landmark },
          ].map((c, i) => ({ ...c, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* Three Pillars */}
      <Section tone="grey">
        <Explorer
          items={[
            {
              num: 'I', title: 'Tailored CRM', tag: 'Own Your Customer Journey', icon: Users,
              desc: 'Generic CRMs are cluttered with features you don\'t use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle — from initial lead capture to automated follow-ups and long-term retention analytics.',
              points: ['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'],
            },
            {
              num: 'II', title: 'Precision ERP', tag: 'The Engine of Your Business', icon: Layers,
              desc: 'Manage your resources, not just your data. Our custom ERPs integrate your core business processes — including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics — into one seamless dashboard.',
              points: ['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'],
            },
            {
              num: 'III', title: 'Fiscal Sync', tag: 'Real-time Financial Integration', icon: Landmark,
              desc: 'Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.',
              points: ['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'],
            },
          ].map((p) => ({ ...p, title: `${p.num}. ${p.title}` }))}
        />
      </Section>

      {/* Specialized Features for Scaling */}
      <Section tone="white">
        <Heading title="Specialized Features for Scaling" sub="Built for high-growth enterprise operations" />
        <BlockGrid
          cols={4}
          items={[
            { icon: Target, title: 'Automated Lead Scoring', desc: 'Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.' },
            { icon: Truck, title: 'Inventory & Logistics', desc: 'Real-time visibility of stock levels across multiple locations (ideal for companies like Bloom Logistics).' },
            { icon: BarChart3, title: 'Custom Reporting Engines', desc: 'Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.' },
            { icon: ShieldAlert, title: 'Advanced RBAC Security', desc: 'Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.' },
          ]}
        />
      </Section>

      {/* Tech Stack */}
      <Section tone="grey">
        <Heading title="The Tech Stack: Scalable Architecture" sub="Battle-tested foundations for zero-downtime operations" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fade()} className="lg:col-span-7">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-4">Performance Stack</h3>
            <StackTable
              rows={[
                { icon: Server, label: 'Backend Engineering', value: 'Python (Django/FastAPI), Node.js, or Go' },
                { icon: Database, label: 'Database Architecture', value: 'PostgreSQL, MySQL, or MongoDB' },
                { icon: Globe, label: 'Hosting Infrastructure', value: 'Dedicated AMD EPYC Servers or Secure Cloud' },
              ]}
            />
          </motion.div>
          <motion.div {...fade(0.1)} className="lg:col-span-5 rounded-2xl bg-white p-7 lg:p-8 shadow-[8px_8px_0_0_#101D36]">
            <h3 className="text-lg font-extrabold text-navy mb-6">Ecosystem &amp; Security Layer</h3>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">Native Third-Party Integrations</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-lg bg-grey-light text-navy text-sm font-semibold">{item}</span>
              ))}
            </div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">Security &amp; Resilience</p>
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'End-to-End Encryption (AES-256)', icon: Shield },
                { label: 'Multi-Factor Authentication (MFA)', icon: Lock },
                { label: 'Real-time Audit Logs', icon: History }
              ]}
            />
          </motion.div>
        </div>
      </Section>

      {/* CISA Integrity Layer */}
      <FeatureBand
        eyebrow="CISA-Certified Integrity Layer"
        title={<>Secure Data. <br />Audit-Ready Architecture.</>}
        text="As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards."
        points={[
          { icon: CheckCircle2, title: 'Data Integrity Protocol', desc: 'We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.' },
          { icon: CheckCircle2, title: 'Granular Audit Trails', desc: 'Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.' },
          { icon: CheckCircle2, title: 'Institutional Disaster Recovery', desc: 'Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.' },
        ]}
        badge={{ icon: Database, big: 'CISA', caption: 'Certified Integrity' }}
      />

      {/* Case Study */}
      <Section tone="white">
        <Heading title={<>Case Study: Logistics &amp; Entity Management</>} />
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8">
            <BlockGrid
              items={[
                { icon: Truck, title: 'The Challenge', desc: <span className="text-lg font-semibold text-navy">Managing a complex transition of ownership and international logistics across multiple corporate entities.</span> },
                { icon: Globe, title: 'The Solution', desc: 'A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."' },
              ]}
            />
          </div>
          <motion.div {...fade(0.15)} className="lg:col-span-4 rounded-xl bg-navy p-7">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange mb-4">The Result</h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                { v: '100%', l: 'Visibility into Transfer Process', icon: TrendingUp },
                { v: '50%', l: 'Reduction in Admin Overhead', icon: Zap },
              ].map((r) => (
                <div key={r.l} className="py-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-4xl font-extrabold text-white tracking-tight">{r.v}</p>
                    <p className="text-sm text-white/60 mt-1">{r.l}</p>
                  </div>
                  <r.icon className="w-5 h-5 text-white/40 mt-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 4-Stage Process */}
      <Section tone="grey">
        <Heading title={<>Our 4-Stage "Business-First" Process</>} sub="Designing architecture that mimics your team's natural workflow for zero-friction adoption." />
        <FlowChart
          items={[
            { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
            { step: '02', title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
            { step: '03', title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
            { step: '04', title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap }
          ]}
        />
      </Section>

      {/* Final CTA */}
      <CtaBand
        title={<>Ready to Retire the Spreadsheets?</>}
        text={<>Your business is unique. Your software should be, too. Let's build the last system you'll ever need.</>}
        secondary={
          <div className="flex items-center gap-4 rounded-xl bg-white/[0.05] p-4 pr-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-11 h-11 rounded-full ring-2 ring-navy overflow-hidden bg-navy-mid">
                  <img src={`https://i.pravatar.cc/150?u=crm${i}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-extrabold text-base tracking-tight">40+ Enterprises</p>
              <p className="font-mono text-white/45 text-[10px] font-bold uppercase tracking-widest">Successfully Deployed</p>
            </div>
          </div>
        }
      >
        <form className="rounded-2xl bg-white/[0.05] p-7 lg:p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelDarkCls}>Company Name</label>
              <input type="text" placeholder="Bloom Logistics" className={fieldDarkCls} />
            </div>
            <div>
              <label className={labelDarkCls}>Industry</label>
              <input type="text" placeholder="Int. Supply Chain" className={fieldDarkCls} />
            </div>
          </div>
          <div>
            <label className={labelDarkCls}>Current Software Ecosystem</label>
            <input type="text" placeholder="Legacy SAP / Excel / Email silos" className={fieldDarkCls} />
          </div>
          <div>
            <label className={labelDarkCls}>Biggest Operational Bottleneck</label>
            <textarea placeholder="Tell us what's slowing down your team..." rows={3} className={`${fieldDarkCls} resize-none`}></textarea>
          </div>
          <button type="submit" className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors">
            Start Your Custom Build <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </CtaBand>
    </>
  );
};


