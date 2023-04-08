import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/SecretPage/constants';
import { SIZES } from '@/styles/sizes';

export const eliteStatsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 400,
  marginBottom: 10,
});

export const eliteWrapperStyle = css({
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const eliteInnerBarStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  borderRadius: 3,
  width: 180,
  height: 50,
  marginLeft: -90,
  paddingLeft: 90,
  paddingRight: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',

  span: {
    color: SECRET_COLORS.BUTTON_ICON_DIMMED,
  },

  div: {
    backgroundColor: SECRET_COLORS.BUTTON_ICON_DIMMED,
    opacity: 0.5,
    padding: '2px 5px',
    borderRadius: 2,
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      color: SECRET_COLORS.BG_UI,
      fontSize: SIZES.$FONT_S,
      lineHeight: `${SIZES.$FONT_XS}px`,
    },
  },
});
