import { query } from './db';

// ─── 1. USERS ───────────────────────────────────────────────────────────────────
// Core authentication table — supports email/password and Google OAuth.
const createUsersTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id              SERIAL PRIMARY KEY,
      name            VARCHAR(150)        NOT NULL,
      email           VARCHAR(150) UNIQUE NOT NULL,
      password        VARCHAR(255),                        -- NULL for Google-only accounts
      google_id       VARCHAR(255) UNIQUE,
      phone           VARCHAR(20),
      company         VARCHAR(150),
      job_title       VARCHAR(100),
      profile_picture VARCHAR(500),
      role            VARCHAR(20) DEFAULT 'client'
                        CHECK (role IN ('admin', 'staff', 'client')),
      is_active       BOOLEAN DEFAULT TRUE,
      last_login      TIMESTAMP,
      created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  users');
};

// ─── 2. SERVICE CATEGORIES ──────────────────────────────────────────────────────
// The four top-level service groupings shown in the mega-menu.
const createServiceCategoriesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS service_categories (
      id            SERIAL PRIMARY KEY,
      name          VARCHAR(150)        NOT NULL,
      slug          VARCHAR(150) UNIQUE NOT NULL,
      description   TEXT,
      display_order INTEGER DEFAULT 0,
      is_active     BOOLEAN DEFAULT TRUE,
      created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  service_categories');
};

// ─── 3. SERVICES ────────────────────────────────────────────────────────────────
// Individual service offerings. features/benefits stored as JSON arrays.
const createServicesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS services (
      id                SERIAL PRIMARY KEY,
      category_id       INTEGER REFERENCES service_categories(id) ON DELETE SET NULL,
      name              VARCHAR(200)        NOT NULL,
      slug              VARCHAR(200) UNIQUE NOT NULL,
      short_description TEXT,
      long_description  TEXT,
      features          JSONB DEFAULT '[]', -- [{ "title": "...", "desc": "..." }]
      benefits          JSONB DEFAULT '[]', -- ["benefit string", ...]
      image_url         VARCHAR(500),
      icon_name         VARCHAR(100),       -- lucide-react icon name
      is_active         BOOLEAN DEFAULT TRUE,
      display_order     INTEGER DEFAULT 0,
      created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  services');
};

// ─── 4. CONTACT INQUIRIES ───────────────────────────────────────────────────────
// Submissions from the /contact page form (general enquiries).
const createContactInquiriesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(150) NOT NULL,
      email       VARCHAR(150) NOT NULL,
      company     VARCHAR(150),
      interests   TEXT[],                 -- checkboxes selected on form
      message     TEXT NOT NULL,
      status      VARCHAR(30) DEFAULT 'new'
                    CHECK (status IN ('new','read','in_progress','resolved','archived')),
      assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL,
      notes       TEXT,
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  contact_inquiries');
};

// ─── 5. EXPERT INQUIRIES ────────────────────────────────────────────────────────
// Submissions from the "Talk to an Expert" modal on service detail pages.
const createExpertInquiriesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS expert_inquiries (
      id               SERIAL PRIMARY KEY,
      user_id          INTEGER REFERENCES users(id) ON DELETE SET NULL, -- set if requester is logged in
      name             VARCHAR(150) NOT NULL,
      email            VARCHAR(150) NOT NULL,
      phone            VARCHAR(20),
      company          VARCHAR(150),
      job_title        VARCHAR(100),
      service_slug     VARCHAR(200) NOT NULL,
      service_id       INTEGER REFERENCES services(id) ON DELETE SET NULL,
      message          TEXT NOT NULL,
      status           VARCHAR(30) DEFAULT 'new'
                         CHECK (status IN ('new','read','in_progress','quoted','won','lost','archived')),
      assigned_to      INTEGER REFERENCES users(id) ON DELETE SET NULL,
      follow_up_date   DATE,
      notes            TEXT,
      created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  expert_inquiries');
};

