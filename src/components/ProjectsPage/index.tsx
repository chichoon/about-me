import { css } from '@emotion/react';

import { ProjectTimestampType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';

interface Props {
  projectTimestamps: ProjectTimestampType[];
}

function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}

export const ProjectsPage = ({ projectTimestamps }: Props) => {
  const min =
    projectTimestamps[projectTimestamps.length - 1].year * 12 + projectTimestamps[projectTimestamps.length - 1].month;
  const max = projectTimestamps[0].year * 12 + projectTimestamps[0].month;

  return (
    <menu css={projectPageWrapperStyle(100)}>
      {projectTimestamps.map(({ key, title, year, month }) => (
        <ProjectElement
          key={`experience-${key}`}
          keyValue={key}
          title={title}
          topOffset={getTopOffsetPercentage(min, max, year, month)}
        />
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
