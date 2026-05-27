import { motion } from 'framer-motion';
import { Building2, Target, Eye, Users, Lightbulb, Code, Wrench, MapPin, Globe, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'The Engineers',
      description: 'Technical powerhouses focused on AI/MLOps, DevOps, Data Engineering, and QA Automation — ensuring every system we build is resilient, scalable, and ready for Sri Lanka\'s growth trajectory.',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: Wrench,
      title: 'The Specialists',
      description: 'Domain experts including BI Analysts, Network Engineers, Security Specialists, and Client Success Leads — ensuring our technology is fully adopted and continuously delivering value for Sri Lankan businesses.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { value: '2026', label: 'Founded in Sri Lanka' },
    { value: '50+', label: 'Local Clients Served' },
    { value: '3', label: 'Global Hubs' },
    { value: '99.9%', label: 'Client Satisfaction' }
  ];

  const globalHubs = [
    {
      id: 'sri-lanka',
      name: 'Sri Lanka Headquarters',
      location: 'Mawaramandiya, Western Province',
      address: 'XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka',
      description: 'Our home base — primary engineering team, client management, and full on-site support for Sri Lankan businesses',
      color: 'from-[#ff6b00] to-orange-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d80.0130!3d7.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWF3YXJhbWFuZGl5YStTcmkrTGFua2E!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk'
    },
    {
      id: 'uae',
      name: 'UAE Hub',
      location: 'Dubai, United Arab Emirates',
      address: 'New Mall Limited, Dragon Mart 2 - Dubai - United Arab Emirates',
      description: 'Middle East operations centre — serving Sri Lankan diaspora businesses and regional enterprise clients',
      color: 'from-blue-500 to-cyan-500',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0586!2d55.4028!3d25.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f8b8b8b8b8b%3A0x1234567890abcdef!2sDragon%20Mart%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae'
    },
    {
      id: 'singapore',
      name: 'Singapore Hub',
      location: 'Singapore',
      address: '21 Bukit Batok Cres, #09-79, Singapore 658065',
      description: 'Southeast Asia operations centre — ASEAN market development and regional technology partnerships',
      color: 'from-green-500 to-emerald-500',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7654!2d103.7504!3d1.3379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10f7c7c7c7c7%3A0x1234567890abcdef!2s21%20Bukit%20Batok%20Cres%2C%20Singapore%20658065!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg'
    }
  ];

  const [selectedHub, setSelectedHub] = useState(globalHubs[0]);

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.company} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#0c1a36] pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b00]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 text-[12px] font-bold tracking-[0.3em] text-white uppercase bg-[#ff6b00]/20 backdrop-blur-md border border-[#ff6b00]/30 rounded-full">
              <Building2 className="w-4 h-4" />
              About BloomTech.lk
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
              Sri Lanka's Trusted <br />
              <span className="text-[#ff6b00]">Technology Partner</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
              Headquartered in Mawaramandiya, BloomTech.lk is built by Sri Lankans for Sri Lankan businesses — combining international expertise with genuine local knowledge to deliver technology that drives real, measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/services/ai-machine-learning"
                className="px-10 py-5 bg-[#ff6b00] text-white rounded-2xl font-black text-base hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center gap-3 group"
              >
                Explore Our Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#mission"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-base hover:bg-white hover:text-[#0c1a36] transition-all"
              >
                Our Mission
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl md:text-5xl font-black text-[#ff6b00] mb-2">{stat.value}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-32 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-0 w-1.5 h-24 bg-gradient-to-b from-[#ff6b00] to-transparent rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#ff6b00]" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">Our Mission</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0c1a36] mb-6 leading-tight">
                Accelerating Sri Lanka's Digital Transformation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                To make enterprise-grade technology accessible to every Sri Lankan business — empowering local companies with AI-powered solutions, custom software, and world-class IT infrastructure. BloomTech.lk combines international expertise with deep local knowledge to deliver measurable value and sustainable digital growth for clients across the island.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-0 w-1.5 h-24 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">Our Vision</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0c1a36] mb-6 leading-tight">
                Sri Lanka's Most Trusted Technology Company
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                To be the cornerstone of Sri Lanka's digital economy — driving innovation that enables local businesses to compete confidently on the world stage, while building a technology ecosystem that uplifts communities, creates skilled employment, and fuels national prosperity across the island.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The BloomTech Approach */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              How We Deliver for Sri Lankan Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Every engagement is built on three principles: deep technical mastery, genuine understanding of your business goals, and an unwavering focus on outcomes that matter to your bottom line and your people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-orange-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-black text-[#0c1a36] mb-4">Technical Mastery</h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                Our certified consultants possess deep expertise across AI, cloud, infrastructure, and security — bringing world-class technical execution to every Sri Lankan engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-black text-[#0c1a36] mb-4">Local Business Acumen</h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                We understand Sri Lanka's industries, regulatory landscape, and business culture — aligning every technology solution to drive outcomes that matter in the local context.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-black text-[#0c1a36] mb-4">Outcome-Driven Delivery</h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                Every project is designed around clear KPIs — reduced costs, eliminated manual work, and competitive advantage — ensuring tangible ROI for Sri Lankan businesses of every size.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">What We Deliver</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Comprehensive Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              A complete suite of technology services built around the real needs of Sri Lankan businesses — designed to maximise ROI and future-proof your organisation in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex items-center gap-6 min-w-fit">
                    <span className="text-6xl font-black text-[#ff6b00]/20 group-hover:text-[#ff6b00]/40 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-1 h-20 bg-gradient-to-b from-[#ff6b00] to-transparent rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-[#0c1a36] mb-6 group-hover:text-[#ff6b00] transition-colors">
                      {service.title}
                    </h3>
                    <ul className="space-y-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
                          <ChevronRight className="w-5 h-5 text-[#ff6b00] mt-0.5 shrink-0" />
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
      <section className="py-32 px-6 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-[120px]"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Elite Sri Lankan Technical Talent
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              BloomTech.lk attracts and retains Sri Lanka's best technology professionals — a team that combines local market insight with world-class technical credentials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((expert, i) => {
              const Icon = expert.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${expert.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${expert.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4">{expert.title}</h4>
                    <p className="text-gray-300 leading-relaxed font-medium">{expert.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Delivery Model */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">Where We Operate</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Rooted in Sri Lanka, <br />Reaching the World
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4 max-w-4xl mx-auto">
              Headquartered at <span className="font-black text-[#0c1a36]">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</span>, BloomTech.lk serves Sri Lankan businesses locally while supporting regional growth through our global hub network.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto">
              Our geographic presence enables local on-site support across Sri Lanka, combined with the capacity to deliver projects for the Sri Lankan diaspora and international market.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Hub Cards - Left Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {globalHubs.map((hub, index) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedHub(hub)}
                  className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                    selectedHub.id === hub.id
                      ? 'bg-gradient-to-br ' + hub.color + ' border-transparent shadow-2xl'
                      : 'bg-gray-50 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      selectedHub.id === hub.id ? 'bg-white/20' : 'bg-white'
                    }`}>
                      <MapPin className={`w-5 h-5 ${
                        selectedHub.id === hub.id ? 'text-white' : 'text-[#ff6b00]'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-black mb-1 ${
                        selectedHub.id === hub.id ? 'text-white' : 'text-[#0c1a36]'
                      }`}>
                        {hub.name}
                      </h4>
                      <p className={`text-xs font-bold mb-2 ${
                        selectedHub.id === hub.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {hub.location}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm font-medium ${
                    selectedHub.id === hub.id ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {hub.description}
                  </p>
                  <div className={`mt-4 pt-4 border-t ${
                    selectedHub.id === hub.id ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    <p className={`text-xs font-medium ${
                      selectedHub.id === hub.id ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {hub.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Map - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[600px]"
            >
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-[#0c1a36] to-[#1a305c] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                  <div className="p-6 bg-gradient-to-r from-[#ff6b00] to-orange-600">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-black text-lg mb-1">{selectedHub.name}</h3>
                        <p className="text-white/80 text-sm font-medium">{selectedHub.location}</p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-[#ff6b00] rounded-xl font-black text-xs uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-2"
                      >
                        Open Maps
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <motion.div
                    key={selectedHub.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[500px] bg-gray-100"
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

                <div className="mt-6 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#ff6b00]" />
                    <p className="text-sm font-bold text-gray-600">
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
      <section className="py-24 px-6 bg-gradient-to-br from-[#0c1a36] to-[#ff6b00]">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Grow with Sri Lanka's Best Tech Team?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Let's discuss how BloomTech.lk can empower your organisation with technology that's built for Sri Lanka and engineered for growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-5 bg-white text-[#0c1a36] rounded-2xl font-black text-base hover:bg-gray-100 hover:shadow-2xl transition-all flex items-center gap-3"
              >
                Get in Touch <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-machine-learning"
                className="px-12 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl font-black text-base hover:bg-white/10 transition-all"
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
