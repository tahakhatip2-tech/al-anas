import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { lang, setLang, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('Home', 'الرئيسية') },
    { path: '/about', label: t('About', 'من نحن') },
    { path: '/services', label: t('Services', 'خدماتنا') },
    { path: '/portfolio', label: t('Portfolio', 'أعمالنا') },
    { path: '/packages', label: t('Packages', 'الباقات') },
    { path: '/contact', label: t('Contact', 'تواصل معنا') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Al-Ons Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span className="text-xl md:text-2xl font-display font-bold gradient-text">
              {t('Al-Ons', 'الأُنس')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                  ? 'gradient-primary text-primary-foreground'
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <a
              href="tel:0782300589"
              className="hidden md:flex items-center gap-1 text-sm text-primary font-medium hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>0782300589</span>
            </a>

            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                    ? 'gradient-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
