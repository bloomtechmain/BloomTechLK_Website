import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import type { Photo } from '../kit';

export interface PillarItem { icon: LucideIcon; label: string }

export interface Pillar {
  icon: LucideIcon;
  title: string;
  desc: string;
  photo: Photo;
  differentiator: string;
  /** keywords quoted verbatim from `desc` */
  items: PillarItem[];
  diagram: 'standards' | 'resilience' | 'support';
}

/* ---------- 1 · hub: the certified team at the centre, each framework on a spoke ---------- */

const StandardsHub = ({ center, items }: { center: string; items: PillarItem[] }) => {
  const reduce = useReducedMotion();
  const [on, setOn] = useState<number | null>(null);
  // spoke ends (percent of the 300 × 200 box), one per corner
  const ends = [{ x: 18, y: 18 }, { x: 82, y: 18 }, { x: 18, y: 82 }, { x: 82, y: 82 }];

  return (
    <div className="relative h-full min-h-[220px]" onMouseLeave={() => setOn(null)}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {ends.slice(0, items.length).map((e, i) => (
          <g key={i}>
            <line x1="50" y1="50" x2={e.x} y2={e.y} stroke={on === i ? '#FF6B00' : 'rgba(255,255,255,0.18)'} strokeWidth="0.6" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
            {!reduce && (
              <motion.circle r="1.4" fill="#FF6B00"
                animate={{ cx: [50, e.x], cy: [50, e.y], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }} />
            )}
          </g>
        ))}
      </svg>

      {/* centre: the team */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] rounded-md bg-white text-navy px-3 py-3 text-center shadow-lg">
        <span className="block text-[13px] font-extrabold leading-tight">{center}</span>
      </div>

      {/* spokes: the frameworks */}
      {items.map((it, i) => (
        <button key={it.label} type="button" onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onBlur={() => setOn(null)}
          className={`absolute -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-extrabold transition-colors ${on === i ? 'bg-brand-orange text-white' : 'bg-navy-mid text-white ring-1 ring-white/15'}`}
          style={{ left: `${ends[i].x}%`, top: `${ends[i].y}%` }}>
          <it.icon className="w-3.5 h-3.5" />{it.label}
        </button>
      ))}
    </div>
  );
};

/* ---------- 2 · resilience: switch each condition on, the app keeps going ---------- */

