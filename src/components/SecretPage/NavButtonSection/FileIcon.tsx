import { wrapperDivStyle, innerDivElementStyle, innerDivWrapperStyle, lineStyle } from './FileIcon.styles';

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
