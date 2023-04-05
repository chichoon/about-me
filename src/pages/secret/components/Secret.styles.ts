import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS, UI_SHADOW } from '../constants';

export const secretPageBackgroundWrapperStyle = css({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
});

export const secretPageBackgroundImageStyle = css({
  position: 'absolute',
  zIndex: SECRET_LEVELS.LEVEL_BACKGROUND,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  boxShadow: UI_SHADOW,
});

export const groupIconStyle = css({
  position: 'absolute',
  top: 10,
  left: 10,
  width: 220,
  height: 220,
  fill: SECRET_COLORS.GROUP_ICON,
  zIndex: SECRET_LEVELS.LEVEL_GROUP_IMAGE,
});

export const characterImageStyle = css({
  zIndex: SECRET_LEVELS.LEVEL_CHAR_IMAGE,
});
