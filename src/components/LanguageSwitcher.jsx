import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }
];

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="language-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
            >
                <span className="language-flag">{currentLanguage.flag}</span>
                <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${lang.code === language ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className="language-flag">{lang.flag}</span>
                            <span className="language-name">{lang.name}</span>
                            {lang.code === language && <span className="checkmark">✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
