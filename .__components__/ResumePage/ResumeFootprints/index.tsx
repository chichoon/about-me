import { css } from '@emotion/react';

import { FootprintType } from '@/types/profileData';
import { FootprintComponent } from './FootprintComponent';
import { Section } from '../Section';

interface Props {
  footprintData: FootprintType[];
}

export const ResumeFootprints = ({ footprintData }: Props) => {
  return (
    <Section title='발자취'>
      <ul css={footprintsWrapper}>
        {footprintData.map((footprint) => (
          <FootprintComponent key={`footprint-${footprint.key}`} footprint={footprint} />
        ))}
      </ul>
    </Section>
  );
};

const footprintsWrapper = css({
  width: '100%',
});
