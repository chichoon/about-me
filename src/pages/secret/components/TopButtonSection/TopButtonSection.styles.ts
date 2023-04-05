import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS, UI_SHADOW } from '../../constants';

export const buttonWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  zIndex: SECRET_LEVELS.LEVEL_UI,
  top: 10,
  left: 10,
});

export const leftButtonWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 'fit-content',
  boxShadow: UI_SHADOW,
});

export const topButtonStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 120,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: 25,
    height: 25,
    fill: SECRET_COLORS.BUTTON_ICON,
  },
});

export const goBackButtonStyle = css({
  width: 120,
  paddingLeft: 10,
  justifyContent: 'flex-start',
  borderRight: `3px solid ${SECRET_COLORS.BG_BLACK}`,
});

export const homeButtonStyle = css({
  width: 150,
});

export const infoButtonStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI_DIMMED,
  width: 40,
  height: 40,
  margin: '0 10px',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECRET_COLORS.BUTTON_ICON_INNER,
    width: 30,
    height: 30,
    border: `1px solid ${SECRET_COLORS.BUTTON_ICON_DIMMED}`,
    borderRadius: 20,

    svg: {
      width: 20,
      height: 20,
      transform: 'rotate(-10deg)',
    },
  },
});

export const fileIconStyle = css({
  borderRight: `3px solid ${SECRET_COLORS.BG_BLACK}`,
});
