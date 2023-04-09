import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { ELEMENT_SHADOW } from '@/components/GithubStats/constants';

export const starWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: -5,
  marginLeft: -5,

  svg: {
    width: 40,
    height: 40,
    transform: 'rotate(15deg)',
    fill: COLORS.WHITE,
    filter: `drop-shadow(${ELEMENT_SHADOW})`,

    ':not(:first-child)': {
      marginLeft: -10,
    },
  },
});
