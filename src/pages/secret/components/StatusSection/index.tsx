import Image from 'next/image';

import { LeftStatusSection } from './LeftStatusSection';
import { RightStatusSection } from './RightStatusSection';

export const StatusSection = () => {
  return (
    <>
      <LeftStatusSection />
      <RightStatusSection />
    </>
  );
};
