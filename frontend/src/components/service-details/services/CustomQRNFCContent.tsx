import {
  QrCode, Wifi, ShieldCheck, Lock, FileText, Truck, BarChart3, Briefcase,
  Activity, Key, Database, Search, Tags, Plug, Radar
} from 'lucide-react';
import {
  Section, Heading, BlockGrid, FeatureBand, CompareTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl,
  SessionCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls,
  subPoint,
} from '../../kit';
import { servicePhotos, photos } from '../../photos';

interface CustomQRNFCContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['custom-qr-nfc-applications'];

const sub = subPoint;

export const CustomQRNFCContent = ({ onOpenModal }: CustomQRNFCContentProps) => {
  return (
    <>
      {/* Integrated Proximity Technologies */}
      <Section tone="white">
        <Heading title="Integrated Proximity Technologies" sub="Bridging the physical and digital divide" />
        <BlockGrid
          cols={2}
          items={[
            {
              num: 'I', icon: QrCode, image: photos.qrPhones,
              title: 'Dynamic QR Code Ecosystems',
              desc: <>Unlike static codes, our dynamic QR solutions allow for <Hl>real-time data updates</Hl> without changing the physical print — turning every label, asset, or marketing piece into a live, intelligent touchpoint.</>,
              points: [
                sub('Operational Automation', 'Link physical assets directly to your ERP or CRM for instant status updates or maintenance logs.'),
                sub('Secure Triage & Support', 'Automate customer support ticketing or lead capture by placing intelligent QR codes on hardware or marketing materials.'),
                sub('Encrypted Document Access', 'Provide instant, role-based access to manuals or compliance certifications stored in your private cloud.'),
              ],
            },
            {
              num: 'II', icon: Wifi, image: pics.a,
              title: 'Advanced NFC Implementation',
              desc: <>NFC technology offers a premium, <Hl>"invisible" interface</Hl> for high-security and high-speed interactions — enabling seamless authentication, asset tracking, and collaboration with a single tap.</>,
              points: [
                sub('Secure Identity & Access (IAM)', 'Phishing-resistant MFA and physical access control within your office or data center.'),
                sub('Asset Lifecycle Management', 'Track hardware from procurement to retirement with NFC tags storing an immutable Single Source of Truth.'),
                sub('Interactive AV & Collaboration', 'Enable "One-Touch" meeting joins and instant media sharing in your managed AV environments.'),
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* CISA-Certified Integrity Layer */}
      <FeatureBand
        eyebrow={<>Security &amp; Compliance</>}
        title="The CISA-Certified"
        sub={<span className="italic">Integrity Layer.</span>}
        text={<>Proximity-based applications are often targeted for data interception. As a <Hl>CISA-certified firm</Hl>, we prioritize the security and auditability of every scan and tap — building trust into every touchpoint.</>}
        points={[
          { title: 'Audit-Ready Logging', desc: 'Every QR scan or NFC tap is captured with a timestamp and unique identifier — a bulletproof record for internal audits.', icon: Activity },
          { title: 'Encryption at Rest & Transit', desc: 'AES-256 and TLS 1.3 standards ensure data exchanged via proximity triggers remains unreadable to unauthorized parties.', icon: Lock },
          { title: 'Role-Based Access (RBAC)', desc: 'Sensitive information triggered by a tag is only visible to authorized personnel based on their credentials.', icon: Key },
        ]}
        badge={{ big: <ShieldCheck className="w-20 h-20 mx-auto text-white" strokeWidth={1.25} aria-hidden="true" /> }}
      />

      {/* Industry Use Cases Table */}
      <Section tone="white">
        <Heading title="Specialized Industry Use Cases" sub="Direct ROI through precision proximity solutions" />
        <CompareTable
          head={['Industry', 'Application', 'ROI / Result']}
          rows={[
            { label: 'Logistics', left: 'NFC-tagged pallets for real-time cross-border tracking', right: '50% reduction in admin overhead', icon: Truck },
            { label: 'IT Infrastructure', left: 'QR-coded server racks for instant "Rack & Roll" documentation', right: 'Reduced downtime and faster troubleshooting', icon: Database },
            { label: 'Marketing', left: 'AI-driven QR lead enrichment for automated scoring', right: 'Higher conversion and optimized ad spend', icon: BarChart3 },
            { label: 'Professional Services', left: 'Secure NFC digital business cards and entity transfer docs', right: 'Streamlined international operations', icon: Briefcase },
          ]}
        />
      </Section>

      {/* 4-Phase Deployment Process */}
      <Section tone="grey">
        <Heading title="Our 4-Phase Deployment Process" />
        <FlowChart
          items={[
            { step: '1', icon: Search, title: 'Workflow Mapping', desc: 'We identify physical touchpoints where QR or NFC can replace manual "Excel-and-Email" chaos.' },
            { step: '2', icon: Tags, title: 'Architecture & Tagging', desc: 'We design the database schema and select the appropriate hardware — tags, stickers, or cards — for your environment.' },
            { step: '3', icon: Plug, title: 'Full-Scale Integration', desc: 'We connect your proximity triggers to your existing tech stack, including Shopify, CRM, or custom ERP.' },
            { step: '4', icon: Radar, title: 'Monitoring & Security Review', desc: 'Real-time alerts for suspicious scan behavior and regular vulnerability assessments keep your system secure.' },
          ]}
        />
      </Section>

      {/* What We Integrate With */}
      <Section tone="white">
        <Heading
          eyebrow="Seamless Connectivity"
          title={<>Plugs Into Your Stack.</>}
          image={photos.crmDashboard}
        >
          <p>
            Our proximity solutions don't live in isolation — they connect directly to the tools your business already relies on, turning every scan or tap into a <Hl>live data event</Hl> inside your workflow.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'CRM & ERP Systems (Custom or Salesforce)', icon: FileText },
                { label: 'E-commerce Platforms (Shopify, WooCommerce)', icon: BarChart3 },
                { label: 'Asset Management & ITSM Databases', icon: Database },
                { label: 'Private Cloud & On-Premise Servers', icon: ShieldCheck },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* CTA */}
      <CtaBand
        eyebrow={<>QR &amp; NFC Specialist On Standby</>}
        title={<>Ready to Make Your Physical Assets Intelligent?</>}
        text="Let's identify where a single scan or tap can eliminate hours of manual work and replace it with a live, auditable data event."
      >
        <SessionCard title="Free Discovery Session" line="Let's map your first proximity workflow" button="Request Discovery Session" onClick={onOpenModal}>
          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>
          <div>
            <label className={labelDarkCls}>Primary Use Case</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Use Case...</option>
                <option value="asset_tracking" className="text-gray-900 bg-white">Asset Tracking</option>
                <option value="access_control" className="text-gray-900 bg-white">Access Control / IAM</option>
                <option value="marketing" className="text-gray-900 bg-white">Marketing &amp; Lead Capture</option>
                <option value="crm_integration" className="text-gray-900 bg-white">CRM / ERP Integration</option>
              </select>
            </SelectWrap>
          </div>
        </SessionCard>
      </CtaBand>
    </>
  );
};


