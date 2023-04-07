import { rangeIconStyle, rangeIconWrapperStyle } from './RangeIcon.styles';

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
