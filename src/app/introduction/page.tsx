import { Metadata } from 'next';
import Image from 'next/image';

import { Paragraph } from '@/components';
import { getProfile } from '@/services';

import styles from './introductionPage.module.scss';

export const metadata: Metadata = {
  title: 'Introduction of chichoon',
  description: '치춘의 간단 소개',
  keywords: 'Introduction Page',
};

const Page = async () => {
  const data = await getProfile();
  return (
    <>
      <Image src={data.profileImageRef} alt='Profile' width={200} height={200} className={styles.image} />
      <Paragraph paragraph={data.summaries} lineGap={25} />
    </>
  );
};

export default Page;
