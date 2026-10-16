import {
  Cpu, Brain, Target, ShoppingCart, Shield, Activity, Search,
  BarChart3, TrendingUp, Zap, DollarSign, Eye, RefreshCw, Wrench, Rocket
} from 'lucide-react';
import {
  Section, Heading, Explorer, FeatureBand, StackTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl,
  SessionCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls, subPoint,
} from '../../kit';
import { servicePhotos } from '../../photos';

interface OnlineMarketingContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['online-marketing-services'];

export const OnlineMarketingContent = ({ onOpenModal }: OnlineMarketingContentProps) => {
  return (
    <>
      {/* Core Growth Pillars */}
      <Section tone="white">
        <Heading title="Our Core Growth Pillars" sub="A marketing engine that scales with your ambition" />
        <Explorer
          items={[
            {
              num: 'I', title: 'Technical SEO & Core Web Vitals', icon: Cpu,
              desc: <>Search engines favor performance. Leveraging our <Hl>Custom Server &amp; Infrastructure expertise</Hl>, we optimize your site's backend from the ground up — fixing the technical debt that quietly kills your rankings.</>,
              points: [
                subPoint('Speed', 'Achieving sub-second load times through backend optimization and enterprise-grade caching.'),
                subPoint('Architecture', 'Proper schema markup, canonical tags, and flawless mobile indexing from the first crawl.'),
                subPoint('Stability', 'Hosting your digital presence on enterprise-grade server environments for maximum uptime.'),
              ],
            },
            {
              num: 'II', title: 'Strategic Content Marketing', icon: Brain,
              desc: <>We use <Hl>Advanced AI (Anthropic/Claude)</Hl> and deep industry research to produce high-authority content that establishes your brand as the definitive Thought Leader in your space.</>,
              points: [
                subPoint('Thought Leadership', 'Whitepapers, case studies, and high-conversion landing pages that build authority and trust.'),
                subPoint('Human-Centric Copy', 'We write for humans first — messaging that resonates with your audience\'s specific pain points.'),
              ],
            },
            {
              num: 'III', title: 'Precision Paid Acquisition (PPC)', icon: Target,
              desc: <>Stop wasting ad spend on irrelevant traffic. We treat your budget like a <Hl>financial asset</Hl> — every campaign is optimized to achieve the lowest Cost Per Acquisition possible.</>,
              points: [
                subPoint('Targeted Campaigns', 'Google Ads and Meta campaigns with Negative Keyword filtering to eliminate wasted spend.'),
                subPoint('A/B Testing', 'Continuous split testing of creatives, copy, and audiences to drive down CPA over time.'),
              ],
            },
            {
              num: 'IV', title: 'Specialized E-Commerce Growth', icon: ShoppingCart,
              desc: <>Optimized specifically for <Hl>Shopify and high-volume digital storefronts</Hl> — from product page keyword strategy to abandoned cart recovery and full-funnel retargeting automation.</>,
              points: [
                subPoint('Full-Funnel Strategy', 'Optimizing product pages for Buyer Intent keywords at every stage of the purchase journey.'),
                subPoint('Automation', 'Abandoned cart recovery flows and high-ROI retargeting campaigns via Facebook CAPI.'),
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* CISA Integrity Standard */}
      <FeatureBand
        eyebrow="CISA Integrity Standard"
        title={<>Marketing That <br />Proves Its ROI.</>}
        text={<>As an <Hl>auditor-led firm</Hl>, we value integrity and evidence over guesswork. Our CISA-level reporting tells you exactly where your money went and what it returned.</>}
        points={[
          { title: 'Conversion Tracking', desc: 'We don\'t just track clicks — we track actual revenue to prove true ROI on every channel.', icon: DollarSign },
          { title: 'Attribution Modeling', desc: 'Know exactly which touchpoint — SEO, Social, or Paid — triggered each final sale.', icon: Activity },
          { title: 'Competitor Intelligence', desc: 'Real-time monitoring of your competitors\' keyword gaps and ad strategies so you stay ahead.', icon: Eye },
        ]}
        badge={{ icon: Shield, big: 'CISA', caption: 'Auditor-Level Reporting' }}
      />

      {/* 4-Phase Growth Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Growth Lifecycle" />
        <FlowChart
          items={[
            { step: '1', icon: Search, title: 'Deep Audit & Baseline', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to map every opportunity.' },
            { step: '2', icon: Wrench, title: 'Infrastructure Hardening', desc: 'Fixing technical SEO issues and speed bottlenecks before driving new traffic — building on solid ground.' },
            { step: '3', icon: Rocket, title: 'Campaign Deployment', desc: 'Launching high-authority content and targeted paid ad sets calibrated to your specific audience.' },
            { step: '4', icon: RefreshCw, title: 'Agile Optimization', desc: 'Reviewing data weekly to double down on what works and ruthlessly cut what doesn\'t.' },
          ]}
        />
      </Section>

      {/* Technical Marketing Stack */}
      <Section tone="white">
        <Heading title="Technical Marketing Stack" sub="Professional tools for granular tracking and high-fidelity execution" />
        <StackTable
          head={['Category', 'Our Marketing Stack']}
          rows={[
            { label: 'Analytics', value: 'Google Analytics 4 (GA4), GTM, Microsoft Clarity Heatmaps', icon: BarChart3 },
            { label: 'SEO Tools', value: 'Ahrefs, SEMRush, Screaming Frog for technical crawling', icon: Search },
            { label: 'Content AI', value: 'Anthropic Claude for high-fidelity copy and industry research', icon: Brain },
            { label: 'Creative', value: 'Canva Enterprise & Freepik Premium for high-res assets', icon: TrendingUp },
            { label: 'E-Commerce', value: 'Shopify Flow & Facebook Conversions API (CAPI)', icon: ShoppingCart },
          ]}
        />
      </Section>

      {/* Why BloomTech Marketing */}
      <Section tone="grey">
        <Heading
          eyebrow="Our Differentiator"
          title={<>Marketing Backed <br />by Infrastructure.</>}
          image={pics.a}
        >
          <p>
            Most agencies stop at the ad creative. We go deeper — combining <Hl>performance marketing with server-level optimization</Hl>, so every campaign lands on a fast, secure, high-converting foundation.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'Technical SEO hardened at the infrastructure level', icon: Zap },
                { label: 'AI-assisted content with enterprise research depth', icon: Brain },
                { label: 'Paid & organic unified under one ROI dashboard', icon: BarChart3 },
                { label: 'CISA-certified compliance and attribution reporting', icon: RefreshCw },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* CTA */}
      <CtaBand
        eyebrow="Growth Strategist On Standby"
        title={<>Stop Spending. <br />Start Investing.</>}
        text="Every dollar of ad spend should be traceable to revenue. Let's audit your current marketing and build a strategy that proves every cent."
      >
        <SessionCard title="Free Marketing Audit" line="We'll identify exactly where your budget is leaking" button="Get My Free Audit" onClick={onOpenModal}>
          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>
          <div>
            <label className={labelDarkCls}>Primary Focus</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                <option value="seo" className="text-gray-900 bg-white">SEO &amp; Organic Growth</option>
                <option value="ppc" className="text-gray-900 bg-white">Paid Ads (Google / Meta)</option>
                <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Growth</option>
                <option value="content" className="text-gray-900 bg-white">Content &amp; Thought Leadership</option>
              </select>
            </SelectWrap>
          </div>
        </SessionCard>
      </CtaBand>
    </>
  );
};
