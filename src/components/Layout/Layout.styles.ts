import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

export const mainWrapperStyle = css({
  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },

  '> div': {
    backgroundColor: COLORS.WHITE,
    padding: 50,
  },
});
