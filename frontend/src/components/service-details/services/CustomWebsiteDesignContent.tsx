import {
  PenTool, Zap, Search, ShoppingCart, Building2, AppWindow, Target,
  Server, Shield, Lock, ShieldCheck, Brain, Layers, Globe, Cpu
} from 'lucide-react';
import {
  Section, Heading, Explorer, BlockGrid, FeatureBand, StackTable, CtaBand, PhotoBand, IconTiles, Hl,
  SessionCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls, subPoint, statLine,
} from '../../kit';
import { servicePhotos } from '../../photos';

interface CustomWebsiteDesignContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['custom-websites-design'];

export const CustomWebsiteDesignContent = ({ onOpenModal }: CustomWebsiteDesignContentProps) => {
  return (
    <>
      {/* Three Pillars */}
      <Section tone="white">
        <Heading title="Our Design Philosophy: The Three Pillars" sub="A strategic balance of Art, Science, and Strategy" />
        <Explorer
          items={[
            {
              num: 'I', title: 'High-Fidelity UI/UX Design', icon: PenTool,
              desc: <>Utilizing industry-leading creative stacks — including Canva Enterprise and Freepik Premium assets — we craft visual identities that stand out. Our focus is on <Hl>"User Intent"</Hl>, ensuring every pixel serves a purpose and every click leads to a conversion.</>,
              points: [
                subPoint('Conversion-First Layouts', 'Every page is architected around a primary user action — from sign-up to purchase to contact.'),
                subPoint('Brand Identity Systems', 'Cohesive visual language across typography, color, and motion that reflects your brand prestige.'),
                subPoint('Responsive & Adaptive', 'Pixel-perfect experiences across desktop, tablet, and mobile without compromise.'),
              ],
            },
            {
              num: 'II', title: 'Performance-Driven Engineering', icon: Zap,
              desc: <>A beautiful site is useless if it's slow. We build on <Hl>clean, bloat-free code</Hl> optimized for Core Web Vitals — whether it's a headless Shopify build or a custom React application, sub-second load times are non-negotiable.</>,
              points: [
                subPoint('Core Web Vitals Optimization', 'LCP, CLS, and INP metrics tuned for top-tier Google PageSpeed scores.'),
                subPoint('Headless Architecture', 'Decoupled frontend and backend for maximum flexibility, speed, and scalability.'),
                subPoint('Flawless Mobile Responsiveness', 'Built mobile-first to serve the majority of your users on every screen size.'),
              ],
            },
            {
              num: 'III', title: 'SEO & Content Strategy', icon: Search,
              desc: <>We bake <Hl>Search Engine Optimization into the foundation</Hl> of your site. From schema markup to metadata architecture, your site is discoverable from day one — powered by AI-refined messaging.</>,
              points: [
                subPoint('Schema & Metadata Architecture', 'Structured data implementation that helps search engines understand and rank your content.'),
                subPoint('AI-Refined Messaging', 'Anthropic Claude used to produce copy that resonates with your specific target audience.'),
                subPoint('Technical SEO Foundation', 'Canonical tags, sitemap generation, and crawl optimization built in from the first line of code.'),
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* Specialized Web Solutions */}
      <Section tone="grey">
        <Heading title="Specialized Web Solutions" sub="The specific engines your business needs to grow" />
        <BlockGrid
          cols={4}
          items={[
            { icon: ShoppingCart, title: 'E-Commerce Powerhouses', desc: 'Custom Shopify and WooCommerce integrations designed for high-volume transactions and seamless checkout flows.', highlight: 'Shopify Plus & WooCommerce' },
            { icon: Building2, title: 'Corporate Identity Hubs', desc: 'Professional, multi-page architectures for firms that need to project authority, trust, and executive presence.', highlight: 'Enterprise Authority Design' },
            { icon: AppWindow, title: 'Custom Web Applications', desc: 'Bespoke portals, member areas, and internal tools built to solve specific operational bottlenecks in your business.', highlight: 'React & Next.js' },
            { icon: Target, title: 'Landing Page Optimization', desc: 'High-converting "Lead Gen" pages designed for specific ad campaigns — engineered for maximum CPA efficiency.', highlight: 'PPC & Social Campaigns' },
          ].map(({ highlight, ...it }, i) => ({ ...it, num: String(i + 1).padStart(2, '0'), footer: statLine(highlight) }))}
        />
      </Section>

      {/* Infrastructure Advantage */}
      <FeatureBand
        eyebrow="Exclusive Infrastructure Advantage"
        title={<>Hosting That <br />Never Fails.</>}
        text={<>Most designers leave you to figure out hosting on your own. Because we specialize in <Hl>IT Infrastructure &amp; Network Design</Hl>, your site lives on enterprise-grade server environments — fully managed.</>}
        points={[
          { title: 'DNS & SSL Management', desc: 'We handle domain configuration, SSL certificates, and renewals so you never go offline unexpectedly.', icon: Globe },
          { title: 'Server-Side Caching', desc: 'Enterprise caching layers that ensure sub-second response times even under heavy traffic loads.', icon: Cpu },
          { title: 'Uptime Monitoring', desc: '24/7 automated monitoring with instant alerts and rapid incident response from our infrastructure team.', icon: Zap },
        ]}
        badge={{ icon: Server, big: 'Enterprise', caption: 'Infrastructure-Grade Hosting' }}
      />

      {/* Technical Stack */}
      <Section tone="white">
        <Heading title="The Technical Stack" sub="Professional toolset for scalable, secure web builds" />
        <StackTable
          head={['Category', 'Our Toolset']}
          rows={[
            { label: 'Platforms', value: 'Shopify Plus, WordPress (Headless), Webflow', icon: Layers },
            { label: 'Frontend', value: 'React.js, Next.js, Tailwind CSS', icon: AppWindow },
            { label: 'Creative', value: 'Canva Enterprise, Adobe Suite, Freepik Premium Assets', icon: PenTool },
            { label: 'Intelligence', value: 'AI-Driven Copywriting & Optimization (Claude / GPT-4)', icon: Brain },
            { label: 'Hosting', value: 'High-Performance Cloud (AWS / Google Cloud / Vercel)', icon: Server },
          ]}
        />
      </Section>

      {/* Compliance & Accessibility */}
      <Section tone="grey">
        <Heading
          eyebrow="CISA-Certified Standards"
          title={<>Compliance &amp;<br />Accessibility Built In.</>}
          image={pics.a}
        >
          <p>
            Drawing on our <Hl>CISA-certified background</Hl>, we ensure your website meets modern security and regulatory standards — protecting your business from liability while delivering a premium experience for every user.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'GDPR & CCPA Compliance', desc: 'Privacy-first data handling with consent management built into the site architecture.', icon: Lock },
                { label: 'ADA Accessibility (WCAG 2.1)', desc: 'Accessible design ensuring every user — regardless of ability — has a premium experience.', icon: ShieldCheck },
                { label: 'SSL & Security Hardening', desc: 'TLS 1.3 encryption, HTTP security headers, and vulnerability scanning on every deployment.', icon: Shield },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* CTA */}
      <CtaBand
        eyebrow="Web Specialist On Standby"
        title={<>Ready to Build a Site <br />That Actually Converts?</>}
        text="Your website should be your hardest-working salesperson. Let's design a digital experience that reflects the prestige of your brand and drives measurable results."
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
                <option value="corporate" className="text-gray-900 bg-white">Corporate Identity Site</option>
                <option value="web_app" className="text-gray-900 bg-white">Custom Web Application</option>
                <option value="landing" className="text-gray-900 bg-white">Landing Page / Lead Gen</option>
              </select>
            </SelectWrap>
          </div>
        </SessionCard>
      </CtaBand>
    </>
  );
};
