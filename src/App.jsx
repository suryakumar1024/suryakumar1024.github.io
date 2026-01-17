import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function AppContent() {
  const [theme, setTheme] = useState('light');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Load profile data
    fetch('/data/profile.json')
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading profile data:', error);
        setLoading(false);
      });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="loading">
        <p>{t('error')}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero profile={profileData.profile} />
      <Experience experiences={profileData.experience} />
      <Skills skills={profileData.skills} />
      <Education education={profileData.education} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
