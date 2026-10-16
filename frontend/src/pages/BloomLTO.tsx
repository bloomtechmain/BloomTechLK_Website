import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Clock, RefreshCw, History, Bell, Search, HardDrive,
  Package, Layers, Archive, ShieldCheck, ExternalLink, Mail, Download, ArrowRight,
} from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig, siteUrl } from '../utils/seoConfig';
import {
  PageHero, Section, Heading, Eyebrow, BlockGrid, BlockCard, FlowChart, CtaBand, ContactRows, PhotoBand, PrimaryButton, TextLink,
  IconTiles, StatsStrip, fade, GUTTER,
} from '../components/kit';
import { servicePhotos } from '../components/photos';

const pics = servicePhotos['bloomlto'];

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let t0: number | null = null;
        const tick = (ts: number) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / duration, 1);
          setCount(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    const el = ref.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

const features = [
  { icon: Search,    title: 'Searchable Catalog',         desc: 'Every file indexed by name, path, size, and tape barcode the moment it\'s archived.' },
  { icon: Clock,      title: 'Scheduled Archiving',        desc: 'Automated runs across specified libraries and sources, on the schedule you set.' },
  { icon: HardDrive,  title: 'Live Library Visibility',    desc: 'Real-time drive and slot status for every tape in the library, at a glance.' },
  { icon: RefreshCw,  title: 'Verification & Re-Hashing',  desc: 'Confirm writes with checksum verification after every archive job.' },
  { icon: Package,    title: 'Cold-Spare Duplication',     desc: 'Maintain duplicate copies on separate tapes for disaster protection.' },
  { icon: History,    title: 'Restore Queue & Audit Log',  desc: 'Full recovery history — who restored what, and when.' },
  { icon: Bell,       title: 'Centralized Alerts',         desc: 'One attention page, plus optional email alerts, for jobs that need a look.' },
  { icon: Archive,    title: 'Open LTFS Format',           desc: 'Tapes stay readable with any LTFS-compatible tool — even without BloomLTO.' },
  { icon: Layers,     title: 'Multi-Source Archiving',     desc: 'Watch multiple mounted folders and network sources, each with its own priority.' },
  { icon: Download,   title: 'Preview Before Write',       desc: 'See exactly what\'s queued for a cartridge before it\'s committed to tape.' },
];

const libraryCards = [
  {
    icon: ShieldCheck,
    title: 'Full Schedule Control',
    desc: 'Set archive jobs once; BloomLTO runs them automatically across every source and library. You decide what\'s written, and when.',
  },
  {
    icon: RefreshCw,
    title: 'Verification & Duplication',
    desc: 'Catch media failures early with automatic re-hash checks and cold-spare duplicate copies on separate tapes.',
  },
  {
    icon: Bell,
    title: 'Centralized Alerts',
    desc: 'One attention page, plus optional email alerts, flags jobs that need a look before they become a problem.',
  },
];

const restoreCards = [
  {
    icon: Search,
    title: 'Search by Anything',
    desc: 'Find files by name, path, size, date, or tape barcode across the entire library — not just the tape you think it\'s on.',
  },
  {
    icon: Layers,
    title: 'Any LTO Generation',
    desc: 'LTO-5 through LTO-9 are supported natively, so your older tapes stay just as searchable as your newest ones.',
  },
  {
    icon: Archive,
    title: 'Open Format Confidence',
    desc: 'LTFS means your tapes stay readable with or without BloomLTO on hand — no vendor lock-in, ever.',
  },
];

const trustPillars = [
  { icon: RefreshCw, title: 'Re-Hash Verification',    desc: 'Every archive job can be verified against a checksum on completion, catching silent write failures.' },
  { icon: Package,   title: 'Cold-Spare Duplication',  desc: 'Maintain a second copy of critical archives on separate tapes, automatically.' },
  { icon: History,   title: 'Full Restore Audit Log',  desc: 'Complete history of every recovery — who restored what, from which tape, and when.' },
  { icon: Archive,   title: 'Open LTFS Standard',      desc: 'No proprietary lock-in. Tapes remain readable by any LTFS-compatible software.' },
];

const restoringSteps = [
  { icon: Search,   title: 'Search the Catalog',   desc: 'Find any file by name, path, tape, or date across your entire library, in seconds.' },
  { icon: Download, title: 'Queue the Recovery',   desc: 'Pick a destination and queue the restore — BloomLTO tells you exactly which cartridge to load.' },
  { icon: History,  title: 'Restore & Audit',      desc: 'Files land at your chosen destination, and every recovery is logged automatically.' },
];

const archivingSteps = [
  { icon: Layers,    title: 'Point at Storage',    desc: 'Add mounted folders and network sources, each with its own priority settings.' },
  { icon: Clock,     title: 'Archive on Schedule', desc: 'Writes to LTO in the open LTFS format on your set schedule — preview before it\'s written.' },
  { icon: RefreshCw, title: 'Catalog & Verify',    desc: 'Every file is indexed by name, path, size, and barcode, with optional re-hash verification.' },
];

const BloomLTO = () => {
  const [activeTab, setActiveTab] = useState<'restoring' | 'archiving'>('restoring');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { count: capacityCount, ref: capacityRef } = useCountUp(18);
  const { count: generationsCount, ref: generationsRef } = useCountUp(5);
  const { count: trialCount, ref: trialRef } = useCountUp(30);

  const steps = activeTab === 'restoring' ? restoringSteps : archivingSteps;

  return (
    <div className="bg-white overflow-x-hidden">

      <SEO
        config={getSEOConfig('service', 'bloomlto')}
        breadcrumbs={[
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'BloomLTO', url: `${siteUrl}/services/bloomlto/` }
        ]}
      />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <PageHero
        photo={pics.hero}
        eyebrow="Searchable LTO Tape Archive Software"
        title={<>Tape is cheap and safe. <span className="block">But which tape has it?</span></>}
        text="BloomLTO indexes every file the moment it's archived to LTO — name, path, size, and tape barcode — so restoring a file means searching a catalog, not guessing which cartridge it's on."
        minH="lg:min-h-[780px]"
      >
        <div className="flex flex-wrap gap-2 mt-7">
          {['Open LTFS Format', 'LTO-5 to LTO-9', 'Scheduled Archiving', 'Restore Audit Log', 'Verification & Duplication'].map(t => (
            <span key={t} className="px-3 py-1.5 rounded-md bg-white/[0.07] text-xs font-semibold text-white/75">{t}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <PrimaryButton href="https://bloomlto.com" external icon={ExternalLink}>Visit bloomlto.com</PrimaryButton>
          <TextLink href="#library">See How Archiving Works</TextLink>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl">
          {[
            { ref: capacityRef,    val: `${capacityCount} TB`,     label: 'Per Tape (LTO-9)' },
            { ref: generationsRef, val: `LTO-5–${generationsCount + 4}`, label: 'Generations Supported' },
            { ref: trialRef,       val: `${trialCount}-Day`,       label: 'Free Trial' },
            { ref: null,           val: '100%',                    label: 'Open LTFS Format' },
          ].map(({ ref, val, label }) => (
            <div key={label} ref={ref} className="rounded-lg bg-white/[0.06] px-4 py-3">
              <span className="block font-extrabold text-white leading-none">{val}</span>
              <span className="block text-[11px] text-white/50 mt-1.5 leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ══════════════════════ STATS BAR ══════════════════════ */}
      <section className="bg-white border-b border-gray-200">
        <div className={GUTTER}>
          <StatsStrip
            stats={[
              { value: '18 TB',   label: 'Per Tape (LTO-9)' },
              { value: 'LTO-5–9', label: 'Generations Supported' },
              { value: '30-Day',  label: 'Free Trial' },
              { value: '100%',    label: 'Open LTFS Format' },
            ]}
          />
        </div>
      </section>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <Section tone="white" id="how-it-works">
        <Heading
          center
          eyebrow="How BloomLTO Works"
          title="Two workflows. Zero guesswork."
          sub="Whether you're writing new archives to tape or racing to find one file in a ten-year-old library, BloomLTO makes it simple."
          className="mb-10"
        />

        <div className="flex justify-center mb-12">
          <div role="tablist" className="inline-flex rounded-xl bg-grey-light p-1.5">
            {(['restoring', 'archiving'] as const).map((tab) => (
              <button key={tab} role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-bold transition-colors ${activeTab === tab ? 'bg-navy text-white' : 'text-navy hover:bg-grey-hover'}`}>
                {tab === 'restoring' ? 'Restoring a File' : 'Archiving to Tape'}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab}>
          <FlowChart items={steps.map(({ icon, title, desc }) => ({ icon, title, desc }))} />
        </div>
      </Section>

      <PhotoBand photo={pics.b} />

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <Section tone="grey" id="features">
        <Heading
          center
          eyebrow="Platform Features"
          title="Everything the archive needs."
          sub="BloomLTO is a full searchable tape archive system — from scheduled writes to audited restores — built on the open LTFS standard."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map(({ icon, title, desc }, i) => (
            <BlockCard key={title} it={{ icon, title, desc, num: String(i + 1).padStart(2, '0') }} delay={Math.min((i % 5) * 0.06, 0.3)} />
          ))}
        </div>
      </Section>

      {/* ══════════════════════ FOR IT & BACKUP TEAMS ══════════════════════ */}
      <Section tone="navy" id="library">
        <Heading
          light
          center
          eyebrow={<>For IT &amp; Backup Teams</>}
          title={<>Your tape library, <span className="block">finally under control.</span></>}
          sub="Stop guessing which cartridge has the file. Schedule archives, verify every write, and get alerted before a problem becomes a disaster."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div {...fade()} className="lg:col-span-5 rounded-2xl bg-white/[0.05] p-8 lg:p-9">
            <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Example Tape Capacity</div>
            <div className="text-5xl font-extrabold text-white leading-none tracking-tight mb-2">18 TB</div>
            <div className="text-sm text-white/60 mb-3">native capacity per LTO-9 cartridge</div>
            <span className="block w-10 h-px bg-brand-orange mb-7" />
            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                { icon: ShieldCheck, strong: 'Full Control',   body: 'You choose what\'s archived, when, and where restores land.' },
                { icon: RefreshCw,   strong: 'Verified Writes', body: 'Re-hash verification confirms every archive job completed cleanly.' },
                { icon: Bell,        strong: 'Instant Alerts',  body: 'Get notified the moment a job needs your attention.' },
              ].map(({ icon: Icon, strong, body }) => (
                <div key={strong} className="flex items-start gap-4 py-4">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="text-sm text-white/65">
                    <strong className="text-white font-bold block text-[15px]">{strong}</strong>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid gap-5">
            {libraryCards.map(({ icon, title, desc }, i) => (
              <BlockCard key={title} dark it={{ icon, title, desc, num: String(i + 1).padStart(2, '0') }} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════ FOR RESTORE & COMPLIANCE ══════════════════════ */}
      <Section tone="white" id="restore">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div {...fade()}>
              <Eyebrow>For Restore &amp; Compliance</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-5">
                Search once. Find it everywhere.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
                Skip the spreadsheet of tape labels and the afternoon spent swapping cartridges. BloomLTO puts the exact file, tape, and location in front of you — in seconds.
              </p>
            </motion.div>
            <IconTiles
              cols="sm:grid-cols-1"
              items={restoreCards.map(({ icon, title, desc }) => ({ icon, label: title, desc }))}
            />
          </div>

          <motion.div {...fade(0.1)} className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-7 lg:p-8 shadow-[8px_8px_0_0_#101D36]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-11 h-11 rounded-lg bg-navy text-white flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[11px] font-bold text-gray-500 uppercase tracking-widest">Search Result</div>
                  <div className="text-[15px] font-bold text-navy break-words">invoice_2019_Q4.xlsx · 2.4 GB</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200 border-y border-gray-200 mb-7">
                {[
                  { label: 'Tape Barcode', value: 'LTO-0427' },
                  { label: 'Archived On', value: '12 Mar 2024' },
                  { label: 'Verification', value: '✓ Checksum Verified' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4 py-3.5">
                    <span className="text-sm font-medium text-gray-500">{label}</span>
                    <span className="text-sm font-bold text-navy">{value}</span>
                  </div>
                ))}
              </div>
              <PrimaryButton href="#cta" icon={ArrowRight} className="w-full">Queue Restore</PrimaryButton>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════ TRUST & SAFETY ══════════════════════ */}
      <Section tone="grey" id="trust">
        <Heading
          center
          eyebrow="Archive Integrity"
          title="Protection built into every archive."
          sub="BloomLTO is designed so every write and every restore leaves a verifiable, auditable trail."
        />
        <BlockGrid cols={4} items={trustPillars.map(({ icon, title, desc }) => ({ icon, title, desc }))} />
      </Section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <CtaBand
        id="cta"
        title="Ready to make your tapes searchable?"
        text="Start a 30-day free trial of BloomLTO, or book a demo to see the full catalog-and-restore walkthrough."
        secondary={
          <>
            <PrimaryButton href="https://bloomlto.com" external>Start 30-Day Trial</PrimaryButton>
            <TextLink href="https://bloomlto.com" external icon={ExternalLink}>Book a Demo</TextLink>
          </>
        }
      >
        <ContactRows
          rows={[
            { icon: Mail, label: 'Email', value: 'info@bloomlto.com', href: 'mailto:info@bloomlto.com' },
            { icon: ExternalLink, label: 'Website', value: 'bloomlto.com', href: 'https://bloomlto.com', external: true },
            { icon: Layers, label: 'Supports', value: 'LTO-5 through LTO-9' },
          ]}
        />
      </CtaBand>

      <Footer />
    </div>
  );
};

export default BloomLTO;
