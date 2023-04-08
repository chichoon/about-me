import { EliteIcon } from './EliteIcon';
import { PotentialIcon } from './PotentialIcon';

import { eliteInnerBarStyle, eliteStatsWrapperStyle, eliteWrapperStyle } from './EliteStats.styles';

export const EliteStats = () => {
  return (
    <div css={eliteStatsWrapperStyle}>
      <div css={eliteWrapperStyle}>
        <EliteIcon />
        <div css={eliteInnerBarStyle}>
          <span>정예화</span>
          <div>
            <span>MAX</span>
          </div>
        </div>
      </div>
      <div css={eliteWrapperStyle}>
        <PotentialIcon />
        <div css={eliteInnerBarStyle}>
          <span>잠재능력</span>
          <div>
            <span>MAX</span>
          </div>
        </div>
      </div>
    </div>
  );
};
