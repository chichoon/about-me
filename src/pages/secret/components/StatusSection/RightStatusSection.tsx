import { css } from '@emotion/react';

import { ExpAndEliteLevelStats } from './ExpAndEliteLevelStats';
import { SkillsAndTalentStats } from './SkillsAndTalentStats';
import { SECRET_LEVELS } from '@/pages/secret/constants';

export const RightStatusSection = () => {
  return (
    <section css={rightStatSectionWrapper}>
      <ExpAndEliteLevelStats />
      <SkillsAndTalentStats />
    </section>
  );
};

export const rightStatSectionWrapper = css({
  maxWidth: '50vw',
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
