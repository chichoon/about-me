import { Metadata } from 'next';

import { BadgeList } from '@/components';
import { getProfile } from '@/services';

export const metadata: Metadata = {
  title: 'About chichoon',
  description: '치춘입니다',
  keywords: 'Main Page',
};

const Page = async () => {
  const data = await getProfile();
  return (
    <>
      <BadgeList stacks={data.stacks} isCentered />
    </>
  );
};

export default Page;
