import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Experience({ experiences }) {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.indexOf(entry.target);
                        if (index !== -1 && !visibleItems.includes(index)) {
                            setVisibleItems((prev) => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('experience.title')}</h2>
                    <p className="section-subtitle">{t('experience.subtitle')}</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`timeline-item ${exp.current ? 'current' : ''} ${visibleItems.includes(index) ? 'visible' : ''
                                }`}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-company">{exp.company}</h3>
                                    <p className="timeline-position">{exp.position}</p>
                                    <div className="timeline-meta">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.duration}
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                                <p className="timeline-description">{exp.description}</p>
                                {exp.achievements && exp.achievements.length > 0 && (
                                    <ul className="timeline-achievements">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
