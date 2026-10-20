import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import type { Photo } from '../kit';

export interface Sector {
  name: string;
  desc: string;
  icon: LucideIcon;
  photo: Photo;
  /** phrases quoted verbatim from `desc` */
  items: string[];
}

export interface CapabilityFamily {
  label: string;
  /** for each sector (same order as `sectors`), the quoted item that puts it in this family, if any */
  hits: (string | null)[];
}

interface Props {
  sectors: Sector[];
  families: CapabilityFamily[];
}

const CYCLE_MS = 6000;

/**
 * Sector list on the left, the selected sector's photo + quoted capabilities on the
 * right, and a dot matrix underneath showing which capability families each sector
 * draws on. Cycles on its own until the visitor picks a sector.
 */
export const SectorExplorer = ({ sectors, families }: Props) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hoverFamily, setHoverFamily] = useState<number | null>(null);
  const sector = sectors[active];

  useEffect(() => {
    if (!auto || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % sectors.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, auto, reduce, sectors.length]);

  const pick = (i: number) => { setAuto(false); setActive(i); };

  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 [&>*]:min-w-0">
        {/* Sector list */}
        <div className="lg:col-span-4">
          <div role="tablist" aria-label="Sectors" className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 lg:border-t lg:border-border-grey">
            {sectors.map((s, i) => {
              const on = i === active;
              return (
                <button key={s.name} role="tab" aria-selected={on} onClick={() => pick(i)} onMouseEnter={() => pick(i)}
                  className={`group relative flex-shrink-0 flex items-center gap-4 text-left px-4 py-3 lg:px-0 lg:pl-5 lg:py-5 lg:border-b lg:border-border-grey rounded-md lg:rounded-none overflow-hidden transition-colors ${on ? 'bg-navy lg:bg-transparent' : 'bg-grey-light lg:bg-transparent'}`}>
                  {on && <motion.span layoutId="sector-bar" className="hidden lg:block absolute left-0 top-4 bottom-4 w-[3px] bg-brand-orange" />}
                  <span className={`text-xs font-bold w-5 flex-shrink-0 ${on ? 'text-brand-orange lg:text-brand-orange-dark' : 'text-gray-400'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={`text-base lg:text-xl font-extrabold whitespace-nowrap lg:whitespace-normal transition-colors ${on ? 'text-white lg:text-navy' : 'text-navy/55 group-hover:text-navy'}`}>{s.name}</span>
                  <s.icon className={`hidden lg:block w-5 h-5 ml-auto mr-1 flex-shrink-0 transition-colors ${on ? 'text-navy' : 'text-gray-300 group-hover:text-gray-400'}`} />
                  {/* time left before the next sector */}
                  {on && auto && !reduce && (
                    <motion.span key={`p${active}`} className="hidden lg:block absolute left-5 right-0 bottom-[-1px] h-0.5 bg-navy origin-left"
                      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: CYCLE_MS / 1000, ease: 'linear' }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected sector */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div key={sector.name} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 md:gap-10 items-start">
              {/* Photo with offset outline + orange block */}
              <div className="relative pr-5 pb-5">
                <div className="absolute right-0 bottom-0 top-6 left-6 border border-navy/20" aria-hidden="true" />
                <div className="absolute -left-2 -top-2 w-14 h-14 bg-brand-orange" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-grey-light">
                  <motion.img src={sector.photo.src} alt={sector.photo.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover"
                    initial={reduce ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: 'easeOut' }} />
                  <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded bg-white/95 px-3 py-1.5 text-xs font-extrabold text-navy">
                    <sector.icon className="w-3.5 h-3.5" />{String(active + 1).padStart(2, '0')} / {String(sectors.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-navy tracking-tight mb-4">{sector.name}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-7">{sector.desc}</p>
                <ul className="divide-y divide-border-grey border-y border-border-grey">
                  {sector.items.map((it, k) => (
                    <motion.li key={it} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + k * 0.07 }}
                      className="flex items-center gap-3 py-3 text-[15px] font-semibold text-navy first-letter:uppercase">
                      <Check className="w-4 h-4 text-brand-orange-dark flex-shrink-0" />
                      <span className="first-letter:uppercase">{it}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Capability matrix */}
      <div className="mt-16 pt-8 border-t border-border-grey">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
          <h3 className="text-lg font-extrabold text-navy">What each sector draws on</h3>
          <p className="text-sm text-gray-500">Click a sector to explore it · hover a square for detail</p>
        </div>
        <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse" onMouseLeave={() => setHoverFamily(null)}>
            <thead>
              <tr>
                <th className="w-[22%]" />
                {sectors.map((s, j) => (
                  <th key={s.name} scope="col" className="pb-3 px-1 align-bottom">
                    <button onClick={() => pick(j)} aria-pressed={j === active}
                      className={`w-full text-xs font-bold leading-tight transition-colors ${j === active ? 'text-navy' : 'text-gray-400 hover:text-navy'}`}>
                      <span className="block mb-0.5">{String(j + 1).padStart(2, '0')}</span>{s.name}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {families.map((f, i) => (
                <tr key={f.label} onMouseEnter={() => setHoverFamily(i)}>
                  <th scope="row" className={`text-left text-sm font-bold py-2.5 pr-4 border-t border-border-grey transition-colors ${hoverFamily === i ? 'text-brand-orange-dark' : 'text-navy'}`}>{f.label}</th>
                  {sectors.map((s, j) => {
                    const hit = f.hits[j];
                    const lit = j === active || hoverFamily === i;
                    return (
                      <td key={s.name} className={`border-t border-border-grey text-center py-2.5 transition-colors ${j === active ? 'bg-grey-light' : ''}`}>
                        {hit ? (
                          <span className="group/c relative inline-block align-middle">
                            <motion.span initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                              transition={{ delay: 0.04 * j + 0.05 * i, type: 'spring', stiffness: 400, damping: 20 }}
                              className={`block w-5 h-5 rounded-[4px] transition-colors ${j === active ? 'bg-brand-orange' : lit ? 'bg-navy' : 'bg-navy/70'}`}
                              role="img" aria-label={`${s.name}: ${hit}`} />
                            <span className={`pointer-events-none invisible group-hover/c:visible absolute z-20 bottom-full mb-2 w-max max-w-[200px] rounded-md bg-navy-dark px-3 py-2 text-left opacity-0 group-hover/c:opacity-100 transition-opacity ${j === sectors.length - 1 ? 'right-0' : j === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                              <span className="block text-sm font-extrabold text-white first-letter:uppercase">{hit}</span>
                              <span className="block text-[11px] text-white/60">{s.name}</span>
                            </span>
                          </span>
                        ) : (
                          <span className="inline-block w-5 h-5 rounded-[4px] align-middle ring-1 ring-inset ring-border-grey" role="img" aria-label={`${s.name}: none`} />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
