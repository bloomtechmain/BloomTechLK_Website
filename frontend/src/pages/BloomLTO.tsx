import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Clock, RefreshCw, History, Bell, Search, HardDrive,
  Package, Layers, Archive, ShieldCheck, ExternalLink, Mail, Download,
} from 'lucide-react';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
};
const vp = { once: true, margin: '-40px' };

function useCountUp(target: number, duration = 1600) {
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
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
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

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-svh flex items-start overflow-hidden bg-[#0c1a36]">
        {/* grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* photo — placed first so gradient layers render on top of it */}
        <div className="absolute right-0 top-0 h-full w-[72%] hidden lg:block">
          <img
            src="/images/rack_and_roll.jpg"
            alt="Tape library and server racks — BloomLTO"
            className="w-full h-full object-cover object-[30%_center] opacity-85"
          />
        </div>

        {/* blobs */}
        <div className="absolute top-[8%] right-[6%] w-[520px] h-[520px] bg-[#ff6b00]/[0.14] rounded-full blur-[110px] animate-pulse" />
        <div className="absolute bottom-[6%] left-[3%] w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '7s', animationDirection: 'reverse' }} />

        {/* gradient fades the image in from the left */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(12,26,54,1) 0%, rgba(12,26,54,0.97) 28%, rgba(12,26,54,0.72) 50%, rgba(12,26,54,0.22) 72%, rgba(12,26,54,0.04) 100%), linear-gradient(to top, rgba(12,26,54,0.6) 0%, transparent 30%)'
        }} />

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        {/* content — top padding clears navbar + adds breathing room, scales with vh */}
        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-6 xl:px-12"
          style={{ paddingTop: 'clamp(5rem,11vh,7.5rem)', paddingBottom: 'clamp(2rem,5vh,4rem)' }}>
          <div className="lg:max-w-[52%]">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

            {/* badge */}
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-3 px-5 py-1.5 text-[11px] font-bold tracking-[0.28em] text-white uppercase bg-[#ff6b00]/18 backdrop-blur-md border border-[#ff6b00]/35 rounded-full"
              style={{ marginBottom: 'clamp(.5rem,1.5vh,2rem)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] animate-pulse" />
              Searchable LTO Tape Archive Software
            </motion.div>

            {/* headline */}
            <motion.h1 variants={fadeUp} custom={0.05}
              className="font-black leading-[0.92] tracking-[-0.045em] text-white"
              style={{ fontSize: 'clamp(2.75rem,6vw,6.5rem)', marginBottom: 'clamp(.5rem,1.2vh,1.5rem)' }}>
              Tape is cheap and safe.<br />
              <span className="text-[#ff6b00]">But which tape has it?</span>
            </motion.h1>

            {/* subheadline */}
            <motion.p variants={fadeUp} custom={0.1}
              className="max-w-[38rem] font-medium text-white/78 leading-[1.68]"
              style={{ fontSize: 'clamp(.9375rem,1.6vw,1.2rem)', marginBottom: 'clamp(.5rem,1.4vh,1.75rem)' }}>
              BloomLTO indexes every file the moment it's archived to LTO — name, path, size, and tape barcode — so restoring a file means searching a catalog, not guessing which cartridge it's on.
            </motion.p>

            {/* chips */}
            <motion.div variants={fadeUp} custom={0.14} className="flex flex-wrap gap-2"
              style={{ marginBottom: 'clamp(.75rem,1.8vh,2.5rem)' }}>
              {['Open LTFS Format', 'LTO-5 to LTO-9', 'Scheduled Archiving', 'Restore Audit Log', 'Verification & Duplication'].map(t => (
                <span key={t} className="px-3 py-1 bg-white/7 border border-white/12 rounded-full text-[11.5px] font-bold text-white/62 tracking-wide">{t}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.18} className="flex flex-wrap gap-3.5"
              style={{ marginBottom: 'clamp(.875rem,2vh,3rem)' }}>
              <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#ff6b00] text-white font-black text-base rounded-2xl hover:bg-[#e65c00] hover:shadow-[0_0_36px_rgba(255,107,0,.55)] transition-all active:scale-[.97]">
                Visit bloomlto.com <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#library"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-black text-base rounded-2xl border-2 border-white/20 hover:bg-white hover:text-[#0c1a36] transition-all">
                See How Archiving Works
              </a>
            </motion.div>

            {/* counters */}
            <motion.div variants={fadeUp} custom={0.22} className="flex flex-wrap gap-2.5"
              style={{ marginBottom: 'clamp(.375rem,1vh,1.5rem)' }}>
              {[
                { ref: capacityRef,    val: `${capacityCount} TB`,     label: 'Per Tape (LTO-9)' },
                { ref: generationsRef, val: `LTO-5–${generationsCount + 4}`, label: 'Generations Supported' },
                { ref: trialRef,       val: `${trialCount}-Day`,       label: 'Free Trial' },
                { ref: null,           val: '100%',                    label: 'Open LTFS Format' },
              ].map(({ ref, val, label }) => (
                <div key={label} ref={ref}
                  className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl"
                  style={{ padding: 'clamp(.6rem,1.2vh,1.125rem) clamp(.875rem,1.8vw,1.75rem)' }}>
                  <span className="block font-black text-[#ff6b00] leading-none tracking-[-0.04em]"
                    style={{ fontSize: 'clamp(1.5rem,3.2vh,2.5rem)' }}>{val}</span>
                  <span className="block text-[10px] font-bold text-white/50 uppercase tracking-[0.18em] mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* sub-brand */}
            <motion.div variants={fadeUp} custom={0.26}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff6b00]/10 border border-[#ff6b00]/22 rounded-full"
              style={{ marginTop: 'clamp(.375rem,.8vh,.5rem)' }}>
              <span className="text-[11px] font-bold text-white/45 uppercase tracking-[0.13em]">A Sub-Brand of</span>
              <a href="https://www.bloomtech.lk" target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-black text-[#ff6b00] uppercase tracking-[0.13em] hover:underline">
                BloomTech.lk
              </a>
            </motion.div>

          </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TAGLINE STRIP ══════════════════════ */}
      <div className="bg-[#ff6b00] overflow-hidden py-4">
        <div className="flex gap-16 items-center animate-[marquee_28s_linear_infinite] w-max whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            ['Archive. Index. Restore.', 'Readable Without BloomLTO — It\'s Open LTFS.', 'Verification & Duplication Built In.', 'Full Restore Audit Trail.', 'Searchable with BloomLTO'].map((t, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-8">
                <span className="text-[13px] font-black uppercase tracking-[0.22em] text-white/90">{t}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ══════════════════════ STATS BAR ══════════════════════ */}
      <div className="bg-[#0c1a36]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 px-6 xl:px-12">
          {[
            { n: '18 TB',   l: 'Per Tape (LTO-9)' },
            { n: 'LTO-5–9', l: 'Generations Supported' },
            { n: '30-Day',  l: 'Free Trial' },
            { n: '100%',    l: 'Open LTFS Format' },
          ].map(({ n, l }, i) => (
            <motion.div key={l} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={i * 0.08}
              className="py-9 px-6 text-center border-r border-white/7 last:border-r-0 border-b sm:border-b-0 even:border-r-0 sm:even:border-r sm:last:border-r-0">
              <div className="text-[2.25rem] font-black text-[#ff6b00] leading-none tracking-[-0.04em] mb-1.5">{n}</div>
              <div className="text-[11px] font-bold text-white/45 uppercase tracking-[0.18em]">{l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section id="how-it-works" className="py-28 bg-white scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-12">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">How BloomLTO Works</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              Two workflows.<br />Zero guesswork.
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you're writing new archives to tape or racing to find one file in a ten-year-old library, BloomLTO makes it simple.
            </p>
          </motion.div>

          {/* tabs */}
          <div className="flex gap-2 justify-center border-b-2 border-gray-100 mb-10">
            {(['restoring', 'archiving'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-sm font-black uppercase tracking-[0.1em] border-b-[3px] -mb-[2px] transition-all ${activeTab === tab ? 'text-[#ff6b00] border-[#ff6b00]' : 'text-[#5b6e8a] border-transparent hover:text-[#0c1a36]'}`}>
                {tab === 'restoring' ? 'Restoring a File' : 'Archiving to Tape'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={i * 0.1}
                className="group bg-gray-50 rounded-[22px] p-8 border-2 border-gray-100 text-center hover:border-[#ff6b00]/30 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_rgba(255,107,0,0.35)]">
                  <span className="text-2xl font-black text-white">{i + 1}</span>
                </div>
                <div className="w-12 h-12 rounded-[12px] bg-[#ff6b00]/10 flex items-center justify-center mx-auto mb-3.5 group-hover:bg-[#ff6b00] transition-colors">
                  <Icon className="w-5 h-5 text-[#ff6b00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-black text-[#0c1a36] mb-1.5">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section id="features" className="py-28 bg-gray-50 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Platform Features</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              Everything the archive needs.<br />Built and ready.
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
              BloomLTO is a full searchable tape archive system — from scheduled writes to audited restores — built on the open LTFS standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={(i % 4) * 0.08}
                className="group bg-white rounded-[22px] p-7 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-[52px] h-[52px] rounded-[13px] bg-[#ff6b00]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff6b00] transition-colors">
                  <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[.9375rem] font-black text-[#0c1a36] mb-1.5">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOR IT & BACKUP TEAMS ══════════════════════ */}
      <section id="library" className="py-28 bg-[#0c1a36] relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-[-80px] right-[4%] w-[480px] h-[480px] bg-[#ff6b00]/9 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-80px] left-[4%] w-[380px] h-[380px] bg-blue-500/9 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">For IT &amp; Backup Teams</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-white leading-[1.05] tracking-tight mb-4">
              Your tape library,<br /><span className="text-[#ff6b00]">finally under control.</span>
            </h2>
            <p className="text-lg font-medium text-white/65 max-w-2xl mx-auto leading-relaxed">
              Stop guessing which cartridge has the file. Schedule archives, verify every write, and get alerted before a problem becomes a disaster.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
            {/* capacity card */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}
              className="bg-white/6 backdrop-blur-md border border-white/12 rounded-[26px] p-10">
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Example Tape Capacity</div>
              <div className="text-[clamp(2.5rem,5vw,4rem)] font-black text-[#ff6b00] leading-none tracking-[-0.04em] mb-1">18 TB</div>
              <div className="text-base font-semibold text-white/70 mb-8">native capacity per LTO-9 cartridge</div>
              {[
                { icon: ShieldCheck, strong: 'Full Control',   body: 'You choose what\'s archived, when, and where restores land.' },
                { icon: RefreshCw,   strong: 'Verified Writes', body: 'Re-hash verification confirms every archive job completed cleanly.' },
                { icon: Bell,        strong: 'Instant Alerts',  body: 'Get notified the moment a job needs your attention.' },
              ].map(({ icon: Icon, strong, body }) => (
                <div key={strong} className="flex items-center gap-3.5 mb-4 last:mb-0">
                  <div className="w-10 h-10 rounded-[10px] bg-[#ff6b00]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#ff6b00] w-[18px] h-[18px]" />
                  </div>
                  <div className="text-[.875rem] font-semibold text-white/70">
                    <strong className="text-white font-black text-[.9375rem] block">{strong}</strong>
                    {body}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* why cards */}
            <div className="grid gap-5">
              {libraryCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={i * 0.12}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-[20px] p-7 border border-white/10 hover:bg-white/9 transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center flex-shrink-0 group-hover:scale-[1.08] transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white mb-1.5">{title}</h3>
                      <p className="text-[.8125rem] font-medium text-white/62 leading-[1.72]">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOR RESTORE & COMPLIANCE ══════════════════════ */}
      <section id="restore" className="py-28 bg-white scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
                <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">For Restore &amp; Compliance</span>
                <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
                  Search once.<br />Find it everywhere.
                </h2>
                <p className="text-lg font-medium text-gray-500 leading-relaxed mb-9">
                  Skip the spreadsheet of tape labels and the afternoon spent swapping cartridges. BloomLTO puts the exact file, tape, and location in front of you — in seconds.
                </p>
              </motion.div>
              <div className="grid gap-4">
                {restoreCards.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={i * 0.1}
                    className="group bg-gray-50 rounded-[22px] p-6 border-2 border-gray-100 flex gap-4 items-start hover:border-[#ff6b00]/30 hover:shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all">
                    <div className="w-12 h-12 rounded-[12px] bg-[#ff6b00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b00] transition-colors">
                      <Icon className="w-5 h-5 text-[#ff6b00] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0c1a36] mb-1">{title}</h3>
                      <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* catalog search preview card */}
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={0.15}>
              <div className="bg-gray-50 rounded-[26px] p-9 border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#5b6e8a] uppercase tracking-[0.1em]">Search Result</div>
                    <div className="text-[1.0625rem] font-black text-[#0c1a36]">invoice_2019_Q4.xlsx · 2.4 GB</div>
                  </div>
                </div>
                <div className="grid gap-3 mb-7">
                  {[
                    { label: 'Tape Barcode', value: 'LTO-0427', highlight: true },
                    { label: 'Archived On', value: '12 Mar 2024', highlight: false },
                    { label: 'Verification', value: '✓ Checksum Verified', highlight: false, green: true },
                  ].map(({ label, value, highlight, green }) => (
                    <div key={label} className="flex justify-between items-center px-4 py-3.5 bg-white rounded-[14px] border border-gray-200">
                      <span className="text-[.8125rem] font-bold text-[#5b6e8a]">{label}</span>
                      <span className={`text-[.9375rem] font-black ${highlight ? 'text-[#ff6b00]' : green ? 'text-[#059669]' : 'text-[#0c1a36]'}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <a href="#cta"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff6b00] text-white font-black text-base rounded-2xl hover:bg-[#e65c00] hover:shadow-[0_0_36px_rgba(255,107,0,.55)] transition-all active:scale-[.97]">
                  Queue Restore <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TRUST & SAFETY ══════════════════════ */}
      <section id="trust" className="py-28 bg-gray-50 scroll-mt-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} className="text-center mb-16">
            <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-3">Archive Integrity</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0c1a36] leading-[1.05] tracking-tight mb-4">
              Protection built<br />into every archive.
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
              BloomLTO is designed so every write and every restore leaves a verifiable, auditable trail.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp} custom={i * 0.1}
                className="group bg-white rounded-[22px] p-7 border-2 border-gray-100 text-center hover:border-[#ff6b00]/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-[60px] h-[60px] rounded-[15px] bg-gradient-to-br from-[#ff6b00] to-orange-400 flex items-center justify-center mx-auto mb-5 group-hover:scale-[1.08] transition-transform shadow-[0_8px_24px_rgba(255,107,0,0.3)]">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-black text-[#0c1a36] mb-2">{title}</h3>
                <p className="text-[.8125rem] font-medium text-gray-500 leading-[1.65]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section id="cta" className="py-28 bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#b84a00] relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-[-60px] right-[8%] w-[400px] h-[400px] bg-[#ff6b00]/12 rounded-full blur-[90px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

            <motion.span variants={fadeUp} className="block text-[11px] font-black uppercase tracking-[0.3em] text-white/50 mb-3">Get Started</motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(2rem,3.8vw,3.25rem)] font-black text-white leading-[1.05] tracking-tight mb-4">
              Ready to make<br />your tapes searchable?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[1.0625rem] font-medium text-white/78 max-w-[42rem] mx-auto leading-[1.72] mb-10">
              Start a 30-day free trial of BloomLTO, or book a demo to see the full catalog-and-restore walkthrough.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-white text-[#0c1a36] font-black text-base rounded-2xl hover:bg-gray-100 hover:shadow-[0_0_36px_rgba(255,255,255,.25)] transition-all">
                Start 30-Day Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://bloomlto.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-transparent text-white font-black text-base rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all">
                Book a Demo <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              {[
                { ico: <Mail className="w-[18px] h-[18px] text-white" />, bg: 'bg-[#ff6b00]', label: 'Email', val: 'info@bloomlto.com', href: 'mailto:info@bloomlto.com' },
                { ico: <ExternalLink className="w-[18px] h-[18px] text-white" />, bg: 'bg-blue-600', label: 'Website', val: 'bloomlto.com', href: 'https://bloomlto.com' },
                { ico: <Layers className="w-[18px] h-[18px] text-white" />, bg: 'bg-green-600', label: 'Supports', val: 'LTO-5 through LTO-9', href: undefined },
              ].map(({ ico, bg, label, val, href }) => (
                <div key={label} className="flex items-center gap-3.5 px-5 py-3.5 bg-white/8 backdrop-blur-md border border-white/14 rounded-2xl">
                  <div className={`w-10 h-10 ${bg} rounded-[10px] flex items-center justify-center shrink-0`}>{ico}</div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-white/45 uppercase tracking-[0.15em] mb-0.5">{label}</div>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[.9375rem] font-black text-white hover:text-[#ff6b00] transition-colors">{val}</a>
                      : <span className="text-[.9375rem] font-black text-white">{val}</span>}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomLTO;
