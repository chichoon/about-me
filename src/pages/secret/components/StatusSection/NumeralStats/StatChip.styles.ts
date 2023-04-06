import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/pages/secret/constants';
import { COLORS } from '@/styles/colors';

export const statChipWrapperStyle = css({
  width: 100,
  height: 20,
  background: COLORS.WHITE_TRANSPARENT,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: 2,
});

export const iconWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,

  svg: {
    borderRadius: 2,
    width: 18,
    height: 18,
    fill: COLORS.WHITE,
  },
});
