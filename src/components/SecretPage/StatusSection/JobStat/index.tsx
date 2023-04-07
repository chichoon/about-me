import { FrontIcon } from '@/components/SecretPage/assets';
import { RangeIcon } from './RangeIcon';
import { Keywords } from './Keywords';

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
      <Keywords />
    </div>
  );
};
