import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  image?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  image,
  featured = false,
}) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      bedrooms: 'chambres',
      bathrooms: 'salles de bain',
      details: 'Voir les détails',
      from: 'À partir de',
    },
    en: {
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      details: 'View details',
      from: 'From',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <Link href={`/projets/${id}`} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image} alt={title} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{title}</span>
            </div>
          )}
          {featured && <span className={styles.featuredBadge}>Vedette</span>}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardLocation}>{location}</p>
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardType}>{type}</span>
            {(bedrooms || bathrooms) && (
              <div className={styles.cardSpecs}>
                {bedrooms && (
                  <span className={styles.spec}>
                    {bedrooms} {t.bedrooms}
                  </span>
                )}
                {bathrooms && (
                  <span className={styles.spec}>
                    {bathrooms} {t.bathrooms}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.cardPrice}>
              {t.from} {price}
            </span>
            <span className={styles.cardAction}>{t.details} →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

