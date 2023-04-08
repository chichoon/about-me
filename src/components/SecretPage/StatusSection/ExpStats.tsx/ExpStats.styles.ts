import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS } from '@/components/SecretPage/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const expStatsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 500,
});

export const levelCircleStyle = () =>
  css({
    width: 80,
    height: 80,
    borderRadius: 50,
    filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',

    span: {
      color: COLORS.WHITE,
      fontSize: SIZES.$FONT_L,
      lineHeight: `${SIZES.$FONT_L}px`,
      zIndex: SECRET_LEVELS.LEVEL_UI,
      marginTop: 5,
    },

    'span:last-child': {
      fontSize: SIZES.$FONT_XXXL,
      lineHeight: `${SIZES.$FONT_XXXL}px`,
      marginTop: 0,
    },
  });

export const levelGraphStyle = (degree: number) =>
  css({
    width: 90,
    height: 90,
    backgroundColor: COLORS.WHITE_TRANSPARENT,
    backgroundImage:
      degree <= 180
        ? `linear-gradient(${degree + 90}deg, transparent 50%, ${
            SECRET_COLORS.HIGHLIGHT_YELLOW
          } 50%), linear-gradient(90deg, ${SECRET_COLORS.HIGHLIGHT_YELLOW} 50%, transparent 50%)`
        : `linear-gradient(${degree - 90}deg, transparent 50%, ${
            COLORS.WHITE_TRANSPARENT
          } 50%), linear-gradient(90deg, ${SECRET_COLORS.HIGHLIGHT_YELLOW} 50%, transparent 50%)`,
    '-webkit-mask': `radial-gradient(transparent 35px, ${COLORS.WHITE_TRANSPARENT} 35px, ${COLORS.WHITE_TRANSPARENT} 40px)`,
    mask: `radial-gradient(transparent 35px, ${COLORS.WHITE_TRANSPARENT} 35px, ${COLORS.WHITE_TRANSPARENT} 40px)`,
    transform: 'scaleX(-1)',
    position: 'absolute',
    top: -5,
    left: -5,
    zIndex: SECRET_LEVELS.LEVEL_BACKGROUND,
  });
