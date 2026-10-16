import type { Photo } from './kit';

// Real photography (Unsplash) — one place to swap any image on the site.
const p = (src: string, alt: string): Photo => ({ src, alt });
const lk = (n: string) => `/images/lk/${n}.webp`;
const s = (n: string) => `/images/services/${n}.webp`;
const i = (n: string) => `/images/${n}.webp`;

export const photos = {
  // Places
  colomboSkyline: p(lk('colombo-skyline'), 'Colombo city skyline with the Lotus Tower'),
  colomboLotus: p(lk('colombo-lotus'), 'Lotus Tower above Beira Lake in Colombo'),
  colomboRail: p(lk('colombo-rail'), 'Railway lines leading to the Colombo skyline at sunset'),
  colomboAerial: p(lk('colombo-aerial'), 'Aerial view of green suburbs in the Western Province'),

  // People & work
  team: p(i('team-engineers'), 'Engineers reviewing code together'),
  engineerLab: p(i('hero-bg-ai'), 'Engineer working at a hardware lab bench'),
  devTeam: p(i('hero-bg-software'), 'Development team working together on laptops'),
  serverRoom: p(i('hero-bg-infra'), 'Engineer with a laptop in a server room aisle'),
  serverRacks: p(i('hero-server-racks'), 'Server racks with structured cabling'),
  analytics: p(i('hero-bg-marketing'), 'Analytics dashboard on a laptop screen'),

  // Industries
  apparel: p(lk('apparel'), 'Garment factory workers folding finished textiles'),
  apparelFloor: p(lk('apparel-a'), 'Sewing floor in a garment factory'),
  tourism: p(lk('tourism'), 'Coastal hotel among palm trees at sunset'),
  tourismBeach: p(lk('tourism-b'), 'Beachfront restaurant lit up in the evening'),
  finance: p(lk('finance'), 'Financial charts and a calculator on a desk'),
  healthcare: p(lk('healthcare'), 'Two doctors reviewing records on a tablet'),
  healthcareTablet: p(lk('healthcare-b'), 'Doctor holding a tablet'),
  retail: p(lk('retail'), 'Supermarket checkout counters with POS terminals'),
  manufacturing: p(lk('manufacturing'), 'Workers on a factory assembly line'),

  // Products
  posHero: p(lk('pos-hero'), 'BloomSwift POS in action'),
  posTabletCounter: p(lk('pos-tablet-counter'), 'Customer paying at a tablet POS on a café counter'),
  auditHero: p(lk('bloomaudit-hero'), 'Accountant working with a calculator and financial reports'),
  posCounter: p(lk('pos-a'), 'Customer paying at a tablet point-of-sale counter'),
  posCafe: p(lk('pos-b'), 'Customers at a counter with a tablet till'),
  posTablet: p(lk('pos-tablet'), 'Tablet POS and phone payment on a counter'),
  nfc: p(lk('nfc'), 'Phone held over a contactless reader'),
  qr: p(lk('qr-a'), 'Phones scanning QR codes at a table'),
  qrPhones: p(lk('qr-b'), 'Two phones scanning a QR code'),
  accounting: p(lk('accounting-a'), 'Accountant working on a laptop at a desk'),
  accountingDesk: p(lk('accounting-b'), 'Finance officer reviewing paperwork at a desk'),

  // Service stock (shared with the USA site)
  aiCode: p(s('ai-a'), 'Code on a laptop screen'),
  cloudCode: p(s('cloud-b'), 'Developer writing code on a laptop'),
  crm: p(s('crm'), 'Team reviewing a business presentation'),
  crmWarehouse: p(s('crm-a'), 'Warehouse with inventory on shelves'),
  crmDashboard: p(s('crm-b'), 'Business dashboard on a laptop'),
  consulting: p(s('consulting'), 'Consultants planning at a whiteboard'),
  consultingTeam: p(s('consulting-a'), 'Team planning around a whiteboard'),
  consultingRoom: p(s('consulting-b'), 'Business presentation in a meeting room'),
  security: p(s('access-control'), 'Smart access control on a door'),
  securityPay: p(s('security-a'), 'Secure online payment on a laptop'),
  securityCode: p(s('security-b'), 'Laptop with code on a desk'),
  web: p(s('web-design'), 'Website design on a desktop monitor'),
  webSketch: p(s('web-a'), 'Designer sketching a website layout'),
  webWire: p(s('web-b'), 'Website wireframes on a wall'),
  marketingStats: p(s('marketing-a'), 'Search performance analytics dashboard'),
  marketingTiles: p(s('marketing-b'), 'Digital marketing letter tiles'),
  mobile: p(s('mobile-web'), 'Laptop and phone running a web app'),
  mobileApp: p(s('mobile-a'), 'Mobile app on a smartphone'),
  mobileDesk: p(s('mobile-b'), 'Smartphone running an app on a desk'),
  hdd: p(s('nas-a'), 'Open enterprise hard drive'),
  dataCenter: p(s('rack-and-roll'), 'Server racks in a data center'),
  network: p(s('network'), 'Network patch panel with structured cabling'),
  office: p(s('av-b'), 'Modern open-plan office interior'),
} as const;

/** Per-service photos: `hero` fills the split hero, `a` sits beside an opening section, `b` is a full-width band. */
export const servicePhotos: Record<string, { hero: Photo; a: Photo; b: Photo }> = {
  'professional-it-consulting': { hero: photos.consulting, a: photos.consultingTeam, b: photos.consultingRoom },
  'custom-crm-erp-solutions': { hero: photos.crm, a: photos.crmWarehouse, b: photos.crmDashboard },
  'security-data-protection': { hero: photos.security, a: photos.securityPay, b: photos.serverRacks },
  'bloomaudit': { hero: photos.auditHero, a: photos.accounting, b: photos.finance },
  'bloomlto': { hero: photos.serverRoom, a: photos.hdd, b: photos.dataCenter },
  'bloomswift-pos': { hero: photos.posHero, a: photos.posTabletCounter, b: photos.retail },
  'medical-system': { hero: photos.healthcare, a: photos.healthcareTablet, b: photos.healthcare },
  'custom-qr-nfc-applications': { hero: photos.qr, a: photos.nfc, b: photos.posTablet },
  'custom-mobile-web-applications': { hero: photos.mobile, a: photos.mobileApp, b: photos.mobileDesk },
  'search-engine-optimization': { hero: photos.analytics, a: photos.marketingStats, b: photos.marketingTiles },
  'custom-websites-design': { hero: photos.web, a: photos.webSketch, b: photos.webWire },
  'online-marketing-services': { hero: photos.marketingStats, a: photos.analytics, b: photos.marketingTiles },
  'ai-machine-learning': { hero: photos.engineerLab, a: photos.aiCode, b: photos.devTeam },
  'ai-custom-development-automation': { hero: photos.devTeam, a: photos.cloudCode, b: photos.manufacturing },
};

export const fallbackServicePhotos = { hero: photos.devTeam, a: photos.aiCode, b: photos.serverRacks };
