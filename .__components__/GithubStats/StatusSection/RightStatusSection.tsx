import { css } from '@emotion/react';

import { SECRET_LEVELS } from '../constants';
import { ExpStats } from './ExpStats';
import { EliteStats } from './EliteStats';
import { SkillStats } from './SkillStats';
import { TalentStats } from './TalentStats';

export const RightStatusSection = () => {
  return (
    <section css={rightStatSectionWrapper}>
      <ExpStats />
      <EliteStats />
      <SkillStats />
      <TalentStats />
    </section>
  );
};

export const rightStatSectionWrapper = css({
  maxWidth: '50vw',
  padding: 20,
  paddingRight: 0,
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
