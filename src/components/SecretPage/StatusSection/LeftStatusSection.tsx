import { css } from '@emotion/react';

import { SECRET_LEVELS } from '@/components/SecretPage/constants';
import { NumeralStats } from './NumeralStats';
import { NameArea } from './NameArea';
import { JobStat } from './JobStat';

export const LeftStatusSection = () => {
  return (
    <section css={leftStatSectionWrapper}>
      <NumeralStats />
      <NameArea />
      <JobStat />
    </section>
  );
};

export const leftStatSectionWrapper = css({
  maxWidth: '50vw',
  padding: 20,
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
