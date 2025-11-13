import React from 'react';
import { useRouter } from 'next/router';
import SearchFilter, { SearchFilters } from './SearchFilter';
import styles from './HeroWithSearch.module.css';

const HeroWithSearch: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      title: 'Vos Conseillers pour investir à l\'étranger en toute confiance',
      subtitle: 'Conseiller immobilier international',
      name: 'Mathieu Larochelle',
      phone: '+1 (XXX) XXX-XXXX',
      email: 'info@mathieularochelle.com',
      searchPlaceholder: 'Recherche par ville ou par région',
    },
    en: {
      title: 'Your Advisors to invest abroad with confidence',
      subtitle: 'International Real Estate Advisor',
      name: 'Mathieu Larochelle',
      phone: '+1 (XXX) XXX-XXXX',
      email: 'info@mathieularochelle.com',
      searchPlaceholder: 'Search by city or region',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const handleSearch = (filters: SearchFilters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/projets?${params.toString()}`);
  };

  return (
    <section className={styles.heroWithSearch}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <h1 className={styles.heroTitle}>{t.title}</h1>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchWrapper}>
            <SearchFilter onSearch={handleSearch} />
          </div>
        </div>

        <div className={styles.advisorInfo}>
          <div className={styles.advisorCard}>
            <h3 className={styles.advisorTitle}>{t.subtitle}</h3>
            <h4 className={styles.advisorName}>{t.name}</h4>
            <div className={styles.advisorContact}>
              <a href={`tel:${t.phone}`} className={styles.contactLink}>
                {t.phone}
              </a>
              <a href={`mailto:${t.email}`} className={styles.contactLink}>
                {t.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithSearch;

