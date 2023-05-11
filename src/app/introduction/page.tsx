import Head from 'next/head';
import Image from 'next/image';

import { Layout, Paragraph } from '@/components';
import { getProfile } from '@/services';

import styles from './introductionPage.module.scss';

const Page = async () => {
  const data = await getProfile();
  return (
    <Layout profileData={data}>
      <>
        <Head>
          <meta name='title' content='Introduction of chichoon' />
          <meta name='description' content='치춘의 간단 소개' />
          <meta name='keywords' content='Introduction Page' />
        </Head>
        <Image src={data.profileImageRef} alt='Profile' width={200} height={200} className={styles.image} />
        <Paragraph paragraph={data.summaries} lineGap={25} />
      </>
    </Layout>
  );
};

export default Page;
