import { useEffect, useState } from 'react';

import { FootprintType } from '@/types/profileData';
import { FootprintInfoHeader } from './FootprintInfoHeader';
import { FootprintAchievementList } from './FootprintAchievementList';
import { DescriptionList } from '../DescriptionList';
import { DescriptionSelectTab } from '../DescriptionSelectTab';

interface Props {
  footprint: FootprintType;
}

export const FootprintPage = ({ footprint }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const tabNames = ['발자취 설명', footprint.achievements && '주요 활동'];

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [footprint]);

  return (
    <>
      <FootprintInfoHeader footprint={footprint} />
      <DescriptionSelectTab
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
        tabNames={tabNames}
      />
      {selectedTabIndex === 0 ? (
        <DescriptionList descriptionData={footprint.description} />
      ) : (
        <FootprintAchievementList achievementData={footprint.achievements ?? []} />
      )}
    </>
  );
};
