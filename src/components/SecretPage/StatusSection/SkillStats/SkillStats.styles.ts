import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/SecretPage/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const skillStatsWrapperStyle = css({
  width: 400,
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const skillIconsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 20,

  '> div:not(:last-child)': {
    marginRight: 10,
  },
});

export const skillInformationWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  borderRadius: 3,
  width: 360,
  height: 80,
  marginLeft: -270,
  marginTop: 40,
  padding: '10px 15px 0 120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
});

export const skillRankWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  span: {
    color: SECRET_COLORS.BUTTON_ICON_DIMMED,
    fontSize: SIZES.$FONT_ML,
  },

  'span:last-child': {
    color: COLORS.WHITE,
    fontSize: SIZES.$FONT_L,
    marginLeft: 5,
  },
});
