import { ResumeProjectType } from '@/types/resumeData';
import { getPeriodString } from '@/utils';
import { BadgeList } from '@/components/BadgeList';
import { LinkButton, GithubButton } from '@/components';
import { DigestComponent } from '../DigestComponent';

import styles from './resumeProjects.module.scss';

interface Props {
  project: ResumeProjectType;
}

export const ProjectComponent = ({ project }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = project;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li className={styles.projectWrapper}>
      <div className={styles.iconAndImageWrapper}>
        <h3>{project.title}</h3>
        <span>{periodString}</span>
        <div className={styles.linkWrapper}>
          {project.githubLink && <GithubButton href={project.githubLink} size={20} />}
          {project.publishedLink && <LinkButton href={project.publishedLink} size={20} />}
        </div>
      </div>
      <div className={styles.digestWrapper}>
        <span>{project.summary}</span>
        <BadgeList stacks={project.stacks} className={styles.badgeWrapper} />
        {project.digest && <DigestComponent elementKey={project.key} digest={project.digest} />}
      </div>
    </li>
  );
};
