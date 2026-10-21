import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUp, ChevronRight, type LucideIcon } from 'lucide-react';

/* ---------- shared: faint blueprint grid for dark panels ---------- */

export const BlueprintGrid = ({ id, size = 48, color = 'rgba(255,255,255,0.05)' }: { id: string; size?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
        <path d={`M${size} 0H0V${size}`} fill="none" stroke={color} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

/* ---------- 1 · philosophy: three overlapping principles, delivery at the centre ---------- */

export interface Principle { icon: LucideIcon; title: string; desc: string }

export const PrincipleVenn = ({ items, center }: { items: Principle[]; center: string }) => {
  const reduce = useReducedMotion();
  const [on, setOn] = useState<number | null>(null);
  const circles = [
    { cx: 200, cy: 135, lx: 200, ly: 78 },
    { cx: 135, cy: 248, lx: 100, ly: 284 },
    { cx: 265, cy: 248, lx: 300, ly: 284 },
  ];
  // two-line labels so each sits inside its own circle
  const lines = (t: string) => {
    const w = t.split(' ');
    return t.length < 18 ? [t] : [w.slice(0, Math.ceil(w.length / 2)).join(' '), w.slice(Math.ceil(w.length / 2)).join(' ')];
  };

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <ol className="border-t border-border-grey">
          {items.map((p, i) => (
            <li key={p.title} className="border-b border-border-grey">
              <button type="button" onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)} onFocus={() => setOn(i)} onBlur={() => setOn(null)}
                className="w-full text-left py-6 grid grid-cols-[auto_1fr] gap-5 group">
                <span className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${on === i ? 'bg-brand-orange text-white' : 'bg-white text-navy-mid'}`}>
                  <p.icon className="w-5 h-5" />
                </span>
                <span>
                  <span className={`block text-xl font-extrabold transition-colors ${on === i ? 'text-brand-orange-dark' : 'text-navy'}`}>{p.title}</span>
                  <span className="block text-gray-600 leading-relaxed mt-1.5">{p.desc}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="lg:col-span-6 order-1 lg:order-2">
        <svg viewBox="0 0 400 380" className="w-full max-w-[480px] mx-auto h-auto" role="img"
          aria-label={`Venn diagram: ${items.map((p) => p.title).join(', ')}, overlapping at ${center}`}>
          {circles.map((c, i) => (
            <motion.circle key={i} cx={c.cx} cy={c.cy} r="112"
              fill={on === i ? 'rgba(255,107,0,0.16)' : 'rgba(27,43,77,0.06)'}
              stroke={on === i ? '#FF6B00' : '#1B2B4D'} strokeWidth="1.5" strokeDasharray={on === i ? undefined : '5 5'}
              onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)}
              className="cursor-pointer transition-colors"
              initial={reduce ? false : { scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.15 }}
              style={{ transformOrigin: `${c.cx}px ${c.cy}px` }} />
          ))}
          {items.map((p, i) => (
            <text key={p.title} x={circles[i].lx} y={circles[i].ly} textAnchor="middle" fontSize="15" fontWeight="800"
              fill={on === i ? '#CC5500' : '#101D36'} className="pointer-events-none transition-colors">
              {lines(p.title).map((l, k) => <tspan key={k} x={circles[i].lx} dy={k === 0 ? 0 : 18}>{l}</tspan>)}
            </text>
          ))}
          <circle cx="200" cy="212" r="38" fill="#101D36" />
          {!reduce && (
            <motion.circle cx="200" cy="212" r="38" fill="none" stroke="#FF6B00" strokeWidth="2" style={{ transformOrigin: '200px 212px' }}
              animate={{ scale: [1, 1.42], opacity: [0.8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }} />
          )}
          <text x="200" y="216" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFFFFF" className="pointer-events-none">{center}</text>
        </svg>
      </div>
    </div>
  );
};

/* ---------- 2 · services: one partner branching into five offerings ---------- */

export interface Offering { num: string; icon: LucideIcon; title: string; points: string[] }

export const ServiceFlow = ({ items, hub }: { items: Offering[]; hub: string }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const it = items[active];
  const n = items.length;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
      {/* hub node */}
      <div className="hidden lg:flex lg:col-span-2 items-center">
        <div className="relative w-full aspect-square max-w-[150px] rounded-full bg-navy flex items-center justify-center text-center p-4">
          <span className="absolute inset-[-10px] rounded-full border border-dashed border-navy/25" aria-hidden="true" />
          <span className="text-white font-extrabold text-sm leading-tight">{hub}</span>
        </div>
      </div>

      {/* branching connectors — one curve per row */}
      <div className="hidden lg:block lg:col-span-1 relative">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {items.map((_, i) => {
            const y = ((i + 0.5) / n) * 100;
            const lit = i === active;
            return (
              <path key={i} d={`M0 50 C 55 50, 45 ${y}, 100 ${y}`} fill="none"
                stroke={lit ? '#FF6B00' : '#C5CCD8'} strokeWidth={lit ? 2.5 : 1.5} vectorEffect="non-scaling-stroke"
                strokeDasharray={lit ? '5 4' : undefined} className={lit && !reduce ? 'flow-dash' : undefined} />
            );
          })}
        </svg>
      </div>

      {/* offerings */}
      <ul className="lg:col-span-4 flex flex-col">
        {items.map((x, i) => {
          const on = i === active;
          return (
            <li key={x.num} className="flex-1 py-1">
              <button type="button" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-pressed={on}
                className={`w-full h-full min-h-[68px] flex items-center gap-4 px-5 py-3 text-left rounded-r-xl border-l-4 transition-colors ${on ? 'bg-navy text-white border-brand-orange' : 'bg-grey-light text-navy border-transparent hover:bg-grey-hover'}`}>
                <span className={`font-mono text-xs font-bold ${on ? 'text-brand-orange' : 'text-gray-400'}`}>{x.num}</span>
                <x.icon className={`w-5 h-5 shrink-0 ${on ? 'text-white/80' : 'text-navy-mid'}`} />
                <span className="font-bold leading-snug flex-1">{x.title}</span>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-opacity ${on ? 'opacity-100 text-brand-orange' : 'opacity-0'}`} />
              </button>
            </li>
          );
        })}
      </ul>

      {/* detail: the offering's points as a short vertical flow */}
      <div className="lg:col-span-5 lg:pl-10">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="relative h-full rounded-2xl bg-grey-light p-7 lg:p-9 overflow-hidden">
            <span className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-[18px] border-white" aria-hidden="true" />
            <div className="relative">
              <span className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center mb-5">
                <it.icon className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-extrabold text-navy leading-tight mb-7 pr-10">{it.title}</h3>
              <ol className="relative">
                <span className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-card-grey" aria-hidden="true" />
                {it.points.map((p, k) => (
                  <motion.li key={k} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + k * 0.08 }}
                    className="relative pl-10 pb-5 last:pb-0">
                    <span className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-white ring-2 ring-navy text-navy text-[11px] font-extrabold flex items-center justify-center">{k + 1}</span>
                    <p className="text-[15px] text-gray-700 leading-relaxed">{p}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ---------- 3 · team: design → build → adopt, with a loop back ---------- */

export interface TeamRole { icon: LucideIcon; title: string; desc: string; stage: string; shape: 'square' | 'hex' | 'circle' }

const shapeCls = { square: 'inset-4 rounded-lg rotate-45', hex: 'inset-0', circle: 'inset-2 rounded-full' };
const hexClip = 'polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)';

const RoleNode = ({ r, on }: { r: TeamRole; on: boolean }) => (
  <span className="relative w-24 h-24 flex items-center justify-center">
    <span className={`absolute transition-colors duration-200 ${shapeCls[r.shape]} ${on ? 'bg-brand-orange' : 'bg-navy-mid'}`}
      style={r.shape === 'hex' ? { clipPath: hexClip } : undefined} />
    <r.icon className="relative w-7 h-7 text-white" />
  </span>
);

export const TeamPipeline = ({ roles, loop }: { roles: TeamRole[]; loop: string }) => {
  const reduce = useReducedMotion();
  const [on, setOn] = useState<number | null>(null);

  return (
    <>
      {/* desktop: horizontal flow */}
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-3">
          <div className="absolute top-12 left-[16.66%] right-[16.66%] h-px bg-white/15">
            <motion.div className="absolute inset-0 bg-white/50 origin-left" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeInOut' }} />
            {!reduce && (
              <motion.span className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 -ml-1 rounded-full bg-brand-orange"
                animate={{ left: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1.4 }} />
            )}
            {[25, 75].map((l) => (
              <span key={l} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-navy-dark ring-1 ring-white/20 flex items-center justify-center" style={{ left: `${l}%` }}>
                <ChevronRight className="w-4 h-4 text-white/70" />
              </span>
            ))}
          </div>

          {roles.map((r, i) => (
            <motion.div key={r.title} initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)}
              className="relative flex flex-col items-center text-center px-8">
              <RoleNode r={r} on={on === i} />
              <span className="mt-5 font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange">{String(i + 1).padStart(2, '0')} · {r.stage}</span>
              <h3 className="mt-2 text-2xl font-extrabold text-white">{r.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed max-w-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* feedback loop: specialists back to architects */}
        <div className="relative mx-[16.66%] mt-10 h-12 border-x-2 border-b-2 border-dashed border-white/20 rounded-b-3xl">
          <ArrowUp className="absolute -left-[9px] -top-3 w-4 h-4 text-white/40" />
          <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 px-4 bg-navy-dark font-mono text-[11px] font-bold uppercase tracking-widest text-white/50 whitespace-nowrap">{loop}</span>
        </div>
      </div>

      {/* mobile: vertical flow */}
      <ol className="lg:hidden relative">
        <span className="absolute left-12 top-12 bottom-12 w-px bg-white/15" aria-hidden="true" />
        {roles.map((r) => (
          <li key={r.title} className="relative grid grid-cols-[96px_1fr] gap-5 pb-10 last:pb-0">
            <RoleNode r={r} on={false} />
            <div className="pt-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-orange">{r.stage}</span>
              <h3 className="mt-1 text-xl font-extrabold text-white">{r.title}</h3>
              <p className="mt-2 text-white/60 leading-relaxed">{r.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

/* ---------- 4 · hubs: the HQ linked to each regional hub ---------- */

export interface HubPin { id: string; name: string; location: string; lon: number; lat: number; hq?: boolean }

// equirectangular crop: 125°W–105°E, 50°N–10°S
const W = 1000, H = 440;
const px = (lon: number) => ((lon + 125) / 230) * W;
const py = (lat: number) => ((50 - lat) / 60) * H;

export const HubNetwork = ({ hubs, selected, onSelect }: { hubs: HubPin[]; selected: string; onSelect: (id: string) => void }) => {
  const reduce = useReducedMotion();
  const hq = hubs.find((h) => h.hq) ?? hubs[0];
  const hx = px(hq.lon), hy = py(hq.lat);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Network map: ${hubs.map((h) => h.name).join(', ')}`}>
      <defs>
        <pattern id="hub-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.12)" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#hub-dots)" />
      <line x1="0" x2={W} y1={py(0)} y2={py(0)} stroke="rgba(255,255,255,0.18)" strokeDasharray="6 6" />
      <text x="12" y={py(0) - 8} fill="rgba(255,255,255,0.35)" fontSize="13" fontWeight="700">EQUATOR</text>

      {/* range rings around the HQ */}
      {[50, 110, 180].map((r, i) => (
        <circle key={r} cx={hx} cy={hy} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray={i ? '3 6' : undefined} />
      ))}

      {/* links */}
      {hubs.filter((h) => h !== hq).map((h, i) => {
        const x = px(h.lon), y = py(h.lat);
        const mx = (hx + x) / 2, my = Math.min(hy, y) - 150;
        const lit = selected === h.id || selected === hq.id;
        return (
          <motion.path key={h.id} d={`M${hx} ${hy} Q${mx} ${my} ${x} ${y}`} fill="none"
            stroke={lit ? '#FF6B00' : 'rgba(255,255,255,0.3)'} strokeWidth={lit ? 2.5 : 1.5} strokeLinecap="round"
            strokeDasharray="8 6" className={reduce ? undefined : 'flow-dash'}
            initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }} />
        );
      })}

      {hubs.map((h) => {
        const x = px(h.lon), y = py(h.lat), on = selected === h.id;
        return (
          <g key={h.id} role="button" tabIndex={0} aria-label={h.name} aria-pressed={on}
            onClick={() => onSelect(h.id)} onMouseEnter={() => onSelect(h.id)} onFocus={() => onSelect(h.id)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(h.id); }}
            className="cursor-pointer outline-none">
            <circle cx={x} cy={y} r="34" fill="transparent" />
            {on && !reduce && (
              <motion.circle cx={x} cy={y} r="12" fill="none" stroke="#FF6B00" strokeWidth="2" style={{ transformOrigin: `${x}px ${y}px` }}
                animate={{ scale: [1, 2.6], opacity: [0.8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }} />
            )}
            {h.hq
              ? <rect x={x - 11} y={y - 11} width="22" height="22" rx="4" fill={on ? '#FF6B00' : '#FFFFFF'} stroke="#101D36" strokeWidth="3" transform={`rotate(45 ${x} ${y})`} />
              : <circle cx={x} cy={y} r={on ? 11 : 9} fill={on ? '#FF6B00' : '#FFFFFF'} stroke="#101D36" strokeWidth="3" />}
            <text x={x} y={y + 40} textAnchor="middle" fill={on ? '#FFFFFF' : 'rgba(255,255,255,0.65)'} fontSize="24" fontWeight="800">{h.location.split(',')[0]}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- small: arrow badge linking two blocks (mission → vision) ---------- */

export const FlowArrow = ({ vertical = false }: { vertical?: boolean }) => {
  const reduce = useReducedMotion();
  return (
    <div className={`flex items-center justify-center ${vertical ? 'flex-col h-full' : ''}`} aria-hidden="true">
      <span className={vertical ? 'w-px flex-1 bg-card-grey' : 'h-px flex-1 bg-card-grey'} />
      <motion.span className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 my-3"
        animate={reduce ? undefined : { x: vertical ? [0, 4, 0] : 0, y: vertical ? 0 : [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
        <ArrowRight className={`w-6 h-6 ${vertical ? '' : 'rotate-90'}`} />
      </motion.span>
      <span className={vertical ? 'w-px flex-1 bg-card-grey' : 'h-px flex-1 bg-card-grey'} />
    </div>
  );
};
