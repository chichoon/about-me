import {
  expBarStyle,
  expStatsWrapperStyle,
  expWrapperStyle,
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
        <div css={expBarStyle}>
          <span>EXP</span>
          <span>0/100</span>
        </div>
        <span css={levelAmountLeftStyle}>/ 90</span>
      </div>
    </div>
  );
};
