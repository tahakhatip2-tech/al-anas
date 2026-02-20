import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4 flex items-center gap-2">
              <img src="/og-image.png" alt="al-aanas Logo" className="w-8 h-8 object-contain rounded-full" />
              {t('al-aanas', 'الأُنس')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                'Premium event photography and event management services. Capturing your moments, creating unforgettable events.',
                'خدمات تصوير فعاليات وإدارة مناسبات متميزة. نوثق لحظاتكم ونصنع فعاليات لا تُنسى.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('Quick Links', 'روابط سريعة')}</h4>
            <div className="flex flex-col gap-2">
              {[
                { path: '/about', label: t('About Us', 'من نحن') },
                { path: '/services', label: t('Services', 'خدماتنا') },
                { path: '/portfolio', label: t('Portfolio', 'أعمالنا') },
                { path: '/packages', label: t('Packages', 'الباقات') },
                { path: '/contact', label: t('Contact', 'تواصل معنا') },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('Our Services', 'خدماتنا')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>{t('Wedding Photography', 'تصوير حفلات الزفاف')}</span>
              <span>{t('Event Management', 'إدارة الفعاليات')}</span>
              <span>{t('Video Production', 'إنتاج الفيديو')}</span>
              <span>{t('Decoration & Lighting', 'الديكور والإضاءة')}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('Contact Us', 'تواصل معنا')}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:0782300589" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>0782300589</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>
                  {t(
                    'Al Gardens – Jaber Complex – 2nd Floor',
                    'الجاردنز – مجمع جبر – الطابق الثاني'
                  )}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {['facebook', 'instagram', 'tiktok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 {t('al-aanas Event Photography & Event Management', 'الأُنس لتصوير الفعاليات وإدارة المناسبات')}. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}</p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 text-xs md:text-sm"
          >
            <span>{t('Developed by', 'تم تطوير وبرمجة الموقع بواسطة')}</span>
            <motion.span
              animate={{
                color: ["#F59E0B", "#D97706", "#F59E0B"],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="font-bold cursor-default"
            >
              {t('Al-Khatib Software', 'الخطيب للبرمجيات')}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
