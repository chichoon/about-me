import { NextIcon, PlusIcon, ReactIcon } from '@/components/SecretPage/assets';

import {
  blushShadowStyle,
  detailedJobDescriptionStyle,
  detailedJobIconStyle,
  detailedJobStyle,
  jobTextWrapperStyle,
  jobWrapperStyle,
  stageManageStyle,
  stageWrapperStyle,
  talentStatTopStyle,
  talentStatWrapperStyle,
  talentWrapperStyle,
} from './TalentStat.styles';

export const TalentStats = () => {
  return (
    <div css={talentStatWrapperStyle}>
      <div css={talentStatTopStyle}>
        <div css={jobWrapperStyle}>
          <NextIcon />
          <span>
            Made with
            <br />
            NextJS
          </span>
        </div>
        <div css={detailedJobStyle}>
          <div css={detailedJobIconStyle}>
            <div css={blushShadowStyle} />
            <ReactIcon />
            <div css={jobTextWrapperStyle}>
              <span>React</span>
              <span>JS</span>
            </div>
          </div>
          <div css={detailedJobDescriptionStyle}>
            <div css={stageWrapperStyle}>
              <span>STAGE</span>
              <span>1</span>
            </div>
            <div css={stageManageStyle}>
              <span>관리</span>
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <div css={talentWrapperStyle}>
        <div>
          <span>Next 어렵다</span>
        </div>
        <div>
          <span>아아아아아</span>
        </div>
      </div>
    </div>
  );
};
