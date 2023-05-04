import { FootprintType } from '@/types/profileData';
import { BranchListWrapper } from '../BranchListWrapper';
import { FootprintElement } from './FootprintElement';

interface Props {
  footprintData: FootprintType[];
}

export const FootprintListMenu = ({ footprintData }: Props) => {
  const date = new Date();
  const {
    startDateYear,
    startDateMonth,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = footprintData[footprintData.length - 1];
  const {
    endDateYear = date.getFullYear(),
    endDateMonth = date.getMonth() + 1,
    endDateDay = date.getDate(),
  } = footprintData[0];
  const min =
    (fakeDateYear ?? startDateYear) * 12 * 30 + (fakeDateMonth ?? startDateMonth) * 30 + (fakeDateDay ?? startDateDay);
  const max = endDateYear * 12 * 30 + endDateMonth * 30 + endDateDay;

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
