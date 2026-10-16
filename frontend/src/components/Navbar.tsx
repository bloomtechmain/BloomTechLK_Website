import { useState, useEffect, memo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { megaMenuData, ServiceItem } from '../data/servicesData';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Debounced scroll handler for better performance
  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activeMenu
          ? 'bg-white border-b border-border-grey py-2.5'
          : 'bg-white py-5 border-b border-border-grey'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <div className="w-9 h-9 rounded-[8px] flex items-center justify-center overflow-hidden">
             <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-[22px] font-extrabold tracking-tight text-navy">
            BloomTech<span className="text-brand-orange">LK</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-9">
          <Link to="/" className="relative py-2 font-bold transition-colors text-[13px] uppercase tracking-wide text-navy/80 hover:text-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Home</Link>

          <div
            className="group relative h-[64px] flex items-center"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => {setActiveMenu(null); setHoveredService(null);}}
          >
            <button className={`flex items-center gap-1 font-bold transition-all text-[13px] uppercase tracking-wide ${activeMenu === 'services' ? 'text-navy' : 'text-navy/80 hover:text-navy'}`}>
              Services & Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange transition-all duration-300 transform ${activeMenu === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </div>

          <Link
            to="/company"
            className="relative py-2 font-bold transition-colors text-[13px] uppercase tracking-wide text-navy/80 hover:text-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            About Us
          </Link>

          <Link
            to="/portfolio"
            className="relative py-2 font-bold transition-colors text-[13px] uppercase tracking-wide text-navy/80 hover:text-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="relative py-2 font-bold transition-colors text-[13px] uppercase tracking-wide text-navy/80 hover:text-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Contact Us
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link to="/contact" className="rounded-xl font-bold text-[13px] uppercase tracking-wide transition-colors px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="lg:hidden p-2 rounded-lg text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Unique Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border-grey shadow-[0_8px_0_0_rgba(16,29,54,0.06)] overflow-hidden"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => {setActiveMenu(null); setHoveredService(null);}}
          >
            <div className="w-full px-4 sm:px-8 lg:px-12">

              {/* Mega-Menu Navigation Links */}
              <div className="py-8 grid grid-cols-4 divide-x divide-border-grey">
                 {megaMenuData.map((col, idx) => (
                   <div key={idx} className="flex flex-col gap-3 px-8 first:pl-0">
                     <h4 className="text-brand-orange-dark font-mono font-bold text-[11px] uppercase tracking-widest border-b border-border-grey pb-2.5 flex items-center justify-between gap-3">
                       {col.title}
                       <span className="w-6 h-px bg-brand-orange-dark shrink-0" aria-hidden="true" />
                     </h4>
                     <ul className="flex flex-col gap-0.5">
                       {col.items.map((item, i) => (
                         <li
                           key={i}
                           className="group/item relative -ml-2.5 px-2.5 py-1.5 rounded-lg transition-colors hover:bg-grey-light cursor-pointer"
                           onMouseEnter={() => setHoveredService(item)}
                         >
                           <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0"></div>
                              <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[13px] font-semibold text-gray-600 group-hover/item:text-navy transition-colors w-full block text-left">
                                {item.name}
                              </Link>
                           </div>
                         </li>
                       ))}
                     </ul>
                     
                     {/* Render secondary section if it exists */}
                     {col.secondarySection && (
                       <div className="flex flex-col gap-3 mt-4">
                         <h4 className="text-brand-orange-dark font-mono font-bold text-[11px] uppercase tracking-widest border-b border-border-grey pb-2.5 flex items-center justify-between gap-3">
                           {col.secondarySection.title}
                           <span className="w-6 h-px bg-brand-orange-dark shrink-0" aria-hidden="true" />
                         </h4>
                         <ul className="flex flex-col gap-0.5">
                           {col.secondarySection.items.map((item, i) => (
                             <li
                               key={i}
                               className="group/item relative -ml-2.5 px-2.5 py-1.5 rounded-lg transition-colors hover:bg-grey-light cursor-pointer"
                               onMouseEnter={() => setHoveredService(item)}
                             >
                               <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0"></div>
                                  <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[13px] font-semibold text-gray-600 group-hover/item:text-navy transition-colors w-full block text-left">
                                    {item.name}
                                  </Link>
                               </div>
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}
                   </div>
                 ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[70] lg:hidden px-4 sm:px-8 py-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="text-2xl font-extrabold text-navy tracking-tight">BloomTech<span className="text-brand-orange">LK</span></span>
               <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-3 bg-grey-light rounded-full text-navy"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-navy hover:text-navy-mid transition-colors">Home</Link>
              
              {/* Services with Expandable Submenu */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                  className="text-3xl font-extrabold text-navy hover:text-navy-mid transition-colors text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 mt-6 ml-1">
                        {megaMenuData.map((column, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-2">
                            <h4 className="font-mono text-[11px] font-bold text-brand-orange-dark uppercase tracking-widest mb-1">
                              {column.title}
                            </h4>
                            {column.items.map((service, idx) => (
                              <Link
                                key={idx}
                                to={`/services/${service.slug}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="text-base font-bold text-gray-700 hover:text-navy transition-colors pl-4 border-l-2 border-border-grey hover:border-navy"
                              >
                                {service.name}
                              </Link>
                            ))}
                            {column.secondarySection && (
                              <>
                                <h4 className="font-mono text-[11px] font-bold text-brand-orange-dark uppercase tracking-widest mb-1 mt-3">
                                  {column.secondarySection.title}
                                </h4>
                                {column.secondarySection.items.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    to={`/services/${service.slug}`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className="text-base font-bold text-gray-700 hover:text-navy transition-colors pl-4 border-l-2 border-border-grey hover:border-navy"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/company" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-navy hover:text-navy-mid transition-colors">About Us</Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-navy hover:text-navy-mid transition-colors">Portfolio</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-navy hover:text-navy-mid transition-colors">Contact Us</Link>
            </div>
            <div className="mt-auto pt-10">
               <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-4 text-white font-bold rounded-xl bg-brand-orange hover:bg-brand-orange-dark transition-colors text-center">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
