import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Network, Layout, MessageCircle } from 'lucide-react';
import { socialMedia } from '../utils/seoConfig';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a36] text-white py-24 px-6">
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
            <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-4xl font-black tracking-tighter">BloomTech<span className="text-[#ff6b00]">LK</span></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 text-center md:text-left w-full border-y border-white/10 py-16 mb-12">
          {/* Services Column 1 */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Services & Solutions</h5>
            <ul className="space-y-3 text-[11px] font-bold opacity-60 uppercase">
              <li><Link to="/services/professional-it-consulting" className="hover:text-[#ff6b00] transition-colors">Professional IT Consulting</Link></li>
              <li><Link to="/services/custom-crm-erp-solutions" className="hover:text-[#ff6b00] transition-colors">Custom CRM & ERP Solutions</Link></li>
              <li><Link to="/services/security-data-protection" className="hover:text-[#ff6b00] transition-colors">Security & Data Protection</Link></li>
              <li><Link to="/services/asset-lifecycle-management" className="hover:text-[#ff6b00] transition-colors">Asset Lifecycle Management</Link></li>
              <li><Link to="/services/it-network-infrastructure" className="hover:text-[#ff6b00] transition-colors">IT Network & Infrastructure</Link></li>
              <li><Link to="/services/enterprise-networking" className="hover:text-[#ff6b00] transition-colors">Enterprise Networking</Link></li>
            </ul>
          </div>
          
          {/* Services Column 2 */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8 opacity-0 pointer-events-none">Services</h5>
            <ul className="space-y-3 text-[11px] font-bold opacity-60 uppercase">
              <li><Link to="/services/custom-server-design-deployment" className="hover:text-[#ff6b00] transition-colors">Custom Server Design & Deployment</Link></li>
              <li><Link to="/services/custom-nas-storage" className="hover:text-[#ff6b00] transition-colors">Custom NAS Storage</Link></li>
              <li><Link to="/services/rack-and-roll-services" className="hover:text-[#ff6b00] transition-colors">Rack & Roll Services</Link></li>
              <li><Link to="/services/cloud-hosting-deployment" className="hover:text-[#ff6b00] transition-colors">Cloud Hosting & Deployment</Link></li>
              <li><Link to="/services/av-smart-workspaces" className="hover:text-[#ff6b00] transition-colors">AV & Smart Workspaces</Link></li>
            </ul>
          </div>
          
          {/* Services Column 3 */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8 opacity-0 pointer-events-none">Services</h5>
            <ul className="space-y-3 text-[11px] font-bold opacity-60 uppercase">
              <li><Link to="/services/custom-websites-design" className="hover:text-[#ff6b00] transition-colors">Custom Website Design</Link></li>
              <li><Link to="/services/online-marketing-services" className="hover:text-[#ff6b00] transition-colors">Online Marketing Services</Link></li>
              <li><Link to="/services/ai-machine-learning" className="hover:text-[#ff6b00] transition-colors">AI & Machine Learning (ML)</Link></li>
              <li><Link to="/services/ai-custom-development-automation" className="hover:text-[#ff6b00] transition-colors">AI Custom Development for Automation</Link></li>
              <li><Link to="/services/custom-ai-hardware" className="hover:text-[#ff6b00] transition-colors">Custom AI Hardware</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
              <li><Link to="/company" className="hover:text-[#ff6b00] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link></li>
              <li><Link to="/company#mission" className="hover:text-[#ff6b00] transition-colors">Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Find Us On</h5>
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
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Contact Us Directly</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-sm opacity-60">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <a href={`tel:${socialMedia.phone}`} className="font-bold hover:text-[#ff6b00] transition-colors">
                  {socialMedia.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm opacity-60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <span className="font-bold">
                  XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#5b6e8a] items-center">
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
