import { css } from '@emotion/react';

import { ProjectType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';
import { SIZES } from '@/styles/sizes';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

interface Props {
  projectsData: ProjectType[];
}

function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}

export const ProjectListMenu = ({ projectsData }: Props) => {
  const min =
    projectsData[projectsData.length - 1].startDateYear * 12 + projectsData[projectsData.length - 1].startDateMonth;
  const max = projectsData[0].startDateYear * 12 + projectsData[0].startDateMonth;

  return (
    <menu css={projectPageMenuStyle()}>
      {projectsData.map((project) => (
        <ProjectElement
          key={`experience-${project.key}`}
          project={project}
          topOffset={getTopOffsetPercentage(min, max, project.startDateYear, project.startDateMonth)}
        />
      ))}
    </menu>
  );
};

const projectPageMenuStyle = () =>
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: 'calc(100% - 10px)',
    height: SIZES.$BRANCH_MAINSTREAM_HEIGHT + 150,
    overflowX: 'scroll',

    ':before': {
      content: '""',
      display: 'block',
      zIndex: LEVELS.MAINSTREAM_BRANCH,
      width: 10,
      height: SIZES.$BRANCH_MAINSTREAM_HEIGHT + 100,
      background: `linear-gradient(to top, ${COLORS.GRAY9} 90%, ${COLORS.WHITE} 100% )`,
    },

    ':after': {
      content: '""',
      backgroundColor: COLORS.WHITE,
      zIndex: LEVELS.SUB_BRANCH,
      marginLeft: -10,
      marginTop: -1,
      width: 20,
      height: 20,
      borderRadius: 25,
      border: `5px solid ${COLORS.GRAY9}`,
    },

    [getResponsiveAfter('ML')]: {
      paddingLeft: 25,
      width: 'calc(100% - 25px)',

      ':after': {
        marginLeft: -20,
        width: 40,
        height: 40,
      },
    },

    [getResponsiveAfter('LD')]: {
      flex: 1,
      paddingLeft: 25,
      width: 'calc(100% - 25px)',

      ':after': {
        marginLeft: -20,
        width: 40,
        height: 40,
      },
    },
  });