// ─── 6. PROJECTS ────────────────────────────────────────────────────────────────
// Active client projects — visible in the client dashboard.
const createProjectsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS projects (
      id                 SERIAL PRIMARY KEY,
      client_id          INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      service_id         INTEGER REFERENCES services(id) ON DELETE SET NULL,
      inquiry_id         INTEGER REFERENCES expert_inquiries(id) ON DELETE SET NULL,
      title              VARCHAR(300) NOT NULL,
      description        TEXT,
      status             VARCHAR(30) DEFAULT 'planning'
                           CHECK (status IN ('planning','active','on_hold','completed','cancelled')),
      priority           VARCHAR(20) DEFAULT 'normal'
                           CHECK (priority IN ('low','normal','high','critical')),
      start_date         DATE,
      end_date           DATE,
      progress_percent   INTEGER DEFAULT 0
                           CHECK (progress_percent BETWEEN 0 AND 100),
      budget_lkr         NUMERIC(15,2),
      project_manager_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  projects');
};

// ─── 7. PROJECT UPDATES ─────────────────────────────────────────────────────────
// Progress notes, milestone completions, and deployment logs per project.
const createProjectUpdatesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS project_updates (
      id          SERIAL PRIMARY KEY,
      project_id  INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
      title       VARCHAR(300) NOT NULL,
      content     TEXT NOT NULL,
      update_type VARCHAR(30) DEFAULT 'progress'
                    CHECK (update_type IN ('progress','milestone','issue','deployment','note')),
      created_by  INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  project_updates');
};

// ─── 8. SUPPORT TICKETS ─────────────────────────────────────────────────────────
// Client-raised support requests accessible from the dashboard.
const createSupportTicketsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS support_tickets (
      id             SERIAL PRIMARY KEY,
      ticket_number  VARCHAR(20) UNIQUE NOT NULL, -- e.g. BT-2026-00042
      user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      project_id     INTEGER REFERENCES projects(id) ON DELETE SET NULL,
      title          VARCHAR(300) NOT NULL,
      description    TEXT NOT NULL,
      category       VARCHAR(50) DEFAULT 'general'
                       CHECK (category IN ('general','technical','billing','feature_request','bug','other')),
      priority       VARCHAR(20) DEFAULT 'medium'
                       CHECK (priority IN ('low','medium','high','critical')),
      status         VARCHAR(30) DEFAULT 'open'
                       CHECK (status IN ('open','in_progress','waiting_client','resolved','closed')),
      assigned_to    INTEGER REFERENCES users(id) ON DELETE SET NULL,
      resolved_at    TIMESTAMP,
      created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  support_tickets');
};

// ─── 9. TICKET REPLIES ──────────────────────────────────────────────────────────
// Threaded replies on support tickets (staff and client messages).
const createTicketRepliesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS ticket_replies (
      id          SERIAL PRIMARY KEY,
      ticket_id   INTEGER NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
      user_id     INTEGER REFERENCES users(id) ON DELETE SET NULL,
      message     TEXT NOT NULL,
      is_internal BOOLEAN DEFAULT FALSE, -- TRUE = visible to staff only
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  ticket_replies');
};

// ─── 10. QUOTES / PROPOSALS ─────────────────────────────────────────────────────
// Sales quotes generated for inquiries, with line-item breakdown in JSON.
const createQuotesTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS quotes (
      id             SERIAL PRIMARY KEY,
      quote_number   VARCHAR(30) UNIQUE NOT NULL,    -- e.g. QT-2026-00018
      inquiry_id     INTEGER REFERENCES expert_inquiries(id) ON DELETE SET NULL,
      client_id      INTEGER REFERENCES users(id) ON DELETE SET NULL,
      service_id     INTEGER REFERENCES services(id) ON DELETE SET NULL,
      title          VARCHAR(300) NOT NULL,
      description    TEXT,
      line_items     JSONB DEFAULT '[]',             -- [{ desc, qty, unit_price, total }]
      subtotal_lkr   NUMERIC(15,2),
      discount_lkr   NUMERIC(15,2) DEFAULT 0,
      tax_lkr        NUMERIC(15,2) DEFAULT 0,
      total_lkr      NUMERIC(15,2),
      currency       VARCHAR(10) DEFAULT 'LKR',
      status         VARCHAR(30) DEFAULT 'draft'
                       CHECK (status IN ('draft','sent','viewed','accepted','rejected','expired')),
      valid_until    DATE,
      notes          TEXT,
      created_by     INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  quotes');
};

