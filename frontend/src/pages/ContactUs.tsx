import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { sendInquiryEmail } from '../utils/emailjs';

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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with our team on WhatsApp — quick responses in Sinhala or English',
      link: `https://wa.me/${socialMedia.whatsapp}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: socialMedia.email,
      link: `mailto:${socialMedia.email}`,
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'BloomTech.lk\nXXPG+VXF, Makola - Udupila Rd\nMawaramandiya, Sri Lanka',
      link: 'https://maps.app.goo.gl/Zvg7bWkgNqJ77Fek6',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday – Friday\n8:30 AM – 5:30 PM (SLST)\nSaturday: 9:00 AM – 1:00 PM',
      link: null,
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.contact} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#0c1a36] pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b00]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 text-[12px] font-bold tracking-[0.3em] text-white uppercase bg-[#ff6b00]/20 backdrop-blur-md border border-[#ff6b00]/30 rounded-full">
              <Mail className="w-4 h-4" />
              Talk to a Sri Lankan Tech Expert
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
              Let's Build Something <br />
              <span className="text-[#ff6b00]">Great Together.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium max-w-4xl mx-auto">
              Whether you need AI automation, a custom web application, a new IT network, or a complete digital transformation strategy — our Mawaramandiya-based team is ready to help. We respond in Sinhala and English, usually within the same business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6 bg-white relative -mt-20 z-20">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#ff6b00]/30 text-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#0c1a36] font-bold text-base leading-relaxed hover:text-[#ff6b00] transition-colors whitespace-pre-line block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#0c1a36] font-bold text-base leading-relaxed whitespace-pre-line">
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
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column — Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">
                Let's Connect
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
                Tell Us About Your Business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                Looking for custom software, AI automation, IT infrastructure, or a complete digital overhaul? Fill in the form and one of our Sri Lankan technology experts will respond within one business day — in Sinhala or English, whichever you prefer.
              </p>

              {/* WhatsApp Highlight */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-black text-green-800 mb-1">Prefer WhatsApp?</p>
                  <a
                    href={`https://wa.me/${socialMedia.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold hover:text-green-700 transition-colors underline underline-offset-2"
                  >
                    Message us directly — we respond in Sinhala and English
                  </a>
                </div>
              </div>

              {/* Office Location Highlight */}
              <div className="bg-gradient-to-br from-[#0c1a36] to-[#1a305c] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                    Our Location
                  </h3>
                  <p className="text-white font-bold text-xl mb-6 leading-relaxed">
                    Mawaramandiya, Western Province, Sri Lanka
                  </p>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#ff6b00] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">BloomTech.lk</p>
                      <p className="font-medium">XXPG+VXF, Makola - Udupila Rd</p>
                      <p className="font-medium">Mawaramandiya, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-[#0c1a36] mb-4">Message Sent!</h3>
                  <p className="text-gray-600 text-center font-medium">
                    Thank you for reaching out. A member of our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="Kamal Perera"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="kamal@yourcompany.lk"
                    />
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      We'll use this to send you relevant information and proposals
                    </p>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="Your Business or Organisation"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                      I'm Interested In
                    </label>
                    <div className="space-y-3">
                      {interestOptions.map((interest, i) => (
                        <label
                          key={i}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#ff6b00] focus:ring-[#ff6b00] cursor-pointer"
                          />
                          <span className="text-gray-700 font-medium group-hover:text-[#ff6b00] transition-colors">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36] resize-none"
                      placeholder="Briefly describe what you're trying to achieve or the challenge you're facing"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-600 text-sm font-bold">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-5 bg-[#ff6b00] text-white rounded-2xl font-black text-lg hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all flex items-center justify-center gap-3 group"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-32 px-6 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-[120px]"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">
              Connect With Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Follow BloomTech.lk
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Stay updated with the latest technology insights, success stories, and innovations from Sri Lanka's premier technology partner.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:border-transparent transition-all"
              >
                <Linkedin className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 hover:border-transparent transition-all"
              >
                <Twitter className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:border-transparent transition-all"
              >
                <Facebook className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all"
              >
                <Instagram className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${socialMedia.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 hover:border-transparent transition-all"
              >
                <MessageCircle className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Note */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-gray-300 font-medium leading-relaxed">
                  <span className="text-[#ff6b00] font-black">Coming Soon:</span> Follow us across social platforms for exclusive technology insights, behind-the-scenes content, Sri Lankan business success stories, and the latest innovations from BloomTech.lk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0c1a36] mb-4 leading-tight">
                Find Us in Mawaramandiya
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                Conveniently located in the Western Province — easily accessible from Colombo, Kandy, and across the island.
              </p>
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-gray-100">
              <div className="p-6 bg-gradient-to-r from-[#ff6b00] to-orange-600 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-black text-lg mb-1">BloomTech.lk — Sri Lanka Headquarters</h3>
                  <p className="text-white/80 text-sm font-medium">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/Zvg7bWkgNqJ77Fek6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-[#ff6b00] rounded-xl font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all"
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-[500px] bg-gray-100">
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
