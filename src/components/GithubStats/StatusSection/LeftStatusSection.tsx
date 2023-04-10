import { css } from '@emotion/react';

import { SECRET_LEVELS } from '@/components/GithubStats/constants';
import { NumeralStats } from './NumeralStats';
import { NameArea } from './NameArea';
import { JobStats } from './JobStats';

export const LeftStatusSection = () => {
  return (
    <section css={leftStatSectionWrapper}>
      <NumeralStats />
      <NameArea />
      <JobStats />
    </section>
  );
};

export const leftStatSectionWrapper = css({
  maxWidth: '50vw',
  padding: 20,
  zIndex: SECRET_LEVELS.LEVEL_UI,
});