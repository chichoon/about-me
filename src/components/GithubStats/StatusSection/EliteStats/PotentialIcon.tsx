import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SECRET_COLORS } from '@/components/GithubStats/constants';

export const PotentialIcon = () => {
  return (
    <div css={potentialIconWrapperStyle}>
      <div css={potentialParallelogramWrapperStyle(36, 5, 30)}>
        <div css={potentialParallelogramStyle} />
      </div>
      <div css={potentialParallelogramWrapperStyle(72, 25, 17.5)}>
        <div css={potentialParallelogramStyle} />
      </div>
      <div css={potentialParallelogramWrapperStyle(108, 0, 15)}>
        <div css={potentialParallelogramStyle} />
      </div>
      <div css={potentialParallelogramWrapperStyle(144, 20, 30)}>
        <div css={potentialParallelogramStyle} />
      </div>
      <div css={potentialParallelogramWrapperStyle(180, 15, 7.5)}>
        <div css={potentialParallelogramStyle} />
      </div>
    </div>
  );
};

const potentialIconWrapperStyle = css({
  width: 90,
  height: 90,
  position: 'relative',
  filter: `drop-shadow(0 3px 0px ${SECRET_COLORS.HIGHLIGHT_BLUE})`,
});

const potentialParallelogramWrapperStyle = (rotateDeg: number, x: number, y: number) =>
  css({
    position: 'absolute',
    transform: `rotate(${rotateDeg}deg)`,
    top: y,
    left: x,
  });

const potentialParallelogramStyle = css({
  width: 40,
  height: 20,
  backgroundColor: COLORS.WHITE,
  transform: `skewX(45deg) scaleX(0.5) rotate(45deg)`,
});
