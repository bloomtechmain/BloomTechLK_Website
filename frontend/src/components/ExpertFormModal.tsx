import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building2, Briefcase, MessageSquare, Send, CheckCircle2, Phone } from 'lucide-react';
import { sendInquiryEmail } from '../utils/emailjs';
import { NAVY, ORANGE, ORANGE_GRADIENT, FONT_SANS } from '../styles/designTokens';

interface ExpertFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceSlug: string;
}

const ExpertFormModal: React.FC<ExpertFormModalProps> = ({ isOpen, onClose, serviceName }) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const detailLines = [
        `Job Title: ${formData.jobTitle || '-'}`,
        `Phone: ${formData.phone || '-'}`,
        '',
        formData.message,
      ];

      await sendInquiryEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        interests: `Talk to an Expert — ${serviceName}`,
        message: detailLines.join('\n'),
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData(prev => ({ ...prev, message: '' }));
      }, 3000);
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
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
            className="absolute inset-0 bg-black/60"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="relative w-full max-w-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: NAVY, fontFamily: FONT_SANS }}
          >
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
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-3">Request Received!</h2>
                  <p className="text-white/60 text-base max-w-md">
                    One of our senior <span style={{ color: ORANGE }} className="font-semibold">{serviceName}</span> experts will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Talk to an Expert</h2>
                    <p className="text-white/55 text-[15px]">
                      Discussing solutions for: <span style={{ color: ORANGE }} className="font-medium">{serviceName}</span>
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
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-white/25 focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 outline-none transition-all"
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
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-white/25 focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 outline-none transition-all"
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
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-white/25 focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 outline-none transition-all"
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
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-white/25 focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 outline-none transition-all"
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
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-white/25 focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full disabled:opacity-50 text-white font-semibold text-[15px] py-3.5 px-6 rounded-lg shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:-translate-y-0.5 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4 group"
                      style={{ background: ORANGE_GRADIENT }}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Inquiry <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/35 text-xs mt-4">
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
