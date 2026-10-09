import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Network, Layout, MessageCircle } from 'lucide-react';
import { socialMedia } from '../utils/seoConfig';

const Footer = () => {
  return (
    <footer className="bg-[#101D36] text-white py-20 px-6">
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-3xl font-bold tracking-tight">BloomTech<span className="text-[#FF6B00]">LK</span></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 text-center md:text-left w-full border-y border-white/10 py-16 mb-12">
          {/* Services Column 1 — Consulting & Custom Software Solutions */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7">Services & Solutions</h5>
            <ul className="space-y-3 text-[13px] font-medium text-white/55 normal-case">
              <li><Link to="/services/professional-it-consulting" className="hover:text-[#ff6b00] transition-colors">Professional IT Consulting</Link></li>
              <li><Link to="/services/custom-crm-erp-solutions" className="hover:text-[#ff6b00] transition-colors">Custom CRM & ERP Solutions</Link></li>
              <li><Link to="/services/security-data-protection" className="hover:text-[#ff6b00] transition-colors">Security & Data Protection</Link></li>
              <li><Link to="/services/custom-qr-nfc-applications" className="hover:text-[#ff6b00] transition-colors">Custom QR & NFC Applications</Link></li>
              <li><Link to="/services/custom-mobile-web-applications" className="hover:text-[#ff6b00] transition-colors">Custom Mobile & Web Applications</Link></li>
            </ul>
          </div>

          {/* Services Column 2 — Suite of Applications */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7 opacity-0 pointer-events-none">Services</h5>
            <ul className="space-y-3 text-[13px] font-medium text-white/55 normal-case">
              <li><Link to="/services/bloomaudit" className="hover:text-[#ff6b00] transition-colors">BloomAudit</Link></li>
              <li><Link to="/services/bloomlto" className="hover:text-[#ff6b00] transition-colors">BloomLTO</Link></li>
              <li><Link to="/services/bloomswift-pos" className="hover:text-[#ff6b00] transition-colors">BloomSwift POS</Link></li>
              <li><Link to="/services/medical-system" className="hover:text-[#ff6b00] transition-colors">Medical System</Link></li>
            </ul>
          </div>

          {/* Services Column 3 — Online Presence & AI Development */}
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7 opacity-0 pointer-events-none">Services</h5>
            <ul className="space-y-3 text-[13px] font-medium text-white/55 normal-case">
              <li><Link to="/services/search-engine-optimization" className="hover:text-[#ff6b00] transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services/custom-websites-design" className="hover:text-[#ff6b00] transition-colors">Custom Website Design</Link></li>
              <li><Link to="/services/online-marketing-services" className="hover:text-[#ff6b00] transition-colors">Online Marketing Services</Link></li>
              <li><Link to="/services/ai-machine-learning" className="hover:text-[#ff6b00] transition-colors">AI & Machine Learning (ML)</Link></li>
              <li><Link to="/services/ai-custom-development-automation" className="hover:text-[#ff6b00] transition-colors">AI Custom Development for Automation</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7">Company</h5>
            <ul className="space-y-3 text-[13px] font-medium text-white/55">
              <li><Link to="/company" className="hover:text-[#ff6b00] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link></li>
              <li><Link to="/company#mission" className="hover:text-[#ff6b00] transition-colors">Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7">Find Us On</h5>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={socialMedia.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={socialMedia.instagram}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={socialMedia.twitter}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter) profile"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={socialMedia.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`https://wa.me/${socialMedia.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-wide text-white/40 mb-7">Contact Us Directly</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <a href={`tel:${socialMedia.phone.replace(/\s/g, '')}`} className="font-medium text-white hover:text-[#FF6B00] transition-colors">
                  {socialMedia.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <a href={`mailto:${socialMedia.email}`} className="font-medium text-white hover:text-[#FF6B00] transition-colors">
                  {socialMedia.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <span className="font-medium text-white">
                  Mawaramandiya, Western Province, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex gap-6 text-xs font-medium uppercase tracking-wide text-white/40 items-center">
            <span>© 2026 BloomTech.lk</span>
            <a 
              href="https://bloomtech.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ff6b00] transition-colors"
            >
              <span className="text-lg">🇱🇰</span>
              <span>BloomTech.lk</span>
            </a>
          </div>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
              <Network size={14} />
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
              <Layout size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
