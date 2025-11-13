import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import CTAConsultation from '../../components/CTAConsultation';
import styles from '../../styles/ProjectDetail.module.css';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Sample project data - in production, fetch from API/database
  const projectData: Record<string, any> = {
    andara: {
      title: 'Andara',
      location: 'Punta Cana, République Dominicaine',
      price: '$250,000',
      type: 'Appartement',
      bedrooms: 2,
      bathrooms: 2,
      description: 'Projet résidentiel moderne avec vue sur l\'océan, situé dans le cœur de Punta Cana.',
      features: [
        'Vue sur l\'océan',
        'Piscine communautaire',
        'Gym et spa',
        'Proximité des plages',
        'Sécurité 24/7',
      ],
    },
    makai: {
      title: 'Makai',
      location: 'Cap Cana, République Dominicaine',
      price: '$450,000',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 4,
      description: 'Villa de luxe dans la communauté exclusive de Cap Cana avec accès à la marina et aux terrains de golf.',
      features: [
        'Villa privée',
        'Piscine privée',
        'Accès marina',
        'Terrains de golf',
        'Sécurité gated community',
      ],
    },
  };

  const project = projectData[slug as string] || projectData.andara;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>{project.title} - Mathieu Larochelle</title>
        <meta name="description" content={project.description} />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.projectHeader}>
          <div className={styles.container}>
            <Link href="/projets" className={styles.backLink}>
              ← Retour aux projets
            </Link>
            <h1>{project.title}</h1>
            <p className={styles.location}>{project.location}</p>
            <div className={styles.price}>{project.price}</div>
          </div>
        </div>

        <section className={styles.projectContent}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                <div className={styles.imagePlaceholder}>
                  <span>Image du projet {project.title}</span>
                </div>
                <div className={styles.description}>
                  <h2>Description</h2>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className={styles.sidebar}>
                <div className={styles.infoCard}>
                  <h3>Détails du projet</h3>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Type:</span>
                    <span className={styles.infoValue}>{project.type}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Chambres:</span>
                    <span className={styles.infoValue}>{project.bedrooms}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Salles de bain:</span>
                    <span className={styles.infoValue}>{project.bathrooms}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Prix:</span>
                    <span className={styles.infoValue}>{project.price}</span>
                  </div>
                </div>

                <div className={styles.featuresCard}>
                  <h3>Caractéristiques</h3>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTAConsultation />
      </main>

      <Footer />
    </div>
  );
}

