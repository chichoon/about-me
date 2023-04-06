import { css } from '@emotion/react';

import { NumeralStats } from './NumeralStats';
import { NameAndJobStats } from './NameAndJobStats';

export const LeftStatusSection = () => {
  return (
    <section css={leftStatSectionWrapper}>
      <NumeralStats />
      <NameAndJobStats />
    </section>
  );
};

export const leftStatSectionWrapper = css({
  width: '30vw',
  overflow: 'hidden',
});
