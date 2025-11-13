import React from 'react';
import { useRouter } from 'next/router';
import styles from './WhyChoose.module.css';

interface Reason {
  title: string;
  description: string;
  icon?: string;
}

interface WhyChooseProps {
  title?: string;
  subtitle?: string;
  reasons?: Reason[];
}

const WhyChoose: React.FC<WhyChooseProps> = ({ title, subtitle, reasons }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const defaultReasons: Reason[] = [
    {
      title: 'Expertise internationale',
      description: 'Plus de 10 ans d\'expérience dans l\'immobilier international avec une connaissance approfondie des marchés en République Dominicaine, au Mexique et dans d\'autres destinations.',
      icon: '🌍',
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Chaque client est unique. Nous adaptons notre approche à vos besoins spécifiques, de la recherche initiale jusqu\'à la finalisation de votre investissement.',
      icon: '🤝',
    },
    {
      title: 'Réseau de partenaires certifiés',
      description: 'Nous travaillons exclusivement avec des développeurs et partenaires de confiance, garantissant la qualité et la fiabilité de chaque projet.',
      icon: '✅',
    },
  ];

  const translations = {
    fr: {
      title: 'Pourquoi choisir Mathieu ?',
      subtitle: 'Les avantages de travailler avec un expert',
    },
    en: {
      title: 'Why choose Mathieu?',
      subtitle: 'The benefits of working with an expert',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];
  const displayReasons = reasons || defaultReasons;

  return (
    <section className={styles.whyChoose}>
      <div className={styles.whyChooseContent}>
        <div className={styles.whyChooseHeader}>
          <h2 className={styles.whyChooseTitle}>{title || t.title}</h2>
          <p className={styles.whyChooseSubtitle}>{subtitle || t.subtitle}</p>
        </div>

        <div className={styles.reasonsGrid}>
          {displayReasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              {reason.icon && (
                <div className={styles.reasonIcon}>{reason.icon}</div>
              )}
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

