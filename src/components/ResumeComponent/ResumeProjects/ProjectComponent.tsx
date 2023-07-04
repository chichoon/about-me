import { ResumeProjectType } from '@/types/resumeData';
import { ProjectDigestComponent } from './ProjectDigestComponent';
import { getPeriodString } from '@/utils';

import { BadgeList } from '@/components/BadgeList';
import { GithubIcon, ShareIcon } from '@/assets/svgs';

import styles from './resumeProjects.module.scss';
import { LinkButton } from '@/components/LinkButton';

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
          {project.githubLink && (
            <a href={project.githubLink} target='_blank'>
              <GithubIcon />
            </a>
          )}
          {project.publishedLink && <LinkButton href={project.publishedLink} size={20} />}
        </div>
      </div>
      <div className={styles.digestWrapper}>
        <span>{project.summary}</span>
        <BadgeList stacks={project.stacks} className={styles.badgeWrapper} />
        <ProjectDigestComponent projectKey={project.key} digest={project.digest ?? []} />
      </div>
    </li>
  );
};
