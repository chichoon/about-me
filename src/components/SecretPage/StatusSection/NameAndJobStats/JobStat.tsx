import { FrontIcon } from '@/components/SecretPage/assets';
import { RangeIcon } from './RangeIcon';

import { jobIconStyle, jobStatDivStyle, jobStatWrapperStyle, rangeWrapperStyle } from './JobStat.styles';

export const JobStat = () => {
  return (
    <div css={jobStatWrapperStyle}>
      <div css={[jobStatDivStyle, jobIconStyle]}>
        <FrontIcon />
      </div>
      <div css={[jobStatDivStyle, rangeWrapperStyle]}>
        <RangeIcon />
        <span>공격 범위</span>
      </div>
      <div>
        <div css={[jobStatDivStyle]}>
          <span>원거리</span>
        </div>
        <div css={[jobStatDivStyle]}>
          <span>범위공격 지원 제어형</span>
        </div>
      </div>
    </div>
  );
};