const ResilienceDemo = ({ items }: { items: PillarItem[] }) => {
  const [state, setState] = useState([false, false, false]);
  const [power, offline, sinhala] = state;
  const flip = (i: number) => setState((s) => s.map((v, k) => (k === i ? !v : v)));

  return (
    <div>
      {/* the app under test */}
      <div className="rounded-md bg-white/[0.06] ring-1 ring-white/10 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-brand-orange" /><span className="w-2 h-2 rounded-full bg-white/20" /><span className="w-2 h-2 rounded-full bg-white/20" />
          </span>
          <span className="flex items-center gap-2" aria-hidden="true">
            {items.map((it, i) => (
              <it.icon key={it.label} className={`w-3.5 h-3.5 transition-colors ${state[i] ? 'text-brand-orange' : 'text-white/25'}`} />
            ))}
          </span>
        </div>
        <motion.p key={String(sinhala)} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="text-xl font-extrabold text-white mb-1" lang={sinhala ? 'si' : 'en'}>
          {sinhala ? 'ආයුබෝවන්' : 'Welcome'}
        </motion.p>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-3">
          <motion.div className="h-full bg-white/60 rounded-full" animate={{ width: ['20%', '85%', '20%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <p className="mt-3 flex items-center gap-2 text-xs font-bold text-white/70">
          <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
          {power || offline ? 'Still running' : 'Running'}
        </p>
      </div>

      {/* switches: one per quoted capability */}
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {items.map((it, i) => (
          <li key={it.label}>
            <button type="button" role="switch" aria-checked={state[i]} onClick={() => flip(i)}
              className="w-full flex items-center gap-3 py-3 text-left">
              <it.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${state[i] ? 'text-brand-orange' : 'text-white/50'}`} />
              <span className="flex-1 text-sm font-bold text-white first-letter:uppercase">{it.label}</span>
              <span className={`relative w-9 h-5 rounded-full flex-shrink-0 transition-colors ${state[i] ? 'bg-brand-orange' : 'bg-white/15'}`}>
                <motion.span className="absolute top-0.5 w-4 h-4 rounded-full bg-white" animate={{ left: state[i] ? 18 : 2 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-white/45">Flip a switch to try it.</p>
    </div>
  );
};

/* ---------- 3 · support: a live 24-hour dial, Sri Lanka time ---------- */

const SupportDial = ({ items }: { items: PillarItem[] }) => {
  const reduce = useReducedMotion();
  // set on the client only, so prerendered HTML and hydration agree
  const [now, setNow] = useState<{ h: number; m: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
      setNow({ h: +parts.find((p) => p.type === 'hour')!.value, m: +parts.find((p) => p.type === 'minute')!.value });
    };
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);

  const monitoring = items.find((it) => it.label.includes('24/7'));
  const rest = items.filter((it) => it !== monitoring);
  const angle = now ? ((now.h + now.m / 60) / 24) * 360 : 0;

  return (
    <div>
      <div className="flex items-center gap-6 mb-4">
        <svg viewBox="0 0 120 120" className="w-32 h-32 flex-shrink-0" role="img" aria-label="24-hour dial: monitoring every hour of the day">
          {Array.from({ length: 24 }, (_, i) => {
            const a = ((i / 24) * 360 - 90) * (Math.PI / 180);
            const past = now ? i <= now.h : false;
            return (
              <motion.line key={i} x1={60 + Math.cos(a) * 44} y1={60 + Math.sin(a) * 44} x2={60 + Math.cos(a) * 54} y2={60 + Math.sin(a) * 54}
                stroke={past ? '#FF6B00' : 'rgba(255,255,255,0.35)'} strokeWidth="4" strokeLinecap="round"
                initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} />
            );
          })}
          {now && (
            <motion.line x1="60" y1="60" x2="60" y2="24" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"
              initial={reduce ? false : { rotate: 0 }} animate={{ rotate: angle }} transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ originX: '60px', originY: '60px' }} />
          )}
          <circle cx="60" cy="60" r="4" fill="#FF6B00" />
          <text x="60" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">24/7</text>
        </svg>
        <div>
          {monitoring && <p className="text-sm font-extrabold text-white first-letter:uppercase mb-1">{monitoring.label}</p>}
          <p className="text-xs text-white/50 leading-relaxed">
            {now ? <>Sri Lanka time <span className="font-bold text-white tabular-nums">{String(now.h).padStart(2, '0')}:{String(now.m).padStart(2, '0')}</span></> : 'Sri Lanka time'}
          </p>
        </div>
      </div>
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {rest.map((it) => (
          <li key={it.label} className="flex items-center gap-3 py-3">
            <it.icon className="w-4 h-4 text-white/50 flex-shrink-0" />
            <span className="text-sm font-bold text-white first-letter:uppercase">{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ---------- the three pillars ---------- */

export const WhyPillars = ({ pillars }: { pillars: Pillar[] }) => {
  const reduce = useReducedMotion();
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto] border-t border-white/10 [&>*]:min-w-0">
      {pillars.map((p, i) => (
        <motion.article key={p.title}
          initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          className="grid lg:grid-rows-subgrid lg:row-span-5 content-start py-10 lg:px-10 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 border-white/10">
          {/* photo with orange tab */}
          <div className="group relative h-44 rounded-md overflow-hidden mb-8">
            <img src={p.photo.src} alt={p.photo.alt} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            <span className="absolute left-0 top-0 w-12 h-12 bg-brand-orange flex items-center justify-center text-white text-sm font-extrabold">{String(i + 1).padStart(2, '0')}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">{p.title}</h3>
          <p className="text-white/65 leading-relaxed mb-8">{p.desc}</p>

          <div className="flex flex-col rounded-md bg-white/[0.03] ring-1 ring-white/10 p-5 mb-5 [&>*]:flex-1">
              {p.diagram === 'standards' && <StandardsHub center={p.differentiator} items={p.items} />}
              {p.diagram === 'resilience' && <ResilienceDemo items={p.items} />}
              {p.diagram === 'support' && <SupportDial items={p.items} />}
          </div>
          {p.diagram === 'standards' ? <div /> : (
              <p className="flex items-start gap-3 text-[15px] font-bold text-white leading-snug">
                <motion.span initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.3 + i * 0.2 }}
                  className="w-6 h-6 rounded-full bg-white text-navy flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </motion.span>
                {p.differentiator}
              </p>
          )}
        </motion.article>
      ))}
    </div>
  );
};
