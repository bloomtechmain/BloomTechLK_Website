import { LucideIcon, Zap, Shield, Bot, Sparkles, ShieldAlert, BrainCircuit, Layers, Search, PenTool, Rocket, TrendingUp, BarChart3 } from 'lucide-react';

/**
 * Service Configuration
 * Centralized configuration for service-specific content
 */

export interface ServiceConfig {
  tagline?: {
    icon: LucideIcon;
    text: string;
  };
  heroTitle: string;
  heroDescription: string;
  heroBgImage?: string;
  primaryCTA: {
    text: string;
    icon: LucideIcon;
  };
  secondaryCTA: {
    text: string;
  };
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  'bloomaudit': {
    tagline: {
      icon: BarChart3,
      text: 'Audit & Reporting · Strategic Advisory · Management Services'
    },
    heroTitle: 'Master Your Financial Destiny.',
    heroDescription: 'Bloom Audit is Sri Lanka\'s most complete cloud accounting and financial management platform — built for SMEs, growing businesses, and accounting firms that demand more than basic bookkeeping.',
    heroBgImage: '/images/bloomaudit-hero.jpg',
    primaryCTA: {
      text: 'Get Started',
      icon: BarChart3
    },
    secondaryCTA: {
      text: 'Learn More'
    }
  },
  'ai-custom-development-automation': {
    tagline: {
      icon: Sparkles,
      text: 'Intelligence in Motion'
    },
    heroTitle: 'Bespoke AI Solutions. Automate the Mundane. Command Your Data.',
    heroDescription: 'We bridge the gap between raw data and actionable intelligence. From custom LLM implementations to automated data pipelines, we build AI tools that reclaim your time and turn "noise" into insight.',
    primaryCTA: {
      text: 'Book an AI Strategy Session',
      icon: Bot
    },
    secondaryCTA: {
      text: 'Explore Automation Use Cases'
    }
  },
  'ai-machine-learning': {
    tagline: {
      icon: BrainCircuit,
      text: 'Agentic Intelligence. Domain-Specific Precision.'
    },
    heroTitle: 'Custom AI & Machine Learning. Built for Your Business Logic.',
    heroDescription: 'We bridge the gap between raw data and actionable intelligence. From custom LLM implementations to automated data pipelines, we build AI tools that reclaim your time and turn "noise" into insight.',
    primaryCTA: {
      text: 'Book an AI Strategy Session',
      icon: BrainCircuit
    },
    secondaryCTA: {
      text: 'Explore AI Use Cases'
    }
  },
  'custom-crm-erp-solutions': {
    tagline: {
      icon: Layers,
      text: 'Total Operational Control'
    },
    heroTitle: 'Unified Systems. Unlimited Growth. Custom CRM & ERP Solutions.',
    heroDescription: 'Stop fighting your software and start fueling your business. We build bespoke CRM and ERP platforms designed to unify your data, automate your workflows, and provide a single source of truth for your entire operation.',
    primaryCTA: {
      text: 'Talk to an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Case Studies'
    }
  },
  'professional-it-consulting': {
    tagline: {
      icon: Shield,
      text: 'Elite Strategy & Execution'
    },
    heroTitle: 'Strategic Advisory. Technical Precision. Global Perspective.',
    heroDescription: 'We provide high-level consultancy and specialized professional services for organizations that demand absolute integrity. From IT auditing and risk mitigation to international business operations, we bridge the gap between complex strategy and flawless execution.',
    primaryCTA: {
      text: 'Consult with an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Service Frameworks'
    }
  },
  'security-data-protection': {
    tagline: {
      icon: ShieldAlert,
      text: 'Absolute Resilience'
    },
    heroTitle: 'Zero Trust. Total Integrity. CISA-Certified Security.',
    heroDescription: 'In an era of evolving threats, "good enough" security is a liability. We design multi-layered defense architectures that protect your data, ensure your compliance, and guarantee your business continuity—no matter what.',
    primaryCTA: {
      text: 'Request a Security Audit',
      icon: ShieldAlert
    },
    secondaryCTA: {
      text: 'View Our Compliance Framework'
    }
  },
  'custom-websites-design': {
    tagline: {
      icon: PenTool,
      text: 'Conversion-First Design'
    },
    heroTitle: 'Bespoke Digital Experiences. Engineered to Convert.',
    heroDescription: "We don't just build websites; we engineer high-performance business tools. From lightning-fast architecture to immersive UI/UX, we create digital storefronts and corporate portals that reflect the prestige of your brand.",
    primaryCTA: {
      text: 'Start Your Project',
      icon: Rocket
    },
    secondaryCTA: {
      text: 'View Our Portfolio'
    }
  },
  'search-engine-optimization': {
    tagline: {
      icon: Search,
      text: 'Performance Marketing'
    },
    heroTitle: 'Dominate Search. Drive Revenue. Prove Every Dollar.',
    heroDescription: 'We move beyond "likes" and "impressions" to deliver measurable ROI — combining high-level technical SEO, AI-powered content strategy, and precision paid acquisition to ensure your business doesn\'t just rank, it dominates.',
    primaryCTA: {
      text: 'Get a Free SEO Audit',
      icon: Search
    },
    secondaryCTA: {
      text: 'View Our Growth Framework'
    }
  },
  'custom-mobile-web-applications': {
    tagline: {
      icon: Sparkles,
      text: 'Force Multiplier Technology'
    },
    heroTitle: 'Mobile & Web Apps. Built for Your Business.',
    heroDescription: "We build business-centric mobile and web applications engineered to reflect the prestige of your brand. From immersive UI/UX design to lightning-fast architecture, we create digital tools — native apps, portals, dashboards — that act as a Force Multiplier for your existing team.",
    primaryCTA: {
      text: 'Start Your Project',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Our Roadmap'
    }
  },
  'custom-qr-nfc-applications': {
    tagline: {
      icon: Zap,
      text: 'Proximity Intelligence'
    },
    heroTitle: 'Bridge the Physical & Digital Divide. One Tap at a Time.',
    heroDescription: 'We design and deploy bespoke QR and NFC-powered applications that streamline user interactions, secure asset tracking, and automate complex workflows — turning every label, asset, and touchpoint into a live, intelligent data event.',
    primaryCTA: {
      text: 'Book a Discovery Session',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Industry Use Cases'
    }
  },
  'online-marketing-services': {
    tagline: {
      icon: TrendingUp,
      text: 'Performance Growth'
    },
    heroTitle: 'Data-Driven Visibility. Performance-Led Growth.',
    heroDescription: 'We move beyond "likes" and "impressions" to deliver measurable ROI. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business doesn\'t just rank—it dominates.',
    primaryCTA: {
      text: 'Get a Free SEO Audit',
      icon: Search
    },
    secondaryCTA: {
      text: 'View Strategy Framework'
    }
  },
  'medical-system': {
    tagline: {
      icon: Sparkles,
      text: 'In Development'
    },
    heroTitle: 'Medical System. Coming Soon.',
    heroDescription: 'A purpose-built clinical and practice management platform for Sri Lankan healthcare providers — currently in development.',
    primaryCTA: {
      text: 'Get Notified at Launch',
      icon: Sparkles
    },
    secondaryCTA: {
      text: 'Contact Us'
    }
  },
};

/**
 * Get service configuration by slug
 * Returns default configuration if service not found
 */
export const getServiceConfig = (slug: string): ServiceConfig => {
  return serviceConfigs[slug] || {
    heroTitle: '',
    heroDescription: '',
    primaryCTA: {
      text: 'Talk to an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Case Studies'
    }
  };
};
