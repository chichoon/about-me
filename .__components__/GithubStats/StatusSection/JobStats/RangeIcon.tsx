import { css } from '@emotion/react';

import { SECRET_COLORS } from '../../constants';

export const RangeIcon = () => {
  return (
    <div css={rangeIconWrapperStyle}>
      <div css={rangeIconStyle(2, 1)} />
      <div css={rangeIconStyle(3, 1)} />
      <div css={rangeIconStyle(4, 1)} />
      <div css={rangeIconStyle(2, 2)} />
      <div css={rangeIconStyle(3, 2, true)} />
      <div css={rangeIconStyle(4, 2)} />
      <div css={rangeIconStyle(2, 3)} />
      <div css={rangeIconStyle(3, 3)} />
      <div css={rangeIconStyle(4, 3)} />
    </div>
  );
};
const rangeIconWrapperStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 10px)',
  gridTemplateRows: 'repeat(4, 10px)',
  height: 40,
  padding: 5,
  gap: 0.5,
});

const rangeIconStyle = (x: number, y: number, isFilled?: boolean) =>
  css({
    gridColumn: x,
    gridRow: y,
    backgroundColor: isFilled ? SECRET_COLORS.BUTTON_ICON : 'none',
    border: `1px solid ${isFilled ? SECRET_COLORS.BUTTON_ICON : SECRET_COLORS.BUTTON_ICON_DIMMED}`,
  });
