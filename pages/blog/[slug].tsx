import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import styles from '../../styles/BlogPost.module.css';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Sample blog post data - in production, fetch from API/database
  const posts: Record<string, any> = {
    'guide-investir-republique-dominicaine': {
      title: 'Guide complet pour investir en République Dominicaine',
      author: 'Mathieu Larochelle',
      date: '2024-01-15',
      category: 'Conseils',
      content: `
        <p>Investir dans l'immobilier en République Dominicaine offre de nombreuses opportunités pour les investisseurs internationaux. Ce guide complet vous aidera à comprendre les aspects essentiels de l'investissement dans ce marché dynamique.</p>
        
        <h2>Pourquoi investir en République Dominicaine ?</h2>
        <p>La République Dominicaine est devenue une destination de choix pour les investisseurs immobiliers grâce à sa stabilité économique, son climat favorable, et ses opportunités de croissance.</p>
        
        <h2>Les étapes clés de l'investissement</h2>
        <p>De la recherche initiale à la finalisation de l'achat, chaque étape nécessite une attention particulière. Nous vous guidons à travers tout le processus.</p>
      `,
    },
  };

  const post = posts[slug as string] || posts['guide-investir-republique-dominicaine'];

  if (!post) {
    return <div>Post not found</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>{post.title} - Mathieu Larochelle</title>
        <meta name="description" content={post.title} />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <article className={styles.article}>
          <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
              ← Retour au blog
            </Link>

            <header className={styles.articleHeader}>
              <span className={styles.category}>{post.category}</span>
              <h1>{post.title}</h1>
              <div className={styles.meta}>
                <span>Par {post.author}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </header>

            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

