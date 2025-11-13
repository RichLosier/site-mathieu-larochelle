import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import CTAConsultation from '../../components/CTAConsultation';
import styles from '../../styles/Invest.module.css';

export default function Invest() {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Investir - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Guide complet pour investir dans l'immobilier à l'étranger avec Mathieu Larochelle."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>Investir dans l'immobilier à l'étranger</h1>
          <p>Votre guide complet pour un investissement réussi</p>
        </div>

        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                <h2>Pourquoi investir à l'étranger ?</h2>
                <p>
                  L'investissement immobilier à l'étranger offre de nombreux avantages : diversification
                  de portefeuille, potentiel de rendement attractif, opportunités de croissance dans des
                  marchés émergents, et possibilité de générer des revenus locatifs.
                </p>

                <h2>Notre processus d'accompagnement</h2>
                <div className={styles.processSteps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <h3>Consultation initiale</h3>
                    <p>Nous discutons de vos objectifs, budget et préférences pour comprendre vos besoins.</p>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <h3>Recherche et sélection</h3>
                    <p>Nous identifions les meilleures opportunités qui correspondent à vos critères.</p>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <h3>Due diligence</h3>
                    <p>Vérification légale et technique approfondie de chaque opportunité.</p>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <h3>Négociation et transaction</h3>
                    <p>Nous négocions les meilleures conditions et gérons toute la paperasse.</p>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <h3>Gestion post-achat</h3>
                    <p>Support continu pour la gestion de votre investissement.</p>
                  </div>
                </div>
              </div>

              <div className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h3>Ressources utiles</h3>
                  <ul>
                    <li>
                      <Link href="/blog">Articles du blog</Link>
                    </li>
                    <li>
                      <Link href="/faq">Questions fréquentes</Link>
                    </li>
                    <li>
                      <Link href="/projets">Voir les projets</Link>
                    </li>
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

