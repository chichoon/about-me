import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { LEVELS } from '@/styles/levels';
import { SIZES } from '@/styles/sizes';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

interface Props {
  children: JSX.Element;
}

export const BranchListWrapper = ({ children }: Props) => {
  const router = useRouter();
  const BRANCH_MAINSTREAM_HEIGHT =
    router.pathname === '/projects' ? SIZES.BRANCH_MAINSTREAM_PROJECT_HEIGHT : SIZES.BRANCH_MAINSTREAM_FOOTPRINT_HEIGHT;
  return <menu css={projectPageMenuStyle(BRANCH_MAINSTREAM_HEIGHT)}>{children}</menu>;
};

const projectPageMenuStyle = (height: number) =>
  css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: 'calc(100% - 10px)',
    height: height + 150,
    overflowX: 'scroll',

    ':before': {
      content: '""',
      display: 'block',
      zIndex: LEVELS.MAINSTREAM_BRANCH,
      width: 10,
      height: height + 100,
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
      width: 370,

      ':after': {
        marginLeft: -20,
        width: 40,
        height: 40,
      },
    },

    [getResponsiveAfter('LD')]: {
      paddingLeft: 25,
      width: 370,
      marginRight: 50,

      ':after': {
        marginLeft: -20,
        width: 40,
        height: 40,
      },
    },
  });
