import Link from 'next/link';
import { css } from '@emotion/react';

import { ProjectTimestampType } from '@/types/profileData';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';

interface Props {
  projectTimestamps: ProjectTimestampType[];
}

export const ProjectsPage = ({ projectTimestamps }: Props) => {
  return (
    <menu css={projectPageWrapperStyle(100)}>
      {projectTimestamps.map(({ key, title }, index) => (
        <li key={`experience-${key}`} css={projectElementStyle(index * 50)}>
          <Link href={`/projects/${key}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </menu>
  );
};

const projectPageWrapperStyle = (height: number) =>
  css({
    position: 'relative',
    height,

    ':after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: LEVELS.MAINSTREAM_BRANCH,
      top: 10,
      left: 25,
      width: 10,
      height,
      backgroundColor: COLORS.GRAY9,
    },
  });

const projectElementStyle = (topPosition: number) =>
  css({
    position: 'absolute',
    zIndex: LEVELS.SUB_BRANCH,
    top: topPosition,

    a: {
      width: '100%',
      height: '100%',
    },
  });
