import Image from 'next/image';

import { ProjectType } from '@/types/profileData';
import { getPeriodString } from '@/utils';

import { GithubIcon } from '@/assets/svgs';

import styles from './projectInfoHeader.module.scss';
import { LinkButton } from '../LinkButton';

interface Props {
  project: ProjectType;
}

export const ProjectInfoHeader = ({ project }: Props) => {
  const {
    title,
    imageRef,
    startDateMonth,
    startDateYear,
    startDateDay,
    endDateMonth,
    endDateYear,
    endDateDay,
    githubLink,
    publishedLink,
  } = project;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <div className={styles.projectHeaderWrapper}>
      <Image width={160} height={50} src={imageRef ?? ''} alt={`${title} logo`} />
      <div className={styles.projectHeaderInfoWrapper}>
        <div className={styles.projectTitleSection}>
          <h3>{title}</h3>
          <a href={githubLink} target='_blank'>
            <GithubIcon />
          </a>
          {publishedLink && <LinkButton href={publishedLink} size={30} />}
        </div>
        <span>{periodString}</span>
      </div>
    </div>
  );
};
