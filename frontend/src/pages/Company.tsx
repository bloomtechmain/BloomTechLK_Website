import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Target, Eye, Users, Lightbulb, Code, Wrench, MapPin, Globe, Zap, ArrowUpRight, Briefcase, Brain, Network, Megaphone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import {
  PageHero, Section, Heading, BlockGrid, Explorer, PhotoBand, CtaBand, PrimaryButton, TextLink, StatsStrip, Hl, fade, GUTTER,
} from '../components/kit';
import { photos } from '../components/photos';

const Company = () => {
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
      description: 'Visionaries specialised in Solution, Cloud, Data, and Integration Architecture who design the digital blueprints for Sri Lankan business success — balancing local constraints with global best practices.',
    },
    {
      icon: Code,
      title: 'The Engineers',
      description: 'Technical powerhouses focused on AI/MLOps, DevOps, Data Engineering, and QA Automation — ensuring every system we build is resilient, scalable, and ready for Sri Lanka\'s growth trajectory.',
    },
    {
      icon: Wrench,
      title: 'The Specialists',
      description: 'Domain experts including BI Analysts, Network Engineers, Security Specialists, and Client Success Leads — ensuring our technology is fully adopted and continuously delivering value for Sri Lankan businesses.',
    }
  ];

  const stats = [
    { value: '2026', label: 'Founded in Sri Lanka' },
    { value: '50+', label: 'Local Clients Served' },
    { value: '3', label: 'Global Hubs' },
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
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d80.0130!3d7.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWF3YXJhbWFuZGl5YStTcmkrTGFua2E!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk'
    },
    {
      id: 'uae',
      name: 'UAE Hub',
      location: 'Dubai, United Arab Emirates',
      address: 'New Mall Limited, Dragon Mart 2 - Dubai - United Arab Emirates',
      description: 'Middle East operations centre — serving Sri Lankan diaspora businesses and regional enterprise clients',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0586!2d55.4028!3d25.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f8b8b8b8b8b%3A0x1234567890abcdef!2sDragon%20Mart%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae'
    },
    {
      id: 'singapore',
      name: 'Singapore Hub',
      location: 'Singapore',
      address: '21 Bukit Batok Cres, #09-79, Singapore 658065',
      description: 'Southeast Asia operations centre — ASEAN market development and regional technology partnerships',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7654!2d103.7504!3d1.3379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10f7c7c7c7c7%3A0x1234567890abcdef!2s21%20Bukit%20Batok%20Cres%2C%20Singapore%20658065!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg'
    }
  ];

  const [selectedHub, setSelectedHub] = useState(globalHubs[0]);

  // Presentation-only: an icon per service offering (same order as `services`)
  const serviceIcons = [Briefcase, Brain, Network, Megaphone, ShieldCheck];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.company} />

      {/* Hero Section */}
      <PageHero
        photo={photos.colomboLotus}
        eyebrow={<span className="inline-flex items-center gap-2"><Building2 className="w-4 h-4" /> About BloomTech.lk</span>}
        title={<>Sri Lanka's trusted <span className="block">technology partner</span></>}
        text="Headquartered in Mawaramandiya, BloomTech.lk is built by Sri Lankans for Sri Lankan businesses — combining international expertise with genuine local knowledge to deliver technology that drives real, measurable growth."
      >
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <PrimaryButton to="/services/ai-machine-learning">Explore Our Services</PrimaryButton>
          <TextLink href="#mission">Our Mission</TextLink>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className={GUTTER}>
          <StatsStrip stats={stats.map((s) => ({ value: s.value, label: s.label }))} />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <Section tone="white" id="mission">
        <BlockGrid
          cols={2}
          items={[
            {
              image: photos.team,
              icon: Target,
              tag: <h2 className="inline">Our Mission</h2>,
              title: <span className="text-2xl md:text-3xl block">Accelerating Sri Lanka's digital transformation</span>,
              desc: 'To make enterprise-grade technology accessible to every Sri Lankan business — empowering local companies with AI-powered solutions, custom software, and world-class IT infrastructure. BloomTech.lk combines international expertise with deep local knowledge to deliver measurable value and sustainable digital growth for clients across the island.',
            },
            {
              image: photos.colomboSkyline,
              icon: Eye,
              tag: <h2 className="inline">Our Vision</h2>,
              title: <span className="text-2xl md:text-3xl block">Sri Lanka's most trusted technology company</span>,
              desc: 'To be the cornerstone of Sri Lanka\'s digital economy — driving innovation that enables local businesses to compete confidently on the world stage, while building a technology ecosystem that uplifts communities, creates skilled employment, and fuels national prosperity across the island.',
            },
          ]}
        />
      </Section>

      {/* The BloomTech Approach */}
      <Section tone="grey">
        <Heading
          eyebrow="Our Philosophy"
          title="How we deliver for Sri Lankan businesses"
          image={photos.consultingTeam}
        >
          <p>
            Every engagement is built on three principles: deep technical mastery, genuine understanding of your business goals, and an unwavering focus on outcomes that matter to your bottom line and your people.
          </p>
        </Heading>
        <BlockGrid
          cols={3}
          items={approach.map(({ icon, title, desc }, i) => ({ icon, title, desc, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      <PhotoBand photo={photos.colomboRail} />

      {/* Service Offerings */}
      <Section tone="white">
        <Heading
          eyebrow="What We Deliver"
          title="Comprehensive service offerings"
          sub="A complete suite of technology services built around the real needs of Sri Lankan businesses — designed to maximise ROI and future-proof your organisation in a rapidly evolving digital landscape."
        />
        <Explorer
          items={services.map((service, i) => ({
            num: service.number,
            icon: serviceIcons[i],
            title: service.title,
            points: service.items,
          }))}
        />
      </Section>

      {/* Technical Expertise */}
      <Section tone="dark">
        <Heading
          light
          center
          eyebrow="Our Team"
          title="Elite Sri Lankan technical talent"
          sub="BloomTech.lk attracts and retains Sri Lanka's best technology professionals — a team that combines local market insight with world-class technical credentials."
        />
        <BlockGrid
          dark
          cols={3}
          items={expertise.map(({ icon, title, description }, i) => ({ icon, title, desc: description, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* Global Delivery Model */}
      <Section tone="white">
        <Heading
          eyebrow="Where We Operate"
          title="Rooted in Sri Lanka, reaching the world"
          className="mb-12 [&_.max-w-3xl]:max-w-4xl"
        >
          <p>
            Headquartered at <Hl>XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</Hl>, BloomTech.lk serves Sri Lankan businesses locally while supporting regional growth through our global hub network.
          </p>
          <p>
            Our geographic presence enables local on-site support across Sri Lanka, combined with the capacity to deliver projects for the Sri Lankan diaspora and international market.
          </p>
        </Heading>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Hub list - Left Side */}
          <ul className="lg:col-span-5 flex flex-col gap-2">
            {globalHubs.map((hub, index) => {
              const active = selectedHub.id === hub.id;
              return (
                <motion.li key={hub.id} {...fade(index * 0.08)}>
                  <button
                    type="button"
                    onClick={() => setSelectedHub(hub)}
                    onMouseEnter={() => setSelectedHub(hub)}
                    onFocus={() => setSelectedHub(hub)}
                    aria-pressed={active}
                    className={`w-full text-left rounded-xl p-5 transition-colors ${active ? 'bg-navy' : 'bg-grey-light hover:bg-grey-hover'}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-white text-navy' : 'bg-white text-navy-mid'}`}>
                        <MapPin className="w-4 h-4" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-extrabold leading-snug ${active ? 'text-white' : 'text-navy'}`}>{hub.name}</h4>
                        <p className={`font-mono text-[11px] font-bold uppercase tracking-wider mt-0.5 ${active ? 'text-brand-orange' : 'text-gray-500'}`}>{hub.location}</p>
                        <p className={`text-sm leading-relaxed mt-2.5 ${active ? 'text-white/70' : 'text-gray-600'}`}>{hub.description}</p>
                        <p className={`text-xs leading-relaxed mt-3 pt-3 border-t ${active ? 'border-white/10 text-white/55' : 'border-gray-200 text-gray-500'}`}>{hub.address}</p>
                      </div>
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* Interactive Map - Right Side */}
          <motion.div {...fade(0.1)} className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden bg-navy shadow-[8px_8px_0_0_#D5DAE3]">
              <div className="p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-white font-extrabold text-[15px] mb-0.5">{selectedHub.name}</h3>
                  <p className="text-white/60 text-sm">{selectedHub.location}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2.5 rounded-lg bg-white text-navy font-bold text-xs hover:bg-grey-light transition-colors flex items-center gap-1.5 shrink-0"
                >
                  Open Maps
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[460px] bg-grey-light"
                >
                  <iframe
                    src={selectedHub.mapUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full borderless-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${selectedHub.name}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-5 flex items-center gap-2.5 text-sm text-gray-600">
              <Globe className="w-4 h-4 text-navy-mid" />
              Click on any hub to view its location on the map
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <CtaBand
        title="Ready to grow with Sri Lanka's best tech team?"
        text="Let's discuss how BloomTech.lk can empower your organisation with technology that's built for Sri Lanka and engineered for growth."
        button="Get in Touch"
        to="/contact"
        secondary={<TextLink to="/services/ai-machine-learning">View Our Services</TextLink>}
      />

      <Footer />
    </div>
  );
};

export default Company;
