import { FootprintType } from '@/types/profileData';
import { BranchListWrapper } from '../BranchListWrapper';

interface Props {
  footprintData: FootprintType[];
}

export const FootprintListMenu = ({ footprintData }: Props) => {
  const min =
    footprintData[footprintData.length - 1].startDateYear * 12 + footprintData[footprintData.length - 1].startDateMonth;
  const max = footprintData[0].startDateYear * 12 + footprintData[0].startDateMonth;

  return (
    <BranchListWrapper>
      <>
        {footprintData.map((footprint) => {
          <div key={`footprint-${footprint.key}`}>{footprint.title}</div>;
        })}
      </>
    </BranchListWrapper>
  );
};
