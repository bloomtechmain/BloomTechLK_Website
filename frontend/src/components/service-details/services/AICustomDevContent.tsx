import { motion } from 'framer-motion';
import {
  Bot, Database, Brain, Shield, Zap, TrendingUp, Sparkles, Sliders, Cloud,
  Cpu, Activity, Lock, CheckCircle2, Key, FileText, BarChart3, ArrowRight
} from 'lucide-react';
import {
  Section, Heading, Explorer, BlockGrid, StackTable, FeatureBand, CtaBand, PhotoBand, IconTiles, MediaFrame, Hl,
  fade, fieldDarkCls, labelDarkCls, selectDarkCls, SelectWrap,
} from '../../kit';
import { servicePhotos, photos } from '../../photos';

/**
 * AICustomDevContent Component
 * Custom content section for AI Custom Development & Automation service
 */
interface AICustomDevContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['ai-custom-development-automation'];

const stat = (text: string) => (
  <span className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
    <CheckCircle2 className="w-4 h-4 text-navy-mid" /> {text}
  </span>
);

export const AICustomDevContent = ({ onOpenModal }: AICustomDevContentProps) => {
  return (
    <>
      {/* Core Pillars of AI Development */}
      <Section tone="white">
        <Heading title="Core Pillars of AI Development" sub="Bridging data and actionable intelligence" />
        <Explorer
          items={[
            {
              num: 'I', icon: Bot,
              title: <>Task Automation &amp; Intelligent Agents</>,
              desc: <>We design custom AI agents that handle repetitive cognitive tasks. Whether it's automating customer support triage, generating high-fidelity reports, or managing complex scheduling, our solutions act as a <Hl>"Force Multiplier"</Hl> for your existing team.</>,
            },
            {
              num: 'II', icon: Database,
              title: <>Advanced Data Management &amp; Extraction</>,
              desc: 'Stop manual data entry. We build systems that "read" and categorize unstructured data—PDFs, emails, and images—extracting key metrics and piping them directly into your database or CRM. Turn your archives into a searchable, intelligent knowledge base.',
            },
            {
              num: 'III', icon: Brain,
              title: <>Private &amp; Secure LLM Integration</>,
              desc: <>Leveraging industry leaders like <Hl>Anthropic</Hl>, we build custom interfaces and RAG (Retrieval-Augmented Generation) systems. This allows your AI to answer questions based only on your private company data, ensuring accuracy without compromising security.</>,
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* The On-Prem AI Advantage */}
      <Section tone="grey">
        <Heading title={<>The "On-Prem" AI Advantage</>} sub="Leveraging high-performance local compute" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div {...fade()} className="lg:col-span-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-5 leading-tight">
              Why Settle for the Public Cloud?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 [&_.hl]:text-navy [&_.hl]:font-semibold">
              For businesses with strict data privacy requirements, we offer <Hl>On-Premise AI Deployment</Hl>. Utilizing server-grade hardware (AMD EPYC / High-VRAM GPU clusters), we can host your AI models locally.
            </p>
            <div className="flex gap-3 items-center mb-8">
              <span className="w-10 h-px bg-brand-orange-dark" />
              <span className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500">
                <Cpu size={14} /> Server-Grade Performance
              </span>
            </div>
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { icon: Shield, label: 'Zero Data Leakage', desc: 'Your proprietary data never leaves your network. Total control over your intelligence assets.' },
                { icon: Zap, label: 'Low Latency', desc: 'Instant response times for internal tools by bypassing public internet gateways.' },
                { icon: TrendingUp, label: 'Cost Predictability', desc: 'Eliminate the fluctuating "per-token" costs of cloud APIs with a one-time hardware investment.' },
              ]}
            />
          </motion.div>
          <div className="lg:col-span-6">
            <MediaFrame photo={photos.serverRacks} />
          </div>
        </div>
      </Section>

      {/* Automation Tech Stack */}
      <Section tone="white">
        <Heading title="Automation Tech Stack" sub="Tools and models driving our AI solutions" />
        <StackTable
          head={['Category', 'Systems & Frameworks']}
          rows={[
            { label: 'Foundation Models', value: 'Claude (Anthropic), GPT-4o, Llama 3 (Open Source)', icon: Sparkles },
            { label: 'Orchestration', value: 'LangChain, CrewAI, AutoGen', icon: Sliders },
            { label: 'Data Pipelines', value: 'Python (Pandas/NumPy), SQL, Vector Databases (Pinecone/Chroma)', icon: Database },
            { label: 'Deployment', value: 'Docker, Kubernetes, Local High-Performance Servers', icon: Cloud },
            { label: 'Integration', value: 'Zapier, Make, Custom API Webhooks', icon: Zap },
          ]}
        />
      </Section>

      {/* The CISA-Certified Security Layer */}
      <FeatureBand
        eyebrow={<>Security &amp; Compliance</>}
        title="AI You Can Trust."
        sub={<span className="italic">CISA-Certified Integrity.</span>}
        text={<>In the "Wild West" of AI development, security is often an afterthought. As a <Hl>CISA-certified professional</Hl>, I ensure every automation we build is resilient, auditable, and secure by design.</>}
        points={[
          { icon: Activity, title: 'Traceable', desc: 'Full logging of AI decisions and data access for complete audit transparency.' },
          { icon: Lock, title: 'Secure', desc: 'Role-based access control (RBAC) ensuring only authorized users query sensitive data.' },
          { icon: CheckCircle2, title: 'Compliant', desc: 'Aligning your AI usage with industry standards and data protection laws.' },
        ]}
        badge={{
          big: (
            <span className="relative inline-flex items-center justify-center" aria-hidden="true">
              <Shield className="w-28 h-28 text-white/10" strokeWidth={1.25} />
              <Key className="w-10 h-10 absolute text-white" />
            </span>
          ),
        }}
      />

      {/* Real-World Use Cases */}
      <Section tone="grey">
        <Heading title="Real-World Use Cases" sub="Direct ROI through specialized automation" />
        <BlockGrid
          cols={2}
          items={[
            { title: 'Automated Document Intelligence', desc: 'Processing thousands of complex legal contracts and financial invoices per hour with 99% extraction accuracy.', footer: stat('Reclaiming 40+ hours/week'), icon: FileText },
            { title: 'Intelligent Customer Triage', desc: 'AI-driven support agents that handle 70% of initial customer inquiries and automatically schedule technical sessions.', footer: stat('Instant Response Time'), icon: Bot },
            { title: 'Secure Knowledge Mining', desc: 'A private, on-prem RAG system that allows engineers to query decades of internal documentation without cloud data exposure.', footer: stat('Zero Trust Security'), icon: Cpu },
            { title: 'Predictive Resource Analytics', desc: 'AI models that predict server hardware failures and bandwidth bottlenecks before they impact production environments.', footer: stat('Proactive Optimization'), icon: BarChart3 },
          ].map((uc, i) => ({ ...uc, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* AI Strategy CTA */}
      <CtaBand
        eyebrow="AI Strategist On Standby"
        title="Ready to Reclaim Your Team's Time?"
        text="Automate the mundane tasks that drain your resources. Let's design an AI roadmap that delivers real ROI."
      >
        <div className="rounded-2xl bg-white/[0.05] p-7 lg:p-8 flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">Free Strategy Session</h3>
            <p className="text-white/55 text-sm">Let's identify automation opportunities</p>
          </div>

          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>

          <div>
            <label className={labelDarkCls}>AI Focus Area</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                <option value="automation" className="text-gray-900 bg-white">Task Automation</option>
                <option value="data_extraction" className="text-gray-900 bg-white">Data Extraction</option>
                <option value="custom_llm" className="text-gray-900 bg-white">Custom LLM / RAG</option>
              </select>
            </SelectWrap>
          </div>

          <button
            onClick={onOpenModal}
            className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors"
          >
            Request Strategy Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </CtaBand>
    </>
  );
};
