import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Target, Eye, Users, Lightbulb, Code, Wrench, MapPin, Globe, Phone, Zap, ArrowUpRight, Briefcase, Brain, Network, Megaphone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { PrimaryButton, TextLink, Eyebrow, Hl, fade, GUTTER } from '../components/kit';
import { photos } from '../components/photos';
import { BlueprintGrid, PrincipleVenn, ServiceFlow, TeamPipeline, HubNetwork, FlowArrow } from '../components/company/AboutDiagrams';

const Company = () => {
  const reduce = useReducedMotion();

  const services = [
    {
      number: '01',
      title: 'Enterprise Software for Sri Lankan Businesses',
      items: [
        'Custom CRM and ERP systems tailored to the unique workflows of Sri Lankan SMEs and corporates — eliminating spreadsheet dependency',
        'Business process automation integrating with local accounting systems, banking APIs, and government digital services',
        'Scalable architecture designed to grow from 5-person startups to 500-person enterprises without system replacement'
      ]
    },
    {
      number: '02',
      title: 'AI & Intelligent Automation',
      items: [
        'AI document processing for customs, banking, legal, and insurance sectors — turning paper-heavy workflows into structured digital data',
        'Machine learning models for demand forecasting, inventory optimisation, and predictive maintenance in Sri Lankan manufacturing and retail',
        'Conversational AI and chatbot development for Sri Lankan businesses serving both Sinhala and English-speaking customers'
      ]
    },
    {
      number: '03',
      title: 'IT Infrastructure & Network Engineering',
      items: [
        'Enterprise LAN/WAN, fibre optic, and managed Wi-Fi deployments for Sri Lankan offices, hotels, factories, and campuses',
        'Custom server design, NAS storage, and data centre fit-outs built for local data sovereignty and business continuity',
        'Cloud migration and hybrid infrastructure management with 24/7 monitoring and local on-site support response'
      ]
    },
    {
      number: '04',
      title: 'Digital Presence & Online Growth',
      items: [
        'SEO-optimised websites in both Sinhala and English — reaching Sri Lanka\'s growing smartphone-first internet audience',
        'Google Ads, Facebook, and Instagram campaign management targeting Sri Lankan demographics and regional audiences',
        'Custom web and mobile applications for the Sri Lankan consumer market — from e-commerce platforms to service booking apps'
      ]
    },
    {
      number: '05',
      title: 'Cybersecurity & Strategic Advisory',
      items: [
        'IT risk assessments and security audits aligned with CBSL, SEC, and international frameworks including ISO 27001 and NIST',
        'Zero Trust architecture implementation, EDR deployment, and comprehensive incident response planning for Sri Lankan organisations',
        'Fractional CTO and CISO services — giving fast-growing Sri Lankan companies executive-level technology leadership without the full-time cost'
      ]
    }
  ];

  const expertise = [
    {
      icon: Lightbulb,
      title: 'The Architects',
      stage: 'Design',
      shape: 'square' as const,
      description: 'Visionaries specialised in Solution, Cloud, Data, and Integration Architecture who design the digital blueprints for Sri Lankan business success — balancing local constraints with global best practices.',
    },
    {
      icon: Code,
      title: 'The Engineers',
      stage: 'Build',
      shape: 'hex' as const,
      description: 'Technical powerhouses focused on AI/MLOps, DevOps, Data Engineering, and QA Automation — ensuring every system we build is resilient, scalable, and ready for Sri Lanka\'s growth trajectory.',
    },
    {
      icon: Wrench,
      title: 'The Specialists',
      stage: 'Adopt',
      shape: 'circle' as const,
      description: 'Domain experts including BI Analysts, Network Engineers, Security Specialists, and Client Success Leads — ensuring our technology is fully adopted and continuously delivering value for Sri Lankan businesses.',
    }
  ];

  const stats = [
    { value: '2025', label: 'Founded in Sri Lanka' },
    { value: '50+', label: 'Local Clients Served' },
    { value: '2', label: 'Global Hubs' },
    { value: '99.9%', label: 'Client Satisfaction' }
  ];

  const approach = [
    {
      icon: Zap,
      title: 'Technical Mastery',
      desc: 'Our certified consultants possess deep expertise across AI, cloud, infrastructure, and security — bringing world-class technical execution to every Sri Lankan engagement.',
    },
    {
      icon: Users,
      title: 'Local Business Acumen',
      desc: 'We understand Sri Lanka\'s industries, regulatory landscape, and business culture — aligning every technology solution to drive outcomes that matter in the local context.',
    },
    {
      icon: Target,
      title: 'Outcome-Driven Delivery',
      desc: 'Every project is designed around clear KPIs — reduced costs, eliminated manual work, and competitive advantage — ensuring tangible ROI for Sri Lankan businesses of every size.',
    },
  ];

  const globalHubs = [
    {
      id: 'sri-lanka',
      name: 'Sri Lanka Headquarters',
      location: 'Mawaramandiya, Western Province',
      address: 'XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka',
      description: 'Our home base — primary engineering team, client management, and full on-site support for Sri Lankan businesses',
      website: undefined as string | undefined,
      phone: undefined as string | undefined,
      lon: 80.013, lat: 7.085, hq: true,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d80.0130!3d7.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWF3YXJhbWFuZGl5YStTcmkrTGFua2E!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk'
    },
    {
      id: 'usa',
      name: 'USA Hub',
      location: 'Austin, Texas, United States',
      address: '11801 Domain Blvd, Austin, TX',
      description: 'BloomTech USA — North America operations, run by the same team that works across both countries',
      website: 'bloomtechusa.com',
      phone: '+1 737 329 8158',
      lon: -97.72, lat: 30.40,
      mapUrl: 'https://maps.google.com/maps?q=11801%20Domain%20Blvd%2C%20Austin%2C%20TX&z=15&output=embed'
    }
  ];

  const [selectedHub, setSelectedHub] = useState(globalHubs[0]);
  const selectHub = (id: string) => setSelectedHub(globalHubs.find((h) => h.id === id) ?? globalHubs[0]);

  // Presentation-only: an icon per service offering (same order as `services`)
  const serviceIcons = [Briefcase, Brain, Network, Megaphone, ShieldCheck];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.company} />

      {/* Hero — blueprint grid, outline shapes, photo composite */}
      <section className="relative bg-navy overflow-hidden">
        <BlueprintGrid id="about-grid" />
        <div className="absolute -left-48 -bottom-48 w-[520px] h-[520px] rounded-full border border-white/[0.07]" aria-hidden="true" />
        <div className="absolute -left-24 -bottom-24 w-[300px] h-[300px] rounded-full border border-white/[0.07]" aria-hidden="true" />

        <div className={`relative ${GUTTER} pt-32 lg:pt-40 pb-16 lg:pb-24`}>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center [&>*]:min-w-0">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="lg:col-span-6">
              <p className="text-sm font-bold text-white/55 mb-5">About <span className="text-brand-orange">BloomTech.lk</span></p>
              <h1 className="text-4xl md:text-5xl xl:text-[64px] font-extrabold text-white leading-[1.04] tracking-tight mb-6">
                Sri Lanka's trusted <span className="block">technology <span className="relative inline-block">partner<span className="absolute left-0 right-0 -bottom-2 h-1.5 bg-brand-orange" aria-hidden="true" /></span></span>
              </h1>
              <p className="text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl">
                Headquartered in Mawaramandiya, BloomTech.lk is built by Sri Lankans for Sri Lankan businesses — combining international expertise with genuine local knowledge to deliver technology that drives real, measurable growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <PrimaryButton to="/services/ai-machine-learning">Explore Our Services</PrimaryButton>
                <TextLink href="#mission">Our Mission</TextLink>
              </div>

              <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 max-w-xl border-t border-white/15">
                {stats.map(({ value, label }) => (
                  <div key={label} className="pt-5 pr-4">
                    <dt className="sr-only">{label}</dt>
                    <dd className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{value}</dd>
                    <dd className="text-xs text-white/55 mt-1 leading-snug">{label}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6 relative pl-8 sm:pl-14 pb-10 sm:pb-14">
              <div className="absolute left-0 bottom-0 w-28 h-28 sm:w-40 sm:h-40 bg-brand-orange" aria-hidden="true" />
              <div className="absolute right-4 -top-6 w-20 h-20 border-2 border-white/15" aria-hidden="true" />
              <div className="absolute -right-2 top-1/3 w-10 h-10 rounded-full border-2 border-brand-orange/70" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-tl-[140px] rounded-br-[40px] aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] max-h-[560px] w-full">
                <img src={photos.colomboLotus.src} alt={photos.colomboLotus.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

              {/* floating hub card: HQ linked to the two regional hubs */}
              <div className="absolute left-0 sm:left-4 bottom-4 sm:bottom-8 w-[230px] rounded-xl bg-white p-4 shadow-2xl">
                <svg viewBox="0 0 200 64" className="w-full h-auto mb-3" aria-hidden="true">
                  <path d="M24 28 Q100 -14 172 44" fill="none" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5 4" className={reduce ? undefined : 'flow-dash'} />
                  <circle cx="24" cy="28" r="6" fill="#101D36" />
                  <rect x="164" y="36" width="16" height="16" rx="3" fill="#FF6B00" transform="rotate(45 172 44)" />
                </svg>
                <p className="flex items-baseline gap-2"><span className="text-2xl font-extrabold text-navy">{stats[2].value}</span><span className="text-sm font-bold text-navy">{stats[2].label}</span></p>
                <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-1"><MapPin className="w-3.5 h-3.5 text-brand-orange-dark" />{globalHubs[0].location}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission → Vision */}
      <section id="mission" className="bg-white py-20 lg:py-28 scroll-mt-24">
        <div className={GUTTER}>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] gap-y-2 items-stretch">
            {[
              {
                photo: photos.team, icon: Target, tag: 'Our Mission', shape: 'rounded-tl-[96px] rounded-br-2xl',
                title: 'Accelerating Sri Lanka\'s digital transformation',
                desc: 'To make enterprise-grade technology accessible to every Sri Lankan business — empowering local companies with AI-powered solutions, custom software, and world-class IT infrastructure. BloomTech.lk combines international expertise with deep local knowledge to deliver measurable value and sustainable digital growth for clients across the island.',
              },
              {
                photo: photos.colomboSkyline, icon: Eye, tag: 'Our Vision', shape: 'rounded-t-[200px] rounded-b-2xl',
                title: 'Sri Lanka\'s most trusted technology company',
                desc: 'To be the cornerstone of Sri Lanka\'s digital economy — driving innovation that enables local businesses to compete confidently on the world stage, while building a technology ecosystem that uplifts communities, creates skilled employment, and fuels national prosperity across the island.',
              },
            ].flatMap((b, i) => [
              ...(i === 1 ? [
                <div key="arrow-lg" className="hidden lg:block"><FlowArrow vertical /></div>,
                <div key="arrow-sm" className="lg:hidden h-20 py-2"><FlowArrow /></div>,
              ] : []),
              <motion.article key={b.tag} {...fade(i * 0.1)} className="flex flex-col">
                <div className={`relative overflow-hidden h-64 lg:h-72 ${b.shape}`}>
                  <img src={b.photo.src} alt={b.photo.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-navy">
                    <b.icon className="w-4 h-4 text-brand-orange-dark" />
                    <h2 className="inline">{b.tag}</h2>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy leading-tight mt-8 mb-4">{b.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{b.desc}</p>
              </motion.article>,
            ])}
          </div>
        </div>
      </section>

      {/* Philosophy — Venn of the three principles */}
      <section className="relative bg-grey-light py-20 lg:py-28 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full border-[40px] border-white/70" aria-hidden="true" />
        <div className={`relative ${GUTTER}`}>
          <motion.div {...fade()} className="max-w-3xl mb-14">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">How we deliver for Sri Lankan businesses</h2>
            <p className="text-lg mt-6 text-gray-700 leading-relaxed">
              Every engagement is built on three principles: deep technical mastery, genuine understanding of your business goals, and an unwavering focus on outcomes that matter to your bottom line and your people.
            </p>
          </motion.div>
          <PrincipleVenn items={approach} center="BloomTech.lk" />
        </div>
      </section>

      {/* Photo band, cut on a diagonal */}
      <div className="relative h-[220px] sm:h-[320px] lg:h-[380px] overflow-hidden bg-white">
        <img src={photos.colomboRail.src} alt={photos.colomboRail.alt} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0_0,100%_18%,100%_100%,0_82%)]" />
        <span className="absolute left-0 bottom-[18%] w-1/3 h-1.5 bg-brand-orange" aria-hidden="true" />
      </div>

      {/* Services — branching flow */}
      <section className="bg-white py-20 lg:py-28">
        <div className={GUTTER}>
          <motion.div {...fade()} className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 items-end">
            <div className="lg:col-span-6">
              <Eyebrow>What We Deliver</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">Comprehensive service offerings</h2>
            </div>
            <p className="lg:col-span-6 text-lg text-gray-600 leading-relaxed">
              A complete suite of technology services built around the real needs of Sri Lankan businesses — designed to maximise ROI and future-proof your organisation in a rapidly evolving digital landscape.
            </p>
          </motion.div>
          <ServiceFlow
            hub="BloomTech.lk"
            items={services.map((s, i) => ({ num: s.number, icon: serviceIcons[i], title: s.title, points: s.items }))}
          />
        </div>
      </section>

      {/* Team — design → build → adopt */}
      <section className="relative bg-navy-dark py-20 lg:py-28 overflow-hidden">
        <BlueprintGrid id="team-grid" />
        <div className={`relative ${GUTTER}`}>
          <motion.div {...fade()} className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow light center>Our Team</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">Elite Sri Lankan technical talent</h2>
            <p className="text-lg mt-4 text-white/65 leading-relaxed">
              BloomTech.lk attracts and retains Sri Lanka's best technology professionals — a team that combines local market insight with world-class technical credentials.
            </p>
          </motion.div>
          <TeamPipeline
            loop="continuously delivering value"
            roles={expertise.map(({ icon, title, description, stage, shape }) => ({ icon, title, desc: description, stage, shape }))}
          />
        </div>
      </section>

      {/* Where we operate — hub network + map */}
      <section className="bg-white py-20 lg:py-28">
        <div className={GUTTER}>
          <motion.div {...fade()} className="max-w-4xl mb-12">
            <Eyebrow>Where We Operate</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">Rooted in Sri Lanka, reaching the world</h2>
            <div className="text-lg mt-6 leading-relaxed space-y-4 text-gray-700 [&_.hl]:font-semibold [&_.hl]:text-navy">
              <p>
                Headquartered at <Hl>XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</Hl>, BloomTech.lk serves Sri Lankan businesses locally while supporting regional growth through our global hub network.
              </p>
              <p>
                Our geographic presence enables local on-site support across Sri Lanka, combined with the capacity to deliver projects for the Sri Lankan diaspora and international market.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch [&>*]:min-w-0">
            {/* network diagram + hub list */}
            <motion.div {...fade()} className="lg:col-span-7 relative rounded-2xl bg-navy overflow-hidden flex flex-col">
              <div className="p-4 sm:p-6">
                <HubNetwork hubs={globalHubs} selected={selectedHub.id} onSelect={selectHub} />
              </div>
              <ul className="mt-auto grid sm:grid-cols-2 border-t border-white/10">
                {globalHubs.map((hub) => {
                  const active = selectedHub.id === hub.id;
                  return (
                    <li key={hub.id} className="border-b sm:border-b-0 sm:border-l first:border-l-0 border-white/10">
                      <button type="button" onClick={() => setSelectedHub(hub)} onMouseEnter={() => setSelectedHub(hub)} onFocus={() => setSelectedHub(hub)} aria-pressed={active}
                        className={`relative w-full h-full text-left p-5 transition-colors ${active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'}`}>
                        {active && <motion.span layoutId="hub-tab" className="absolute left-0 right-0 top-0 h-[3px] bg-brand-orange" />}
                        <h4 className="font-extrabold text-white leading-snug">{hub.name}</h4>
                        <p className={`font-mono text-[11px] font-bold uppercase tracking-wider mt-1 ${active ? 'text-brand-orange' : 'text-white/45'}`}>{hub.location}</p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* selected hub detail + live map */}
            <motion.div {...fade(0.1)} className="lg:col-span-5 rounded-2xl bg-grey-light overflow-hidden flex flex-col">
              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-navy">{selectedHub.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{selectedHub.location}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-4 py-2.5 rounded-lg bg-navy text-white font-bold text-xs hover:bg-navy-mid transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    Open Maps
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">{selectedHub.description}</p>
                {(selectedHub.website || selectedHub.phone) && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm font-bold text-navy">
                    {selectedHub.website && (
                      <a href={`https://${selectedHub.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-orange-dark transition-colors">
                        <Globe className="w-4 h-4 text-brand-orange-dark" />{selectedHub.website}
                      </a>
                    )}
                    {selectedHub.phone && (
                      <a href={`tel:${selectedHub.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-orange-dark transition-colors">
                        <Phone className="w-4 h-4 text-brand-orange-dark" />{selectedHub.phone}
                      </a>
                    )}
                  </div>
                )}
                <p className="flex items-start gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-border-grey">
                  <MapPin className="w-4 h-4 text-brand-orange-dark shrink-0 mt-0.5" />{selectedHub.address}
                </p>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex-1 min-h-[300px] bg-grey-hover"
                >
                  <iframe
                    src={selectedHub.mapUrl}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full borderless-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${selectedHub.name}`}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <p className="mt-5 flex items-center gap-2.5 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-navy-mid" />
            Click on any hub to view its location on the map
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <BlueprintGrid id="cta-grid" />
        <div className="absolute -right-40 -bottom-40 w-[480px] h-[480px] rounded-full border border-white/[0.08]" aria-hidden="true" />
        <div className="absolute -right-10 -bottom-10 w-[220px] h-[220px] rounded-full bg-brand-orange" aria-hidden="true" />
        <div className="absolute right-[18%] top-12 w-16 h-16 border-2 border-white/15 rotate-12 hidden md:block" aria-hidden="true" />
        <div className={`relative ${GUTTER}`}>
          <motion.div {...fade()} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Ready to grow with Sri Lanka's best tech team?</h2>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl">
              Let's discuss how BloomTech.lk can empower your organisation with technology that's built for Sri Lanka and engineered for growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <PrimaryButton to="/contact">Get in Touch</PrimaryButton>
              <TextLink to="/services/ai-machine-learning">View Our Services</TextLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
