import { FootprintType } from '@/types/profileData';
import { FootprintInfoHeader } from './FootprintInfoHeader';

interface Props {
  footprint: FootprintType;
}

export const FootprintPage = ({ footprint }: Props) => {
  return (
    <>
      <FootprintInfoHeader footprint={footprint} />
      <div>{footprint.title}</div>
      <span>{footprint.summary}</span>
    </>
  );
};
