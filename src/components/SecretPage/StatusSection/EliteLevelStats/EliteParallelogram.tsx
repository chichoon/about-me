import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';

export const EliteParallelogram = () => {
  return <div css={eliteParallelogramStyle} />;
};

const eliteParallelogramStyle = css({
  width: 70,
  height: 10,
  backgroundColor: COLORS.WHITE,
  transform: 'matrix(1, 0, -1, 1, 0, 0);',
});
