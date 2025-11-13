import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './RegionsList.module.css';

interface Region {
  id: string;
  name: string;
  description: string;
  image?: string;
  projectsCount?: number;
}

interface RegionsListProps {
  regions?: Region[];
  title?: string;
  subtitle?: string;
}

const RegionsList: React.FC<RegionsListProps> = ({ regions, title, subtitle }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const defaultRegions: Region[] = [
    {
      id: 'punta-cana',
      name: 'Punta Cana',
      description: 'Destination de rêve avec plages paradisiaques et complexes hôteliers de classe mondiale.',
      projectsCount: 25,
    },
    {
      id: 'cap-cana',
      name: 'Cap Cana',
      description: 'Communauté résidentielle exclusive avec marina de luxe et terrains de golf de renommée mondiale.',
      projectsCount: 15,
    },
    {
      id: 'bavaro',
      name: 'Bavaro',
      description: 'Zone en pleine expansion avec excellentes opportunités d\'investissement et croissance constante.',
      projectsCount: 18,
    },
    {
      id: 'mexique',
      name: 'Mexique',
      description: 'Marché dynamique avec diversité de projets et excellent potentiel de croissance.',
      projectsCount: 12,
    },
  ];

  const translations = {
    fr: {
      title: 'Régions populaires',
      subtitle: 'Découvrez les destinations où nous opérons',
      projects: 'projets',
      discover: 'Découvrir',
    },
    en: {
      title: 'Popular regions',
      subtitle: 'Discover the destinations where we operate',
      projects: 'projects',
      discover: 'Discover',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];
  const displayRegions = regions || defaultRegions;

  return (
    <section className={styles.regionsList}>
      <div className={styles.regionsContent}>
        <div className={styles.regionsHeader}>
          <h2 className={styles.regionsTitle}>{title || t.title}</h2>
          <p className={styles.regionsSubtitle}>{subtitle || t.subtitle}</p>
        </div>

        <div className={styles.regionsGrid}>
          {displayRegions.map((region) => (
            <Link
              key={region.id}
              href={`/regions/${region.id}`}
              className={styles.regionCard}
            >
              <div className={styles.regionImage}>
                {region.image ? (
                  <img src={region.image} alt={region.name} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>{region.name}</span>
                  </div>
                )}
              </div>
              <div className={styles.regionContent}>
                <h3 className={styles.regionName}>{region.name}</h3>
                <p className={styles.regionDescription}>{region.description}</p>
                {region.projectsCount !== undefined && (
                  <div className={styles.regionProjects}>
                    {region.projectsCount} {t.projects}
                  </div>
                )}
                <span className={styles.regionLink}>{t.discover} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsList;

