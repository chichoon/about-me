import {
  wrapperDivStyle,
  innerDivElementStyle,
  innerDivWrapperStyle,
  innerDivPositionStyle,
  lineStyle,
} from './FileIcon.styles';

export const FileIcon = () => {
  return (
    <div css={wrapperDivStyle}>
      <div css={[innerDivElementStyle, innerDivPositionStyle(0, 0)]} />
      <hr css={lineStyle(false)} />
      <div css={[innerDivElementStyle, innerDivPositionStyle(16, 16)]} />
      <hr css={lineStyle(true)} />
      <div css={[innerDivElementStyle, innerDivPositionStyle(20, 20)]} />
      <div css={innerDivWrapperStyle}>
        <div css={innerDivElementStyle} />
      </div>
    </div>
  );
};
