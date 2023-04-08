import { css } from '@emotion/react';

import { SECRET_LEVELS } from '@/components/SecretPage/constants';
import { ExpStats } from './ExpStats.tsx';
import { EliteStats } from './EliteStats';
import { SkillStats } from './SkillStats';

export const RightStatusSection = () => {
  return (
    <section css={rightStatSectionWrapper}>
      <ExpStats />
      <EliteStats />
      <SkillStats />
    </section>
  );
};

export const rightStatSectionWrapper = css({
  maxWidth: '50vw',
  padding: 20,
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
