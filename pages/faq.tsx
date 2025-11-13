import React, { useState } from 'react';
import Head from 'next/head';
import HeaderNavigation from '../components/HeaderNavigation';
import Footer from '../components/Footer';
import styles from '../styles/FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Quels sont les avantages d\'investir dans l\'immobilier à l\'étranger ?',
      answer: 'Investir dans l\'immobilier à l\'étranger offre plusieurs avantages : diversification du portefeuille, potentiel de rendement attractif, opportunités de croissance dans des marchés émergents, et possibilité de générer des revenus locatifs. De plus, certains pays offrent des avantages fiscaux intéressants pour les investisseurs étrangers.',
    },
    {
      question: 'Quels pays recommandez-vous pour l\'investissement immobilier ?',
      answer: 'Nous recommandons particulièrement la République Dominicaine et le Mexique pour leur stabilité économique, leur croissance démographique, et leurs opportunités d\'investissement attractives. Ces destinations offrent un excellent rapport qualité-prix et un potentiel de croissance à long terme.',
    },
    {
      question: 'Quel est le processus d\'achat d\'un bien immobilier à l\'étranger ?',
      answer: 'Le processus comprend généralement : la recherche et sélection du bien, la vérification légale et due diligence, la négociation et signature du contrat, le financement (si nécessaire), et la finalisation de la transaction. Nous vous accompagnons à chaque étape pour garantir un processus fluide et sécurisé.',
    },
    {
      question: 'Avez-vous besoin d\'un visa pour investir ?',
      answer: 'Les exigences varient selon le pays. En République Dominicaine, par exemple, l\'achat d\'un bien immobilier peut vous donner accès à un visa de résident temporaire ou permanent. Nous vous guidons dans les démarches administratives nécessaires.',
    },
    {
      question: 'Comment puis-je gérer mon bien à distance ?',
      answer: 'Nous offrons des services de gestion de propriété incluant la location, l\'entretien, et la maintenance. Notre réseau de partenaires locaux garantit une gestion professionnelle de votre investissement, même à distance.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.mainLayout}>
      <Head>
        <title>FAQ - Mathieu Larochelle</title>
        <meta
          name="description"
          content="Réponses aux questions fréquentes sur l'investissement immobilier à l'étranger."
        />
      </Head>

      <HeaderNavigation />

      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1>Questions fréquentes</h1>
          <p>Tout ce que vous devez savoir sur l'investissement immobilier à l'étranger</p>
        </div>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ''}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

