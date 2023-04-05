import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { ELEMENT_SHADOW } from '@/pages/secret/constants';

export const starWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  svg: {
    width: 25,
    height: 25,
    transform: 'rotate(15deg)',
    fill: COLORS.WHITE,
    filter: `drop-shadow(${ELEMENT_SHADOW})`,

    ':not(:first-child)': {
      marginLeft: -10,
    },
  },
});
