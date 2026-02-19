import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Download } from 'lucide-react';

const Packages = () => {
  const { t } = useLanguage();

  const whatsappUrl = (pkg: string) =>
    `https://wa.me/962782633162?text=${encodeURIComponent(
      t(`Hello, I would like to book the ${pkg} package.`, `مرحباً، أود حجز باقة ${pkg}.`)
    )}`;

  const packages = [
    {
      name: t('Silver', 'الفضية'),
      nameKey: 'Silver',
      price: t('Starting from 500 JD', 'تبدأ من 500 دينار'),
      features: [
        t('4 Hours Photography', '4 ساعات تصوير'),
        t('100+ Edited Photos', '100+ صورة معدّلة'),
        t('Online Gallery', 'معرض إلكتروني'),
        t('1 Photographer', 'مصور واحد'),
      ],
      featured: false,
    },
    {
      name: t('Gold', 'الذهبية'),
      nameKey: 'Gold',
      price: t('Starting from 900 JD', 'تبدأ من 900 دينار'),
      features: [
        t('8 Hours Photography', '8 ساعات تصوير'),
        t('300+ Edited Photos', '300+ صورة معدّلة'),
        t('Highlight Video', 'فيديو مميز'),
        t('2 Photographers', 'مصوران'),
        t('Printed Album', 'ألبوم مطبوع'),
        t('Drone Coverage', 'تغطية بالطائرة'),
      ],
      featured: true,
    },
    {
      name: t('Platinum', 'البلاتينية'),
      nameKey: 'Platinum',
      price: t('Starting from 1500 JD', 'تبدأ من 1500 دينار'),
      features: [
        t('Full Day Coverage', 'تغطية اليوم كاملاً'),
        t('500+ Edited Photos', '500+ صورة معدّلة'),
        t('Full Cinematic Video', 'فيديو سينمائي كامل'),
        t('3 Photographers', '3 مصورين'),
        t('Premium Album', 'ألبوم فاخر'),
        t('Event Management', 'إدارة الفعالية'),
        t('Decoration Included', 'الديكور مشمول'),
      ],
      featured: false,
    },
  ];

  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Our Packages', 'باقاتنا')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('Choose the perfect package for your event. Custom packages also available.', 'اختاروا الباقة المثالية لفعاليتكم. باقات مخصصة متاحة أيضاً.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-2xl p-8 relative ${
                  pkg.featured
                    ? 'gradient-primary text-primary-foreground shadow-glow scale-105'
                    : 'bg-background shadow-card'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {t('Most Popular', 'الأكثر شيوعاً')}
                  </span>
                )}
                <h3 className={`text-xl font-display font-bold mb-2 ${pkg.featured ? '' : 'text-foreground'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.featured ? 'opacity-90' : 'text-primary font-semibold'}`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${pkg.featured ? '' : 'text-primary'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(pkg.nameKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90 ${
                    pkg.featured
                      ? 'bg-background text-foreground'
                      : 'gradient-primary text-primary-foreground shadow-glow'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('Book This Package', 'احجز هذه الباقة')}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Download Catalog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="w-5 h-5" />
              {t('Download Full Catalog (PDF)', 'تحميل الكتالوج الكامل (PDF)')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Packages;
