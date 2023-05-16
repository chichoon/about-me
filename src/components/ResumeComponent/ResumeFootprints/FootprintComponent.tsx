import { FootprintType } from '@/types/profileData';
import { getPeriodString } from '@/utils';

import styles from './resumeFootprints.module.scss';

interface Props {
  footprint: FootprintType;
}

export const FootprintComponent = ({ footprint }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = footprint;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li className={styles.footprintWrapper}>
      <div className={styles.footprintTitle}>
        <h3>{footprint.title}</h3>
        <span>{footprint.summary}</span>
      </div>
      <span className={styles.footprintTimestamp}>{periodString}</span>
    </li>
  );
};