// ─── 11. NEWSLETTER SUBSCRIBERS ─────────────────────────────────────────────────
// Marketing mailing list sign-ups from the website footer or CTAs.
const createNewsletterSubscribersTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id               SERIAL PRIMARY KEY,
      email            VARCHAR(150) UNIQUE NOT NULL,
      name             VARCHAR(150),
      status           VARCHAR(20) DEFAULT 'active'
                         CHECK (status IN ('active','unsubscribed','bounced')),
      subscribed_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      unsubscribed_at  TIMESTAMP
    );
  `);
  console.log('✅  newsletter_subscribers');
};

// ─── 12. BLOG POSTS ─────────────────────────────────────────────────────────────
// Technology insights and company news articles managed by staff.
const createBlogPostsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id              SERIAL PRIMARY KEY,
      author_id       INTEGER REFERENCES users(id) ON DELETE SET NULL,
      title           VARCHAR(300) NOT NULL,
      slug            VARCHAR(300) UNIQUE NOT NULL,
      excerpt         TEXT,
      content         TEXT NOT NULL,
      featured_image  VARCHAR(500),
      category        VARCHAR(100),
      tags            TEXT[],
      status          VARCHAR(20) DEFAULT 'draft'
                        CHECK (status IN ('draft','published','archived')),
      seo_title       VARCHAR(300),
      seo_description TEXT,
      published_at    TIMESTAMP,
      created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  blog_posts');
};

// ─── 13. TESTIMONIALS ───────────────────────────────────────────────────────────
// Client success stories displayed on the website.
const createTestimonialsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id             SERIAL PRIMARY KEY,
      client_name    VARCHAR(150) NOT NULL,
      company        VARCHAR(150),
      job_title      VARCHAR(100),
      content        TEXT NOT NULL,
      rating         INTEGER CHECK (rating BETWEEN 1 AND 5),
      service_id     INTEGER REFERENCES services(id) ON DELETE SET NULL,
      profile_image  VARCHAR(500),
      is_active      BOOLEAN DEFAULT TRUE,
      display_order  INTEGER DEFAULT 0,
      created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  testimonials');
};

// ─── 14. OFFICE LOCATIONS ───────────────────────────────────────────────────────
// Global hub data (currently hardcoded in Company.tsx — now DB-driven).
const createOfficeLocationsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS office_locations (
      id               SERIAL PRIMARY KEY,
      name             VARCHAR(150) NOT NULL,
      location         VARCHAR(200) NOT NULL,
      country          VARCHAR(100) NOT NULL,
      address          TEXT NOT NULL,
      description      TEXT,
      phone            VARCHAR(30),
      email            VARCHAR(150),
      map_embed_url    TEXT,
      latitude         NUMERIC(10,7),
      longitude        NUMERIC(10,7),
      is_headquarters  BOOLEAN DEFAULT FALSE,
      is_active        BOOLEAN DEFAULT TRUE,
      display_order    INTEGER DEFAULT 0,
      created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  office_locations');
};

// ─── 15. AUDIT LOGS ─────────────────────────────────────────────────────────────
// Immutable trail of all admin actions for compliance and security review.
const createAuditLogsTable = async (): Promise<void> => {
  await query(`
    CREATE TABLE IF NOT EXISTS audit_logs (
      id          SERIAL PRIMARY KEY,
      user_id     INTEGER REFERENCES users(id) ON DELETE SET NULL,
      action      VARCHAR(100) NOT NULL,    -- e.g. 'UPDATE_STATUS', 'DELETE_USER'
      table_name  VARCHAR(100),
      record_id   INTEGER,
      old_values  JSONB,
      new_values  JSONB,
      ip_address  INET,
      user_agent  TEXT,
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅  audit_logs');
};

