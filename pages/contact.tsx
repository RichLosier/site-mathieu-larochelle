import React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>Contact - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Contactez Mathieu Larochelle pour discuter de vos projets d'investissement immobilier à l'étranger."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <InquiryForm />
      </main>

      <Footer />
    </div>
  );
}

