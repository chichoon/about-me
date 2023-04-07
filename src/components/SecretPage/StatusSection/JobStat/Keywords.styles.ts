import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/SecretPage/constants';
import { SIZES } from '@/styles/sizes';

export const keywordWrapper = css({
  width: 100,
  height: 60,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 5,
});

export const keywordInner = css({
  width: '100%',
  wordBreak: 'keep-all',
  textAlign: 'center',
  borderRadius: 3,
  padding: 2,

  span: {
    userSelect: 'none',
    color: SECRET_COLORS.BUTTON_ICON,
    fontSize: SIZES.$FONT_MS,
    lineHeight: `${SIZES.$FONT_MS}px`,
    height: `${SIZES.$FONT_MS}px`,
    verticalAlign: 'center',
  },
});
