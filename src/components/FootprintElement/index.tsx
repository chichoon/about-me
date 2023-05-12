import Link from 'next/link';

import { getTopOffsetPercentage } from '@/utils';
import { FootprintType } from '@/types/profileData';

import styles from './footprintElement.module.scss';

interface Props {
  footprint: FootprintType;
  index: number;
  minDay: number;
  maxDay: number;
}

export const FootprintElement = ({ footprint, index, minDay, maxDay }: Props) => {
  const {
    title,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = footprint;

  const offsetDate = {
    year: fakeDateYear ?? startDateYear,
    month: fakeDateMonth ?? startDateMonth,
    day: fakeDateDay ?? startDateDay,
  };

  const startDateOffset = getTopOffsetPercentage(minDay, maxDay, offsetDate.year, offsetDate.month, offsetDate.day);

  return (
    <li style={{ top: startDateOffset * 800 + 50 }} className={styles.footprintElement}>
      <div className={styles.footprintBranch}>
        <span>
          {startDateYear}. {startDateMonth.toString().padStart(2, '0')}
        </span>
      </div>
      <Link href={`/footprints/${index}`} className={styles.footprintLinkInner}>
        <h3>{title}</h3>
        <span>
          {startDateYear}. {startDateMonth.toString().padStart(2, '0')} ~{' '}
          {endDateYear ? `${endDateYear}. ${endDateMonth?.toString().padStart(2, '0')}` : ''}
        </span>
      </Link>
    </li>
  );
};
