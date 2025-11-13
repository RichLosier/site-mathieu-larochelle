import React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../../components/HeaderNavigation';
import Footer from '../../components/Footer';
import RegionsList from '../../components/RegionsList';
import styles from '../../styles/Regions.module.css';

export default function Regions() {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Régions - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Découvrez les régions où nous opérons : Punta Cana, Cap Cana, Bavaro, Mexique et plus encore."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>Nos Régions</h1>
          <p>Découvrez les destinations où nous opérons</p>
        </div>

        <RegionsList />
      </main>

      <Footer />
    </div>
  );
}

