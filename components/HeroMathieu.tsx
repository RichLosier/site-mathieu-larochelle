import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeroMathieu.module.css';

const HeroMathieu: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      title: 'Votre partenaire pour investir à l\'étranger en toute confiance',
      subtitle: 'Expert en immobilier international, je vous accompagne dans vos projets d\'investissement en République Dominicaine, au Mexique et dans d\'autres destinations de rêve.',
      ctaPrimary: 'Planifier une rencontre',
      ctaSecondary: 'Découvrir les projets',
    },
    en: {
      title: 'Your partner for investing abroad with confidence',
      subtitle: 'International real estate expert, I guide you through your investment projects in the Dominican Republic, Mexico and other dream destinations.',
      ctaPrimary: 'Schedule a meeting',
      ctaSecondary: 'Discover projects',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            {/* Placeholder pour la photo de Mathieu */}
            <span>Photo de Mathieu Larochelle</span>
          </div>
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{t.title}</h1>
          <p className={styles.heroSubtitle}>{t.subtitle}</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              {t.ctaPrimary}
            </Link>
            <Link href="/projets" className={`${styles.btn} ${styles.btnSecondary}`}>
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMathieu;