// ─── INDEXES ────────────────────────────────────────────────────────────────────
// Performance indexes on frequently queried columns.
const createIndexes = async (): Promise<void> => {
  const indexes = [
    'CREATE INDEX IF NOT EXISTS idx_users_email              ON users(email)',
    'CREATE INDEX IF NOT EXISTS idx_users_role               ON users(role)',
    'CREATE INDEX IF NOT EXISTS idx_services_slug            ON services(slug)',
    'CREATE INDEX IF NOT EXISTS idx_services_category        ON services(category_id)',
    'CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status)',
    'CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email  ON contact_inquiries(email)',
    'CREATE INDEX IF NOT EXISTS idx_expert_inquiries_status  ON expert_inquiries(status)',
    'CREATE INDEX IF NOT EXISTS idx_expert_inquiries_email   ON expert_inquiries(email)',
    'CREATE INDEX IF NOT EXISTS idx_expert_inquiries_service ON expert_inquiries(service_slug)',
    'CREATE INDEX IF NOT EXISTS idx_projects_client          ON projects(client_id)',
    'CREATE INDEX IF NOT EXISTS idx_projects_status          ON projects(status)',
    'CREATE INDEX IF NOT EXISTS idx_project_updates_project  ON project_updates(project_id)',
    'CREATE INDEX IF NOT EXISTS idx_support_tickets_user     ON support_tickets(user_id)',
    'CREATE INDEX IF NOT EXISTS idx_support_tickets_status   ON support_tickets(status)',
    'CREATE INDEX IF NOT EXISTS idx_ticket_replies_ticket    ON ticket_replies(ticket_id)',
    'CREATE INDEX IF NOT EXISTS idx_quotes_inquiry           ON quotes(inquiry_id)',
    'CREATE INDEX IF NOT EXISTS idx_quotes_status            ON quotes(status)',
    'CREATE INDEX IF NOT EXISTS idx_blog_posts_slug          ON blog_posts(slug)',
    'CREATE INDEX IF NOT EXISTS idx_blog_posts_status        ON blog_posts(status)',
    'CREATE INDEX IF NOT EXISTS idx_audit_logs_user          ON audit_logs(user_id)',
    'CREATE INDEX IF NOT EXISTS idx_audit_logs_table         ON audit_logs(table_name, record_id)',
  ];
  for (const sql of indexes) {
    await query(sql);
  }
  console.log('✅  indexes');
};

// ─── SEED DATA ──────────────────────────────────────────────────────────────────
const seedServiceCategories = async (): Promise<void> => {
  const existing = await query('SELECT id FROM service_categories LIMIT 1');
  if (existing.rows.length > 0) {
    console.log('⏭   service_categories already seeded');
    return;
  }
  await query(`
    INSERT INTO service_categories (name, slug, description, display_order) VALUES
    ('Consulting & Custom Software Solutions', 'consulting-software',
     'Strategic IT advisory, custom CRM/ERP systems, security, and asset management for Sri Lankan enterprises', 1),
    ('Suite of Applications',                 'suite-of-applications',
     'Purpose-built software products — BloomAudit, BloomGo, and BloomSwift POS — for Sri Lankan businesses', 2),
    ('Online Presence & Digital Marketing',   'online-presence',
     'SEO, custom website design, web/mobile apps, QR/NFC solutions, and online marketing for Sri Lankan audiences', 3),
    ('AI & Machine Learning',                 'ai-machine-learning',
     'Custom AI development, on-premise machine learning deployments, and intelligent automation for Sri Lankan industries', 4);
  `);
  console.log('✅  service_categories seeded');
};

