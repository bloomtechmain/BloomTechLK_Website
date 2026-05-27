import { query } from '../db';

const migratePortfolio = async (): Promise<void> => {
  console.log('🚀 Running portfolio migration...');

  await query(`
    CREATE TABLE IF NOT EXISTS portfolio_projects (
      id               SERIAL PRIMARY KEY,
      title            VARCHAR(200)        NOT NULL,
      slug             VARCHAR(200) UNIQUE NOT NULL,
      category         VARCHAR(100)        NOT NULL,
      client_name      VARCHAR(150),
      client_industry  VARCHAR(100),
      short_desc       TEXT                NOT NULL,
      full_desc        TEXT,
      technologies     TEXT[]  DEFAULT '{}',
      image_url        VARCHAR(500),
      gallery_images   TEXT[]  DEFAULT '{}',
      project_url      VARCHAR(500),
      github_url       VARCHAR(500),
      status           VARCHAR(30) DEFAULT 'completed'
                         CHECK (status IN ('completed','in_progress','featured','coming_soon')),
      featured         BOOLEAN DEFAULT FALSE,
      duration_months  INTEGER,
      completion_date  DATE,
      key_outcomes     JSONB   DEFAULT '[]',
      display_order    INTEGER DEFAULT 0,
      is_active        BOOLEAN DEFAULT TRUE,
      created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  portfolio_projects table created');

  await query(`
    CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_projects(category);
    CREATE INDEX IF NOT EXISTS idx_portfolio_status   ON portfolio_projects(status);
    CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(featured);
    CREATE INDEX IF NOT EXISTS idx_portfolio_active   ON portfolio_projects(is_active);
  `);
  console.log('✅  indexes created');

  // Seed sample projects
  const projects = [
    {
      title: 'BloomAudit Enterprise Platform',
      slug: 'bloomaudit-enterprise-platform',
      category: 'Enterprise Software',
      client_name: 'Leading Commercial Bank',
      client_industry: 'Banking & Finance',
      short_desc: 'End-to-end IT audit and compliance management platform with real-time dashboards, automated regulatory reporting, and full audit trail capabilities.',
      full_desc: 'BloomAudit is a comprehensive enterprise compliance platform built for one of Sri Lanka\'s leading commercial banks. The system automates the entire audit lifecycle — from risk assessment scheduling through evidence collection, finding management, and regulatory reporting. It replaced a fragmented spreadsheet-based process, delivering a single source of truth for all compliance activities with role-based access for auditors, management, and regulators.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Nginx'],
      image_url: '/images/IT_Consolting.jpg',
      status: 'featured',
      featured: true,
      duration_months: 8,
      completion_date: '2025-11-01',
      key_outcomes: JSON.stringify([
        '85% reduction in manual audit time',
        'Real-time compliance dashboards across 12 departments',
        'Automated regulatory reporting for Central Bank of Sri Lanka',
        '100% audit trail accuracy with tamper-proof logging',
        'Zero compliance violations in first year of operation'
      ]),
      display_order: 1,
    },
    {
      title: 'AI-Powered Inventory & Demand Forecasting',
      slug: 'ai-inventory-demand-forecasting',
      category: 'AI & Machine Learning',
      client_name: 'Major Apparel Manufacturer',
      client_industry: 'Apparel & Manufacturing',
      short_desc: 'Machine learning–driven demand forecasting engine integrated with ERP, achieving 95% forecast accuracy and $2M annual savings through optimized procurement.',
      full_desc: 'A production-grade AI forecasting system built for one of Sri Lanka\'s largest apparel exporters. The solution integrates with their SAP ERP, ingesting 5 years of sales history, seasonal patterns, and external market signals to generate SKU-level demand forecasts up to 12 weeks out. A custom React dashboard gives planners full visibility into model confidence, anomaly alerts, and one-click procurement requisitions.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'React', 'AWS SageMaker', 'Apache Kafka'],
      image_url: '/images/Custom_AI_Development.jpg',
      status: 'featured',
      featured: true,
      duration_months: 10,
      completion_date: '2025-09-15',
      key_outcomes: JSON.stringify([
        '95% demand forecast accuracy across 2,400+ SKUs',
        '40% reduction in overstock and dead inventory',
        'USD 2M annual procurement savings',
        '60% faster procurement decision cycles',
        'Integrated with SAP ERP and supplier portals'
      ]),
      display_order: 2,
    },
    {
      title: 'Luxury Hotel Chain Management Platform',
      slug: 'hotel-chain-management-platform',
      category: 'Enterprise Software',
      client_name: 'Serenity Collection',
      client_industry: 'Tourism & Hospitality',
      short_desc: 'Unified property management system spanning 6 luxury hotels — centralized reservations, revenue management, guest loyalty, and real-time analytics.',
      full_desc: 'A bespoke Property Management System (PMS) deployed across six luxury properties in Sri Lanka and the Maldives. The platform unifies all hotel operations under one roof: front desk, housekeeping, F&B, revenue management, and a guest loyalty programme. A custom-built booking engine with dynamic pricing replaced third-party OTAs for direct bookings, significantly improving margin.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Socket.io', 'Tailwind CSS', 'PWA'],
      image_url: '/images/CRM_&_ERP.jpg',
      status: 'completed',
      featured: false,
      duration_months: 12,
      completion_date: '2025-06-30',
      key_outcomes: JSON.stringify([
        'Unified PMS across 6 properties in 2 countries',
        '30% increase in direct booking revenue',
        'Real-time revenue management with dynamic pricing',
        'Guest loyalty programme with 8,000+ active members',
        'Housekeeping efficiency improved by 45%'
      ]),
      display_order: 3,
    },
    {
      title: 'BloomSwift POS — Retail Chain Deployment',
      slug: 'bloomswift-pos-retail-chain',
      category: 'Enterprise Software',
      client_name: 'Island Retail Group',
      client_industry: 'Retail & FMCG',
      short_desc: 'Full-scale POS and inventory management system deployed across 35 retail branches, with offline-capable terminals and centralised reporting.',
      full_desc: 'BloomSwift POS was deployed for a 35-branch retail chain spanning the Western and Central provinces. The system runs on Electron-based terminals that operate fully offline and sync on reconnection. A central inventory engine provides real-time stock levels, automated low-stock alerts, and branch-to-branch transfer management. Integration with the client\'s existing accounting system (FinanceOne) was delivered via REST API.',
      technologies: ['React', 'Electron', 'Node.js', 'SQLite', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
      image_url: '/images/Asset_Life_cycle.png',
      status: 'completed',
      featured: false,
      duration_months: 6,
      completion_date: '2025-04-01',
      key_outcomes: JSON.stringify([
        '35 branches live with zero-downtime deployment',
        '99.9% terminal uptime including offline operation',
        '50% faster average transaction checkout time',
        'Centralised inventory visible across all branches in real-time',
        'Accounting integration eliminated manual reconciliation'
      ]),
      display_order: 4,
    },
    {
      title: 'Enterprise Cybersecurity Infrastructure Overhaul',
      slug: 'enterprise-cybersecurity-overhaul',
      category: 'IT Infrastructure',
      client_name: 'Financial Institution',
      client_industry: 'Banking & Finance',
      short_desc: 'Full Zero Trust security architecture deployment for a financial institution — EDR, perimeter hardening, SIEM, and SOC2 Type II compliance in 90 days.',
      full_desc: 'A comprehensive security transformation for a licensed financial institution. BloomTech\'s CISA-certified team conducted a full infrastructure audit, identified 47 critical gaps, and executed a phased remediation roadmap. The engagement delivered a Zero Trust network architecture, CrowdStrike EDR across 400+ endpoints, a Splunk-powered SOC with 24/7 alerting, and full SOC2 Type II evidence collection.',
      technologies: ['Cisco Firepower', 'CrowdStrike EDR', 'Splunk SIEM', 'Zero Trust', 'HashiCorp Vault', 'Palo Alto', 'FortiGate'],
      image_url: '/images/IT_Consolting.jpg',
      status: 'completed',
      featured: false,
      duration_months: 4,
      completion_date: '2025-07-15',
      key_outcomes: JSON.stringify([
        'Zero critical security incidents in 12 months post-deployment',
        'SOC2 Type II certification achieved',
        '100% endpoint protection across 400+ devices',
        '24/7 automated threat monitoring and response',
        'Reduced attack surface by 73% through network segmentation'
      ]),
      display_order: 5,
    },
    {
      title: 'Sri Lanka Tourism Mobile App & Portal',
      slug: 'sri-lanka-tourism-mobile-app',
      category: 'Web & Mobile',
      client_name: 'CeylonTrails',
      client_industry: 'Tourism & Travel',
      short_desc: 'Multilingual tourism platform (Sinhala, English, Tamil) with hotel discovery, experiences booking, local guides, and offline travel maps for Sri Lanka.',
      full_desc: 'CeylonTrails is a full-featured tourism super-app for Sri Lanka. The mobile application (iOS & Android) and complementary web portal offer hotel discovery and booking, curated experience packages, certified local guide connections, and interactive offline maps. Content is available in all three national languages. The platform integrates with 200+ hotels via BloomTech\'s aggregation API and Stripe for secure payments.',
      technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Stripe', 'Firebase', 'i18n'],
      image_url: '/images/digital-marketing.jpg',
      status: 'completed',
      featured: false,
      duration_months: 9,
      completion_date: '2025-03-01',
      key_outcomes: JSON.stringify([
        '10,000+ downloads in first month post-launch',
        '4.8-star average rating on App Store & Google Play',
        '200+ hotels and 150+ experiences integrated',
        'Full multilingual support: English, Sinhala, Tamil',
        'Offline map capability for low-connectivity areas'
      ]),
      display_order: 6,
    },
    {
      title: 'QR-Based Industrial Asset Tracking System',
      slug: 'qr-industrial-asset-tracking',
      category: 'Web & Mobile',
      client_name: 'Ceylon Industrial Holdings',
      client_industry: 'Manufacturing',
      short_desc: 'QR and NFC-based asset lifecycle tracking for 5,000+ industrial assets, integrating with maintenance scheduling and procurement workflows.',
      full_desc: 'A custom asset management platform built for a large manufacturing group. Each of the 5,000+ assets (machinery, tools, vehicles, IT equipment) was tagged with a unique QR code. Field staff use a mobile-first progressive web app to scan, inspect, and update assets in real time. The system integrates with maintenance scheduling, spare parts procurement, and insurance management workflows.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'QR Code API', 'PWA', 'Tailwind CSS', 'Barcode Scanner SDK'],
      image_url: '/images/Asset_Life_cycle.png',
      status: 'completed',
      featured: false,
      duration_months: 5,
      completion_date: '2025-02-14',
      key_outcomes: JSON.stringify([
        '5,000+ assets tracked across 3 factory locations',
        '70% reduction in asset loss and misplacement',
        'Maintenance compliance improved from 60% to 98%',
        'Real-time asset location and condition visibility',
        'Integrated with spare-parts procurement portal'
      ]),
      display_order: 7,
    },
    {
      title: 'Integrated Digital Growth Campaign',
      slug: 'integrated-digital-growth-campaign',
      category: 'Digital Marketing',
      client_name: 'Local E-Commerce Brand',
      client_industry: 'Retail E-Commerce',
      short_desc: 'Full-funnel digital marketing strategy combining technical SEO, AI-assisted content, paid media, and conversion-rate optimisation — targeting 5x ROAS.',
      full_desc: 'An ongoing digital marketing engagement for a growing Sri Lankan e-commerce brand. BloomTech\'s digital team executed a three-phase strategy: technical SEO overhaul (Core Web Vitals, schema markup, crawlability), AI-assisted content calendar (120+ articles, 50 landing pages), and full-funnel paid media management across Google and Meta. A custom analytics dashboard tracks all KPIs in real time.',
      technologies: ['Google Analytics 4', 'Google Ads', 'Meta Ads Manager', 'SEMrush', 'Ahrefs', 'WordPress', 'HotJar'],
      image_url: '/images/digital-marketing.jpg',
      status: 'in_progress',
      featured: false,
      duration_months: 12,
      completion_date: null,
      key_outcomes: JSON.stringify([
        '280% increase in organic search traffic (Month 6)',
        'Top 3 rankings achieved for 40+ target keywords',
        '45% lower cost-per-click vs. industry benchmark',
        '4.2x return on ad spend (ROAS) achieved',
        'Core Web Vitals passed on all 120+ pages'
      ]),
      display_order: 8,
    },
  ];

  for (const p of projects) {
    await query(
      `INSERT INTO portfolio_projects
        (title, slug, category, client_name, client_industry, short_desc, full_desc,
         technologies, image_url, status, featured, duration_months, completion_date,
         key_outcomes, display_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
       ON CONFLICT (slug) DO NOTHING`,
      [
        p.title, p.slug, p.category, p.client_name, p.client_industry,
        p.short_desc, p.full_desc, p.technologies, p.image_url,
        p.status, p.featured, p.duration_months, p.completion_date || null,
        p.key_outcomes, p.display_order,
      ]
    );
  }
  console.log('✅  seeded 8 portfolio projects');
  console.log('🎉 Portfolio migration complete');
};

migratePortfolio().catch(console.error).finally(() => process.exit());
