import { LucideIcon, Zap, Shield, Cpu, Bot, Sparkles, Package, ShieldAlert, BrainCircuit, Layers, Search, PenTool, Rocket, TrendingUp } from 'lucide-react';

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
  primaryCTA: {
    text: string;
    icon: LucideIcon;
  };
  secondaryCTA: {
    text: string;
  };
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  'asset-lifecycle-management': {
    tagline: {
      icon: Package,
      text: 'Strategic Control'
    },
    heroTitle: 'Maximize Value. Minimize Risk. Master Your IT Lifecycle.',
    heroDescription: 'From initial procurement to secure certified destruction, we manage every stage of your hardware and software journey. Stop losing track of your investments and start optimizing your ROI.',
    primaryCTA: {
      text: 'Request an Asset Audit',
      icon: Package
    },
    secondaryCTA: {
      text: 'View Compliance Frameworks'
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
  'custom-ai-hardware': {
    tagline: {
      icon: Cpu,
      text: 'Cloud Repatriation. On-Premise Power.'
    },
    heroTitle: 'Own Your AI Infrastructure. Eliminate Cloud Lock-In.',
    heroDescription: 'For organizations with strict data privacy requirements or intensive compute needs, the public cloud isn\'t always the answer. We design and build purpose-built AI hardware—from high-VRAM GPU nodes to AMD EPYC clusters—engineered to run your models locally with zero per-token costs.',
    primaryCTA: {
      text: 'Calculate Your Cloud Savings',
      icon: Cpu
    },
    secondaryCTA: {
      text: 'Explore AI Hardware Solutions'
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
  'custom-mobile-application': {
    tagline: {
      icon: Sparkles,
      text: 'Force Multiplier Technology'
    },
    heroTitle: 'High-Performance Mobile Apps. Built for Your Business.',
    heroDescription: "We build business-centric mobile applications engineered to reflect the prestige of your brand. From immersive UI/UX design to lightning-fast architecture, we create digital tools that act as a Force Multiplier for your existing team.",
    primaryCTA: {
      text: 'Start Your App Project',
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
  'custom-web-applications': {
    tagline: {
      icon: Layers,
      text: 'Built for Your Business Logic'
    },
    heroTitle: 'Custom Web Applications. Engineered for How You Actually Work.',
    heroDescription: 'Off-the-shelf software forces your team to adapt to its limitations. We build bespoke web applications — CRM portals, ERP modules, automated data pipelines, and internal tools — designed from the ground up around your unique workflows and operational logic.',
    primaryCTA: {
      text: 'Book a Discovery Session',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Use Cases'
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
