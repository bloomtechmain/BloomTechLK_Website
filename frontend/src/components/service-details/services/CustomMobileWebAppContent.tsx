import {
  Smartphone, Zap, PenTool, ShoppingCart, BarChart3, Brain, Users,
  Plug, QrCode, Server, GitBranch, Cpu, Shield, Lock, ShieldCheck,
  CheckCircle2, Database, Layers, Route, Rocket, RefreshCcw,
} from 'lucide-react';
import {
  Section, Heading, BlockGrid, Explorer, FeatureBand, StackTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl,
  SessionCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls,
} from '../../kit';
import { servicePhotos } from '../../photos';

interface CustomMobileWebAppContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['custom-mobile-web-applications'];

export const CustomMobileWebAppContent = ({ onOpenModal }: CustomMobileWebAppContentProps) => {
  return (
    <>
      {/* Development Philosophy */}
      <Section tone="white">
        <Heading title="Our Development Philosophy" sub="Bridging technological breakthroughs with practical business requirements" />
        <BlockGrid
          cols={3}
          items={[
            { icon: Smartphone, title: 'Conversion-First Design', desc: 'We focus on "User Intent," ensuring every pixel and interaction — on mobile or web — serves a specific business purpose, not just aesthetic appeal.' },
            { icon: Zap, title: 'Performance-Driven Engineering', desc: 'Built on clean, bloat-free code optimized for sub-second load times and flawless responsiveness across every device and platform.' },
            { icon: PenTool, title: 'High-Fidelity UI/UX', desc: 'Utilizing Canva Enterprise and Freepik Premium to craft standout visual identities that reflect the prestige of your brand everywhere.' },
          ].map((it, i) => ({ ...it, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* Specialized Solutions */}
      <Section tone="grey">
        <Heading title={<>Specialized Mobile &amp; Web Solutions</>} sub="Bespoke engines tailored to your operational needs — on any platform" />
        <Explorer
          items={[
            { num: 'I', icon: ShoppingCart, title: 'E-Commerce Powerhouses', desc: 'Custom storefronts — mobile or web — designed for high-volume transactions and seamless checkout flows, from product discovery to post-purchase experience.', stack: ['Shopify Integration', 'Apple Pay / Google Pay', 'High-Volume Checkout'] },
            { num: 'II', icon: BarChart3, title: 'Enterprise CRM & ERP Modules', desc: 'Manage resources and customers in one seamless, unified dashboard — integrating inventory, HR, sales pipelines, and financial sync into a single source of truth.', stack: ['Precision ERP', 'Tailored CRM', 'Financial Sync'] },
            { num: 'III', icon: Users, title: 'Custom Portals & Internal Tools', desc: 'Bespoke mobile and web applications built to solve specific operational bottlenecks — from field service dashboards to secure, role-based client and member portals.', stack: ['React Native & Flutter', 'Role-Based Access (RBAC)', 'Offline-First'] },
            { num: 'IV', icon: Brain, title: 'Automated Data & Document Intelligence', desc: 'Turn your archives into a searchable, intelligent knowledge base — extraction engines that read PDFs, emails, and images, piping key metrics directly into your database.', stack: ['Extraction Engines', 'AI-Driven Logic', 'Predictive Analytics'] },
            { num: 'V', icon: Plug, title: 'Enterprise Integration', desc: 'We connect your apps directly to your existing tech stack — including Shopify, custom CRM, and ERP systems — creating a single source of truth.', stack: ['CRM & ERP Sync', 'REST & GraphQL APIs', 'Real-Time Data'] },
            { num: 'VI', icon: QrCode, title: 'Proximity-Based Applications', desc: 'Specialized apps utilizing QR and NFC technology for secure asset tracking, contactless interactions, and automated workflows.', stack: ['NFC Integration', 'QR Scanning', 'Asset Tracking'] },
          ]}
        />
      </Section>

      {/* Infrastructure Advantage */}
      <FeatureBand
        eyebrow="Exclusive Infrastructure Advantage"
        title={<>Backend That <br />Never Fails.</>}
        text={<>Unlike traditional design firms, our mobile and web solutions are backed by <Hl>enterprise-grade infrastructure</Hl> — fully managed, always available, and built to scale.</>}
        points={[
          { title: 'Secure Managed Hosting', desc: 'App backends hosted on high-availability cloud environments — AWS, Google Cloud, or Azure.', icon: Layers },
          { title: 'Automated CI/CD Pipelines', desc: 'Custom deployment pipelines that automate testing and ensure zero-downtime updates to your live app.', icon: GitBranch },
          { title: 'On-Premise Capability', desc: 'For strict data privacy, we host your application\'s intelligence locally on AMD EPYC server clusters.', icon: Cpu },
        ]}
        badge={{ icon: Server, big: 'Enterprise', caption: 'Infrastructure-Grade Backend' }}
      />

      {/* CISA Integrity Standard */}
      <Section tone="white">
        <Heading
          eyebrow="CISA-Certified Standard"
          title={<>Security &amp;<br />Compliance Built In.</>}
          image={pics.a}
        >
          <p>
            As a <Hl>CISA-certified professional</Hl>, we ensure every mobile and web platform we build meets modern security and regulatory standards — protecting your business and every user from day one.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'GDPR/CCPA Compliance & ADA Accessibility (WCAG 2.1)', desc: 'Privacy-first and inclusive design protecting you from regulatory liability.', icon: Lock },
                { label: 'Audit-Ready, Disaster-Resilient Architecture', desc: 'Detailed logging, redundant backups, and hardened protocols built for full accountability.', icon: CheckCircle2 },
                { label: 'Zero Trust Identity & Access Management', desc: 'Phishing-resistant MFA and least-privilege access to protect sensitive user data.', icon: ShieldCheck },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* 4-Phase Development Roadmap */}
      <Section tone="grey">
        <Heading title="Our 4-Phase Development Roadmap" />
        <FlowChart
          items={[
            { step: '1', icon: Route, title: 'Strategy & Workflow Mapping', desc: 'Mapping the complete user journey and current manual processes before touching a single line of code — aligning every screen to a business goal.' },
            { step: '2', icon: PenTool, title: 'Architecture & Creative Concepting', desc: 'Designing database schemas, API contracts, and high-fidelity mockups that bring your brand\'s personality to life and validate UX flows.' },
            { step: '3', icon: RefreshCcw, title: 'Iterative Development & Integration', desc: 'Building in sprints with access to a live staging environment, integrating essential APIs for payments, communications, and your existing stack.' },
            { step: '4', icon: Rocket, title: 'Launch, Training & Optimization', desc: 'App Store submission or deployment, full staff training, and continuous performance tuning as your user base grows.' },
          ]}
        />
      </Section>

      {/* Tech Stack */}
      <Section tone="white">
        <Heading title={<>Mobile &amp; Web Tech Stack</>} sub="The professional toolset behind every build" />
        <StackTable
          head={['Layer', 'Our Toolset']}
          rows={[
            { label: 'Mobile', value: 'React Native, Flutter — one codebase for iOS & Android', icon: Smartphone },
            { label: 'Web Frontend', value: 'React, Next.js, TypeScript, Tailwind CSS', icon: Layers },
            { label: 'Backend', value: 'Node.js, Python (Django / FastAPI), or Go', icon: Server },
            { label: 'Database', value: 'PostgreSQL, MySQL, or MongoDB for unstructured data', icon: Database },
            { label: 'Infrastructure', value: 'AWS, Google Cloud, Azure — with On-Premise AMD EPYC option', icon: Cpu },
            { label: 'Security', value: 'OAuth 2.0, JWT, Zero Trust IAM, AES-256 Encryption', icon: Shield },
          ]}
        />
      </Section>

      {/* CTA */}
      <CtaBand
        eyebrow="Solutions Architect On Standby"
        title={<>Ready to Build Your <br />Mobile or Web Platform?</>}
        text="Your app — on a phone or in a browser — should be your hardest-working team member. Let's map the user journey and design an experience that drives real business results."
      >
        <SessionCard title="Start Your Project" line="Tell us what you're building" button="Start My Project" onClick={onOpenModal}>
          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>
          <div>
            <label className={labelDarkCls}>Project Type</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Project Type...</option>
                <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Store</option>
                <option value="crm_erp" className="text-gray-900 bg-white">CRM / ERP System</option>
                <option value="client_portal" className="text-gray-900 bg-white">Client or Member Portal</option>
                <option value="enterprise" className="text-gray-900 bg-white">Enterprise / Internal Tool</option>
                <option value="consumer" className="text-gray-900 bg-white">Consumer-Facing App</option>
                <option value="proximity" className="text-gray-900 bg-white">QR / NFC Proximity App</option>
              </select>
            </SelectWrap>
          </div>
        </SessionCard>
      </CtaBand>
    </>
  );
};
