import Link from 'next/link';
import Image from 'next/image';

import { ProjectType } from '@/types/profileData';
import { getTopOffsetPercentage } from '@/utils';

import { GithubIcon, ShareIcon } from '@/assets/svgs';

import styles from './projectElement.module.scss';

interface Props {
  project: ProjectType;
  minDay: number;
  maxDay: number;
}

export const ProjectElement = ({ project, minDay, maxDay }: Props) => {
  const {
    key,
    imageRef,
    githubLink,
    publishedLink,
    startDateMonth,
    startDateYear,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = project;

  const offsetDate = {
    year: fakeDateYear ?? startDateYear,
    month: fakeDateMonth ?? startDateMonth,
    day: fakeDateDay ?? startDateDay,
  };

  const startDateOffset = getTopOffsetPercentage(minDay, maxDay, offsetDate.year, offsetDate.month, offsetDate.day);

  return (
    <li style={{ top: startDateOffset * 800 + 50 }} className={styles.elementWrapper}>
      <div className={styles.projectBranch}>
        <span>
          {startDateYear}. {startDateMonth.toString().padStart(2, '0')}. {startDateDay.toString().padStart(2, '0')}
        </span>
      </div>
      <Link href={`/projects/${key}`} className={styles.projectLinkInner}>
        <Image src={imageRef ?? ''} width={160} height={50} alt={`${key}-logo`} className={styles.coverImage} />
      </Link>
      <div className={styles.sideIcon}>
        <a href={githubLink} target='_blank'>
          <GithubIcon />
        </a>
        <a href={publishedLink} target='_blank'>
          <ShareIcon />
        </a>
      </div>
    </li>
  );
};
