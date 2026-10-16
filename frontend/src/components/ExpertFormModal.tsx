import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building2, Briefcase, MessageSquare, Send, Check, Phone } from 'lucide-react';
import { sendInquiryEmail } from '../utils/emailjs';
import { fieldCls } from './kit';

interface ExpertFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceSlug: string;
}

const iconCls = 'absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-navy transition-colors';
const inputCls = `${fieldCls} pl-12`;

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
            className="absolute inset-0 bg-navy-dark/75"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl bg-white shadow-[10px_10px_0_0_#101D36]"
          >
            <span className="absolute left-0 top-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
            <div className="p-7 sm:p-10">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-grey-light text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {success ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white mb-6"
                  >
                    <Check size={32} strokeWidth={3} />
                  </motion.div>
                  <h2 className="text-2xl font-extrabold text-navy mb-3">Request Received!</h2>
                  <p className="text-gray-600 text-base max-w-md">
                    One of our senior <span className="font-bold text-navy">{serviceName}</span> experts will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8 pr-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight mb-2">Talk to an Expert</h2>
                    <p className="text-gray-600 text-[15px]">
                      Discussing solutions for: <span className="font-bold text-navy">{serviceName}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <div className={iconCls}>
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div className="relative group">
                        <div className={iconCls}>
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Work Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <div className={iconCls}>
                          <Building2 size={18} />
                        </div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div className="relative group">
                        <div className={iconCls}>
                          <Briefcase size={18} />
                        </div>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="Job Title"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <div className={iconCls}>
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute top-4 left-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-navy transition-colors">
                        <MessageSquare size={18} className="mt-0.5" />
                      </div>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help your organization?"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputCls} resize-none`}
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 mt-2 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center font-mono text-[11px] font-bold uppercase tracking-widest text-gray-400 pt-2">
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
