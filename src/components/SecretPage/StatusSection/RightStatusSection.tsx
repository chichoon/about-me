import { css } from '@emotion/react';

import { SECRET_LEVELS } from '@/components/SecretPage/constants';
import { SkillsAndTalentStats } from './SkillsAndTalentStats';
import { ExpStats } from './ExpStats.tsx';
import { EliteStats } from './EliteStats';

export const RightStatusSection = () => {
  return (
    <section css={rightStatSectionWrapper}>
      <ExpStats />
      <EliteStats />
      <SkillsAndTalentStats />
    </section>
  );
};

export const rightStatSectionWrapper = css({
  maxWidth: '50vw',
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
