import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const footerWrapperStyle = css({
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50,

  span: {
    color: COLORS.GRAY9,
    marginRight: 10,
    fontSize: SIZES.$FONT_M,
    userSelect: 'none',
    cursor: 'default',
  },

  a: {
    padding: 0,
    margin: 0,
    width: 20,
    height: 20,
  },

  svg: {
    fill: COLORS.GRAY9,
  },
});
