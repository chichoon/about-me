import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/SecretPage/constants';

export const eliteStatsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const eliteWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
