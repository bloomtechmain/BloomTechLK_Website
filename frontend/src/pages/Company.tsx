import { motion } from 'framer-motion';
import { Building2, Target, Eye, Users, Lightbulb, Code, Wrench, MapPin, Globe, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { NAVY, NAVY_RAISED, ORANGE, ORANGE_LIGHT, GREY, FONT_SANS, ORANGE_GRADIENT, NAVY_GRADIENT } from '../styles/designTokens';

const vp = { once: true, margin: '-80px' } as const;

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

  return (
    <div style={{ fontFamily: FONT_SANS }}>
      <SEO config={seoConfigs.company} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
              <p className="text-sm font-semibold tracking-wide inline-flex items-center gap-2" style={{ color: ORANGE_LIGHT }}>
                <Building2 className="w-4 h-4" /> About BloomTech.lk
              </p>
            </div>

            <h1 className="text-[2.75rem] md:text-[3.4rem] font-bold mb-6 leading-[1.08] tracking-tight text-white">
              Sri Lanka's trusted <span style={{ color: ORANGE }}>technology partner</span>
            </h1>

            <p className="text-lg text-white/72 mb-10 leading-relaxed max-w-2xl">
              Headquartered in Mawaramandiya, BloomTech.lk is built by Sri Lankans for Sri Lankan businesses — combining international expertise with genuine local knowledge to deliver technology that drives real, measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                to="/services/ai-machine-learning"
                className="px-8 py-4 text-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                style={{ background: ORANGE_GRADIENT }}
              >
                Explore Our Services <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="#mission"
                className="px-8 py-4 bg-white/[0.06] text-white border border-white/25 rounded-lg font-semibold text-[15px] hover:bg-white/[0.12] hover:border-white/40 transition-all flex items-center justify-center"
              >
                Our Mission
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08] border-t border-white/10 mt-16 pt-2"
          >
            {stats.map((stat, i) => (
              <div key={i} className={`px-4 py-8 text-center ${i >= 2 ? 'border-t border-white/[0.08] md:border-t-0' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-[2px] rounded-full" style={{ backgroundColor: ORANGE }} />
                  <span className="text-[11px] text-white/50 uppercase tracking-[0.1em]">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center">
                  <Target className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">Our Mission</h2>
              </div>
              <h3 className="text-3xl md:text-[2.25rem] font-bold mb-5 leading-[1.1] tracking-tight" style={{ color: NAVY }}>
                Accelerating Sri Lanka's digital transformation
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                To make enterprise-grade technology accessible to every Sri Lankan business — empowering local companies with AI-powered solutions, custom software, and world-class IT infrastructure. BloomTech.lk combines international expertise with deep local knowledge to deliver measurable value and sustainable digital growth for clients across the island.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">Our Vision</h2>
              </div>
              <h3 className="text-3xl md:text-[2.25rem] font-bold mb-5 leading-[1.1] tracking-tight" style={{ color: NAVY }}>
                Sri Lanka's most trusted technology company
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                To be the cornerstone of Sri Lanka's digital economy — driving innovation that enables local businesses to compete confidently on the world stage, while building a technology ecosystem that uplifts communities, creates skilled employment, and fuels national prosperity across the island.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The BloomTech Approach */}
      <section className="py-24" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Our Philosophy</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              How we deliver for Sri Lankan businesses
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Every engagement is built on three principles: deep technical mastery, genuine understanding of your business goals, and an unwavering focus on outcomes that matter to your bottom line and your people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h4 className="text-lg font-semibold mb-2.5" style={{ color: NAVY }}>{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>What We Deliver</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
              Comprehensive service offerings
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              A complete suite of technology services built around the real needs of Sri Lankan businesses — designed to maximise ROI and future-proof your organisation in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl border border-gray-200 p-7 md:p-8 hover:border-gray-300 hover:shadow-[0_1px_3px_rgba(16,29,54,0.04)] transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="w-11 h-11 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center shrink-0 font-bold text-sm" style={{ color: ORANGE }}>
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4" style={{ color: NAVY }}>
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ORANGE }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY_GRADIENT }}>
        <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: `linear-gradient(180deg, ${NAVY_RAISED}, transparent)`, opacity: 0.5 }} />

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>Our Team</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-4 text-white">
              Elite Sri Lankan technical talent
            </h2>
            <p className="text-white/60 leading-relaxed text-[15px]">
              BloomTech.lk attracts and retains Sri Lanka's best technology professionals — a team that combines local market insight with world-class technical credentials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                style={{ backgroundColor: NAVY_RAISED }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                  <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
                <p className="text-white/55 leading-relaxed text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Model */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>Where We Operate</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-5" style={{ color: NAVY }}>
              Rooted in Sri Lanka, reaching the world
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-3">
              Headquartered at <span className="font-semibold" style={{ color: NAVY }}>XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</span>, BloomTech.lk serves Sri Lankan businesses locally while supporting regional growth through our global hub network.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Our geographic presence enables local on-site support across Sri Lanka, combined with the capacity to deliver projects for the Sri Lankan diaspora and international market.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Hub Cards - Left Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {globalHubs.map((hub, index) => {
                const active = selectedHub.id === hub.id;
                return (
                  <motion.button
                    key={hub.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => setSelectedHub(hub)}
                    className={`text-left rounded-xl p-5 border transition-all ${
                      active
                        ? 'border-transparent shadow-[0_12px_28px_-12px_rgba(16,29,54,0.35)]'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-[0_1px_3px_rgba(16,29,54,0.04)]'
                    }`}
                    style={active ? { backgroundColor: NAVY } : undefined}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: active ? 'rgba(255,107,0,0.2)' : '#FFF4EC' }}>
                        <MapPin className="w-4 h-4" style={{ color: ORANGE }} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm mb-0.5 ${active ? 'text-white' : ''}`} style={!active ? { color: NAVY } : undefined}>
                          {hub.name}
                        </h4>
                        <p className={`text-xs ${active ? 'text-white/70' : 'text-gray-500'}`}>
                          {hub.location}
                        </p>
                      </div>
                    </div>
                    <p className={`text-xs leading-relaxed ${active ? 'text-white/70' : 'text-gray-500'}`}>
                      {hub.description}
                    </p>
                    <div className={`mt-3 pt-3 border-t ${active ? 'border-white/15' : 'border-gray-100'}`}>
                      <p className={`text-[11px] ${active ? 'text-white/55' : 'text-gray-400'}`}>
                        {hub.address}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Interactive Map - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[560px]"
            >
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)]">
                  <div className="p-5 flex items-center justify-between" style={{ backgroundColor: NAVY }}>
                    <div>
                      <h3 className="text-white font-semibold text-[15px] mb-0.5">{selectedHub.name}</h3>
                      <p className="text-white/60 text-sm">{selectedHub.location}</p>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white rounded-lg font-semibold text-xs hover:bg-gray-100 transition-all flex items-center gap-1.5 shrink-0"
                      style={{ color: NAVY }}
                    >
                      Open Maps
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <motion.div
                    key={selectedHub.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-[460px] bg-gray-100"
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
                </div>

                <div className="mt-4 rounded-lg p-4 border border-gray-200" style={{ backgroundColor: GREY }}>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4" style={{ color: ORANGE }} />
                    <p className="text-sm text-gray-600">
                      Click on any hub to view its location on the map
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ background: ORANGE_GRADIENT }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white mb-5 leading-[1.1] tracking-tight">
              Ready to grow with Sri Lanka's best tech team?
            </h2>
            <p className="text-lg text-white/90 mb-9 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how BloomTech.lk can empower your organisation with technology that's built for Sri Lanka and engineered for growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(16,29,54,0.5)] hover:shadow-[0_10px_26px_-8px_rgba(16,29,54,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                style={{ color: NAVY }}
              >
                Get in Touch <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/ai-machine-learning"
                className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
