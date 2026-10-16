import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

export interface FlowNode { icon: LucideIcon; label: string }

export interface StackTile {
  /** wording taken verbatim from the service description */
  label: string;
  icon: LucideIcon;
  /** three-node mini flow drawn on the detail card (icon + very short label) */
  flow: [FlowNode, FlowNode, FlowNode];
}

export interface StackLayer {
  title: string;
  desc: string;
  link: string;
  icon: LucideIcon;
  tiles: StackTile[];
}

interface Props {
  /** stacked rows, customer-facing first */
  layers: StackLayer[];
  /** cross-cutting service shown as a vertical pillar */
  pillar: StackLayer;
}

/* Small isometric cube — the block that sits on each card */
const IsoCube = ({ hot }: { hot: boolean }) => {
  const c = hot ? { top: '#2D4170', left: '#1B2B4D', right: '#101D36' } : { top: '#D5DCE8', left: '#B8C3D6', right: '#9AA8C0' };
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-hidden="true">
      <polygon points="12,2 22,7.5 12,13 2,7.5" fill={c.top} style={{ transition: 'fill 200ms' }} />
      <polygon points="2,7.5 12,13 12,23 2,17.5" fill={c.left} style={{ transition: 'fill 200ms' }} />
      <polygon points="22,7.5 12,13 12,23 22,17.5" fill={c.right} style={{ transition: 'fill 200ms' }} />
    </svg>
  );
};

/* Miniature of the layer diagram with the current row lit — a "you are here" locator */
const MiniStack = ({ rows, active }: { rows: number; active: number }) => (
  <svg viewBox="0 0 76 64" className="w-[76px] h-16 shrink-0" aria-hidden="true">
    {Array.from({ length: rows }).map((_, i) => (
      <rect key={i} x="0" y={i * (64 / rows)} width="54" height={64 / rows - 4} rx="3" fill={active === i ? '#101D36' : '#E2E6ED'} />
    ))}
    <rect x="58" y="0" width="18" height="60" rx="3" fill={active === rows ? '#101D36' : '#E2E6ED'} />
  </svg>
);

