import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      navigation: 'Navigation',
      about: 'À propos',
      invest: 'Investir',
      regions: 'Régions',
      projects: 'Projets',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      follow: 'Suivez-nous',
      rights: 'Tous droits réservés',
      description: 'Votre partenaire de confiance pour investir dans l\'immobilier à l\'étranger.',
    },
    en: {
      navigation: 'Navigation',
      about: 'About',
      invest: 'Invest',
      regions: 'Regions',
      projects: 'Projects',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      follow: 'Follow us',
      rights: 'All rights reserved',
      description: 'Your trusted partner for investing in real estate abroad.',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Facebook', href: '#', icon: 'f' },
    { name: 'Instagram', href: '#', icon: 'ig' },
    { name: 'Twitter', href: '#', icon: 'tw' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Mathieu Larochelle</h3>
          <p>{t.description}</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>{t.navigation}</h3>
          <ul>
            <li>
              <Link href="/a-propos">{t.about}</Link>
            </li>
            <li>
              <Link href="/investir">{t.invest}</Link>
            </li>
            <li>
              <Link href="/regions">{t.regions}</Link>
            </li>
            <li>
              <Link href="/projets">{t.projects}</Link>
            </li>
            <li>
              <Link href="/blog">{t.blog}</Link>
            </li>
            <li>
              <Link href="/faq">{t.faq}</Link>
            </li>
            <li>
              <Link href="/contact">{t.contact}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>{t.legal}</h3>
          <ul>
            <li>
              <Link href="/confidentialite">{t.privacy}</Link>
            </li>
            <li>
              <Link href="/conditions">{t.terms}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>{t.contact}</h3>
          <ul>
            <li>Email: info@mathieularochelle.com</li>
            <li>Téléphone: +1 (XXX) XXX-XXXX</li>
            <li>WhatsApp: +1 (XXX) XXX-XXXX</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Mathieu Larochelle. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