const seedServices = async (): Promise<void> => {
  const existing = await query('SELECT id FROM services LIMIT 1');
  if (existing.rows.length > 0) {
    console.log('⏭   services already seeded');
    return;
  }

  // Fetch category IDs
  const cats = await query('SELECT id, slug FROM service_categories');
  const catMap: Record<string, number> = {};
  for (const row of cats.rows) catMap[row.slug] = row.id;

  const c = catMap['consulting-software'];
  const s = catMap['suite-of-applications'];
  const o = catMap['online-presence'];
  const a = catMap['ai-machine-learning'];

  await query(`
    INSERT INTO services (category_id, name, slug, short_description, image_url, display_order) VALUES
    -- Consulting & Custom Software
    ($1, 'Professional IT Consulting',       'professional-it-consulting',
     'CISA-certified IT governance, risk management, and fractional CTO/CISO services for Sri Lankan organisations',
     '/images/IT_Consolting.jpg', 1),
    ($1, 'Custom CRM & ERP Solutions',        'custom-crm-erp-solutions',
     'Bespoke CRM and ERP platforms unifying data and automating workflows for Sri Lankan SMEs and enterprises',
     '/images/CRM_&_ERP.jpg', 2),
    ($1, 'Security & Data Protection',        'security-data-protection',
     'Zero Trust cybersecurity, EDR, and compliance-aligned data protection for Sri Lankan businesses',
     '/images/IT_Consolting.jpg', 3),
    ($1, 'Asset Lifecycle Management',        'asset-lifecycle-management',
     'Strategic IT asset management from procurement to certified disposal — maximising technology ROI',
     '/images/Asset_Life_cycle.png', 4),
    ($1, 'IT Network & Infrastructure',       'it-network-infrastructure',
     'Enterprise LAN/WAN, structured cabling, and managed network solutions for Sri Lankan offices and campuses',
     '/images/IT_network_and_Inferstructure.jpg', 5),
    ($1, 'Enterprise Networking',             'enterprise-networking',
     'High-performance switching, routing, SD-WAN, and managed Wi-Fi for large Sri Lankan enterprises',
     '/images/Enterprise_Network.jpg', 6),
    ($1, 'Custom Server Design & Deployment', 'custom-server-design-deployment',
     'Purpose-built server hardware designed and deployed for Sri Lankan data sovereignty and performance needs',
     '/images/AI_Hardware.jpg', 7),
    ($1, 'Custom NAS Storage',               'custom-nas-storage',
     'High-capacity, redundant NAS solutions for secure local data storage in Sri Lankan businesses',
     '/images/Custom_Nas_Design.jpg', 8),
    ($1, 'Rack & Roll Services',              'rack-and-roll-services',
     'Professional server rack installation, cabling, and data centre fit-out services across Sri Lanka',
     '/images/rack_and_roll.jpg', 9),
    ($1, 'Cloud Hosting & Deployment',        'cloud-hosting-deployment',
     'High-availability managed cloud hosting with automated CI/CD pipelines and 24/7 monitoring',
     '/images/Cloud_application_Deployment.jpg', 10),
    ($1, 'AV & Smart Workspaces',             'av-smart-workspaces',
     'Conference room AV systems, smart displays, and unified communications for modern Sri Lankan workplaces',
     '/images/IT_Consolting.jpg', 11),
    -- Suite of Applications
    ($2, 'BloomAudit',                        'bloomaudit',
     'Comprehensive IT audit and compliance management with real-time trails — ideal for CBSL-regulated entities',
     '/bloomtech-logo.png', 1),
    ($2, 'BloomGo',                           'bloomgo',
     'Smart field service management platform for job scheduling, routing, and mobile workforce across Sri Lanka',
     '/bloomtech-logo.png', 2),
    ($2, 'BloomSwift POS',                    'bloomswift-pos',
     'Fast, reliable point-of-sale for Sri Lankan retail, restaurants, and hospitality — offline-capable',
     '/bloomtech-logo.png', 3),
    ($2, 'Custom QR & NFC Applications',      'custom-qr-nfc-applications',
     'Contactless solutions for asset tracking, hotel check-in, loyalty programmes, and smart menus',
     '/bloomtech-logo.png', 4),
    ($2, 'Custom Mobile Applications',        'custom-mobile-applications',
     'Native and cross-platform mobile apps built for Sri Lanka''s smartphone-first consumer market',
     '/bloomtech-logo.png', 5),
    ($2, 'Custom Web Applications',           'custom-web-applications',
     'Scalable, high-performance web applications for Sri Lankan enterprises and growing businesses',
     '/bloomtech-logo.png', 6),
    -- Online Presence & Digital Marketing
    ($3, 'Search Engine Optimisation',        'search-engine-optimization',
     'Technical SEO and bilingual content strategies for Sinhala and English audiences on Google.lk',
     '/images/digital-marketing.jpg', 1),
    ($3, 'Custom Website Design',             'custom-websites-design',
     'High-performance, mobile-first website design built for Sri Lanka''s smartphone-dominant market',
     '/images/digital-marketing.jpg', 2),
    ($3, 'Online Marketing Services',         'online-marketing-services',
     'Google Ads, Facebook, and Instagram campaign management targeting Sri Lankan demographics',
     '/images/digital-marketing.jpg', 3),
    -- AI & Machine Learning
    ($4, 'AI & Machine Learning (ML)',         'ai-machine-learning',
     'Custom AI agents, on-premise ML deployments, and document intelligence for Sri Lankan industries',
     '/images/Custom_AI_Development.jpg', 1),
    ($4, 'AI Custom Development for Automation','ai-custom-development-automation',
     'Bespoke AI automation eliminating repetitive tasks in garment factories, banks, and service businesses',
     '/images/Custom_AI_Development.jpg', 2),
    ($4, 'Custom AI Hardware',                 'custom-ai-hardware',
     'Purpose-built GPU servers and AI workstations for on-premise machine learning in Sri Lanka',
     '/images/AI_Hardware.jpg', 3);
  `, [c, s, o, a]);
  console.log('✅  services seeded (23 services)');
};

