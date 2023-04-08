import { EliteIcon } from './EliteIcon';

import { eliteStatsWrapperStyle, eliteWrapperStyle } from './EliteStats.styles';

export const EliteStats = () => {
  return (
    <div css={eliteStatsWrapperStyle}>
      <div css={eliteWrapperStyle}>
        <EliteIcon />
        <div>
          <span>정예화</span>
          <div>
            <span>MAX</span>
          </div>
        </div>
      </div>
      <div>
        <div>{/* 잠재능력 아이콘 */}</div>
        <div>
          <span>잠재능력</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};
