import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>© {currentYear} {t('footer.rights')}. {t('footer.madeWith')} SuryaKumar K</p>
                </div>
            </div>
        </footer>
    );
}
