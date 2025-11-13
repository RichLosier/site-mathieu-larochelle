import React, { useState } from 'react';
import Head from 'next/head';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import SearchFilter, { SearchFilters } from '../../components/SearchFilter';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (filters: SearchFilters) => {
    // Simple filtering logic - can be enhanced
    let filtered = [...projects];

    if (filters.country) {
      filtered = filtered.filter((p) => p.location.includes(filters.country));
    }
    if (filters.region) {
      filtered = filtered.filter((p) => p.location.includes(filters.region));
    }
    if (filters.type) {
      filtered = filtered.filter((p) => p.type.toLowerCase() === filters.type.toLowerCase());
    }
    if (filters.bedrooms) {
      filtered = filtered.filter((p) => p.bedrooms && p.bedrooms >= parseInt(filters.bedrooms));
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Projets Immobiliers - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Découvrez notre sélection de projets immobiliers en République Dominicaine, au Mexique et dans d'autres destinations."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>Nos Projets Immobiliers</h1>
          <p>Explorez notre catalogue de projets d'investissement</p>
        </div>

        <SearchFilter onSearch={handleSearch} />

        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Sample projects data
const projects = [
  {
    id: 'andara',
    title: 'Andara',
    location: 'Punta Cana, République Dominicaine',
    price: '$250,000',
    type: 'Appartement',
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
  },
  {
    id: 'makai',
    title: 'Makai',
    location: 'Cap Cana, République Dominicaine',
    price: '$450,000',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 4,
    featured: true,
  },
  {
    id: 'casa-del-mar',
    title: 'Casa del Mar',
    location: 'Bavaro, République Dominicaine',
    price: '$180,000',
    type: 'Appartement',
    bedrooms: 1,
    bathrooms: 1,
    featured: false,
  },
  {
    id: 'ocean-view',
    title: 'Ocean View Residences',
    location: 'Playa del Carmen, Mexique',
    price: '$320,000',
    type: 'Appartement',
    bedrooms: 3,
    bathrooms: 2,
    featured: false,
  },
  {
    id: 'tulum-paradise',
    title: 'Tulum Paradise',
    location: 'Tulum, Mexique',
    price: '$280,000',
    type: 'Villa',
    bedrooms: 3,
    bathrooms: 3,
    featured: false,
  },
  {
    id: 'beachfront-luxury',
    title: 'Beachfront Luxury',
    location: 'Punta Cana, République Dominicaine',
    price: '$550,000',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 5,
    featured: false,
  },
];

