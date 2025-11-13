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
  status?: 'sur-plan' | 'pret-emmenager' | 'en-construction';
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
  status = 'sur-plan',
}) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      bedrooms: 'chambres',
      bathrooms: 'salles de bain',
      details: 'Voir les détails',
      from: 'Prix de départ',
      surPlan: 'Sur plan',
      pretEmmenager: 'Prêt à emménager',
      enConstruction: 'En construction',
    },
    en: {
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      details: 'View details',
      from: 'Starting from',
      surPlan: 'On plan',
      pretEmmenager: 'Ready to move in',
      enConstruction: 'Under construction',
    },
  };

  const statusLabels = {
    'sur-plan': translations[currentLocale as 'fr' | 'en'].surPlan,
    'pret-emmenager': translations[currentLocale as 'fr' | 'en'].pretEmmenager,
    'en-construction': translations[currentLocale as 'fr' | 'en'].enConstruction,
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
          <span className={`${styles.statusBadge} ${styles[status]}`}>
            {statusLabels[status]}
          </span>
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
            <div className={styles.cardPrice}>
              <span className={styles.priceLabel}>{t.from}</span>
              <span className={styles.priceValue}>{price}</span>
            </div>
            <span className={styles.cardAction}>{t.details} →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

