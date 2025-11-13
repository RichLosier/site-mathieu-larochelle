import React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';
import HeroMathieu from '../components/HeroMathieu';
import SearchFilter from '../components/SearchFilter';
import AdvisorBlock from '../components/AdvisorBlock';
import ProjectCard from '../components/ProjectCard';
import StatsRow from '../components/StatsRow';
import CTAConsultation from '../components/CTAConsultation';
import AboutSection from '../components/AboutSection';
import RegionsList from '../components/RegionsList';
import WhyChoose from '../components/WhyChoose';
import InquiryForm from '../components/InquiryForm';
import BlogCard from '../components/BlogCard';
import NewsletterSignup from '../components/NewsletterSignup';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Sample projects data
  const featuredProjects = [
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
  ];

  // Sample blog posts
  const recentPosts = [
    {
      id: '1',
      title: 'Guide complet pour investir en République Dominicaine',
      excerpt: 'Découvrez tout ce que vous devez savoir avant d\'investir dans l\'immobilier en République Dominicaine...',
      author: 'Mathieu Larochelle',
      date: '2024-01-15',
      category: 'Conseils',
      slug: 'guide-investir-republique-dominicaine',
    },
    {
      id: '2',
      title: 'Les tendances du marché immobilier en 2024',
      excerpt: 'Analyse des tendances actuelles et des opportunités d\'investissement dans l\'immobilier international...',
      author: 'Mathieu Larochelle',
      date: '2024-01-10',
      category: 'Tendances',
      slug: 'tendances-marche-immobilier-2024',
    },
    {
      id: '3',
      title: 'Fiscalité et investissement immobilier à l\'étranger',
      excerpt: 'Comprendre les implications fiscales de vos investissements immobiliers internationaux...',
      author: 'Mathieu Larochelle',
      date: '2024-01-05',
      category: 'Fiscalité',
      slug: 'fiscalite-investissement-etranger',
    },
  ];

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Mathieu Larochelle - Conseiller Immobilier International</title>
        <meta
          name="description"
          content="Expert en immobilier international. Accompagnement personnalisé pour vos investissements en République Dominicaine, au Mexique et dans d'autres destinations de rêve."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <HeroMathieu />

        {/* Search Filter */}
        <SearchFilter />

        {/* Advisor Block */}
        <AdvisorBlock />

        {/* Featured Projects */}
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h2>Projets en vedette</h2>
              <p>Découvrez nos meilleures opportunités d'investissement</p>
            </div>
            <div className={styles.projectsGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsRow />

        {/* CTA Consultation */}
        <CTAConsultation />

        {/* About Section */}
        <AboutSection />

        {/* Regions */}
        <RegionsList />

        {/* Why Choose */}
        <WhyChoose />

        {/* Inquiry Form */}
        <InquiryForm />

        {/* Recent Blog Posts */}
        <section className={styles.blogSection}>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h2>Articles récents</h2>
              <p>Conseils, tendances et actualités de l'immobilier international</p>
            </div>
            <div className={styles.blogGrid}>
              {recentPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}

