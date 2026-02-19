import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Camera, Star, Users, Sparkles, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const Index = () => {
  const { t, lang } = useLanguage();

  const whatsappUrl = `https://wa.me/962782633162?text=${encodeURIComponent(
    t('Hello, I would like to book an event.', 'مرحباً، أود حجز موعد لتصوير أو إدارة فعالية.')
  )}`;

  const services = [
    { icon: Camera, title: t('Wedding Photography', 'تصوير حفلات الزفاف'), desc: t('Capturing every precious moment of your special day with artistry and elegance.', 'نوثق كل لحظة ثمينة في يومكم المميز بفن وأناقة.') },
    { icon: Users, title: t('Event Management', 'إدارة الفعاليات'), desc: t('Complete event planning and coordination for unforgettable celebrations.', 'تخطيط وتنسيق كامل للفعاليات لاحتفالات لا تُنسى.') },
    { icon: Sparkles, title: t('Decoration & Lighting', 'الديكور والإضاءة'), desc: t('Transform venues into magical spaces with stunning decor and lighting.', 'نحوّل الأماكن إلى مساحات ساحرة بديكور وإضاءة مذهلة.') },
    { icon: Star, title: t('Video Production', 'إنتاج الفيديو'), desc: t('Cinematic video production to relive your most cherished moments.', 'إنتاج فيديو سينمائي لاسترجاع أجمل لحظاتكم.') },
  ];

  const testimonials = [
    { name: t('Sarah & Ahmad', 'سارة وأحمد'), text: t('Al-Ons made our wedding absolutely magical. The photos are breathtaking!', 'جعل فريق الأُنس حفل زفافنا سحرياً. الصور خلابة!'), role: t('Wedding Couple', 'عروسان') },
    { name: t('Noor Events Co.', 'شركة نور للفعاليات'), text: t('Professional, creative, and always delivering beyond expectations.', 'محترفون ومبدعون ويتجاوزون التوقعات دائماً.'), role: t('Corporate Client', 'عميل مؤسسي') },
    { name: t('Layla Hassan', 'ليلى حسن'), text: t('The best event management team we have ever worked with. Highly recommend!', 'أفضل فريق إدارة فعاليات تعاملنا معه. ننصح بهم بشدة!'), role: t('Birthday Party', 'حفلة عيد ميلاد') },
  ];

  return (
    <>
      {/* SEO */}
      <title>{t('Al-Ons Event Photography & Event Management', 'الأُنس لتصوير الفعاليات وإدارة المناسبات')}</title>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-dark-overlay)' }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto">
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-secondary text-sm md:text-base uppercase tracking-widest mb-4 font-medium"
            >
              {t('Al-Ons Event Photography', 'الأُنس لتصوير الفعاليات')}
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              style={{ color: 'white' }}
            >
              {t('Capturing Your Moments, Creating Unforgettable Events', 'نوثق لحظاتكم ونصنع فعاليات لا تُنسى')}
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl mb-8 opacity-80"
              style={{ color: 'white' }}
            >
              {t(
                'Premium photography and event management services for your most important celebrations.',
                'خدمات تصوير وإدارة فعاليات متميزة لأهم احتفالاتكم.'
              )}
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-primary font-semibold shadow-glow hover:opacity-90 transition-opacity text-primary-foreground"
              >
                <MessageCircle className="w-5 h-5" />
                {t('Book via WhatsApp', 'احجز عبر واتساب')}
              </a>
              <a
                href="tel:0782633162"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 font-semibold hover:bg-primary-foreground/10 transition-colors"
                style={{ color: 'white' }}
              >
                <Phone className="w-5 h-5" />
                {t('Call Us', 'اتصل بنا')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('Our Services', 'خدماتنا')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('We offer comprehensive event photography and management services tailored to your needs.', 'نقدم خدمات تصوير وإدارة فعاليات شاملة ومصممة حسب احتياجاتكم.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              {t('View All Services', 'عرض جميع الخدمات')}
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('Our Portfolio', 'أعمالنا')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('A glimpse of the magical moments we have captured.', 'لمحة عن اللحظات الساحرة التي وثقناها.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[portfolio1, portfolio2, portfolio3, portfolio4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-square group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              {t('View Full Gallery', 'عرض المعرض كاملاً')}
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('What Our Clients Say', 'ماذا يقول عملاؤنا')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{item.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              {t('Ready to Create Unforgettable Moments?', 'مستعدون لصنع لحظات لا تُنسى؟')}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              {t('Contact us today and let us make your event extraordinary.', 'تواصل معنا اليوم ودعنا نجعل فعاليتكم استثنائية.')}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              {t('Book via WhatsApp', 'احجز عبر واتساب')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
