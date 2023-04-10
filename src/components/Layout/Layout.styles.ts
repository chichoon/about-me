import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

export const mainWrapperStyle = css({
  padding: '0 25px',

  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },

  '> div': {
    backgroundColor: COLORS.WHITE,
    padding: 25,
    borderRadius: 5,

    [getResponsiveAfter('SD')]: {
      padding: 50,
    },
  },
});
