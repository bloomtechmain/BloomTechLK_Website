import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, Check, Linkedin, Twitter, Facebook, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { sendInquiryEmail } from '../utils/emailjs';
import { PageHero, Section, Eyebrow, fade, fieldCls, labelCls, GUTTER } from '../components/kit';
import { photos } from '../components/photos';

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
    <div className="bg-white">
      <SEO config={seoConfigs.contact} />

      {/* Hero Section */}
      <PageHero
        photo={photos.colomboSkyline}
        eyebrow={<span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Talk to a Sri Lankan Tech Expert</span>}
        title={<>Let's build something <span className="block">great together</span></>}
        text="Whether you need AI automation, a custom web application, a new IT network, or a complete digital transformation strategy — our Mawaramandiya-based team is ready to help. We respond in Sinhala and English, usually within the same business day."
        minH="lg:min-h-[620px]"
      />

      {/* Contact Information — hairline strip */}
      <section className="bg-white border-b border-gray-200">
        <div className={GUTTER}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const inner = (
                <>
                  <span className="w-11 h-11 rounded-full bg-grey-light text-navy-mid flex items-center justify-center mb-5 transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                    {info.title}
                  </h3>
                  <p className="font-bold text-navy leading-relaxed whitespace-pre-line break-words">{info.content}</p>
                </>
              );
              const cls = `group block py-8 xl:py-10 pr-6 border-gray-200 border-b xl:border-b-0 ${i % 2 === 1 ? 'sm:border-l sm:pl-6' : ''} ${i > 0 ? 'xl:border-l xl:pl-8' : ''}`;
              return (
                <motion.div key={info.title} {...fade(i * 0.06)}>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${cls} h-full hover:bg-grey-light/60 transition-colors`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={`${cls} h-full`}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section tone="grey">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Information */}
          <motion.div {...fade()} className="lg:col-span-5">
            <Eyebrow>Let's Connect</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
              Tell us about your business
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Looking for custom software, AI automation, IT infrastructure, or a complete digital overhaul? Fill in the form and one of our Sri Lankan technology experts will respond within one business day — in Sinhala or English, whichever you prefer.
            </p>

            {/* WhatsApp Highlight */}
            <a
              href={`https://wa.me/${socialMedia.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-5 flex items-center gap-4 rounded-xl bg-white p-5 shadow-[5px_5px_0_0_#D5DAE3] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#101D36] transition-all"
            >
              <span className="w-11 h-11 rounded-full bg-grey-light text-navy-mid flex items-center justify-center shrink-0 transition-colors group-hover:bg-navy group-hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-extrabold text-navy mb-0.5">Prefer WhatsApp?</span>
                <span className="block text-sm text-gray-600 underline underline-offset-2 decoration-gray-300 group-hover:decoration-navy">
                  Message us directly — we respond in Sinhala and English
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-navy shrink-0 transition-colors" />
            </a>

            {/* Office Location Highlight */}
            <div className="rounded-2xl bg-navy overflow-hidden">
              <div className="relative h-40">
                <img src={photos.colomboAerial.src} alt={photos.colomboAerial.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
              </div>
              <div className="p-7 pt-5">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 mb-2">
                  Our Location
                </h3>
                <p className="text-white font-extrabold text-lg mb-5 leading-relaxed">
                  Mawaramandiya, Western Province, Sri Lanka
                </p>
                <div className="flex items-start gap-3 text-white/65">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div className="text-sm leading-relaxed">
                    <p>BloomTech.lk</p>
                    <p>XXPG+VXF, Makola - Udupila Rd</p>
                    <p>Mawaramandiya, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div {...fade(0.1)} className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 lg:p-11 shadow-[8px_8px_0_0_#101D36]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" strokeWidth={3} />
                </span>
                <h3 className="text-2xl font-extrabold text-navy mb-3">Message Sent!</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for reaching out. A member of our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={fieldCls}
                      placeholder="Kamal Perera"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={fieldCls}
                      placeholder="kamal@yourcompany.lk"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      We'll use this to send you relevant information and proposals
                    </p>
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className={labelCls}>
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={fieldCls}
                    placeholder="Your Business or Organisation"
                  />
                </div>

                {/* Area of Interest */}
                <fieldset>
                  <legend className={labelCls}>
                    I'm Interested In
                  </legend>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {interestOptions.map((interest, i) => {
                      const on = formData.interests.includes(interest);
                      return (
                        <label
                          key={i}
                          className={`relative inline-flex items-center gap-2.5 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-navy has-[:focus-visible]:ring-offset-2 ${
                            on ? 'bg-navy text-white' : 'bg-grey-light text-navy hover:bg-grey-hover'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() => handleInterestToggle(interest)}
                            className="sr-only"
                          />
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${on ? 'bg-brand-orange' : 'bg-white'}`} aria-hidden="true">
                            {on && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />}
                          </span>
                          {interest}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className={labelCls}>
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${fieldCls} resize-none`}
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
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
      </Section>

      {/* Social Media Section */}
      <Section tone="dark">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div {...fade()} className="lg:col-span-6">
            <Eyebrow light>Connect With Us</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Follow BloomTech.lk
            </h2>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Stay updated with the latest technology insights, success stories, and innovations from Sri Lanka's premier technology partner.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)} className="lg:col-span-6">
            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
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
                  className="w-14 h-14 rounded-xl bg-white/[0.06] text-white/80 flex items-center justify-center hover:bg-white hover:text-navy hover:-translate-y-1 transition-all"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Note */}
            <div className="rounded-xl bg-white/[0.05] p-6">
              <p className="text-white/65 leading-relaxed text-sm">
                <span className="font-bold text-white">Coming Soon:</span> Follow us across social platforms for exclusive technology insights, behind-the-scenes content, Sri Lankan business success stories, and the latest innovations from BloomTech.lk.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section tone="white">
        <motion.div {...fade()} className="max-w-3xl mb-12">
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            Find us in Mawaramandiya
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conveniently located in the Western Province — easily accessible from Colombo, Kandy, and across the island.
          </p>
        </motion.div>

        <motion.div {...fade(0.1)} className="rounded-2xl overflow-hidden bg-navy shadow-[8px_8px_0_0_#D5DAE3]">
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4 min-w-0">
              <span className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-white font-extrabold text-[15px] mb-0.5">BloomTech.lk — Sri Lanka Headquarters</h3>
                <p className="text-white/55 text-sm">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/Zvg7bWkgNqJ77Fek6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm whitespace-nowrap transition-colors shrink-0"
            >
              Open in Maps
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="h-[460px] bg-grey-light">
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
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default ContactUs;
