import { FootprintType } from '@/types/profileData';
import { Section } from '../Section';

interface Props {
  footprintData: FootprintType[];
}

export const ResumeFootprints = ({ footprintData }: Props) => {
  return (
    <Section title='발자취'>
      <ul>
        {footprintData.map((footprint, index) => (
          <li key={`footprint-${footprint.key}`}>{footprint.title}</li>
        ))}
      </ul>
    </Section>
  );
};
