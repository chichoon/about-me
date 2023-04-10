import { FrontIcon } from '@/components/GithubStats/assets';
import { RangeIcon } from './RangeIcon';

import {
  jobIconStyle,
  jobStatDivStyle,
  jobStatWrapperStyle,
  rangeWrapperStyle,
  keywordInner,
  keywordWrapper,
} from './JobStats.styles';

export const JobStats = () => {
  return (
    <div css={jobStatWrapperStyle}>
      <div css={[jobStatDivStyle, jobIconStyle]}>
        <FrontIcon />
      </div>
      <div css={[jobStatDivStyle, rangeWrapperStyle]}>
        <RangeIcon />
        <span>커밋 범위</span>
      </div>
      <div css={keywordWrapper}>
        <div css={[jobStatDivStyle, keywordInner]}>
          <span>
            Original UI Design & Background
            <br />ⓒ Hypergryph
          </span>
        </div>
      </div>
    </div>
  );
};