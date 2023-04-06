import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/pages/secret/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const statChipWrapperStyle = css({
  width: 100,
  height: 20,
  backgroundColor: COLORS.WHITE_TRANSPARENT,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: 2,
});

export const iconWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,

  svg: {
    borderRadius: 2,
    width: 18,
    height: 18,
    fill: COLORS.WHITE,
  },
});

export const valueWrapperStyle = (percentage: number) =>
  css({
    userSelect: 'none',
    cursor: 'default',
    height: 20,
    flex: 1,
    background: `linear-gradient(to right, ${SECRET_COLORS.BUTTON_ICON_DARK} 0 ${percentage}%, #00000000 ${percentage}% 100%)`,

    span: {
      lineHeight: '20px',
      verticalAlign: 'center',
      fontSize: SIZES.$FONT_M,
    },
  });
