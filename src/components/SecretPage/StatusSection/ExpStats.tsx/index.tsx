import {
  expBarStyle,
  expInnerRowStyle,
  expStatsWrapperStyle,
  expWrapperStyle,
  fillingBarStyle,
  levelAmountLeftStyle,
  levelCircleStyle,
  levelGraphStyle,
} from './ExpStats.styles';

export const ExpStats = () => {
  const percentage = 40;
  const degree = 360 - (percentage * 360) / 100;
  return (
    <div css={expStatsWrapperStyle}>
      <div css={levelCircleStyle}>
        <div css={levelGraphStyle(degree)} />
        <span>LV</span>
        <span>90</span>
      </div>
      <div css={expWrapperStyle}>
        <div css={expInnerRowStyle}>
          <div css={expBarStyle}>
            <span>EXP</span>
            <span>{percentage} / 100</span>
          </div>
          <div css={fillingBarStyle} />
        </div>
        <span css={levelAmountLeftStyle}>/ 90</span>
      </div>
    </div>
  );
};
