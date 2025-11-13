import React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import styles from '../../styles/Blog.module.css';

export default function Blog() {
  const posts = [
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
        <title>Blog - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Conseils, tendances et actualités sur l'investissement immobilier international."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>Blog</h1>
          <p>Conseils, tendances et actualités de l'immobilier international</p>
        </div>

        <section className={styles.blogSection}>
          <div className={styles.container}>
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

