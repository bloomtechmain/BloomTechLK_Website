import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Clock, RefreshCw, History, Bell, Search, HardDrive,
  Package, Layers, Archive, ShieldCheck, ExternalLink, Mail, Download,
} from 'lucide-react';
import Footer from '../components/Footer';
import { NAVY, NAVY_RAISED, ORANGE, ORANGE_LIGHT, GREY, FONT_SANS, ORANGE_GRADIENT } from '../styles/designTokens';

const vp = { once: true, margin: '-80px' } as const;

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
    <div className="overflow-x-hidden" style={{ fontFamily: FONT_SANS }}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[600px] h-[90vh] max-h-[760px] flex items-center overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute right-0 top-0 h-full w-[60%] hidden lg:block">
          <img
            src="/images/rack_and_roll.jpg"
            alt="Tape library and server racks — BloomLTO"
            className="w-full h-full object-cover object-[30%_center] opacity-80"
          />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(100deg, ${NAVY} 24%, rgba(16,29,54,0.82) 52%, rgba(16,29,54,0.5) 100%)` }} />

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
              <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE_LIGHT }}>
                Searchable LTO Tape Archive Software
              </p>
            </div>

            <h1 className="text-[2.75rem] md:text-[3.4rem] font-bold mb-6 leading-[1.08] tracking-tight text-white">
              Tape is cheap and safe. <span style={{ color: ORANGE }}>But which tape has it?</span>
            </h1>

            <p className="text-white/72 text-lg mb-9 leading-relaxed max-w-xl">
              BloomLTO indexes every file the moment it's archived to LTO — name, path, size, and tape barcode — so restoring a file means searching a catalog, not guessing which cartridge it's on.
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {['Open LTFS Format', 'LTO-5 to LTO-9', 'Scheduled Archiving', 'Restore Audit Log', 'Verification & Duplication'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-xs font-medium text-white/65">{t}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 text-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                style={{ background: ORANGE_GRADIENT }}>
                Visit bloomlto.com <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#library"
                className="px-8 py-4 bg-white/[0.06] text-white border border-white/25 rounded-lg font-semibold text-[15px] hover:bg-white/[0.12] hover:border-white/40 transition-all flex items-center justify-center">
                See How Archiving Works
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                { ref: capacityRef,    val: `${capacityCount} TB`,     label: 'Per Tape (LTO-9)' },
                { ref: generationsRef, val: `LTO-5–${generationsCount + 4}`, label: 'Generations Supported' },
                { ref: trialRef,       val: `${trialCount}-Day`,       label: 'Free Trial' },
                { ref: null,           val: '100%',                    label: 'Open LTFS Format' },
              ].map(({ ref, val, label }) => (
                <div key={label} ref={ref} className="bg-white/[0.05] border border-white/10 rounded-lg px-4 py-2.5">
                  <span className="block font-bold text-white leading-none">{val}</span>
                  <span className="block text-[10px] text-white/45 uppercase tracking-wide mt-1">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ STATS BAR ══════════════════════ */}
      <div style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.08] border-t border-white/[0.08]">
            {[
              { n: '18 TB',   l: 'Per Tape (LTO-9)' },
              { n: 'LTO-5–9', l: 'Generations Supported' },
              { n: '30-Day',  l: 'Free Trial' },
              { n: '100%',    l: 'Open LTFS Format' },
            ].map(({ n, l }, i) => (
              <div key={l} className={`px-4 py-8 text-center ${i >= 2 ? 'border-t border-white/[0.08] sm:border-t-0' : ''}`}>
                <div className="text-3xl font-bold text-white mb-1.5">{n}</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section id="how-it-works" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>How BloomLTO Works</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Two workflows. Zero guesswork.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you're writing new archives to tape or racing to find one file in a ten-year-old library, BloomLTO makes it simple.
            </p>
          </motion.div>

          <div className="flex gap-2 justify-center border-b border-gray-200 mb-10">
            {(['restoring', 'archiving'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-7 py-3 text-sm font-semibold border-b-2 -mb-px transition-all ${activeTab === tab ? 'border-current' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                style={activeTab === tab ? { color: ORANGE } : undefined}>
                {tab === 'restoring' ? 'Restoring a File' : 'Archiving to Tape'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: ORANGE }}>{i + 1}</span>
                  <div className="w-10 h-10 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center">
                    <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section id="features" className="py-24 scroll-mt-16" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Platform Features</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Everything the archive needs.
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              BloomLTO is a full searchable tape archive system — from scheduled writes to audited restores — built on the open LTFS standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOR IT & BACKUP TEAMS ══════════════════════ */}
      <section id="library" className="py-24 scroll-mt-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>For IT &amp; Backup Teams</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4 text-white">
              Your tape library, <span style={{ color: ORANGE }}>finally under control.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Stop guessing which cartridge has the file. Schedule archives, verify every write, and get alerted before a problem becomes a disaster.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }}
              className="rounded-xl p-9 border border-white/10" style={{ backgroundColor: NAVY_RAISED }}>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">Example Tape Capacity</div>
              <div className="text-[2.5rem] font-bold leading-none mb-1" style={{ color: ORANGE }}>18 TB</div>
              <div className="text-sm text-white/60 mb-7">native capacity per LTO-9 cartridge</div>
              {[
                { icon: ShieldCheck, strong: 'Full Control',   body: 'You choose what\'s archived, when, and where restores land.' },
                { icon: RefreshCw,   strong: 'Verified Writes', body: 'Re-hash verification confirms every archive job completed cleanly.' },
                { icon: Bell,        strong: 'Instant Alerts',  body: 'Get notified the moment a job needs your attention.' },
              ].map(({ icon: Icon, strong, body }) => (
                <div key={strong} className="flex items-start gap-3.5 mb-4 last:mb-0">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                    <Icon className="w-4 h-4" style={{ color: ORANGE }} />
                  </div>
                  <div className="text-sm text-white/65">
                    <strong className="text-white font-semibold block text-[15px]">{strong}</strong>
                    {body}
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="grid gap-5">
              {libraryCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl p-7 border border-white/10 hover:border-white/20 transition-colors" style={{ backgroundColor: NAVY_RAISED }}>
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOR RESTORE & COMPLIANCE ══════════════════════ */}
      <section id="restore" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>For Restore &amp; Compliance</p>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
                  Search once. Find it everywhere.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Skip the spreadsheet of tape labels and the afternoon spent swapping cartridges. BloomLTO puts the exact file, tape, and location in front of you — in seconds.
                </p>
              </motion.div>
              <div className="grid gap-4">
                {restoreCards.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4 items-start shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all">
                    <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1" style={{ color: NAVY }}>{title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-xl p-8 border border-gray-200" style={{ backgroundColor: GREY }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-orange-50 ring-1 ring-orange-100">
                    <Search className="w-5 h-5" style={{ color: ORANGE }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Search Result</div>
                    <div className="text-[15px] font-semibold" style={{ color: NAVY }}>invoice_2019_Q4.xlsx · 2.4 GB</div>
                  </div>
                </div>
                <div className="grid gap-2.5 mb-7">
                  {[
                    { label: 'Tape Barcode', value: 'LTO-0427', highlight: true },
                    { label: 'Archived On', value: '12 Mar 2024', highlight: false },
                    { label: 'Verification', value: '✓ Checksum Verified', highlight: false, green: true },
                  ].map(({ label, value, highlight, green }) => (
                    <div key={label} className="flex justify-between items-center px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-500">{label}</span>
                      <span className="text-sm font-semibold" style={{ color: highlight ? ORANGE : green ? '#059669' : NAVY }}>{value}</span>
                    </div>
                  ))}
                </div>
                <a href="#cta"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold text-sm rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:-translate-y-0.5 transition-all"
                  style={{ background: ORANGE_GRADIENT }}>
                  Queue Restore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TRUST & SAFETY ══════════════════════ */}
      <section id="trust" className="py-24 scroll-mt-16" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Archive Integrity</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Protection built into every archive.
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              BloomLTO is designed so every write and every restore leaves a verifiable, auditable trail.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section id="cta" className="py-20 px-6 scroll-mt-16" style={{ background: ORANGE_GRADIENT }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="text-center lg:text-left">
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-5 leading-[1.1] tracking-tight">
                Ready to make your tapes searchable?
              </h2>
              <p className="text-lg text-white/90 mb-9 leading-relaxed max-w-md mx-auto lg:mx-0">
                Start a 30-day free trial of BloomLTO, or book a demo to see the full catalog-and-restore walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(16,29,54,0.5)] hover:-translate-y-0.5 transition-all flex items-center gap-2" style={{ color: NAVY }}>
                  Start 30-Day Trial <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-colors flex items-center gap-2">
                  Book a Demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-3 shadow-[0_24px_60px_-20px_rgba(16,29,54,0.45)]" style={{ backgroundColor: NAVY }}>
              {[
                { icon: Mail, label: 'Email', value: 'info@bloomlto.com', href: 'mailto:info@bloomlto.com' },
                { icon: ExternalLink, label: 'Website', value: 'bloomlto.com', href: 'https://bloomlto.com', external: true },
                { icon: Layers, label: 'Supports', value: 'LTO-5 through LTO-9' },
              ].map(({ icon: Icon, label, value, href, external }, i) => {
                const inner = (
                  <div className={`flex items-center gap-4 px-6 py-5 ${i !== 0 ? 'border-t border-white/[0.08]' : ''} ${href ? 'hover:bg-white/[0.04] transition-colors' : ''} rounded-lg`}>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                    </div>
                    <div className="text-left">
                      <p className="text-white/45 text-[11px] font-semibold uppercase tracking-[0.1em] mb-0.5">{label}</p>
                      <p className="text-white text-[15px] font-semibold">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomLTO;
