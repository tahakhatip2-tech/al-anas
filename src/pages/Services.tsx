import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Camera, Users, Sparkles, Film, PartyPopper, Lightbulb, MessageCircle } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const Services = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/962782633162?text=${encodeURIComponent(
    t('Hello, I would like to book an event.', 'مرحباً، أود حجز موعد لتصوير أو إدارة فعالية.')
  )}`;

  const services = [
    { icon: Camera, img: portfolio1, title: t('Wedding Photography', 'تصوير حفلات الزفاف'), desc: t('Professional wedding photography that captures every emotion, every smile, and every tear of joy. We create timeless visual stories of your most important day.', 'تصوير احترافي لحفلات الزفاف يلتقط كل مشاعر وكل ابتسامة وكل دمعة فرح. نصنع قصصاً بصرية خالدة ليومكم الأهم.') },
    { icon: PartyPopper, img: portfolio3, title: t('Engagement & Parties', 'حفلات الخطوبة والمناسبات'), desc: t('From engagement celebrations to birthday parties, we photograph and manage events that sparkle with joy and excitement.', 'من حفلات الخطوبة إلى أعياد الميلاد، نصوّر وندير فعاليات تتألق بالفرح والحماس.') },
    { icon: Users, img: portfolio2, title: t('Corporate Events', 'فعاليات الشركات'), desc: t('Professional coverage for conferences, galas, product launches, and corporate celebrations with impeccable attention to detail.', 'تغطية احترافية للمؤتمرات والحفلات وإطلاق المنتجات واحتفالات الشركات بدقة واهتمام بالتفاصيل.') },
    { icon: Sparkles, img: portfolio6, title: t('Full Event Management', 'إدارة الفعاليات الكاملة'), desc: t('End-to-end event planning, coordination, and execution. We handle every detail so you can enjoy your celebration.', 'تخطيط وتنسيق وتنفيذ الفعاليات من البداية للنهاية. نهتم بكل التفاصيل لتستمتعوا باحتفالكم.') },
    { icon: Lightbulb, img: portfolio4, title: t('Decoration & Lighting', 'الديكور والإضاءة'), desc: t('Transform any venue into a stunning spectacle with our creative decoration and professional lighting design.', 'حوّلوا أي مكان إلى مشهد مذهل بديكوراتنا الإبداعية وتصميم الإضاءة الاحترافي.') },
    { icon: Film, img: portfolio5, title: t('Video Production', 'إنتاج الفيديو'), desc: t('Cinematic video production including highlight reels, full event coverage, and creative short films of your celebrations.', 'إنتاج فيديو سينمائي يشمل مقاطع مميزة وتغطية كاملة وأفلام قصيرة إبداعية لاحتفالاتكم.') },
  ];

  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Our Services', 'خدماتنا')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('Comprehensive photography and event management solutions for every occasion.', 'حلول شاملة للتصوير وإدارة الفعاليات لكل مناسبة.')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img src={service.img} alt={service.title} className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('Book This Service', 'احجز هذه الخدمة')}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
