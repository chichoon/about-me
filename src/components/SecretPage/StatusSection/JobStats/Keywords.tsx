import { jobStatDivStyle } from './JobStats.styles';
import { keywordInner, keywordWrapper } from './Keywords.styles';

export const Keywords = () => {
  return (
    <div css={keywordWrapper}>
      <div css={[jobStatDivStyle, keywordInner]}>
        <span>원거리</span>
      </div>
      <div css={[jobStatDivStyle, keywordInner]}>
        <span>범위공격 지원 제어형</span>
      </div>
    </div>
  );
};
