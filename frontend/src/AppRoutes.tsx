import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Direct imports for SSR compatibility
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceDetails from './pages/ServiceDetails';
import Dashboard from './pages/Dashboard';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import BloomSwiftPOS from './pages/BloomSwiftPOS';
import BloomGo from './pages/BloomGo';

function AppRoutes() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}>
      <AuthProvider>
        <div className="selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services/bloomswift-pos" element={<BloomSwiftPOS />} />
            <Route path="/services/bloomgo" element={<BloomGo />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default AppRoutes;
