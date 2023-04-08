import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS } from '@/components/SecretPage/constants';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

export const talentStatWrapperStyle = css({
  width: 360,
  height: 120,
  borderRadius: 3,
  backgroundColor: SECRET_COLORS.BG_UI,
  padding: 10,
  marginTop: 80,
});

export const talentStatTopStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const jobWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,

  svg: {
    width: 50,
    height: 50,
    backgroundColor: `${SECRET_COLORS.BUTTON_ICON}30`,
    marginRight: 5,
    padding: 2,
    fill: SECRET_COLORS.BUTTON_ICON,
  },

  span: {
    fontSize: SIZES.$FONT_ML,
    color: SECRET_COLORS.BUTTON_ICON,
  },
});

export const detailedJobStyle = css({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
});

export const detailedJobIconStyle = css({
  width: 70,
  height: 70,
  border: `2px solid ${SECRET_COLORS.BUTTON_ICON_DIMMED}`,
  backgroundColor: SECRET_COLORS.BG_UI_DIMMED,
  marginTop: -30,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 5,

  svg: {
    width: 40,
    height: 40,
    fill: COLORS.WHITE,
    zIndex: SECRET_LEVELS.LEVEL_UI + 1,
  },
});

export const detailedJobDescriptionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'flex-end',
});

export const stageWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  span: {
    fontSize: SIZES.$FONT_MS,
    color: COLORS.WHITE_TRANSPARENT,
    marginRight: 5,
  },

  'span:last-child': {
    fontSize: SIZES.$FONT_M,
    color: COLORS.WHITE,
    fontWeight: 700,
  },
});

export const stageManageStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,

  span: {
    fontSize: SIZES.$FONT_MS,
    color: COLORS.WHITE_TRANSPARENT,
    marginRight: 5,
  },
  svg: {
    width: 20,
    height: 20,
    fill: COLORS.WHITE,
  },
});

export const blushShadowStyle = css({
  width: 50,
  height: 0,
  position: 'absolute',
  top: 25,
  left: 7.5,
  boxShadow: `0 0 3px 3px ${SECRET_COLORS.HIGHLIGHT_BLUE}`,
});

export const jobTextWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: SIZES.$FONT_MS,
    color: COLORS.WHITE_TRANSPARENT,
  },

  'span:last-child': {
    fontSize: SIZES.$FONT_M,
    color: COLORS.WHITE,
    fontWeight: 700,
  },
});

export const talentWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 20,

  div: {
    padding: 5,
    backgroundColor: SECRET_COLORS.BUTTON_ICON,
    borderRadius: 5,

    ':not(:last-child)': {
      marginRight: 10,
    },

    span: {
      color: SECRET_COLORS.BG_UI,
      fontSIze: SIZES.$FONT_M,
    },
  },
});
