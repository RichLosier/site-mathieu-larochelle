import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchFilter.module.css';

interface SearchFilterProps {
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  country: string;
  region: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const [filters, setFilters] = useState<SearchFilters>({
    country: '',
    region: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
  });

  const translations = {
    fr: {
      title: 'Rechercher un projet',
      country: 'Pays',
      region: 'Région',
      type: 'Type de bien',
      minPrice: 'Prix minimum',
      maxPrice: 'Prix maximum',
      bedrooms: 'Chambres',
      bathrooms: 'Salles de bain',
      search: 'Rechercher',
      reset: 'Réinitialiser',
      all: 'Tous',
      apartment: 'Appartement',
      villa: 'Villa',
      house: 'Maison',
      land: 'Terrain',
    },
    en: {
      title: 'Search for a project',
      country: 'Country',
      region: 'Region',
      type: 'Property type',
      minPrice: 'Min price',
      maxPrice: 'Max price',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      search: 'Search',
      reset: 'Reset',
      all: 'All',
      apartment: 'Apartment',
      villa: 'Villa',
      house: 'House',
      land: 'Land',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const countries = ['République Dominicaine', 'Mexique', 'Costa Rica', 'Panama'];
  const regions = ['Punta Cana', 'Cap Cana', 'Bavaro', 'Playa del Carmen', 'Tulum'];
  const propertyTypes = ['apartment', 'villa', 'house', 'land'];

  const handleChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(filters);
    } else {
      // Default behavior: navigate to projects page with query params
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      router.push(`/projets?${params.toString()}`);
    }
  };

  const handleReset = () => {
    setFilters({
      country: '',
      region: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
    });
  };

  return (
    <section className={styles.searchFilter}>
      <div className={styles.searchContent}>
        <h2 className={styles.searchTitle}>{t.title}</h2>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="country">{t.country}</label>
              <select
                id="country"
                value={filters.country}
                onChange={(e) => handleChange('country', e.target.value)}
              >
                <option value="">{t.all}</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="region">{t.region}</label>
              <select
                id="region"
                value={filters.region}
                onChange={(e) => handleChange('region', e.target.value)}
              >
                <option value="">{t.all}</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="type">{t.type}</label>
              <select
                id="type"
                value={filters.type}
                onChange={(e) => handleChange('type', e.target.value)}
              >
                <option value="">{t.all}</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {t[type as keyof typeof t]}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="minPrice">{t.minPrice}</label>
              <input
                type="number"
                id="minPrice"
                value={filters.minPrice}
                onChange={(e) => handleChange('minPrice', e.target.value)}
                placeholder="0"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="maxPrice">{t.maxPrice}</label>
              <input
                type="number"
                id="maxPrice"
                value={filters.maxPrice}
                onChange={(e) => handleChange('maxPrice', e.target.value)}
                placeholder="∞"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="bedrooms">{t.bedrooms}</label>
              <select
                id="bedrooms"
                value={filters.bedrooms}
                onChange={(e) => handleChange('bedrooms', e.target.value)}
              >
                <option value="">{t.all}</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num}+
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="bathrooms">{t.bathrooms}</label>
              <select
                id="bathrooms"
                value={filters.bathrooms}
                onChange={(e) => handleChange('bathrooms', e.target.value)}
              >
                <option value="">{t.all}</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num}+
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.btnPrimary}>
              {t.search}
            </button>
            <button type="button" onClick={handleReset} className={styles.btnSecondary}>
              {t.reset}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchFilter;

