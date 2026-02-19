import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const { t } = useLanguage();

  const message = t(
    'Hello, I would like to book an event.',
    'مرحباً، أود حجز موعد لتصوير أو إدارة فعالية.'
  );

  const url = `https://wa.me/962782300589?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
