import { css } from '@emotion/react';

import { ExpAndEliteLevelStats } from './ExpAndEliteLevelStats';
import { SkillsAndTalentStats } from './SkillsAndTalentStats';

export const RightStatusSection = () => {
  return (
    <section css={rightStatSectionWrapper}>
      <ExpAndEliteLevelStats />
      <SkillsAndTalentStats />
    </section>
  );
};

export const rightStatSectionWrapper = css({
  width: '30vw',
  overflow: 'hidden',
});
