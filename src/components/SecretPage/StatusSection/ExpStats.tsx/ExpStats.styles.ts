import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS } from '@/components/SecretPage/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const expStatsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 400,
  marginBottom: 10,
});

export const levelCircleStyle = () =>
  css({
    width: 90,
    height: 90,
    borderRadius: 50,
    border: `5px solid transparent`,
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
    width: 80,
    height: 80,
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
    top: 0,
    left: 0,
    zIndex: SECRET_LEVELS.LEVEL_BACKGROUND,
  });

export const levelAmountLeftStyle = css({
  position: 'absolute',
  bottom: -15,
  left: -7,
  color: COLORS.WHITE,
  fontSize: SIZES.$FONT_MS,
  fontWeight: 700,
});

export const expWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
});

export const expInnerRowStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 300,
  height: 40,
});

export const expBarStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  position: 'absolute',
  top: 0,
  left: 0,
  width: 300,
  height: 40,
  borderRadius: 3,
  paddingLeft: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  '-webkit-mask': `radial-gradient(circle, transparent 45px, ${SECRET_COLORS.BG_UI} 45px) -190px`,
  mask: `radial-gradient(circle, transparent 45px, ${SECRET_COLORS.BG_UI} 45px) -190px`,

  span: {
    marginLeft: -10,
    color: COLORS.WHITE,
    fontSize: SIZES.$FONT_M,
    lineHeight: `${SIZES.$FONT_M}px`,
    marginBottom: 3,
  },

  'span:last-child': {
    fontSize: SIZES.$FONT_S,
    lineHeight: `${SIZES.$FONT_S}px`,
    marginBottom: 0,
  },
});

export const fillingBarStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 100,
  height: 40,
  borderRadius: 3,
  position: 'absolute',
  top: 0,
  right: 25,
});
