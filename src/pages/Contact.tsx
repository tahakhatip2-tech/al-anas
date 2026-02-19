import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const whatsappUrl = `https://wa.me/962782300589?text=${encodeURIComponent(
    t('Hello, I would like to book an event.', 'مرحباً، أود حجز موعد لتصوير أو إدارة فعالية.')
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/962782300589?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Contact Us', 'تواصل معنا')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("We'd love to hear from you. Get in touch and let's create something amazing.", 'يسعدنا التواصل معكم. تواصلوا معنا ولنصنع شيئاً مذهلاً معاً.')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t('Full Name', 'الاسم الكامل')}</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t('Your name', 'اسمك')}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('Email', 'البريد الإلكتروني')}</label>
                    <input
                      type="email"
                      maxLength={255}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={t('your@email.com', 'بريدك@الإلكتروني.com')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('Phone', 'الهاتف')}</label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="0782300589"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t('Message', 'الرسالة')}</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder={t('Tell us about your event...', 'أخبرنا عن فعاليتكم...')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  {t('Send via WhatsApp', 'أرسل عبر واتساب')}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t('Get in Touch', 'تواصل معنا')}</h3>
                <div className="space-y-4">
                  <a href="tel:0782300589" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t('Phone', 'الهاتف')}</p>
                      <p className="text-sm">0782300589</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t('Address', 'العنوان')}</p>
                      <p className="text-sm">{t('Al Gardens – Jaber Complex – 2nd Floor', 'الجاردنز – مجمع جبر – الطابق الثاني')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('Chat on WhatsApp', 'تحدث عبر واتساب')}
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0!2d35.89!3d31.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzM2LjAiTiAzNcKwNTMnMjQuMCJF!5e0!3m2!1sen!2sjo!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
