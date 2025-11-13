import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './CTAConsultation.module.css';

interface CTAConsultationProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
}

const CTAConsultation: React.FC<CTAConsultationProps> = ({
  title,
  description,
  buttonText,
  buttonLink = '/contact',
  variant = 'primary',
}) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      title: 'Prêt à investir ? Planifions votre consultation gratuite',
      description: 'Discutons de vos objectifs d\'investissement et découvrons ensemble les meilleures opportunités qui correspondent à vos besoins.',
      buttonText: 'Planifier une rencontre',
    },
    en: {
      title: 'Ready to invest? Let\'s schedule your free consultation',
      description: 'Let\'s discuss your investment goals and discover together the best opportunities that match your needs.',
      buttonText: 'Schedule a meeting',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>{title || t.title}</h2>
        <p className={styles.ctaDescription}>{description || t.description}</p>
        <Link href={buttonLink} className={styles.ctaButton}>
          {buttonText || t.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTAConsultation;

