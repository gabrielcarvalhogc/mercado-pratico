import { useState, useEffect } from 'react';
import styles from './MenuLinks.module.scss';

export function MenuLinks() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const linksList = ['Bebidas', 'Frios', 'Higiene', 'Padaria', 'Feira'];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  function switchLinks(category: string) {
    return `#${category}`;
  }

  return (
    <nav>
      <ul className={styles.list}>
      {linksList.map((category, index) => (
        <li key={index}>
          <a
            href={switchLinks(category)}
            className={`${styles.link} ${activeSection === category ? styles.active : ''}`}
            >
            {category}
          </a>
        </li>
      ))}
      </ul>
    </nav>
  )
}