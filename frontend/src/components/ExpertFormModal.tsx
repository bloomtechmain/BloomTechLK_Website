import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building2, Briefcase, MessageSquare, Send, CheckCircle2, Phone } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface ExpertFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceSlug: string;
}

const ExpertFormModal: React.FC<ExpertFormModalProps> = ({ isOpen, onClose, serviceName, serviceSlug }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        email: user.email,
      }));
    }
  }, [user, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('http://localhost:5000/api/expert/submit', {
        ...formData,
        serviceSlug,
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData(prev => ({ ...prev, message: '' }));
      }, 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen && !success) return null;

  return (
    <AnimatePresence>
      {(isOpen || success) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0c1a36]/80 backdrop-blur-md"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl shadow-[#ff6b00]/20"
          >
            {/* Background Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#ff6b00]/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="p-8 md:p-10">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {success ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h2 className="text-3xl font-black text-white mb-4">Request Received!</h2>
                  <p className="text-blue-100/70 text-lg max-w-md">
                    One of our senior <span className="text-[#ff6b00] font-bold">{serviceName}</span> experts will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-black text-white tracking-tight mb-2">Talk to an Expert</h2>
                    <p className="text-blue-100/60 font-medium">
                      Discussing solutions for: <span className="text-[#ff6b00]">{serviceName}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Work Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                          <Building2 size={18} />
                        </div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                          <Briefcase size={18} />
                        </div>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="Job Title"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute top-4 left-4 flex items-start pointer-events-none text-white/40 group-focus-within:text-[#ff6b00] transition-colors">
                        <MessageSquare size={18} className="mt-1" />
                      </div>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help your organization?"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#ff6b00] hover:bg-[#e65c00] disabled:bg-[#ff6b00]/50 text-white font-black uppercase tracking-widest py-4 px-6 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 mt-4 group"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-white/30 text-[10px] uppercase font-bold tracking-widest mt-4">
                      Secure connection via BloomTech Analytics Engine
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExpertFormModal;
