import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/SecretPage/constants';

export const rangeIconWrapperStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 10px)',
  gridTemplateRows: 'repeat(4, 10px)',
  height: 40,
  padding: 5,
  gap: 0.5,
});

export const rangeIconStyle = (x: number, y: number, isFilled?: boolean) =>
  css({
    gridColumn: x,
    gridRow: y,
    backgroundColor: isFilled ? SECRET_COLORS.BUTTON_ICON : 'none',
    border: `1px solid ${isFilled ? SECRET_COLORS.BUTTON_ICON : SECRET_COLORS.BUTTON_ICON_DIMMED}`,
  });
