import { Metadata } from 'next';

import { BranchListWrapper, FootprintElement, Layout } from '@/components';
import { getFootprints, getProfile } from '@/services';

export const metadata: Metadata = {
  title: 'Footprints of chichoon',
  description: '치춘의 발자취',
  keywords: 'Footprints Page',
};

const Page = async () => {
  const profileData = await getProfile();
  const footprintData = await getFootprints();

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
    <Layout profileData={profileData}>
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
    </Layout>
  );
};

export default Page;
