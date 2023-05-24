import { FootprintType } from '@/types/profileData';

import styles from './footprintInfoHeader.module.scss';

interface Props {
  footprint: FootprintType;
}

export const FootprintInfoHeader = ({ footprint }: Props) => {
  const { title, summary, startDateMonth, startDateYear, endDateMonth, endDateYear } = footprint;

  return (
    <div className={styles.footprintHeaderWrapper}>
      <h3 className={styles.footprintHeaderTitle}>{title}</h3>
      <h4 className={styles.footprintHeaderSummary}>{summary}</h4>
      <span className={styles.footprintHeaderDate}>
        {startDateYear}. {startDateMonth.toString().padStart(2, '0')} ~{' '}
        {endDateYear ? `${endDateYear}. ${endDateMonth?.toString().padStart(2, '0')}` : ''}
      </span>
    </div>
  );
};
