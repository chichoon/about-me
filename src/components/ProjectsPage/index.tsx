import { css } from '@emotion/react';

import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';
import { SIZES } from '@/styles/sizes';

interface Props {
  projectsData: ProjectType[];
}

function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}

export const ProjectsPage = ({ projectsData }: Props) => {
  const min =
    projectsData[projectsData.length - 1].startDateYear * 12 + projectsData[projectsData.length - 1].startDateMonth;
  const max = projectsData[0].startDateYear * 12 + projectsData[0].startDateMonth;

  return (
    <menu css={projectPageWrapperStyle()}>
      {projectsData.map(({ key, title, startDateYear, startDateMonth }) => (
        <ProjectElement
          key={`experience-${key}`}
          keyValue={key}
          title={title}
          topOffset={getTopOffsetPercentage(min, max, startDateYear, startDateMonth)}
        />
      ))}
    </menu>
  );
};

const projectPageWrapperStyle = () =>
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 25,
    height: SIZES.$BRANCH_MAINSTREAM_HEIGHT + 150,

    ':before': {
      content: '""',
      display: 'block',
      zIndex: LEVELS.MAINSTREAM_BRANCH,
      width: 10,
      height: SIZES.$BRANCH_MAINSTREAM_HEIGHT + 100,
      background: `linear-gradient(to top, ${COLORS.GRAYC} 90%, ${COLORS.WHITE} 100% )`,
    },

    ':after': {
      content: '""',
      backgroundColor: COLORS.WHITE,
      zIndex: LEVELS.SUB_BRANCH,
      marginLeft: -20,
      marginTop: -1,
      width: 40,
      height: 40,
      borderRadius: 25,
      border: `5px solid ${COLORS.GRAYC}`,
    },
  });
