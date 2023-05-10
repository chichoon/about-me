import { Paragraph } from '../Paragraph';
import { Section } from './Section';

import { SIZES } from '@/styles/sizes';

interface Props {
  resumeSummaries: string[];
}

export const ResumeIntroduce = ({ resumeSummaries }: Props) => {
  return (
    <Section title='소개'>
      <Paragraph paragraph={resumeSummaries} fontSize={SIZES.FONT_MS} lineGap={5} />
    </Section>
  );
};
