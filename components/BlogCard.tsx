import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  image?: string;
  category?: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  author = 'Mathieu Larochelle',
  date,
  image,
  category,
  slug,
}) => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'fr';

  const translations = {
    fr: {
      readMore: 'Lire la suite',
    },
    en: {
      readMore: 'Read more',
    },
  };

  const t = translations[currentLocale as 'fr' | 'en'];

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={styles.blogCard}>
      <Link href={`/blog/${slug}`} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image} alt={title} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{title}</span>
            </div>
          )}
          {category && (
            <span className={styles.categoryBadge}>{category}</span>
          )}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            {date && <span className={styles.date}>{formatDate(date)}</span>}
            {author && <span className={styles.author}>{author}</span>}
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardExcerpt}>{excerpt}</p>
          <span className={styles.cardAction}>{t.readMore} →</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;

