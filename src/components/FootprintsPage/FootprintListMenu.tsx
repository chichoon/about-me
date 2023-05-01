import { FootprintType } from '@/types/profileData';
import { BranchListWrapper } from '../BranchListWrapper';
import { FootprintElement } from './FootprintElement';

interface Props {
  footprintData: FootprintType[];
}

export const FootprintListMenu = ({ footprintData }: Props) => {
  const min =
    footprintData[footprintData.length - 1].startDateYear * 12 * 30 +
    footprintData[footprintData.length - 1].startDateMonth * 30 +
    1;
  const max = footprintData[0].startDateYear * 12 * 30 + footprintData[0].startDateMonth * 30 + 1;

  return (
    <BranchListWrapper>
      <>
        {footprintData.map((footprint, index) => (
          <FootprintElement
            key={`footprint-${footprint.key}`}
            footprint={footprint}
            index={index}
            minDay={min}
            maxDay={max}
          />
        ))}
      </>
    </BranchListWrapper>
  );
};
