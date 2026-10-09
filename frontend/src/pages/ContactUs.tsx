import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { sendInquiryEmail } from '../utils/emailjs';
import { NAVY, ORANGE, ORANGE_LIGHT, GREY, FONT_SANS } from '../styles/designTokens';

const vp = { once: true, margin: '-80px' } as const;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    'Custom Software Development (CRM / ERP / Web / Mobile App)',
    'AI, Automation & Machine Learning',
    'IT Infrastructure, Networking & Cybersecurity',
    'Digital Marketing & SEO (Sinhala / English)',
    'Cloud Hosting & Managed IT Services'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendInquiryEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        interests: formData.interests.length ? formData.interests.join(', ') : undefined,
        message: formData.message,
      });
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          interests: [],
          message: ''
        });
      }, 3000);
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: socialMedia.phone,
      link: `tel:${socialMedia.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with our team on WhatsApp — quick responses in Sinhala or English',
      link: `https://wa.me/${socialMedia.whatsapp}`,
    },
    {
      icon: Mail,
      title: 'Email',
      content: socialMedia.email,
      link: `mailto:${socialMedia.email}`,
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'BloomTech.lk\nXXPG+VXF, Makola - Udupila Rd\nMawaramandiya, Sri Lanka',
      link: 'https://maps.app.goo.gl/Zvg7bWkgNqJ77Fek6',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday – Friday\n8:30 AM – 5:30 PM (SLST)\nSaturday: 9:00 AM – 1:00 PM',
      link: null,
    }
  ];

  return (
    <div style={{ fontFamily: FONT_SANS }}>
      <SEO config={seoConfigs.contact} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
              <p className="text-sm font-semibold tracking-wide inline-flex items-center gap-2" style={{ color: ORANGE_LIGHT }}>
                <Mail className="w-4 h-4" /> Talk to a Sri Lankan Tech Expert
              </p>
              <span className="w-8 h-[2px]" style={{ backgroundColor: ORANGE }} />
            </div>

            <h1 className="text-[2.75rem] md:text-[3.4rem] font-bold mb-6 leading-[1.08] tracking-tight text-white">
              Let's build something <span style={{ color: ORANGE }}>great together</span>
            </h1>

            <p className="text-lg text-white/72 leading-relaxed max-w-2xl mx-auto">
              Whether you need AI automation, a custom web application, a new IT network, or a complete digital transformation strategy — our Mawaramandiya-based team is ready to help. We respond in Sinhala and English, usually within the same business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-6 bg-white relative -mt-16 z-20">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-white rounded-xl p-7 border border-gray-200 shadow-[0_8px_24px_-12px_rgba(16,29,54,0.15)] hover:shadow-[0_12px_28px_-12px_rgba(16,29,54,0.22)] hover:-translate-y-1 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-5 h-5" style={{ color: ORANGE }} />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400 mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-[15px] leading-relaxed hover:opacity-70 transition-opacity whitespace-pre-line block"
                      style={{ color: NAVY }}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="font-semibold text-[15px] leading-relaxed whitespace-pre-line" style={{ color: NAVY }}>
                      {info.content}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Column — Information */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>
                Let's Connect
              </p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-5" style={{ color: NAVY }}>
                Tell us about your business
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Looking for custom software, AI automation, IT infrastructure, or a complete digital overhaul? Fill in the form and one of our Sri Lankan technology experts will respond within one business day — in Sinhala or English, whichever you prefer.
              </p>

              {/* WhatsApp Highlight */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-green-50 ring-1 ring-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-[15px] mb-0.5" style={{ color: NAVY }}>Prefer WhatsApp?</p>
                  <a
                    href={`https://wa.me/${socialMedia.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors underline underline-offset-2"
                  >
                    Message us directly — we respond in Sinhala and English
                  </a>
                </div>
              </div>

              {/* Office Location Highlight */}
              <div className="rounded-xl p-7" style={{ backgroundColor: NAVY }}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/45 mb-3">
                  Our Location
                </h3>
                <p className="text-white font-semibold text-lg mb-5 leading-relaxed">
                  Mawaramandiya, Western Province, Sri Lanka
                </p>
                <div className="flex items-start gap-3 text-white/65">
                  <MapPin className="w-4 h-4 mt-1 shrink-0" style={{ color: ORANGE }} />
                  <div className="text-sm leading-relaxed">
                    <p>BloomTech.lk</p>
                    <p>XXPG+VXF, Makola - Udupila Rd</p>
                    <p>Mawaramandiya, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)]"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 rounded-full bg-green-50 ring-1 ring-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>Message Sent!</h3>
                  <p className="text-gray-500 text-center text-[15px]">
                    Thank you for reaching out. A member of our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors text-[15px]"
                      style={{ color: NAVY }}
                      placeholder="Kamal Perera"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors text-[15px]"
                      style={{ color: NAVY }}
                      placeholder="kamal@yourcompany.lk"
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                      We'll use this to send you relevant information and proposals
                    </p>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors text-[15px]"
                      style={{ color: NAVY }}
                      placeholder="Your Business or Organisation"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      I'm Interested In
                    </label>
                    <div className="space-y-2.5">
                      {interestOptions.map((interest, i) => (
                        <label
                          key={i}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#FF6B00] focus:ring-[#FF6B00] cursor-pointer"
                          />
                          <span className="text-gray-600 text-sm group-hover:text-[#0c1a36] transition-colors">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors text-[15px] resize-none"
                      style={{ color: NAVY }}
                      placeholder="Briefly describe what you're trying to achieve or the challenge you're facing"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 text-white rounded-lg font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] hover:shadow-[0_10px_26px_-6px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_20px_-6px_rgba(255,107,0,0.5)] transition-all flex items-center justify-center gap-2 group"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE_LIGHT }}>
              Connect With Us
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight mb-5 text-white">
              Follow BloomTech.lk
            </h2>
            <p className="text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto text-[15px]">
              Stay updated with the latest technology insights, success stories, and innovations from Sri Lanka's premier technology partner.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Linkedin, href: socialMedia.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: socialMedia.twitter, label: 'X (Twitter)' },
                { icon: Facebook, href: socialMedia.facebook, label: 'Facebook' },
                { icon: Instagram, href: socialMedia.instagram, label: 'Instagram' },
                { icon: MessageCircle, href: `https://wa.me/${socialMedia.whatsapp}`, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-14 h-14 rounded-lg flex items-center justify-center border border-white/10 hover:border-white/25 transition-all"
                  style={{ backgroundColor: 'rgba(255,107,0,0.1)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: ORANGE }} />
                </a>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="rounded-xl p-6 border border-white/10" style={{ backgroundColor: '#16233F' }}>
                <p className="text-white/60 leading-relaxed text-sm">
                  <span className="font-semibold" style={{ color: ORANGE }}>Coming Soon:</span> Follow us across social platforms for exclusive technology insights, behind-the-scenes content, Sri Lankan business success stories, and the latest innovations from BloomTech.lk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: ORANGE }}>
                Visit Us
              </p>
              <h2 className="text-3xl md:text-[2.25rem] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: NAVY }}>
                Find us in Mawaramandiya
              </h2>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Conveniently located in the Western Province — easily accessible from Colombo, Kandy, and across the island.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-[0_1px_3px_rgba(16,29,54,0.04)]">
              <div className="p-5 flex items-center justify-between gap-4" style={{ backgroundColor: NAVY }}>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-0.5">BloomTech.lk — Sri Lanka Headquarters</h3>
                  <p className="text-white/55 text-sm">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/Zvg7bWkgNqJ77Fek6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all shrink-0"
                  style={{ color: NAVY }}
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-[460px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962!2d80.013!3d7.085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9000ffceaed%3A0xd3ff39b6e7954358!2sBloomTech%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1746000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  className="w-full h-full borderless-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BloomTech.lk Sri Lanka Headquarters — Mawaramandiya"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
