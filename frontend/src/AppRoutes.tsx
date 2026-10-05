import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Direct imports for SSR compatibility
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import BloomSwiftPOS from './pages/BloomSwiftPOS';
import BloomGo from './pages/BloomGo';

function AppRoutes() {
  return (
    <div className="selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/bloomswift-pos" element={<BloomSwiftPOS />} />
        <Route path="/services/bloomgo" element={<BloomGo />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
