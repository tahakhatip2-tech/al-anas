import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';

const About = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Award, title: t('Years of Experience', 'سنوات من الخبرة'), desc: t('Over 10 years of expertise in event photography and management.', 'أكثر من 10 سنوات من الخبرة في تصوير وإدارة الفعاليات.') },
    { icon: Heart, title: t('Passion & Dedication', 'شغف وتفانٍ'), desc: t('We pour our heart into every event we manage and every photo we take.', 'نضع كل شغفنا في كل فعالية نديرها وكل صورة نلتقطها.') },
    { icon: Target, title: t('Attention to Detail', 'اهتمام بالتفاصيل'), desc: t('Every detail matters – from lighting to composition to guest experience.', 'كل تفصيل مهم – من الإضاءة إلى التكوين إلى تجربة الضيوف.') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              {t('About Al-Ons', 'عن الأُنس')}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t(
                'Al-Ons is a premier event photography and management company dedicated to turning your most important celebrations into timeless memories. Founded with a passion for storytelling through images, we have grown to become one of the most trusted names in the event industry.',
                'الأُنس هي شركة رائدة في تصوير وإدارة الفعاليات، مكرسة لتحويل أهم احتفالاتكم إلى ذكريات خالدة. تأسسنا بشغف لرواية القصص من خلال الصور، ونمونا لنصبح أحد أكثر الأسماء موثوقية في صناعة الفعاليات.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={portfolio1} alt="Our story" className="rounded-2xl shadow-card w-full" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                {t('Our Story', 'قصتنا')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  'What started as a small passion project has blossomed into a full-service event photography and management company. We believe that every celebration tells a unique story, and our mission is to capture and enhance those stories with creativity, professionalism, and heart.',
                  'ما بدأ كمشروع صغير نابع من الشغف تحوّل إلى شركة متكاملة لتصوير وإدارة الفعاليات. نؤمن بأن كل احتفال يروي قصة فريدة، ومهمتنا هي توثيق وتعزيز تلك القصص بإبداع واحترافية ومن القلب.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{t('Our Mission', 'مهمتنا')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  'To deliver world-class event photography and management services that exceed expectations and create lasting memories for our clients.',
                  'تقديم خدمات تصوير وإدارة فعاليات عالمية المستوى تتجاوز التوقعات وتصنع ذكريات دائمة لعملائنا.'
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{t('Our Vision', 'رؤيتنا')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  'To be the leading event photography and management company in the region, known for creativity, reliability, and exceptional client satisfaction.',
                  'أن نكون الشركة الرائدة في تصوير وإدارة الفعاليات في المنطقة، المعروفة بالإبداع والموثوقية ورضا العملاء الاستثنائي.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-14"
          >
            {t('Why Choose Us', 'لماذا تختارنا')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