const seedOfficeLocations = async (): Promise<void> => {
  const existing = await query('SELECT id FROM office_locations LIMIT 1');
  if (existing.rows.length > 0) {
    console.log('⏭   office_locations already seeded');
    return;
  }
  await query(`
    INSERT INTO office_locations
      (name, location, country, address, description, map_embed_url, latitude, longitude, is_headquarters, display_order)
    VALUES
    ('Sri Lanka Headquarters', 'Mawaramandiya, Western Province', 'Sri Lanka',
     'XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka',
     'Our home base — primary engineering team, client management, and full on-site support for Sri Lankan businesses',
     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d80.0130!3d7.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWF3YXJhbWFuZGl5YQ!5e0!3m2!1sen!2slk!4v1234567890!5m2!1sen!2slk',
     7.0850000, 80.0130000, TRUE, 1),

    ('UAE Hub', 'Dubai, United Arab Emirates', 'United Arab Emirates',
     'New Mall Limited, Dragon Mart 2 - Dubai - United Arab Emirates',
     'Middle East operations centre — serving Sri Lankan diaspora businesses and regional enterprise clients',
     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0586!2d55.4028!3d25.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f8b8b8b8b8b%3A0x0!2sDragon%20Mart%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890!5m2!1sen!2sae',
     25.1728000, 55.4028000, FALSE, 2),

    ('Singapore Hub', 'Singapore', 'Singapore',
     '21 Bukit Batok Cres, #09-79, Singapore 658065',
     'Southeast Asia operations centre — ASEAN market development and regional technology partnerships',
     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7654!2d103.7504!3d1.3379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10f7c7c7c7c7%3A0x0!2s21%20Bukit%20Batok%20Cres%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1234567890!5m2!1sen!2ssg',
     1.3379000, 103.7504000, FALSE, 3);
  `);
  console.log('✅  office_locations seeded');
};

// ─── MAIN ────────────────────────────────────────────────────────────────────────
const init = async (): Promise<void> => {
  console.log('\n🚀  Initialising BloomTech.lk database (bloomtech_lk)\n');
  console.log('── Creating tables ──────────────────────────────────────');

  try {
    // Create tables in dependency order
    await createUsersTable();
    await createServiceCategoriesTable();
    await createServicesTable();
    await createContactInquiriesTable();
    await createExpertInquiriesTable();
    await createProjectsTable();
    await createProjectUpdatesTable();
    await createSupportTicketsTable();
    await createTicketRepliesTable();
    await createQuotesTable();
    await createNewsletterSubscribersTable();
    await createBlogPostsTable();
    await createTestimonialsTable();
    await createOfficeLocationsTable();
    await createAuditLogsTable();
    await createIndexes();

    console.log('\n── Seeding initial data ─────────────────────────────────');
    await seedServiceCategories();
    await seedServices();
    await seedOfficeLocations();

    console.log('\n✅  Database initialisation complete.\n');
  } catch (err) {
    console.error('\n❌  Error during initialisation:', err);
    process.exit(1);
  }

  process.exit(0);
};

init();
