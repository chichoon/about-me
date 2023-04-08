import { CSSIcon, HTML5Icon, TypescriptIcon } from '@/components/SecretPage/assets';
import { SkillIcon } from './SkillIcon';

import {
  skillIconsWrapperStyle,
  skillInformationWrapperStyle,
  skillRankWrapperStyle,
  skillStatsWrapperStyle,
} from './SkillStats.styles';

export const SkillStats = () => {
  return (
    <div css={skillStatsWrapperStyle}>
      <div css={skillIconsWrapperStyle}>
        <SkillIcon level={7} color='#3178C6'>
          <TypescriptIcon />
        </SkillIcon>
        <SkillIcon level={8} color='#E34F26'>
          <HTML5Icon />
        </SkillIcon>
        <SkillIcon level={9} color='#1572B6'>
          <CSSIcon />
        </SkillIcon>
      </div>
      <div css={skillInformationWrapperStyle}>
        <div css={skillRankWrapperStyle}>
          <span>RANK</span>
          <span>7</span>
        </div>
      </div>
    </div>
  );
};
