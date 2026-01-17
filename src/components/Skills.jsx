import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Skills({ skills }) {
    const [visibleSkills, setVisibleSkills] = useState([]);
    const [animatedLevels, setAnimatedLevels] = useState({});
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && visibleSkills.length === 0) {
                        // Trigger animation when section becomes visible
                        setVisibleSkills(skills.map((_, index) => index));

                        // Animate skill bars
                        setTimeout(() => {
                            const levels = {};
                            skills.forEach((skill, index) => {
                                levels[index] = skill.level;
                            });
                            setAnimatedLevels(levels);
                        }, 100);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [skills]);

    return (
        <section id="skills" className="section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-subtitle">{t('skills.subtitle')}</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{
                                        width: visibleSkills.includes(index)
                                            ? `${animatedLevels[index] || 0}%`
                                            : '0%',
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
