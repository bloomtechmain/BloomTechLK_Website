import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Business Applications (Salesforce/SAP/Oracle)',
    'System Integration (MuleSoft/Boomi)',
    'Cloud Strategy (AWS/Azure/GCP)',
    'Data & AI Solutions',
    'Professional Staffing / Augmentation'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(737) 329-8158',
      link: 'tel:+17373298158',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bloomtechusa.com',
      link: 'mailto:info@bloomtechusa.com',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'BloomTech Corporation\nXXPG+VXF, Makola - Udupila Rd\nMawaramandiya, Sri Lanka',
      link: 'https://www.google.com/maps/search/?api=1&query=XXPG%2BVXF+Makola+Udupila+Rd+Mawaramandiya+Sri+Lanka',
      color: 'from-green-500 to-emerald-500'
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
              Get In Touch
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
              AI Machine Learning & <br />
              <span className="text-[#ff6b00]">Enterprise Infrastructure Consulting</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium max-w-4xl mx-auto">
              We're ready to deliver AI machine learning solutions and enterprise infrastructure services tailored to your needs. Whether you need custom server design, machine learning consulting, or infrastructure services, our team of certified experts specializes in transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6 bg-white relative -mt-20 z-20">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
                      className="text-[#0c1a36] font-bold text-lg leading-relaxed hover:text-[#ff6b00] transition-colors whitespace-pre-line block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#0c1a36] font-bold text-lg leading-relaxed whitespace-pre-line">
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
            {/* Left Column - Information */}
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
                Request AI Machine Learning & Infrastructure Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                Looking for AI machine learning solutions, custom server design, or enterprise infrastructure services? Contact us to explore how our machine learning expertise and infrastructure servers can transform your business. Our solution architects respond within 24 hours.
              </p>

              {/* Office Location Highlight */}
              <div className="bg-gradient-to-br from-[#0c1a36] to-[#1a305c] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                    Our Location
                  </h3>
                  <p className="text-white font-bold text-xl mb-6 leading-relaxed">
                    Located in Mawaramandiya, Sri Lanka.
                  </p>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#ff6b00] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">BloomTech Corporation</p>
                      <p className="font-medium">XXPG+VXF, Makola - Udupila Rd</p>
                      <p className="font-medium">Mawaramandiya, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
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
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Name (First & Last)
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="john.doe@company.com"
                    />
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      So we can send you relevant technical documentation
                    </p>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36]"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                      Area of Interest
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
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#ff6b00] focus:outline-none transition-colors font-medium text-[#0c1a36] resize-none"
                      placeholder="Briefly describe your project goals or challenges"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-[#ff6b00] text-white rounded-2xl font-black text-lg hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Stay updated with the latest insights, innovations, and success stories from BloomTech.lk.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#linkedin"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:border-transparent transition-all"
              >
                <Linkedin className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#twitter"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 hover:border-transparent transition-all"
              >
                <Twitter className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#facebook"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:border-transparent transition-all"
              >
                <Facebook className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#instagram"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all"
              >
                <Instagram className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#youtube"
                className="group w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700 hover:border-transparent transition-all"
              >
                <Youtube className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Media Placeholder Note */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-gray-300 font-medium leading-relaxed">
                  <span className="text-[#ff6b00] font-black">Coming Soon:</span> Join our growing community across all major social platforms. Get exclusive insights, behind-the-scenes content, and be the first to know about our latest innovations and thought leadership.
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
                Find Us in Sri Lanka
              </h2>
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-gray-100">
              <div className="p-6 bg-gradient-to-r from-[#ff6b00] to-orange-600 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-black text-lg mb-1">Sri Lanka Headquarters</h3>
                  <p className="text-white/80 text-sm font-medium">XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=XXPG%2BVXF+Makola+Udupila+Rd+Mawaramandiya+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-[#ff6b00] rounded-xl font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all"
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-[500px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d80.0130!3d7.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWFhQRytWWEYrTWFrb2xhK1VkdXBpbGErUmQrTWF3YXJhbWFuZGl5YStTcmkrTGFua2E!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  className="w-full h-full borderless-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BloomTech Sri Lanka Office Location"
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
