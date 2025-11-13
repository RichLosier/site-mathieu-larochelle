import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Region.module.css';

export default function RegionPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Sample region data - in production, fetch from API/database
  const regionData: Record<string, any> = {
    'punta-cana': {
      name: 'Punta Cana',
      description: 'Destination de rêve avec plages paradisiaques et complexes hôteliers de classe mondiale.',
      projects: [
        {
          id: 'andara',
          title: 'Andara',
          location: 'Punta Cana, République Dominicaine',
          price: '$250,000',
          type: 'Appartement',
          bedrooms: 2,
          bathrooms: 2,
        },
        {
          id: 'beachfront-luxury',
          title: 'Beachfront Luxury',
          location: 'Punta Cana, République Dominicaine',
          price: '$550,000',
          type: 'Villa',
          bedrooms: 5,
          bathrooms: 5,
        },
      ],
    },
    'cap-cana': {
      name: 'Cap Cana',
      description: 'Communauté résidentielle exclusive avec marina de luxe et terrains de golf de renommée mondiale.',
      projects: [
        {
          id: 'makai',
          title: 'Makai',
          location: 'Cap Cana, République Dominicaine',
          price: '$450,000',
          type: 'Villa',
          bedrooms: 4,
          bathrooms: 4,
        },
      ],
    },
  };

  const region = regionData[slug as string] || regionData['punta-cana'];

  if (!region) {
    return <div>Region not found</div>;
  }

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>{region.name} - Mathieu Larochelle</title>
        <meta name="description" content={region.description} />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>{region.name}</h1>
          <p>{region.description}</p>
        </div>

        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <h2>Projets disponibles</h2>
            <div className={styles.projectsGrid}>
              {region.projects.map((project: any) => (
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

