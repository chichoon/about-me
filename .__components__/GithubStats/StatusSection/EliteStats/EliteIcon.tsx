import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SECRET_COLORS } from '../../constants';

export const EliteIcon = () => {
  return (
    <div css={eliteIconWrapperStyle}>
      <div css={eliteParallelogramStyle(2)} />
      <div css={eliteParallelogramStyle(3)} />
      <div css={eliteParallelogramStyle(6)} />
      <div css={eliteParallelogramStyle(9)} />
    </div>
  );
};

const eliteIconWrapperStyle = css({
  width: 90,
  height: 90,
  position: 'relative',
});

const eliteParallelogramStyle = (index: number) =>
  css({
    width: 50,
    height: 20,
    backgroundColor: COLORS.WHITE,
    filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW_THICK})`,
    transform: index % 2 ? 'skewX(45deg) scaleX(0.5) rotate(45deg)' : 'skewX(-45deg) scaleX(0.5) rotate(-45deg)',
    position: 'absolute',
    top: (index % 2 ? (index / 3) * 8 : (index / 2) * 8) + 10,
    left: index % 2 ? 10 : 30,
    zIndex: index % 2 ? 15 - index : 10 - index,
  });
