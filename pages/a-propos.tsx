import React from 'react';
import Head from 'next/head';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import AdvisorBlock from '../components/AdvisorBlock';
import StatsRow from '../components/StatsRow';
import WhyChoose from '../components/WhyChoose';
import CTAConsultation from '../components/CTAConsultation';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>À propos - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Découvrez Mathieu Larochelle, votre expert en immobilier international avec plus de 10 ans d'expérience."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <AdvisorBlock />
        <AboutSection />
        <StatsRow />
        <WhyChoose />
        <CTAConsultation />
      </main>

      <Footer />
    </div>
  );
}

