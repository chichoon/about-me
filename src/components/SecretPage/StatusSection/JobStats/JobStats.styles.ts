import { css } from '@emotion/react';

import { SECRET_COLORS, UI_SHADOW_DIMMED } from '@/components/SecretPage/constants';
import { SIZES } from '@/styles/sizes';

export const jobStatWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const jobStatDivStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI_DIMMED,
});

export const jobIconStyle = css({
  width: 60,
  height: 60,
  border: `0.5px solid ${SECRET_COLORS.BUTTON_ICON}`,
  boxShadow: UI_SHADOW_DIMMED,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: 50,
    height: 50,
    fill: SECRET_COLORS.BUTTON_ICON,
    transform: 'rotate(-45deg)',
  },
});

export const rangeWrapperStyle = css({
  marginLeft: 5,
  width: 100,
  height: 60,
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 3,

  span: {
    userSelect: 'none',
    fontSize: SIZES.$FONT_S,
    color: SECRET_COLORS.BUTTON_ICON,
  },
});

export const keywordWrapper = css({
  width: 120,
  height: 60,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 5,
});

export const keywordInner = css({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  borderRadius: 3,
  padding: 2,

  span: {
    wordBreak: 'keep-all',
    userSelect: 'none',
    color: SECRET_COLORS.BUTTON_ICON,
    fontSize: SIZES.$FONT_MS,
    lineHeight: `${SIZES.$FONT_MS}px`,
    height: `${SIZES.$FONT_MS}px`,
    verticalAlign: 'center',
  },
});
