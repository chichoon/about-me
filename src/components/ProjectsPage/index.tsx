import { css } from '@emotion/react';

import { ProjectTimestampType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';

interface Props {
  projectTimestamps: ProjectTimestampType[];
}

export const ProjectsPage = ({ projectTimestamps }: Props) => {
  return (
    <menu css={projectPageWrapperStyle(100)}>
      {projectTimestamps.map(({ key, title }, index) => (
        <ProjectElement key={`experience-${key}`} keyValue={key} title={title} topOffset={index} />
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
