import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/pages/secret/constants';

export const wrapperDivStyle = css({
  position: 'relative',
  width: 25,
  height: 25,
});

export const innerDivWrapperStyle = css({
  position: 'absolute',
  top: 6,
  right: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 8,
  height: 8,
  border: `1px solid ${SECRET_COLORS.BUTTON_ICON}`,
});

export const innerDivElementStyle = (top: number, right: number) =>
  css({
    position: 'absolute',
    backgroundColor: SECRET_COLORS.BUTTON_ICON,
    width: 4,
    height: 4,
    top,
    right,
  });

export const lineStyle = (isLeftToRight: boolean) => {
  return css({
    position: 'absolute',
    width: isLeftToRight ? 10 : 20,
    height: 1,
    top: isLeftToRight ? 16 : 10,
    right: isLeftToRight ? 2 : 0,
    backgroundColor: SECRET_COLORS.BUTTON_ICON,
    border: 0,
    transform: isLeftToRight ? 'rotate(60deg)' : 'rotate(-45deg)',
  });
};
