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
  const { t, loading } = useLanguage();

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
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
        <p>Loading...</p>
      </div>
    );
  }

  // Helper to ensure we have data before rendering
  const profile = t('profile');
  const experience = t('experience.list');
  const skills = t('skills.list');
  const education = t('education.list');

  // Safe check if data isn't loaded yet or key is returned
  if (!profile || typeof profile !== 'object') {
    return <div className="loading"><p>{t('error') || 'Error loading data'}</p></div>;
  }

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero profile={profile} />
      <Experience experiences={experience} />
      <Skills skills={skills} />
      <Education education={education} />
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
