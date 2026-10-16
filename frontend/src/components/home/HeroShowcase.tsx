import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrimaryButton, TextLink, type Photo } from '../kit';

export interface HeroService {
  title: string;
  desc: string;
  link: string;
  photo: Photo;
}

const ADVANCE_MS = 6000;

/** Editorial hero: copy + numbered service selector on the left, full-bleed photo on the right. */
export const HeroShowcase = ({ services }: { services: HeroService[] }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = services[active];

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % services.length), ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce, services.length]);

  const photo = (
    <div className="relative w-full h-full overflow-hidden bg-navy-dark">
      {services.map((s, i) => (
        <img
          key={s.photo.src}
          src={s.photo.src}
          alt={i === active ? s.photo.alt : ''}
          aria-hidden={i !== active}
          loading={i === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transform: i === active && !reduce ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 900ms ease, transform 7s ease-out',
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 lg:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-lg"
          >
            <span className="font-mono text-sm font-bold text-brand-orange">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <Link to={current.link} className="group block mt-2">
              <span className="flex items-start gap-3 text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3 group-hover:text-white/90">
                {current.title}
                <ArrowRight className="w-6 h-6 mt-1.5 shrink-0 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="block text-white/80 leading-relaxed">{current.desc}</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section className="relative bg-navy overflow-hidden" onMouseLeave={() => setPaused(false)}>
      {/* Photo — full-bleed right half on desktop */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2" onMouseEnter={() => setPaused(true)}>
        {photo}
      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-12 pt-32 lg:pt-36 pb-16 lg:pb-14 lg:min-h-[100vh] lg:max-h-[1080px] flex flex-col justify-center">
        <div className="lg:w-1/2 lg:pr-16 xl:pr-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-orange" />
              Sri Lanka's Technology Partner
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-5 leading-[1.08] tracking-tight text-white">
              Technology built for
              <span className="block text-brand-orange">Sri Lankan businesses</span>
            </h1>
            <p className="text-white/75 text-lg xl:text-xl mb-8 leading-relaxed max-w-xl">
              AI, enterprise software, and custom IT infrastructure — designed around how Sri Lankan companies actually operate.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <PrimaryButton to="/services/ai-machine-learning">Explore Our Services</PrimaryButton>
              <TextLink to="/contact">Book a Free Consultation</TextLink>
            </div>
          </motion.div>

          {/* Photo — stacked on mobile/tablet */}
          <div className="lg:hidden mt-12 -mx-4 sm:-mx-8 h-[440px] sm:h-[520px]">{photo}</div>

          {/* Service selector */}
          <nav aria-label="Services" className="mt-10 lg:mt-12">
            <ul onMouseEnter={() => setPaused(true)} className="border-t border-white/10">
              {services.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.title} className="relative">
                    <Link
                      to={s.link}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => { setActive(i); setPaused(true); }}
                      aria-current={on ? 'true' : undefined}
                      className="group flex items-baseline gap-5 py-2.5 2xl:py-3.5"
                    >
                      <span className={`font-mono text-xs font-bold w-6 shrink-0 transition-colors ${on ? 'text-brand-orange' : 'text-white/30'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`flex-1 text-lg sm:text-xl 2xl:text-2xl font-extrabold tracking-tight transition-colors ${on ? 'text-white' : 'text-white/35 group-hover:text-white/70'}`}>
                        {s.title}
                      </span>
                      <ArrowUpRight className={`w-5 h-5 shrink-0 self-center transition-all ${on ? 'text-brand-orange opacity-100' : 'opacity-0'}`} />
                    </Link>
                    <span className="absolute left-11 right-0 bottom-0 h-px bg-white/10" />
                    {on && (
                      <motion.span
                        key={`${active}-${paused}`}
                        className="absolute left-11 right-0 bottom-0 h-px bg-brand-orange origin-left"
                        initial={{ scaleX: paused || reduce ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: paused || reduce ? 0 : ADVANCE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
