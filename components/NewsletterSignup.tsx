import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './NewsletterSignup.module.css';

interface NewsletterSignupProps {
  onSubmit?: (email: string, name?: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubmit }) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    fr: {
      title: 'Restez informé',
      subtitle: 'Recevez nos dernières actualités et opportunités d\'investissement directement dans votre boîte de réception.',
      name: 'Nom (optionnel)',
      email: 'Adresse courriel',
      subscribe: 'S\'abonner',
      subscribing: 'Inscription...',
      success: 'Merci pour votre inscription !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      placeholder: 'votre@email.com',
    },
    en: {
      title: 'Stay informed',
      subtitle: 'Receive our latest news and investment opportunities directly in your inbox.',
      name: 'Name (optional)',
      email: 'Email address',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      success: 'Thank you for subscribing!',
      error: 'An error occurred. Please try again.',
      placeholder: 'your@email.com',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(email, name);
      } else {
        // Default behavior: send to API endpoint
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name }),
        });

        if (!response.ok) throw new Error('Subscription failed');
      }

      setSubmitStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterHeader}>
          <h2 className={styles.newsletterTitle}>{t.title}</h2>
          <p className={styles.newsletterSubtitle}>{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <div className={styles.formFields}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.name}
              className={styles.input}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.subscribeButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? t.subscribing : t.subscribe}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>{t.success}</div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>{t.error}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;

