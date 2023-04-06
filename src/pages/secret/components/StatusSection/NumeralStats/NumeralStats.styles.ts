import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SECRET_COLORS } from '@/pages/secret/constants';
import { SIZES } from '@/styles/sizes';

export const numeralStatsWrapperStyle = css({
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 200,
});

export const numeralStatsTitleStyle = css({
  background: `linear-gradient(to right, ${COLORS.WHITE} 0 30%, ${COLORS.WHITE_TRANSPARENT} 70% 100%)`,
  width: '100%',
  height: 20,
  padding: 1,
  marginBottom: 5,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',

  svg: {
    width: 10,
    height: 10,
    fill: SECRET_COLORS.BUTTON_ICON_DARK,
    marginLeft: 5,
  },

  span: {
    fontSize: SIZES.$FONT_ML,
  },
});

export const statChipDividerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
