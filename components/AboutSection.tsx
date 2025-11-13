import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  title?: string;
  content?: string;
  image?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content, image }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      title: 'À propos de Mathieu',
      subtitle: 'Votre expert en immobilier international',
      content: 'Avec plus de 10 ans d\'expérience dans l\'immobilier international, Mathieu Larochelle a accompagné des centaines d\'investisseurs dans leurs projets à l\'étranger. Sa connaissance approfondie des marchés immobiliers en République Dominicaine, au Mexique et dans d\'autres destinations de rêve, combinée à son approche personnalisée, fait de lui le partenaire idéal pour vos investissements.',
      mission: 'Mission',
      missionContent: 'Offrir à chaque client un accompagnement sur mesure, transparent et professionnel, en leur permettant de réaliser leurs rêves d\'investissement immobilier à l\'étranger avec confiance et sérénité.',
      values: 'Valeurs',
      valuesList: [
        { title: 'Transparence', description: 'Communication claire et honnête à chaque étape' },
        { title: 'Expertise', description: 'Connaissance approfondie des marchés internationaux' },
        { title: 'Accompagnement', description: 'Support personnalisé du début à la fin' },
      ],
      cta: 'En savoir plus',
      ctaLink: '/a-propos',
    },
    en: {
      title: 'About Mathieu',
      subtitle: 'Your international real estate expert',
      content: 'With over 10 years of experience in international real estate, Mathieu Larochelle has guided hundreds of investors in their projects abroad. His deep knowledge of real estate markets in the Dominican Republic, Mexico and other dream destinations, combined with his personalized approach, makes him the ideal partner for your investments.',
      mission: 'Mission',
      missionContent: 'To offer each client a tailored, transparent and professional service, enabling them to realize their dreams of investing in real estate abroad with confidence and peace of mind.',
      values: 'Values',
      valuesList: [
        { title: 'Transparency', description: 'Clear and honest communication at every step' },
        { title: 'Expertise', description: 'Deep knowledge of international markets' },
        { title: 'Support', description: 'Personalized support from start to finish' },
      ],
      cta: 'Learn more',
      ctaLink: '/a-propos',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>{title || t.title}</h2>
          <p className={styles.aboutSubtitle}>{t.subtitle}</p>
          <p className={styles.aboutContentText}>
            {content || t.content}
          </p>

          <div className={styles.missionBlock}>
            <h3 className={styles.missionTitle}>{t.mission}</h3>
            <p className={styles.missionContent}>{t.missionContent}</p>
          </div>

          <div className={styles.valuesBlock}>
            <h3 className={styles.valuesTitle}>{t.values}</h3>
            <div className={styles.valuesList}>
              {t.valuesList.map((value, index) => (
                <div key={index} className={styles.valueItem}>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href={t.ctaLink} className={styles.ctaLink}>
            {t.cta} →
          </Link>
        </div>

        {image && (
          <div className={styles.aboutImage}>
            <img src={image} alt={title || t.title} className={styles.image} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;

