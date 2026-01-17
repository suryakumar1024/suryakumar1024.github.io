import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">{t('nav.portfolio')}</div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a onClick={() => scrollToSection('hero')}>{t('nav.home')}</a></li>
            <li><a onClick={() => scrollToSection('experience')}>{t('nav.experience')}</a></li>
            <li><a onClick={() => scrollToSection('skills')}>{t('nav.skills')}</a></li>
            <li><a onClick={() => scrollToSection('education')}>{t('nav.education')}</a></li>
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
