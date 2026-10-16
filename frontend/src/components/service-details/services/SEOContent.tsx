import {
  Search, Brain, Shield, Activity, BarChart3, Target,
  Zap, Globe, Lock, ShieldCheck, Cpu, DollarSign, Wrench, Rocket, RefreshCcw
} from 'lucide-react';
import {
  Section, Heading, Explorer, FeatureBand, StackTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl,
  SessionCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls,
  subPoint,
} from '../../kit';
import { servicePhotos } from '../../photos';

interface SEOContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['search-engine-optimization'];

const sub = subPoint;

export const SEOContent = ({ onOpenModal }: SEOContentProps) => {
  return (
    <>
      {/* Core SEO Pillars */}
      <Section tone="white">
        <Heading title="Our Core SEO Pillars" sub="Balancing the art of content with the science of infrastructure" />
        <Explorer
          items={[
            {
              num: 'I', title: 'Technical SEO & Infrastructure Hardening', icon: Cpu,
              desc: <>Search engines favor high-performance environments. Leveraging our expertise in <Hl>Custom Server Design</Hl>, we fix the technical debt that holds your rankings back — from the server layer up.</>,
              points: [
                sub('Core Web Vitals', 'Optimizing your site\'s backend for sub-second load times and flawless mobile indexing.'),
                sub('Schema & Metadata', 'Implementing advanced schema markup to help search engines understand your data structure.'),
                sub('Enterprise Hosting', 'Ensuring your site runs on enterprise-grade server environments for maximum stability and speed.'),
              ],
            },
            {
              num: 'II', title: 'AI-Powered Content Strategy', icon: Brain,
              desc: <>We don't just write for bots — we write for humans to establish your brand as a <Hl>Thought Leader</Hl>. Using Anthropic's Claude for high-fidelity research and deep competitor analysis, our content captures high-intent traffic.</>,
              points: [
                sub('High-Fidelity Copy', 'AI-assisted research producing authoritative whitepapers, case studies, and landing pages.'),
                sub('Keyword Intelligence', 'Real-time monitoring of competitor keyword gaps to capture high-intent traffic before rivals do.'),
                sub('Messaging Optimization', 'Refining your digital messaging to resonate specifically with your target audience\'s pain points.'),
              ],
            },
            {
              num: 'III', title: 'Precision Paid Acquisition (PPC)', icon: Target,
              desc: <>We treat your ad budget like a <Hl>financial asset</Hl>, optimizing relentlessly for the lowest Cost Per Acquisition (CPA) possible — squeezing maximum ROI from every dollar spent.</>,
              points: [
                sub('Targeted Campaigns', 'High-ROI Google Ads and Meta campaigns managed with A/B split testing for continuous improvement.'),
                sub('Negative Keyword Filtering', 'Ensuring your budget isn\'t wasted on irrelevant traffic that never converts.'),
                sub('E-Commerce Growth', 'Specialized retargeting and CAPI integration for Shopify and high-volume digital storefronts.'),
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* CISA Integrity Standard */}
      <FeatureBand
        eyebrow="CISA Integrity Standard"
        title={<>Marketing That <br />Passes the Audit.</>}
        text={<>Drawing on our <Hl>CISA-certified background</Hl>, we provide "Auditor-level" reporting that replaces guesswork with evidence — tracking real revenue, not just vanity metrics.</>}
        points={[
          { title: 'Conversion Tracking', desc: 'We track actual revenue, not just clicks, to prove true ROI across every campaign.', icon: DollarSign },
          { title: 'Attribution Modeling', desc: 'Understand exactly which touchpoint — SEO, Social, or Paid — triggered the final sale.', icon: Activity },
          { title: 'Compliance & Accessibility', desc: 'GDPR/CCPA and ADA (WCAG 2.1) standards protect your brand from legal liability.', icon: Lock },
        ]}
        badge={{ icon: Shield, big: 'CISA', caption: 'Auditor-Level Reporting' }}
      />

      {/* Technical Marketing Stack */}
      <Section tone="white">
        <Heading title="Technical Marketing Stack" sub="Professional-grade tools for granular tracking and performance" />
        <StackTable
          head={['Category', 'Our Toolset']}
          rows={[
            { label: 'Analytics', value: 'Google Analytics 4 (GA4), GTM, and Microsoft Clarity Heatmaps', icon: BarChart3 },
            { label: 'Technical SEO', value: 'Ahrefs, SEMRush, and Screaming Frog for technical crawling', icon: Search },
            { label: 'Content AI', value: 'Anthropic Claude for high-fidelity technical copy and research', icon: Brain },
            { label: 'Infrastructure', value: 'High-Performance Cloud (AWS / GCP / Vercel) and LiteSpeed Optimization', icon: Globe },
            { label: 'Paid Acquisition', value: 'Google Ads, Meta Ads Manager, and Conversion API (CAPI) Integration', icon: Target },
          ]}
        />
      </Section>

      {/* 4-Phase Growth Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Growth Lifecycle" />
        <FlowChart
          items={[
            { step: '1', icon: Search, title: 'Deep Audit', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to identify every opportunity.' },
            { step: '2', icon: Wrench, title: 'Infrastructure Fixes', desc: 'Hardening your technical SEO and speed bottlenecks before driving new traffic — building on solid ground.' },
            { step: '3', icon: Rocket, title: 'Campaign Launch', desc: 'Deploying high-authority content and targeted paid ad sets calibrated to your specific audience.' },
            { step: '4', icon: RefreshCcw, title: 'Agile Optimization', desc: 'Weekly data reviews to double down on what works and ruthlessly cut what doesn\'t.' },
          ]}
        />
      </Section>

      {/* Why BloomTech SEO Is Different */}
      <Section tone="white">
        <Heading
          eyebrow="Our Differentiator"
          title={<>SEO Backed by <br />Infrastructure Experts.</>}
          image={pics.a}
        >
          <p>
            Most agencies stop at the content layer. We go deeper — optimizing the <Hl>server, hosting, and codebase</Hl> itself. When your Core Web Vitals are hardened at the infrastructure level, rankings follow.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'Sub-second load times via enterprise server tuning', icon: Zap },
                { label: 'AI-assisted content at enterprise research depth', icon: Brain },
                { label: 'Paid & organic unified under one ROI dashboard', icon: BarChart3 },
                { label: 'CISA-certified compliance and privacy standards', icon: ShieldCheck },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* CTA */}
      <CtaBand
        eyebrow="SEO Strategist On Standby"
        title={<>Stop Being Invisible. <br />Start Dominating.</>}
        text="Your competitors are capturing traffic that should be yours. Let's run a free audit and identify exactly what's holding your rankings back."
      >
        <SessionCard title="Free SEO Audit" line="We'll identify your biggest ranking opportunities" button="Get My Free Audit" onClick={onOpenModal}>
          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>
          <div>
            <label className={labelDarkCls}>Primary Goal</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Goal...</option>
                <option value="organic_rankings" className="text-gray-900 bg-white">Improve Organic Rankings</option>
                <option value="paid_ads" className="text-gray-900 bg-white">Reduce PPC Cost Per Acquisition</option>
                <option value="content" className="text-gray-900 bg-white">Content Strategy &amp; Authority</option>
                <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Growth</option>
              </select>
            </SelectWrap>
          </div>
        </SessionCard>
      </CtaBand>
    </>
  );
};
