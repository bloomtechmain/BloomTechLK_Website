import { motion } from 'framer-motion';
import {
  BrainCircuit, Network, Sliders, Eye, Users, LineChart, ShieldCheck, Lock,
  CheckCircle2, Shuffle, Key, TrendingUp, ArrowRight
} from 'lucide-react';
import {
  Section, Heading, Explorer, BlockGrid, CompareTable, CtaBand, PhotoBand,
  fade, fieldDarkCls, labelDarkCls, selectDarkCls, SelectWrap,
  subPoint,
} from '../../kit';
import { servicePhotos } from '../../photos';

/**
 * AIMachineLearningContent Component
 * Custom content section for AI & Machine Learning service
 */
interface AIMachineLearningContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['ai-machine-learning'];

const sub = subPoint;

export const AIMachineLearningContent = ({ onOpenModal }: AIMachineLearningContentProps) => {
  return (
    <>
      {/* The BloomTech AI Strategy: 2026 Edition */}
      <Section tone="white">
        <Heading
          title="The BloomTech AI Strategy: 2026 Edition"
          sub="From experimental pilots to production-grade intelligence"
        />
        <Explorer
          items={[
            {
              num: 'I', icon: BrainCircuit,
              title: <>Agentic AI &amp; Autonomous Workflows</>,
              desc: 'We move beyond simple prompts. We build AI Agents capable of executing tasks within defined business parameters without constant human oversight.',
              points: [
                sub('Autonomous Decision-Making', 'Executing tasks without constant human oversight'),
                sub('Multi-System Orchestration', 'Connecting CRM, ERP, and Slack automatically'),
                sub('Proactive Initiation', 'Triggering actions based on real-time data'),
              ],
            },
            {
              num: 'II', icon: Sliders,
              title: 'Domain-Specific Model Tuning',
              desc: 'While general models are broad, they often lack the nuance of your specific industry. We ground models in your proprietary data.',
              points: [
                sub('Context Engineering', 'Grounding in your "corporate language"'),
                sub('Fine-Tuned Hybrids', 'Custom logic for Finance, Logistics, Healthcare'),
                sub('RAG Systems', 'Real-time access to internal documentation'),
              ],
            },
            {
              num: 'III', icon: Eye,
              title: 'Multi-Modal Intelligence',
              desc: 'In 2026, data isn\'t just text. Our solutions process information across all modalities for comprehensive intelligence.',
              points: [
                sub('Vision & Document AI', 'Extract data from invoices and blueprints'),
                sub('Audio & Sentiment', 'Analyze customer calls in real-time'),
                sub('Fusion Systems', 'Predict hardware failures before they happen'),
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* AI Governance Framework */}
      <Section tone="grey">
        <Heading title={<>Implementation &amp; Governance</>} sub="Building AI safely is the other half of the battle" />
        <BlockGrid
          cols={4}
          items={[
            { title: 'Human-in-the-Loop', desc: 'AI handles 90% of the work, but flags complex cases for human approval.', stat: 'Supervised Automation', icon: Users },
            { title: 'Model Observability', desc: 'Continuous monitoring for "drift" to ensure accuracy over time.', stat: 'Always Accurate', icon: LineChart },
            { title: 'Bias & Fairness', desc: 'Rigorous auditing for compliance with 2026 AI regulations and ethical standards.', stat: 'Ethical AI', icon: ShieldCheck },
            { title: 'Security-First', desc: 'On-Premise, Hybrid, or Private Cloud deployment ensuring data never leaves your control.', stat: 'Your Data, Your Control', icon: Lock },
          ].map(({ stat, ...item }) => ({
            ...item,
            footer: (
              <span className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
                <CheckCircle2 className="w-4 h-4 text-navy-mid" /> {stat}
              </span>
            ),
          }))}
        />
      </Section>

      {/* Why Custom AI vs Off-the-Shelf */}
      <Section tone="white">
        <Heading title="Why Custom AI vs. Off-the-Shelf?" sub="The competitive advantage of bespoke intelligence" />
        <CompareTable
          head={['Feature', 'Off-the-Shelf AI', 'BloomTech Custom AI']}
          rows={[
            { label: 'Data Privacy', icon: Lock, left: 'Shared/Public Training', right: 'Proprietary & Isolated' },
            { label: 'Workflow', icon: Shuffle, left: 'Rigid/Tool-Centric', right: 'Tailored to Your Business' },
            { label: 'Integration', icon: Network, left: 'Limited API access', right: 'Deep Legacy System Hooks' },
            { label: 'IP Ownership', icon: Key, left: 'None', right: 'You Own the Logic Layer' },
            { label: 'ROI Timeline', icon: TrendingUp, left: 'Months to Prove Value', right: 'Immediate Measurable Impact' },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <CtaBand
        eyebrow="AI Strategist On Standby"
        title="Ready to Build Your Custom AI Advantage?"
        text="Move beyond generic chatbots. Build domain-specific intelligence that transforms your business operations."
      >
        <motion.div {...fade()} className="rounded-2xl bg-white/[0.05] p-7 lg:p-8 flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">Book AI Strategy Session</h3>
            <p className="text-white/55 text-sm">Let's discuss your AI transformation</p>
          </div>

          <div>
            <label className={labelDarkCls}>Your Name</label>
            <input type="text" placeholder="Sarah Jenkins" className={fieldDarkCls} />
          </div>

          <div>
            <label className={labelDarkCls}>Industry</label>
            <input type="text" placeholder="Finance / Healthcare / Logistics" className={fieldDarkCls} />
          </div>

          <div>
            <label className={labelDarkCls}>AI Focus Area</label>
            <SelectWrap>
              <select defaultValue="" className={selectDarkCls}>
                <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                <option value="agentic" className="text-gray-900 bg-white">Agentic AI &amp; Automation</option>
                <option value="domain" className="text-gray-900 bg-white">Domain-Specific Models</option>
                <option value="multimodal" className="text-gray-900 bg-white">Multi-Modal Intelligence</option>
                <option value="custom" className="text-gray-900 bg-white">Custom RAG Systems</option>
              </select>
            </SelectWrap>
          </div>

          <button
            onClick={onOpenModal}
            className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors"
          >
            Book AI Strategy Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </CtaBand>
    </>
  );
};
