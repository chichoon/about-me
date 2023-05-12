import { css } from '@emotion/react';

import { SECRET_COLORS, SECRET_LEVELS } from '../constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const ExpStats = () => {
  const percentage = 40;
  const degree = 360 - (percentage * 360) / 100;
  return (
    <div css={expStatsWrapperStyle}>
      <div css={levelCircleStyle}>
        <div css={levelGraphStyle(degree)} />
        <span>LV</span>
        <span>90</span>
      </div>
      <div css={expWrapperStyle}>
        <div css={expInnerRowStyle}>
          <div css={expBarStyle}>
            <span>EXP</span>
            <span>{percentage} / 100</span>
          </div>
          <div css={fillingBarStyle} />
        </div>
        <span css={levelAmountLeftStyle}>/ 90</span>
      </div>
    </div>
  );
};

const expStatsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 400,
  marginBottom: 10,
});

const levelCircleStyle = () =>
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
      fontSize: SIZES.FONT_L,
      lineHeight: `${SIZES.FONT_L}px`,
      zIndex: SECRET_LEVELS.LEVEL_UI,
      marginTop: 5,
    },

    'span:last-child': {
      fontSize: SIZES.FONT_XXXL,
      lineHeight: `${SIZES.FONT_XXXL}px`,
      marginTop: 0,
    },
  });

const levelGraphStyle = (degree: number) =>
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
    webkitMask: `radial-gradient(transparent 35px, ${COLORS.WHITE_TRANSPARENT} 35px, ${COLORS.WHITE_TRANSPARENT} 40px)`,
    mask: `radial-gradient(transparent 35px, ${COLORS.WHITE_TRANSPARENT} 35px, ${COLORS.WHITE_TRANSPARENT} 40px)`,
    transform: 'scaleX(-1)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: SECRET_LEVELS.LEVEL_BACKGROUND,
  });

const levelAmountLeftStyle = css({
  position: 'absolute',
  bottom: -15,
  left: -7,
  color: COLORS.WHITE,
  fontSize: SIZES.FONT_MS,
  fontWeight: 700,
});

const expWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
});

const expInnerRowStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 300,
  height: 40,
});

const expBarStyle = css({
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

  webkitMask: `radial-gradient(circle, transparent 45px, ${SECRET_COLORS.BG_UI} 45px) -190px`,
  mask: `radial-gradient(circle, transparent 45px, ${SECRET_COLORS.BG_UI} 45px) -190px`,

  span: {
    marginLeft: -10,
    color: COLORS.WHITE,
    fontSize: SIZES.FONT_M,
    lineHeight: `${SIZES.FONT_M}px`,
    marginBottom: 3,
  },

  'span:last-child': {
    fontSize: SIZES.FONT_S,
    lineHeight: `${SIZES.FONT_S}px`,
    marginBottom: 0,
  },
});

const fillingBarStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 100,
  height: 40,
  borderRadius: 3,
  position: 'absolute',
  top: 0,
  right: 25,
});
