import { FootprintType } from '@/types/profileData';

interface Props {
  footprint: FootprintType;
}

export const FootprintPage = ({ footprint }: Props) => {
  return (
    <>
      <div>{footprint.title}</div>
      <span>{footprint.summary}</span>
    </>
  );
};
