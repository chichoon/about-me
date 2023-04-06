import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { ELEMENT_SHADOW } from '@/pages/secret/constants';

export const starWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: -5,

  svg: {
    width: 30,
    height: 30,
    transform: 'rotate(15deg)',
    fill: COLORS.WHITE,
    filter: `drop-shadow(${ELEMENT_SHADOW})`,

    ':not(:first-child)': {
      marginLeft: -10,
    },
  },
});
