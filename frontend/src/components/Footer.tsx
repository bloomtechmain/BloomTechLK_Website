import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Network, Layout, MessageCircle } from 'lucide-react';
import { socialMedia } from '../utils/seoConfig';

const linkCls = 'text-white/60 hover:text-white transition-colors';
const headCls = 'font-mono text-[11px] font-bold uppercase tracking-widest text-white/40 mb-6';
const socialCls = 'w-10 h-10 rounded-xl bg-white/[0.06] text-white/70 flex items-center justify-center hover:bg-white hover:text-navy hover:-translate-y-0.5 transition-all';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-3xl font-extrabold tracking-tight">BloomTech<span className="text-brand-orange">LK</span></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 w-full border-y border-white/10 py-14 mb-10">
          {/* Services Column 1 — Consulting & Custom Software Solutions */}
          <div>
            <h5 className={headCls}>Services & Solutions</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/services/professional-it-consulting" className={linkCls}>Professional IT Consulting</Link></li>
              <li><Link to="/services/custom-crm-erp-solutions" className={linkCls}>Custom CRM & ERP Solutions</Link></li>
              <li><Link to="/services/security-data-protection" className={linkCls}>Security & Data Protection</Link></li>
              <li><Link to="/services/custom-qr-nfc-applications" className={linkCls}>Custom QR & NFC Applications</Link></li>
              <li><Link to="/services/custom-mobile-web-applications" className={linkCls}>Custom Mobile & Web Applications</Link></li>
            </ul>
          </div>

          {/* Services Column 2 — Suite of Applications */}
          <div>
            <h5 className={`${headCls} opacity-0 pointer-events-none hidden md:block`} aria-hidden="true">Services</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/services/bloomaudit" className={linkCls}>BloomAudit</Link></li>
              <li><Link to="/services/bloomlto" className={linkCls}>BloomLTO</Link></li>
              <li><Link to="/services/bloomswift-pos" className={linkCls}>BloomSwift POS</Link></li>
              <li><Link to="/services/medical-system" className={linkCls}>BloomMedical System</Link></li>
            </ul>
          </div>

          {/* Services Column 3 — Online Presence & AI Development */}
          <div>
            <h5 className={`${headCls} opacity-0 pointer-events-none hidden md:block`} aria-hidden="true">Services</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/services/search-engine-optimization" className={linkCls}>Search Engine Optimization</Link></li>
              <li><Link to="/services/custom-websites-design" className={linkCls}>Custom Website Design</Link></li>
              <li><Link to="/services/online-marketing-services" className={linkCls}>Online Marketing Services</Link></li>
              <li><Link to="/services/ai-machine-learning" className={linkCls}>AI & Machine Learning (ML)</Link></li>
              <li><Link to="/services/ai-custom-development-automation" className={linkCls}>AI Custom Development for Automation</Link></li>
            </ul>
          </div>
          <div>
            <h5 className={headCls}>Company</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/company" className={linkCls}>About Us</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
              <li><Link to="/company#mission" className={linkCls}>Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h5 className={headCls}>Find Us On</h5>
            <div className="flex flex-wrap gap-2.5">
              <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className={socialCls}>
                <Facebook size={18} />
              </a>
              <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" className={socialCls}>
                <Instagram size={18} />
              </a>
              <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our X (Twitter) profile" className={socialCls}>
                <Twitter size={18} />
              </a>
              <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className={socialCls}>
                <Linkedin size={18} />
              </a>
              <a href={`https://wa.me/${socialMedia.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className={socialCls}>
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className={headCls}>Contact Us Directly</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-white/50" />
                <a href={`tel:${socialMedia.phone.replace(/\s/g, '')}`} className="font-semibold text-white hover:text-white/75 transition-colors">
                  {socialMedia.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-white/50" />
                <a href={`mailto:${socialMedia.email}`} className="font-semibold text-white hover:text-white/75 transition-colors break-all">
                  {socialMedia.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/50" />
                <span className="font-semibold text-white">
                  Mawaramandiya, Western Province, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
          <div className="flex flex-wrap gap-6 font-mono text-[11px] font-bold uppercase tracking-widest text-white/40 items-center">
            <span>© 2026 BloomTech.lk</span>
            <a
              href="https://bloomtech.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span className="text-lg">🇱🇰</span>
              <span>BloomTech.lk</span>
            </a>
          </div>
          <div className="flex gap-3" aria-hidden="true">
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-white/50 flex items-center justify-center">
              <Network size={14} />
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-white/50 flex items-center justify-center">
              <Layout size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
