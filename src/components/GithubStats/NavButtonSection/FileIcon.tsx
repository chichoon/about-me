import { css } from '@emotion/react';

import { SECRET_COLORS } from '@/components/GithubStats/constants';

export const FileIcon = () => {
  return (
    <div css={wrapperDivStyle}>
      <div css={[innerDivElementStyle(0, 0)]} />
      <hr css={lineStyle(false)} />
      <div css={[innerDivElementStyle(16, 16)]} />
      <hr css={lineStyle(true)} />
      <div css={[innerDivElementStyle(20, 1)]} />
      <div css={innerDivWrapperStyle}>
        <div css={innerDivElementStyle(1, 1)} />
      </div>
    </div>
  );
};

const wrapperDivStyle = css({
  position: 'relative',
  width: 25,
  height: 25,
});

const innerDivWrapperStyle = css({
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

const innerDivElementStyle = (top: number, right: number) =>
  css({
    position: 'absolute',
    backgroundColor: SECRET_COLORS.BUTTON_ICON,
    width: 4,
    height: 4,
    top,
    right,
  });

const lineStyle = (isLeftToRight: boolean) => {
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
