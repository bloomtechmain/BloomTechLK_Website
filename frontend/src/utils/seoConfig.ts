// SEO Configuration for all pages
// This centralizes meta tags, Open Graph data, and schema markup

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: any;
}

const baseUrl = 'https://www.bloomtech.lk';
const defaultOGImage = `${baseUrl}/bloomtech-logo.png`;

// Social Media URLs
export const socialMedia = {
  facebook: 'https://www.facebook.com/share/1GvpBckS4Y/',
  twitter: 'https://x.com/BloomtechU8895',
  linkedin: 'https://linkedin.com/company/bloomtech-lk',
  instagram: 'https://www.instagram.com/bloomtech.lk?igsh=dWJvNjhiOGFiejlv',
  whatsapp: '17373298158', // Format for WhatsApp link — update with Sri Lankan number when available
  phone: '+94 77 916 0704',
  email: 'info@bloomtech.lk'
};

// Organization Schema (used globally)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BloomTech.lk',
  alternateName: 'BloomTech Corporation',
  url: baseUrl,
  logo: `${baseUrl}/bloomtech-logo.png`,
  description: 'Sri Lanka\'s leading technology company — delivering AI solutions, enterprise software, custom IT infrastructure, and digital transformation services for businesses across the island.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'XXPG+VXF, Makola - Udupila Rd',
    addressLocality: 'Mawaramandiya',
    addressRegion: 'Western Province',
    postalCode: '',
    addressCountry: 'LK'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: socialMedia.phone,
    contactType: 'Customer Service',
    areaServed: ['LK', 'AE', 'SG'],
    availableLanguage: ['English', 'Sinhala']
  },
  sameAs: [
    socialMedia.facebook,
    socialMedia.twitter,
    socialMedia.linkedin,
    socialMedia.instagram
  ]
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BloomTech.lk',
  image: `${baseUrl}/bloomtech-logo.png`,
  '@id': baseUrl,
  url: baseUrl,
  telephone: socialMedia.phone,
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'XXPG+VXF, Makola - Udupila Rd',
    addressLocality: 'Mawaramandiya',
    addressRegion: 'Western Province',
    postalCode: '',
    addressCountry: 'LK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.0850,
    longitude: 80.0130
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  sameAs: [
    socialMedia.facebook,
    socialMedia.twitter,
    socialMedia.linkedin,
    socialMedia.instagram
  ]
};

// SEO Configurations for each page
export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'BloomTech.lk — Sri Lanka\'s Premier Technology Partner | AI, Software & IT Infrastructure',
    description: 'BloomTech.lk is Sri Lanka\'s leading technology company delivering AI solutions, custom enterprise software, and IT infrastructure for businesses across the island — from Colombo to Kandy. Sinhala & English support.',
    keywords: 'IT company Sri Lanka, AI solutions Sri Lanka, software development Sri Lanka, enterprise software, custom CRM Sri Lanka, IT infrastructure Sri Lanka, digital transformation Sri Lanka, technology company Sri Lanka, BloomTech, bloomtech.lk',
    canonical: `${baseUrl}/`,
    ogImage: defaultOGImage,
    ogType: 'website',
    schema: localBusinessSchema
  },
  company: {
    title: 'About BloomTech.lk — Sri Lanka\'s Technology Partner | Our Mission & Team',
    description: 'Learn about BloomTech.lk — Sri Lanka\'s trusted technology partner headquartered in Mawaramandiya. CISA-certified experts delivering AI, enterprise software, and IT infrastructure for Sri Lankan businesses.',
    keywords: 'BloomTech Sri Lanka, IT company Mawaramandiya, technology company Western Province, CISA certified Sri Lanka, AI experts Sri Lanka, enterprise IT Sri Lanka, about BloomTech.lk',
    canonical: `${baseUrl}/company`,
    ogImage: defaultOGImage,
    ogType: 'website'
  },
  contact: {
    title: 'Contact BloomTech.lk — Talk to a Sri Lankan Tech Expert Today',
    description: 'Contact BloomTech.lk for AI solutions, custom software, and IT infrastructure services. Headquartered in Mawaramandiya, Sri Lanka. Full Sinhala and English support. Get a free consultation today.',
    keywords: 'contact BloomTech Sri Lanka, IT consultation Sri Lanka, tech support Sri Lanka, software quote Sri Lanka, AI consultation Sri Lanka, Mawaramandiya technology company',
    canonical: `${baseUrl}/contact`,
    ogImage: defaultOGImage,
    ogType: 'website',
    schema: localBusinessSchema
  },
  login: {
    title: 'Client Login — BloomTech.lk Portal',
    description: 'Access your BloomTech.lk client portal to manage projects, submit service requests, and view your IT solutions.',
    canonical: `${baseUrl}/login`,
    ogImage: defaultOGImage
  },
  register: {
    title: 'Register — Create Your BloomTech.lk Account',
    description: 'Create your BloomTech.lk account to access our client portal, request technology services, and manage your IT projects across Sri Lanka.',
    canonical: `${baseUrl}/register`,
    ogImage: defaultOGImage
  },
  dashboard: {
    title: 'Dashboard — BloomTech.lk Client Portal',
    description: 'Manage your BloomTech.lk services, track projects, and access expert support through your personalised client dashboard.',
    canonical: `${baseUrl}/dashboard`,
    ogImage: defaultOGImage
  },
  portfolio: {
    title: 'Project Portfolio — BloomTech.lk | Real Solutions. Measurable Outcomes.',
    description: 'Explore BloomTech.lk\'s project portfolio — AI forecasting engines, enterprise PMS platforms, cybersecurity overhauls, and more. Real technology solutions delivered across Sri Lanka.',
    keywords: 'BloomTech portfolio, IT projects Sri Lanka, AI projects Sri Lanka, enterprise software portfolio, technology case studies Sri Lanka, software development projects',
    canonical: `${baseUrl}/portfolio`,
    ogImage: defaultOGImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'BloomTech.lk Project Portfolio',
      description: 'Technology projects delivered by BloomTech.lk across Sri Lanka — AI, enterprise software, cybersecurity, and digital transformation.',
      url: `${baseUrl}/portfolio`,
      publisher: organizationSchema,
    }
  }
};

