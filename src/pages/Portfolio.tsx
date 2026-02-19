import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const Portfolio = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filters = [
    { key: 'all', label: t('All', 'الكل') },
    { key: 'wedding', label: t('Weddings', 'حفلات الزفاف') },
    { key: 'corporate', label: t('Corporate', 'الشركات') },
    { key: 'parties', label: t('Parties', 'الحفلات') },
    { key: 'decoration', label: t('Decoration', 'الديكور') },
  ];

  const images = [
    { src: portfolio1, category: 'wedding', title: t('Wedding Moments', 'لحظات الزفاف') },
    { src: portfolio2, category: 'corporate', title: t('Corporate Gala', 'حفل الشركات') },
    { src: portfolio3, category: 'wedding', title: t('Engagement Ceremony', 'حفل الخطوبة') },
    { src: portfolio4, category: 'decoration', title: t('Venue Decoration', 'تزيين المكان') },
    { src: portfolio5, category: 'corporate', title: t('Video Production', 'إنتاج الفيديو') },
    { src: portfolio6, category: 'parties', title: t('Celebration Hall', 'قاعة الاحتفال') },
  ];

  const filtered = activeFilter === 'all' ? images : images.filter(img => img.category === activeFilter);

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev + 1) % filtered.length : 0);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0);
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight') lang === 'ar' ? goPrev() : goNext();
      else if (e.key === 'ArrowLeft') lang === 'ar' ? goNext() : goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, lang, goNext, goPrev]);

  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Our Portfolio', 'أعمالنا')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('Explore our collection of beautiful moments captured across events.', 'استكشفوا مجموعتنا من اللحظات الجميلة التي وثقناها.')}
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? 'gradient-primary text-primary-foreground shadow-glow'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightboxIndex(i)}
                className="rounded-2xl overflow-hidden group cursor-pointer relative aspect-[4/3]"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-primary-foreground font-display font-semibold text-lg">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} z-10 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors`}
            >
              <ChevronLeft className={`w-6 h-6 text-primary-foreground ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className={`absolute ${lang === 'ar' ? 'left-4' : 'right-4'} z-10 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors`}
            >
              <ChevronRight className={`w-6 h-6 text-primary-foreground ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-background/20 backdrop-blur-sm">
              <p className="text-primary-foreground font-display font-semibold text-sm">
                {filtered[lightboxIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
