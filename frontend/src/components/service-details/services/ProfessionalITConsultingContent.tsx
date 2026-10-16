import { motion } from 'framer-motion';
import {
  ShieldAlert, Zap, Globe, UserCheck, FileCheck, Landmark, RefreshCcw,
  Database, CheckCircle2, Search, Layers, Lock, LineChart,
  Truck, ShieldCheck, Repeat, Eye, ArrowRight, ChevronDown, FileSearch, Rocket
} from 'lucide-react';
import {
  Section, Heading, Explorer, BlockGrid, FeatureBand, StackTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl, Eyebrow, MediaFrame,
  fade, fieldDarkCls, labelDarkCls,
} from '../../kit';
import { servicePhotos, photos } from '../../photos';

/**
 * ProfessionalITConsultingContent Component
 * Custom content section for Professional IT Consulting service
 */
interface ProfessionalITConsultingContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['professional-it-consulting'];

export const ProfessionalITConsultingContent = ({ onOpenModal }: ProfessionalITConsultingContentProps) => {
  return (
    <>
      {/* Core Professional Pillars */}
      <Section tone="white">
        <Heading
          title="Core Professional Pillars"
          sub="High-level expertise across three distinct consultancy buckets"
        />
        <Explorer
          items={[
            {
              num: 'I', icon: ShieldAlert,
              title: <>I. IT Governance &amp; Risk Management (CISA-Led)</>,
              desc: <>Leveraging our <Hl>CISA certification</Hl>, we provide independent, high-level audits of your IT infrastructure and internal controls. We don't just find vulnerabilities; we design the remediation roadmap to ensure your organization is resilient, compliant, and audit-ready.</>,
            },
            {
              num: 'II', icon: Zap,
              title: 'II. Business Process Optimization',
              desc: <>We analyze your "as-is" workflows to identify bottlenecks in your supply chain, financial reporting, or team productivity. Drawing on our experience with <Hl>Custom ERP and CRM builds</Hl>, we re-engineer your processes for maximum efficiency and scalability.</>,
            },
            {
              num: 'III', icon: Globe,
              title: <>III. International Operations &amp; Entity Management</>,
              desc: <>Managing cross-border business is complex. We provide strategic support for <Hl>entity management, ownership transfers, and international logistics</Hl>. We understand the nuances of global business, ensuring your operations remain compliant and streamlined across multiple jurisdictions.</>,
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* Specialized Advisory Services */}
      <Section tone="grey">
        <Heading title="Specialized Advisory Services" sub={<>Executive-level leadership &amp; strategic oversight</>} />
        <BlockGrid
          cols={4}
          items={[
            {
              title: 'Fractional CTO/CISO Services',
              desc: 'High-level technology leadership for firms that need executive-grade strategy without the full-time overhead.',
              icon: UserCheck
            },
            {
              title: 'Compliance Framework Alignment',
              desc: 'Mapping your business to SOC2, ISO 27001, HIPAA, or PCI-DSS standards with surgical precision.',
              icon: FileCheck
            },
            {
              title: 'Vendor & Contract Management',
              desc: 'Professional oversight of third-party technology providers to ensure SLA compliance and cost-efficiency.',
              icon: Landmark
            },
            {
              title: 'Business Continuity Planning (BCP)',
              desc: 'Designing the "What If" scenarios for disaster recovery, data protection, and operational resilience.',
              icon: RefreshCcw
            }
          ].map((it, i) => ({ ...it, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* The "CISA & ISACA" Advantage */}
      <FeatureBand
        eyebrow="CISA Certified Authority Layer"
        title={<>Certified Integrity. <br />Evidence-Based Advice.</>}
        text={<>Professional services are built on trust. As an active member of the <Hl>ISACA Austin Chapter</Hl> and a holder of the <Hl>CISA (Certified Information Systems Auditor)</Hl> designation, my advisory is grounded in globally recognized standards of excellence.</>}
        points={[
          { icon: CheckCircle2, title: 'Objective Analysis', desc: 'We provide unbiased, third-party evaluations of your technology and teams.' },
          { icon: CheckCircle2, title: 'Regulatory Fluency', desc: 'We speak the language of auditors, lawyers, and stakeholders fluently.' },
          { icon: CheckCircle2, title: 'Ethical Standards', desc: 'Our work is governed by a strict code of professional ethics and continuous professional education (CPE).' },
        ]}
        badge={{ icon: Database, big: 'ISACA', caption: 'Austin Chapter' }}
      />

      {/* Service Delivery Stack */}
      <Section tone="white">
        <Heading title="Service Delivery Stack" sub="The frameworks and tools that keep your strategy on track" />
        <StackTable
          head={['Category', 'Frameworks & Methodology']}
          rows={[
            { label: 'Audit Standard', value: 'COBIT, NIST Cybersecurity Framework, ITIL', icon: Search },
            { label: 'Project Mgmt', value: 'Agile, Waterfall, and Lean Six Sigma Principles', icon: Layers },
            { label: 'Communication', value: 'Secure, Encrypted Portals & Professional Documentation', icon: Lock },
            { label: 'Analysis', value: 'Data-driven ROI modeling and Risk Heat Mapping', icon: LineChart }
          ]}
        />
      </Section>

      {/* The 4-Phase Engagement Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Engagement Lifecycle" />
        <FlowChart
          items={[
            { step: '1', icon: Search, title: 'Strategic Discovery', desc: 'We define the scope, identify key stakeholders, and establish success metrics.' },
            { step: '2', icon: FileSearch, title: 'Gap Analysis & Audit', desc: 'A deep-dive into your current state vs. your desired "Future State" or regulatory requirement.' },
            { step: '3', icon: Rocket, title: 'Strategy Implementation', desc: 'We execute the plan, whether it\'s an infrastructure overhaul, a compliance push, or an entity transfer.' },
            { step: '4', icon: ShieldCheck, title: 'Governance & Handover', desc: 'Final documentation, training, and established monitoring to ensure long-term success.' }
          ]}
        />
      </Section>

      {/* Global Logistics & Supply Chain Expertise */}
      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div {...fade()} className="lg:col-span-6">
            <span className="w-12 h-12 rounded-xl bg-grey-light text-navy-mid flex items-center justify-center mb-7">
              <Truck className="w-6 h-6" />
            </span>
            <Eyebrow>Logistics Consultancy</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
              From Sri Lanka <br />
              to the World.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 [&_.hl]:text-navy [&_.hl]:font-semibold">
              With deep roots in international logistics through <Hl>Bloom Logistics</Hl>, we provide specialized consultancy for firms navigating the complexities of global supply chains. We handle the "hard parts"—regulatory compliance, transfer logistics, and operational oversight—so you can focus on growth.
            </p>
            <IconTiles
              cols="sm:grid-cols-3"
              items={[
                { label: 'Regulatory Compliance', icon: ShieldCheck },
                { label: 'Transfer Logistics', icon: Repeat },
                { label: 'Operational Oversight', icon: Eye }
              ]}
            />
          </motion.div>
          <div className="lg:col-span-6">
            <MediaFrame photo={photos.crmWarehouse} />
          </div>
        </div>
      </Section>

      {/* Final Call to Action */}
      <CtaBand
        eyebrow="Executive Engagement"
        title="Ready for a Higher Standard of Service?"
        text="Don't settle for generic advice. Partner with a professional who understands the intersection of technology, finance, and global operations."
      >
        <form className="rounded-2xl bg-white/[0.05] p-7 lg:p-8 flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelDarkCls}>Full Name</label>
              <input type="text" placeholder="Executive Name" className={fieldDarkCls} required />
            </div>

            <div>
              <label className={labelDarkCls}>Industry</label>
              <input type="text" placeholder="Technology / Logistics" className={fieldDarkCls} required />
            </div>

            <div className="sm:col-span-2">
              <label className={labelDarkCls}>Primary Need</label>
              <div className="relative">
                <select defaultValue="" className={`${fieldDarkCls} appearance-none cursor-pointer pr-12`} required>
                  <option value="" disabled className="text-gray-900 bg-white">Select a Requirement...</option>
                  <option value="audit" className="text-gray-900 bg-white">IT Audit & Governance</option>
                  <option value="strategy" className="text-gray-900 bg-white">Operational Strategy</option>
                  <option value="logistics" className="text-gray-900 bg-white">International Logistics</option>
                  <option value="fractional" className="text-gray-900 bg-white">Fractional Leadership (CTO/CISO)</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50" />
              </div>
            </div>
          </div>

          <button type="submit" className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors">
            Book a Professional Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </CtaBand>
    </>
  );
};
