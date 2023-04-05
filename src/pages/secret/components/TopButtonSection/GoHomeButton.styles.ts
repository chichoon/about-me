import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS } from '@/pages/secret/constants';

export const wrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 120,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

export const homeBgSvgStyle = css({
  width: 120,
  height: 40,
  position: 'absolute',
  top: 18,
  left: 85,
  transform: 'scale(220%)',
  opacity: 0.8,
});

export const homeSvgStyle = css({
  zIndex: SECRET_LEVELS.LEVEL_UI,
  width: 25,
  height: 25,
  fill: SECRET_COLORS.BUTTON_ICON,
});
