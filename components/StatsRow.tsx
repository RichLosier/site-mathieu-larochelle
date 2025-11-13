import React from 'react';
import styles from './StatsRow.module.css';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsRowProps {
  stats?: Stat[];
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  const defaultStats: Stat[] = [
    { value: '10+', label: 'Années d\'expérience', suffix: '' },
    { value: '3000+', label: 'Clients accompagnés', suffix: '' },
    { value: '200+', label: 'Projets gérés', suffix: '' },
    { value: '15+', label: 'Pays couverts', suffix: '' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className={styles.statsRow}>
      <div className={styles.statsContent}>
        {displayStats.map((stat, index) => (
          <div key={index} className={styles.statBlock}>
            <div className={styles.statValue}>
              {stat.value}
              {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsRow;