// Service-specific SEO configurations
export const serviceSEO: Record<string, SEOConfig> = {
  'ai-machine-learning': {
    title: 'AI Machine Learning Solutions - Custom AI Development - BloomTech.lk',
    description: 'Enterprise AI machine learning solutions and custom AI development. Machine learning services include custom AI agents, on-premise AI hosting, document intelligence, and AI machine learning automation for business operations.',
    keywords: 'AI machine learning, machine learning, custom AI, AI machine, custom AI development, machine learning solutions, AI agents, on-premise AI, AI automation',
    canonical: `${baseUrl}/services/ai-machine-learning`,
    ogImage: `${baseUrl}/images/Custom_AI_Development.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'AI & Machine Learning Solutions',
      provider: organizationSchema,
      areaServed: 'US',
      description: 'Custom AI development, machine learning solutions, and intelligent automation for enterprise businesses.'
    }
  },
  'ai-custom-development-automation': {
    title: 'AI Custom Development & Automation Services - BloomTech.lk',
    description: 'Bespoke AI development for business automation. Custom intelligent agents, workflow automation, and AI-powered process optimization to multiply your workforce effectiveness.',
    keywords: 'AI automation, custom AI development, intelligent agents, business automation, workflow optimization',
    canonical: `${baseUrl}/services/ai-custom-development-automation`,
    ogImage: `${baseUrl}/images/Custom_AI_Development.jpg`
  },
  'custom-ai-hardware': {
    title: 'Custom AI Hardware & High-Performance Computing - BloomTech.lk',
    description: 'Purpose-built AI hardware solutions. High-density GPU servers, custom workstations for machine learning, and on-premise AI infrastructure for secure, high-performance computing.',
    keywords: 'AI hardware, GPU servers, machine learning hardware, custom AI workstations, high-performance computing',
    canonical: `${baseUrl}/services/custom-ai-hardware`,
    ogImage: `${baseUrl}/images/AI_Hardware.jpg`
  },
  'custom-crm-erp-solutions': {
    title: 'Custom CRM & ERP Solutions - BloomTech.lk',
    description: 'Bespoke CRM and ERP platforms for unified business operations. Custom workflow automation, data integration, and single source of truth for enterprise resource planning.',
    keywords: 'custom CRM, custom ERP, business automation, workflow automation, enterprise software',
    canonical: `${baseUrl}/services/custom-crm-erp-solutions`,
    ogImage: `${baseUrl}/images/CRM_&_ERP.jpg`
  },
  'asset-lifecycle-management': {
    title: 'IT Asset Lifecycle Management Services - BloomTech.lk',
    description: 'Strategic IT asset management from procurement to certified destruction. Complete lifecycle control, compliance tracking, and IT investment optimization.',
    keywords: 'asset lifecycle management, IT asset management, procurement, IT compliance, asset tracking',
    canonical: `${baseUrl}/services/asset-lifecycle-management`,
    ogImage: `${baseUrl}/images/Asset_Life_cycle.png`
  },
  'professional-it-consulting': {
    title: 'Professional IT Consulting & Strategic Advisory - BloomTech.lk',
    description: 'CISA-certified IT consulting services. Strategic advisory, IT governance, risk management, fractional CTO/CISO services, and compliance consulting.',
    keywords: 'IT consulting, CISA certified, IT governance, risk management, fractional CTO, CISO services',
    canonical: `${baseUrl}/services/professional-it-consulting`,
    ogImage: `${baseUrl}/images/IT_Consolting.jpg`
  },
  'security-data-protection': {
    title: 'Cybersecurity & Data Protection Services - BloomTech.lk',
    description: 'Multi-layered security architecture and data protection. Zero Trust security, EDR implementation, perimeter hardening, and compliance with SOC2, HIPAA, PCI-DSS, and NIST.',
    keywords: 'cybersecurity, data protection, Zero Trust, EDR, SOC2, HIPAA, PCI-DSS, security consulting',
    canonical: `${baseUrl}/services/security-data-protection`,
    ogImage: `${baseUrl}/images/IT_Consolting.jpg`
  },
  'bloomaudit': {
    title: 'BloomAudit - IT Audit & Compliance Management - BloomTech.lk',
    description: 'BloomAudit helps organizations track, assess, and report on IT infrastructure and business processes with automated compliance reporting and real-time audit trails.',
    keywords: 'IT audit, compliance management, audit software, risk assessment, regulatory compliance',
    canonical: `${baseUrl}/services/bloomaudit`,
    ogImage: defaultOGImage
  },
  'bloomgo': {
    title: 'BloomGo - Field Service & Mobile Workforce Management - BloomTech.lk',
    description: 'BloomGo empowers field teams with job scheduling, route optimization, on-site reporting, and real-time communication for maximum productivity.',
    keywords: 'field service management, mobile workforce, job scheduling, route optimization',
    canonical: `${baseUrl}/services/bloomgo`,
    ogImage: defaultOGImage
  },
  'bloomswift-pos': {
    title: 'BloomSwift POS - Point of Sale System - BloomTech.lk',
    description: 'BloomSwift POS is a fast, intuitive point-of-sale system for retail and hospitality. Multi-location management, inventory sync, and advanced analytics.',
    keywords: 'POS system, point of sale, retail software, inventory management, hospitality POS',
    canonical: `${baseUrl}/services/bloomswift-pos`,
    ogImage: defaultOGImage
  },
  'custom-qr-nfc-applications': {
    title: 'Custom QR & NFC Based Applications - BloomTech.lk',
    description: 'Bespoke QR code and NFC-powered applications for asset tracking, contactless payments, smart marketing, and access control tailored to your operations.',
    keywords: 'QR code app, NFC application, contactless solutions, asset tracking, NFC development',
    canonical: `${baseUrl}/services/custom-qr-nfc-applications`,
    ogImage: defaultOGImage
  },
  'search-engine-optimization': {
    title: 'Search Engine Optimization Services - BloomTech.lk',
    description: 'Data-driven SEO strategies combining technical audits, keyword research, and content marketing to boost visibility and deliver sustainable organic growth.',
    keywords: 'SEO services, search engine optimization, technical SEO, keyword research, organic growth',
    canonical: `${baseUrl}/services/search-engine-optimization`,
    ogImage: defaultOGImage
  },
  'custom-websites-design': {
    title: 'Custom Website Design & Development - BloomTech.lk',
    description: 'Conversion-focused website design and development. Clean, optimized code, responsive design, and high-performance web applications built for business growth.',
    keywords: 'website design, web development, custom websites, responsive design, web applications',
    canonical: `${baseUrl}/services/custom-websites-design`,
    ogImage: `${baseUrl}/images/digital-marketing.jpg`
  },
  'online-marketing-services': {
    title: 'SEO & Online Marketing Services - BloomTech.lk',
    description: 'Data-driven digital marketing and SEO services. Technical SEO, AI-powered content strategy, and online visibility optimization for business growth.',
    keywords: 'SEO services, online marketing, digital marketing, content strategy, search optimization',
    canonical: `${baseUrl}/services/online-marketing-services`,
    ogImage: `${baseUrl}/images/digital-marketing.jpg`
  }
};

// Helper function to get SEO config
export const getSEOConfig = (page: string, serviceId?: string): SEOConfig => {
  if (serviceId && serviceSEO[serviceId]) {
    return serviceSEO[serviceId];
  }
  return seoConfigs[page] || seoConfigs.home;
};