/* Flat three-node flow: idle = white nodes; lit = navy nodes, dashed links and a travelling packet */
const MiniFlow = ({ nodes, lit }: { nodes: [FlowNode, FlowNode, FlowNode]; lit: boolean }) => {
  const reduce = useReducedMotion();
  const animate = lit && !reduce;
  return (
    <div className="relative" aria-hidden="true">
      <svg viewBox="0 0 300 56" preserveAspectRatio="none" className="absolute inset-x-0 top-0 w-full h-14">
        {[0, 1].map((k) => {
          const x1 = 50 + k * 100 + 26, x2 = 150 + k * 100 - 26;
          return (
            <g key={k}>
              <line x1={x1} y1="28" x2={x2} y2="28" stroke={lit ? '#101D36' : '#C9D1DE'} strokeWidth="1.5"
                strokeDasharray={lit ? '4 4' : undefined} className={animate ? 'flow-dash' : undefined} vectorEffect="non-scaling-stroke" />
              {animate && (
                <circle r="3" fill="#FF6B00">
                  <animateMotion path={`M${x1},28 L${x2},28`} dur="1.4s" begin={`-${0.4 + k * 0.5}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
      </svg>
      <div className="relative grid grid-cols-3">
        {nodes.map(({ icon: Icon, label }, k) => (
          <span key={k} className="flex flex-col items-center">
            <span className="h-14 flex items-center">
              <span className={`w-11 h-11 rounded-md flex items-center justify-center transition-colors duration-200 ${lit ? 'bg-navy text-white' : 'bg-white text-navy-mid'}`}>
                <Icon className="w-5 h-5" />
              </span>
            </span>
            <span className={`mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-center leading-tight transition-colors ${lit ? 'text-navy' : 'text-gray-500'}`}>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const ServicesStack = ({ layers, pillar }: Props) => {
  const reduce = useReducedMotion();
  const all = [...layers, pillar];
  const pillarIdx = layers.length;
  const [active, setActiveRaw] = useState(layers.length - 1);
  const [hot, setHot] = useState(0);
  const layer = all[active];
  const isPillar = active === pillarIdx;

  const setActive = (i: number, tile = 0) => {
    setHot(tile);
    setActiveRaw(i);
  };

  const tile = (t: StackTile, k: number, li: number, dark: boolean) => {
    const on = active === li && hot === k;
    return (
      <button
        key={t.label}
        type="button"
        onMouseEnter={() => setActive(li, k)}
        onFocus={() => setActive(li, k)}
        onClick={() => setActive(li, k)}
        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors duration-200 ${
          on ? (dark ? 'bg-white text-navy' : 'bg-navy text-white') : dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-white text-navy hover:bg-white/70'
        }`}
      >
        <t.icon className={`w-4 h-4 shrink-0 ${on ? 'text-brand-orange' : dark ? 'text-white/60' : 'text-navy-mid'}`} />
        <span className="text-[13px] font-bold leading-tight first-letter:uppercase">{t.label}</span>
      </button>
    );
  };

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Diagram */}
      <div className="lg:col-span-6 min-w-0">
        <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label={`${layers.map((l) => l.title).join(', ')}, ${pillar.title}`}>
          {/* Flow spine: data moves up from the foundation */}
          <div className="relative w-6 shrink-0 hidden sm:block" aria-hidden="true">
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px bg-border-grey" />
            {!reduce && (
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-brand-orange"
                initial={{ bottom: '6%', opacity: 0 }}
                animate={{ bottom: ['6%', '90%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            {layers.map((l, i) => (
              <span key={l.title}
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-colors ${active === i ? 'bg-navy' : 'bg-border-grey'}`}
                style={{ top: `calc(${((i + 0.5) / layers.length) * 100}% - 6px)` }} />
            ))}
          </div>

          {/* Layer rows */}
          <div className="flex-1 min-w-0 flex flex-col gap-2.5">
            {layers.map((l, i) => {
              const on = active === i;
              return (
                <motion.div key={l.title}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.08 * (layers.length - i), ease: 'easeOut' }}
                  onMouseEnter={() => active !== i && setActive(i)}
                  className={`rounded-xl p-4 transition-colors duration-200 ${on ? 'bg-navy' : 'bg-grey-light'}`}
                >
                  <button type="button" onClick={() => setActive(i)} onFocus={() => setActive(i)}
                    className="flex items-baseline justify-between gap-3 w-full mb-3 text-left">
                    <span className={`text-sm font-extrabold ${on ? 'text-white' : 'text-navy'}`}>{l.title}</span>
                    <span className={`font-mono text-[10px] font-bold tracking-wider ${on ? 'text-brand-orange' : 'text-gray-400'}`}>L{layers.length - i}</span>
                  </button>
                  <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2 [&>*:last-child:nth-child(odd)]:col-span-2 2xl:[&>*:last-child:nth-child(odd)]:col-span-1">
                    {l.tiles.map((t, k) => tile(t, k, i, on))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cross-cutting pillar spans every layer */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            onMouseEnter={() => !isPillar && setActive(pillarIdx)}
            className={`w-full sm:w-[30%] sm:max-w-[180px] shrink-0 rounded-xl p-4 flex flex-col transition-colors duration-200 ${isPillar ? 'bg-navy' : 'bg-grey-light'}`}
          >
            <button type="button" onClick={() => setActive(pillarIdx)} onFocus={() => setActive(pillarIdx)} className="text-left mb-3">
              <pillar.icon className={`w-5 h-5 mb-2 ${isPillar ? 'text-white' : 'text-navy-mid'}`} />
              <span className={`block text-sm font-extrabold leading-tight ${isPillar ? 'text-white' : 'text-navy'}`}>{pillar.title}</span>
              <span className={`block font-mono text-[10px] font-bold tracking-wider mt-1 ${isPillar ? 'text-brand-orange' : 'text-gray-400'}`}>L1–L{layers.length}</span>
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {pillar.tiles.map((t, k) => tile(t, k, pillarIdx, isPillar))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:col-span-6 min-w-0 lg:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="flex items-start gap-6 mb-10">
              <MiniStack rows={layers.length} active={active} />
              <div className="min-w-0">
                <p className="font-mono text-xs font-bold text-brand-orange-dark mb-1.5 tracking-wider">
                  {isPillar ? `L1–L${layers.length}` : `L${layers.length - active}`}
                </p>
                <Link to={layer.link} className="group inline-flex items-start gap-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight group-hover:text-navy-mid transition-colors">{layer.title}</h3>
                  <ArrowUpRight className="w-6 h-6 mt-1 shrink-0 text-brand-orange-dark group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <p className="text-gray-700 mt-2 leading-relaxed">{layer.desc}</p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-5">
              {layer.tiles.map((t, k) => {
                const lit = hot === k;
                const wide = layer.tiles.length % 2 === 1 && k === layer.tiles.length - 1;
                return (
                  <motion.li key={t.label}
                    className={wide ? 'sm:col-span-2' : ''}
                    initial={reduce ? false : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + k * 0.09, ease: 'easeOut' }}>
                    <Link to={layer.link}
                      onMouseEnter={() => setHot(k)} onFocus={() => setHot(k)}
                      className={`group relative flex flex-col h-full rounded-xl p-5 transition-all duration-200 ${
                        lit ? 'bg-white -translate-x-1 -translate-y-1 shadow-[8px_8px_0_0_#101D36]' : 'bg-grey-light shadow-[5px_5px_0_0_#D5DAE3]'
                      }`}>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="flex items-center gap-2.5 min-w-0">
                          <IsoCube hot={lit} />
                          <span className="font-mono text-sm font-bold text-brand-orange-dark">{String(k + 1).padStart(2, '0')}</span>
                          <span className="text-base font-extrabold text-navy leading-snug first-letter:uppercase">{t.label}</span>
                        </span>
                        <ArrowUpRight className={`w-5 h-5 shrink-0 transition-colors ${lit ? 'text-brand-orange' : 'text-gray-300'}`} />
                      </div>
                      <div className={`mt-auto w-full ${wide ? 'max-w-[360px] mx-auto' : ''}`}>
                        <MiniFlow nodes={t.flow} lit={lit} />
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
