import { css } from '@emotion/react';

import { BG_SHADOW, SECRET_COLORS, SECRET_LEVELS } from '@/pages/secret/constants';

export const secretPageBackgroundWrapperStyle = css({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
  background: `no-repeat url('/test_bg.png')`,
  backgroundSize: 'cover',
  boxShadow: `inset ${BG_SHADOW}`,
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
  position: 'absolute',
  objectFit: 'contain',
  zIndex: SECRET_LEVELS.LEVEL_CHAR_IMAGE,
});