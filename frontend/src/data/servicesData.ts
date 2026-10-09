export interface ServiceItem {
  name: string;
  desc: string;
  slug: string;
  longDesc?: string;
  features?: string[];
  benefits?: string[];
  imageUrl?: string;
}

export interface MegaMenuColumn {
  title: string;
  items: ServiceItem[];
  secondarySection?: {
    title: string;
    items: ServiceItem[];
  };
}

export const megaMenuData: MegaMenuColumn[] = [
  {
    title: 'Consulting & Custom Software Solutions',
    items: [
      { 
        name: 'Professional IT Consulting', 
        desc: 'Strategic advisory and technical precision for global business excellence.',
        slug: 'professional-it-consulting',
        longDesc: 'In an era where technology is the primary driver of competitive advantage, BloomTech Corporation provides high-impact IT consulting and professional services designed to align your digital infrastructure with your long-term business goals. We don\'t just recommend technology; we engineer success.',
        features: [
          'Discovery & Assessment: Audit your tech stack and identify technical debt',
          'Strategic Roadmap: Design scalable blueprints for high-impact initiatives',
          'Execution & Integration: Implement custom solutions with seamless interoperability',
          'Continuous Optimization: Monitor and refine as your business evolves',
          'Digital Transformation Consulting',
          'Cloud & Infrastructure Services',
          'Data & Analytics Advisory',
          'IT Strategy & Governance (vCISO/vCTO Services)'
        ],
        benefits: [
          'Certified Expertise: CISA, AWS, Salesforce, and PMP certified consultants',
          'Industry Agility: Deep experience across Logistics, Finance, and Enterprise Tech',
          'Outcome-Based Delivery: Focus on KPIs that reduce downtime and lower TCO',
          'Strategic Technology Leadership without full-time overhead'
        ],
        imageUrl: '/images/IT_Consolting.jpg'
      },
      { 
        name: 'Custom CRM & ERP Solutions', 
        desc: 'Integrated enterprise planning and client lifecycle management.',
        slug: 'custom-crm-erp-solutions',
        longDesc: 'Our unified CRM and ERP systems are built from the ground up to integrate all facets of your operation—including sales pipelines, marketing funnels, supply chain tracking, human resources, and financial management into a single source of truth.',
        features: ['Lead & Sales Pipeline Tracking', 'Financial & HR Management', 'Supply Chain & Inventory Integration', 'Automated Marketing & Reporting'],
        benefits: ['Centralized Enterprise Data', 'improved Customer Retention', 'Streamlined Multi-departmental Workflows'],
        imageUrl: '/images/CRM_&_ERP.jpg'
      },
      { 
        name: 'Security & Data Protection', 
        desc: 'Shielding your IP from modern threats.',
        slug: 'security-data-protection',
        longDesc: 'Comprehensive cybersecurity frameworks designed to detect, prevent, and respond to cyber threats while ensuring compliance with global data protection regulations.',
        features: ['Next-Gen Firewalls', 'Zero Trust Network Architecture', 'Ransomware Protection', 'Employee Security Training'],
        benefits: ['Protection Against Data Breaches', 'Regulatory Compliance', 'Safeguarded Corporate Reputation'],
        imageUrl: '/images/security-hero.png'
      },
    ]
  },
  {
    title: 'Suite of Applications',
    items: [
      {
        name: 'BloomAudit',
        desc: 'Comprehensive IT audit and compliance management platform.',
        slug: 'bloomaudit',
        longDesc: 'BloomAudit is a powerful audit and compliance management solution designed to help organizations track, assess, and report on their IT infrastructure and business processes with ease and precision.',
        features: ['Automated Compliance Reporting', 'Risk Assessment Dashboards', 'Real-Time Audit Trails', 'Regulatory Framework Mapping'],
        benefits: ['Streamlined Audit Processes', 'Reduced Compliance Risk', 'Actionable Insights & Reporting'],
        imageUrl: '/images/av-hero.png'
      },
      {
        name: 'BloomLTO',
        desc: 'Searchable LTO tape archive software — archive, index, restore.',
        slug: 'bloomlto',
        longDesc: 'BloomLTO indexes every file the moment it\'s archived to LTO tape — name, path, size, and tape barcode — so restoring a file means searching a catalog, not guessing which cartridge it\'s on.',
        features: ['Searchable Catalog', 'Scheduled Archiving', 'Verification & Duplication', 'Restore Queue & Audit Log'],
        benefits: ['Instant File Lookup Across Libraries', 'Media-Loss Protection', 'Open LTFS — No Vendor Lock-In'],
        imageUrl: '/images/dc-hero.png'
      },
      {
        name: 'BloomSwift POS',
        desc: 'Fast, intuitive point-of-sale for modern retail and hospitality.',
        slug: 'bloomswift-pos',
        longDesc: 'BloomSwift POS is a sleek and powerful point-of-sale system built for speed and simplicity. Manage sales, inventory, and customer data from one unified platform — whether you operate a single outlet or a multi-location enterprise.',
        features: ['Multi-Location Management', 'Real-Time Inventory Sync', 'Customer Loyalty Programs', 'Advanced Sales Analytics'],
        benefits: ['Faster Checkout Experience', 'Centralized Business Visibility', 'Scalable Across Multiple Sites'],
        imageUrl: '/images/av-hero.png'
      },
      {
        name: 'Medical System',
        desc: 'Coming soon.',
        slug: 'medical-system',
      },
    ],
    secondarySection: {
      title: 'Custom Software Design',
      items: [
        {
          name: 'Custom QR and NFC Based Applications',
          desc: 'Contactless solutions for smart interactions and data capture.',
          slug: 'custom-qr-nfc-applications',
          longDesc: 'We design and build bespoke QR code and NFC-powered applications for asset tracking, contactless payments, smart marketing campaigns, access control, and customer engagement — tailored to your specific operational needs.',
          features: ['Custom QR Code Generation & Management', 'NFC Tag Programming & Integration', 'Asset & Inventory Tracking', 'Contactless Check-In & Access Control'],
          benefits: ['Frictionless User Experience', 'Reduced Manual Data Entry', 'Versatile Cross-Industry Applications'],
          imageUrl: '/images/graphic-design.jpg'
        },
        {
          name: 'Custom Mobile & Web Applications',
          desc: 'Native mobile apps and bespoke web platforms built for performance.',
          slug: 'custom-mobile-web-applications',
          longDesc: 'We design and develop bespoke mobile and web applications — from consumer-facing iOS/Android apps to client portals, dashboards, and internal workflow tools. Built with React Native and Flutter for cross-platform mobile excellence, and React/Next.js for scalable, secure web platforms.',
          features: ['iOS & Android Development (React Native & Flutter)', 'React & Next.js Web Applications', 'Custom API & Database Design', 'Role-Based Access Control & Real-Time Dashboards'],
          benefits: ['Single Codebase, Every Platform', 'Eliminates Manual Workflow Bottlenecks', 'Fully Owned, Scalable, and Customizable'],
          imageUrl: '/images/graphic-design.jpg'
        },
      ]
    }
  },
  {
    title: 'Online Presence',
    items: [
      {
        name: 'Search Engine Optimization',
        desc: 'Dominate search rankings and drive organic growth.',
        slug: 'search-engine-optimization',
        longDesc: 'Our data-driven SEO strategies combine technical site audits, targeted keyword research, and authoritative content marketing to boost your visibility, attract qualified traffic, and deliver sustainable organic growth.',
        features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'On-Page & Off-Page Optimization', 'Performance Tracking & Reporting'],
        benefits: ['Higher Search Engine Rankings', 'Increased Qualified Organic Traffic', 'Long-Term Brand Authority'],
        imageUrl: '/images/digital-marketing.jpg'
      },
      {
        name: 'Custom Website Design',
        desc: 'Stunning, high-performance digital experiences.',
        slug: 'custom-websites-design',
        longDesc: 'We create bespoke web experiences that combine elite design aesthetics with technical excellence. From conversion-optimized landing pages to complex multi-layered platforms, we build to impress.',
        features: ['UI/UX Design Strategy', 'Performance (Core Web Vitals) Optimization', 'Responsive & Adaptive Layouts', 'SEO-First Architecture'],
        benefits: ['Premium Brand Image', 'Superior User Engagement', 'High Conversion Rates'],
        imageUrl: '/images/graphic-design.jpg'
      },
      {
        name: 'Online Marketing Services',
        desc: 'Empowering your brand through data-driven growth.',
        slug: 'online-marketing-services',
        longDesc: 'Data-driven digital marketing campaigns encompassing SEO, SEM, and social media management to maximize your online visibility and lead generation.',
        features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Campaigns (SEM)', 'Social Media Management', 'Conversion Rate Optimization'],
        benefits: ['Increased Qualified Leads', 'Higher Brand Visibility', 'Measurable ROI on Marketing Spend'],
        imageUrl: '/images/digital-marketing.jpg'
      },
    ]
  },
  {
    title: 'AI Development',
    items: [
      { 
        name: 'AI & Machine Learning (ML)', 
        desc: 'Agentic intelligence and domain-specific precision.',
        slug: 'ai-machine-learning',
        longDesc: 'In 2026, general-purpose AI is a commodity, but Custom AI is a competitive advantage. At BloomTech Corporation, we don\'t just "plug in" chatbots; we architect Agentic AI and domain-specific models designed to live within your unique enterprise ecosystem. Our mission is to help you transition from experimental AI pilots to production-grade intelligence that drives measurable ROI and automates complex, multi-step business workflows.',
        features: [
          'Agentic AI & Autonomous Workflows: Multi-system orchestration and proactive task initiation',
          'Domain-Specific Model Tuning: RAG, Fine-tuning, and Context Engineering',
          'Multi-Modal Intelligence: Vision AI, Audio Analysis, and Fusion Systems',
          'AI Governance Framework: HITL, Model Observability, Bias Testing',
          'Transformer Architecture Implementation: Latest 2026 breakthroughs',
          'Security-First Deployment: On-Premise, Hybrid, or Private Cloud options'
        ],
        benefits: [
          'Proprietary Data Isolation - Your data never leaves your control',
          'Deep Legacy System Integration - Not just API access',
          'Complete IP Ownership - You own the logic layer',
          'Compounding Strategic ROI - Long-term competitive advantage'
        ],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'AI Custom Development for Automation', 
        desc: 'Smart agent orchestration for your workflows.',
        slug: 'ai-custom-development-automation',
        longDesc: 'Custom-built artificial intelligence agents and automation tools designed specifically to streamline your unique business workflows, reduce manual data entry, and orchestrate complex tasks seamlessly.',
        features: ['Intelligent Robotic Process Automation', 'Custom AI Agents', 'Workflow Orchestration', '24/7 Automated Operations'],
        benefits: ['Significant Cost Reduction', 'Elimination of Human Error', 'Scalable Operations'],
        imageUrl: '/images/Custom_AI_Development.jpg'
      },
    ]
  }
];

export const getAllServices = (): ServiceItem[] => {
  return megaMenuData.flatMap(column => {
    const mainItems = column.items;
    const secondaryItems = column.secondarySection?.items || [];
    return [...mainItems, ...secondaryItems];
  });
};

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return getAllServices().find(service => service.slug === slug);
};
