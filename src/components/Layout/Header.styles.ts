import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { SIZES } from '@/styles/sizes';

export const headerWrapperStyle = css({
  backgroundColor: COLORS.WHITE,
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: 150,
  padding: '0 25px',
  marginBottom: 25,

  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },
});

export const headerImageStyle = css({
  borderRadius: 5,
  marginTop: 25,
  width: 125,
  height: 125,

  [getResponsiveAfter('SD')]: {
    marginTop: 50,
    width: 150,
    height: 150,
  },
});

export const headerProfileSectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: 300,
  height: 100,
  marginTop: 25,
  marginLeft: 25,
  overflowX: 'scroll',
  overflowY: 'hidden',

  [getResponsiveAfter('SD')]: {
    justifyContent: 'flex-start',
    width: 700,
    marginTop: 50,
  },
});

export const headerProfileNamespaceStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,

  h1: {
    fontSize: SIZES.$FONT_XL,
  },

  a: {
    width: 30,
    height: 30,
    marginLeft: 25,
  },

  [getResponsiveAfter('SD')]: {
    width: 700,
    marginTop: 25,
  },
});

export const headerIconStyle = css({
  width: 30,
  height: 30,
});

export const headerProfileCommentStyle = css({
  display: '-webkit-box',
  width: '100%',
  fontSize: SIZES.$FONT_L,
  overflow: 'hidden',
  lineClamp: 2,
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,

  [getResponsiveAfter('SD')]: {
    lineClamp: 1,
    '-webkit-line-clamp': 1,
  },
});

export const navTabsStyle = css({
  width: '100vw',
  height: 50,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 50px',

  [getResponsiveAfter('SD')]: {
    padding: '0 275px',
  },
});

export const tabStyle = (isSelected: boolean) =>
  css({
    background: isSelected ? COLORS.WHITE : 'none',
    width: 100,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s linear',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    span: {
      userSelect: 'none',
      fontSize: SIZES.$FONT_M,
    },

    ':hover': {
      backgroundColor: isSelected ? COLORS.WHITE : COLORS.GRAYE,
    },
  });
