import Image from 'next/image';

import { LeftStatusSection } from './LeftStatusSection';
import { RightStatusSection } from './RightStatusSection';

export const StatusSection = () => {
  return (
    <div>
      <Image src='' alt='group icon' />
      <Image src='' alt='operator profile' />
      <div>
        <LeftStatusSection />
        <RightStatusSection />
      </div>
    </div>
  );
};
