import React from 'react';
import { useRouter } from 'next/router';
import styles from './AdvisorBlock.module.css';

interface AdvisorBlockProps {
  image?: string;
  name?: string;
  title?: string;
  description?: string;
  socialLinks?: Array<{ name: string; href: string; icon: string }>;
}

const AdvisorBlock: React.FC<AdvisorBlockProps> = ({
  image,
  name = 'Mathieu Larochelle',
  title,
  description,
  socialLinks,
}) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const defaultTranslations = {
    fr: {
      title: 'Conseiller Immobilier International',
      description: 'Avec plus de 10 ans d\'expérience dans l\'immobilier international, je vous accompagne dans vos projets d\'investissement avec expertise et transparence. Mon objectif est de vous offrir les meilleures opportunités et un service personnalisé adapté à vos besoins.',
    },
    en: {
      title: 'International Real Estate Advisor',
      description: 'With over 10 years of experience in international real estate, I guide you through your investment projects with expertise and transparency. My goal is to offer you the best opportunities and personalized service tailored to your needs.',
    },
  };

  const t = defaultTranslations[currentLocale as 'fr' | 'en'];

  const defaultSocialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Facebook', href: '#', icon: 'f' },
    { name: 'Instagram', href: '#', icon: 'ig' },
  ];

  const links = socialLinks || defaultSocialLinks;

  return (
    <section className={styles.advisorBlock}>
      <div className={styles.advisorContent}>
        <div className={styles.advisorImage}>
          {image ? (
            <img src={image} alt={name} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{name}</span>
            </div>
          )}
        </div>
        <div className={styles.advisorText}>
          <h2 className={styles.advisorName}>{name}</h2>
          <p className={styles.advisorTitle}>{title || t.title}</p>
          <p className={styles.advisorDescription}>
            {description || t.description}
          </p>
          {links.length > 0 && (
            <div className={styles.socialLinks}>
              {links.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvisorBlock;

