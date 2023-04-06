import { css } from '@emotion/react';

import { NumeralStats } from './NumeralStats';
import { NameAndJobStats } from './NameAndJobStats';
import { SECRET_LEVELS } from '@/pages/secret/constants';

export const LeftStatusSection = () => {
  return (
    <section css={leftStatSectionWrapper}>
      <NumeralStats />
      <NameAndJobStats />
    </section>
  );
};

export const leftStatSectionWrapper = css({
  maxWidth: '50vw',
  padding: 20,
  zIndex: SECRET_LEVELS.LEVEL_UI,
});
