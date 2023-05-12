import { FootprintType } from '@/types/profileData';
import { FootprintInfoHeader } from './FootprintInfoHeader';
import { DescriptionArea } from './DescriptionArea';

interface Props {
  footprint: FootprintType;
}

export const FootprintComponent = ({ footprint }: Props) => {
  return (
    <>
      <FootprintInfoHeader footprint={footprint} />
      <DescriptionArea footprint={footprint} />
    </>
  );
};
