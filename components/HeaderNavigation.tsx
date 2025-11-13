import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { locale, locales, pathname, asPath } = router;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLocale = (newLocale: string) => {
    router.push(pathname, asPath, { locale: newLocale });
  };

  const menuItems = [
    { href: '/', label: { fr: 'Accueil', en: 'Home' } },
    { href: '/a-propos', label: { fr: 'À propos', en: 'About' } },
    {
      href: '/investir',
      label: { fr: 'Investir', en: 'Invest' },
      submenu: [
        { href: '/investir/guide', label: { fr: 'Guide d\'investissement', en: 'Investment Guide' } },
        { href: '/investir/processus', label: { fr: 'Processus', en: 'Process' } },
      ],
    },
    {
      href: '/regions',
      label: { fr: 'Régions', en: 'Regions' },
      submenu: [
        { href: '/regions/punta-cana', label: { fr: 'Punta Cana', en: 'Punta Cana' } },
        { href: '/regions/cap-cana', label: { fr: 'Cap Cana', en: 'Cap Cana' } },
        { href: '/regions/bavaro', label: { fr: 'Bavaro', en: 'Bavaro' } },
        { href: '/regions/mexique', label: { fr: 'Mexique', en: 'Mexico' } },
      ],
    },
    { href: '/projets', label: { fr: 'Projets', en: 'Projects' } },
    { href: '/blog', label: { fr: 'Blog', en: 'Blog' } },
    { href: '/faq', label: { fr: 'FAQ', en: 'FAQ' } },
    { href: '/contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  const currentLocale = locale || 'fr';

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Mathieu Larochelle</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                {item.submenu ? (
                  <div className={styles.dropdown}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label[currentLocale as 'fr' | 'en']}
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    <ul className={styles.submenu}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link href={subItem.href} className={styles.submenuLink}>
                            {subItem.label[currentLocale as 'fr' | 'en']}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label[currentLocale as 'fr' | 'en']}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.languageSwitch}>
            {locales?.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`${styles.langButton} ${locale === loc ? styles.langButtonActive : ''}`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}>
              <span className={isMenuOpen ? styles.hamburgerOpen : ''}></span>
              <span className={isMenuOpen ? styles.hamburgerOpen : ''}></span>
              <span className={isMenuOpen ? styles.hamburgerOpen : ''}></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;

